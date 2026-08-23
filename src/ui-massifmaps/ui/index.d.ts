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
export const MapReadyEvent: 'mapReady';
/**
 * Fires once a movement has ENDED - animations finished, fingers lifted, inertia died out.
 *
 * Once per movement, carrying the `reason` that caused it. A touch that did not move the camera
 * does not fire it at all, so there is no "did it actually move?" flag to keep. This is the one
 * to hang a data refresh on.
 */
export const MapStableEvent: 'mapStable';
/**
 * Fires when the renderer has nothing left to draw. Tiles may still be loading - this is the end
 * of the frame queue, not of the data.
 */
export const MapIdleEvent: 'mapIdle';
/**
 * Fires on every camera change, whatever caused it. Well above frame rate during a drag, so it
 * is the wrong place to refresh anything - use `mapStable` for that.
 */
export const MapMovedEvent: 'mapMoved';
export const MapClickedEvent: 'mapClicked';
export const MapInteractionEvent: 'mapInteraction';

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

/** What moved the camera. The SDK's MapMoveReason, as a string. */
export type MapMoveReason = 'gesture' | 'animation' | 'api';

export interface MapGestureInfo extends MapInfo {
    /**
     * `gesture` for a drag, pinch, wheel or the inertia after one; `animation` for a frame of a
     * flight or any move given a duration; `api` for a call that took effect immediately.
     */
    reason: MapMoveReason;
    /** @deprecated Use `reason === 'gesture'`. Kept so existing handlers keep working. */
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

export interface MapReadyEventData extends MapEventData {}
export interface MapIdleEventData extends MapEventData {}

/*
 * The same types again under the event-constant names, so one import serves both sides of a
 * handler - `import { MapStableEvent }` brings in the string to subscribe with AND the type to
 * annotate the argument, which is what a Svelte `on:mapStable` needs:
 *
 *     import { MapStableEvent } from '@nativescript-community/ui-massifmaps';
 *     function onStable(e: MapStableEvent) { if (e.data.reason === 'gesture') refresh(); }
 *
 * An interface and a const may share a name - they live in different declaration spaces.
 */
export interface MapReadyEvent extends MapReadyEventData {}
export interface MapIdleEvent extends MapIdleEventData {}
export interface MapMovedEvent extends MapMovedEventData {}
export interface MapStableEvent extends MapStableEventData {}
export interface MapInteractionEvent extends MapInteractionEventData {}
export interface MapClickedEvent extends MapClickedEventData {}

/** Every event the map raises, keyed by name. */
export interface MassifMapEventMap {
    mapReady: MapReadyEvent;
    mapIdle: MapIdleEvent;
    mapMoved: MapMovedEvent;
    mapStable: MapStableEvent;
    mapInteraction: MapInteractionEvent;
    mapClicked: MapClickedEvent;
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

    /**
     * Whether the plugin's native listeners hop to the main thread and WAIT before calling into
     * JavaScript. True by default, and what makes a handler safe to write - the SDK calls back
     * from its render, tile and routing threads, where NativeScript has no runtime at all.
     *
     * It covers EVERY listener the plugin installs - map events, routing, geocoding, search,
     * hillshade, tile downloads - whether or not the surface API is in use. The flag lives with
     * the hop itself (SynchronousHandler on Android, NSMSFMainThread on iOS) rather than on a map
     * view, because most of those listeners have nothing to do with one.
     *
     * The map's events are no exception. They come from the surface API, which CAN deliver on the
     * UI thread itself - but only by QUEUEING, and a consuming callback has to answer now, so the
     * plugin subscribes with ORIGIN delivery and does the waiting hop for all of them alike.
     */
    public static setRunOnMainThread(value: boolean);

    /**
     * Re-subscribes the map's events with new options. Called for you when the map loads, so an
     * app only needs it to change the options afterwards.
     */
    enableFacadeEvents(eventOptions?: { [event in keyof MassifMapEventMap]?: { throttle?: number; debounce?: number; projection?: string } }): void;

    /**
     * Per-event subscription options, keyed by the view's event name. Set before the map loads -
     * from markup, say - or pass them to `enableFacadeEvents` afterwards.
     *
     * ```html
     * <MassifMap eventOptions="{{ { mapMoved: { throttle: 250 } } }}" />
     * ```
     */
    eventOptions: { [event in keyof MassifMapEventMap]?: { throttle?: number; debounce?: number; projection?: string } };
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

    on<K extends keyof MassifMapEventMap>(event: K, callback: (args: MassifMapEventMap[K]) => void, thisArg?: any): void;
    on(event: string, callback: (args: EventData) => void, thisArg?: any): void;

    once<K extends keyof MassifMapEventMap>(event: K, callback: (args: MassifMapEventMap[K]) => void, thisArg?: any): void;
    once(event: string, callback: (args: EventData) => void, thisArg?: any): void;

    off<K extends keyof MassifMapEventMap>(event: K, callback?: (args: MassifMapEventMap[K]) => void, thisArg?: any): void;
    off(event: string, callback?: (args: EventData) => void, thisArg?: any): void;
}
