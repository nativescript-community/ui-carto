// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.datasources.AssetTileDataSource / MSFAssetTileDataSource */
export const METHODS = ['buildAssetPath', 'loadTile'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    buildAssetPath(arg0: string, arg1: any): string;
    loadTile(arg0: any): any;
}

export const ACCESSORS: Record<string, [string, string]> = {};

export interface Accessors {}

export const CONVERTERS = [] as const;

/** ObjC concatenates selector parts, so these names differ on iOS */
export const SELECTORS: Record<string, string> = {
    buildAssetPath: 'buildAssetPathTile',
};
