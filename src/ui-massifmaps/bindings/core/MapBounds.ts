// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

import { MapVec } from '../../core/index';

/** com.massifmaps.core.MapBounds / MSFMapBounds */
export const METHODS = ['contains', 'getCenter', 'getDelta', 'getMax', 'getMin', 'intersects', 'shrinkToIntersection'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    contains(arg0: any): boolean;
    getCenter(): any;
    getDelta(): MapVec;
    getMax(): any;
    getMin(): any;
    intersects(arg0: any): boolean;
    shrinkToIntersection(arg0: any): void;
}

export const ACCESSORS: Record<string, [string, string]> = {};

export interface Accessors {}

export const CONVERTERS = [] as const;

/** ObjC concatenates selector parts, so these names differ on iOS */
export const SELECTORS: Record<string, string> = {
    contains: 'containsPos',
};
