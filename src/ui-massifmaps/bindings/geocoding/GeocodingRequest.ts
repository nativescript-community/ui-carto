// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.geocoding.GeocodingRequest / MSFGeocodingRequest */
export const METHODS = ['getCustomParameter', 'getLocation', 'getLocationRadius', 'getProjection', 'getQuery', 'setCustomParameter', 'setLocation', 'setLocationRadius'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    getCustomParameter(arg0: string): any;
    getLocation(): any;
    getLocationRadius(): number;
    getProjection(): any;
    getQuery(): string;
    setCustomParameter(arg0: string, arg1: any): void;
    setLocation(arg0: any): void;
    setLocationRadius(arg0: number): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    location: ['getLocation', 'setLocation'],
    locationRadius: ['getLocationRadius', 'setLocationRadius'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    location: any;  // com.massifmaps.core.MapPos
    locationRadius: number;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

/** ObjC concatenates selector parts, so these names differ on iOS */
export const SELECTORS: Record<string, string> = {
    setCustomParameter: 'setCustomParameterValue',
};
