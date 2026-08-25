// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

import { BillboardOrientation, BillboardScaling } from '../../vectorelements/index';
import { EnumValue } from '../enums';

/** com.massifmaps.styles.NMLModelStyleBuilder / MSFNMLModelStyleBuilder */
export const METHODS = ['buildStyle', 'getModelAsset', 'getOrientationMode', 'getScalingMode', 'setModelAsset', 'setOrientationMode', 'setScalingMode'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    buildStyle(): any;
    getModelAsset(): any;
    getOrientationMode(): BillboardOrientation;
    getScalingMode(): BillboardScaling;
    setModelAsset(arg0: any): void;
    setOrientationMode(arg0: EnumValue<BillboardOrientation>): void;
    setScalingMode(arg0: EnumValue<BillboardScaling>): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    modelAsset: ['getModelAsset', 'setModelAsset'],
    orientationMode: ['getOrientationMode', 'setOrientationMode'],
    scalingMode: ['getScalingMode', 'setScalingMode'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    modelAsset: any;  // com.massifmaps.core.BinaryData
    orientationMode: EnumValue<BillboardOrientation>;  // com.massifmaps.styles.BillboardOrientation
    scalingMode: EnumValue<BillboardScaling>;  // com.massifmaps.styles.BillboardScaling
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
