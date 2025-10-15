import {
    ClickType,
    DefaultLatLonKeys,
    MapBounds,
    MapPos,
    ScreenBounds,
    ScreenPos,
    fromNativeMapBounds,
    fromNativeMapPos,
    fromNativeScreenPos,
    nativeVectorToArray,
    toNativeMapBounds,
    toNativeMapPos,
    toNativeScreenBounds,
    toNativeScreenPos
} from '../core';
import { Layer, TileLayer } from '../layers';
import { IProjection } from '../projections';
import { restrictedPanningProperty } from './cssproperties';
import { Layers as BaseLayers, CartoViewBase, MapClickedEvent, MapIdleEvent, MapInteractionEvent, MapMovedEvent, MapReadyEvent, MapStableEvent } from './index.common';

import { ImageSource, Property, Utils, booleanConverter } from '@nativescript/core';
import { MapClickInfo, MapGestureInfo, MapInteractionInfo, MapOptions } from '.';
import { EPSG4326 } from '../projections/epsg4326';
export { MapClickedEvent, MapIdleEvent, MapMovedEvent, MapReadyEvent, MapStableEvent };

export const RenderProjectionMode = {
    get RENDER_PROJECTION_MODE_PLANAR() {
        return com.carto.components.RenderProjectionMode.RENDER_PROJECTION_MODE_PLANAR;
    },
    get RENDER_PROJECTION_MODE_SPHERICAL() {
        return com.carto.components.RenderProjectionMode.RENDER_PROJECTION_MODE_SPHERICAL;
    }
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
    }
};

export class CartoMap<T = DefaultLatLonKeys> extends CartoViewBase {
    public useTextureView: boolean;
    public static setRunOnMainThread(value: boolean) {
        com.akylas.carto.additions.AKMapView.setRunOnMainThread(value);
    }

    nativeViewProtected: com.akylas.carto.additions.AKMapView & {
        listener: com.akylas.carto.additions.AKMapEventListener;
    };
    mProjection: IProjection;

    override get mapView(): com.akylas.carto.additions.AKMapView {
        return super.mapView;
    }

    get projection() {
        return this.mProjection;
    }
    set projection(proj: IProjection) {
        this.mProjection = proj;
        if (this.nativeViewProtected) {
            this.mapView.getOptions().setBaseProjection(proj ? proj.getNative() : null);
        }
    }
    public createNativeView(): Object {
        let view;
        if (this.useTextureView) {
            view = new com.akylas.carto.additions.AKTextureMapView(this._context);
        } else {
            view = new com.akylas.carto.additions.AKMapView(this._context);
        }
        return view;
    }

    onLoaded() {
        super.onLoaded();
        if (this.nativeViewProtected) {
            this.nativeViewProtected.onResume();
        }
    }
    onUnloaded() {
        super.onUnloaded();
        if (this.nativeViewProtected) {
            this.nativeViewProtected.onPause();
        }
    }

