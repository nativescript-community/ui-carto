import { CartoViewBase, getLicenseKey, isLicenseKeyRegistered, MapClickedEvent, MapIdleEvent, MapMovedEvent, MapReadyEvent, MapStableEvent, setLicenseKey, setLicenseKeyRegistered } from './ui.common';
import { EPSG3857 } from '../projections/epsg3857';
import { IProjection } from '../projections/projection';
import { fromNativeMapPos, Position, toNativeMapPos } from '../core/core';
import { bearingProperty, focusPosProperty, tiltProperty, zoomProperty } from './cssproperties';
import { TileLayer } from '../layers/layer';

export { MapClickedEvent, MapIdleEvent, MapMovedEvent, MapReadyEvent, MapStableEvent, setLicenseKeyRegistered, setLicenseKey };

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
                    pos: owner.fromNativeMapPos(mapClickInfo.getClickPos())
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
                const result = NTMapView.registerLicense(license);
                setLicenseKeyRegistered(result);
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
        console.log('set projection', proj, this.nativeProjection);
        this.mapView.getOptions().setBaseProjection(this.nativeProjection); // Since EPSG3857 is the default base projection, this is not needed
    }

    public createNativeView(): Object {
        // Create new instance
        const mapView: NTMapView = (this.mapView = NTMapView.alloc().init() as NTMapView);
        mapView.setMapEventListener(NTMapEventListenerImpl.initWithOwner(new WeakRef(this)));

        this.projection = CartoMap.projection;
        // 2. General options
        mapView.getOptions().setRotatable(true); // allows the map to rotate (this is the default behavior)
        mapView.getOptions().setZoomGestures(true); // allows the map to rotate (this is the default behavior)
        mapView.getOptions().setTileThreadPoolSize(4); // use two threads to download tiles

        // 3.Set initial location and other parameters, _do not animate_
        mapView.setRotationDurationSeconds(0, 0);
        this.mapReady = true;
        this.notify({
            eventName: MapReadyEvent,
            object: this,
            data: mapView
        });

        return mapView;
    }

    /**
     * Initializes properties/listeners of the native view.
     */
    initNativeView(): void {
        // Attach the owner to nativeView.
        // When nativeView is tapped we get the owning JS object through this field.
        (this.nativeView as any).owner = this;
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
        (this.nativeView as any).owner = null;

        // If you want to recycle nativeView and have modified the nativeView
        // without using Property or CssProperty (e.g. outside our property system - 'setNative' callbacks)
        // you have to reset it to its initial state here.
        super.disposeNativeView();
    }
    fromNativeMapPos(pos: NTMapPos) {
        return fromNativeMapPos(this.nativeProjection.toWgs84(this.mapView.getFocusPos()));
    }

    getFocusPos(): Position {
        console.log('get focusPos', !!this.mapView);
        if (this.mapView) {
            return this.fromNativeMapPos(this.mapView.getFocusPos());
        }
        return this.style['focusPos'];
    }

    setFocusPos(value: string | Position) {
        this.style['focusPos'] = value;
    }
    getZoom(): number {
        if (this.mapView) {
            return this.mapView.getZoom();
        }
        return this.style['zoom'];
    }
    setZoom(value: number) {
        this.style['zoom'] = value;
    }
    getBearing(): number {
        if (this.mapView) {
            return this.mapView.getRotation();
        }
        return this.style['bearing'];
    }

    setBearing(value: number) {
        this.style['bearing'] = value;
    }
    getTilt(): number {
        if (this.mapView) {
            return this.mapView.getTilt();
        }
        return this.style['tilt'];
    }

    setTilt(value: number) {
        this.style['tilt'] = value;
    }
    getMetersPerPixel(): number {
        if (this.mapView) {
            const pos = this.mapView.getFocusPos();
            const zoom = this.mapView.getZoom();
            return (156543.03392 * Math.cos((pos.getX() * Math.PI) / 180)) / Math.pow(2, zoom);
        }
        return this.style['metersPerPixel'];
    }

    [zoomProperty.setNative](zoom: number) {
        if (!this.mapView) {
            return;
        }
        this.mapView.setZoomDurationSeconds(zoom, 0);
    }
    [tiltProperty.setNative](value: number) {
        if (!this.mapView) {
            return;
        }
        this.mapView.setTiltDurationSeconds(value, 0);
    }
    [bearingProperty.setNative](value: number) {
        if (!this.mapView) {
            return;
        }
        this.mapView.setRotationDurationSeconds(value, 0);
    }
    [focusPosProperty.setNative](pos: string | Position) {
        if (!this.mapView || !this.nativeProjection) {
            return;
        }
        if (typeof pos === 'string') {
            const positions = pos.split(',').map(parseFloat);
            this.mapView.setFocusPosDurationSeconds(this.nativeProjection.fromWgs84(NTMapPos.alloc().initWithXY(positions[1], positions[0])), 0);
        } else {
            this.mapView.setFocusPosDurationSeconds(this.nativeProjection.fromWgs84(toNativeMapPos(pos)), 0);
        }
    }

    addLayer(layer: TileLayer<any, any>) {
        if (this.mapView && !!layer.getNative()) {
            this.mapView.getLayers().add(layer.getNative());
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
    screenToMap(x: number, y: number) {
        if (this.mapView) {
            return this.fromNativeMapPos(this.mapView.screenToMap(NTScreenPos.alloc().initWithXY(x, y)));
        }
        return null;
    }
}
