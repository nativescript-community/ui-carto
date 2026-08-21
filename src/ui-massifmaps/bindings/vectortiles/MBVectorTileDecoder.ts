// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.vectortiles.MBVectorTileDecoder / MSFMBVectorTileDecoder */
export const METHODS = ['addFallbackFont', 'getCartoCSSStyleSet', 'getCompiledStyleSet', 'getMaxZoom', 'getMinZoom', 'getStyleLayerNames', 'getStyleParameter', 'getStyleParameters', 'getTileFormat', 'isFeatureIdOverride', 'parseTileFormat', 'setCartoCSSStyleSet', 'setCompiledStyleSet', 'setFeatureIdOverride', 'setJSONStyleParameters', 'setStyleParameter', 'setStyleParameters', 'setTileFormat'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    addFallbackFont(arg0: any): void;
    getCartoCSSStyleSet(): any;
    getCompiledStyleSet(): any;
    getMaxZoom(): number;
    getMinZoom(): number;
    getStyleLayerNames(): string[];
    getStyleParameter(arg0: string): string;
    getStyleParameters(): string[];
    getTileFormat(): number;
    isFeatureIdOverride(): boolean;
    setCartoCSSStyleSet(arg0: any): void;
    setCompiledStyleSet(arg0: any): void;
    setFeatureIdOverride(arg0: boolean): void;
    setJSONStyleParameters(arg0: string): void;
    setStyleParameter(arg0: string, arg1: string): boolean;
    setStyleParameters(arg0: any): void;
    setTileFormat(arg0: number): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    cartoCSSStyleSet: ['getCartoCSSStyleSet', 'setCartoCSSStyleSet'],
    compiledStyleSet: ['getCompiledStyleSet', 'setCompiledStyleSet'],
    featureIdOverride: ['isFeatureIdOverride', 'setFeatureIdOverride'],
    styleParameters: ['getStyleParameters', 'setStyleParameters'],
    tileFormat: ['getTileFormat', 'setTileFormat'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    cartoCSSStyleSet: any;  // com.massifmaps.styles.CartoCSSStyleSet
    compiledStyleSet: any;  // com.massifmaps.styles.CompiledStyleSet
    featureIdOverride: boolean;
    styleParameters: string[];
    tileFormat: number;  // com.massifmaps.vectortiles.TileFormat
}

/** properties needing a converter, and which one */
export const CONVERTERS = [['styleParameters', 'stringListConverter']] as const;

/** ObjC concatenates selector parts, so these names differ on iOS */
export const SELECTORS: Record<string, string> = {
    setStyleParameter: 'setStyleParameterValue',
};
