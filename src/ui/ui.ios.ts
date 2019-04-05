import { CartoViewBase, isLicenseKeyRegistered, MapClickedEvent, MapIdleEvent, MapMovedEvent, MapReadyEvent, MapStableEvent, setLicenseKeyRegistered } from './ui.common';
import { EPSG3857 } from '../projections/epsg3857';
import { IProjection } from '../projections/projection';
import { fromNativeMapPos, MapPos, ScreenPos, toNativeMapPos } from '../core/core';
import { TileLayer } from '../layers/layer';
import { restrictedPanningProperty } from './cssproperties';
import { MapOptions } from './ui';
import { fromNativeScreenPos, toNativeScreenPos } from 'nativescript-carto/core/core.ios';

export { MapClickedEvent, MapIdleEvent, MapMovedEvent, MapReadyEvent, MapStableEvent, setLicenseKeyRegistered };

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
    private mapView: NTMapView;
    static projection = new EPSG3857();
    nativeProjection: NTEPSG3857;
    constructor() {
        super();
        if (!isLicenseKeyRegistered()) {
            console.log('need NTMapView register', this.style['licenseKey'], getLicenseKey());
            const license = this.style['licenseKey'] || getLicenseKey();
            if (license) {
                registerLicense(license);
            } else {
                console.error('no license to register !!!');
            }
        }
    }
    _projection: IProjection;
    get projection() {
        return this._projection;
    }
    set projection(proj: IProjection) {
        this._projection = proj;
        this.nativeProjection = this._projection.getNative();
        this.mapView.getOptions().setBaseProjection(this.nativeProjection); // Since EPSG3857 is the default base projection, this is not needed
    }

    public createNativeView(): Object {
        // Create new instance
        const mapView: NTMapView = (this.mapView = NTMapView.alloc().init());
        mapView.setMapEventListener(NTMapEventListenerImpl.initWithOwner(new WeakRef(this)));

        this.projection = CartoMap.projection;
        // 2. General options
        mapView.getOptions().setRotatable(true); // allows the map to rotate (this is the default behavior)
        mapView.getOptions().setZoomGestures(true); // allows the map to rotate (this is the default behavior)
        mapView.getOptions().setTileThreadPoolSize(4); // use two threads to download tiles

        // 3.Set initial location and other parameters, _do not animate_
        mapView.setRotationDurationSeconds(0, 0);

        return mapView;
    }

    getOptions() {
        return this.mapView.getOptions() as MapOptions;
    }

    /**
     * Initializes properties/listeners of the native view.
     */
    initNativeView(): void {
        // Attach the owner to nativeView.
        // When nativeView is tapped we get the owning JS object through this field.
        this.nativeView.owner = this;
        super.initNativeView();
    }

    /**
     * Clean up references to the native view and resets nativeView to its original state.
     * If you have changed nativeView in some other way except through setNative callbacks
     * you have a chance here to revert it back to its original state
     * so that it could be reused later.
     */
    disposeNativeView(): void {
        // Remove reference from native listener to this instance.
        this.nativeView.owner = null;

        // If you want to recycle nativeView and have modified the nativeView
        // without using Property or CssProperty (e.g. outside our property system - 'setNative' callbacks)
        // you have to reset it to its initial state here.
        super.disposeNativeView();
    }
    fromNativeMapPos(position: NTMapPos) {
        return fromNativeMapPos(this.nativeProjection.toWgs84(this.mapView.getFocusPos()));
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
    screenToMap(pos: ScreenPos) {
        if (this.mapView) {
            return this.fromNativeMapPos(this.mapView.screenToMap(toNativeScreenPos(pos)));
        }
        return null;
    }
    mapToScreen(pos: MapPos) {
        if (this.mapView) {
            return fromNativeScreenPos(this.mapView.mapToScreen(this.nativeProjection.fromWgs84(toNativeMapPos(pos))));
        }
        return null;
    }
}
