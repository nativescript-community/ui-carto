// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.datasources.GeoJSONVectorTileDataSource / MSFGeoJSONVectorTileDataSource */
export const METHODS = ['addGeoJSONFeature', 'addGeoJSONStringFeature', 'createLayer', 'deleteLayer', 'getDataExtent', 'getDefaultLayerBuffer', 'getSimplifyTolerance', 'loadTile', 'removeGeoJSONFeature', 'setDefaultLayerBuffer', 'setLayerFeatureCollection', 'setLayerGeoJSON', 'setLayerGeoJSONString', 'setSimplifyTolerance', 'updateGeoJSONFeature', 'updateGeoJSONStringFeature'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    addGeoJSONFeature(arg0: number, arg1: any): void;
    addGeoJSONStringFeature(arg0: number, arg1: string): void;
    createLayer(arg0: string): number;
    deleteLayer(arg0: number): void;
    getDataExtent(): any;
    getDefaultLayerBuffer(): number;
    getSimplifyTolerance(): number;
    loadTile(arg0: any): any;
    removeGeoJSONFeature(arg0: number, arg1: any): void;
    setDefaultLayerBuffer(arg0: number): void;
    setLayerFeatureCollection(arg0: number, arg1: any, arg2: any): void;
    setLayerGeoJSON(arg0: number, arg1: any): void;
    setLayerGeoJSONString(arg0: number, arg1: string): void;
    setSimplifyTolerance(arg0: number): void;
    updateGeoJSONFeature(arg0: number, arg1: any): void;
    updateGeoJSONStringFeature(arg0: number, arg1: string): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    defaultLayerBuffer: ['getDefaultLayerBuffer', 'setDefaultLayerBuffer'],
    simplifyTolerance: ['getSimplifyTolerance', 'setSimplifyTolerance'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    defaultLayerBuffer: number;
    simplifyTolerance: number;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

/** ObjC concatenates selector parts, so these names differ on iOS */
export const SELECTORS: Record<string, string> = {
    addGeoJSONFeature: 'addGeoJSONFeatureGeoJSON',
    addGeoJSONStringFeature: 'addGeoJSONStringFeatureGeoJSON',
    removeGeoJSONFeature: 'removeGeoJSONFeatureArg2',
    setLayerFeatureCollection: 'setLayerFeatureCollectionProjectionFeatureCollection',
    setLayerGeoJSON: 'setLayerGeoJSONGeoJSON',
    setLayerGeoJSONString: 'setLayerGeoJSONStringGeoJSON',
    updateGeoJSONFeature: 'updateGeoJSONFeatureGeoJSON',
    updateGeoJSONStringFeature: 'updateGeoJSONStringFeatureGeoJSON',
};
