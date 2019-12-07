import { CartoViewBase, isLicenseKeyRegistered, Layers, MapClickedEvent, MapIdleEvent, MapMovedEvent, MapReadyEvent, MapStableEvent, setLicenseKeyRegistered } from './index.common';
import * as application from '@nativescript/core/application';
import { profile } from '@nativescript/core/profiling';
import { fromNativeMapBounds, fromNativeMapPos, fromNativeScreenPos, MapBounds, MapPos, ScreenBounds, ScreenPos, toNativeMapPos, toNativeScreenBounds, toNativeScreenPos } from '../core';
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
    }
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
                onLicenseRegistered: result => {
                    if (result) {
                        licenseKey = value;
                    }
                    setLicenseKeyRegistered(result);
                    callback(result);
                }
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

export interface MapView extends com.akylas.carto.additions.AKMapView {
    // tslint:disable-next-line:no-misused-new
    new (context, owner: WeakRef<CartoMap>): MapView;
}

let MapView: MapView;

// interface MapEventListener extends com.carto.ui.MapEventListener {
//     // tslint:disable-next-line:no-misused-new
//     new (owner: WeakRef<CartoMap>): MapEventListener;
// }

// let MapEventListener: MapEventListener;

function initMapViewClass() {
    if (MapView) {
        return;
    }

    // @Interfaces([com.carto.ui.MapEventListener])
    // class MapEventListenerImpl extends com.carto.ui.MapEventListener {
    //     constructor(private owner: WeakRef<CartoMap>) {
    //         super();
    //         return global.__native(this);
    //     }
    //     public onMapIdle() {
    //         this.owner && this.owner.get().sendEvent(MapIdleEvent);
    //     }
    //     public onMapMoved() {
    //         this.owner && this.owner.get().sendEvent(MapMovedEvent);
    //     }
    //     public onMapStable() {
    //         this.owner && this.owner.get().sendEvent(MapStableEvent);
    //     }
    //     public onMapClicked(mapClickInfo: com.carto.ui.MapClickInfo) {
    //         this.owner &&
    //             this.owner.get().sendEvent(MapClickedEvent, {
    //                 clickType: mapClickInfo.getClickType(),
    //                 position: this.owner.get().fromNativeMapPos(mapClickInfo.getClickPos())
    //             });
    //     }
    // }
    // MapEventListener = MapEventListenerImpl as any;

    class MapViewImpl extends com.akylas.carto.additions.AKMapView {
        constructor(context, private owner: CartoMap) {
            super(context);
            return global.__native(this);
        }
        public onMapIdle() {
            // console.log('onMapIdle');
            const owner = this.owner;
            if (owner && owner.hasListeners(MapIdleEvent)) {
                owner.sendEvent(MapIdleEvent);
            }
        }
        public onMapMoved(userAction: boolean) {
            const owner = this.owner;
            if (owner && owner.hasListeners(MapMovedEvent)) {
                owner.sendEvent(MapMovedEvent, { userAction });
            }
        }
        public onMapStable(userAction: boolean) {
            // console.log('onMapStable');
            const owner = this.owner;
            if (owner) {
                if (owner.hasListeners(MapStableEvent)) {
                    owner.sendEvent(MapStableEvent, { userAction });
                }
            }
        }
        public onMapClicked(mapClickInfo: com.carto.ui.MapClickInfo) {
            // console.log('onMapClicked', mapClickInfo);
            const owner = this.owner;
            if (owner && owner.hasListeners(MapClickedEvent)) {
                owner.sendEvent(MapClickedEvent, {
                    clickType: mapClickInfo.getClickType().swigValue(),
                    position: this.owner.fromNativeMapPos(mapClickInfo.getClickPos())
                });
            }
        }
    }
    MapView = MapViewImpl as any;
}
export class CartoMap extends CartoViewBase {
    nativeViewProtected: MapView;
    static projection = new EPSG4326();
    nativeProjection: com.carto.projections.Projection;
    _projection: IProjection;

    get mapView() {
        return this.nativeViewProtected as com.carto.ui.MapView;
    }
    get projection() {
        return this._projection;
    }
    set projection(proj: IProjection) {
        // this.log('set projection', proj);
        this._projection = proj;
        this.nativeProjection = this._projection.getNative();
        if (this.nativeViewProtected) {
            // this.log('set native projection', this.nativeProjection);
            this.mapView.getOptions().setBaseProjection(this.nativeProjection);
        }
    }
    public createNativeView(): Object {
        initMapViewClass();
        if (!isLicenseKeyRegistered()) {
            // this.log('need MapView register', this.style['licenseKey'], getLicenseKey());
            const license = this.style['licenseKey'] || getLicenseKey();
            if (license) {
                registerLicense(license);
            }
        }
        // Create new instance
        return new MapView(this._context, new WeakRef(this));
    }

    getOptions() {
        if (this.mapReady) {
            return this.mapView.getOptions() as MapOptions;
        }
        return null;
    }
    /**
     * Initializes properties/listeners of the native view.
     */
    initNativeView(): void {
        // Attach the owner to nativeView.
        // When nativeView is tapped we get the owning JS object through this field.
        this.nativeView.owner = this;
        super.initNativeView();
        if (!this.projection) {
            this.projection = CartoMap.projection;
        }
    }

    disposeNativeView(): void {
        this._projection = null;
        this.nativeProjection = null;
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

    setFocusPos(value: MapPos, duration: number) {
        this.mapView.setFocusPos(toNativeMapPos(value), duration / 1000);
    }

    setMapRotation(value: number, targetPos: MapPos | number, duration: number) {
        if (typeof targetPos === 'number') {
            this.mapView.setMapRotation(value, targetPos / 1000);
        } else {
            this.mapView.setMapRotation(value, toNativeMapPos(targetPos), duration / 1000);
        }
    }
    setZoom(value: number, targetPos: MapPos | number, duration: number) {
        if (typeof targetPos === 'number') {
            this.mapView.setZoom(value, targetPos / 1000);
        } else {
            this.mapView.setZoom(value, toNativeMapPos(targetPos), duration / 1000);
        }
    }
    setTilt(value: number, duration: number) {
        this.mapView.setTilt(value, duration / 1000);
    }
    setBearing(value: number, duration: number) {
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
    removeAllLayers(layers: Array<TileLayer<any, any>>) {
        if (this.mapView) {
            const vector = new com.carto.layers.LayerVector();
            layers.forEach(l => vector.add(l.getNative()));
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
        return new Promise(resolve => {
            initRendererCaptureListener();
            this.mapView.getMapRenderer().captureRendering(
                new RendererCaptureListener(
                    new WeakRef(function(bitmap) {
                        resolve(fromNativeSource(bitmap));
                    })
                ),
                wait
            );
        });
    }
}
