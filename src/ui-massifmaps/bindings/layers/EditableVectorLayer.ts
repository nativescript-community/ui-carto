// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.layers.EditableVectorLayer / MSFEditableVectorLayer */
export const METHODS = ['getSelectedVectorElement', 'getVectorEditEventListener', 'setSelectedVectorElement', 'setVectorEditEventListener'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    getSelectedVectorElement(): any;
    getVectorEditEventListener(): any;
    setSelectedVectorElement(arg0: any): void;
    setVectorEditEventListener(arg0: any): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    selectedVectorElement: ['getSelectedVectorElement', 'setSelectedVectorElement'],
    vectorEditEventListener: ['getVectorEditEventListener', 'setVectorEditEventListener'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    selectedVectorElement: any;  // com.massifmaps.vectorelements.VectorElement
    vectorEditEventListener: any;  // com.massifmaps.layers.VectorEditEventListener
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
