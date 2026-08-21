// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.geocoding.TomTomOnlineGeocodingService / MSFTomTomOnlineGeocodingService */
export const METHODS = ['calculateAddresses', 'getCustomServiceURL', 'getLanguage', 'getMaxResults', 'isAutocomplete', 'setAutocomplete', 'setCustomServiceURL', 'setLanguage', 'setMaxResults'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    calculateAddresses(arg0: any): any;
    getCustomServiceURL(): string;
    getLanguage(): string;
    getMaxResults(): number;
    isAutocomplete(): boolean;
    setAutocomplete(arg0: boolean): void;
    setCustomServiceURL(arg0: string): void;
    setLanguage(arg0: string): void;
    setMaxResults(arg0: number): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    autocomplete: ['isAutocomplete', 'setAutocomplete'],
    customServiceURL: ['getCustomServiceURL', 'setCustomServiceURL'],
    language: ['getLanguage', 'setLanguage'],
    maxResults: ['getMaxResults', 'setMaxResults'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    autocomplete: boolean;
    customServiceURL: string;
    language: string;
    maxResults: number;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
