import { CartoViewBase, Layers, MapClickedEvent, MapIdleEvent, MapMovedEvent, MapReadyEvent, MapStableEvent, isLicenseKeyRegistered, setLicenseKeyRegistered } from './index.common';
import { android as androidApp } from '@nativescript/core/application';
import { profile, trace } from '@nativescript/core/profiling';
import {
    DefaultLatLonKeys,
    MapBounds,
    MapPos,
    ScreenBounds,
    ScreenPos,
    fromNativeMapBounds,
    fromNativeMapPos,
    fromNativeScreenPos,
    toNativeMapPos,
    toNativeScreenBounds,
    toNativeScreenPos,
} from '../core';
import { TileLayer } from '../layers';
import { IProjection } from '../projections';
import { restrictedPanningProperty } from './cssproperties';

import { MapOptions } from '.';
import { EPSG4326 } from '../projections/epsg4326';
import { ImageSource, Property, booleanConverter } from '@nativescript/core';
export { MapClickedEvent, MapIdleEvent, MapMovedEvent, MapReadyEvent, MapStableEvent, setLicenseKeyRegistered };

export const time = global.__time || Date.now;

export const RenderProjectionMode = {
    get RENDER_PROJECTION_MODE_PLANAR() {
        return com.carto.components.RenderProjectionMode.RENDER_PROJECTION_MODE_PLANAR;
    },
    get RENDER_PROJECTION_MODE_SPHERICAL() {
        return com.carto.components.RenderProjectionMode.RENDER_PROJECTION_MODE_SPHERICAL;
    },
};
export const PanningMode = {
    get PANNING_MODE_FREE() {
        return com.carto.components.PanningMode.PANNING_MODE_FREE;
    },
    get PANNING_MODE_STICKY() {
        return com.carto.components.PanningMode.PANNING_MODE_STICKY;
    },
    get PANNING_MODE_STICKY_FINAL() {
        return com.carto.components.PanningMode.PANNING_MODE_STICKY_FINAL;
    },
};

let licenseKey: string;

export const registerLicense = profile('registerLicense', (value: string, callback?: (result: boolean) => void) => {
    const context = androidApp.context;
    if (!context) {
        throw new Error('application context not initialized!');
    }
    if (callback) {
        return com.akylas.carto.additions.AKLicenseManager.registerLicenseCallback(
            value,
            context,
            new com.akylas.carto.additions.RegisterLicenseCallback({
                onLicenseRegistered: (result: any) => {
                    if (result) {
                        licenseKey = value;
                    }
                    setLicenseKeyRegistered(result);
                    callback(result);
                },
            })
        );
    } else {
        const result = com.carto.ui.MapView.registerLicense(value, context);

        if (result) {
            licenseKey = value;
        }
        setLicenseKeyRegistered(result);
        return result;
    }
});
export function getLicenseKey() {
    return licenseKey;
}

export class CartoMap<T = DefaultLatLonKeys> extends CartoViewBase {
    public useTextureView: boolean;
    public static setRunOnMainThread(value: boolean) {
        com.akylas.carto.additions.AKMapView.setRunOnMainThread(value);
    }

    nativeViewProtected: com.akylas.carto.additions.AKMapView & {
        listener: com.akylas.carto.additions.AKMapEventListener;
    };
    _projection: IProjection;

    get mapView() {
        return this.nativeViewProtected;
    }
    get projection() {
        return this._projection;
    }
    set projection(proj: IProjection) {
        this._projection = proj;
        if (this.nativeViewProtected) {
            this.mapView.getOptions().setBaseProjection(proj ? proj.getNative() : null);
        }
    }
    public createNativeView(): Object {
        if (!isLicenseKeyRegistered()) {
            const license = this.style['licenseKey'] || getLicenseKey();
            if (license) {
                registerLicense(license);
            }
        }
        let view;
        if (this.useTextureView) {
            view = new com.akylas.carto.additions.AKTextureMapView(this._context);
        } else {
            view = new com.akylas.carto.additions.AKMapView(this._context);
        }
        // view.setLayerType(android.view.View.LAYER_TYPE_HARDWARE, null);
        return view;
    }

