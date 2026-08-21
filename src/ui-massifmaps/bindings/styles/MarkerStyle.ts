// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

import { ImageAsset, ImageSource } from '@nativescript/core';
import { BillboardOrientation, BillboardScaling } from '../../vectorelements/index';

/** com.massifmaps.styles.MarkerStyle / MSFMarkerStyle */
export const METHODS = ['getAnchorPointX', 'getAnchorPointY', 'getBitmap', 'getClickSize', 'getOrientationMode', 'getScalingMode', 'getSize'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    getAnchorPointX(): number;
    getAnchorPointY(): number;
    getBitmap(): ImageSource;
    getClickSize(): number;
    getOrientationMode(): BillboardOrientation;
    getScalingMode(): BillboardScaling;
    getSize(): number;
}

export const ACCESSORS: Record<string, [string, string]> = {};

export interface Accessors {}

export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
