// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.vectorelements.Polygon / MSFPolygon */
export const METHODS = ['getGeometry', 'getHoles', 'getPoses', 'getStyle', 'setGeometry', 'setHoles', 'setPoses', 'setStyle'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    getGeometry(): any;
    getHoles(): any;
    getPoses(): any;
    getStyle(): any;
    setGeometry(arg0: any): void;
    setHoles(arg0: any): void;
    setPoses(arg0: any): void;
    setStyle(arg0: any): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    geometry: ['getGeometry', 'setGeometry'],
    holes: ['getHoles', 'setHoles'],
    poses: ['getPoses', 'setPoses'],
    style: ['getStyle', 'setStyle'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    geometry: any;  // com.massifmaps.geometry.PolygonGeometry
    holes: any;  // com.massifmaps.core.MapPosVectorVector
    poses: any;  // com.massifmaps.core.MapPosVector
    style: any;  // com.massifmaps.styles.PolygonStyle
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
