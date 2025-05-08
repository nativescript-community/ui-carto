import { EventData, ImageSource, Style, View } from '@nativescript/core';
import { ClickType, DefaultLatLonKeys, GenericMapPos, MapBounds, ScreenBounds, ScreenPos } from '../core';
import { Layer } from '../layers';
import { Projection } from '../projections';

export enum RenderProjectionMode {
    RENDER_PROJECTION_MODE_PLANAR,
    RENDER_PROJECTION_MODE_SPHERICAL
}
export enum PanningMode {
    PANNING_MODE_FREE,
    PANNING_MODE_STICKY,
    PANNING_MODE_STICKY_FINAL
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

export interface MapInfo {}

export interface MapGestureInfo extends MapInfo {
    userAction: boolean;
}

export interface MapInteractionInfo extends MapGestureInfo {
    interaction: {
        isAnimationStarted: boolean;
        isPanAction: boolean;
        isRotateAction: boolean;
        isTiltAction: boolean;
        isZoomAction: boolean;
    };
}

export interface MapClickInfo<T = DefaultLatLonKeys> extends MapInfo {
    android?: any;
    ios?: any;
    clickInfo: {
        duration: number;
    };
    clickType: ClickType;
    position: GenericMapPos<T>;
}

export interface MapEventData extends EventData {
    data?: MapInfo;
}
export interface MapPosEventData<T = DefaultLatLonKeys> extends EventData {
    MapPos: GenericMapPos<T>;
}

export interface MapMovedEventData extends MapEventData {
    data: MapGestureInfo;
}

export interface MapStableEventData extends MapEventData {
    data: MapGestureInfo;
}

export interface MapInteractionEventData extends MapEventData {
    data: MapInteractionInfo;
}

export interface MapClickedEventData extends MapEventData {
    data: MapClickInfo;
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
    isRotationGestures(): boolean;
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
    setRotationGestures(enabled: boolean): void;
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
    setZoomGestures(enabled: boolean): void;
    /**
     * @param zoomRange native Carto  MapRange
     */
    setZoomRange(zoomRange: any);

    setDoubleClickDetection(param0: boolean): void;
    isDoubleClickDetection(): boolean;
    getLongClickDuration(): number;
    setLongClickDuration(param0: number): void;
    getDoubleClickMaxDuration(): number;
    setDoubleClickMaxDuration(param0: number): void;
    setLayersLabelsProcessedInReverseOrder(enabled: boolean): void;
    isLayersLabelsProcessedInReverseOrder(): boolean;
}

export class Layers<T = any> {
    abstract count(): number;
    abstract insert(index: number, layer: Layer<any, any>): void;
    abstract removeAll(layers: Layer<any, any>[]): boolean;
    abstract remove(layer: Layer<any, any>): boolean;
    abstract add(layer: Layer<any, any>): void;
    abstract set(index: number, layer: Layer<any, any>): void;
    abstract get(index: number): Layer<any, any>;
    abstract addAll(layers: Layer<any, any>[]): void;
    abstract setAll(layers: Layer<any, any>[]): void;
    abstract getAll(): Layer<any, any>[];
    abstract clear(): void;
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
    public static mapReadyEvent = 'mapReady';
    public static mapStableEvent = 'mapStable';
    public static mapIdleEvent = 'mapIdle';
    public static mapMovedEvent = 'mapMoved';
    public static mapInteractionEvent = 'mapInteraction';
    public static mapClickedEvent = 'mapClicked';

    public static setRunOnMainThread(value: boolean);
    public projection: Projection;
    focusPos: GenericMapPos<T>;
    zoom: number;
    bearing: number;
    tilt: number;
    restrictedPanning: boolean;
    readonly mapView: any;
    readonly metersPerPixel: number;

    addLayer(layer: Layer<any, any>, index?: number);
    removeLayer(layer: Layer<any, any>);
    removeAllLayers(layers: Layer<any, any>[]);
    getLayers(): Layers<any>;
    screenToMap(pos: ScreenPos | any): GenericMapPos<T>;
    mapToScreen(pos: GenericMapPos<T> | any): ScreenPos;
    sendEvent(eventName: string, data?);
    fromNativeMapPos(position: any): GenericMapPos<T>;
    getOptions(): MapOptions;

    getZoom(): number;
    setZoom(value: number, target: number | GenericMapPos<T>, duration?: number);
    setMapRotation(value: number, target: number | GenericMapPos<T>, duration?: number);
    setBearing(value: number, duration?: number);
    setTilt(value: number, duration?: number);
    setFocusPos(value: GenericMapPos<T>, duration?: number);
    getFocusPos(): GenericMapPos<T>;
    getMapBounds(): MapBounds<T>;
    moveToFitBounds(mapBounds: MapBounds<T>, screenBounds: ScreenBounds, integerZoom: boolean, resetRotation: boolean, resetTilt: boolean, durationSeconds: number);

    requestRedraw();
    clearAllCaches();
    clearPreloadingCaches();
    cancelAllTasks();
    captureRendering(wait?: boolean): Promise<ImageSource>;

    on(event: 'mapReady' | 'mapIdle', callback: (args: EventData) => void, thisArg?: any): void;
    on(event: 'mapStable', callback: (args: MapStableEventData) => void, thisArg?: any): void;
    on(event: 'mapMoved', callback: (args: MapMovedEventData) => void, thisArg?: any): void;
    on(event: 'mapInteraction', callback: (args: MapInteractionEventData) => void, thisArg?: any): void;
    on(event: 'mapClicked', callback: (args: MapClickedEventData) => void, thisArg?: any): void;
}
