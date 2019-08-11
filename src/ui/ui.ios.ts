import { fromNativeMapPos, fromNativeScreenPos, MapPos, ScreenPos, toNativeMapPos, toNativeScreenPos } from '../core/core';
import { TileLayer } from '../layers/layer';
import { EPSG4326 } from '../projections/epsg4326';
import { IProjection } from '../projections/projection';
import { restrictedPanningProperty } from './cssproperties';
import { MapOptions } from './ui';
import { CartoViewBase, isLicenseKeyRegistered, Layers, MapClickedEvent, MapIdleEvent, MapMovedEvent, MapReadyEvent, MapStableEvent, setLicenseKeyRegistered } from './ui.common';
import { NativeVector } from 'nativescript-carto/core/core.android';
import { fromNativeSource } from 'tns-core-modules/image-source/image-source';

export { MapClickedEvent, MapIdleEvent, MapMovedEvent, MapReadyEvent, MapStableEvent, setLicenseKeyRegistered };

export enum RenderProjectionMode {
    RENDER_PROJECTION_MODE_PLANAR = NTRenderProjectionMode.T_RENDER_PROJECTION_MODE_PLANAR,
    RENDER_PROJECTION_MODE_SPHERICAL = NTRenderProjectionMode.T_RENDER_PROJECTION_MODE_SPHERICAL
}

let licenseKey: string;
export function registerLicense(value: string, callback?: (result: boolean) => void) {
    const result = NTMapView.registerLicense(value);
    if (result) {
        licenseKey = value;
    }
    setLicenseKeyRegistered(result);
    if (callback) {
        callback(result);
    }
}
export function getLicenseKey() {
    return licenseKey;
}

class NTMapEventListenerImpl extends NTMapEventListener {
    private _owner: WeakRef<CartoMap>;

    public static initWithOwner(owner: WeakRef<CartoMap>): NTMapEventListenerImpl {
        const delegate = NTMapEventListenerImpl.new() as NTMapEventListenerImpl;
        delegate._owner = owner;
        return delegate;
    }

    public onMapIdle() {
        const owner = this._owner.get();
        if (owner && owner.hasListeners(MapIdleEvent)) {
            owner.notify({ eventName: MapIdleEvent, object: owner });
        }
    }

    public onMapMoved() {
        const owner = this._owner.get();
        if (owner && owner.hasListeners(MapMovedEvent)) {
            owner.notify({
                eventName: MapMovedEvent,
                object: owner,
                data: { userAction: owner.userAction }
            });
        }
    }
    public onMapStable() {
        const owner = this._owner.get();

        if (owner) {
            if (owner.hasListeners(MapStableEvent)) {
                owner.notify({ eventName: MapStableEvent, object: owner, data: { userAction: owner.userAction } });
            }
            owner.userAction = false;
        }
    }
    public onMapClicked(mapClickInfo: NTMapClickInfo) {
        const owner = this._owner.get();
        if (owner && owner.hasListeners(MapClickedEvent)) {
            owner.notify({
                eventName: MapClickedEvent,
                object: owner,
                data: {
                    clickType: mapClickInfo.getClickType(),
                    position: owner.fromNativeMapPos(mapClickInfo.getClickPos())
                }
            });
        }
    }
}

class NTRendererCaptureListenerImpl extends NTRendererCaptureListener {
    private _callback: WeakRef<Function>;
    public static initWithCallback(callback: WeakRef<Function>): NTRendererCaptureListenerImpl {
        const delegate = NTRendererCaptureListenerImpl.new() as NTRendererCaptureListenerImpl;
        delegate._callback = callback;
        return delegate;
    }

    onMapRenderedSwigExplicitNTRendererCaptureListener(param0: NTBitmap) {
        const callback = this._callback.get();
        if (callback) {
            callback(NTBitmapUtils.createUIImageFromBitmap(param0));
        }
    }
}

class MapView extends NTMapView {
    owner: CartoMap;

    touchesBeganWithEvent(touches, event) {
        super.touchesBeganWithEvent(touches, event);
        if (this.owner) {
            this.owner.userAction = false;
        }
    }
    touchesMovedWithEvent(touches, event) {
        super.touchesMovedWithEvent(touches, event);
        if (this.owner) {
            this.owner.userAction = true;
        }
    }
    // touchesCancelledWithEvent(touches, event) {
    //     super.touchesCancelledWithEvent(touches, event);
    //     if (this.owner) {
    //         this.owner.userAction = false;
    //     }
    // }
    // touchesEndedWithEvent(touches, event) {
    //     super.touchesEndedWithEvent(touches, event);
    //     if (this.owner) {
    //         this.owner.userAction = false;
    //     }
    // }
}

