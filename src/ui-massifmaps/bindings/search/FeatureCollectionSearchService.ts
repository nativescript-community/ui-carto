// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.search.FeatureCollectionSearchService / MSFFeatureCollectionSearchService */
export const METHODS = ['findFeatures', 'getFeatureCollection', 'getMaxResults', 'getProjection', 'setMaxResults'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    findFeatures(arg0: any): any;
    getFeatureCollection(): any;
    getMaxResults(): number;
    getProjection(): any;
    setMaxResults(arg0: number): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    maxResults: ['getMaxResults', 'setMaxResults'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    maxResults: number;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
