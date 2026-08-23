import { CSSType, ContentView } from '@nativescript/core';
import { BaseNative } from '../BaseNative';
import { LatitudeKey, MapPos, fromNativeMapPos } from '../core';
import { Layer } from '../layers';
import { bearingProperty, focusPosProperty, tiltProperty, zoomProperty } from './cssproperties';
import { MapInfo } from '.';
import { attach as attachFacade, isAvailable as isApiAvailable } from '../api';

export const MapReadyEvent = 'mapReady';
export const MapStableEvent = 'mapStable';
export const MapIdleEvent = 'mapIdle';
export const MapMovedEvent = 'mapMoved';
export const MapInteractionEvent = 'mapInteraction';
export const MapClickedEvent = 'mapClicked';

/**
 * The SDK's MapMoveReason enum, in declaration order (MapMoveReason.h). Indexed rather than
 * switched so a reason added later reads as undefined instead of silently becoming 'api'.
 */
const MAP_MOVE_REASONS = ['gesture', 'animation', 'api'] as const;

/** Turns the native reason into the string the events carry. */
export function mapMoveReason(reason: number) {
    return MAP_MOVE_REASONS[reason];
}

/** The payload shared by mapMoved and mapStable. */
export function moveEventData(reason: number) {
    const name = mapMoveReason(reason);
    return { reason: name, userAction: name === 'gesture' };
}

/**
 * The facade event each of the view's events is raised from, for the surface-API path below.
 *
 * The view's names are historical and the facade's are the SDK's, so the map is explicit rather
 * than derived - a rename on either side has to be made here, deliberately.
 */
const FACADE_EVENTS: [string, string][] = [
    [MapMovedEvent, 'map.moved'],
    [MapStableEvent, 'map.stable'],
    [MapIdleEvent, 'map.idle'],
    [MapClickedEvent, 'map.clicked'],
    [MapInteractionEvent, 'map.interaction']
];

export interface MapPropertyOptions {
    converter?: Function;
    defaultValue?: any;
    nativeGetterName?: string;
    getConverter?: Function;
    ios?: {
        nativeGetterName?: string;
        // nativeSetterName?: string;
    };
    android?: {
        nativeGetterName?: string;
        // nativeSetterName?: string;
    };
}

function createGetter(key: string, options: MapPropertyOptions) {
    const nativeGetterName = ((__ANDROID__ ? options.android : options.ios) || options).nativeGetterName || 'get' + key.charAt(0).toUpperCase() + key.slice(1);
    const getConverter = options.getConverter;
    return function () {
        let result;
        if (this.nativeViewProtected && this.nativeViewProtected[nativeGetterName]) {
            result = this.nativeViewProtected[nativeGetterName]();
        } else {
            result = this.style[key] || options.defaultValue;
        }
        result = getConverter ? getConverter.call(this, result) : result;
        return result;
    };
}
function createSetter(key, options: MapPropertyOptions) {
    return function (newVal) {
        const actualVal = options.converter ? options.converter(newVal) : newVal;
        this.style[key] = actualVal;
    };
}

function mapPropertyGenerator(target: object, key: string, options?: MapPropertyOptions) {
    Object.defineProperty(target, key, {
        get: createGetter(key, options),
        set: createSetter(key, options),
        enumerable: true,
        configurable: true
    });
}
export function mapProperty(target: any, k?, desc?: PropertyDescriptor): any;
export function mapProperty(options: MapPropertyOptions): (target: any, k?, desc?: PropertyDescriptor) => any;
export function mapProperty(...args) {
    const options = args[0];
    if (args[1] === undefined) {
        return function (target: any, key?: string, descriptor?: PropertyDescriptor) {
            return mapPropertyGenerator(target, key, options);
        };
    } else {
        return mapPropertyGenerator(args[0], args[1], {});
    }
}

export abstract class Layers<T = any> extends BaseNative<T, {}> {
    private readonly mLayerArray: Layer<any, any>[] = [];

    constructor(native) {
        super(null, native);
    }

    abstract count(): number;

    insert(index: number, layer: Layer<any, any>) {
        this.mLayerArray.splice(index, 0, layer);
    }

    //@ts-ignore
    set(index: number, layer: Layer<any, any>) {
        this.mLayerArray[index] = layer;
    }

