// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

import { ImageAsset, ImageSource } from '@nativescript/core';

/** com.massifmaps.styles.LineStyleBuilder / MSFLineStyleBuilder */
export const METHODS = ['buildStyle', 'getBitmap', 'getClickWidth', 'getLineEndType', 'getLineJoinType', 'getStretchFactor', 'getWidth', 'setBitmap', 'setClickWidth', 'setLineEndType', 'setLineJoinType', 'setStretchFactor', 'setWidth'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    buildStyle(): any;
    getBitmap(): ImageSource;
    getClickWidth(): number;
    getLineEndType(): number;
    getLineJoinType(): number;
    getStretchFactor(): number;
    getWidth(): number;
    setBitmap(arg0: string | ImageSource | ImageAsset): void;
    setClickWidth(arg0: number): void;
    setLineEndType(arg0: number): void;
    setLineJoinType(arg0: number): void;
    setStretchFactor(arg0: number): void;
    setWidth(arg0: number): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    bitmap: ['getBitmap', 'setBitmap'],
    clickWidth: ['getClickWidth', 'setClickWidth'],
    lineEndType: ['getLineEndType', 'setLineEndType'],
    lineJoinType: ['getLineJoinType', 'setLineJoinType'],
    stretchFactor: ['getStretchFactor', 'setStretchFactor'],
    width: ['getWidth', 'setWidth'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    bitmap: string | ImageSource | ImageAsset;
    clickWidth: number;
    lineEndType: number;
    lineJoinType: number;
    stretchFactor: number;
    width: number;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [['bitmap', 'massifImageConverter']] as const;

export const SELECTORS: Record<string, string> = {};
