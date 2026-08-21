// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.routing.ValhallaOfflineRoutingService / MSFValhallaOfflineRoutingService */
export const METHODS = ['addLocale', 'calculateRoute', 'getConfigurationParameter', 'getProfile', 'matchRoute', 'setConfigurationParameter', 'setProfile'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    addLocale(arg0: string, arg1: string): void;
    calculateRoute(arg0: any): any;
    getConfigurationParameter(arg0: string): any;
    getProfile(): string;
    matchRoute(arg0: any): any;
    setConfigurationParameter(arg0: string, arg1: any): void;
    setProfile(arg0: string): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    profile: ['getProfile', 'setProfile'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    profile: string;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

/** ObjC concatenates selector parts, so these names differ on iOS */
export const SELECTORS: Record<string, string> = {
    addLocale: 'addLocaleJson',
    setConfigurationParameter: 'setConfigurationParameterValue',
};
