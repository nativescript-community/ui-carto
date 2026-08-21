import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import * as path from 'node:path';
import { BINDINGS_DIR } from './emit.mjs';
import { accessors, buildModel } from './parse.mjs';
import { NOT_BOUND, SRC, boundVia, classRange, generics, membersInTree, ownMembers, pluginClasses, pluginModel, tablesFor, walkSrc } from './plugin.mjs';

/**
 * Attach a generated binding table to a class that already exists in src/.
 *
 * This is the counterpart to --scaffold: scaffold writes a brand new class, migrate
 * takes one that is already hand-written and gives it the generated forwarders. It is
 * the step that has to be repeatable, because every SDK bump adds methods to classes
 * the plugin already wraps.
 *
 * Deliberately conservative: it only adds imports and appends the binding block. It
 * never deletes a hand-written member, because `bindNative` leaves anything already on
 * the prototype alone - a leftover hand-written forwarder is redundant, not wrong.
 */

/**
 * The SDK ancestry of a class, most specific first.
 *
 * The plugin's hierarchy is flatter than the SDK's - TextStyleBuilder extends the
 * plugin's BillboardStyleBuilder, but the SDK puts LabelStyleBuilder and StyleBuilder in
 * between - and a table only carries the members its own class declares. So a class needs
 * its ancestors' tables as well, down to the nearest one an ancestor plugin class binds.
 */
export function sdkChain(name, model) {
    const out = [];
    const seen = new Set();
    let cur = model.get(name);
    while (cur && !seen.has(cur.name)) {
        seen.add(cur.name);
        out.push(cur);
        const sup = cur.extends?.split('.').pop();
        cur = sup && sup !== cur.name ? model.get(sup) : null;
    }
    return out;
}

/** the tables a class needs but does not already inherit from a bound plugin ancestor */
function missingTables(cls, sdk, byName, model) {
    const have = new Set(tablesFor(cls.name, byName));
    return sdkChain(sdk.name, model).filter((a) => !have.has(a.name));
}

/** the method names a binding table forwards */
function methodsOf(name, pkg) {
    const file = path.join(BINDINGS_DIR, ...pkg.split('.'), `${name}.ts`);
    const line = readFileSync(file, 'utf8').match(/export const METHODS = \[([\s\S]*?)\] as const;/)?.[1] ?? '';
    return [...line.matchAll(/'(\w+)'/g)].map((m) => m[1]);
}

/**
 * A class that marshals a method itself - LocalVectorDataSource.add takes a wrapper, not
 * a native element - keeps its own signature, so the generated one has to be omitted or
 * the two declarations collide. Same list `bindNative` skips at runtime, for the same
 * reason.
 */
function methodsMerge(alias, name, sdk, byName, own = membersInTree(name, byName), alsoOmit = new Set()) {
    const shadowed = methodsOf(sdk.name, sdk.pkg)
        .filter((n) => own.has(n) || alsoOmit.has(n))
        .sort();
    return shadowed.length ? `Omit<${alias}, ${shadowed.map((n) => `'${n}'`).join(' | ')}>` : alias;
}

/**
 * Same problem on the accessor side: HTTPTileDataSource widens `subdomains` to
 * `string | string[]`, and BaseVectorElement excludes `metaData` because it marshals a
 * Variant map. A hand-written property always wins, so the generated one is omitted.
 */
function accessorsMerge(alias, name, sdk, byName, own = membersInTree(name, byName), alsoOmit = new Set()) {
    const keys = accessorsOf(sdk.name, sdk.pkg)
        .filter((k) => own.has(k) || alsoOmit.has(k))
        .sort();
    return keys.length ? `Omit<${alias}, ${keys.map((k) => `'${k}'`).join(' | ')}>` : alias;
}

