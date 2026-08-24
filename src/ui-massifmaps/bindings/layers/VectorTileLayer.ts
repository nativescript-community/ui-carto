// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.layers.VectorTileLayer / MSFVectorTileLayer */
export const METHODS = ['getBuildingRenderOrder', 'getClickHandlerLayerFilter', 'getClickRadius', 'getLabelBlendingSpeed', 'getLabelRenderOrder', 'getLayerBlendingSpeed', 'getRendererLayerFilter', 'getTileCacheCapacity', 'getTileDecoder', 'getVectorTileEventListener', 'setBuildingRenderOrder', 'setClickHandlerLayerFilter', 'setClickRadius', 'setLabelBlendingSpeed', 'setLabelRenderOrder', 'setLayerBlendingSpeed', 'setRendererLayerFilter', 'setTileCacheCapacity', 'setVectorTileEventListener'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    getBuildingRenderOrder(): number;
    getClickHandlerLayerFilter(): string;
    getClickRadius(): number;
    getLabelBlendingSpeed(): number;
    getLabelRenderOrder(): number;
    getLayerBlendingSpeed(): number;
    getRendererLayerFilter(): string;
    getTileCacheCapacity(): number;
    getTileDecoder(): any;
    getVectorTileEventListener(): any;
    setBuildingRenderOrder(arg0: number): void;
    setClickHandlerLayerFilter(arg0: string): void;
    setClickRadius(arg0: number): void;
    setLabelBlendingSpeed(arg0: number): void;
    setLabelRenderOrder(arg0: number): void;
    setLayerBlendingSpeed(arg0: number): void;
    setRendererLayerFilter(arg0: string): void;
    setTileCacheCapacity(arg0: number): void;
    setVectorTileEventListener(arg0: any): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    buildingRenderOrder: ['getBuildingRenderOrder', 'setBuildingRenderOrder'],
    clickHandlerLayerFilter: ['getClickHandlerLayerFilter', 'setClickHandlerLayerFilter'],
    clickRadius: ['getClickRadius', 'setClickRadius'],
    labelBlendingSpeed: ['getLabelBlendingSpeed', 'setLabelBlendingSpeed'],
    labelRenderOrder: ['getLabelRenderOrder', 'setLabelRenderOrder'],
    layerBlendingSpeed: ['getLayerBlendingSpeed', 'setLayerBlendingSpeed'],
    rendererLayerFilter: ['getRendererLayerFilter', 'setRendererLayerFilter'],
    tileCacheCapacity: ['getTileCacheCapacity', 'setTileCacheCapacity'],
    vectorTileEventListener: ['getVectorTileEventListener', 'setVectorTileEventListener'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    buildingRenderOrder: number;
    clickHandlerLayerFilter: string;
    clickRadius: number;
    labelBlendingSpeed: number;
    labelRenderOrder: number;
    layerBlendingSpeed: number;
    rendererLayerFilter: string;
    tileCacheCapacity: number;
    vectorTileEventListener: any;  // com.massifmaps.layers.VectorTileEventListener
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