    getOptions() {
        if (this.mapReady) {
            return this.mapView.getOptions() as MapOptions;
        }
        return null;
    }
    initNativeView(): void {
        super.initNativeView();
        if (!this.projection) {
            this.projection = new EPSG4326();
        }
        const listener = new com.akylas.carto.additions.AKMapEventListener({
            onMapIdle: () => {
                if (this.hasListeners(MapIdleEvent)) {
                    this.sendEvent(MapIdleEvent);
                }
            },
            onMapMoved: (userAction: boolean) => {
                if (this.hasListeners(MapMovedEvent)) {
                    this.sendEvent(MapMovedEvent, { userAction });
                }
            },
            onMapStable: (userAction: boolean) => {
                if (this.hasListeners(MapStableEvent)) {
                    this.sendEvent(MapStableEvent, { userAction });
                }
            },
            onMapClicked: (mapClickInfo: com.carto.ui.MapClickInfo) => {
                if (this.hasListeners(MapClickedEvent)) {
                    this.sendEvent(MapClickedEvent, {
                        android: mapClickInfo,
                        get clickInfo(){
                            return {
                                get duration() {
                                    return mapClickInfo.getClickInfo().getDuration()
                                }
                            }
                        },
                        get clickType () {
                            return  mapClickInfo.getClickType().swigValue()
                        },
                        get position () {
                            return  fromNativeMapPos(mapClickInfo.getClickPos())
                        }
                    });
                }
            },
        });
        this.nativeViewProtected.listener = listener;
        this.nativeViewProtected.setMapEventListener(listener);
    }

    disposeNativeView(): void {
        this._projection = null;
        this.nativeProjection = null;
        if (this.nativeViewProtected.listener) {
            this.nativeViewProtected.listener = null;
            this.nativeViewProtected.setMapEventListener(null);
        }
        this.nativeView.owner = null;
        super.disposeNativeView();
    }

    fromNativeMapPos(position: com.carto.core.MapPos) {
        return fromNativeMapPos(position);
    }
    fromNativeMapBounds(position: com.carto.core.MapBounds) {
        return fromNativeMapBounds(new com.carto.core.MapBounds(position.getMin(), position.getMax()));
    }
    toNativeMapPos(position: MapPos) {
        return toNativeMapPos(position);
    }
    toNativeMapBounds(position: MapBounds<T>) {
        return new com.carto.core.MapBounds(toNativeMapPos(position.southwest), toNativeMapPos(position.northeast));
    }

    setFocusPos(value: MapPos, duration: number = 0) {
        this.mapView.setFocusPos(toNativeMapPos(value), duration / 1000);
    }

    getFocusPos() {
        return fromNativeMapPos<T>(this.mapView.getFocusPos());
    }
    getMapBounds() {
        const screenBounds = toNativeScreenBounds({ min: { x: this.getMeasuredWidth(), y: 0 }, max: { x: 0, y: this.getMeasuredHeight() } }) as com.carto.core.ScreenBounds;
        return new MapBounds<T>(fromNativeMapPos(this.mapView.screenToMap(screenBounds.getMin())), fromNativeMapPos(this.mapView.screenToMap(screenBounds.getMax())));
    }

