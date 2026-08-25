// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

import { ImageAsset, ImageSource } from '@nativescript/core';
import { ColorFormat, EnumValue } from '../enums';

/** com.massifmaps.graphics.Bitmap / MSFBitmap */
export const METHODS = ['compressToInternal', 'compressToPNG', 'createFromCompressed', 'getBytesPerPixel', 'getColorFormat', 'getHeight', 'getPaddedBitmap', 'getPixelData', 'getRGBABitmap', 'getResizedBitmap', 'getSubBitmap', 'getWidth'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    compressToInternal(): any;
    compressToPNG(): any;
    getBytesPerPixel(): number;
    getColorFormat(): ColorFormat;
    getHeight(): number;
    getPaddedBitmap(arg0: number, arg1: number): ImageSource;
    getPixelData(): any;
    getRGBABitmap(): ImageSource;
    getResizedBitmap(arg0: number, arg1: number): ImageSource;
    getSubBitmap(arg0: number, arg1: number, arg2: number, arg3: number): ImageSource;
    getWidth(): number;
}

export const ACCESSORS: Record<string, [string, string]> = {};

export interface Accessors {}

export const CONVERTERS = [] as const;

/** ObjC concatenates selector parts, so these names differ on iOS */
export const SELECTORS: Record<string, string> = {
    getPaddedBitmap: 'getPaddedBitmapYPadding',
    getResizedBitmap: 'getResizedBitmapHeight',
    getSubBitmap: 'getSubBitmapYOffsetWidthHeight',
};
