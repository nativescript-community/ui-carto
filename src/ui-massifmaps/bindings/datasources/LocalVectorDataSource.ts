// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.datasources.LocalVectorDataSource / MSFLocalVectorDataSource */
export const METHODS = ['add', 'addAll', 'addFeatureCollection', 'clear', 'getAll', 'getDataExtent', 'getFeatureCollection', 'getGeometrySimplifier', 'loadElements', 'remove', 'removeAll', 'setAll', 'setGeometrySimplifier'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    add(arg0: any): void;
    addAll(arg0: any): void;
    addFeatureCollection(arg0: any, arg1: any): void;
    clear(): void;
    getAll(): any;
    getDataExtent(): any;
    getFeatureCollection(): any;
    getGeometrySimplifier(): any;
    loadElements(arg0: any): any;
    remove(arg0: any): boolean;
    removeAll(arg0: any): boolean;
    setAll(arg0: any): void;
    setGeometrySimplifier(arg0: any): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    all: ['getAll', 'setAll'],
    geometrySimplifier: ['getGeometrySimplifier', 'setGeometrySimplifier'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    all: any;  // com.massifmaps.vectorelements.VectorElementVector
    geometrySimplifier: any;  // com.massifmaps.geometry.GeometrySimplifier
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

/** ObjC concatenates selector parts, so these names differ on iOS */
export const SELECTORS: Record<string, string> = {
    addFeatureCollection: 'addFeatureCollectionStyle',
};
