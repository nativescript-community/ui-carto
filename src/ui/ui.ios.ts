import { fromNativeMapPos, fromNativeScreenPos, MapPos, ScreenPos, toNativeMapPos, toNativeScreenPos } from '../core/core';
import { TileLayer } from '../layers/layer';
import { EPSG4326 } from '../projections/epsg4326';
import { IProjection } from '../projections/projection';
import { restrictedPanningProperty } from './cssproperties';
import { MapOptions } from './ui';
import { CartoViewBase, isLicenseKeyRegistered, MapClickedEvent, MapIdleEvent, MapMovedEvent, MapReadyEvent, MapStableEvent, setLicenseKeyRegistered } from './ui.common';

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
            // const zoom = owner.zoom;
            // const mpp = owner.metersPerPixel;
            owner.notify({
                eventName: MapMovedEvent,
                object: owner
            });
        }
    }
    public onMapStable() {
        const owner = this._owner.get();
        if (owner && owner.hasListeners(MapStableEvent)) {
            owner.notify({ eventName: MapStableEvent, object: owner });
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

export class CartoMap extends CartoViewBase {
    static projection = new EPSG4326();
    nativeProjection: NTProjection;
    _projection: IProjection;
    constructor() {
        super();
        if (!isLicenseKeyRegistered()) {
            this.log('need NTMapView register', this.style['licenseKey'], getLicenseKey());
            const license = this.style['licenseKey'] || getLicenseKey();
            if (license) {
                registerLicense(license);
            } else {
                console.error('no license to register !!!');
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
        return NTMapView.alloc().init();
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
        const options = this.nativeViewProtected.getOptions();
        if (!this.projection) {
            this.projection = CartoMap.projection;
        }
        // 2. General options
        options.setRotatable(true); // allows the map to rotate (this is the default behavior)
        options.setZoomGestures(true); // allows the map to rotate (this is the default behavior)
        options.setTileThreadPoolSize(2); // use two threads to download tiles

        // 3.Set initial location and other parameters, _do not animate_
        // this.nativeView.setRotationDurationSeconds(0, 0);
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
        this.mapView.setFocusPosDurationSeconds(this.nativeProjection.fromWgs84(toNativeMapPos(value)), duration / 1000);
    }
    setZoom(value: number, duration: number) {
        this.mapView.setZoomDurationSeconds(value, duration / 1000);
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

    addLayer(layer: TileLayer<any, any>, index?: number) {
        if (this.mapView) {
            const native: NTTileLayer = layer.getNative();
            if (!!native) {
                if (index !== undefined) {
                    this.mapView.getLayers().insertLayer(index, native);
                } else {
                    this.mapView.getLayers().add(native);
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
}
