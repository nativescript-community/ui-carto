import { EventData, ImageSource, Style, View } from '@nativescript/core';
import { ClickType, DefaultLatLonKeys, GenericMapPos, MapBounds, ScreenBounds, ScreenPos } from '../core';
import { Layer } from '../layers';
import { Projection } from '../projections';
import { FogOptions, LightOptions, MapOptions, SkyOptions, TerrainOptions } from '../components';
import { PostProcessEffect } from '../renderers';
import { BaseNative } from '../BaseNative';

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

/**
 * A flight is one move: the camera pulls back over a long distance and comes down at the
 * target, instead of sliding the ground under a fixed height. Everything is optional and
 * whatever is left out keeps its current value.
 */
export interface FlyToOptions {
    zoom?: number;
    bearing?: number;
    tilt?: number;
    /** extra height at the middle of the flight, in metres - the camera climbs over the way there */
    climbHeight?: number;
    /** milliseconds; 0 lets the SDK derive the duration from the length of the path */
    duration?: number;
}

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

export { MapOptions };

export class Layers<T = any> extends BaseNative<T, any> {
    count(): number;
    insert(index: number, layer: Layer<any, any>): void;
    removeAll(layers: Layer<any, any>[]): boolean;
    remove(layer: Layer<any, any>): boolean;
    add(layer: Layer<any, any>): void;
    set(index: number, layer: Layer<any, any>): void;
    get(index: number): Layer<any, any>;
    addAll(layers: Layer<any, any>[]): void;
    setAll(layers: Layer<any, any>[]): void;
    getAll(): Layer<any, any>[];
    clear(): void;
}

interface MassifMapStyle extends Style {
    zoom: number;
    focusPos: GenericMapPos;
    bearing: number;
    minZoom: number;
    maxZoom: number;
    tilt: number;
    restrictedPanning: boolean;
}

export class MassifMap<T = DefaultLatLonKeys> extends View {
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
    /** wrapped and cached; null until the map is ready */
    getOptions(): MapOptions;
    getTerrainOptions(): TerrainOptions;
    setTerrainOptions(terrain: TerrainOptions): void;
    getSkyOptions(): SkyOptions;
    setSkyOptions(sky: SkyOptions): void;
    getLightOptions(): LightOptions;
    setLightOptions(light: LightOptions): void;
    getFogOptions(): FogOptions;
    setFogOptions(fog: FogOptions): void;
    /** full-screen shader run on the finished frame; null takes it off again */
    getPostProcessEffect(): PostProcessEffect;
    setPostProcessEffect(effect: PostProcessEffect): void;

    /** camera flight to `position`; see FlyToOptions */
    flyTo(position: GenericMapPos<T>, options?: FlyToOptions): void;
    /** 0..1 while a flight is running, -1 when there is none */
    getFlightProgress(): number;
    isFlightActive(): boolean;
    stopFlight(): void;

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
