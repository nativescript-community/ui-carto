// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

/** com.massifmaps.graphics.ViewState / MSFViewState */
export const METHODS = ['calculateCameraDistance', 'calculateViewDistance', 'getAspectRatio', 'getCameraTilt', 'getDPI', 'getDPToPX', 'getFOVY', 'getFar', 'getHeight', 'getNear', 'getRotation', 'getScreenHeight', 'getScreenWidth', 'getSkyHorizonNDC', 'getTerrainMaxZoom', 'getTilt', 'getUnitToDPCoef', 'getUnitToPXCoef', 'getWidth', 'getZoom', 'getZoom0Distance', 'isCameraChanged', 'setTerrainHeightRange', 'setViewTilt'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    calculateCameraDistance(): number;
    calculateViewDistance(arg0: any): number;
    getAspectRatio(): number;
    getCameraTilt(): number;
    getDPI(): number;
    getDPToPX(): number;
    getFOVY(): number;
    getFar(): number;
    getHeight(): number;
    getNear(): number;
    getRotation(): number;
    getScreenHeight(): number;
    getScreenWidth(): number;
    getSkyHorizonNDC(): number;
    getTerrainMaxZoom(): number;
    getTilt(): number;
    getUnitToDPCoef(): number;
    getUnitToPXCoef(): number;
    getWidth(): number;
    getZoom(): number;
    getZoom0Distance(): number;
    isCameraChanged(): boolean;
    setTerrainHeightRange(arg0: number, arg1: number): void;
    setViewTilt(arg0: number): void;
}

export const ACCESSORS: Record<string, [string, string]> = {};

export interface Accessors {}

export const CONVERTERS = [] as const;

/** ObjC concatenates selector parts, so these names differ on iOS */
export const SELECTORS: Record<string, string> = {
    setTerrainHeightRange: 'setTerrainHeightRangeMaxZ',
};
