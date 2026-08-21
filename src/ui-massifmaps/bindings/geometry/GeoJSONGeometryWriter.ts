// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.geometry.GeoJSONGeometryWriter / MSFGeoJSONGeometryWriter */
export const METHODS = ['getSourceProjection', 'getZ', 'setSourceProjection', 'setZ', 'writeFeature', 'writeFeatureCollection', 'writeGeometry'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    getSourceProjection(): any;
    getZ(): boolean;
    setSourceProjection(arg0: any): void;
    setZ(arg0: boolean): void;
    writeFeature(arg0: any): string;
    writeFeatureCollection(arg0: any): string;
    writeGeometry(arg0: any): string;
}

export const ACCESSORS: Record<string, [string, string]> = {
    sourceProjection: ['getSourceProjection', 'setSourceProjection'],
    z: ['getZ', 'setZ'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    sourceProjection: any;  // com.massifmaps.projections.Projection
    z: boolean;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
