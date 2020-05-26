import { CartoViewBase, Layers, MapClickedEvent, MapIdleEvent, MapMovedEvent, MapReadyEvent, MapStableEvent, isLicenseKeyRegistered, setLicenseKeyRegistered } from './index.common';
import * as application from '@nativescript/core/application';
import { profile } from '@nativescript/core/profiling';
import { MapBounds, MapPos, ScreenBounds, ScreenPos, fromNativeMapBounds, fromNativeMapPos, fromNativeScreenPos, toNativeMapPos, toNativeScreenBounds, toNativeScreenPos } from '../core';
import { TileLayer } from '../layers';
import { IProjection } from '../projections';
import { restrictedPanningProperty } from './cssproperties';

import { MapOptions } from '.';
import { EPSG4326 } from '../projections/epsg4326';
export { MapClickedEvent, MapIdleEvent, MapMovedEvent, MapReadyEvent, MapStableEvent, setLicenseKeyRegistered };

import { fromNativeSource } from '@nativescript/core/image-source';

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
    const context = application.android.context;
    if (!context) {
        throw new Error('application context not initialized!');
    }
    if (callback) {
        return com.akylas.carto.additions.AKLicenseManager.registerLicenseCallback(
            value,
            context,
            new com.akylas.carto.additions.RegisterLicenseCallback({
                onLicenseRegistered: (result) => {
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

interface RendererCaptureListener extends com.carto.renderers.RendererCaptureListener {
    // tslint:disable-next-line:no-misused-new
    new (callback: WeakRef<Function>): RendererCaptureListener;
}
let RendererCaptureListener: RendererCaptureListener;
function initRendererCaptureListener() {
    if (RendererCaptureListener) {
        return;
    }
    class RendererCaptureListenerImpl extends com.carto.renderers.RendererCaptureListener {
        private _callback: WeakRef<Function>;

        constructor(callback: WeakRef<Function>) {
            super();
            this._callback = callback;
        }

        onMapRendered(param0: com.carto.graphics.Bitmap) {
            const callback = this._callback.get();
            if (callback) {
                callback(com.carto.utils.BitmapUtils.createAndroidBitmapFromBitmap(param0));
            }
        }
    }
    RendererCaptureListener = RendererCaptureListenerImpl as any;
}


export class CartoMap extends CartoViewBase {
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
        return new com.akylas.carto.additions.AKMapView(this._context);
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
                        clickType: mapClickInfo.getClickType().swigValue(),
                        position: fromNativeMapPos(mapClickInfo.getClickPos()),
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
    toNativeMapBounds(position: MapBounds) {
        return new com.carto.core.MapBounds(toNativeMapPos(position.southwest), toNativeMapPos(position.northeast));
    }

    setFocusPos(value: MapPos, duration: number = 0) {
        this.mapView.setFocusPos(toNativeMapPos(value), duration / 1000);
    }

    setMapRotation(value: number, targetPos: MapPos | number, duration: number = 0) {
        if (typeof targetPos === 'number') {
            this.mapView.setMapRotation(value, targetPos / 1000);
        } else {
            this.mapView.setMapRotation(value, toNativeMapPos(targetPos), duration / 1000);
        }
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
    moveToFitBounds(mapBounds: MapBounds, screenBounds: ScreenBounds, integerZoom: boolean, resetRotation: boolean, resetTilt: boolean, durationSeconds: number) {
        this.mapView.moveToFitBounds(this.toNativeMapBounds(mapBounds), toNativeScreenBounds(screenBounds), integerZoom, resetRotation, resetTilt, durationSeconds);
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
                // console.log('addLayer', index, layers.count(), native);
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
            initRendererCaptureListener();
            this.mapView.getMapRenderer().captureRendering(
                new RendererCaptureListener(
                    new WeakRef(function (bitmap) {
                        resolve(fromNativeSource(bitmap));
                    })
                ),
                wait
            );
        });
    }
}
