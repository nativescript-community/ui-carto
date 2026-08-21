// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

import { BillboardOrientation, BillboardScaling } from '../../vectorelements/index';

/** com.massifmaps.styles.NMLModelStyleBuilder / MSFNMLModelStyleBuilder */
export const METHODS = ['buildStyle', 'getModelAsset', 'getOrientationMode', 'getScalingMode', 'setModelAsset', 'setOrientationMode', 'setScalingMode'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    buildStyle(): any;
    getModelAsset(): any;
    getOrientationMode(): BillboardOrientation;
    getScalingMode(): BillboardScaling;
    setModelAsset(arg0: any): void;
    setOrientationMode(arg0: BillboardOrientation): void;
    setScalingMode(arg0: BillboardScaling): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    modelAsset: ['getModelAsset', 'setModelAsset'],
    orientationMode: ['getOrientationMode', 'setOrientationMode'],
    scalingMode: ['getScalingMode', 'setScalingMode'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    modelAsset: any;  // com.massifmaps.core.BinaryData
    orientationMode: BillboardOrientation;  // com.massifmaps.styles.BillboardOrientation
    scalingMode: BillboardScaling;  // com.massifmaps.styles.BillboardScaling
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
