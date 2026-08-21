import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import * as path from 'node:path';
import {
    DEMO_DIR,
    HEADER,
    OUT,
    PLUGIN_AAR,
    TYPINGS_DIR,
    androidPlatformJar,
    androidSdkDir,
    debugMassifAar,
    dtsGeneratorJar,
    readGradleCoordinates
} from './config.mjs';
import { resolveAar } from './gradle.mjs';
import { modulesToNamespaces, stripSwig } from './swig.mjs';

const OUT_DIR = path.join(DEMO_DIR, 'typings', 'android');

function run(cmd, args, cwd) {
    // ns needs ANDROID_HOME to find build-tools, and GUI shells routinely do not set it
    const env = { ...process.env };
    if (!env.ANDROID_HOME) {
        env.ANDROID_HOME = androidSdkDir();
    }
    const res = spawnSync(cmd, args, { cwd, stdio: 'inherit', shell: false, env });
    if (res.error) {
        throw res.error;
    }
    if (res.status !== 0) {
        throw new Error(`${cmd} ${args.join(' ')} exited with ${res.status}`);
    }
}

/**
 * dts-generator's `-per-library` names each output after the library it came from,
 * and for an .aar that name is not predictable. Snapshot the directory, run, and
 * take whatever appeared.
 */
function generatedFiles(before) {
    return readdirSync(OUT_DIR)
        .filter((f) => f.endsWith('.d.ts') && f !== 'android-declarations.d.ts')
        .filter((f) => !before.has(f))
        .map((f) => path.join(OUT_DIR, f));
}

/**
 * `-per-library` does not split .aar inputs, so both the SDK and the plugin's own
 * additions land in one file. Split them back apart on the namespace directly under
 * `com`: `massifmaps` is the SDK, `nativescript` is com.nativescript.massifmaps.*.
 */
function splitByRootNamespace(text) {
    const lines = text.split('\n');
    const buckets = new Map();
    let i = 0;
    let preamble = [];

    while (i < lines.length) {
        const line = lines[i];
        if (!/^declare namespace com \{/.test(line)) {
            preamble.push(line);
            i++;
            continue;
        }
        const start = i;
        let depth = 0;
        do {
            const t = lines[i];
            depth += (t.match(/\{/g) || []).length - (t.match(/\}/g) || []).length;
            i++;
        } while (i < lines.length && depth > 0);

        const block = lines.slice(start, i);
        const inner = block.find((l) => /export namespace /.test(l));
        const key = inner ? inner.trim().split(/\s+/)[2] : 'massifmaps';
        if (!buckets.has(key)) buckets.set(key, []);
        buckets.get(key).push(...block, '');
    }
    return { buckets, preamble };
}

function writeBucket(lines, target, label) {
    if (!lines || !lines.length) {
        return false;
    }
    while (lines.length && !lines[lines.length - 1].trim()) {
        lines.pop();
    }
    writeFileSync(target, `${HEADER}\n${lines.join('\n')}\n`);
    console.log(`  ${label}: ${lines.length} lines -> ${path.relative(process.cwd(), target)}`);
    return true;
}

export async function generateAndroidTypings({ strict = false, version, variant, skipAdditions = false, debugMassif = !!process.env.DEBUGMASSIF } = {}) {
    let aar;
    if (debugMassif) {
        // gradle links `project(':massif')` in this mode, so the published aar would describe
        // a different SDK than the one the app actually runs
        aar = debugMassifAar();
        console.log(`DEBUGMASSIF set - SDK from the local :massif build`);
        console.log(`  ${aar}`);
        if (version || variant) {
            console.log('  note: --version/--variant ignored, they only apply to the maven aar');
        }
    } else {
        const coords = readGradleCoordinates();
        if (version) {
            coords.version = version;
        }
        if (variant) {
            coords.variant = variant;
        }
        console.log(`SDK ${coords.group}:${coords.artifact}:${coords.version} (${coords.variant})`);

        aar = await resolveAar(coords);
    }

    let generator = dtsGeneratorJar();
    if (!generator) {
        console.log('  dts-generator.jar not found, running `ns prepare android` first');
        run('ns', ['prepare', 'android'], DEMO_DIR);
        generator = dtsGeneratorJar();
        if (!generator) {
            throw new Error('dts-generator.jar still missing after `ns prepare android`');
        }
    }

    const inputs = [aar];
    if (!skipAdditions) {
        if (existsSync(PLUGIN_AAR)) {
            inputs.push(PLUGIN_AAR);
        } else {
            console.log(`  note: ${path.relative(process.cwd(), PLUGIN_AAR)} not built yet -`);
            console.log('        run an android build once, then re-run to refresh ns.massifmaps.android.d.ts');
        }
    }

    mkdirSync(OUT_DIR, { recursive: true });
    const before = new Set(readdirSync(OUT_DIR));
    // stale outputs from an earlier run would be indistinguishable from new ones
    for (const f of before) {
        if (f.endsWith('.d.ts') && f !== 'android-declarations.d.ts') {
            rmSync(path.join(OUT_DIR, f));
            before.delete(f);
        }
    }

    console.log('  running ns typings android');
    run(
        'ns',
        [
            'typings',
            'android',
            ...inputs.flatMap((i) => ['--aar', i]),
            '--skipDeclarations',
            '--super',
            androidPlatformJar(),
            '--dtsGeneratorPath',
            generator
        ],
        DEMO_DIR
    );

    const produced = generatedFiles(before);
    if (!produced.length) {
        throw new Error(`dts-generator produced no .d.ts in ${OUT_DIR}`);
    }

    mkdirSync(TYPINGS_DIR, { recursive: true });

    const raw = produced.map((f) => readFileSync(f, 'utf8')).join('\n');
    const { text, stats } = stripSwig(raw, 'android', { strict });
    console.log(
        `  filtered ${raw.split('\n').length} -> ${text.split('\n').length} lines ` +
            `(dropped ${stats.classes} swig/JNI classes, ${stats.members} members, ` +
            `${stats.swigTypeRefs} SWIGTYPE_p_* references)`
    );

    const { buckets } = splitByRootNamespace(modulesToNamespaces(text));
    writeBucket(buckets.get('massifmaps'), OUT.androidSdk, 'SDK');
    const additions = buckets.get('nativescript');
    if (additions) {
        writeBucket(additions, OUT.androidAdditions, 'additions');
    }

    const unexpected = [...buckets.keys()].filter((k) => k !== 'massifmaps' && k !== 'nativescript');
    if (unexpected.length) {
        console.log(`  note: ignored unexpected root namespaces: ${unexpected.join(', ')}`);
    }
}
