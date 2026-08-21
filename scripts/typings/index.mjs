#!/usr/bin/env node
import { generateAndroidTypings } from './android.mjs';
import { generateIosTypings } from './ios.mjs';

const USAGE = `
Regenerate the MassifMaps ambient typings.

With DEBUGMASSIF set in the environment the android SDK typings are read from
$MASSIF_SDK_HOME/scripts/android-dev/massif/build/outputs/aar instead of the
published maven aar, matching what include-settings.gradle links in that mode.

  node scripts/typings/index.mjs [android|ios|all] [options]

Options
  --version <v>    SDK version to use instead of include.gradle's default   (android)
  --variant <v>    full | core | lite, defaults to include.gradle's value   (android)
  --skip-additions do not regenerate ns.massifmaps.android.d.ts             (android)
  --debug-massif   read the SDK from the local :massif build                (android)
  --no-debug-massif
                   ignore DEBUGMASSIF and use the maven aar                 (android)
  --arch <a>       x86_64 | arm64, defaults to x86_64                       (ios)
  --no-build       reuse demo-svelte/typings/ios instead of rebuilding      (ios)
  --strict-swig    also drop swigValue()/swigToEnum() - breaks
                   nativeAndroidEnumProperty until that code is rewritten
`;

function parse(argv) {
    const opts = { target: 'all', strict: false, build: true, debugMassif: !!process.env.DEBUGMASSIF };
    for (let i = 0; i < argv.length; i++) {
        const a = argv[i];
        if (a === 'android' || a === 'ios' || a === 'all') opts.target = a;
        else if (a === '--version') opts.version = argv[++i];
        else if (a === '--variant') opts.variant = argv[++i];
        else if (a === '--arch') opts.arch = argv[++i];
        else if (a === '--skip-additions') opts.skipAdditions = true;
        else if (a === '--debug-massif') opts.debugMassif = true;
        else if (a === '--no-debug-massif') opts.debugMassif = false;
        else if (a === '--no-build') opts.build = false;
        else if (a === '--strict-swig') opts.strict = true;
        else if (a === '-h' || a === '--help') {
            console.log(USAGE);
            process.exit(0);
        } else {
            console.error(`unknown argument: ${a}`);
            console.log(USAGE);
            process.exit(1);
        }
    }
    return opts;
}

const opts = parse(process.argv.slice(2));

try {
    if (opts.target === 'android' || opts.target === 'all') {
        console.log('\n== android ==');
        await generateAndroidTypings(opts);
    }
    if (opts.target === 'ios' || opts.target === 'all') {
        console.log('\n== ios ==');
        await generateIosTypings(opts);
    }
    console.log('\ndone. Review the diff, then `npx tsc --build packages/ui-massifmaps/tsconfig.json`.');
} catch (err) {
    console.error(`\nfailed: ${err.message}`);
    process.exit(1);
}
