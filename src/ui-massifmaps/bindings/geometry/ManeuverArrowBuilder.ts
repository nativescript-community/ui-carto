// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.geometry.ManeuverArrowBuilder / MSFManeuverArrowBuilder */
export const METHODS = ['buildArrow', 'buildArrowAtIndex', 'getLengthAfter', 'getLengthBefore', 'setLengthAfter', 'setLengthBefore'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    buildArrow(arg0: any, arg1: any, arg2: any): any;
    buildArrowAtIndex(arg0: any, arg1: any, arg2: number): any;
    getLengthAfter(): number;
    getLengthBefore(): number;
    setLengthAfter(arg0: number): void;
    setLengthBefore(arg0: number): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    lengthAfter: ['getLengthAfter', 'setLengthAfter'],
    lengthBefore: ['getLengthBefore', 'setLengthBefore'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    lengthAfter: number;
    lengthBefore: number;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

/** ObjC concatenates selector parts, so these names differ on iOS */
export const SELECTORS: Record<string, string> = {
    buildArrow: 'buildArrowPointsManeuverPos',
    buildArrowAtIndex: 'buildArrowAtIndexPointsManeuverIndex',
};
