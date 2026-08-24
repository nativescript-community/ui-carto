// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.styles.NMLModelStyleBuilder / MSFNMLModelStyleBuilder */
export const METHODS = ['buildStyle', 'getModelAsset', 'getOrientationMode', 'getScalingMode', 'setModelAsset', 'setOrientationMode', 'setScalingMode'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    buildStyle(): any;
    getModelAsset(): any;
    getOrientationMode(): number;
    getScalingMode(): number;
    setModelAsset(arg0: any): void;
    setOrientationMode(arg0: number): void;
    setScalingMode(arg0: number): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    modelAsset: ['getModelAsset', 'setModelAsset'],
    orientationMode: ['getOrientationMode', 'setOrientationMode'],
    scalingMode: ['getScalingMode', 'setScalingMode'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    modelAsset: any;  // com.massifmaps.core.BinaryData
    orientationMode: number;
    scalingMode: number;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
