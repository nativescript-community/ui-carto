#!/usr/bin/env node
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import * as path from 'node:path';
import { IOS_UMBRELLA, ROOT } from '../typings/config.mjs';
import { audit } from './audit.mjs';
import { generate } from './emit.mjs';
import { coverage, migrate, prune } from './migrate.mjs';
import { parity } from './parity.mjs';
import { scaffold } from './scaffold.mjs';

const USAGE = `
Native binding tables, generated from the ambient typings.

  npm run bindings                          regenerate bindings/ + both native-api-usage.json
  npm run bindings -- --coverage            plugin classes with no binding table,
                                            plus the per-platform parity report
  npm run bindings -- --migrate A B         attach the generated table to existing classes
  npm run bindings -- --migrate-all         ... to every class --coverage reports
  (add --no-prune to keep @nativeProperty declarations the tables cover)
  npm run bindings -- --audit               compare hand-written classes against the model
  npm run bindings -- --scaffold A B        write class scaffolds for A and B
                                            (commas optional: "A,B", "A B" and "A, B" all work)
                                            three legs each: .d.ts + .android.ts + .ios.ts,
                                            plus the java/ObjC listener additions the glue
                                            needs, where the class takes a listener
  npm run bindings -- --scaffold-all        write a scaffold for every class

The usual loop after an SDK bump:
  npm run typings && npm run bindings && npm run bindings -- --coverage

Options
  --no-api-usage    skip the two native-api-usage.json files
  --out <dir>       scaffold destination (default: scaffold/, never src/)
  --verbose         full lists instead of the first few entries

Run \`npm run typings\` first if the SDK version changed.
`;

const argv = process.argv.slice(2);
const flag = (n) => argv.includes(n);
const value = (n) => {
    const i = argv.indexOf(n);
    return i >= 0 ? argv[i + 1] : undefined;
};
/**
 * Every argument after `--name` up to the next flag, split on commas as well.
 * `--scaffold A,B`, `--scaffold A B` and `--scaffold A, B` all mean the same list -
 * pasting a name list out of the --coverage output should just work, and it comes out
 * of there comma-and-space separated.
 */
const list = (n) => {
    const i = argv.indexOf(n);
    if (i < 0) return [];
    const taken = [];
    for (let j = i + 1; j < argv.length && !argv[j].startsWith('-'); j++) {
        taken.push(argv[j]);
    }
    return [
        ...new Set(
            taken
                .flatMap((a) => a.split(','))
                .map((a) => a.trim())
                .filter(Boolean)
        )
    ];
};

if (flag('-h') || flag('--help')) {
    console.log(USAGE);
    process.exit(0);
}
const verbose = flag('--verbose');

if (flag('--coverage')) {
    const { rows, ignored } = coverage();
    if (!rows.length) {
        console.log('\nEvery plugin class that wraps an SDK class has a binding table.');
    } else {
        console.log(`\n${rows.length} plugin classes have SDK methods no binding table forwards:`);
        for (const r of rows) {
            const via = r.via ? ` [inherits ${r.via}'s table]` : '';
            console.log(`  ${r.cls} -> ${r.native}${via}  (${r.file})`);
            console.log(`      unforwarded: ${r.missing.join(', ')}`);
        }
        console.log('\nAttach them with `npm run bindings -- --migrate-all`.');
    }
    console.log(`\n${Object.keys(ignored).length} deliberately not bound:`);
    for (const [k, why] of Object.entries(ignored)) console.log(`  ${k} - ${why}`);

    // the other direction: a table with no wrapper, and a wrapper that only reaches one
    // platform. Both are silent at build time, which is why they get their own report.
    const gaps = parity();
    const cap = (list) => (verbose ? list : list.slice(0, 12));
    const more = (list) => (!verbose && list.length > 12 ? `\n  ... +${list.length - 12} more (--verbose for all)` : '');

    console.log(`\n${gaps.lopsidedTables.length} binding tables bound on one platform only:`);
    for (const t of gaps.lopsidedTables) {
        console.log(`  ${t.name} - bound on ${t.has.join('+') || 'neither'}, missing on ${t.missing.join(' and ')}`);
    }

    console.log(`\n${gaps.lopsidedClasses.length} plugin classes implemented on one platform only:`);
    for (const c of gaps.lopsidedClasses) {
        const why = c.sdkAndroidOnly ? '  [the SDK class is android-only]' : '';
        console.log(`  ${c.name} - no ${c.missing.join('/')} implementation${why}`);
        console.log(`      ${c.files.join(', ')}`);
    }

    console.log(`\n${gaps.undeclared.length} classes both platforms implement that no .d.ts declares:`);
    for (const c of gaps.undeclared) console.log(`  ${c.name}  (${c.files.join(', ')})`);

    console.log(`\n${gaps.unwrapped.length} SDK classes have a generated table and no plugin class at all:`);
    if (gaps.unwrapped.length) {
        console.log(
            `  ${cap(gaps.unwrapped)
                .map((t) => t.name)
                .join(', ')}${more(gaps.unwrapped)}`
        );
        console.log('  Start one with `npm run bindings -- --scaffold <Name>`.');
    }

    // a class the SDK itself only has on android is not a gap anyone can close here
    const realGaps = gaps.lopsidedClasses.filter((c) => !c.sdkAndroidOnly).length;
    const failed = rows.length + gaps.lopsidedTables.length + realGaps + gaps.undeclared.length;
    process.exit(failed ? 1 : 0);
}

