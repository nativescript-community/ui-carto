// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.components.Layers / MSFLayers */
export const METHODS = ['add', 'addAll', 'clear', 'count', 'get', 'getAll', 'insert', 'remove', 'removeAll', 'set', 'setAll'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    add(arg0: any): void;
    addAll(arg0: any): void;
    clear(): void;
    count(): number;
    get(arg0: number): any;
    getAll(): any;
    insert(arg0: number, arg1: any): void;
    remove(arg0: any): boolean;
    removeAll(arg0: any): boolean;
    set(arg0: number, arg1: any): void;
    setAll(arg0: any): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    all: ['getAll', 'setAll'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    all: any;  // com.massifmaps.layers.LayerVector
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

/** ObjC concatenates selector parts, so these names differ on iOS */
export const SELECTORS: Record<string, string> = {
    insert: 'insertLayer',
    set: 'setLayer',
};
