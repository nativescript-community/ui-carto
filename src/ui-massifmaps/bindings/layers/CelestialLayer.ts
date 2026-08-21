// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.layers.CelestialLayer / MSFCelestialLayer */
export const METHODS = ['add', 'addAll', 'clear', 'getAll', 'getCelestialEventListener', 'isUpdateInProgress', 'remove', 'setCelestialEventListener'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    add(arg0: any): void;
    addAll(arg0: any): void;
    clear(): void;
    getAll(): any;
    getCelestialEventListener(): any;
    isUpdateInProgress(): boolean;
    remove(arg0: any): boolean;
    setCelestialEventListener(arg0: any): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    celestialEventListener: ['getCelestialEventListener', 'setCelestialEventListener'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    celestialEventListener: any;  // com.massifmaps.layers.CelestialEventListener
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
