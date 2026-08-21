// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.geometry.GeoJSONGeometryReader / MSFGeoJSONGeometryReader */
export const METHODS = ['getTargetProjection', 'readFeature', 'readFeatureCollection', 'readGeometry', 'setTargetProjection'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    getTargetProjection(): any;
    readFeature(arg0: string): any;
    readFeatureCollection(arg0: string): any;
    readGeometry(arg0: string): any;
    setTargetProjection(arg0: any): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    targetProjection: ['getTargetProjection', 'setTargetProjection'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    targetProjection: any;  // com.massifmaps.projections.Projection
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
