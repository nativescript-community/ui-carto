// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.vectortiles.TorqueTileDecoder / MSFTorqueTileDecoder */
export const METHODS = ['addFallbackFont', 'getAnimationDuration', 'getFrameCount', 'getMaxZoom', 'getMinZoom', 'getResolution', 'getStyleSet', 'setStyleSet'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    addFallbackFont(arg0: any): void;
    getAnimationDuration(): number;
    getFrameCount(): number;
    getMaxZoom(): number;
    getMinZoom(): number;
    getResolution(): number;
    getStyleSet(): any;
    setStyleSet(arg0: any): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    styleSet: ['getStyleSet', 'setStyleSet'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    styleSet: any;  // com.massifmaps.styles.CartoCSSStyleSet
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
