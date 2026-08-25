// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

import { EnumValue, RouteMatchingPointType } from '../enums';

/** com.massifmaps.routing.RouteMatchingPoint / MSFRouteMatchingPoint */
export const METHODS = ['getEdgeIndex', 'getPos', 'getType'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    getEdgeIndex(): number;
    getPos(): any;
    getType(): RouteMatchingPointType;
}

export const ACCESSORS: Record<string, [string, string]> = {};

export interface Accessors {}

export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
