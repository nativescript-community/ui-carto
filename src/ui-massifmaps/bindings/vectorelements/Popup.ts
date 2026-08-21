// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

import { ImageAsset, ImageSource } from '@nativescript/core';

/** com.massifmaps.vectorelements.Popup / MSFPopup */
export const METHODS = ['drawBitmap', 'getAnchorPointX', 'getAnchorPointY', 'getStyle', 'processClick', 'setAnchorPoint', 'setAnchorPointX', 'setAnchorPointY', 'setStyle'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    drawBitmap(arg0: any, arg1: number, arg2: number, arg3: number): ImageSource;
    getAnchorPointX(): number;
    getAnchorPointY(): number;
    getStyle(): any;
    processClick(arg0: any, arg1: any, arg2: any): boolean;
    setAnchorPoint(arg0: number, arg1: number): void;
    setAnchorPointX(arg0: number): void;
    setAnchorPointY(arg0: number): void;
    setStyle(arg0: any): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    anchorPointX: ['getAnchorPointX', 'setAnchorPointX'],
    anchorPointY: ['getAnchorPointY', 'setAnchorPointY'],
    style: ['getStyle', 'setStyle'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    anchorPointX: number;
    anchorPointY: number;
    style: any;  // com.massifmaps.styles.PopupStyle
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

/** ObjC concatenates selector parts, so these names differ on iOS */
export const SELECTORS: Record<string, string> = {
    drawBitmap: 'drawBitmapScreenWidthScreenHeightDpToPX',
    processClick: 'processClickClickPosElementClickPos',
    setAnchorPoint: 'setAnchorPointXAnchorPointY',
};
