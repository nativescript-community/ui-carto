// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.styles.GeometryCollectionStyleBuilder / MSFGeometryCollectionStyleBuilder */
export const METHODS = ['buildStyle', 'getLineStyle', 'getPointStyle', 'getPolygonStyle', 'setLineStyle', 'setPointStyle', 'setPolygonStyle'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    buildStyle(): any;
    getLineStyle(): any;
    getPointStyle(): any;
    getPolygonStyle(): any;
    setLineStyle(arg0: any): void;
    setPointStyle(arg0: any): void;
    setPolygonStyle(arg0: any): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    lineStyle: ['getLineStyle', 'setLineStyle'],
    pointStyle: ['getPointStyle', 'setPointStyle'],
    polygonStyle: ['getPolygonStyle', 'setPolygonStyle'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    lineStyle: any;  // com.massifmaps.styles.LineStyle
    pointStyle: any;  // com.massifmaps.styles.PointStyle
    polygonStyle: any;  // com.massifmaps.styles.PolygonStyle
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
