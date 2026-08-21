import { readFileSync } from 'node:fs';
import * as path from 'node:path';
import { TYPINGS_DIR } from '../typings/config.mjs';

/**
 * Anything SWIG or the language bridge invented rather than the SDK author.
 * The typings generator already strips most of it; this is the second net, and it
 * is also what keeps `alloc`/`initWith*` out of the *binding* list even though we
 * deliberately keep them in the typings (createNative() needs them).
 */
const NOISE = new Set([
    'constructor', 'class', 'alloc', 'new', 'delete', 'finalize', 'dealloc',
    'equals', 'hashCode', 'toString', 'valueOf', 'values', 'hash', 'description',
    'isEqual', 'isEqualInternal', 'hashInternal', 'self',
    'swigValue', 'swigToEnum', 'swigGetRawPtr', 'swigGetClassName',
    'swigGetDirectorObject', 'swigCreatePolymorphicInstance', 'getCPtr', 'getCptr',
    'swigReleaseOwnership', 'swigTakeOwnership'
]);

const isNoise = (n) => NOISE.has(n) || n.startsWith('init') || n.startsWith('swig') || /SwigExplicit/.test(n);

function bodyOf(src, headerEnd) {
    const open = src.indexOf('{', headerEnd);
    let depth = 0;
    let i = open;
    for (;;) {
        if (src[i] === '{') depth++;
        else if (src[i] === '}') {
            depth--;
            if (depth === 0) break;
        }
        i++;
    }
    return { body: src.slice(open + 1, i), end: i };
}

function members(body) {
    const out = [];
    for (const m of body.matchAll(/\n\s*(?:public\s+)?(static\s+)?([a-zA-Z_$][\w$]*)\s*\(([^)]*)\)\s*:\s*([^;]+);/g)) {
        const [, isStatic, name, args, ret] = m;
        if (isNoise(name)) continue;
        const trimmed = args.trim();
        const params = trimmed ? trimmed.split(',').map((a) => a.split(':').slice(1).join(':').trim()) : [];
        out.push({ name, static: !!isStatic, arity: params.length, params, returns: ret.trim() });
    }
    return out;
}

/**
 * android: `declare namespace com { export namespace massifmaps { export namespace <a> {
 * [export namespace <b> {] export class X extends Y {`
 *
 * The nesting can be more than one level deep (datasources.components, renderers.components),
 * so the whole chain has to be walked - taking only the innermost name would put
 * `TileData` in package `components` and produce a bogus native-api-usage entry.
 */
