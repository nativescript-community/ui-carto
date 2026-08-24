// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.ui.VectorTileClickInfo / MSFVectorTileClickInfo */
export const METHODS = ['getClickInfo', 'getClickPos', 'getClickType', 'getFeature', 'getFeatureClickPos', 'getFeatureId', 'getFeatureLayerName', 'getFeaturePos', 'getFeaturePosIndex', 'getLayer', 'getMapTile'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    getClickInfo(): any;
    getClickPos(): any;
    getClickType(): number;
    getFeature(): any;
    getFeatureClickPos(): any;
    getFeatureId(): number;
    getFeatureLayerName(): string;
    getFeaturePos(): any;
    getFeaturePosIndex(): number;
    getLayer(): any;
    getMapTile(): any;
}

export const ACCESSORS: Record<string, [string, string]> = {};

export interface Accessors {}

export const CONVERTERS = [] as const;

/** ObjC concatenates selector parts, so these names differ on iOS */
export const SELECTORS: Record<string, string> = {
    getFeaturePos: 'getFeaturePosIndex',
};
