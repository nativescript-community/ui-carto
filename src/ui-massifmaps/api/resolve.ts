/**
 * @internal
 * @module
 */
import { ALIASES, BASES, CLASS_NAMES, ENUMS, EVENTS, KIND_OF_CLASS, METHODS, PROPS, SPEC_CLASS } from './schema';

/**
 * An unresolvable path is not an error: an intermediate object is often more derived than declared
 * (a layer's `tileDecoder` is really an MBVectorTileDecoder), so callers fall back to a string read.
 */

/**
 * b bool, i int, f float, c color, s string, v variant, t struct, p position, e enum, o object,
 * g bag - a property whose keys are the app's, where the rest of the path is one key.
 */
export type PropCode = 'b' | 'i' | 'f' | 'c' | 's' | 'v' | 't' | 'p' | 'e' | 'o' | 'g';

export interface PropInfo {
    code: PropCode;
    /** The enum's name for `e`, the declared class for `o`, one entry's code for `g`. */
    arg?: string;
}

/** v void, b bool, i int, f float, s string, j json, d doubles, o object. */
export type ResultCode = 'v' | 'b' | 'i' | 'f' | 's' | 'j' | 'd' | 'o';

export interface MethodInfo {
    code: ResultCode;
    /** The result's class, for `o`. */
    arg?: string;
}

const propCache: { [cls: string]: { [name: string]: PropInfo } } = {};
const aliasCache: { [cls: string]: { [alias: string]: string } } = {};
const methodCache: { [cls: string]: { [name: string]: MethodInfo } } = {};

function parseProps(cls: string) {
    let table = propCache[cls];
    if (!table) {
        table = propCache[cls] = {};
        const encoded = PROPS[cls];
        if (encoded) {
            for (const entry of encoded.split(';')) {
                const [name, code, arg] = entry.split(',');
                table[name] = arg ? { code: code as PropCode, arg } : { code: code as PropCode };
            }
        }
    }
    return table;
}

function parseAliases(cls: string) {
    let table = aliasCache[cls];
    if (!table) {
        table = aliasCache[cls] = {};
        const encoded = ALIASES[cls];
        if (encoded) {
            for (const entry of encoded.split(';')) {
                const [alias, path] = entry.split('=');
                table[alias] = path;
            }
        }
    }
    return table;
}

function parseMethods(cls: string) {
    let table = methodCache[cls];
    if (!table) {
        table = methodCache[cls] = {};
        const encoded = METHODS[cls];
        if (encoded) {
            for (const entry of encoded.split(';')) {
                const [name, code, arg] = entry.split(',');
                table[name] = arg ? { code: code as ResultCode, arg } : { code: code as ResultCode };
            }
        }
    }
    return table;
}

/** Nearest first. Used to hang getters off an event payload (`e.reason` rather than `e.get('reason')`). */
export function propertyNames(cls: string): string[] {
    const names: string[] = [];
    let walk: string | undefined = cls;
    while (walk) {
        for (const name of Object.keys(parseProps(walk))) {
            if (names.indexOf(name) < 0) {
                names.push(name);
            }
        }
        walk = BASES[walk];
    }
    return names;
}

/** An alias is a second spelling of one segment (`fog` for `fogOptions`). */
export function findProperty(cls: string, name: string): PropInfo | null {
    let walk: string | undefined = cls;
    while (walk) {
        const found = parseProps(walk)[name] ?? parseProps(walk)[parseAliases(walk)[name]];
        if (found) {
            return found;
        }
        walk = BASES[walk];
    }
    return null;
}

/**
 * A path walking into a struct or variant (`feature.properties.name`) resolves to `v`: the C++
 * reads the leaf out of the JSON with a type this table cannot know.
 */
export function resolvePath(cls: string, path: string): PropInfo | null {
    if (!path) {
        return null;
    }
    const segments = path.split('.');
    let current = cls;
    for (let i = 0; i < segments.length; i++) {
        const prop = findProperty(current, segments[i]);
        if (!prop) {
            return null;
        }
        if (i === segments.length - 1) {
            // A bag written whole takes an object of entries, which crosses as JSON.
            return prop.code === 'g' ? { code: 'v' } : prop;
        }
        if (prop.code === 'o') {
            current = prop.arg as string;
            continue;
        }
        // A bag: everything left is ONE key, whatever it contains - valhalla's parameters nest.
        if (prop.code === 'g') {
            return { code: (prop.arg as PropCode) ?? 's' };
        }
        // A struct or a variant: the rest of the path is read out of its JSON.
        return prop.code === 't' || prop.code === 'p' || prop.code === 'v' ? { code: 'v' } : null;
    }
    return null;
}

