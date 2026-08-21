// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.renderers.MapRenderer / MSFMapRenderer */
export const METHODS = ['captureRendering', 'getMapRendererListener', 'getPostProcessEffect', 'getViewState', 'requestRedraw', 'setMapRendererListener', 'setPostProcessEffect'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    captureRendering(arg0: any, arg1: boolean): void;
    getMapRendererListener(): any;
    getPostProcessEffect(): any;
    getViewState(): any;
    requestRedraw(arg0: string): void;
    setMapRendererListener(arg0: any): void;
    setPostProcessEffect(arg0: any): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    mapRendererListener: ['getMapRendererListener', 'setMapRendererListener'],
    postProcessEffect: ['getPostProcessEffect', 'setPostProcessEffect'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    mapRendererListener: any;  // com.massifmaps.renderers.MapRendererListener
    postProcessEffect: any;  // com.massifmaps.renderers.PostProcessEffect
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

/** ObjC concatenates selector parts, so these names differ on iOS */
export const SELECTORS: Record<string, string> = {
    captureRendering: 'captureRenderingWaitWhileUpdating',
};