    getOptions() {
        if (this.mapReady) {
            return this.mapView.getOptions() as any as MapOptions;
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
                this.sendEvent(MapIdleEvent);
            },
            onMapMoved: (userAction: boolean) => {
                this.sendEvent<MapGestureInfo>(MapMovedEvent, { userAction });
            },
            onMapInteraction: (interaction: com.carto.ui.MapInteractionInfo, userAction: boolean) => {
                this.sendEvent<MapInteractionInfo>(MapInteractionEvent, {
                    userAction,
                    interaction: {
                        get isAnimationStarted() {
                            return interaction.isAnimationStarted();
                        },
                        get isPanAction() {
                            return interaction.isPanAction();
                        },
                        get isRotateAction() {
                            return interaction.isRotateAction();
                        },
                        get isTiltAction() {
                            return interaction.isTiltAction();
                        },
                        get isZoomAction() {
                            return interaction.isZoomAction();
                        }
                    }
                });
            },
            onMapStable: (userAction: boolean) => {
                this.sendEvent<MapGestureInfo>(MapStableEvent, { userAction });
            },
            onMapClicked: (mapClickInfo: com.carto.ui.MapClickInfo) => {
                this.sendEvent<MapClickInfo>(MapClickedEvent, {
                    android: mapClickInfo,
                    get clickInfo() {
                        return {
                            get duration(): number {
                                return mapClickInfo.getClickInfo().getDuration();
                            }
                        };
                    },
                    get clickType(): ClickType {
                        // This will return an integer value that can be compared with the actual enum
                        return mapClickInfo.getClickType().swigValue();
                    },
                    get position() {
                        return fromNativeMapPos(mapClickInfo.getClickPos());
                    }
                });
            }
        });
        this.nativeViewProtected.listener = listener;
        this.nativeViewProtected.setMapEventListener(listener);
    }

    disposeNativeView(): void {
        this.mProjection = null;
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
    toNativeMapBounds(position: MapBounds<T>) {
        return toNativeMapBounds(position);
    }

    setFocusPos(value: MapPos, duration: number = 0) {
        this.mapView.setFocusPos(toNativeMapPos(value), duration / 1000);
    }

    getFocusPos() {
        return fromNativeMapPos<T>(this.mapView.getFocusPos());
    }
    getMapBounds() {
        const screenBounds = toNativeScreenBounds({ min: { x: this.getMeasuredWidth(), y: 0 }, max: { x: 0, y: this.getMeasuredHeight() } }) as com.carto.core.ScreenBounds;
        return new MapBounds<T>(fromNativeMapPos(this.mapView.screenToMap(screenBounds.getMin())), fromNativeMapPos(this.mapView.screenToMap(screenBounds.getMax())));
    }

    setMapRotation(value: number, targetPos: MapPos | number, duration: number = 0) {
        if (typeof targetPos === 'number') {
            this.mapView.setMapRotation(value, targetPos / 1000);
        } else {
            this.mapView.setMapRotation(value, toNativeMapPos(targetPos), duration / 1000);
        }
    }
    getZoom() {
        return this.mapView.getZoom();
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
    moveToFitBounds(mapBounds: MapBounds<T>, screenBounds: ScreenBounds, integerZoom: boolean, resetRotation: boolean, resetTilt: boolean, durationSeconds: number) {
        if (!screenBounds) {
            screenBounds = { min: { x: 0, y: 0 }, max: { x: this.getMeasuredWidth(), y: this.getMeasuredHeight() } };
        }
        this.mapView.moveToFitBounds(this.toNativeMapBounds(mapBounds), toNativeScreenBounds(screenBounds), integerZoom, resetRotation, resetTilt, durationSeconds / 1000);
    }
    [restrictedPanningProperty.setNative](value: boolean) {
        if (!this.nativeViewProtected) {
            return;
        }
        this.mapView.getOptions().setRestrictedPanning(value);
    }

    createLayersInstance(): Layers {
        return new Layers(this.mapView.getLayers());
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
            this.mapView.getMapRenderer().captureRendering(
                new com.akylas.carto.additions.RendererCaptureListener(
                    new com.akylas.carto.additions.RendererCaptureListener.Listener({
                        onMapRendered(bitmap: com.carto.graphics.Bitmap) {
                            resolve(new ImageSource(com.carto.utils.BitmapUtils.createAndroidBitmapFromBitmap(bitmap)));
                        }
                    })
                ),
                wait
            );
        });
    }
}

export const useTextureViewProperty = new Property<CartoMap, boolean>({
    defaultValue: false,
    name: 'useTextureView',
    valueConverter: booleanConverter
});
useTextureViewProperty.register(CartoMap);

export class Layers extends BaseLayers<com.carto.components.Layers> {
    count() {
        return this.native.count();
    }
    insert(index: number, layer: Layer<any, any>) {
        super.insert(index, layer);
        this.native.insert(index, layer.getNative());
    }
    //@ts-ignore
    set(index: number, layer: Layer<any, any>) {
        super.set(index, layer);
        this.native.set(index, layer.getNative());
    }
    remove(layer: Layer<any, any>) {
        const removed = this.native.remove(layer.getNative());
        if (removed) {
            super.remove(layer);
        }
        return removed;
    }
    add(layer: Layer<any, any>) {
        super.add(layer);
        this.native.add(layer.getNative());
    }
    //@ts-ignore
    get(index: number) {
        return this.native.get(index);
    }
    getAll() {
        return nativeVectorToArray(this.native.getAll());
    }
    clear() {
        super.clear();
        this.native.clear();
    }

    // public getNative() {
    //     return this.native;
    // }
}
