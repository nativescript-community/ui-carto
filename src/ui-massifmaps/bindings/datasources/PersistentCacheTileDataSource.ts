// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.datasources.PersistentCacheTileDataSource / MSFPersistentCacheTileDataSource */
export const METHODS = ['clear', 'close', 'getCapacity', 'isCacheOnlyMode', 'isOpen', 'loadTile', 'setCacheOnlyMode', 'setCapacity', 'startDownloadArea', 'stopAllDownloads'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    clear(): void;
    close(): void;
    getCapacity(): number;
    isCacheOnlyMode(): boolean;
    isOpen(): boolean;
    loadTile(arg0: any): any;
    setCacheOnlyMode(arg0: boolean): void;
    setCapacity(arg0: number): void;
    startDownloadArea(arg0: any, arg1: number, arg2: number, arg3: number, arg4: any): void;
    stopAllDownloads(): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    cacheOnlyMode: ['isCacheOnlyMode', 'setCacheOnlyMode'],
    capacity: ['getCapacity', 'setCapacity'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    cacheOnlyMode: boolean;
    capacity: number;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

/** ObjC concatenates selector parts, so these names differ on iOS */
export const SELECTORS: Record<string, string> = {
    startDownloadArea: 'startDownloadAreaMinZoomMaxZoomFetchDelayTileDownloadListener',
};
