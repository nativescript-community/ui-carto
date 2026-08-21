// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

import { BillboardOrientation, BillboardScaling } from '../../vectorelements/index';

/** com.massifmaps.styles.LabelStyleBuilder / MSFLabelStyleBuilder */
export const METHODS = ['buildStyle', 'getAnchorPointX', 'getAnchorPointY', 'getOrientationMode', 'getRenderScale', 'getScalingMode', 'isFlippable', 'setAnchorPoint', 'setAnchorPointX', 'setAnchorPointY', 'setFlippable', 'setOrientationMode', 'setRenderScale', 'setScalingMode'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    buildStyle(): any;
    getAnchorPointX(): number;
    getAnchorPointY(): number;
    getOrientationMode(): BillboardOrientation;
    getRenderScale(): number;
    getScalingMode(): BillboardScaling;
    isFlippable(): boolean;
    setAnchorPoint(arg0: number, arg1: number): void;
    setAnchorPointX(arg0: number): void;
    setAnchorPointY(arg0: number): void;
    setFlippable(arg0: boolean): void;
    setOrientationMode(arg0: BillboardOrientation): void;
    setRenderScale(arg0: number): void;
    setScalingMode(arg0: BillboardScaling): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    anchorPointX: ['getAnchorPointX', 'setAnchorPointX'],
    anchorPointY: ['getAnchorPointY', 'setAnchorPointY'],
    flippable: ['isFlippable', 'setFlippable'],
    orientationMode: ['getOrientationMode', 'setOrientationMode'],
    renderScale: ['getRenderScale', 'setRenderScale'],
    scalingMode: ['getScalingMode', 'setScalingMode'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    anchorPointX: number;
    anchorPointY: number;
    flippable: boolean;
    orientationMode: BillboardOrientation;  // com.massifmaps.styles.BillboardOrientation
    renderScale: number;
    scalingMode: BillboardScaling;  // com.massifmaps.styles.BillboardScaling
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

/** ObjC concatenates selector parts, so these names differ on iOS */
export const SELECTORS: Record<string, string> = {
    setAnchorPoint: 'setAnchorPointXAnchorPointY',
};
