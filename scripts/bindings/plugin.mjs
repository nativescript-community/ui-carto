import { readFileSync, readdirSync } from 'node:fs';
import * as path from 'node:path';
import { ROOT } from '../typings/config.mjs';

export const SRC = path.join(ROOT, 'src', 'ui-massifmaps');

/**
 * Classes that deliberately do not get a binding table, and why. Without this the
 * coverage report is noise and nobody reads it.
 */
export const NOT_BOUND = {
    Layers: 'keeps a JS mirror of the layer list so getAll() hands back wrappers, not natives',
    MapPosVector: 'JS collection wrapper - get()/add() marshal MapPos, they do not forward',
    MapPosVectorVector: 'JS collection wrapper',
    ScreenPosVector: 'JS collection wrapper',
    DoubleVector: 'JS collection wrapper',
    StringVector: 'JS collection wrapper',
    VectorElementVector: 'JS collection wrapper - holds the wrapped elements alongside the native vector',
    GeocodingResultVector: 'JS collection wrapper',
    Group: 'no native counterpart - fans a property out over its members',
    MapBounds: 'value type - carries northeast/southwest as plain JS, converted at the boundary',
    ClusterElementBuilder: 'wraps our own additions subclass, whose API the SDK class does not declare'
};

export function walkSrc(dir = SRC, out = []) {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
        if (e.name === 'typings' || e.name === 'bindings') continue;
        const p = path.join(dir, e.name);
        if (e.isDirectory()) walkSrc(p, out);
        // .common.ts too: the shared bases (RasterTileLayerCommon, BaseVectorElementStyleBuilder)
        // sit in the middle of the chain, and skipping them breaks every walk up it
        else if (/\.(android|ios|common)\.ts$/.test(e.name)) out.push(p);
    }
    return out;
}

/**
 * The text between a matching pair of angle brackets starting at `open`. A type
 * parameter may itself be constrained by an object type - BaseLineVectorElement is
 * `<T extends VectorElement & { getPoses?(): ... }, U ...>` - so braces are tracked
 * rather than treated as the end of the declaration.
 */
export function generics(src, open) {
    let angle = 0;
    let brace = 0;
    for (let i = open; i < src.length; i++) {
        const c = src[i];
        if (c === '{') brace++;
        else if (c === '}') brace--;
        else if (brace === 0) {
            if (c === '<') angle++;
            else if (c === '>') {
                angle--;
                if (angle === 0) return { text: src.slice(open + 1, i), end: i };
            }
        }
    }
    return null;
}

/**
 * Every `export class X extends Y<Native, Options>` in one file, with the native SDK
 * class it wraps and whether it is already bound. `params` is the class's own generic
 * parameter list, which a generated `export interface X<...>` has to repeat verbatim.
 */
