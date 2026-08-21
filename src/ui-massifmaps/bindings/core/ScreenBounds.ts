// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.core.ScreenBounds / MSFScreenBounds */
export const METHODS = ['contains', 'getCenter', 'getHeight', 'getMax', 'getMin', 'getWidth', 'intersects'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    contains(arg0: any): boolean;
    getCenter(): any;
    getHeight(): number;
    getMax(): any;
    getMin(): any;
    getWidth(): number;
    intersects(arg0: any): boolean;
}

export const ACCESSORS: Record<string, [string, string]> = {};

export interface Accessors {}

export const CONVERTERS = [] as const;

/** ObjC concatenates selector parts, so these names differ on iOS */
export const SELECTORS: Record<string, string> = {
    contains: 'containsPos',
};
