// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.datasources.MapTilerOnlineTileDataSource / MSFMapTilerOnlineTileDataSource */
export const METHODS = ['getCustomServiceURL', 'getTimeout', 'loadTile', 'setCustomServiceURL', 'setTimeout'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    getCustomServiceURL(): string;
    getTimeout(): number;
    loadTile(arg0: any): any;
    setCustomServiceURL(arg0: string): void;
    setTimeout(arg0: number): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    customServiceURL: ['getCustomServiceURL', 'setCustomServiceURL'],
    timeout: ['getTimeout', 'setTimeout'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    customServiceURL: string;
    timeout: number;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