/** the property names a binding table synthesises */
function accessorsOf(name, pkg) {
    const file = path.join(BINDINGS_DIR, ...pkg.split('.'), `${name}.ts`);
    const block = readFileSync(file, 'utf8').match(/export const ACCESSORS[^{]*\{([\s\S]*?)\n\};/)?.[1] ?? '';
    return [...block.matchAll(/^\s*(\w+):/gm)].map((m) => m[1]);
}

/** converters live in index.{android,ios}.ts / index.common.ts, all re-exported from '..' */
export function convertersOf(name, pkg) {
    const file = path.join(BINDINGS_DIR, ...pkg.split('.'), `${name}.ts`);
    const src = readFileSync(file, 'utf8');
    const line = src.match(/export const CONVERTERS = \[([\s\S]*?)\] as const;/)?.[1] ?? '';
    return [...line.matchAll(/\['(\w+)', '(\w+)'\]/g)].map((m) => [m[1], m[2]]);
}

function importPath(file, pkg, name) {
    const from = path.dirname(file);
    let rel = path.relative(from, path.join(BINDINGS_DIR, ...pkg.split('.'), name));
    if (!rel.startsWith('.')) rel = './' + rel;
    return rel.replace(/\\/g, '/');
}

/**
 * Insert after the last top-level import so the file keeps one import block. Lines whose
 * first imported name is already bound in the file are dropped, so re-running against a
 * partly-migrated file does not produce duplicate identifiers.
 */
function addImports(src, lines) {
    const fresh = lines.filter((l) => {
        const first = l.match(/import \{\s*(?:\w+ as )?(\w+)/)?.[1];
        return first && !new RegExp(`\\b(?:as |\\{\\s*)${first}\\b[,\\s}]`).test(src);
    });
    if (!fresh.length) return src;
    const imports = [...src.matchAll(/^import [\s\S]*?from '[^']+';$/gm)];
    const at = imports.length ? imports[imports.length - 1].index + imports[imports.length - 1][0].length : 0;
    return src.slice(0, at) + '\n' + fresh.join('\n') + src.slice(at);
}

/**
 * Widen an existing `extends Acc_X` merge to also pull in the generated Methods.
 * Runs on files migrated before Methods existed, so a re-run tops them up rather than
 * needing every class re-done by hand.
 */
/** METHODS alias -> binding module, so an existing merge can be found whatever it aliased */
function aliasFor(src, table) {
    for (const m of src.matchAll(/^import \{([^}]*)\} from '([^']*bindings\/[^']*)';$/gm)) {
        if (m[2].split('/').pop() !== table) continue;
        for (const part of m[1].split(',')) {
            const [orig, as] = part.split(' as ').map((x) => x.trim());
            if (orig === 'METHODS') return (as ?? orig).replace(/^MET_/, '');
        }
    }
    return null;
}

/**
 * Rewrite an existing `extends Acc_X, Met_X {}` in place. Returns null when there is
 * none, so the caller knows to emit a fresh one. Recomputing rather than leaving it
 * alone matters: what a class shadows changes as the class, its subclasses, or the SDK do.
 *
 * Scanned rather than matched with one regex - the formatter wraps a long Omit list over
 * several lines, and a line-oriented pattern silently stops refreshing exactly the
 * merges that have grown big enough to matter.
 */
function refreshMerge(src, name, base, wantAcc, wantMet) {
    const m = src.match(new RegExp(`^export interface ${name}\\b`, 'm'));
    if (!m) return null;
    // step over the type parameter list first - `<T, U extends Foo>` has its own
    // `extends`, and anchoring on that one eats the parameters
    let after = m.index + m[0].length;
    if (src[after] === '<') {
        const g = generics(src, after);
        if (!g) return null;
        after = g.end + 1;
    }
    const ext = src.indexOf('extends', after);
    const close = src.indexOf('{}', after);
    if (ext < 0 || close < 0 || ext > close) return null;

    const clause = src.slice(ext + 'extends'.length, close);
    if (!clause.includes(`Acc_${base}`) || !clause.includes(`Met_${base}`)) return null;
    return src.slice(0, ext) + `extends ${wantAcc}, ${wantMet} ` + src.slice(close);
}

/**
 * Attach every table the class needs: its own, plus each SDK ancestor's down to the
 * nearest one a plugin ancestor already binds. The plugin hierarchy is flatter than the
 * SDK's, so without the ancestors a bound class still misses inherited members - that is
 * what left `@nativeColorProperty color` on every style builder.
 */
export function migrateClass(src, cls, sdk, byName, model) {
    const decl = cls.params ? `${cls.name}<${cls.params}>` : cls.name;
    const own = membersInTree(cls.name, byName);
    const inherited = new Set(tablesFor(cls.name, byName));
    const before = src;
    const add = [];
    const blocks = [];
    const nearer = new Set();

    if (!/from '[^']*nativeclass\.common'/.test(src)) {
        const rel = path.relative(path.dirname(cls.file), path.join(SRC, 'nativeclass.common')).replace(/\\/g, '/');
        add.push(`import { bindNative } from '${rel.startsWith('.') ? rel : './' + rel}';`);
    }

    for (const table of sdkChain(sdk.name, model)) {
        const base = aliasFor(src, table.name) ?? table.name;
        const alias = (p) => `${p}_${base}`;
        const contribute = () => {
            for (const n of methodsOf(table.name, table.pkg)) nearer.add(n);
            for (const k of accessorsOf(table.name, table.pkg)) nearer.add(k);
        };

        const wantAcc = accessorsMerge(alias('Acc'), cls.name, table, byName, own, nearer);
        const wantMet = methodsMerge(alias('Met'), cls.name, table, byName, own, nearer);

        const refreshed = refreshMerge(src, cls.name, base, wantAcc, wantMet);
        if (refreshed !== null) {
            src = refreshed;
            contribute();
            continue;
        }
        // bound on a plugin ancestor: inherited, nothing to add here
        if (inherited.has(table.name)) {
            contribute();
            continue;
        }

        const conv = convertersOf(table.name, table.pkg);
        add.push(
            `import { ACCESSORS as ${alias('ACC')}, Accessors as ${alias('Acc')}, METHODS as ${alias('MET')}, Methods as ${alias('Met')}, SELECTORS as ${alias('SEL')} } from '${importPath(cls.file, table.pkg, table.name)}';`
        );
        const missingConv = conv.map(([, c]) => c).filter((c) => !new RegExp(`\\b${c}\\b`).test(src));
        if (missingConv.length) {
            const rel = path.relative(path.dirname(cls.file), SRC).replace(/\\/g, '/') || '.';
            add.push(`import { ${[...new Set(missingConv)].sort().join(', ')} } from '${rel.startsWith('.') ? rel : './' + rel}';`);
        }
        const opts = [`selectors: ${alias('SEL')}`];
        if (conv.length) opts.push(`converters: { ${conv.map(([k, c]) => `${k}: ${c}`).join(', ')} }`);
        blocks.push('', `export interface ${decl} extends ${wantAcc}, ${wantMet} {}`, `bindNative(${cls.name}, ${alias('MET')}, ${alias('ACC')}, { ${opts.join(', ')} });`);
        contribute();
    }

    if (blocks.length) src = addImports(src, add).replace(/\s*$/, '\n') + blocks.join('\n') + '\n';
    return { src, skipped: src === before ? 'already bound' : undefined };
}

/**
 * The published API is the hand-written .d.ts, not the platform implementations, so a
 * class that gains forwarders at runtime is invisible to TypeScript until the same
 * `extends Accessors` merge is added there. Same trick, but the generic parameter list
 * has to come from the .d.ts declaration - it does not always match the implementation.
 */
function migrateTypings(implFile, name, sdk, byName, model) {
    const dts = implFile.replace(/\.(android|ios)\.ts$/, '.d.ts');
    if (!existsSync(dts)) return null;
    let src = readFileSync(dts, 'utf8');
    const decl = pluginClasses(dts).find((c) => c.name === name) ?? declaredIn(src, name);
    if (!decl) return null;
    const before = src;
    const head = decl.params ? `${name}<${decl.params}>` : name;
    const own = ownMembers(dts, name);
    // the declaration leg is one flat class, so it needs every table the platform legs
    // bind - its own AND its SDK ancestors' - or an inherited property is installed at
    // runtime and still a compile error for anything importing the plugin
    const chain = sdkChain(sdk.name, model);
    const nearer = new Set();
    const add = [];
    const blocks = [];

    for (const table of chain) {
        // the class's own table was merged as `Acc_<class>` before ancestors existed here;
        // keep that spelling so a re-run refreshes rather than duplicates
        const base = table.name === sdk.name ? name : table.name;
        const alias = (p) => `${p}_${base}`;
        const contribute = () => {
            for (const n of methodsOf(table.name, table.pkg)) nearer.add(n);
            for (const k of accessorsOf(table.name, table.pkg)) nearer.add(k);
        };
        const wantAcc = accessorsMerge(alias('Acc'), name, table, byName, own, nearer);
        const wantMet = methodsMerge(alias('Met'), name, table, byName, own, nearer);

        if (new RegExp(`interface ${name}\\b[^\\n]*extends[^\\n]*${alias('Acc')}\\b`).test(src)) {
            const topped = refreshMerge(src, name, base, wantAcc, wantMet);
            if (topped !== null) src = topped;
            contribute();
            continue;
        }
        // a scaffold already merges its own table under the plain `Accessors, Methods`
        if (table.name === sdk.name && alreadyMerged(src, name, table.name)) {
            contribute();
            continue;
        }
        add.push(`import { Accessors as ${alias('Acc')}, Methods as ${alias('Met')} } from '${importPath(dts, table.pkg, table.name)}';`);
        blocks.push(`export interface ${head} extends ${wantAcc}, ${wantMet} {}`);
        contribute();
    }

    if (blocks.length) src = addImports(src, add).replace(/\s*$/, '\n') + '\n' + blocks.join('\n') + '\n';
    if (src === before) return null;
    writeFileSync(dts, src);
    return path.relative(SRC, dts);
}

/**
 * Whether an `export interface <name> ... extends ... {}` in the file already pulls in a
 * binding table, whatever it imported `Accessors` / `Methods` as. `--scaffold` writes them
 * unaliased, so keying on `Acc_<name>` alone would append a second, identical merge.
 */
function alreadyMerged(src, name, table) {
    const locals = new Set();
    for (const m of src.matchAll(/^import \{([^}]*)\} from '([^']*bindings\/[^']*)';$/gm)) {
        if (m[2].split('/').pop() !== table) continue;
        for (const part of m[1].split(',')) {
            const [orig, as] = part.split(' as ').map((x) => x.trim());
            if (orig === 'Accessors' || orig === 'Methods') locals.add(as ?? orig);
        }
    }
    if (locals.size < 2) return false;
    for (const m of src.matchAll(new RegExp(`^export interface ${name}\\b[^{]*extends([^{]*)\\{`, 'gm'))) {
        if ([...locals].every((l) => new RegExp(`\\b${l}\\b`).test(m[1]))) return true;
    }
    return false;
}

