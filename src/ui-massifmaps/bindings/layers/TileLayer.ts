// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.layers.TileLayer / MSFTileLayer */
export const METHODS = ['calculateMapTile', 'calculateMapTileBounds', 'calculateMapTileOrigin', 'clearTileCaches', 'consumeShadowCastersMissingElevation', 'getDataSource', 'getFrameNr', 'getMaxOverzoomLevel', 'getMaxStandInLevel', 'getMaxUnderzoomLevel', 'getTileLoadListener', 'getTileSubstitutionPolicy', 'getUTFGridDataSource', 'getUTFGridEventListener', 'getZoomLevelBias', 'isPreloading', 'isSynchronizedRefresh', 'isUpdateInProgress', 'setFrameNr', 'setMaxOverzoomLevel', 'setMaxStandInLevel', 'setMaxUnderzoomLevel', 'setPreloading', 'setSynchronizedRefresh', 'setTerrainShadowMask', 'setTileLoadListener', 'setTileSubstitutionPolicy', 'setUTFGridDataSource', 'setUTFGridEventListener', 'setZoomLevelBias'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    calculateMapTile(arg0: any, arg1: number): any;
    calculateMapTileBounds(arg0: any): any;
    calculateMapTileOrigin(arg0: any): any;
    clearTileCaches(arg0: boolean): void;
    consumeShadowCastersMissingElevation(): number;
    getDataSource(): any;
    getFrameNr(): number;
    getMaxOverzoomLevel(): number;
    getMaxStandInLevel(): number;
    getMaxUnderzoomLevel(): number;
    getTileLoadListener(): any;
    getTileSubstitutionPolicy(): number;
    getUTFGridDataSource(): any;
    getUTFGridEventListener(): any;
    getZoomLevelBias(): number;
    isPreloading(): boolean;
    isSynchronizedRefresh(): boolean;
    isUpdateInProgress(): boolean;
    setFrameNr(arg0: number): void;
    setMaxOverzoomLevel(arg0: number): void;
    setMaxStandInLevel(arg0: number): void;
    setMaxUnderzoomLevel(arg0: number): void;
    setPreloading(arg0: boolean): void;
    setSynchronizedRefresh(arg0: boolean): void;
    setTerrainShadowMask(arg0: number, arg1: number, arg2: number): void;
    setTileLoadListener(arg0: any): void;
    setTileSubstitutionPolicy(arg0: number): void;
    setUTFGridDataSource(arg0: any): void;
    setUTFGridEventListener(arg0: any): void;
    setZoomLevelBias(arg0: number): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    frameNr: ['getFrameNr', 'setFrameNr'],
    maxOverzoomLevel: ['getMaxOverzoomLevel', 'setMaxOverzoomLevel'],
    maxStandInLevel: ['getMaxStandInLevel', 'setMaxStandInLevel'],
    maxUnderzoomLevel: ['getMaxUnderzoomLevel', 'setMaxUnderzoomLevel'],
    preloading: ['isPreloading', 'setPreloading'],
    synchronizedRefresh: ['isSynchronizedRefresh', 'setSynchronizedRefresh'],
    tileLoadListener: ['getTileLoadListener', 'setTileLoadListener'],
    tileSubstitutionPolicy: ['getTileSubstitutionPolicy', 'setTileSubstitutionPolicy'],
    utfGridDataSource: ['getUTFGridDataSource', 'setUTFGridDataSource'],
    utfGridEventListener: ['getUTFGridEventListener', 'setUTFGridEventListener'],
    zoomLevelBias: ['getZoomLevelBias', 'setZoomLevelBias'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    frameNr: number;
    maxOverzoomLevel: number;
    maxStandInLevel: number;
    maxUnderzoomLevel: number;
    preloading: boolean;
    synchronizedRefresh: boolean;
    tileLoadListener: any;  // com.massifmaps.layers.TileLoadListener
    tileSubstitutionPolicy: number;
    utfGridDataSource: any;  // com.massifmaps.datasources.TileDataSource
    utfGridEventListener: any;  // com.massifmaps.layers.UTFGridEventListener
    zoomLevelBias: number;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

/** ObjC concatenates selector parts, so these names differ on iOS */
export const SELECTORS: Record<string, string> = {
    calculateMapTile: 'calculateMapTileZoom',
    setTerrainShadowMask: 'setTerrainShadowMaskInvScreenWidthInvScreenHeight',
};
