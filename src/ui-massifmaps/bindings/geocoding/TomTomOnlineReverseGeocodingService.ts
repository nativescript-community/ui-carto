// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.geocoding.TomTomOnlineReverseGeocodingService / MSFTomTomOnlineReverseGeocodingService */
export const METHODS = ['calculateAddresses', 'getCustomServiceURL', 'getLanguage', 'setCustomServiceURL', 'setLanguage'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    calculateAddresses(arg0: any): any;
    getCustomServiceURL(): string;
    getLanguage(): string;
    setCustomServiceURL(arg0: string): void;
    setLanguage(arg0: string): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    customServiceURL: ['getCustomServiceURL', 'setCustomServiceURL'],
    language: ['getLanguage', 'setLanguage'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    customServiceURL: string;
    language: string;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
