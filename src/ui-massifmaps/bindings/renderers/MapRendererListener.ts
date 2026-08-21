// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.renderers.MapRendererListener / MSFMapRendererListener */
export const METHODS = ['onAfterDrawFrame', 'onBeforeDrawFrame', 'onSurfaceChanged'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    onAfterDrawFrame(): void;
    onBeforeDrawFrame(): void;
    onSurfaceChanged(arg0: number, arg1: number): void;
}

export const ACCESSORS: Record<string, [string, string]> = {};

export interface Accessors {}

export const CONVERTERS = [] as const;

/** ObjC concatenates selector parts, so these names differ on iOS */
export const SELECTORS: Record<string, string> = {
    onSurfaceChanged: 'onSurfaceChangedHeight',
};
