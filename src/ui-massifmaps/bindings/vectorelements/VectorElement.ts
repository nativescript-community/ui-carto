// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.vectorelements.VectorElement / MSFVectorElement */
export const METHODS = ['containsMetaDataKey', 'getBounds', 'getGeometry', 'getId', 'getMetaData', 'getMetaDataElement', 'isVisible', 'notifyElementChanged', 'setId', 'setMetaData', 'setMetaDataElement', 'setVisible'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    containsMetaDataKey(arg0: string): boolean;
    getBounds(): any;
    getGeometry(): any;
    getId(): number;
    getMetaData(): any;
    getMetaDataElement(arg0: string): any;
    isVisible(): boolean;
    notifyElementChanged(): void;
    setId(arg0: number): void;
    setMetaData(arg0: any): void;
    setMetaDataElement(arg0: string, arg1: any): void;
    setVisible(arg0: boolean): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    id: ['getId', 'setId'],
    metaData: ['getMetaData', 'setMetaData'],
    visible: ['isVisible', 'setVisible'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    id: number;
    metaData: any;  // com.massifmaps.core.StringVariantMap
    visible: boolean;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

/** ObjC concatenates selector parts, so these names differ on iOS */
export const SELECTORS: Record<string, string> = {
    setMetaDataElement: 'setMetaDataElementElement',
};
