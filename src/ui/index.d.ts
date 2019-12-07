import { View } from '@nativescript/core/ui/core/view';
import { EventData } from '@nativescript/core/data/observable';
import { IProjection, Projection } from '../projections';
import { Layer } from '../layers';
import { MapBounds, MapPos, ScreenBounds, ScreenPos } from '../core';
import { Layers } from './index.common';
import { ImageSource } from '@nativescript/core/image-source';
import { GenericMapPos, DefaultLatLonKeys } from 'nativescript-carto/core/index.common';
export { Layers };
import { Style } from '@nativescript/core/ui/styling/style';
export function registerLicense(key: string, callback?: (result: boolean) => void);

export enum RenderProjectionMode {
    RENDER_PROJECTION_MODE_PLANAR,
    RENDER_PROJECTION_MODE_SPHERICAL
}

export const MapReadyEvent: string;
/**
 * Listener method that gets called when map is in 'stable' state - map animations have finished,
 user has lifted fingers from the screen.
 */
export const MapStableEvent: string;
/**
 * Listener method that gets called at the end of the rendering process when the
map view needs no further refreshing.
 */
export const MapIdleEvent: string;
/**
 * Listener method that gets called when the map is panned, rotated, tilted or zoomed.
 */
export const MapMovedEvent: string;
export const MapClickedEvent: string;

export interface MapEventData extends EventData {
    data: any;
}
export interface MapPosEventData<T = DefaultLatLonKeys> extends EventData {
    MapPos: GenericMapPos<T>;
}

export class MapOptions {
    /**
     * @returns native Carto Color
     */
    getAmbientLightColor(): any;
    /**
     * @returns native Carto Bitmap
     */
    getBackgroundBitmap(): any;
    getBaseProjection(): any;
    /**
     * @returns native Carto Color
     */
    getClearColor(): any;
    getDPI(): number;
    getDrawDistance(): number;
    getEnvelopeThreadPoolSize(): number;
    getFieldOfViewY(): number;
    /**
     * @returns native Carto MapPos
     */
    getFocusPointOffset(): any;
    /**
     * @returns native Carto Color
     */
    getMainLightColor(): any;
    /**
     * @returns native Carto MapVec
     */
    getMainLightDirection(): any;
    /**
     * @returns native Carto MapBounds
     */
    getPanBounds(): any;
    getPanningMode(): any;
    getPivotMode(): any;
    getRenderProjectionMode(): any;
    /**
     * @returns native Carto Color
     */
    getSkyColor(): any;
    getTileDrawSize(): number;
    getTileThreadPoolSize(): number;
    /**
     * @returns native Carto MapRange
     */
    getTiltRange(): any;
    getWatermarkAlignmentX(): number;
    getWatermarkAlignmentY(): number;
    /**
     * @returns native Carto Bitmap
     */
    getWatermarkBitmap(): any;
    /**
     * @returns native ScreenPos padding
     */
    getWatermarkPadding(): any;
    getWatermarkScale(): number;
    getZoomRange(): any;
    isClickTypeDetection(): boolean;
    isKineticPan(): boolean;
    isKineticRotation(): boolean;
    isKineticZoom(): boolean;
    isRestrictedPanning(): boolean;
    isRotatable(): boolean;
    isSeamlessPanning(): boolean;
    isTiltGestureReversed(): boolean;
    isUserInput(): boolean;
    isZoomGestures(): boolean;
    /**
     * @param color native Carto Color
     */
    setAmbientLightColor(color: any): void;
    /**
     * @param backgroundBitmap native Carto Bitmap
     */
    setBackgroundBitmap(backgroundBitmap: any): void;
    setBaseProjection(baseProjection: any): void;
    /**
     * @param color native Carto Color
     */
    setClearColor(color: any): void;
    setClickTypeDetection(enabled: boolean): void;
    setDPI(dpi: number): void;
    setDrawDistance(drawDistance: number): void;
    setEnvelopeThreadPoolSize(poolSize: number): void;
    setFieldOfViewY(fovY: number): void;
    /**
     * @param offset native Carto MapPos
     */
    setFocusPointOffset(offset: any): void;
    setKineticPan(enabled: boolean): void;
    setKineticRotation(enabled: boolean): void;
    setKineticZoom(enabled: boolean): void;
    /**
     * @param color  native Carto Color
     */
    setMainLightColor(color: any): void;
    /**
     * @param direction native Carto MapVec
     */
    setMainLightDirection(direction: any): void;
    /**
     * @param panBounds native Carto MapBounds
     */
    setPanBounds(panBounds: any): void;
    setPanningMode(panningMode: any): void;
    setPivotMode(pivotMode: any): void;
    setRenderProjectionMode(mode: any): void;
    setRestrictedPanning(enabled: boolean): void;
    setRotatable(enabled: boolean): void;
    setSeamlessPanning(enabled: boolean): void;
    setTileDrawSize(tileDrawSize: number): void;
    setTileThreadPoolSize(poolSize: number): void;
    setTiltGestureReversed(reversed: boolean): void;
    /**
     * @param tiltRange native Carto  MapRange
     */
    setTiltRange(tiltRange: any): void;
    setUserInput(enabled: boolean): void;
    setWatermarkAlignmentX(alignmentX: number): void;
    setWatermarkAlignmentY(alignmentY: number): void;
    /**
     * @param watermarkBitmap  native Carto Bitmap
     */
    setWatermarkBitmap(watermarkBitmap: any): void;
    /**
     * @param padding:  native ScreenPos parameter
     */
    setWatermarkPadding(padding: any): void;

    setWatermarkScale(scale: number): void;
    setZoomGestures(enabled: boolean): void;
    /**
     * @param zoomRange native Carto  MapRange
     */
    setZoomRange(zoomRange: any);
}

interface CartoMapStyle extends Style {
    zoom: number;
    focusPos: GenericMapPos;
    bearing: number;
    minZoom: number;
    maxZoom: number;
    tilt: number;
    restrictedPanning: boolean;
}

export class CartoMap<T = DefaultLatLonKeys> extends View {
    style: CartoMapStyle;
    public projection: Projection;
    focusPos: GenericMapPos<T>;
    zoom: number;
    bearing: number;
    tilt: number;
    restrictedPanning: boolean;
    readonly metersPerPixel: number;

    addLayer(layer: Layer<any, any>, index?: number);
    removeLayer(layer: Layer<any, any>);
    getLayers(): Layers<any>;
    screenToMap(pos: ScreenPos | any): GenericMapPos<T>;
    mapToScreen(pos: GenericMapPos<T> | any): ScreenPos;
    sendEvent(eventName: string, data?);
    fromNativeMapPos(position: any): GenericMapPos<T>;
    getOptions(): MapOptions;

    setZoom(value: number, target: number | GenericMapPos<T>, duration?: number);
    setMapRotation(value: number, target: number | GenericMapPos<T>, duration?: number);
    setBearing(value: number, duration: number);
    setTilt(value: number, duration: number);
    setFocusPos(value: GenericMapPos<T>, duration: number);

    moveToFitBounds(mapBounds: MapBounds<T>, screenBounds: ScreenBounds, integerZoom: boolean, resetRotation: boolean, resetTilt: boolean, durationSeconds: number);

    requestRedraw();
    clearAllCaches();
    clearPreloadingCaches();
    cancelAllTasks();
    captureRendering(wait?: boolean): Promise<ImageSource>;
}
