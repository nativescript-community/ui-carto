// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

import { Color } from '@nativescript/core';

/** com.massifmaps.styles.StyleBuilder / MSFStyleBuilder */
export const METHODS = ['getColor', 'setColor'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    getColor(): Color;
    setColor(arg0: Color | string): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    color: ['getColor', 'setColor'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    color: Color | string;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [['color', 'colorConverter']] as const;

export const SELECTORS: Record<string, string> = {};
