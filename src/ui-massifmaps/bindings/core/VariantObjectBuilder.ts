// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.core.VariantObjectBuilder / MSFVariantObjectBuilder */
export const METHODS = ['buildVariant', 'clear', 'setBool', 'setDouble', 'setLong', 'setString', 'setVariant'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    buildVariant(): any;
    clear(): void;
    setBool(arg0: string, arg1: boolean): void;
    setDouble(arg0: string, arg1: number): void;
    setLong(arg0: string, arg1: number): void;
    setString(arg0: string, arg1: string): void;
    setVariant(arg0: string, arg1: any): void;
}

export const ACCESSORS: Record<string, [string, string]> = {};

export interface Accessors {}

export const CONVERTERS = [] as const;

/** ObjC concatenates selector parts, so these names differ on iOS */
export const SELECTORS: Record<string, string> = {
    setBool: 'setBoolVal',
    setDouble: 'setDoubleVal',
    setLong: 'setLongVal',
    setString: 'setStringStr',
    setVariant: 'setVariantVar',
};