/** a .d.ts class may have no `extends` clause to key on, so match the declaration directly */
function declaredIn(src, name) {
    const m = src.match(new RegExp(`^export (?:abstract )?class ${name}\\b`, 'm'));
    if (!m) return null;
    const i = m.index + m[0].length;
    return { name, params: src[i] === '<' ? (generics(src, i)?.text ?? null) : null };
}

export function migrate(names) {
    const { model } = buildModel();
    const byName = pluginModel();
    const results = [];

    // with no names: everything --coverage reports, plus every class already merged, so
    // a re-run also refreshes Omit lists that drifted as classes or the SDK changed
    const wanted = names?.length ? names : [...new Set([...coverage().rows.map((r) => r.cls), ...[...byName.keys()].filter((n) => !NOT_BOUND[n] && byName.get(n).some((c) => model.has(c.native)))])];

    for (const name of wanted) {
        const list = byName.get(name);
        if (!list?.length) {
            results.push({ name, error: 'no such class in src/ui-massifmaps' });
            continue;
        }
        for (const cls of list) {
            const sdk = model.get(cls.native);
            if (!sdk) {
                results.push({ name, file: cls.file, error: cls.native ? `${cls.native} is not in the model (android-only?)` : 'no native type in the extends clause' });
                continue;
            }
            const before = readFileSync(cls.file, 'utf8');
            // re-read per file: an earlier class in the same file may have changed it
            const fresh = pluginClasses(cls.file).find((c) => c.name === name) ?? cls;
            const { src, skipped } = migrateClass(before, { ...fresh, file: cls.file }, sdk, byName, model);
            if (src !== before) writeFileSync(cls.file, src);
            // the .d.ts is patched either way: a class bound in a previous run may still
            // be missing its public accessors
            const dts = migrateTypings(cls.file, name, sdk, byName, model);
            if (skipped && !dts) {
                results.push({ name, file: cls.file, skipped });
                continue;
            }
            results.push({ name, file: skipped ? '(bound already)' : path.relative(SRC, cls.file), native: sdk.name, dts });
        }
    }
    // A class whose native type only appears in a parameter constraint - the shared
    // abstract bases - is never a migration target, but it can still carry a merge that
    // has gone stale. Refresh every merge from the table its own bindNative names.
    for (const file of walkSrc()) {
        const before = readFileSync(file, 'utf8');
        let src = before;
        for (const cls of pluginClasses(file)) {
            const own = membersInTree(cls.name, byName);
            const nearer = new Set();
            for (const t of cls.tables) {
                const table = model.get(t);
                if (!table) continue;
                const base = cls.tableAliases.get(t) ?? aliasFor(src, t) ?? t;
                const refreshed = refreshMerge(
                    src,
                    cls.name,
                    base,
                    accessorsMerge(`Acc_${base}`, cls.name, table, byName, own, nearer),
                    methodsMerge(`Met_${base}`, cls.name, table, byName, own, nearer)
                );
                if (refreshed !== null) src = refreshed;
                for (const n of methodsOf(table.name, table.pkg)) nearer.add(n);
                for (const k of accessorsOf(table.name, table.pkg)) nearer.add(k);
            }
        }
        if (src !== before) {
            writeFileSync(file, src);
            results.push({ name: '(refresh)', file: path.relative(SRC, file), native: '' });
        }
    }

    return results;
}

