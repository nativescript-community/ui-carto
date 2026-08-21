// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.celestial.CelestialArc / MSFCelestialArc */
export const METHODS = ['getClickRadius', 'getDirections', 'getRadius', 'getWidth', 'isBelowHorizonVisible', 'isSegmented', 'setBelowHorizonVisible', 'setCircle', 'setClickRadius', 'setDirections', 'setSegments', 'setWidth'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    getClickRadius(): number;
    getDirections(): any;
    getRadius(): number;
    getWidth(): number;
    isBelowHorizonVisible(): boolean;
    isSegmented(): boolean;
    setBelowHorizonVisible(arg0: boolean): void;
    setCircle(arg0: number, arg1: number, arg2: number): void;
    setClickRadius(arg0: number): void;
    setDirections(arg0: any): void;
    setSegments(arg0: any): void;
    setWidth(arg0: number): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    belowHorizonVisible: ['isBelowHorizonVisible', 'setBelowHorizonVisible'],
    clickRadius: ['getClickRadius', 'setClickRadius'],
    directions: ['getDirections', 'setDirections'],
    width: ['getWidth', 'setWidth'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    belowHorizonVisible: boolean;
    clickRadius: number;
    directions: any;  // com.massifmaps.core.DoubleVector
    width: number;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

/** ObjC concatenates selector parts, so these names differ on iOS */
export const SELECTORS: Record<string, string> = {
    setCircle: 'setCircleAxisAltitudeRadius',
};
