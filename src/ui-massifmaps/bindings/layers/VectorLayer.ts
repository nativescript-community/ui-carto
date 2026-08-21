// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.layers.VectorLayer / MSFVectorLayer */
export const METHODS = ['getDataSource', 'getVectorElementEventListener', 'isUpdateInProgress', 'isZBuffering', 'setVectorElementEventListener', 'setZBuffering'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    getDataSource(): any;
    getVectorElementEventListener(): any;
    isUpdateInProgress(): boolean;
    isZBuffering(): boolean;
    setVectorElementEventListener(arg0: any): void;
    setZBuffering(arg0: boolean): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    vectorElementEventListener: ['getVectorElementEventListener', 'setVectorElementEventListener'],
    zBuffering: ['isZBuffering', 'setZBuffering'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    vectorElementEventListener: any;  // com.massifmaps.layers.VectorElementEventListener
    zBuffering: boolean;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