    removeAll(layers: Layer<any, any>[]): boolean {
        let hasRemovedAll: boolean = true;

        layers.forEach((layer) => {
            if (!this.remove(layer)) {
                if (hasRemovedAll) {
                    hasRemovedAll = false;
                }
            }
        });
        return hasRemovedAll;
    }

    remove(layer: Layer<any, any>): boolean {
        const index = this.mLayerArray.indexOf(layer);
        if (index >= 1) {
            this.mLayerArray.splice(index, 1);
            return true;
        }
        return false;
    }

    add(layer: Layer<any, any>) {
        this.mLayerArray.push(layer);
    }

    addAll(layers: Layer<any, any>[]) {
        layers.forEach((layer) => this.add(layer));
    }
    setAll(layers: Layer<any, any>[]) {
        this.clear();
        this.addAll(layers);
    }

    //@ts-ignore
    abstract get(index: number): Layer<any, any>;
    abstract getAll(): Layer<any, any>[];

    clear() {
        this.mLayerArray.splice(0);
    }

    // public getNative() {
    //     return this.native;
    // }
}

@CSSType('MassifMap')
export abstract class MassifMapViewBase extends ContentView {
    public static mapReadyEvent = MapReadyEvent;
    public static mapStableEvent = MapStableEvent;
    public static mapIdleEvent = MapIdleEvent;
    public static mapMovedEvent = MapMovedEvent;
    public static mapInteractionEvent = MapInteractionEvent;
    public static mapClickedEvent = MapClickedEvent;

    //TODO: remove as it needs to be added after TS 5.7 change https://github.com/microsoft/TypeScript/pull/59860
    [key: symbol]: (...args: any[]) => any | void;

    public mapReady = false;
    nativeProjection: any;
    @mapProperty({
        getConverter: (value) => fromNativeMapPos(value)
    })
    focusPos: MapPos;
    @mapProperty zoom: number;
    @mapProperty({
        ios: {
            nativeGetterName: 'getRotation'
        },
        android: {
            nativeGetterName: 'getMapRotation'
        }
    })
    bearing: number;
    @mapProperty tilt: number;
    @mapProperty minZoom: number;
    @mapProperty maxZoom: number;
    @mapProperty restrictedPanning: boolean;

    private mLayers: Layers;
    private mFacade: any = null;
    private mFacadeSubscriptions: any[] = [];
    private mFacadeOwned: { [event: string]: boolean } = {};

    /**
     * Raise the events named in `eventOptions` through the facade, so their subscription options
     * apply. Opt-in - see useFacadeEventsIfAsked.
     */
    facadeEvents = false;

    /** Per-event subscription options, keyed by the view's event name. */
    eventOptions: { [event: string]: { throttle?: number; debounce?: number; projection?: string } };

    get mapView() {
        return this.nativeViewProtected;
    }

    public sendEvent<T extends MapInfo = MapInfo>(eventName: string, data?: T) {
        // One guard here rather than at each of the ten native call sites: an event the facade
        // has taken over must not also be raised by the native listener, which is still installed
        // and still chained to for everything else.
        if (this.facadeOwns(eventName)) {
            return;
        }
        this.raise(eventName, data);
    }

    private raise(eventName: string, data?: any) {
        if (this.hasListeners(eventName)) {
            this.notify({
                eventName,
                data
            });
        }
    }

    public onLoaded() {
        super.onLoaded();
        if (!this.mapReady) {
            this.mapReady = true;
            setTimeout(() => {
                this.useFacadeEventsIfAsked();
                this.sendEvent(MapReadyEvent);
            }, 0);
        }
    }

    /**
     * Raises the map's events through the facade instead of the native listener, which is what
     * makes the subscription options - throttle, debounce, projection - reachable per event.
     *
     * OPT-IN for now (`facadeEvents="true"`): the two paths raise the same view events, so having
     * both on would deliver everything twice, and the native one is what every existing app is
     * running against. Only the events named in `eventOptions` move over; the rest stay on the
     * native listener, so a page that only wants a throttle on `mapMoved` pays for nothing else.
     */
    private useFacadeEventsIfAsked() {
        if (this.facadeEvents) {
            this.enableFacadeEvents();
        }
    }