/**
 * Which plugin classes wrap an SDK class whose methods no binding table in effect
 * actually covers.
 *
 * Inheriting a base class's table is not enough on its own: MergedMBVTTileDataSource
 * inherits TileDataSource's, but the SDK also gives it getTileMask, which nothing
 * forwards. So the check is against the union of every table on the chain, not merely
 * "is something bound somewhere above me".
 */
export function coverage() {
    const { model } = buildModel();
    const byName = pluginModel();
    const seenTable = new Map();
    const methodsOf = (table) => {
        if (seenTable.has(table)) return seenTable.get(table);
        const cls = [...model.values()].find((c) => c.name === table);
        const set = new Set(cls ? cls.methods.map((m) => m.name) : []);
        seenTable.set(table, set);
        return set;
    };

    const rows = [];
    const reported = new Set();
    for (const file of walkSrc()) {
        for (const cls of pluginClasses(file)) {
            if (!cls.native || !model.has(cls.native)) continue;
            if (NOT_BOUND[cls.name] || reported.has(cls.name)) continue;
            const covered = new Set(tablesFor(cls.name, byName).flatMap((t) => [...methodsOf(t)]));
            const wanted = sdkChain(cls.native, model).flatMap((a) => a.methods.map((m) => m.name));
            const missing = [...new Set(wanted)].filter((n) => !covered.has(n));
            if (!missing.length) continue;
            reported.add(cls.name);
            rows.push({
                cls: cls.name,
                native: cls.native,
                file: path.relative(SRC, file),
                via: boundVia(cls.name, byName),
                missing
            });
        }
    }
    return { rows, ignored: NOT_BOUND };
}

