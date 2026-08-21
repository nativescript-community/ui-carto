// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

import { Color, ImageAsset, ImageSource } from '@nativescript/core';

/** com.massifmaps.layers.SolidLayer / MSFSolidLayer */
export const METHODS = ['getBitmap', 'getBitmapScale', 'getColor', 'isUpdateInProgress', 'setBitmap', 'setBitmapScale', 'setColor'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    getBitmap(): ImageSource;
    getBitmapScale(): number;
    getColor(): Color;
    isUpdateInProgress(): boolean;
    setBitmap(arg0: string | ImageSource | ImageAsset): void;
    setBitmapScale(arg0: number): void;
    setColor(arg0: Color | string): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    bitmap: ['getBitmap', 'setBitmap'],
    bitmapScale: ['getBitmapScale', 'setBitmapScale'],
    color: ['getColor', 'setColor'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    bitmap: string | ImageSource | ImageAsset;
    bitmapScale: number;
    color: Color | string;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [['bitmap', 'massifImageConverter'], ['color', 'colorConverter']] as const;

export const SELECTORS: Record<string, string> = {};