export function findMethod(cls: string, name: string): MethodInfo | null {
    let walk: string | undefined = cls;
    while (walk) {
        const found = parseMethods(walk)[name];
        if (found) {
            return found;
        }
        walk = BASES[walk];
    }
    return null;
}

/** A method addressed through a path: everything before the last dot traverses objects. */
export function resolveMethod(cls: string, path: string): MethodInfo | null {
    const cut = path.lastIndexOf('.');
    if (cut < 0) {
        return findMethod(cls, path);
    }
    const owner = resolvePath(cls, path.substring(0, cut));
    return owner && owner.code === 'o' ? findMethod(owner.arg as string, path.substring(cut + 1)) : null;
}

export interface EventInfo {
    /** The payload's class, or '' when the event carries none. */
    payload: string;
    /** Whether the SDK asks the listener if the event was consumed. */
    consume: boolean;
}

export function findEvent(cls: string, event: string): EventInfo | null {
    let walk: string | undefined = cls;
    while (walk) {
        const table = EVENTS[walk];
        if (table && event in table) {
            return table[event];
        }
        walk = BASES[walk];
    }
    return null;
}

export function eventNames(cls: string): string[] {
    const names: string[] = [];
    let walk: string | undefined = cls;
    while (walk) {
        for (const name of Object.keys(EVENTS[walk] ?? {})) {
            if (names.indexOf(name) < 0) {
                names.push(name);
            }
        }
        walk = BASES[walk];
    }
    return names;
}

// Built lazily so an app that never touches an enum property pays nothing.
interface EnumTables {
    byName: { [name: string]: number };
    byValue: { [enumType: string]: { [value: string]: string } };
}

let enumTables: EnumTables | undefined;

function tables(): EnumTables {
    if (!enumTables) {
        const built: EnumTables = { byName: {}, byValue: {} };
        for (const enumType of Object.keys(ENUMS)) {
            const reverse: { [value: string]: string } = (built.byValue[enumType] = {});
            for (const member of ENUMS[enumType].split(',')) {
                const cut = member.lastIndexOf('=');
                const name = member.substring(0, cut);
                const value = member.substring(cut + 1);
                built.byName[name] = Number(value);
                reverse[value] = name;
            }
        }
        enumTables = built;
    }
    return enumTables;
}

export function enumValue(name: string): number | undefined {
    return tables().byName[name];
}

/** The constant name for a value, so a read comes back as the string the typings promise. */
export function enumName(enumType: string | undefined, value: number): string | number {
    const table = enumType ? tables().byValue[enumType] : undefined;
    return table && table[value] !== undefined ? table[value] : value;
}

export function classOfSpec(kind: string, type: string): string | null {
    return SPEC_CLASS[kind]?.[type] ?? null;
}

/** Which kind builds a class, for a spec written into an object property. */
export function specKindOf(cppClass: string): string | null {
    return KIND_OF_CLASS[cppClass] ?? null;
}

let known: { [short: string]: true } | undefined;

function knownClasses() {
    if (!known) {
        known = {};
        for (const name of CLASS_NAMES.split(',')) {
            known[name] = true;
        }
    }
    return known;
}

/** `VectorTileLayer` (the Java/ObjC leaf) to `massif::VectorTileLayer`. */
export function classOfShortName(short: string | null): string | null {
    return short && knownClasses()[short] ? `massif::${short}` : null;
}

export function isKnownClass(cls: string): boolean {
    return !!knownClasses()[cls.replace('massif::', '')];
}

/** `instanceof` over class names: the facade addresses classes by name, not JS prototypes. */
export function isSubclassOf(cls: string, base: string): boolean {
    let walk: string | undefined = cls;
    while (walk) {
        if (walk === base) {
            return true;
        }
        walk = BASES[walk];
    }
    return false;
}
