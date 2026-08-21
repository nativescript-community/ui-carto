// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

import { ImageAsset, ImageSource } from '@nativescript/core';

/** com.massifmaps.vectorelements.Label / MSFLabel */
export const METHODS = ['drawBitmap', 'getStyle', 'setStyle'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    drawBitmap(arg0: number): ImageSource;
    getStyle(): any;
    setStyle(arg0: any): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    style: ['getStyle', 'setStyle'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    style: any;  // com.massifmaps.styles.LabelStyle
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
