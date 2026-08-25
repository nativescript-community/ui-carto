// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

import { ImageAsset, ImageSource } from '@nativescript/core';
import { LineEndType } from '../../vectorelements/line';
import { EnumValue, LineJoinType } from '../enums';

/** com.massifmaps.styles.LineStyle / MSFLineStyle */
export const METHODS = ['getBitmap', 'getClickWidth', 'getLineEndType', 'getLineJoinType', 'getStretchFactor', 'getWidth'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    getBitmap(): ImageSource;
    getClickWidth(): number;
    getLineEndType(): LineEndType;
    getLineJoinType(): LineJoinType;
    getStretchFactor(): number;
    getWidth(): number;
}

export const ACCESSORS: Record<string, [string, string]> = {};

export interface Accessors {}

export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
