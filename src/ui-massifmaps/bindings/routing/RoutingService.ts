// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.routing.RoutingService / MSFRoutingService */
export const METHODS = ['calculateRoute', 'getProfile', 'matchRoute', 'setProfile'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    calculateRoute(arg0: any): any;
    getProfile(): string;
    matchRoute(arg0: any): any;
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

export const SELECTORS: Record<string, string> = {};
