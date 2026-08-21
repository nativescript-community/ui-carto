// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.search.VectorTileSearchService / MSFVectorTileSearchService */
export const METHODS = ['findFeatures', 'getDataSource', 'getLayers', 'getMaxResults', 'getMaxZoom', 'getMinZoom', 'getPreventDuplicates', 'getSortByDistance', 'getTileDecoder', 'setLayers', 'setMaxResults', 'setMaxZoom', 'setMinZoom', 'setPreventDuplicates', 'setSortByDistance'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    findFeatures(arg0: any): any;
    getDataSource(): any;
    getLayers(): string[];
    getMaxResults(): number;
    getMaxZoom(): number;
    getMinZoom(): number;
    getPreventDuplicates(): boolean;
    getSortByDistance(): boolean;
    getTileDecoder(): any;
    setLayers(arg0: string[]): void;
    setMaxResults(arg0: number): void;
    setMaxZoom(arg0: number): void;
    setMinZoom(arg0: number): void;
    setPreventDuplicates(arg0: boolean): void;
    setSortByDistance(arg0: boolean): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    layers: ['getLayers', 'setLayers'],
    maxResults: ['getMaxResults', 'setMaxResults'],
    maxZoom: ['getMaxZoom', 'setMaxZoom'],
    minZoom: ['getMinZoom', 'setMinZoom'],
    preventDuplicates: ['getPreventDuplicates', 'setPreventDuplicates'],
    sortByDistance: ['getSortByDistance', 'setSortByDistance'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    layers: string[];
    maxResults: number;
    maxZoom: number;
    minZoom: number;
    preventDuplicates: boolean;
    sortByDistance: boolean;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [['layers', 'stringListConverter']] as const;

export const SELECTORS: Record<string, string> = {};
