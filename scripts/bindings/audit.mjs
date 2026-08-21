import { readFileSync, readdirSync } from 'node:fs';
import * as path from 'node:path';
import { ROOT } from '../typings/config.mjs';
import { inferConverter } from './converters.mjs';
import { accessors, buildModel } from './parse.mjs';
import { pluginModel, tablesFor } from './plugin.mjs';

const SRC = path.join(ROOT, 'src', 'ui-massifmaps');

/** which converter each decorator implies, so a mismatch can be reported */
const DECORATOR_KIND = {
    nativeProperty: 'primitive',
    nativeColorProperty: 'converted',
    nativeNColorProperty: 'converted',
    nativeMassifImageProperty: 'converted',
    nativeImageProperty: 'converted',
    nativeMapVecProperty: 'converted',
    nativeMapRangeProperty: 'converted',
    nativeStringListProperty: 'converted',
    nativeFontProperty: 'converted',
    nativeEnumProperty: 'enum',
    nativeAndroidEnumProperty: 'enum'
};

function walk(dir, out = []) {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
        if (e.name === 'typings' || e.name === 'bindings') continue;
        const p = path.join(dir, e.name);
        if (e.isDirectory()) walk(p, out);
        else if (e.name.endsWith('.android.ts') || e.name.endsWith('.ios.ts')) out.push(p);
    }
    return out;
}

/** `export class MarkerStyleBuilder extends BillboardStyleBuilder<com.massifmaps.styles.MarkerStyleBuilder, ...>` */
function pluginClasses(file) {
    const src = readFileSync(file, 'utf8');
    const found = [];
    const re = /export (?:abstract )?class (\w+)[^{]*?<\s*(?:com\.massifmaps\.[\w.]*\.(\w+)|MSF(\w+))\s*,/g;
    for (const m of src.matchAll(re)) {
        const native = m[2] ?? m[3];
        const bodyStart = src.indexOf('{', m.index + m[0].length - 1);
        let depth = 0;
        let i = bodyStart;
        for (;;) {
            if (src[i] === '{') depth++;
            else if (src[i] === '}') {
                depth--;
                if (depth === 0) break;
            }
            i++;
        }
        const body = src.slice(bodyStart, i);
        const props = [];
        for (const d of body.matchAll(/@(\w+)(\([^)]*\))?\s+(\w+)\s*[?:]/g)) {
            if (d[1] === 'styleBuilderProperty') continue;
            // a decorator may point at a differently named native accessor
            const opts = d[2] ?? '';
            const getter = opts.match(/nativeGetterName:\s*'(\w+)'/)?.[1];
            const setter = opts.match(/nativeSetterName:\s*'(\w+)'/)?.[1];
            props.push({ decorator: d[1], key: d[3], getter, setter });
        }
        found.push({ jsName: m[1], native, props, file });
    }
    return found;
}

export function audit() {
    const { model } = buildModel();
    const byName = pluginModel();
    const rows = [];

    /** a property declared on a base class is still legitimately exposed on the subclass */
    const chainAccessors = (name) => {
        const out = new Map();
        const seen = new Set();
        let cur = model.get(name);
        while (cur && !seen.has(cur.name)) {
            seen.add(cur.name);
            for (const p of accessors(cur.methods)) {
                if (!out.has(p.key)) out.set(p.key, p);
            }
            const sup = cur.extends ? cur.extends.split('.').pop() : null;
            cur = sup ? model.get(sup) : null;
        }
        return out;
    };

    for (const file of walk(SRC)) {
        for (const cls of pluginClasses(file)) {
            const sdk = model.get(cls.native);
            if (!sdk) continue;
            // a wrapper around one of our own additions subclasses carries properties the
            // SDK base does not declare; those are ours, not drift
            if (/Impl$/.test(cls.jsName)) continue;
            const props = accessors(sdk.methods);
            const known = chainAccessors(cls.native);

            const byGetter = new Map([...known.values()].map((p) => [p.getter, p]));
            for (const p of cls.props) {
                const match = known.get(p.key) ?? (p.getter ? byGetter.get(p.getter) : undefined);
                if (!match) {
                    rows.push({ kind: 'dead', file, cls: cls.jsName, key: p.key, detail: `no ${p.key} accessor on ${cls.native}` });
                    continue;
                }
                const want = inferConverter(match.nativeType);
                const have = DECORATOR_KIND[p.decorator];
                if (have && want.kind !== 'native' && have !== want.kind) {
                    rows.push({
                        kind: 'converter',
                        file, cls: cls.jsName, key: p.key,
                        detail: `@${p.decorator} but ${match.nativeType} implies ${want.kind}${want.converter ? ` (${want.converter})` : ''}`
                    });
                }
            }

            // a binding table exposes every accessor it carries, so only decorator-only
            // classes can still be missing anything
            const declared = new Set(cls.props.map((p) => p.key));
            for (const table of tablesFor(cls.jsName, byName)) {
                const t = model.get(table);
                if (t) for (const p of accessors(t.methods)) declared.add(p.key);
            }
            const missing = props.filter((p) => !declared.has(p.key)).map((p) => p.key);
            if (missing.length) {
                rows.push({ kind: 'missing', file, cls: cls.jsName, key: '', detail: `${missing.length} unexposed: ${missing.join(', ')}` });
            }
        }
    }
    return rows;
}