/**
 * Drop `@nativeProperty x` declarations that a binding table now covers.
 *
 * The decorator and the generated accessor do the same job, but the decorator wins
 * (bindNative skips anything already on the prototype), so leaving it means the table is
 * dead weight, --audit keeps reporting the property as hand-declared, and the decorator's
 * `get<Key>` guess can be plain wrong where the SDK spells it `isVisible`.
 *
 * Never pruned: `@styleBuilderProperty`, which delegates to a style builder rather than
 * the native object; a key no table synthesises (`joinType` for `getLineJoinType`, whose
 * whole point is the rename); and a decorator whose nativeGetterName/nativeSetterName
 * name a different pair than the table's, even when the key matches.
 */
export function prune() {
    const { model } = buildModel();
    const byName = pluginModel();
    const out = [];

    /** synthesised property -> the [getter, setter] the table forwards to */
    const pairsOf = (tables) => {
        const keys = new Map();
        for (const table of tables) {
            const t = model.get(table);
            if (t) for (const p of accessors(t.methods)) keys.set(p.key, [p.getter, p.setter]);
        }
        return keys;
    };

    const kids = new Map();
    for (const [n, list] of byName) {
        for (const c of list) {
            if (!kids.has(c.parent)) kids.set(c.parent, new Set());
            kids.get(c.parent).add(n);
        }
    }

    /**
     * An abstract base carries the decorators for properties its subclasses bind - that is
     * where `@nativeProperty visible` on BaseLayer comes from. The base has no table of its
     * own, so a key only counts as covered when EVERY plugin subclass covers it; otherwise
     * removing the decorator drops the property on whichever subclass was not bound.
     */
    const covered = (cls, seen = new Set()) => {
        if (seen.has(cls)) return new Map();
        seen.add(cls);
        const own = pairsOf(tablesFor(cls, byName));
        if (own.size) return own;
        const subs = [...(kids.get(cls) ?? [])].map((k) => covered(k, seen));
        if (!subs.length || subs.some((s) => !s.size)) return own;
        return new Map([...subs[0]].filter(([k, pair]) => subs.every((s) => String(s.get(k)) === String(pair))));
    };

    /** does the class bind the table itself, or does the coverage only come from subclasses */
    const bindsItself = (cls) => pairsOf(tablesFor(cls, byName)).size > 0;

    for (const file of walkSrc()) {
        let src = readFileSync(file, 'utf8');
        const before = src;
        // back to front, so an earlier class's range stays valid after a later splice
        const classes = pluginClasses(file)
            .map((c) => ({ c, range: classRange(src, c.name) }))
            .filter((x) => x.range)
            .sort((a, b) => b.range.open - a.range.open);
        for (const { c, range } of classes) {
            const keys = covered(c.name);
            if (!keys.size) continue;
            // an abstract base is covered only through its subclasses, so the forwarder is
            // installed there, not here - the base still needs the type or its own methods
            // stop compiling (`profile = this.profile` in RoutingService.calculateRoute)
            const own = bindsItself(c.name);
            const body = src.slice(range.open, range.end);
            const pruned = body.replace(/^([ \t]*)@(native[A-Za-z]*Property)(\([^)]*\))?\s+(\w+)(\s*[?]?:[^;\n]*)?;[ \t]*\n/gm, (line, indent, dec, args, key, type) => {
                const pair = keys.get(key);
                if (!pair) return line;
                const getter = args?.match(/nativeGetterName:\s*'(\w+)'/)?.[1];
                const setter = args?.match(/nativeSetterName:\s*'(\w+)'/)?.[1];
                if ((getter && getter !== pair[0]) || (setter && setter !== pair[1])) return line;
                return own ? '' : `${indent}declare ${key}${type ?? ''};\n`;
            });
            if (pruned !== body) src = src.slice(0, range.open) + pruned + src.slice(range.end);
        }
        if (src !== before) {
            writeFileSync(file, src);
            out.push(path.relative(SRC, file));
        }
    }
    return out;
}
