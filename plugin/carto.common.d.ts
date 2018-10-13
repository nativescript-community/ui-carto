import { Observable, View } from 'tns-core-modules/ui/core/view';
import { ElementOptions, ElementStyleBuilderOptions, LayerOptions, ProjectionOptions, TileDataSourceOptions, TileLayerOptions, VectorTileDecoderOptions } from './carto';
export declare class CartoViewBase extends View {
    mapReady: boolean;
    zoom: number;
    metersPerPixel: number;
    tilt: number;
    bearing: number;
    focusPos: any;
    sendEvent(eventName: string, data?: any): void;
}
export declare function setLicenseKeyRegistered(value: boolean): void;
export declare function isLicenseKeyRegistered(): boolean;
export declare function setLicenseKey(value: string): void;
export declare function getLicenseKey(): string;
export interface CreateSourceOptions {
    url?: string;
    urls?: string[];
    minZoom?: number;
    maxZoom?: number;
    tileSize?: number;
    autoHD?: boolean;
    subdomains?: string;
    httpHeaders?: {
        [k: string]: string;
    };
}
export interface Location {
    latitude: number;
    longitude: number;
    altitude: number;
}
export interface CreatMarkerOptions extends Location {
    title: string;
    subtitle: string;
    selected: boolean;
}
export interface CreatRouteOptions {
    points: Location[];
}
export declare const MapReadyEvent = "mapReady";
export declare const MapStableEvent = "mapStable";
export declare const MapIdleEvent = "mapIdle";
export declare const MapMovedEvent = "mapMoved";
export declare const MapClickedEvent = "mapClicked";
export declare abstract class BaseNative<T, U extends {}> extends Observable {
    options: U;
    constructor(options?: U, native?: T);
    native: T;
    initNativeView(native: T, options: U): void;
    getNative(): T;
    abstract createNative(options: U): T;
}
export declare abstract class BaseDataSource<T, U extends TileDataSourceOptions> extends BaseNative<T, U> {
}
export declare abstract class BaseLayer<T, U extends LayerOptions> extends BaseNative<T, U> {
}
export declare abstract class BaseTileLayer<T, U extends TileLayerOptions> extends BaseLayer<T, U> {
}
export declare abstract class BaseVectorTileDecoder<T, U extends VectorTileDecoderOptions> extends BaseNative<T, U> {
}
export declare abstract class BaseProjection<T, U extends ProjectionOptions> extends BaseNative<T, U> {
}
export declare abstract class BaseElementStyleBuilder<T, U extends ElementStyleBuilderOptions> extends BaseNative<T, U> {
}
export declare abstract class BaseElement<T, U extends ElementOptions> extends BaseNative<T, U> {
}
