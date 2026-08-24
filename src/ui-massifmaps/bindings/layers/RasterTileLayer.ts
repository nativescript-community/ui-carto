// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.layers.RasterTileLayer / MSFRasterTileLayer */
export const METHODS = ['getRasterTileEventListener', 'getTextureCacheCapacity', 'getTileBlendingSpeed', 'getTileFilterMode', 'setRasterTileEventListener', 'setTextureCacheCapacity', 'setTileBlendingSpeed', 'setTileFilterMode'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    getRasterTileEventListener(): any;
    getTextureCacheCapacity(): number;
    getTileBlendingSpeed(): number;
    getTileFilterMode(): number;
    setRasterTileEventListener(arg0: any): void;
    setTextureCacheCapacity(arg0: number): void;
    setTileBlendingSpeed(arg0: number): void;
    setTileFilterMode(arg0: number): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    rasterTileEventListener: ['getRasterTileEventListener', 'setRasterTileEventListener'],
    textureCacheCapacity: ['getTextureCacheCapacity', 'setTextureCacheCapacity'],
    tileBlendingSpeed: ['getTileBlendingSpeed', 'setTileBlendingSpeed'],
    tileFilterMode: ['getTileFilterMode', 'setTileFilterMode'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    rasterTileEventListener: any;  // com.massifmaps.layers.RasterTileEventListener
    textureCacheCapacity: number;
    tileBlendingSpeed: number;
    tileFilterMode: number;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
