// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.datasources.TileDataSource / MSFTileDataSource */
export const METHODS = ['buildTagValues', 'getDataExtent', 'getEncoding', 'getMaxOverzoomLevel', 'getMaxZoom', 'getMaxZoomWithOverzoom', 'getMetaData', 'getMinZoom', 'getProjection', 'isMaxOverzoomLevelSet', 'loadTile', 'notifyTilesChanged', 'setEncoding', 'setMaxOverzoomLevel'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    buildTagValues(arg0: any): any;
    getDataExtent(): any;
    getEncoding(): string;
    getMaxOverzoomLevel(): number;
    getMaxZoom(): number;
    getMaxZoomWithOverzoom(): number;
    getMetaData(arg0: string): string;
    getMinZoom(): number;
    getProjection(): any;
    isMaxOverzoomLevelSet(): boolean;
    loadTile(arg0: any): any;
    notifyTilesChanged(arg0: boolean): void;
    setEncoding(arg0: string): void;
    setMaxOverzoomLevel(arg0: number): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    encoding: ['getEncoding', 'setEncoding'],
    maxOverzoomLevel: ['getMaxOverzoomLevel', 'setMaxOverzoomLevel'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    encoding: string;
    maxOverzoomLevel: number;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
