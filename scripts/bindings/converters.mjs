import { readFileSync, readdirSync } from 'node:fs';
import * as path from 'node:path';
import { ROOT, TYPINGS_DIR } from '../typings/config.mjs';
import { isEnumBody } from './parse.mjs';

/**
 * Which converter (if any) a property needs, inferred from the native accessor type.
 *
 * This is the part that looked un-automatable. It mostly is not: 64% of the SDK's
 * accessors are plain number/boolean/string and need nothing at all, and the rest fall
 * into a short list of native types that already have a converter in index.{android,ios}.ts.
 * What is left over - SDK object types like Projection or Geometry - needs no converter
 * either, because the forwarder already unwraps any argument that has getNative().
 */
/**
 * `type` is what the property accepts and what a method parameter accepts - the
 * converter widens it. `returns` is what actually comes back out, which is narrower:
 * assigning `'#fff'` to a colour is fine, but the getter never hands back a string.
 */
const BY_TYPE = {
    'com.massifmaps.graphics.Color': {
        converter: 'colorConverter',
        type: 'Color | string',
        returns: 'Color',
        imports: { '@nativescript/core': ['Color'] }
    },
    'com.massifmaps.graphics.Bitmap': {
        converter: 'massifImageConverter',
        type: 'string | ImageSource | ImageAsset',
        returns: 'ImageSource',
        imports: { '@nativescript/core': ['ImageAsset', 'ImageSource'] }
    },
    'com.massifmaps.core.MapRange': { converter: 'mapRangeConverter', type: 'MapRange', plugin: { module: 'core/index', names: ['MapRange'] } },
    'com.massifmaps.core.MapVec': { converter: 'mapVecConverter', type: 'MapVec', plugin: { module: 'core/index', names: ['MapVec'] } },
    'com.massifmaps.core.StringVector': { converter: 'stringListConverter', type: 'string[]' }
};

/**
 * Every SWIG enum and its constants, from the android typings: `isEnumBody` is what decides,
 * for both consumers, and the static constants are the values `bindings/enums.ts` is built from.
 *
 * The values are the C++ enum's, so they are identical on iOS - checked over all 32 enums.
 */
function enumClasses() {
    const src = readFileSync(path.join(TYPINGS_DIR, 'massifmaps.android.d.ts'), 'utf8');
    const found = new Map();
    for (const m of src.matchAll(/export class (\w+)[^{]*\{([\s\S]*?)\n {12}\}/g)) {
        if (isEnumBody(m[2])) {
            const constants = [...m[2].matchAll(/public static ([A-Z][A-Z0-9_]*): number = (-?\d+);/g)].map((c) => [c[1], Number(c[2])]);
            found.set(m[1], constants);
        }
    }
    return found;
}

let ENUMS;

/** name -> `[[CONSTANT, value], ...]`, for every SWIG enum the SDK declares */
export function enumValues() {
    ENUMS ??= enumClasses();
    return ENUMS;
}

/** where the generated bindings put the enums the plugin does not declare by hand */
export const GENERATED_ENUMS = 'bindings/enums';

/**
 * The module a generated binding imports an enum type from: the plugin's own declaration when
 * it has one - those are the public API and keep their nominal identity - and the generated
 * module otherwise. `null` means there is no type at all and the binding falls back to `number`.
 */
export function enumHome(name) {
    return enumDeclarations().get(name) ?? (enumValues().has(name) ? GENERATED_ENUMS : null);
}

/**
 * @returns {{converter?: string, type: string, imports?: object, kind: string}}
 */
export function inferConverter(nativeType) {
    ENUMS ??= enumClasses();

    if (nativeType === 'number' || nativeType === 'boolean' || nativeType === 'string') {
        // an enum-typed accessor reaches here as `number` only when parse.mjs could not recover
        // its enum from the iOS signature - the android typings carry `@IntDef`, not the type
        return { type: nativeType, kind: 'primitive' };
    }
    const known = BY_TYPE[nativeType];
    if (known) {
        return { ...known, kind: 'converted' };
    }
    const simple = nativeType.split('.').pop();
    if (ENUMS.has(simple)) {
        // the JS side of every SWIG enum is a number; the TYPE comes from the plugin's own
        // declaration or from the generated `bindings/enums.ts` - see enumHome()
        return { type: simple, kind: 'enum', enumName: simple };
    }
    // an SDK object: the forwarder unwraps `.getNative()` on the way in, and the getter
    // hands back the native instance, which is what the current hand-written code does too
    return { type: 'any', kind: 'native', nativeType };
}

export function summarise(model, accessorsOf) {
    const counts = {};
    const byKind = {};
    for (const cls of model.values()) {
        for (const p of accessorsOf(cls.methods)) {
            const info = inferConverter(p.nativeType);
            counts[info.kind] = (counts[info.kind] ?? 0) + 1;
            (byKind[info.kind] ??= new Set()).add(p.nativeType);
        }
    }
    return { counts, byKind };
}

/**
 * Where the plugin declares each enum type, so a generated module can import it
 * rather than falling back to `number`. Scanned rather than hard-coded, so moving a
 * declaration between files does not silently degrade the generated types.
 */
let ENUM_HOME;
export function enumDeclarations() {
    if (ENUM_HOME) return ENUM_HOME;
    ENUM_HOME = new Map();
    const src = path.join(ROOT, 'src', 'ui-massifmaps');
    const walk = (dir) => {
        for (const e of readdirSync(dir, { withFileTypes: true })) {
            if (e.name === 'typings' || e.name === 'bindings') continue;
            const p = path.join(dir, e.name);
            if (e.isDirectory()) walk(p);
            else if (e.name.endsWith('.d.ts')) {
                const text = readFileSync(p, 'utf8');
                for (const m of text.matchAll(/^\s*(?:export\s+)?(?:declare\s+)?(?:const\s+)?enum\s+(\w+)/gm)) {
                    ENUM_HOME.set(m[1], path.relative(src, p).replace(/\.d\.ts$/, ''));
                }
            }
        }
    };
    walk(src);
    return ENUM_HOME;
}
