// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.routing.RoutingRequest / MSFRoutingRequest */
export const METHODS = ['getCustomParameter', 'getPointParameter', 'getPoints', 'getProjection', 'setCustomParameter', 'setPointParameter'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    getCustomParameter(arg0: string): any;
    getPointParameter(arg0: number, arg1: string): any;
    getPoints(): any;
    getProjection(): any;
    setCustomParameter(arg0: string, arg1: any): void;
    setPointParameter(arg0: number, arg1: string, arg2: any): void;
}

export const ACCESSORS: Record<string, [string, string]> = {};

export interface Accessors {}

export const CONVERTERS = [] as const;

/** ObjC concatenates selector parts, so these names differ on iOS */
export const SELECTORS: Record<string, string> = {
    getPointParameter: 'getPointParameterParam',
    setCustomParameter: 'setCustomParameterValue',
    setPointParameter: 'setPointParameterParamValue',
};
