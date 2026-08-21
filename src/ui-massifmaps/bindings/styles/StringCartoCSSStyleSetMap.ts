// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.styles.StringCartoCSSStyleSetMap / MSFStringCartoCSSStyleSetMap */
export const METHODS = ['clear', 'del', 'empty', 'get', 'get_key', 'has_key', 'set', 'size'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    clear(): void;
    del(arg0: string): void;
    empty(): boolean;
    get(arg0: string): any;
    get_key(arg0: number): string;
    has_key(arg0: string): boolean;
    set(arg0: string, arg1: any): void;
    size(): number;
}

export const ACCESSORS: Record<string, [string, string]> = {};

export interface Accessors {}

export const CONVERTERS = [] as const;

/** ObjC concatenates selector parts, so these names differ on iOS */
export const SELECTORS: Record<string, string> = {
    set: 'setX',
};
