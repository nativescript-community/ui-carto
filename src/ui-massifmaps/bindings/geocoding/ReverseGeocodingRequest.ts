// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.geocoding.ReverseGeocodingRequest / MSFReverseGeocodingRequest */
export const METHODS = ['getCustomParameter', 'getLocation', 'getProjection', 'getSearchRadius', 'setCustomParameter', 'setSearchRadius'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    getCustomParameter(arg0: string): any;
    getLocation(): any;
    getProjection(): any;
    getSearchRadius(): number;
    setCustomParameter(arg0: string, arg1: any): void;
    setSearchRadius(arg0: number): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    searchRadius: ['getSearchRadius', 'setSearchRadius'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    searchRadius: number;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

/** ObjC concatenates selector parts, so these names differ on iOS */
export const SELECTORS: Record<string, string> = {
    setCustomParameter: 'setCustomParameterValue',
};
