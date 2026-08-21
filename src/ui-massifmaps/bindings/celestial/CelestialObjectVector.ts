// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.celestial.CelestialObjectVector / MSFCelestialObjectVector */
export const METHODS = ['add', 'capacity', 'clear', 'get', 'isEmpty', 'reserve', 'set', 'size'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    add(arg0: any): void;
    capacity(): number;
    clear(): void;
    get(arg0: number): any;
    isEmpty(): boolean;
    reserve(arg0: number): void;
    set(arg0: number, arg1: any): void;
    size(): number;
}

export const ACCESSORS: Record<string, [string, string]> = {};

export interface Accessors {}

export const CONVERTERS = [] as const;

/** ObjC concatenates selector parts, so these names differ on iOS */
export const SELECTORS: Record<string, string> = {
    set: 'setVal',
};
