// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

import { ImageAsset, ImageSource } from '@nativescript/core';

/** com.massifmaps.vectorelements.BalloonPopup / MSFBalloonPopup */
export const METHODS = ['addButton', 'clearButtons', 'drawBitmap', 'getBalloonPopupEventListener', 'getDescription', 'getStyle', 'getTitle', 'processClick', 'removeButton', 'replaceButton', 'setBalloonPopupEventListener', 'setDescription', 'setStyle', 'setTitle'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    addButton(arg0: any): void;
    clearButtons(): void;
    drawBitmap(arg0: any, arg1: number, arg2: number, arg3: number): ImageSource;
    getBalloonPopupEventListener(): any;
    getDescription(): string;
    getStyle(): any;
    getTitle(): string;
    processClick(arg0: any, arg1: any, arg2: any): boolean;
    removeButton(arg0: any): void;
    replaceButton(arg0: any, arg1: any): void;
    setBalloonPopupEventListener(arg0: any): void;
    setDescription(arg0: string): void;
    setStyle(arg0: any): void;
    setTitle(arg0: string): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    balloonPopupEventListener: ['getBalloonPopupEventListener', 'setBalloonPopupEventListener'],
    description: ['getDescription', 'setDescription'],
    style: ['getStyle', 'setStyle'],
    title: ['getTitle', 'setTitle'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    balloonPopupEventListener: any;  // com.massifmaps.vectorelements.BalloonPopupEventListener
    description: string;
    style: any;  // com.massifmaps.styles.PopupStyle
    title: string;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

/** ObjC concatenates selector parts, so these names differ on iOS */
export const SELECTORS: Record<string, string> = {
    drawBitmap: 'drawBitmapScreenWidthScreenHeightDpToPX',
    processClick: 'processClickClickPosElementClickPos',
    replaceButton: 'replaceButtonNewButton',
};
