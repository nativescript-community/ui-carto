import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import * as path from 'node:path';
import { DEMO_DIR, HEADER, IOS_ADDITIONS_OWNED, IOS_MODULES, OUT, TYPINGS_DIR, umbrellaMissingHeaders } from './config.mjs';
import { fixReservedParams, stripSwig, topLevelBlocks } from './swig.mjs';

const OUT_DIR = path.join(DEMO_DIR, 'typings', 'ios');

/**
 * `ns typings ios` is a full `ns build ios` with TNS_TYPESCRIPT_DECLARATIONS_PATH set;
 * there is no cheaper way to get the metadata. Takes minutes on a cold build.
 */
function runBuild() {
    const res = spawnSync('ns', ['typings', 'ios'], { cwd: DEMO_DIR, stdio: 'inherit', shell: false });
    if (res.error) {
        throw res.error;
    }
    if (res.status !== 0) {
        throw new Error(`ns typings ios exited with ${res.status}`);
    }
}

function pickArch(preferred) {
    if (!existsSync(OUT_DIR)) {
        return null;
    }
    const arches = readdirSync(OUT_DIR).filter((d) => existsSync(path.join(OUT_DIR, d)));
    if (!arches.length) {
        return null;
    }
    if (preferred && arches.includes(preferred)) {
        return preferred;
    }
    // x86_64 (simulator) first: it is what a plain `ns typings ios` produces by default
    return arches.find((a) => a === 'x86_64') ?? arches[0];
}

function readModule(archDir, moduleName) {
    const source = path.join(archDir, `objc!${moduleName}.d.ts`);
    return existsSync(source) ? readFileSync(source, 'utf8') : null;
}

function convert(archDir, moduleName, target, { strict, extraFrom }) {
    let raw = readModule(archDir, moduleName);
    if (raw === null) {
        console.log(`  skipped ${moduleName}: objc!${moduleName}.d.ts not produced`);
        return false;
    }
    if (extraFrom) {
        const extraSource = readModule(archDir, extraFrom);
        if (extraSource) {
            const owned = topLevelBlocks(extraSource).filter((b) => IOS_ADDITIONS_OWNED.test(b.name));
            if (owned.length) {
                console.log(`  + ${owned.length} declarations from ${extraFrom}: ${[...new Set(owned.map((b) => b.name))].join(', ')}`);
                raw += '\n' + owned.map((b) => b.lines.join('\n')).join('\n\n') + '\n';
            }
        }
    }
    const { text, stats } = stripSwig(raw, 'ios', { strict });
    mkdirSync(path.dirname(target), { recursive: true });
    writeFileSync(target, `${HEADER}\n${fixReservedParams(text)}\n`);
    console.log(
        `  ${moduleName}: ${raw.split('\n').length} -> ${text.split('\n').length} lines ` +
            `(dropped ${stats.classes} SWIGTYPE classes, ${stats.members} members, ` +
            `${stats.swigTypeRefs} SWIGTYPE_p_* references)`
    );
    console.log(`  wrote ${path.relative(process.cwd(), target)}`);
    return true;
}

export async function generateIosTypings({ strict = false, arch, build = true } = {}) {
    // has to happen before the build: a header the umbrella misses is simply absent from
    // the clang module, and the run finishes "successfully" with the class nowhere in sight
    const unreferenced = umbrellaMissingHeaders();
    if (unreferenced.length) {
        console.log(`  ! platforms/ios/src/MassifMapsAdditions.h does not #import ${unreferenced.join(', ')}`);
        console.log('    those classes will be missing from ns.massifmaps.ios.d.ts - add the #import first');
    }

    if (build) {
        console.log('  running ns typings ios (full iOS build, this takes a while)');
        runBuild();
    } else {
        console.log('  --no-build: reusing the typings already in demo-svelte/typings/ios');
    }

    const picked = pickArch(arch);
    if (!picked) {
        throw new Error(`no architecture directory under ${OUT_DIR} - run without --no-build first`);
    }
    console.log(`  using arch ${picked}`);
    const archDir = path.join(OUT_DIR, picked);

    mkdirSync(TYPINGS_DIR, { recursive: true });
    const sdk = convert(archDir, IOS_MODULES.sdk, OUT.iosSdk, { strict, extraFrom: null });
    convert(archDir, IOS_MODULES.additions, OUT.iosAdditions, { strict, extraFrom: IOS_MODULES.swiftSupport });

    if (!sdk) {
        throw new Error(`objc!${IOS_MODULES.sdk}.d.ts was not generated - check that the framework is linked ` + 'and that the build actually succeeded');
    }
}
