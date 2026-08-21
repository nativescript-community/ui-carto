// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

import { RoutingAction } from '../../routing/index';

/** com.massifmaps.routing.RoutingInstruction / MSFRoutingInstruction */
export const METHODS = ['getAction', 'getAzimuth', 'getDistance', 'getGeometryTag', 'getInstruction', 'getPointIndex', 'getStreetName', 'getTime', 'getTurnAngle'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    getAction(): RoutingAction;
    getAzimuth(): number;
    getDistance(): number;
    getGeometryTag(): any;
    getInstruction(): string;
    getPointIndex(): number;
    getStreetName(): string;
    getTime(): number;
    getTurnAngle(): number;
}

export const ACCESSORS: Record<string, [string, string]> = {};

export interface Accessors {}

export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