    setMapRotation(value: number, targetPos: MapPos | number, duration: number = 0) {
        if (typeof targetPos === 'number') {
            this.mapView.setMapRotation(value, targetPos / 1000);
        } else {
            this.mapView.setMapRotation(value, toNativeMapPos(targetPos), duration / 1000);
        }
    }
    getZoom() {
        return this.mapView.getZoom();
    }
    setZoom(value: number, targetPos: MapPos | number, duration: number = 0) {
        if (typeof targetPos === 'number') {
            this.mapView.setZoom(value, targetPos / 1000);
        } else {
            this.mapView.setZoom(value, toNativeMapPos(targetPos), duration / 1000);
        }
    }
    setTilt(value: number, duration: number = 0) {
        this.mapView.setTilt(value, duration / 1000);
    }
    setBearing(value: number, duration: number = 0) {
        this.mapView.setMapRotation(value, duration / 1000);
    }
    moveToFitBounds(mapBounds: MapBounds<T>, screenBounds: ScreenBounds, integerZoom: boolean, resetRotation: boolean, resetTilt: boolean, durationSeconds: number) {
        if (!screenBounds) {
            screenBounds = { min: { x: 0, y: 0 }, max: { x: this.getMeasuredWidth(), y: this.getMeasuredHeight() } };
        }
        this.mapView.moveToFitBounds(this.toNativeMapBounds(mapBounds), toNativeScreenBounds(screenBounds), integerZoom, resetRotation, resetTilt, durationSeconds / 1000);
    }
    [restrictedPanningProperty.setNative](value: boolean) {
        if (!this.nativeViewProtected) {
            return;
        }
        this.mapView.getOptions().setRestrictedPanning(value);
    }

    getLayers() {
        if (this.mapView) {
            return new Layers<com.carto.components.Layers>(this.mapView.getLayers());
        }
        return null;
    }
    addLayer(layer: TileLayer<any, any>, index?: number) {
        if (this.mapView) {
            const native: com.carto.layers.TileLayer = layer.getNative();
            if (!!native) {
                const layers = this.mapView.getLayers();
                if (index !== undefined && index < layers.count()) {
                    layers.insert(index, native);
                } else {
                    layers.add(native);
                }
            }
        }
    }

    removeLayer(layer: TileLayer<any, any>) {
        if (this.mapView) {
            this.mapView.getLayers().remove(layer.getNative());
        }
    }
    removeAllLayers(layers: TileLayer<any, any>[]) {
        if (this.mapView) {
            const vector = new com.carto.layers.LayerVector();
            layers.forEach((l) => vector.add(l.getNative()));
            this.mapView.getLayers().removeAll(vector);
        }
    }
    clearAllCaches() {
        this.mapView && this.mapView.clearAllCaches();
    }
    clearPreloadingCaches() {
        this.mapView && this.mapView.clearPreloadingCaches();
    }
    requestRedraw() {
        this.mapView && this.mapView.getMapRenderer().requestRedraw();
    }
    cancelAllTasks() {
        this.mapView && this.mapView.cancelAllTasks();
    }
    screenToMap(pos: ScreenPos) {
        if (this.mapView) {
            if (pos instanceof com.carto.core.ScreenPos) {
                return this.fromNativeMapPos(this.mapView.screenToMap(pos));
            }
            return this.fromNativeMapPos(this.mapView.screenToMap(toNativeScreenPos(pos)));
        }
        return null;
    }
    mapToScreen(pos: MapPos | com.carto.core.MapPos) {
        if (this.mapView) {
            if (pos instanceof com.carto.core.MapPos) {
                return fromNativeScreenPos(this.mapView.mapToScreen(pos));
            }
            return fromNativeScreenPos(this.mapView.mapToScreen(toNativeMapPos(pos)));
        }
        return null;
    }

    captureRendering(wait = false) {
        return new Promise((resolve) => {
            this.mapView.getMapRenderer().captureRendering(
                new com.akylas.carto.additions.RendererCaptureListener(
                    new com.akylas.carto.additions.RendererCaptureListener.Listener({
                        onMapRendered(bitmap: com.carto.graphics.Bitmap) {
                            resolve(new ImageSource(com.carto.utils.BitmapUtils.createAndroidBitmapFromBitmap(bitmap)));
                        },
                    })
                ),
                wait
            );
        });
    }
}

export const useTextureViewProperty = new Property<CartoMap, boolean>({
    defaultValue: false,
    name: 'useTextureView',
    valueConverter: booleanConverter,
});
useTextureViewProperty.register(CartoMap);