export class CartoMap extends CartoViewBase {
    static projection = new EPSG4326();
    nativeProjection: NTProjection;
    _projection: IProjection;
    userAction = false;
    constructor() {
        super();
        if (!isLicenseKeyRegistered()) {
            // this.log('need NTMapView register', this.style['licenseKey'], getLicenseKey());
            const license = this.style['licenseKey'] || getLicenseKey();
            if (license) {
                registerLicense(license);
            }
        }
    }

    get mapView() {
        return this.nativeViewProtected as NTMapView;
    }
    get projection() {
        return this._projection;
    }
    set projection(proj: IProjection) {
        this._projection = proj;
        this.nativeProjection = this._projection.getNative();
        if (this.nativeViewProtected) {
            this.mapView.getOptions().setBaseProjection(this.nativeProjection);
        }
    }

    public createNativeView(): Object {
        return MapView.alloc().init();
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
        this.mapView.setMapEventListener(NTMapEventListenerImpl.initWithOwner(new WeakRef(this)));

        // const options = this.nativeViewProtected.getOptions();
        if (!this.projection) {
            this.projection = CartoMap.projection;
        }
    }

    disposeNativeView(): void {
        // Remove reference from native listener to this instance.
        this.mapView.setMapEventListener(null);
        this.nativeView.owner = null;
        super.disposeNativeView();
    }
    fromNativeMapPos(position: NTMapPos) {
        return fromNativeMapPos(position);
    }
    setFocusPos(value: MapPos, duration: number) {
        this.mapView.setFocusPosDurationSeconds(toNativeMapPos(value), duration / 1000);
    }
    setZoom(value: number, targetPos: MapPos | number, duration: number) {
        if (typeof targetPos === 'number') {
            this.mapView.setZoomDurationSeconds(value, targetPos / 1000);
        } else {
            this.mapView.setZoomTargetPosDurationSeconds(value, toNativeMapPos(targetPos), duration / 1000);
        }
    }
    setMapRotation(value: number, targetPos: MapPos | number, duration: number) {
        if (typeof targetPos === 'number') {
            this.mapView.setRotationDurationSeconds(value, targetPos / 1000);
        } else {
            this.mapView.setRotationTargetPosDurationSeconds(value, toNativeMapPos(targetPos), duration / 1000);
        }
    }
    setTilt(value: number, duration: number) {
        this.mapView.setTiltDurationSeconds(value, duration / 1000);
    }
    setBearing(value: number, duration: number) {
        this.mapView.setRotationDurationSeconds(value, duration / 1000);
    }
    [restrictedPanningProperty.setNative](value: boolean) {
        if (!this.nativeViewProtected) {
            return;
        }
        this.mapView.getOptions().setRestrictedPanning(value);
    }

    getLayers() {
        if (this.mapView) {
            return new Layers<NTLayers>(this.mapView.getLayers());
        }
        return null;
    }
    addLayer(layer: TileLayer<any, any>, index?: number) {
        if (this.mapView) {
            const native: NTTileLayer = layer.getNative();
            if (!!native) {
                const layers = this.mapView.getLayers();
                if (index !== undefined && index <= layers.count()) {
                    layers.insertLayer(index, native);
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
            const vector = NTLayerVector.alloc().init();
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
    cancelAllTasks() {
        this.mapView && this.mapView.cancelAllTasks();
    }
    requestRedraw() {
        this.mapView && this.mapView.getMapRenderer().requestRedraw();
    }
    screenToMap(pos: ScreenPos | NTScreenPos) {
        if (this.mapView) {
            if (pos instanceof NTScreenPos) {
                return this.fromNativeMapPos(this.mapView.screenToMap(pos));
            }
            return this.fromNativeMapPos(this.mapView.screenToMap(toNativeScreenPos(pos)));
        }
        return null;
    }
    mapToScreen(pos: MapPos | NTMapPos) {
        if (this.mapView) {
            if (pos instanceof NTMapPos) {
                return fromNativeScreenPos(this.mapView.mapToScreen(pos));
            }
            return fromNativeScreenPos(this.mapView.mapToScreen(toNativeMapPos(pos)));
        }
        return null;
    }

    captureRendering(wait = false) {
        return new Promise(resolve => {
            this.mapView.getMapRenderer().captureRenderingWaitWhileUpdating(
                NTRendererCaptureListenerImpl.initWithCallback(
                    new WeakRef(function(bitmap) {
                        resolve(fromNativeSource(bitmap));
                    })
                ),
                wait
            );
        });
    }
}
