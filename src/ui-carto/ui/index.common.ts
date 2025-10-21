/* eslint-disable no-redeclare */
import { CSSType, ContentView } from '@nativescript/core';
import { BaseNative } from '../BaseNative';
import { LatitudeKey, MapPos, fromNativeMapPos } from '../core';
import { Layer } from '../layers';
import { bearingProperty, focusPosProperty, tiltProperty, zoomProperty } from './cssproperties';
import { MapInfo } from '.';

export const MapReadyEvent = 'mapReady';
export const MapStableEvent = 'mapStable';
export const MapIdleEvent = 'mapIdle';
export const MapMovedEvent = 'mapMoved';
export const MapInteractionEvent = 'mapInteraction';
export const MapClickedEvent = 'mapClicked';

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

function mapPropertyGenerator(target: Object, key: string, options?: MapPropertyOptions) {
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

@CSSType('CartoMap')
export abstract class CartoViewBase extends ContentView {
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

    get mapView() {
        return this.nativeViewProtected;
    }

    public sendEvent<T extends MapInfo = MapInfo>(eventName: string, data?: T) {
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
            setTimeout(() => this.sendEvent(MapReadyEvent), 0);
        }
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
