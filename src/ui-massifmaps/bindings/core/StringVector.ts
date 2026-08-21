// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.core.StringVector / MSFStringVector */
export const METHODS = ['add', 'capacity', 'clear', 'get', 'isEmpty', 'reserve', 'set', 'size'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    add(arg0: string): void;
    capacity(): number;
    clear(): void;
    get(arg0: number): string;
    isEmpty(): boolean;
    reserve(arg0: number): void;
    set(arg0: number, arg1: string): void;
    size(): number;
}

export const ACCESSORS: Record<string, [string, string]> = {};

export interface Accessors {}

export const CONVERTERS = [] as const;

/** ObjC concatenates selector parts, so these names differ on iOS */
export const SELECTORS: Record<string, string> = {
    set: 'setVal',
};
