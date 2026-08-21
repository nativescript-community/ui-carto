// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.routing.SGREOfflineRoutingService / MSFSGREOfflineRoutingService */
export const METHODS = ['calculateRoute', 'getProfile', 'getRoutingParameter', 'matchRoute', 'setProfile', 'setRoutingParameter'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    calculateRoute(arg0: any): any;
    getProfile(): string;
    getRoutingParameter(arg0: string): number;
    matchRoute(arg0: any): any;
    setProfile(arg0: string): void;
    setRoutingParameter(arg0: string, arg1: number): void;
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
    setRoutingParameter: 'setRoutingParameterValue',
};
