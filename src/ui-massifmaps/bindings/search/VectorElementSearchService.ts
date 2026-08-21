// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.search.VectorElementSearchService / MSFVectorElementSearchService */
export const METHODS = ['findElements', 'getDataSource', 'getMaxResults', 'setMaxResults'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    findElements(arg0: any): any;
    getDataSource(): any;
    getMaxResults(): number;
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
