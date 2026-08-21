// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.vectorelements.Billboard / MSFBillboard */
export const METHODS = ['getBaseBillboard', 'getBounds', 'getGeometry', 'getRootGeometry', 'getRotation', 'setBaseBillboard', 'setGeometry', 'setPos', 'setRotation'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    getBaseBillboard(): any;
    getBounds(): any;
    getGeometry(): any;
    getRootGeometry(): any;
    getRotation(): number;
    setBaseBillboard(arg0: any): void;
    setGeometry(arg0: any): void;
    setPos(arg0: any): void;
    setRotation(arg0: number): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    baseBillboard: ['getBaseBillboard', 'setBaseBillboard'],
    geometry: ['getGeometry', 'setGeometry'],
    rotation: ['getRotation', 'setRotation'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    baseBillboard: any;  // com.massifmaps.vectorelements.Billboard
    geometry: any;  // com.massifmaps.geometry.Geometry
    rotation: number;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
