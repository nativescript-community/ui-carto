// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.vectorelements.Line / MSFLine */
export const METHODS = ['getGeometry', 'getPoses', 'getStyle', 'setGeometry', 'setPoses', 'setStyle'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    getGeometry(): any;
    getPoses(): any;
    getStyle(): any;
    setGeometry(arg0: any): void;
    setPoses(arg0: any): void;
    setStyle(arg0: any): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    geometry: ['getGeometry', 'setGeometry'],
    poses: ['getPoses', 'setPoses'],
    style: ['getStyle', 'setStyle'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    geometry: any;  // com.massifmaps.geometry.LineGeometry
    poses: any;  // com.massifmaps.core.MapPosVector
    style: any;  // com.massifmaps.styles.LineStyle
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
