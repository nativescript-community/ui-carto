import { CSSType, View } from '@nativescript/core/ui/core/view';
import { LatitudeKey, MapPos, fromNativeMapPos } from '../core';
import { bearingProperty, focusPosProperty, tiltProperty, zoomProperty } from './cssproperties';
import { Layer } from '../layers';
// import { NativeVector } from '../index';
import { nativeVectorToArray } from '../utils';
import { ContentView } from '@nativescript/core';

let licenseKeyRegistered = false;
export function setLicenseKeyRegistered(value: boolean) {
    licenseKeyRegistered = value;
}
export function isLicenseKeyRegistered() {
    return licenseKeyRegistered;
}

export const MapReadyEvent = 'mapReady';
export const MapStableEvent = 'mapStable';
export const MapIdleEvent = 'mapIdle';
export const MapMovedEvent = 'mapMoved';
export const MapClickedEvent = 'mapClicked';

export interface MapPropertyOptions {
    converter?: Function;
    defaultValue?: any;
    nativeGetterName?: string;
    // nativeSetterName?: string;
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
    const nativeGetterName = ((global.isAndroid ? options.android : options.ios) || options).nativeGetterName || 'get' + key.charAt(0).toUpperCase() + key.slice(1);
    const getConverter = options.getConverter;
    // console.log('createGetter', key, options, nativeGetterName, !!getConverter);
    return function () {
        let result;
        if (this.nativeViewProtected && this.nativeViewProtected[nativeGetterName]) {
            result = this.nativeViewProtected[nativeGetterName]();
        } else {
            result = this.style[key] || options.defaultValue;
        }
        result = getConverter ? getConverter.call(this, result) : result;
        // console.log('getter', key, options, nativeGetterName, !!getConverter, result);
        return result;
    };
}
function createSetter(key, options: MapPropertyOptions) {
    // console.log('createSetter', key, options);
    return function (newVal) {
        // console.log('setter', key, newVal, Array.isArray(newVal), typeof newVal);
        const actualVal = options.converter ? options.converter(newVal) : newVal;
        this.style[key] = actualVal;
        // this.notify({ object: this, eventName: Observable.propertyChangeEvent, propertyName: key, value: actualVal });
    };
}

function hasSetter(obj, prop) {
    const descriptor = Object.getOwnPropertyDescriptor(obj, prop);
    return descriptor && !!descriptor['set'];
}
function mapPropertyGenerator(target: Object, key: string, options?: MapPropertyOptions) {
    // console.log('mapPropertyGenerator', key, Object.keys(options));
    Object.defineProperty(target, key, {
        get: createGetter(key, options),
        set: createSetter(key, options),
        enumerable: true,
        configurable: true,
    });
}
export function mapProperty(target: any, k?, desc?: PropertyDescriptor): any;
export function mapProperty(options: MapPropertyOptions): (target: any, k?, desc?: PropertyDescriptor) => any;
export function mapProperty(...args) {
    const options = args[0];
    // console.log('test deco', typeof options, args[0], args[1]);
    if (args[1] === undefined) {
        return function (target: any, key?: string, descriptor?: PropertyDescriptor) {
            return mapPropertyGenerator(target, key, options);
        };
    } else {
        return mapPropertyGenerator(args[0], args[1], {});
    }
}

// const mapProperty = (target: Object, key: string | symbol) => {
//     // property value
//     // let _val = this[key];

//     // property getter
//     const getter = function() {

//         if (this.nativeViewProtected) {
//             return (this as CartoViewBase)['getMap' + key.toString()]();
//         }
//         return this.style.key;
//     };

//     // property setter
//     const setter = function(newVal) {
//         this.style[key] = newVal;
//     };

//     // Delete property.
//     // if (delete this[key]) {
//     // Create new property with getter and setter
//     Object.defineProperty(target, key, {
//         get: getter,
//         set: setter,
//         enumerable: true,
//         configurable: true
//     });
//     // }
// };

export class Layers<T extends any> {
    constructor(private native: any) {}
    // constructor(size?: number) {
    //     this.native = new T(size);
    // }
    count() {
        return this.native.count();
    }
    insert(index: number, layer: Layer<any, any>) {
        return this.native.insert(index, layer.getNative());
    }
    set(index: number, layer: Layer<any, any>) {
        return this.native.set(index, layer.getNative());
    }
    removeAll(layers: Layer<any, any>[]) {
        layers.forEach(this.remove);
    }
    remove(layer: Layer<any, any>) {
        return this.native.remove(layer.getNative());
    }
    add(layer: Layer<any, any>) {
        return this.native.add(layer.getNative());
    }
    get(index: number) {
        return this.native.get(index);
    }
    addAll(layers: Layer<any, any>[]) {
        layers.forEach(this.add);
    }
    setAll(layers: Layer<any, any>[]) {
        this.clear();
        this.addAll(layers);
    }
    getAll() {
        return nativeVectorToArray(this.native.getAll());
    }
    clear() {
        return this.native.clear();
    }

    public getNative() {
        return this.native;
    }
}

@CSSType('CartoMap')
export abstract class CartoViewBase extends ContentView {
    public mapReady = false;
    nativeProjection: any;
    @mapProperty({
        getConverter: (value) => fromNativeMapPos(value),
    })
    focusPos: MapPos;
    @mapProperty zoom: number;
    @mapProperty({
        ios: {
            nativeGetterName: 'getRotation',
        },
        android: {
            nativeGetterName: 'getMapRotation',
        },
    })
    bearing: number;
    @mapProperty tilt: number;
    @mapProperty minZoom: number;
    @mapProperty maxZoom: number;
    @mapProperty restrictedPanning: boolean;

    public sendEvent(eventName: string, data?) {
        if (this.hasListeners(eventName)) {
            this.notify({
                eventName,
                object: this,
                data,
            });
        }
    }

    log(...args) {
        console.log(`[${this.constructor.name}]`, ...args);
    }
    public onLoaded() {
        super.onLoaded();
        if (!this.mapReady) {
            this.mapReady = true;
            setTimeout(() => this.sendEvent(MapReadyEvent), 0);
        }
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