if (flag('--migrate') || flag('--migrate-all')) {
    const names = flag('--migrate-all') ? [] : list('--migrate');
    if (!flag('--migrate-all') && !names.length) {
        console.log('--migrate needs at least one class name; --migrate-all does every one --coverage reports.');
        process.exit(1);
    }
    const results = migrate(names);
    let done = 0;
    for (const r of results) {
        if (r.error) console.log(`  ! ${r.name}: ${r.error}`);
        else if (r.skipped) console.log(`  = ${r.name} (${r.skipped})`);
        else {
            console.log(`  + ${r.name} -> ${r.native}  ${r.file}${r.dts ? ` (+ ${r.dts})` : ''}`);
            done++;
        }
    }
    const pruned = flag('--no-prune') ? [] : prune();
    if (pruned.length) console.log(`\n  pruned decorators the tables now cover in ${pruned.length} files`);
    console.log(`\n${done} classes bound. Review the diff: a class may need an \`exclude\``);
    console.log('for members it marshals itself, and the imports may want re-sorting.');
    process.exit(0);
}

if (flag('--audit')) {
    const rows = audit();
    const by = {};
    for (const r of rows) (by[r.kind] ??= []).push(r);

    const dedup = (rs) => {
        const seen = new Set();
        return rs.filter((r) => {
            const k = `${r.cls}.${r.key}|${r.detail}`;
            return seen.has(k) ? false : (seen.add(k), true);
        });
    };

    const dead = dedup(by.dead ?? []);
    const conv = dedup(by.converter ?? []);
    const missing = dedup(by.missing ?? []);

    console.log(`\n${dead.length} properties declared with no matching native accessor`);
    for (const r of dead) console.log(`  ${r.cls}.${r.key}  -  ${r.detail}`);

    console.log(`\n${conv.length} properties whose decorator disagrees with the native type`);
    for (const r of conv) console.log(`  ${r.cls}.${r.key}  -  ${r.detail}`);

    console.log(`\n${missing.length} classes with native accessors the plugin does not expose`);
    for (const r of verbose ? missing : missing.slice(0, 15)) console.log(`  ${r.cls}  -  ${r.detail}`);
    if (!verbose && missing.length > 15) console.log(`  ... +${missing.length - 15} more (--verbose for all)`);

    console.log('\nNote: a wrapper whose properties target one of our own NSMSF*/additions');
    console.log('subclasses shows up under "declared with no matching native accessor" -');
    console.log('the SDK base class genuinely does not declare them.');
    process.exit(0);
}

