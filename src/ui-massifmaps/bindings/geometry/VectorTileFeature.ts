// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.geometry.VectorTileFeature / MSFVectorTileFeature */
export const METHODS = ['getDistance', 'getId', 'getLayerName', 'getMapTile', 'setDistance'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    getDistance(): number;
    getId(): number;
    getLayerName(): string;
    getMapTile(): any;
    setDistance(arg0: number): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    distance: ['getDistance', 'setDistance'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    distance: number;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
