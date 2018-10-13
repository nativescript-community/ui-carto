import { CartoViewBase, getLicenseKey, isLicenseKeyRegistered, MapClickedEvent, MapIdleEvent, MapMovedEvent, MapReadyEvent, MapStableEvent, setLicenseKey, setLicenseKeyRegistered } from './ui.common';
import { EPSG3857 } from '../projections/epsg3857';
import { IProjection } from '../projections/projection';
import { fromNativeMapPos, Position, toNativeMapPos } from '../core/core';
import { bearingProperty, focusPosProperty, tiltProperty, zoomProperty } from './cssproperties';
import { TileLayer } from '../layers/layer';

export { MapClickedEvent, MapIdleEvent, MapMovedEvent, MapReadyEvent, MapStableEvent, setLicenseKeyRegistered, setLicenseKey };

interface MapView extends com.akylas.carto.additions.AKMapView {
    // tslint:disable-next-line:no-misused-new
    new (context, owner: WeakRef<CartoMap>): MapView;
}

let MapView: MapView;

// interface MapEventListener extends com.carto.ui.MapEventListener {
//     // tslint:disable-next-line:no-misused-new
//     new (owner: WeakRef<CartoMap>): MapEventListener;
// }

// let MapEventListener: MapEventListener;

function initMapView() {
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
    //                 pos: this.owner.get().fromNativeMapPos(mapClickInfo.getClickPos())
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
            this.owner && this.owner.sendEvent(MapIdleEvent);
        }
        public onMapMoved() {
            // console.log('onMapMoved', this.owner);
            this.owner && this.owner.sendEvent(MapMovedEvent);
        }
        public onMapStable() {
            // console.log('onMapStable');
            this.owner && this.owner.sendEvent(MapStableEvent);
        }
        public onMapClicked(mapClickInfo: com.carto.ui.MapClickInfo) {
            // console.log('onMapClicked', mapClickInfo);
            this.owner &&
                this.owner.sendEvent(MapClickedEvent, {
                    clickType: mapClickInfo.getClickType(),
                    pos: this.owner.fromNativeMapPos(mapClickInfo.getClickPos())
                });
        }
    }
    MapView = MapViewImpl as any;
}
export class CartoMap extends CartoViewBase {
    static projection = new EPSG3857();
    nativeProjection: com.carto.projections.EPSG3857;
    _projection: IProjection;
    get mapView() {
        return this.nativeViewProtected as com.carto.ui.MapView;
    }
    get projection() {
        return this._projection;
    }
    set projection(proj: IProjection) {
        this._projection = proj;
        this.nativeProjection = this._projection.getNative();
        console.log('set projection', proj, this.nativeProjection);
        if (this.nativeViewProtected) {
            this.mapView.getOptions().setBaseProjection(this.nativeProjection); // Since EPSG3857 is the default base projection, this is not needed
        }
    }
    public createNativeView(): Object {
        initMapView();
        if (!isLicenseKeyRegistered()) {
            console.log('need MapView register', this.style['licenseKey'], getLicenseKey());
            const license = this.style['licenseKey'] || getLicenseKey();
            if (license) {
                const result = com.carto.ui.MapView.registerLicense(license, this._context);
                setLicenseKeyRegistered(result);
            } else {
                console.error('no license to register !!!');
            }
        }
        // Create new instance
        const mapView = new MapView(this._context, new WeakRef(this));

        // const listener = new MapEventListener(new WeakRef(this));
        // listener.owner = this;
        // mapView.setMapEventListener(listener);
        // (mapView as any).listener = listener;

        this.projection = CartoMap.projection;
        mapView.getOptions().setBaseProjection(this.nativeProjection); // Since EPSG3857 is the default base projection, this is not needed

        // 1. Set the base projection to be used for MapView, MapEventListener and Options methods
        // mapView.getOptions().setBaseProjection(CartoMap.projection); // Since EPSG3857 is the default base projection, this is not needed

        // 2. General options
        mapView.getOptions().setRotatable(true); // allows the map to rotate (this is the default behavior)
        mapView.getOptions().setZoomGestures(true); // allows the map to rotate (this is the default behavior)
        mapView.getOptions().setTileThreadPoolSize(4); // use two threads to download tiles

        // 3.Set initial location and other parameters, _do not animate_
        mapView.setRotation(0);
        this.mapReady = true;
        return mapView;
    }

