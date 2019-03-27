import { CartoViewBase, isLicenseKeyRegistered, MapClickedEvent, MapIdleEvent, MapMovedEvent, MapReadyEvent, MapStableEvent, setLicenseKeyRegistered } from './ui.common';
import { EPSG3857 } from '../projections/epsg3857';
import { IProjection, Projection } from '../projections/projection';
import { fromNativeMapBounds, fromNativeMapPos, fromNativeScreenPos, MapBounds, MapPos, ScreenBounds, ScreenPos, toNativeMapBounds, toNativeMapPos, toNativeScreenBounds } from '../core/core';
import { TileLayer } from '../layers/layer';
import * as application from 'application';
import { restrictedPanningProperty } from './cssproperties';
import { MapOptions } from './ui';
import { toNativeScreenPos } from 'nativescript-carto/core/core.android';

export { MapClickedEvent, MapIdleEvent, MapMovedEvent, MapReadyEvent, MapStableEvent, setLicenseKeyRegistered };

let licenseKey: string;
export function registerLicense(value: string) {
    const context = application.android.context;
    if (!context) {
        throw new Error('application context not initialized!');
    }
    const result = com.carto.ui.MapView.registerLicense(value, context);
    console.log('registerLicense', value, result);
    if (result) {
        licenseKey = value;
    }
    setLicenseKeyRegistered(result);
}
export function getLicenseKey() {
    return licenseKey;
}

export interface MapView extends com.akylas.carto.additions.AKMapView {
    // tslint:disable-next-line:no-misused-new
    new (context, owner: WeakRef<CartoMap>): MapView;
    owner: CartoMap;
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
                    position: this.owner.fromNativeMapPos(mapClickInfo.getClickPos())
                });
        }
    }
    MapView = MapViewImpl as any;
}
export class CartoMap extends CartoViewBase {
    nativeViewProtected: MapView;
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
        if (this.nativeViewProtected) {
            this.mapView.getOptions().setBaseProjection(this.nativeProjection); // Since EPSG3857 is the default base projection, this is not needed
        }
    }
    public createNativeView(): Object {
        initMapViewClass();
        if (!isLicenseKeyRegistered()) {
            console.log('need MapView register', this.style['licenseKey'], getLicenseKey());
            const license = this.style['licenseKey'] || getLicenseKey();
            if (license) {
                registerLicense(license);
            } else {
                console.error('no license to register !!!');
            }
        }
        // Create new instance
        const mapView = new MapView(this._context, new WeakRef(this));
        const options = mapView.getOptions();
        console.log('creating mapView', options.getBaseProjection());

        this.projection = new Projection(undefined, options.getBaseProjection());

        options.setRotatable(true); // allows the map to rotate (this is the default behavior)
        options.setZoomGestures(true); // allows the map to rotate (this is the default behavior)
        options.setTileThreadPoolSize(2); // use two threads to download tiles

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
        super.initNativeView();
        this.nativeViewProtected.owner = this;
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
        this.nativeViewProtected.owner = null;
        // this.nativeViewProtected.onPause();
        // If you want to recycle nativeView and have modified the nativeView
        // without using Property or CssProperty (e.g. outside our property system - 'setNative' callbacks)
        // you have to reset it to its initial state here.
        super.disposeNativeView();
    }

    fromNativeMapPos(position: com.carto.core.MapPos) {
        return fromNativeMapPos(this.nativeProjection.toWgs84(position));
    }
    fromNativeMapBounds(position: com.carto.core.MapBounds) {
        return fromNativeMapBounds(new com.carto.core.MapBounds(this.nativeProjection.toWgs84(position.getMin()), this.nativeProjection.toWgs84(position.getMax())));
    }
    toNativeMapPos(position: MapPos) {
        return this.nativeProjection.fromWgs84(toNativeMapPos(position));
    }
    toNativeMapBounds(position: MapBounds) {
        return new com.carto.core.MapBounds(this.nativeProjection.fromWgs84(toNativeMapPos(position.southwest)), this.nativeProjection.fromWgs84(toNativeMapPos(position.northeast)));
    }

    get metersPerPixel(): number {
        if (this.nativeViewProtected) {
            const pos = this.focusPos;
            const zoom = this.zoom;
            return (156543.03390625 * Math.cos((pos.latitude * Math.PI) / 180)) / Math.pow(2, zoom);
        }
        return 0;
    }
    setFocusPos(value: MapPos, duration: number) {
        this.mapView.setFocusPos(this.nativeProjection.fromWgs84(toNativeMapPos(value)), duration / 1000);
    }

    setZoom(value: number, duration: number) {
        this.mapView.setZoom(value, duration / 1000);
    }
    setTilt(value: number, duration: number) {
        this.mapView.setTilt(value, duration / 1000);
    }
    setBearing(value: number, duration: number) {
        this.mapView.setMapRotation(value, duration / 1000);
    }
    moveToFitBounds(mapBounds: MapBounds, screenBounds: ScreenBounds, integerZoom: boolean, resetRotation: boolean, resetTilt: boolean, durationSeconds: number) {
        console.log('moveToFitBounds', mapBounds, this.toNativeMapBounds(mapBounds), screenBounds, toNativeScreenBounds(screenBounds));
        this.mapView.moveToFitBounds(this.toNativeMapBounds(mapBounds), toNativeScreenBounds(screenBounds), integerZoom, resetRotation, resetTilt, durationSeconds);
    }
    [restrictedPanningProperty.setNative](value: boolean) {
        if (!this.nativeViewProtected) {
            return;
        }
        this.mapView.getOptions().setRestrictedPanning(value);
    }

    // [focusPosProperty.setNative](value: MapPos) {
    //     console.log('focusPosProperty', 'setNative', !!this.nativeViewProtected, !!this.nativeProjection);
    //     if (!this.nativeViewProtected || !this.nativeProjection) {
    //         return;
    //     }
    //     this.setFocusPos(value, 0);
    // }
    // [zoomProperty.setNative](value: number) {
    //     console.log('zoomProperty', 'setNative', !!this.nativeViewProtected, !!this.nativeProjection);
    //     if (!this.nativeViewProtected) {
    //         return;
    //     }
    //     this.setZoom(value, 0);
    // }
    // // setZoom(value: number) {
    // //     this.style['zoom'] = value;
    // // }
    // getBearing(): number {
    //     if (this.mapView) {
    //         return this.mapView.getMapRotation();
    //     }
    //     return this.style['bearing'];
    // }

    // setBearing(value: number) {
    //     this.style['bearing'] = value;
    // }
    // getTilt(): number {
    //     if (this.mapView) {
    //         return this.mapView.getTilt();
    //     }
    //     return this.style['tilt'];
    // }

    // setTilt(value: number) {
    //     this.style['tilt'] = value;
    // }

    // metersToEquatorPixels(map, location, zoom, meters) {
    //     // CameraMapPos MapPos = map.getCameraMapPos();
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

    addLayer(layer: TileLayer<any, any>, index?: number) {
        if (this.mapView) {
            const native: com.carto.layers.TileLayer = layer.getNative();
            if (!!native) {
                if (index !== undefined) {
                    this.mapView.getLayers().insert(index, native);
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
