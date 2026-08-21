// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

import { ImageAsset, ImageSource } from '@nativescript/core';

/** com.massifmaps.styles.PointStyleBuilder / MSFPointStyleBuilder */
export const METHODS = ['buildStyle', 'getBitmap', 'getClickSize', 'getSize', 'setBitmap', 'setClickSize', 'setSize'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    buildStyle(): any;
    getBitmap(): ImageSource;
    getClickSize(): number;
    getSize(): number;
    setBitmap(arg0: string | ImageSource | ImageAsset): void;
    setClickSize(arg0: number): void;
    setSize(arg0: number): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    bitmap: ['getBitmap', 'setBitmap'],
    clickSize: ['getClickSize', 'setClickSize'],
    size: ['getSize', 'setSize'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    bitmap: string | ImageSource | ImageAsset;
    clickSize: number;
    size: number;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [['bitmap', 'massifImageConverter']] as const;

export const SELECTORS: Record<string, string> = {};
