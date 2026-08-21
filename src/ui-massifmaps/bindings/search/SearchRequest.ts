// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.search.SearchRequest / MSFSearchRequest */
export const METHODS = ['getFilterExpression', 'getGeometry', 'getProjection', 'getRegexFilter', 'getSearchRadius', 'setFilterExpression', 'setGeometry', 'setProjection', 'setRegexFilter', 'setSearchRadius'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    getFilterExpression(): string;
    getGeometry(): any;
    getProjection(): any;
    getRegexFilter(): string;
    getSearchRadius(): number;
    setFilterExpression(arg0: string): void;
    setGeometry(arg0: any): void;
    setProjection(arg0: any): void;
    setRegexFilter(arg0: string): void;
    setSearchRadius(arg0: number): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    filterExpression: ['getFilterExpression', 'setFilterExpression'],
    geometry: ['getGeometry', 'setGeometry'],
    projection: ['getProjection', 'setProjection'],
    regexFilter: ['getRegexFilter', 'setRegexFilter'],
    searchRadius: ['getSearchRadius', 'setSearchRadius'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    filterExpression: string;
    geometry: any;  // com.massifmaps.geometry.Geometry
    projection: any;  // com.massifmaps.projections.Projection
    regexFilter: string;
    searchRadius: number;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