    /**
     * The same, callable once the map is ready - which is where an app that decides its options
     * at runtime can reach it, `facadeEvents` in the markup being read before that.
     *
     * @param eventOptions Per-event options; defaults to whatever the property holds.
     */
    enableFacadeEvents(eventOptions = this.eventOptions) {
        this.eventOptions = eventOptions;
        if (!this.mapView || this.mFacade) {
            return;
        }
        if (!isApiAvailable()) {
            console.warn('MassifMap: facadeEvents needs an SDK built with the surface API - staying on the native listener');
            return;
        }
        try {
            this.mFacade = attachFacade(this as any, { id: `massif-map-${this._domId}` });
        } catch (error) {
            // A map whose events silently stopped is far worse than one that logs and carries on
            // with the listener it already had.
            console.warn(`MassifMap: could not attach the facade, staying on the native listener - ${error}`);
            return;
        }
        for (const [viewEvent, facadeEvent] of FACADE_EVENTS) {
            const options = this.eventOptions?.[viewEvent];
            if (!options) {
                continue;
            }
            this.mFacadeSubscriptions.push(
                this.mFacade.subscribe(facadeEvent as never, (e) => this.sendFacadeEvent(viewEvent, e), options)
            );
            this.mFacadeOwned[viewEvent] = true;
        }
    }

    /** Whether the native listener should still raise this event, or the facade has taken it. */
    protected facadeOwns(eventName: string) {
        return this.mFacadeOwned[eventName] === true;
    }

    /**
     * One facade payload, reshaped into the `{ data }` an existing handler already expects.
     *
     * Read eagerly: the payload dies when the handler returns, and a debounced delivery has only
     * a snapshot to begin with.
     */
    private sendFacadeEvent(eventName: string, e: any) {
        const data: any = {};
        if (eventName === MapMovedEvent || eventName === MapStableEvent) {
            const reason = e.get('reason');
            Object.assign(data, moveEventData(typeof reason === 'number' ? reason : 0));
        }
        this.raise(eventName, data);
    }

    abstract createLayersInstance();

    getLayers(): Layers {
        if (!this.mLayers && this.mapView) {
            this.mLayers = this.createLayersInstance();
        }
        return this.mLayers;
    }

    addLayer(layer: Layer<any, any>, index?: number) {
        const layersInstance = this.getLayers();
        if (layersInstance) {
            if (index !== undefined && index <= layersInstance.count()) {
                layersInstance.insert(index, layer);
            } else {
                layersInstance.add(layer);
            }
        }
    }

    removeLayer(layer: Layer<any, any>) {
        const layersInstance = this.getLayers();
        if (layersInstance) {
            layersInstance.remove(layer);
        }
    }

    removeAllLayers(layers: Layer<any, any>[]) {
        const layersInstance = this.getLayers();
        if (layersInstance) {
            layersInstance.removeAll(layers);
        }
    }

    disposeNativeView() {
        this.mapReady = false;

        for (const subscription of this.mFacadeSubscriptions) {
            subscription.remove();
        }
        this.mFacadeSubscriptions = [];
        this.mFacadeOwned = {};
        if (this.mFacade) {
            this.mFacade.destroy();
            this.mFacade = null;
        }

        if (this.mLayers) {
            this.mLayers.clear();
            this.mLayers = null;
        }

        super.disposeNativeView();
    }

    [focusPosProperty.setNative](value: MapPos) {
        if (!this.nativeViewProtected || !this.nativeProjection) {
            return;
        }
        this.setFocusPos(value, 0);
    }
    [zoomProperty.setNative](value: number) {
        if (!this.nativeViewProtected) {
            return;
        }
        this.setZoom(value, 0);
    }
    [tiltProperty.setNative](value: number) {
        if (!this.nativeViewProtected) {
            return;
        }
        this.setTilt(value, 0);
    }
    [bearingProperty.setNative](value: number) {
        if (!this.nativeViewProtected) {
            return;
        }
        this.setBearing(value, 0);
    }
    abstract setFocusPos(value: MapPos, duration: number);
    abstract setZoom(value: number, targetPos: MapPos | number, duration?: number);
    abstract setBearing(value: number, duration: number);
    abstract setTilt(value: number, duration: number);
    abstract fromNativeMapPos(position: any): MapPos;

    get metersPerPixel(): number {
        if (this.nativeViewProtected) {
            const pos = this.focusPos;
            const zoom = this.zoom;
            return (156543.03390625 * Math.cos((pos[LatitudeKey] * Math.PI) / 180)) / Math.pow(2, zoom);
        }
        return 0;
    }
}