export function pluginClasses(file) {
    const src = readFileSync(file, 'utf8');
    const bound = new Set([...src.matchAll(/bindNative\(\s*(\w+)/g)].map((m) => m[1]));

    // which binding module each METHODS alias came from, so coverage can tell whether a
    // class inherits a table that actually covers its own SDK class
    const aliasOf = new Map();
    for (const m of src.matchAll(/^import \{([^}]*)\} from '([^']*bindings\/[^']*)';$/gm)) {
        for (const part of m[1].split(',')) {
            const [orig, as] = part.split(' as ').map((s) => s.trim());
            if (orig === 'METHODS') aliasOf.set(as ?? orig, m[2].split('/').pop());
        }
    }
    const tables = new Map();
    const tableAliases = new Map();
    for (const m of src.matchAll(/bindNative\(\s*(\w+)\s*,\s*(\w+)/g)) {
        const t = aliasOf.get(m[2]);
        if (!t) continue;
        (tables.get(m[1]) ?? tables.set(m[1], []).get(m[1])).push(t);
        // the alias this call used, so an existing merge can be found even when two
        // classes in the file import the same table under different names
        (tableAliases.get(m[1]) ?? tableAliases.set(m[1], new Map()).get(m[1])).set(t, m[2].replace(/^MET_/, ''));
    }

    const out = [];
    for (const m of src.matchAll(/^(?:export )?(abstract )?class (\w+)/gm)) {
        const name = m[2];
        let i = m.index + m[0].length;
        let params = null;
        if (src[i] === '<') {
            const g = generics(src, i);
            if (!g) continue;
            params = g.text;
            i = g.end + 1;
        }
        const ext = src.slice(i).match(/^\s+extends\s+([\w.]+)/);
        if (!ext) continue;
        let args = null;
        const after = i + ext[0].length;
        if (src[after] === '<') {
            args = generics(src, after)?.text ?? null;
        }
        // Deliberately only the extends arguments: an abstract base that names its native
        // type in a parameter constraint shares that SDK class with its concrete
        // subclasses, and binding both ends up declaring the same members twice.
        //
        // Our own additions subclasses count too - they carry the SDK class's name, which
        // is exactly why the AK prefix was dropped, so HillshadeRasterTileLayer still
        // resolves to the SDK table.
        const nat = args?.match(/com\.(?:nativescript\.)?massifmaps\.[\w.]*\.(\w+)|\b(?:NS)?MSF(\w+)\b/);
        out.push({
            name,
            params,
            abstract: !!m[1],
            parent: ext[1],
            native: nat ? (nat[1] ?? nat[2]) : null,
            bound: bound.has(name),
            tables: tables.get(name) ?? [],
            tableAliases: tableAliases.get(name) ?? new Map(),
            file
        });
    }
    return out;
}

/** name -> class, across every platform file */
export function pluginModel() {
    const byName = new Map();
    for (const file of walkSrc()) {
        for (const c of pluginClasses(file)) {
            const list = byName.get(c.name) ?? [];
            list.push(c);
            byName.set(c.name, list);
        }
    }
    return byName;
}

/** the ancestor that carries the binding, if any - a subclass inherits the forwarders */
export function boundVia(name, byName, seen = new Set()) {
    if (seen.has(name)) return null;
    seen.add(name);
    const list = byName.get(name);
    if (!list?.length) return null;
    if (list.some((c) => c.bound)) return name;
    for (const c of list) {
        const via = boundVia(c.parent, byName, seen);
        if (via) return via;
    }
    return null;
}

/**
 * The members a class declares in its own body - methods, getters/setters and decorated
 * properties. These are the ones `bindNative` skips at runtime because they are already
 * on the prototype, so the generated Methods interface has to skip them too or the two
 * signatures collide.
 */
/**
 * Where a class's body starts and ends. Anything that edits members has to work on this
 * slice: two classes in one file routinely declare the same property name, and a
 * file-wide regex cannot tell them apart.
 */
export function classRange(src, name) {
    const m = src.match(new RegExp(`^(?:export )?(?:abstract )?class ${name}\\b`, 'm'));
    if (!m) return null;
    let i = m.index + m[0].length;
    if (src[i] === '<') {
        const g = generics(src, i);
        if (!g) return null;
        i = g.end + 1;
    }
    const open = src.indexOf('{', i);
    let depth = 0;
    let end = open;
    for (;;) {
        if (src[end] === '{') depth++;
        else if (src[end] === '}') {
            depth--;
            if (depth === 0) break;
        }
        end++;
    }
    return { open, end };
}

export function ownMembers(file, name) {
    const src = readFileSync(file, 'utf8');
    const range = classRange(src, name);
    if (!range) return new Set();
    const { open, end } = range;
    const body = src.slice(open + 1, end);
    const out = new Set();
    // only top-level members: a nested object literal is at a deeper brace level
    let level = 0;
    for (const line of body.split('\n')) {
        if (level === 0) {
            const mem = line.match(/^\s{4}(?:public |private |protected |static |override |abstract |readonly )*(?:(get|set)\s+)?([a-zA-Z_$][\w$]*)\s*[(:<?=]/);
            if (mem) out.add(mem[2]);
            const dec = line.match(/@\w+(?:\([^)]*\))?\s+([a-zA-Z_$][\w$]*)\s*[?:;]/);
            if (dec) out.add(dec[1]);
        }
        level += (line.match(/\{/g) ?? []).length - (line.match(/\}/g) ?? []).length;
    }
    return out;
}

/** own members plus every ancestor's - an inherited method collides just the same */
export function membersUpChain(name, byName, seen = new Set()) {
    if (seen.has(name)) return new Set();
    seen.add(name);
    const out = new Set();
    for (const c of byName.get(name) ?? []) {
        for (const n of ownMembers(c.file, name)) out.add(n);
        for (const n of membersUpChain(c.parent, byName, seen)) out.add(n);
    }
    return out;
}

/**
 * Members declared anywhere on the class's inheritance tree, descendants included.
 *
 * A table bound to an abstract base collides with a subclass that marshals the same
 * method itself - TileDataSource turns `loadTile(x, y, z)` into a MapTile, while the SDK
 * takes one - and TypeScript reports that against the base, not the subclass. So the
 * merge has to omit what anyone in the tree declares.
 */
export function membersInTree(name, byName) {
    const kids = new Map();
    for (const [n, list] of byName) {
        for (const c of list) {
            if (!kids.has(c.parent)) kids.set(c.parent, new Set());
            kids.get(c.parent).add(n);
        }
    }
    const out = membersUpChain(name, byName);
    const walk = (n, seen = new Set()) => {
        if (seen.has(n)) return;
        seen.add(n);
        for (const c of byName.get(n) ?? []) for (const m of ownMembers(c.file, n)) out.add(m);
        for (const k of kids.get(n) ?? []) walk(k, seen);
    };
    walk(name);
    return out;
}

/** every binding table in effect on a class, its own plus each ancestor's */
export function tablesFor(name, byName, seen = new Set()) {
    if (seen.has(name)) return [];
    seen.add(name);
    const list = byName.get(name) ?? [];
    const out = list.flatMap((c) => c.tables);
    for (const c of list) out.push(...tablesFor(c.parent, byName, seen));
    return [...new Set(out)];
}
