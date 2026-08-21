// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.vectorelements.Point / MSFPoint */
export const METHODS = ['getGeometry', 'getPos', 'getStyle', 'setGeometry', 'setPos', 'setStyle'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    getGeometry(): any;
    getPos(): any;
    getStyle(): any;
    setGeometry(arg0: any): void;
    setPos(arg0: any): void;
    setStyle(arg0: any): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    geometry: ['getGeometry', 'setGeometry'],
    pos: ['getPos', 'setPos'],
    style: ['getStyle', 'setStyle'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    geometry: any;  // com.massifmaps.geometry.PointGeometry
    pos: any;  // com.massifmaps.core.MapPos
    style: any;  // com.massifmaps.styles.PointStyle
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