export function parseAndroid(file = path.join(TYPINGS_DIR, 'massifmaps.android.d.ts')) {
    const src = readFileSync(file, 'utf8');
    const classes = new Map();

    for (const block of src.matchAll(/^declare namespace com \{/gm)) {
        const { body, end } = bodyOf(src, block.index);
        const chain = [];
        let rest = body;
        for (;;) {
            const ns = rest.match(/export namespace (\w+) \{/);
            const cl = rest.match(/export class (\w+)(?: extends ([\w.]+))?[^{]*\{/);
            if (cl && (!ns || cl.index < ns.index)) {
                const inner = bodyOf(rest, cl.index + cl[0].length - 1);
                const pkg = chain.filter((c) => c !== 'massifmaps').join('.');
                const isEnum = /\bswigToEnum\s*\(/.test(inner.body);
                const entry = classes.get(cl[1]) ?? { name: cl[1], pkg, extends: cl[2], isEnum, methods: new Map() };
                for (const mem of members(inner.body)) {
                    entry.methods.set(mem.name, mem);
                }
                classes.set(cl[1], entry);
                break;
            }
            if (!ns) break;
            chain.push(ns[1]);
            rest = bodyOf(rest, ns.index + ns[0].length - 1).body;
        }
        void end;
    }
    return classes;
}

/** ios: flat `declare class MSFX extends MSFY {` */
export function parseIos(file = path.join(TYPINGS_DIR, 'massifmaps.ios.d.ts')) {
    const src = readFileSync(file, 'utf8');
    const classes = new Map();
    for (const m of src.matchAll(/declare class MSF(\w+)(?: extends (\w+))?[^{]*\{/g)) {
        const [, name, sup] = m;
        const { body } = bodyOf(src, m.index + m[0].length - 1);
        const entry = classes.get(name) ?? { name, extends: sup, methods: new Map() };
        for (const mem of members(body)) {
            entry.methods.set(mem.name, mem);
        }
        classes.set(name, entry);
    }
    return classes;
}

/**
 * Reconcile the two. Android names are canonical - they are plain and match the
 * documented API. iOS diverges only where ObjC concatenates the selector parts, so
 * a prefix match against the same arity recovers the mapping.
 */
export function buildModel() {
    const A = parseAndroid();
    const I = parseIos();
    const model = new Map();
    const unmatched = [];

    // iOS declares an override only where it exists; everything else is inherited,
    // so a name has to be looked up along the whole chain before calling it missing.
    const iosChain = (name) => {
        const seen = [];
        let cur = I.get(name);
        while (cur) {
            seen.push(cur);
            const sup = cur.extends && cur.extends.startsWith('MSF') ? cur.extends.slice(3) : null;
            cur = sup && sup !== cur.name ? I.get(sup) : null;
        }
        return seen;
    };

    for (const [name, a] of A) {
        const i = I.get(name);
        if (!i) continue;
        const chain = iosChain(name);
        const has = (n) => chain.some((c) => c.methods.has(n));
        const candidatesFor = (n, arity) =>
            chain
                .flatMap((c) => [...c.methods.values()])
                .filter((x) => x.name.startsWith(n) && x.arity === arity)
                .sort((x, y) => x.name.length - y.name.length);

        const methods = [];
        const selectors = {};
        for (const [mname, meta] of a.methods) {
            if (has(mname)) {
                methods.push(meta);
                continue;
            }
            const cands = candidatesFor(mname, meta.arity);
            if (cands.length) {
                methods.push(meta);
                selectors[mname] = cands[0].name;
                continue;
            }
            unmatched.push(`${name}.${mname}/${meta.arity}`);
        }
        if (methods.length) {
            model.set(name, { name, pkg: a.pkg, extends: a.extends, methods, selectors });
        }
    }
    /**
     * SWIG enums never reach `model`: every member they declare is swig noise, so they
     * end up with zero bindable methods. They still need metadata on android, where each
     * one is a real java class the marshaller has to look up to turn a JS number into the
     * instance a setter expects - see emitApiUsage().
     */
    const enums = new Map([...A.values()].filter((c) => c.isEnum).map((c) => [c.name, c.pkg]));

    return { model, enums, unmatched, androidOnly: [...A.keys()].filter((k) => !I.has(k)) };
}

/**
 * `Color` -> `color`, but `HTTPHeaders` -> `httpHeaders` and `TMSScheme` -> `tmsScheme`.
 * Lower-casing only the first character would produce `hTTPHeaders`.
 */
export function uncapitalize(s) {
    const run = s.length - s.replace(/^[A-Z]+/, '').length;
    if (run <= 1) return s[0].toLowerCase() + s.slice(1);
    if (run === s.length) return s.toLowerCase();
    return s.slice(0, run - 1).toLowerCase() + s.slice(run - 1);
}

/** getX()/isX() paired with setX(v) becomes the property `x` */
export function accessors(methods) {
    const byName = new Map(methods.map((m) => [m.name, m]));
    const props = [];
    for (const m of methods) {
        const pre = m.name.startsWith('get') ? 'get' : m.name.startsWith('is') ? 'is' : null;
        if (!pre || m.arity !== 0 || m.static) continue;
        const rest = m.name.slice(pre.length);
        if (!rest || rest[0] !== rest[0].toUpperCase()) continue;
        const setter = byName.get('set' + rest);
        if (!setter || setter.arity !== 1) continue;
        props.push({
            key: uncapitalize(rest),
            getter: m.name,
            setter: setter.name,
            nativeType: m.returns
        });
    }
    return props;
}