    public onLoaded() {
        super.onLoaded();
        // console.log('onLoaded', MapReadyEvent);
        this.sendEvent(MapReadyEvent);
    }

    /**
     * Initializes properties/listeners of the native view.
     */
    initNativeView(): void {
        // Attach the owner to nativeView.
        // When nativeView is tapped we get the owning JS object through this field.
        super.initNativeView();
        (this.nativeViewProtected as any).owner = this;
        // (this.nativeViewProtected as any).listener.owner = this;
    }

    /**
     * Clean up references to the native view and resets nativeView to its original state.
     * If you have changed nativeView in some other way except through setNative callbacks
     * you have a chance here to revert it back to its original state
     * so that it could be reused later.
     */
    disposeNativeView(): void {
        // Remove reference from native listener to this instance.
        // (this.nativeViewProtected as any).listener.owner = null;
        (this.nativeViewProtected as any).owner = null;

        // If you want to recycle nativeView and have modified the nativeView
        // without using Property or CssProperty (e.g. outside our property system - 'setNative' callbacks)
        // you have to reset it to its initial state here.
        super.disposeNativeView();
    }

    fromNativeMapPos(pos: com.carto.core.MapPos) {
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
            return this.mapView.getMapRotation();
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
    // metersToEquatorPixels(map, location, zoom, meters) {
    //     // CameraPosition position = map.getCameraPosition();
    //     let center = location;
    //     if (center == null) {
    //         center = map.getFocusPos();
    //         if (center == null) {
    //             center = new MapPos(0, 0);
    //         }
    //     }
    //     let zoomLevel = zoom;
    //     if (zoomLevel < 0) {
    //         zoomLevel = map.getZoom();
    //     }
    //     const latRadians = (center.getX() * Math.PI) / 180;
    //     const metersPerPixel = 40075016.68 / (256 * Math.pow(2, zoomLevel));
    //     return 1 / (meters / Math.cos(latRadians) / metersPerPixel);
    // }
    getMetersPerPixel(): number {
        if (this.mapView) {
            const pos = this.getFocusPos();
            const zoom = this.getZoom();
            console.log('getMetersPerPixel', pos, zoom);
            return (156543.03390625 * Math.cos((pos.latitude * Math.PI) / 180)) / Math.pow(2, zoom);
        }
        return this.style['metersPerPixel'];
    }

    [zoomProperty.setNative](value: number) {
        if (!this.mapView) {
            return;
        }
        console.log('native setZoom', value, typeof value);
        this.mapView.setZoom(value, 0);
    }
    [tiltProperty.setNative](value: number) {
        if (!this.mapView) {
            return;
        }
        console.log('native setTilt', value, typeof value);
        this.mapView.setTilt(value, 0);
    }
    [bearingProperty.setNative](value: number) {
        if (!this.mapView) {
            return;
        }
        this.mapView.setMapRotation(value, 0);
    }
    [focusPosProperty.setNative](value: string | Position) {
        if (!this.mapView || !this.nativeProjection) {
            return;
        }
        console.log('native setFocusPos', value, typeof value);
        if (typeof value === 'string') {
            const positions = value.split(',').map(parseFloat);
            this.mapView.setFocusPos(this.nativeProjection.fromWgs84(new com.carto.core.MapPos(positions[1], positions[0])), 0);
        } else {
            this.mapView.setFocusPos(this.nativeProjection.fromWgs84(toNativeMapPos(value)), 0);
        }
    }

    addLayer(layer: TileLayer<any, any>) {
        // console.log('addLayer1', layer, !!this.mapView);
        if (this.mapView) {
            const native = layer.getNative();
            // console.log('addLayer2', layer, native);
            if (!!native) {
                this.mapView.getLayers().add(native);
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
    cancelAllTasks() {
        this.mapView && this.mapView.cancelAllTasks();
    }
    screenToMap(x: number, y: number) {
        if (this.mapView) {
            return this.fromNativeMapPos(this.mapView.screenToMap(new com.carto.core.ScreenPos(x, y)));
        }
        return null;
    }
}