if (flag('--scaffold') || flag('--scaffold-all')) {
    const names = flag('--scaffold-all') ? [] : list('--scaffold');
    if (!flag('--scaffold-all') && !names.length) {
        console.log('--scaffold needs at least one class name; --scaffold-all writes every class.');
        process.exit(1);
    }
    const outDir = path.resolve(ROOT, value('--out') ?? 'scaffold');
    const results = scaffold(names);
    let written = 0;
    /** the ObjC headers the umbrella header has to pick up, or the clang module misses them */
    const imports = new Set();
    for (const r of results) {
        if (r.error) {
            console.log(`  skipped ${r.name}: ${r.error}`);
            continue;
        }
        const dir = path.join(outDir, ...r.pkg.split('.'));
        mkdirSync(dir, { recursive: true });
        writeFileSync(path.join(dir, `${r.name}.d.ts`), r.dts);
        writeFileSync(path.join(dir, `${r.name}.android.ts`), r.android);
        writeFileSync(path.join(dir, `${r.name}.ios.ts`), r.ios);
        written++;
        for (const l of r.listeners) {
            const shipped = [l.shipped.android && 'android', l.shipped.ios && 'iOS'].filter(Boolean);
            console.log(`  ${r.name}: listener glue for ${l.name}${shipped.length ? ` (${shipped.join(' + ')} native already in the plugin)` : ''}`);
            for (const f of l.files) {
                const target = path.join(outDir, f.path);
                mkdirSync(path.dirname(target), { recursive: true });
                writeFileSync(target, f.source);
                console.log(`      + ${f.path}`);
                if (f.path.endsWith('.h')) {
                    imports.add(path.basename(f.path));
                }
            }
        }
    }
    // one barrel per package, so a scaffolded module is importable as
    // `@nativescript-community/ui-massifmaps/<pkg>` instead of file by file
    const byPkg = new Map();
    for (const r of results) {
        if (r.error) continue;
        if (!byPkg.has(r.pkg)) byPkg.set(r.pkg, []);
        byPkg.get(r.pkg).push(r.name);
    }
    for (const [pkg, names] of byPkg) {
        const srcDir = path.join(ROOT, 'src', 'ui-massifmaps', ...pkg.split('.'));
        const shipped = existsSync(srcDir) ? readdirSync(srcDir) : [];
        if (shipped.some((f) => f.startsWith('index.'))) {
            console.log(`\n  = src/ui-massifmaps/${pkg.split('.').join('/')} already has an index - add by hand:`);
            for (const n of names.sort()) console.log(`      export * from './${n}';`);
            continue;
        }
        // a re-scaffold of one class must not drop the module's other wrappers
        const all = [...new Set([...names, ...shipped.filter((f) => f.endsWith('.d.ts')).map((f) => f.slice(0, -5))])].sort();
        const target = path.join(outDir, ...pkg.split('.'), 'index.ts');
        mkdirSync(path.dirname(target), { recursive: true });
        writeFileSync(target, `// SCAFFOLD - generated starting point, review before use.\n${all.map((n) => `export * from './${n}';`).join('\n')}\n`);
        console.log(`  + ${pkg.split('.').join('/')}/index.ts (${all.join(', ')})`);
    }
    if (imports.size) {
        // clang only sees what the umbrella header reaches, so a scaffolded header that is
        // never imported produces no metadata and the class silently misses ns.massifmaps.ios.d.ts.
        // Ship the patched umbrella alongside the headers so moving them into place carries it.
        const current = existsSync(IOS_UMBRELLA) ? readFileSync(IOS_UMBRELLA, 'utf8') : '';
        const added = [...imports].sort().filter((h) => !current.includes(`"${h}"`));
        if (added.length) {
            const target = path.join(outDir, 'platforms', 'ios', 'src', 'MassifMapsAdditions.h');
            mkdirSync(path.dirname(target), { recursive: true });
            writeFileSync(target, `${current.replace(/\n*$/, '')}\n${added.map((h) => `#import "${h}"`).join('\n')}\n`);
            console.log(`\n  + platforms/ios/src/MassifMapsAdditions.h (${added.join(', ')})`);
        }
    }
    console.log(`${written} class scaffolds -> ${path.relative(ROOT, outDir)}/  (.d.ts + .android.ts + .ios.ts each)`);
    console.log('Review, pick the right native constructor, fill in the TODOs, then move into src/ui-massifmaps/.');
    process.exit(0);
}

const r = generate({ apiUsage: !flag('--no-api-usage') });
console.log(`${r.files} classes -> src/ui-massifmaps/bindings/`);
console.log(`  ${r.methods} methods, ${r.props} synthesised properties, ${r.selectors} iOS selector overrides`);
console.log(`  wrote both native-api-usage.json files (android also keeps ${r.enums} swig enums)`);

if (r.androidOnly.length) {
    console.log(`\n${r.androidOnly.length} classes exist on android but not iOS - not bound:`);
    console.log(`  ${verbose ? r.androidOnly.join(', ') : r.androidOnly.slice(0, 12).join(', ') + ' ...'}`);
}
if (r.unmatched.length) {
    console.log(`\n${r.unmatched.length} android methods have no iOS counterpart - not bound:`);
    console.log(`  ${verbose ? r.unmatched.join('\n  ') : r.unmatched.slice(0, 10).join(', ') + ' ...'}`);
}
