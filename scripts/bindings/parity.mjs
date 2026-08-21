import { readFileSync, readdirSync } from 'node:fs';
import * as path from 'node:path';
import { BINDINGS_DIR } from './emit.mjs';
import { buildModel } from './parse.mjs';
import { NOT_BOUND, SRC, pluginClasses } from './plugin.mjs';

/**
 * The other half of --coverage.
 *
 * `coverage()` asks "does this plugin class forward everything its SDK class declares".
 * This asks the structural questions around it, which nothing else catches:
 *
 *  - a generated table nobody binds - the SDK has the class, the plugin never wrapped it;
 *  - a table bound on one platform only, which is how a class gets added to
 *    `index.android.ts` while the iOS file is forgotten: the property then silently does
 *    nothing on the other platform instead of failing;
 *  - the same gap one level up, where the whole wrapper exists on one side only;
 *  - a wrapper both platforms have that the shared `.d.ts` never declares, so it is
 *    invisible to anything importing the plugin.
 *
 * Everything here compares the plugin's own files against each other, so it stays useful
 * while the two SDKs are on different releases - unlike the typings-driven reports, which
 * go quiet exactly when one platform is behind.
 */

/** the legs a module comes in; `common` is both platforms at once, `d` is the declaration */
const LEG = /\.(android|ios|common|d)\.ts$/;

const PLATFORMS = ['android', 'ios'];

/**
 * Glue that is iOS-only on purpose: an ObjC protocol implementation has no android
 * counterpart, the listener is a java interface there.
 */
const IOS_GLUE = /(?:Impl$|^(?:NS)?MSF)/;

/** src/, including the `.d.ts` declarations `walkSrc` deliberately skips */
function walkAll(dir = SRC, out = []) {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
        if (e.name === 'typings' || e.name === 'bindings') continue;
        const p = path.join(dir, e.name);
        if (e.isDirectory()) walkAll(p, out);
        else if (LEG.test(e.name)) out.push(p);
    }
    return out;
}

/**
 * What a `.d.ts` puts in front of the consumer. `pluginClasses` cannot be reused here: it
 * wants an `extends` clause and a native type parameter, and a declaration has neither -
 * it is `export declare class Projection extends ProjectionClass<...>` on one line and
 * `export class FeatureCollection<T> {` on the next. An `interface` counts too: a wrapper
 * whose public shape is all the caller needs is declared as one (GeocodingResult).
 */
function declaredTypes(file) {
    const out = new Set();
    for (const m of readFileSync(file, 'utf8').matchAll(/^(?:export )?(?:declare )?(?:abstract )?(?:class|interface) (\w+)/gm)) {
        out.add(m[1]);
    }
    return out;
}

/** every generated table module, by the name a `bindNative` call refers to it as */
function bindingTables() {
    const out = new Map();
    const walk = (dir) => {
        for (const e of readdirSync(dir, { withFileTypes: true })) {
            const p = path.join(dir, e.name);
            if (e.isDirectory()) walk(p);
            else if (e.name.endsWith('.ts') && e.name !== 'index.ts') {
                const name = e.name.slice(0, -3);
                out.set(name, [...(out.get(name) ?? []), path.relative(BINDINGS_DIR, p)]);
            }
        }
    };
    walk(BINDINGS_DIR);
    return out;
}

const reach = (legs) => (legs.has('common') ? new Set(PLATFORMS) : new Set(PLATFORMS.filter((p) => legs.has(p))));
const missingFrom = (legs) => PLATFORMS.filter((p) => !reach(legs).has(p));

export function parity() {
    const tables = bindingTables();
    const androidOnly = new Set(buildModel().androidOnly);

    /** class name -> where it is implemented, declared, and what it binds */
    const classes = new Map();
    /** table name -> the legs some class binds it on */
    const tableLegs = new Map();

    const blank = () => ({ impl: new Set(), declared: false, files: [], abstract: false, native: null });

    for (const file of walkAll()) {
        const leg = file.match(LEG)[1];
        if (leg === 'd') {
            for (const name of declaredTypes(file)) {
                const entry = classes.get(name) ?? blank();
                entry.declared = true;
                classes.set(name, entry);
            }
            continue;
        }
        for (const cls of pluginClasses(file)) {
            // What counts as an implementation: it names the native class it wraps, or it
            // installs a binding table. The `*Options` types do neither - they are plain
            // shapes carried alongside the wrapper.
            if (cls.native || cls.bound) {
                const entry = classes.get(cls.name) ?? blank();
                entry.impl.add(leg);
                entry.files.push(path.relative(SRC, file));
                entry.abstract ||= cls.abstract;
                entry.native ??= cls.native;
                classes.set(cls.name, entry);
            }
            for (const t of cls.tables) {
                if (!tableLegs.has(t)) tableLegs.set(t, new Set());
                tableLegs.get(t).add(leg);
            }
        }
    }

    /** a table was generated for it, so the SDK has the class and the plugin never wrapped it */
    const unwrapped = [];
    for (const [name, files] of tables) {
        if (tableLegs.has(name)) continue;
        if (NOT_BOUND[name]) continue;
        unwrapped.push({ name, files });
    }

    /** the table is bound on android but not iOS, or the reverse */
    const lopsidedTables = [];
    for (const [name, legs] of tableLegs) {
        const missing = missingFrom(legs);
        if (missing.length) {
            lopsidedTables.push({ name, has: [...reach(legs)], missing });
        }
    }

    const lopsidedClasses = [];
    const undeclared = [];
    for (const [name, entry] of classes) {
        // an abstract base is a place to hang shared code, not an API surface: it is free
        // to exist on one platform only and free to go undeclared
        if (!entry.impl.size || entry.abstract || IOS_GLUE.test(name)) continue;
        const missing = missingFrom(entry.impl);
        if (missing.length) {
            lopsidedClasses.push({ name, native: entry.native, files: entry.files, missing, sdkAndroidOnly: androidOnly.has(entry.native) });
        } else if (!entry.declared && !entry.impl.has('common')) {
            // a `.common.ts` class is its own declaration; only the split ones need a `.d.ts`
            undeclared.push({ name, files: entry.files });
        }
    }

    const byName = (a, b) => a.name.localeCompare(b.name);
    return {
        unwrapped: unwrapped.sort(byName),
        lopsidedTables: lopsidedTables.sort(byName),
        lopsidedClasses: lopsidedClasses.sort(byName),
        undeclared: undeclared.sort(byName)
    };
}
