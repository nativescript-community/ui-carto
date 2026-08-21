// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.datasources.MemoryCacheTileDataSource / MSFMemoryCacheTileDataSource */
export const METHODS = ['clear', 'getCapacity', 'loadTile', 'setCapacity'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    clear(): void;
    getCapacity(): number;
    loadTile(arg0: any): any;
    setCapacity(arg0: number): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    capacity: ['getCapacity', 'setCapacity'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    capacity: number;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
