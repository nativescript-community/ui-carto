import { CartoViewBase, MapClickedEvent, MapIdleEvent, MapMovedEvent, MapReadyEvent, MapStableEvent, setLicenseKeyRegistered } from './ui.common';
import { EPSG3857 } from '../projections/epsg3857';
import { IProjection } from '../projections/projection';
import { MapPos } from '../core/core';
import { TileLayer } from '../layers/layer';
import { MapOptions } from './ui';
export { MapClickedEvent, MapIdleEvent, MapMovedEvent, MapReadyEvent, MapStableEvent, setLicenseKeyRegistered };
export declare function registerLicense(value: string): void;
export declare function getLicenseKey(): string;
export interface MapView extends com.akylas.carto.additions.AKMapView {
    new (context: any, owner: WeakRef<CartoMap>): MapView;
    owner: CartoMap;
}
export declare class CartoMap extends CartoViewBase {
    nativeViewProtected: MapView;
    static projection: EPSG3857;
    nativeProjection: com.carto.projections.EPSG3857;
    _projection: IProjection;
    readonly mapView: com.carto.ui.MapView;
    projection: IProjection;
    createNativeView(): Object;
    getOptions(): MapOptions;
    initNativeView(): void;
    disposeNativeView(): void;
    fromNativeMapPos(position: com.carto.core.MapPos): MapPos;
    readonly metersPerPixel: number;
    getMapfocusPos(): MapPos;
    getMapzoom(): number;
    getMapbearing(): number;
    getMaptilt(): number;
    getMapmaxZoom(): number;
    getMapminZoom(): number;
    setFocusPos(value: MapPos, duration: number): void;
    setZoom(value: number, duration: number): void;
    setTilt(value: number, duration: number): void;
    setBearing(value: number, duration: number): void;
    addLayer(layer: TileLayer<any, any>, index?: number): void;
    removeLayer(layer: TileLayer<any, any>): void;
    removeAllLayers(layers: Array<TileLayer<any, any>>): void;
    clearAllCaches(): void;
    clearPreloadingCaches(): void;
    cancelAllTasks(): void;
    screenToMap(x: number, y: number): MapPos;
}
