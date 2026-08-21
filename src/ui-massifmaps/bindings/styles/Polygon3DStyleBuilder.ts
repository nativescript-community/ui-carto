// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

import { Color } from '@nativescript/core';

/** com.massifmaps.styles.Polygon3DStyleBuilder / MSFPolygon3DStyleBuilder */
export const METHODS = ['buildStyle', 'getSideColor', 'setSideColor'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    buildStyle(): any;
    getSideColor(): Color;
    setSideColor(arg0: Color | string): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    sideColor: ['getSideColor', 'setSideColor'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    sideColor: Color | string;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [['sideColor', 'colorConverter']] as const;

export const SELECTORS: Record<string, string> = {};
