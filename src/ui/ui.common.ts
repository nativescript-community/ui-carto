import { CSSType, View } from 'tns-core-modules/ui/core/view';

let licenseKeyRegistered = false;
export function setLicenseKeyRegistered(value: boolean) {
    licenseKeyRegistered = value;
}
export function isLicenseKeyRegistered() {
    return licenseKeyRegistered;
}
let licenseKey: string;
export function setLicenseKey(value: string) {
    licenseKey = value;
}
export function getLicenseKey() {
    return licenseKey;
}

export const MapReadyEvent = 'mapReady';
export const MapStableEvent = 'mapStable';
export const MapIdleEvent = 'mapIdle';
export const MapMovedEvent = 'mapMoved';
export const MapClickedEvent = 'mapClicked';

@CSSType('CartoMap')
export class CartoViewBase extends View {
    public mapReady = false;

    set zoom(value: number) {
        console.log('set zoom', value);
        this.style['zoom'] = value;
    }
    set metersPerPixel(value: number) {
        this.style['metersPerPixel'] = value;
    }
    set tilt(value: number) {
        this.style['tilt'] = value;
    }
    set bearing(value: number) {
        this.style['bearing'] = value;
    }
    set focusPos(value) {
        console.log('set focusPos', value);
        this.style['focusPos'] = value;
    }
    public sendEvent(eventName: string, data?) {
        if (this.hasListeners(eventName)) {
            this.notify({
                eventName,
                object: this,
                data
            });
        }
    }
}
