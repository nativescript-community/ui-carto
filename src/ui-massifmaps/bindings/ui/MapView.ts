// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run bindings`.

import { MapVec } from '../../core/index';

/** com.massifmaps.ui.MapView / MSFMapView */
export const METHODS = ['cancelAllTasks', 'clearAllCaches', 'clearPreloadingCaches', 'flyTo', 'getFlightProgress', 'getFocusPos', 'getLayers', 'getMapEventListener', 'getMapRenderer', 'getOptions', 'getTilt', 'getZoom', 'isFlightActive', 'mapToScreen', 'moveToFitBounds', 'pan', 'rotate', 'screenToMap', 'setFocusPos', 'setMapEventListener', 'setTilt', 'setTranslucent', 'setZoom', 'stopFlight', 'tilt', 'zoom'] as const;

/** the forwarders METHODS installs, so they are visible to TypeScript */
export interface Methods {
    cancelAllTasks(): void;
    clearAllCaches(): void;
    clearPreloadingCaches(): void;
    flyTo(arg0: any, arg1: number, arg2: number): void;
    getFlightProgress(): number;
    getFocusPos(): any;
    getLayers(): any;
    getMapEventListener(): any;
    getMapRenderer(): any;
    getOptions(): any;
    getTilt(): number;
    getZoom(): number;
    isFlightActive(): boolean;
    mapToScreen(arg0: any): any;
    moveToFitBounds(arg0: any, arg1: any, arg2: boolean, arg3: number): void;
    pan(arg0: MapVec, arg1: number): void;
    rotate(arg0: number, arg1: any, arg2: number): void;
    screenToMap(arg0: any): any;
    setFocusPos(arg0: any, arg1: number): void;
    setMapEventListener(arg0: any): void;
    setTilt(arg0: number, arg1: number): void;
    setTranslucent(arg0: boolean): void;
    setZoom(arg0: number, arg1: number): void;
    stopFlight(): void;
    tilt(arg0: number, arg1: number): void;
    zoom(arg0: number, arg1: any, arg2: number): void;
}

export const ACCESSORS: Record<string, [string, string]> = {
    mapEventListener: ['getMapEventListener', 'setMapEventListener'],
};

/** public shape of the accessors this class declares itself */
export interface Accessors {
    mapEventListener: any;  // com.massifmaps.ui.MapEventListener
}

/** properties needing a converter, and which one */
export const CONVERTERS = [] as const;

/** ObjC concatenates selector parts, so these names differ on iOS */
export const SELECTORS: Record<string, string> = {
    flyTo: 'flyToZoomDurationSeconds',
    moveToFitBounds: 'moveToFitBoundsScreenBoundsIntegerZoomDurationSeconds',
    pan: 'panDurationSeconds',
    rotate: 'rotateTargetPosDurationSeconds',
    setFocusPos: 'setFocusPosDurationSeconds',
    setTilt: 'setTiltDurationSeconds',
    setZoom: 'setZoomDurationSeconds',
    tilt: 'tiltDurationSeconds',
    zoom: 'zoomTargetPosDurationSeconds',
};
