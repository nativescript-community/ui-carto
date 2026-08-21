// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

import { MapVec } from '../../core/index';

/** com.massifmaps.core.MapPos / MSFMapPos */
export const METHODS = ['add', 'getX', 'getY', 'getZ', 'subPos', 'subVec'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    add(arg0: MapVec): any;
    getX(): number;
    getY(): number;
    getZ(): number;
    subPos(arg0: any): MapVec;
    subVec(arg0: MapVec): any;
}

export const ACCESSORS: Record<string, [string, string]> = {};

export interface Accessors {}

export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
