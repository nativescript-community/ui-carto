// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

import { MapVec } from '../../core/index';

/** com.massifmaps.core.MapVec / MSFMapVec */
export const METHODS = ['add', 'crossProduct2D', 'crossProduct3D', 'div', 'dotProduct', 'getNormalized', 'getX', 'getY', 'getZ', 'length', 'mul', 'sub'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    add(arg0: MapVec): MapVec;
    crossProduct2D(arg0: MapVec): number;
    crossProduct3D(arg0: MapVec): MapVec;
    div(arg0: number): MapVec;
    dotProduct(arg0: MapVec): number;
    getNormalized(): MapVec;
    getX(): number;
    getY(): number;
    getZ(): number;
    length(): number;
    mul(arg0: number): MapVec;
    sub(arg0: MapVec): MapVec;
}

export const ACCESSORS: Record<string, [string, string]> = {};

export interface Accessors {}

export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
