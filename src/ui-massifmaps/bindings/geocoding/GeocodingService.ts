// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.geocoding.GeocodingService / MSFGeocodingService */
export const METHODS = ['calculateAddresses', 'getLanguage', 'getMaxResults', 'isAutocomplete', 'setAutocomplete', 'setLanguage', 'setMaxResults'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    calculateAddresses(arg0: any): any;
    getLanguage(): string;
    getMaxResults(): number;
    isAutocomplete(): boolean;
    setAutocomplete(arg0: boolean): void;
    setLanguage(arg0: string): void;
    setMaxResults(arg0: number): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    autocomplete: ['isAutocomplete', 'setAutocomplete'],
    language: ['getLanguage', 'setLanguage'],
    maxResults: ['getMaxResults', 'setMaxResults'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    autocomplete: boolean;
    language: string;
    maxResults: number;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
