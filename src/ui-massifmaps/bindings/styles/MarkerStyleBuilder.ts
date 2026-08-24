// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

import { ImageAsset, ImageSource } from '@nativescript/core';

/** com.massifmaps.styles.MarkerStyleBuilder / MSFMarkerStyleBuilder */
export const METHODS = ['buildStyle', 'getAnchorPointX', 'getAnchorPointY', 'getBitmap', 'getClickSize', 'getOrientationMode', 'getScalingMode', 'getSize', 'setAnchorPoint', 'setAnchorPointX', 'setAnchorPointY', 'setBitmap', 'setClickSize', 'setOrientationMode', 'setScalingMode', 'setSize'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    buildStyle(): any;
    getAnchorPointX(): number;
    getAnchorPointY(): number;
    getBitmap(): ImageSource;
    getClickSize(): number;
    getOrientationMode(): number;
    getScalingMode(): number;
    getSize(): number;
    setAnchorPoint(arg0: number, arg1: number): void;
    setAnchorPointX(arg0: number): void;
    setAnchorPointY(arg0: number): void;
    setBitmap(arg0: string | ImageSource | ImageAsset): void;
    setClickSize(arg0: number): void;
    setOrientationMode(arg0: number): void;
    setScalingMode(arg0: number): void;
    setSize(arg0: number): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    anchorPointX: ['getAnchorPointX', 'setAnchorPointX'],
    anchorPointY: ['getAnchorPointY', 'setAnchorPointY'],
    bitmap: ['getBitmap', 'setBitmap'],
    clickSize: ['getClickSize', 'setClickSize'],
    orientationMode: ['getOrientationMode', 'setOrientationMode'],
    scalingMode: ['getScalingMode', 'setScalingMode'],
    size: ['getSize', 'setSize'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    anchorPointX: number;
    anchorPointY: number;
    bitmap: string | ImageSource | ImageAsset;
    clickSize: number;
    orientationMode: number;
    scalingMode: number;
    size: number;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [['bitmap', 'massifImageConverter']] as const;

/** ObjC concatenates selector parts, so these names differ on iOS */
export const SELECTORS: Record<string, string> = {
    setAnchorPoint: 'setAnchorPointXAnchorPointY',
};
