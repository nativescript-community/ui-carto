// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.datasources.TileDownloadListener / MSFTileDownloadListener */
export const METHODS = ['onDownloadCompleted', 'onDownloadFailed', 'onDownloadProgress', 'onDownloadStarting'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    onDownloadCompleted(): void;
    onDownloadFailed(arg0: any): void;
    onDownloadProgress(arg0: number): void;
    onDownloadStarting(arg0: number): void;
}

export const ACCESSORS: Record<string, [string, string]> = {};

export interface Accessors {}

export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
