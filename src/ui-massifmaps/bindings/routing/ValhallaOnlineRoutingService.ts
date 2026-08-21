// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.routing.ValhallaOnlineRoutingService / MSFValhallaOnlineRoutingService */
export const METHODS = ['calculateRoute', 'getCustomServiceURL', 'getHTTPHeaders', 'getProfile', 'getTimeout', 'matchRoute', 'setCustomServiceURL', 'setHTTPHeaders', 'setProfile', 'setTimeout'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    calculateRoute(arg0: any): any;
    getCustomServiceURL(): string;
    getHTTPHeaders(): any;
    getProfile(): string;
    getTimeout(): number;
    matchRoute(arg0: any): any;
    setCustomServiceURL(arg0: string): void;
    setHTTPHeaders(arg0: any): void;
    setProfile(arg0: string): void;
    setTimeout(arg0: number): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    customServiceURL: ['getCustomServiceURL', 'setCustomServiceURL'],
    httpHeaders: ['getHTTPHeaders', 'setHTTPHeaders'],
    profile: ['getProfile', 'setProfile'],
    timeout: ['getTimeout', 'setTimeout'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    customServiceURL: string;
    httpHeaders: any;  // com.massifmaps.core.StringMap
    profile: string;
    timeout: number;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
