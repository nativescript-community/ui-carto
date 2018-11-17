import { CartoViewBase, isLicenseKeyRegistered, MapClickedEvent, MapIdleEvent, MapMovedEvent, MapReadyEvent, MapStableEvent, setLicenseKeyRegistered } from './ui.common';
import { EPSG3857 } from '../projections/epsg3857';
import { IProjection, Projection } from '../projections/projection';
import { fromNativeMapPos, MapPos, toNativeMapPos } from '../core/core';
import { TileLayer } from '../layers/layer';
import * as application from 'application';
import { restrictedPanningProperty } from './cssproperties';
import { MapOptions } from './ui';

export { MapClickedEvent, MapIdleEvent, MapMovedEvent, MapReadyEvent, MapStableEvent, setLicenseKeyRegistered };

let licenseKey: string;
export function registerLicense(value: string) {
    const context = application.android.context;
    if (!context) {
        throw new Error('application context not initialized!');
    }
    console.log('registerLicense', value);
    const result = com.carto.ui.MapView.registerLicense(value, context);
    if (result) {
        licenseKey = value;
    }
    setLicenseKeyRegistered(result);
}
export function getLicenseKey() {
    return licenseKey;
}

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
        initMapView();
        if (!isLicenseKeyRegistered()) {
            console.log('need MapView register', this.style['licenseKey'], getLicenseKey());
            const license = this.style['licenseKey'] || getLicenseKey();
            if (license) {
                registerLicense(license);
            } else {
                console.error('no license to register !!!');
            }
        }
        console.log('creating mapView');
        // Create new instance
        const mapView = new MapView(this._context, new WeakRef(this));
        // mapView.setPreserveEGLContextOnPause(true);
        mapView.onResume();
        // mapView.setEGLContextClientVersion(2);
        // mapView.setEGLConfigChooser(new com.carto.ui.ConfigChooser());
        // mapView.setRenderer(mapView);
        // mapView.setRenderMode(android.opengl.GLSurfaceView.RENDERMODE_WHEN_DIRTY);
        // console.log('setPreserveEGLContextOnPause');

        // const listener = new MapEventListener(new WeakRef(this));
        // listener.owner = this;
        // mapView.setMapEventListener(listener);
        // (mapView as any).listener = listener;
        this.projection = new Projection(undefined, mapView.getOptions().getBaseProjection());
        // this.projection = CartoMap.projection;
        // mapView.getOptions().setBaseProjection(this.nativeProjection); // Since EPSG3857 is the default base projection, this is not needed

        // 2. General options

        const options = mapView.getOptions();
        options.setRotatable(true); // allows the map to rotate (this is the default behavior)
        options.setZoomGestures(true); // allows the map to rotate (this is the default behavior)
        options.setTileThreadPoolSize(4); // use two threads to download tiles

        // 3.Set initial location and other parameters, _do not animate_
        // mapView.setMapRotation(this.style['bearing'], 0);

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
        (this.nativeViewProtected as any).onPause();
        // If you want to recycle nativeView and have modified the nativeView
        // without using Property or CssProperty (e.g. outside our property system - 'setNative' callbacks)
        // you have to reset it to its initial state here.
        super.disposeNativeView();
    }

    fromNativeMapPos(position: com.carto.core.MapPos) {
        return fromNativeMapPos(this.nativeProjection.toWgs84(this.mapView.getFocusPos()));
    }

    // get focusPos(): MapPos {
    //     if (this.nativeViewProtected) {
    //         return this.fromNativeMapPos(this.mapView.getFocusPos());
    //     }
    //     return this.style.focusPos;
    // }
    // set focusPos(value: MapPos) {
    //     this.style.focusPos = value;
    // }
    // get bearing(): number {
    //     if (this.nativeViewProtected) {
    //         return this.mapView.getMapRotation();
    //     }
    //     return this.style.bearing;
    // }

    // set bearing(value: number) {
    //     this.style.bearing = value;
    // }
    // get tilt(): number {
    //     if (this.nativeViewProtected) {
    //         return this.mapView.getTilt();
    //     }
    //     return this.style.tilt;
    // }
    // set tilt(value: number) {
    //     this.style.tilt = value;
    // }
    // set minZoom(value: number) {
    //     this.style.minZoom = value;
    // }
    // set maxZoom(value: number) {
    //     this.style.maxZoom = value;
    // }

    // get zoom(): number {
    //     if (this.nativeViewProtected) {
    //         return this.mapView.getZoom();
    //     }
    //     return this.style.zoom;
    // }
    // set zoom(value: number) {
    //     this.style.zoom = value;
    // }
    get metersPerPixel(): number {
        if (this.nativeViewProtected) {
            const pos = this.focusPos;
            const zoom = this.zoom;
            return (156543.03390625 * Math.cos((pos.latitude * Math.PI) / 180)) / Math.pow(2, zoom);
        }
        return 0;
    }

    getMapfocusPos(): MapPos {
        return fromNativeMapPos(this.mapView.getFocusPos());
    }
    getMapzoom() {
        return this.mapView.getZoom();
    }
    getMapbearing() {
        return this.mapView.getMapRotation();
    }
    getMaptilt() {
        return this.mapView.getTilt();
    }
    getMapmaxZoom() {
        return 22;
    }
    getMapminZoom() {
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

    [restrictedPanningProperty.setNative](value: boolean) {
        if (!this.nativeViewProtected) {
            return;
        }
        this.mapView.getOptions().setRestrictedPanning(value);
    }

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
