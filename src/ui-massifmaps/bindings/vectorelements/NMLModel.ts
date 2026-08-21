// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

import { MapVec } from '../../core/index';

/** com.massifmaps.vectorelements.NMLModel / MSFNMLModel */
export const METHODS = ['getRotationAngle', 'getRotationAxis', 'getScale', 'getStyle', 'setRotation', 'setRotationAngle', 'setRotationAxis', 'setScale', 'setStyle'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    getRotationAngle(): number;
    getRotationAxis(): MapVec;
    getScale(): number;
    getStyle(): any;
    setRotation(arg0: MapVec, arg1: number): void;
    setRotationAngle(arg0: number): void;
    setRotationAxis(arg0: MapVec): void;
    setScale(arg0: number): void;
    setStyle(arg0: any): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    rotationAngle: ['getRotationAngle', 'setRotationAngle'],
    rotationAxis: ['getRotationAxis', 'setRotationAxis'],
    scale: ['getScale', 'setScale'],
    style: ['getStyle', 'setStyle'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    rotationAngle: number;
    rotationAxis: MapVec;
    scale: number;
    style: any;  // com.massifmaps.styles.NMLModelStyle
}

/** properties needing a converter, and which one */
export const CONVERTERS = [['rotationAxis', 'mapVecConverter']] as const;

export const SELECTORS: Record<string, string> = {};
