import { CSSType, View } from 'tns-core-modules/ui/core/view';
import { MapPos } from '../core/core';
import { bearingProperty, focusPosProperty, tiltProperty, zoomProperty } from './cssproperties';

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

const mapProperty = (target: Object, key: string | symbol) => {
    // property value
    // let _val = this[key];

    // property getter
    const getter = function() {
        if (this.nativeViewProtected) {
            return (this as CartoViewBase)['getMap' + key.toString()]();
        }
        return this.style.key;
    };

    // property setter
    const setter = function(newVal) {
        this.style[key] = newVal;
    };

    // Delete property.
    // if (delete this[key]) {
    // Create new property with getter and setter
    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
    // }
};

@CSSType('CartoMap')
export abstract class CartoViewBase extends View {
    public mapReady = false;
    nativeProjection: any;
    // focusPos: MapPos;
    // zoom: number;
    // bearing: number;
    // tilt: number;
    @mapProperty focusPos: MapPos;
    @mapProperty zoom: number;
    @mapProperty bearing: number;
    @mapProperty tilt: number;
    @mapProperty minZoom: number;
    @mapProperty maxZoom: number;
    @mapProperty restrictedPanning: boolean;

    public sendEvent(eventName: string, data?) {
        if (this.hasListeners(eventName)) {
            this.notify({
                eventName,
                object: this,
                data
            });
        }
    }

    public onLoaded() {
        super.onLoaded();
        if (!this.mapReady) {
            this.mapReady = true;
            this.sendEvent(MapReadyEvent);
        }
        // console.log('onLoaded', MapReadyEvent);
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
    abstract setZoom(value: number, duration: number);
    abstract setBearing(value: number, duration: number);
    abstract setTilt(value: number, duration: number);
    abstract fromNativeMapPos(pos: any): MapPos;
}


