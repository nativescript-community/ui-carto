// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

import { ImageAsset, ImageSource } from '@nativescript/core';

/** com.massifmaps.vectorelements.Text / MSFText */
export const METHODS = ['drawBitmap', 'getStyle', 'getText', 'setStyle', 'setText'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    drawBitmap(arg0: number): ImageSource;
    getStyle(): any;
    getText(): string;
    setStyle(arg0: any): void;
    setText(arg0: string): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    style: ['getStyle', 'setStyle'],
    text: ['getText', 'setText'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    style: any;  // com.massifmaps.styles.LabelStyle
    text: string;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
