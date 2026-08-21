// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

import { ImageAsset, ImageSource } from '@nativescript/core';

/** com.massifmaps.vectorelements.CustomPopup / MSFCustomPopup */
export const METHODS = ['drawBitmap', 'getPopupHandler', 'processClick'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    drawBitmap(arg0: any, arg1: number, arg2: number, arg3: number): ImageSource;
    getPopupHandler(): any;
    processClick(arg0: any, arg1: any, arg2: any): boolean;
}

export const ACCESSORS: Record<string, [string, string]> = {};

export interface Accessors {}

export const CONVERTERS = [] as const;

/** ObjC concatenates selector parts, so these names differ on iOS */
export const SELECTORS: Record<string, string> = {
    drawBitmap: 'drawBitmapScreenWidthScreenHeightDpToPX',
    processClick: 'processClickClickPosElementClickPos',
};
