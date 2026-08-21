import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { homedir } from 'node:os';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
export const PACKAGE_DIR = path.join(ROOT, 'packages', 'ui-massifmaps');
export const DEMO_DIR = path.join(ROOT, 'demo-svelte');
export const TYPINGS_DIR = path.join(ROOT, 'src', 'ui-massifmaps', 'typings');

/** the plugin's own ObjC/Swift sources, and the umbrella header clang builds the module from */
export const IOS_SRC_DIR = path.join(PACKAGE_DIR, 'platforms', 'ios', 'src');
export const IOS_UMBRELLA = path.join(IOS_SRC_DIR, 'MassifMapsAdditions.h');

/** aar the NativeScript android build produces for this plugin's own java sources */
export const PLUGIN_AAR = path.join(PACKAGE_DIR, 'platforms', 'android', 'ui_massifmaps.aar');

/** name the two generated files carry once filtered and copied into src/ */
export const OUT = {
    androidSdk: path.join(TYPINGS_DIR, 'massifmaps.android.d.ts'),
    iosSdk: path.join(TYPINGS_DIR, 'massifmaps.ios.d.ts'),
    androidAdditions: path.join(TYPINGS_DIR, 'ns.massifmaps.android.d.ts'),
    iosAdditions: path.join(TYPINGS_DIR, 'ns.massifmaps.ios.d.ts')
};

/** Clang module names produced by the iOS build, as `typings/ios/<arch>/objc!<module>.d.ts` */
export const IOS_MODULES = {
    sdk: 'MassifMaps',
    additions: 'MassifMapsAdditions',
    /**
     * Swift classes (NSMSFMapView, NSMSFRoutingServiceAdditions, ...) are not part of the
     * MassifMapsAdditions clang module - the metadata generator puts every Swift class
     * in the app into `objc!nsswiftsupport.d.ts`. Pull ours back out by name.
     */
    swiftSupport: 'nsswiftsupport'
};

/** which declarations in nsswiftsupport belong to this plugin */
export const IOS_ADDITIONS_OWNED = /^(?:NSMSF|MassifMaps)/;

export const HEADER = [
    '/* eslint-disable @typescript-eslint/unified-signatures */',
    '/* eslint-disable @typescript-eslint/adjacent-overload-signatures */',
    '/* eslint-disable no-redeclare */',
    '',
    '// GENERATED FILE - do not edit by hand.',
    '// Regenerate with `npm run typings.android` / `npm run typings.ios`.',
    ''
].join('\n');

/**
 * Headers sitting in platforms/ios/src that MassifMapsAdditions.h does not `#import`.
 *
 * clang only puts what the umbrella header reaches into the MassifMapsAdditions module,
 * so a header that is not imported produces no metadata at all - `ns typings ios` runs
 * to completion and ns.massifmaps.ios.d.ts silently comes back without the class.
 */
export function umbrellaMissingHeaders() {
    if (!existsSync(IOS_UMBRELLA)) {
        return [];
    }
    const umbrella = readFileSync(IOS_UMBRELLA, 'utf8');
    const imported = new Set([...umbrella.matchAll(/#import\s+"([^"]+)"/g)].map((m) => m[1]));
    return readdirSync(IOS_SRC_DIR)
        .filter((f) => f.endsWith('.h') && f !== path.basename(IOS_UMBRELLA))
        .filter((f) => !imported.has(f))
        .sort();
}

/**
 * Read the SDK maven coordinates and default version straight out of include.gradle
 * so the typings can never be generated against a different version than the plugin
 * actually links.
 */
export function readGradleCoordinates() {
    const gradle = readFileSync(path.join(PACKAGE_DIR, 'platforms', 'android', 'include.gradle'), 'utf8');

    const implMatch = gradle.match(/implementation\s+"([\w.-]+):([\w.-]+):\$(\w+)"/);
    if (!implMatch) {
        throw new Error('could not find the SDK `implementation "group:artifact:$version"` line in include.gradle');
    }
    const [, group, artifact, versionProp] = implMatch;

    const versionMatch = gradle.match(new RegExp(`project\\.${versionProp}\\s*:\\s*"([^"]+)"`));
    if (!versionMatch) {
        throw new Error(`could not find the default value for ${versionProp} in include.gradle`);
    }

    const variantMatch = gradle.match(/project\.\w*[Vv]ariant\s*:\s*"([^"]+)"/);

    return { group, artifact, version: versionMatch[1], variant: variantMatch ? variantMatch[1] : 'full' };
}

/**
 * With DEBUGMASSIF set, platforms/android/include-settings.gradle swaps the maven aar for
 * `project(':massif')` built straight out of MASSIF_SDK_HOME, so the typings have to come
 * from that build too - the published aar is a different (usually older) SDK.
 */
export function debugMassifProjectDir() {
    const home = process.env.MASSIF_SDK_HOME;
    if (!home) {
        throw new Error('DEBUGMASSIF is set but MASSIF_SDK_HOME is not - cannot locate the local massif project');
    }
    return path.join(home, 'scripts', 'android-dev', 'massif');
}

/** aar the local `:massif` project produces; the most recently built variant wins */
export function debugMassifAar() {
    const dir = path.join(debugMassifProjectDir(), 'build', 'outputs', 'aar');
    const candidates = ['massif-debug.aar', 'massif-release.aar'].map((f) => path.join(dir, f)).filter((f) => existsSync(f));
    if (!candidates.length) {
        throw new Error(`DEBUGMASSIF is set but no aar under ${dir} - build the :massif project once first`);
    }
    return candidates.sort((a, b) => statSync(b).mtimeMs - statSync(a).mtimeMs)[0];
}

export function gradleCacheDir() {
    const home = process.env.GRADLE_USER_HOME ?? path.join(homedir(), '.gradle');
    return path.join(home, 'caches', 'modules-2', 'files-2.1');
}

/** ANDROID_HOME is often unset in GUI shells; fall back to the standard SDK location. */
export function androidSdkDir() {
    const candidates = [process.env.ANDROID_HOME, process.env.ANDROID_SDK_ROOT, path.join(homedir(), 'Library', 'Android', 'sdk'), path.join(homedir(), 'Android', 'Sdk')].filter(Boolean);
    const found = candidates.find((c) => existsSync(path.join(c, 'platforms')));
    if (!found) {
        throw new Error('android SDK not found - set ANDROID_HOME');
    }
    return found;
}

/** highest installed `platforms/android-NN/android.jar`, used as dts-generator's -super */
export function androidPlatformJar() {
    const platforms = path.join(androidSdkDir(), 'platforms');
    const versions = readdirSync(platforms)
        .filter((d) => /^android-\d+(\.\d+)?$/.test(d))
        .filter((d) => existsSync(path.join(platforms, d, 'android.jar')))
        .sort((a, b) => parseFloat(a.slice(8)) - parseFloat(b.slice(8)));
    if (!versions.length) {
        throw new Error(`no android.jar found under ${platforms}`);
    }
    return path.join(platforms, versions[versions.length - 1], 'android.jar');
}

export function dtsGeneratorJar() {
    const p = path.join(DEMO_DIR, 'platforms', 'android', 'build-tools', 'dts-generator.jar');
    return existsSync(p) ? p : null;
}
