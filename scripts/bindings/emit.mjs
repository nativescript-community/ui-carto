import { mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import * as path from 'node:path';
import { PACKAGE_DIR, ROOT } from '../typings/config.mjs';
import { enumDeclarations, inferConverter } from './converters.mjs';
import { accessors, buildModel } from './parse.mjs';

export const BINDINGS_DIR = path.join(ROOT, 'src', 'ui-massifmaps', 'bindings');

const HEADER = [
    '// GENERATED FILE - do not edit by hand.',
    '// Regenerate with `npm run bindings`.',
    ''
].join('\n');

/** relative import path from bindings/<pkg>/ back to a module under src/ui-massifmaps/ */
function relImport(pkg, target) {
    const up = '../'.repeat(pkg.split('.').length + 1);
    return (up + target).replace(/\\/g, '/');
}

/**
 * The forwarders `bindNative` installs, as a TypeScript interface.
 *
 * Without this the generated table is invisible to the compiler: a class merged with
 * only `Accessors` shows `restrictedPanning` but not `setRestrictedPanning`, even though
 * both work at runtime. Parameter names are gone by the time the ambient typings are
 * parsed, so they come out as arg0/arg1 - the types are what matter.
 */
/**
 * The TypeScript spelling of a native type. `as: 'in'` widens to what a converter will
 * accept, `as: 'out'` is what actually comes back. An enum the plugin does not re-export
 * degrades to `number`, which is what it is on the JS side anyway.
 */
function tsType(nativeType, as) {
    if (nativeType === 'void') return 'void';
    const info = inferConverter(nativeType);
    if (info.kind === 'enum' && !enumDeclarations().has(info.enumName)) return 'number';
    return as === 'out' ? (info.returns ?? info.type) : info.type;
}

function emitMethods(cls) {
    const out = [];
    for (const m of cls.methods) {
        if (m.static) continue;
        const args = m.params.map((t, i) => `arg${i}: ${tsType(t, 'in')}`).join(', ');
        out.push(`    ${m.name}(${args}): ${tsType(m.returns, 'out')};`);
    }
    return out.sort();
}

function emitClass(cls) {
    const props = accessors(cls.methods);
    const names = cls.methods.map((m) => m.name).sort();
    const lines = [HEADER];

    // imports the generated Accessors/Methods interfaces need, from both the accessor
    // types and every method parameter and return type
    const core = new Set();
    const local = new Map();
    const typesUsed = [
        ...props.map((p) => ({ nativeType: p.nativeType })),
        ...cls.methods.flatMap((m) => [...m.params, m.returns].map((t) => ({ nativeType: t })))
    ];
    for (const p of typesUsed) {
        const info = inferConverter(p.nativeType);
        for (const n of info.imports?.['@nativescript/core'] ?? []) core.add(n);
        if (info.plugin) {
            const from = relImport(cls.pkg, info.plugin.module);
            if (!local.has(from)) local.set(from, new Set());
            for (const n of info.plugin.names) local.get(from).add(n);
        }
        if (info.kind === 'enum') {
            const home = enumDeclarations().get(info.enumName);
            if (home) {
                const from = relImport(cls.pkg, home);
                if (!local.has(from)) local.set(from, new Set());
                local.get(from).add(info.enumName);
            }
        }
    }
    if (core.size) lines.push(`import { ${[...core].sort().join(', ')} } from '@nativescript/core';`);
    for (const [from, names2] of [...local].sort()) {
        lines.push(`import { ${[...names2].sort().join(', ')} } from '${from}';`);
    }
    if (core.size || local.size) lines.push('');

    lines.push(`/** com.massifmaps.${cls.pkg}.${cls.name} / MSF${cls.name} */`);
    lines.push(`export const METHODS = [${names.map((n) => `'${n}'`).join(', ')}] as const;`);
    lines.push('');
    const met = emitMethods(cls);
    lines.push('/** the forwarders METHODS installs, so they are visible to TypeScript */');
    lines.push(met.length ? `export interface Methods {\n${met.join('\n')}\n}` : 'export interface Methods {}');
    lines.push('');

    if (props.length) {
        const sorted = props.sort((a, b) => a.key.localeCompare(b.key));
        lines.push('export const ACCESSORS: Record<string, [string, string]> = {');
        for (const p of sorted) {
            lines.push(`    ${p.key}: ['${p.getter}', '${p.setter}'],`);
        }
        lines.push('};');
        lines.push('');
        lines.push('/** public shape of the accessors this class declares itself */');
        lines.push('export interface Accessors {');
        for (const p of sorted) {
            const info = inferConverter(p.nativeType);
            let type = info.type;
            if (info.kind === 'enum' && !enumDeclarations().has(info.enumName)) {
                type = 'number';
            }
            const note = info.kind === 'native' || info.kind === 'enum' ? `  // ${p.nativeType}` : '';
            lines.push(`    ${p.key}: ${type};${note}`);
        }
        lines.push('}');
        lines.push('');
        lines.push('/** properties needing a converter, and which one */');
        const conv = sorted.map((p) => [p.key, inferConverter(p.nativeType)]).filter(([, i]) => i.converter);
        lines.push(`export const CONVERTERS = [${conv.map(([k, i]) => `['${k}', '${i.converter}']`).join(', ')}] as const;`);
    } else {
        lines.push('export const ACCESSORS: Record<string, [string, string]> = {};');
        lines.push('');
        lines.push('export interface Accessors {}');
        lines.push('');
        lines.push('export const CONVERTERS = [] as const;');
    }
    lines.push('');

    const sel = Object.entries(cls.selectors).sort(([a], [b]) => a.localeCompare(b));
    if (sel.length) {
        lines.push('/** ObjC concatenates selector parts, so these names differ on iOS */');
        lines.push('export const SELECTORS: Record<string, string> = {');
        for (const [k, v] of sel) {
            lines.push(`    ${k}: '${v}',`);
        }
        lines.push('};');
    } else {
        lines.push('export const SELECTORS: Record<string, string> = {};');
    }
    return lines.join('\n') + '\n';
}

/**
 * Android matches `package:Class`, iOS matches `clangModule:ObjCInterface`.
 * Both files come from the same model so they cannot drift apart.
 */
function emitApiUsage(model, enums) {
    /**
     * Seeds the model cannot yield, because none of them is a bound class:
     *
     * - the whole facade package - `MassifApi` and every type it hands back. Strip it and the
     *   plugin reports "this build has no surface API", which reads as a wrongly built SDK.
     * - the whole ui package: the views, their GL bases, and `BaseMapView`. A class is kept
     *   without its base and without the types in its signatures, so a missing one costs either
     *   an inherited method (`MapView.onResume` - "not a function") or a whole call
     *   (`getBaseMapView`, whose return type degrades to Object - NoSuchMethodError).
     *   Wildcarded because three separate misses here were three separate crashes.
     */
    const androidUses = new Set(['com.nativescript.massifmaps*:*', 'com.massifmaps.api*:*', 'com.massifmaps.ui*:*', 'android.opengl:GLSurfaceView']);
    const iosUses = new Set(['MassifMapsAdditions:*', 'nsswiftsupport:NSMSF*']);
    for (const cls of model.values()) {
        androidUses.add(`com.massifmaps.${cls.pkg}:${cls.name}`);
        iosUses.add(`MassifMaps:MSF${cls.name}`);
        /**
         * Every type a kept method mentions, kept too. The filter resolves a signature against
         * the metadata, so one absent parameter or return type degrades that type to Object and
         * the whole method stops existing - `NoSuchMethodError`, not a missing property. Keeping
         * the class without the types it talks about is only half the class.
         */
        for (const m of cls.methods.values()) {
            for (const type of [m.returns, ...m.params]) {
                const ref = /com\.massifmaps\.([a-z0-9.]+)\.([A-Z]\w*)/.exec(type ?? '');
                if (ref) {
                    androidUses.add(`com.massifmaps.${ref[1]}:${ref[2]}`);
                }
            }
        }
    }
    /**
     * Every SWIG enum, not just the ones a bound method mentions: `MBTilesScheme` only
     * ever appears in a constructor signature, which the parser drops as noise, so
     * reachability would silently miss it. They are a few dozen tiny classes - cheaper to
     * keep them all than to ship a list that rots the next time a signature moves.
     *
     * iOS needs none of this: there the same enums are `const enum`, plain integers with
     * no runtime class to keep metadata for.
     */
    for (const [name, pkg] of enums) {
        androidUses.add(`com.massifmaps.${pkg}:${name}`);
    }
    return {
        android: JSON.stringify({ uses: [...androidUses].sort(), blacklist: ['com.massifmaps*:*JNI'] }, null, 4) + '\n',
        ios: JSON.stringify({ uses: [...iosUses].sort() }, null, 4) + '\n'
    };
}

export function generate({ apiUsage = true } = {}) {
    const { model, enums, unmatched, androidOnly } = buildModel();

    rmSync(BINDINGS_DIR, { recursive: true, force: true });
    let files = 0;
    let methods = 0;
    let props = 0;
    let selectors = 0;

    for (const cls of model.values()) {
        const dir = path.join(BINDINGS_DIR, ...cls.pkg.split('.'));
        mkdirSync(dir, { recursive: true });
        writeFileSync(path.join(dir, `${cls.name}.ts`), emitClass(cls));
        files++;
        methods += cls.methods.length;
        props += accessors(cls.methods).length;
        selectors += Object.keys(cls.selectors).length;
    }

    // barrel per package, so `import { METHODS } from '../bindings/styles/MarkerStyleBuilder'`
    // stays the documented form but a package can also be browsed
    const writeBarrels = (dir) => {
        const entries = readdirSync(dir, { withFileTypes: true });
        const mods = entries.filter((e) => e.isFile() && e.name.endsWith('.ts') && e.name !== 'index.ts')
            .map((e) => e.name.slice(0, -3)).sort();
        const subs = entries.filter((e) => e.isDirectory()).map((e) => e.name).sort();
        for (const s of subs) writeBarrels(path.join(dir, s));
        writeFileSync(path.join(dir, 'index.ts'), HEADER +
            [...mods.map((e) => `export * as ${e} from './${e}';`),
             ...subs.map((s) => `export * as ${s} from './${s}';`)].join('\n') + '\n');
    };
    for (const pkg of readdirSync(BINDINGS_DIR)) writeBarrels(path.join(BINDINGS_DIR, pkg));

    if (apiUsage) {
        const usage = emitApiUsage(model, enums);
        writeFileSync(path.join(PACKAGE_DIR, 'platforms', 'android', 'native-api-usage.json'), usage.android);
        writeFileSync(path.join(PACKAGE_DIR, 'platforms', 'ios', 'native-api-usage.json'), usage.ios);
    }

    return { files, methods, props, selectors, enums: enums.size, unmatched, androidOnly };
}
