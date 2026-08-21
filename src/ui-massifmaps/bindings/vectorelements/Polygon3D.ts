// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.vectorelements.Polygon3D / MSFPolygon3D */
export const METHODS = ['getGeometry', 'getHeight', 'getHoles', 'getPoses', 'getStyle', 'setGeometry', 'setHeight', 'setHoles', 'setPoses', 'setStyle'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    getGeometry(): any;
    getHeight(): number;
    getHoles(): any;
    getPoses(): any;
    getStyle(): any;
    setGeometry(arg0: any): void;
    setHeight(arg0: number): void;
    setHoles(arg0: any): void;
    setPoses(arg0: any): void;
    setStyle(arg0: any): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    geometry: ['getGeometry', 'setGeometry'],
    height: ['getHeight', 'setHeight'],
    holes: ['getHoles', 'setHoles'],
    poses: ['getPoses', 'setPoses'],
    style: ['getStyle', 'setStyle'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    geometry: any;  // com.massifmaps.geometry.PolygonGeometry
    height: number;
    holes: any;  // com.massifmaps.core.MapPosVectorVector
    poses: any;  // com.massifmaps.core.MapPosVector
    style: any;  // com.massifmaps.styles.Polygon3DStyle
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
