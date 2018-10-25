import { View } from 'tns-core-modules/ui/core/view';
import { MapPos } from '../core/core';
export declare function setLicenseKeyRegistered(value: boolean): void;
export declare function isLicenseKeyRegistered(): boolean;
export declare const MapReadyEvent = "mapReady";
export declare const MapStableEvent = "mapStable";
export declare const MapIdleEvent = "mapIdle";
export declare const MapMovedEvent = "mapMoved";
export declare const MapClickedEvent = "mapClicked";
export declare abstract class CartoViewBase extends View {
    mapReady: boolean;
    nativeProjection: any;
    focusPos: MapPos;
    zoom: number;
    bearing: number;
    tilt: number;
    minZoom: number;
    maxZoom: number;
    restrictedPanning: boolean;
    sendEvent(eventName: string, data?: any): void;
    onLoaded(): void;
    abstract setFocusPos(value: MapPos, duration: number): any;
    abstract setZoom(value: number, duration: number): any;
    abstract setBearing(value: number, duration: number): any;
    abstract setTilt(value: number, duration: number): any;
    abstract fromNativeMapPos(position: any): MapPos;
}
