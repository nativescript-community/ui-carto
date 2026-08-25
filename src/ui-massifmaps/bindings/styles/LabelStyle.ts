// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

import { BillboardOrientation, BillboardScaling } from '../../vectorelements/index';
import { EnumValue } from '../enums';

/** com.massifmaps.styles.LabelStyle / MSFLabelStyle */
export const METHODS = ['getAnchorPointX', 'getAnchorPointY', 'getOrientationMode', 'getRenderScale', 'getScalingMode', 'isFlippable'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    getAnchorPointX(): number;
    getAnchorPointY(): number;
    getOrientationMode(): BillboardOrientation;
    getRenderScale(): number;
    getScalingMode(): BillboardScaling;
    isFlippable(): boolean;
}

export const ACCESSORS: Record<string, [string, string]> = {};

export interface Accessors {}

export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
