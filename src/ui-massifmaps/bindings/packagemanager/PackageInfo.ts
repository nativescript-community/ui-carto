// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.packagemanager.PackageInfo / MSFPackageInfo */
export const METHODS = ['getMetaInfo', 'getName', 'getNames', 'getPackageId', 'getPackageType', 'getSize', 'getTileMask', 'getVersion'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    getMetaInfo(): any;
    getName(): string;
    getNames(arg0: string): string[];
    getPackageId(): string;
    getPackageType(): number;
    getSize(): any;
    getTileMask(): any;
    getVersion(): number;
}

export const ACCESSORS: Record<string, [string, string]> = {};

export interface Accessors {}

export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
