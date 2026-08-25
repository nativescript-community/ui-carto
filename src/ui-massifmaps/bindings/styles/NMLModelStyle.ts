// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

import { BillboardOrientation, BillboardScaling } from '../../vectorelements/index';
import { EnumValue } from '../enums';

/** com.massifmaps.styles.NMLModelStyle / MSFNMLModelStyle */
export const METHODS = ['getModelAsset', 'getOrientationMode', 'getScalingMode'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    getModelAsset(): any;
    getOrientationMode(): BillboardOrientation;
    getScalingMode(): BillboardScaling;
}

export const ACCESSORS: Record<string, [string, string]> = {};

export interface Accessors {}

export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
