// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.layers.CompositeVectorTileLayer / MSFCompositeVectorTileLayer */
export const METHODS = ['addExternalDataSource', 'addVectorDataSource', 'clearExternalDataSourceZoomLevelBias', 'getExternalDataSourceMaxOverzoomLevel', 'getExternalDataSourceNames', 'getExternalDataSourceZoomLevelBias', 'isSinglePassRenderingEnabled', 'removeExternalDataSource', 'setExternalDataSourceMaxOverzoomLevel', 'setExternalDataSourceZoomLevelBias', 'setPreloading', 'setSinglePassRenderingEnabled', 'setZoomLevelBias'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    addExternalDataSource(arg0: string, arg1: any, arg2: number): void;
    addVectorDataSource(arg0: string, arg1: any): void;
    clearExternalDataSourceZoomLevelBias(arg0: string): void;
    getExternalDataSourceMaxOverzoomLevel(arg0: string): number;
    getExternalDataSourceNames(): string[];
    getExternalDataSourceZoomLevelBias(arg0: string): number;
    isSinglePassRenderingEnabled(): boolean;
    removeExternalDataSource(arg0: string): boolean;
    setExternalDataSourceMaxOverzoomLevel(arg0: string, arg1: number): void;
    setExternalDataSourceZoomLevelBias(arg0: string, arg1: number): void;
    setPreloading(arg0: boolean): void;
    setSinglePassRenderingEnabled(arg0: boolean): void;
    setZoomLevelBias(arg0: number): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    singlePassRenderingEnabled: ['isSinglePassRenderingEnabled', 'setSinglePassRenderingEnabled'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    singlePassRenderingEnabled: boolean;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

/** ObjC concatenates selector parts, so these names differ on iOS */
export const SELECTORS: Record<string, string> = {
    addExternalDataSource: 'addExternalDataSourceDataSourceType',
    addVectorDataSource: 'addVectorDataSourceDataSource',
    setExternalDataSourceMaxOverzoomLevel: 'setExternalDataSourceMaxOverzoomLevelLevel',
    setExternalDataSourceZoomLevelBias: 'setExternalDataSourceZoomLevelBiasBias',
};
