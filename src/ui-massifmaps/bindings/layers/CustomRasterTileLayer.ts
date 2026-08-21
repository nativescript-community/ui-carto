// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.layers.CustomRasterTileLayer / MSFCustomRasterTileLayer */
export const METHODS = ['getShaderSource', 'setShaderSource'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    getShaderSource(): string;
    setShaderSource(arg0: string): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    shaderSource: ['getShaderSource', 'setShaderSource'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    shaderSource: string;
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

export const SELECTORS: Record<string, string> = {};
