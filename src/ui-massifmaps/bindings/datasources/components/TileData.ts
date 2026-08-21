// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.datasources.components.TileData / MSFTileData */
export const METHODS = ['getData', 'getMaxAge', 'isOverZoom', 'isReplaceWithParent', 'setIsOverZoom', 'setMaxAge', 'setReplaceWithParent'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    getData(): any;
    getMaxAge(): number;
    isOverZoom(): boolean;
    isReplaceWithParent(): boolean;
    setIsOverZoom(arg0: boolean): void;
    setMaxAge(arg0: number): void;
    setReplaceWithParent(arg0: boolean): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    maxAge: ['getMaxAge', 'setMaxAge'],
    replaceWithParent: ['isReplaceWithParent', 'setReplaceWithParent'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    maxAge: number;
    replaceWithParent: boolean;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
