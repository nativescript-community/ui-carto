// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.geocoding.MultiOSMOfflineReverseGeocodingService / MSFMultiOSMOfflineReverseGeocodingService */
export const METHODS = ['add', 'calculateAddresses', 'getLanguage', 'remove', 'setLanguage'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    add(arg0: string): void;
    calculateAddresses(arg0: any): any;
    getLanguage(): string;
    remove(arg0: string): boolean;
    setLanguage(arg0: string): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    language: ['getLanguage', 'setLanguage'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    language: string;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
