// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.projections.Projection / MSFProjection */
export const METHODS = ['fromWgs84', 'getBounds', 'getName', 'toLatLong', 'toWgs84'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    fromWgs84(arg0: any): any;
    getBounds(): any;
    getName(): string;
    toLatLong(arg0: number, arg1: number): any;
    toWgs84(arg0: any): any;
}

export const ACCESSORS: Record<string, [string, string]> = {};

export interface Accessors {}

export const CONVERTERS = [] as const;

/** ObjC concatenates selector parts, so these names differ on iOS */
export const SELECTORS: Record<string, string> = {
    toLatLong: 'toLatLongY',
};
