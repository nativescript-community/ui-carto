// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

import { ImageAsset, ImageSource } from '@nativescript/core';

/** com.massifmaps.celestial.CelestialSprite / MSFCelestialSprite */
export const METHODS = ['getAngularSize', 'getBitmap', 'getClickRadius', 'getScreenSize', 'getSoftness', 'setAngularSize', 'setBitmap', 'setClickRadius', 'setScreenSize', 'setSoftness'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    getAngularSize(): number;
    getBitmap(): ImageSource;
    getClickRadius(): number;
    getScreenSize(): number;
    getSoftness(): number;
    setAngularSize(arg0: number): void;
    setBitmap(arg0: string | ImageSource | ImageAsset): void;
    setClickRadius(arg0: number): void;
    setScreenSize(arg0: number): void;
    setSoftness(arg0: number): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    angularSize: ['getAngularSize', 'setAngularSize'],
    bitmap: ['getBitmap', 'setBitmap'],
    clickRadius: ['getClickRadius', 'setClickRadius'],
    screenSize: ['getScreenSize', 'setScreenSize'],
    softness: ['getSoftness', 'setSoftness'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    angularSize: number;
    bitmap: string | ImageSource | ImageAsset;
    clickRadius: number;
    screenSize: number;
    softness: number;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [['bitmap', 'massifImageConverter']] as const;

export const SELECTORS: Record<string, string> = {};
