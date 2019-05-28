import { CartoViewBase, isLicenseKeyRegistered, MapClickedEvent, MapIdleEvent, MapMovedEvent, MapReadyEvent, MapStableEvent, setLicenseKeyRegistered } from './ui.common';
import * as application from 'application';
import { profile } from 'tns-core-modules/profiling';
import { fromNativeMapBounds, fromNativeMapPos, fromNativeScreenPos, MapBounds, MapPos, ScreenBounds, ScreenPos, toNativeMapPos, toNativeScreenBounds, toNativeScreenPos } from '../core/core';
import { TileLayer } from '../layers/layer';
import { IProjection } from '../projections/projection';
import { restrictedPanningProperty } from './cssproperties';

import { MapOptions } from './ui';
import { EPSG4326 } from '../projections/epsg4326';
export { MapClickedEvent, MapIdleEvent, MapMovedEvent, MapReadyEvent, MapStableEvent, setLicenseKeyRegistered };

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
        console.log('registerLicense', value, result);
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
                owner.sendEvent(MapMovedEvent, {userAction});
            }
        }
        public onMapStable(userAction: boolean) {
            // console.log('onMapStable');
            const owner = this.owner;
            if (owner) {
                if (owner.hasListeners(MapStableEvent)) {
                    owner.sendEvent(MapStableEvent, {userAction});
                }
            }
        }
        public onMapClicked(mapClickInfo: com.carto.ui.MapClickInfo) {
            // console.log('onMapClicked', mapClickInfo);
            const owner = this.owner;
            if (owner && owner.hasListeners(MapClickedEvent)) {
                owner.sendEvent(MapClickedEvent, {
                    clickType: mapClickInfo.getClickType(),
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
            } else {
                console.error('no license to register !!!');
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
        // this.log('creating projection', this.projection, CartoMap.projection);
        if (!this.projection) {
            this.projection = CartoMap.projection;
        }
        const options = this.nativeViewProtected.getOptions();
        // this.log('initNativeView mapView', options.getBaseProjection());

        // options.setRotatable(true); // allows the map to rotate (this is the default behavior)
        // options.setZoomGestures(true); // allows the map to rotate (this is the default behavior)
        // options.setTileThreadPoolSize(2); // use two threads to download tiles

        // (this.nativeViewProtected as any).listener.owner = this;
    }

    disposeNativeView(): void {
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
        // this.log('moveToFitBounds', mapBounds, this.toNativeMapBounds(mapBounds), screenBounds, toNativeScreenBounds(screenBounds));
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
}
