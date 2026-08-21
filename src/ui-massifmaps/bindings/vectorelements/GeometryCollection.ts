// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.vectorelements.GeometryCollection / MSFGeometryCollection */
export const METHODS = ['getGeometry', 'getStyle', 'setGeometry', 'setStyle'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    getGeometry(): any;
    getStyle(): any;
    setGeometry(arg0: any): void;
    setStyle(arg0: any): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    geometry: ['getGeometry', 'setGeometry'],
    style: ['getStyle', 'setStyle'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    geometry: any;  // com.massifmaps.geometry.MultiGeometry
    style: any;  // com.massifmaps.styles.GeometryCollectionStyle
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
