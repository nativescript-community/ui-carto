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
    toNativeMapPos,
    toNativeScreenBounds,
    toNativeScreenPos
} from '../core';
import { FogOptions, LightOptions, MapOptions, SkyOptions, TerrainOptions } from '../components';
import { Layer, TileLayer } from '../layers';
import { EPSG4326 } from '../projections/epsg4326';
import { IProjection } from '../projections';
import { restrictedPanningProperty } from './cssproperties';
import { FlyToOptions, MapClickInfo, MapGestureInfo, MapInteractionInfo } from '.';
import { PostProcessEffect } from '../renderers';
import { Layers as BaseLayers, MapClickedEvent, MapIdleEvent, MapInteractionEvent, MapMovedEvent, MapReadyEvent, MapStableEvent, MassifMapViewBase, moveEventData } from './index.common';
import { ImageSource } from '@nativescript/core';
import { executeOnMainThread } from '@nativescript/core/utils';

export { MapClickedEvent, MapIdleEvent, MapMovedEvent, MapReadyEvent, MapStableEvent };

export enum RenderProjectionMode {
    RENDER_PROJECTION_MODE_PLANAR = MSFRenderProjectionMode.F_RENDER_PROJECTION_MODE_PLANAR,
    RENDER_PROJECTION_MODE_SPHERICAL = MSFRenderProjectionMode.F_RENDER_PROJECTION_MODE_SPHERICAL
}
export enum PanningMode {
    PANNING_MODE_FREE = MSFPanningMode.F_PANNING_MODE_FREE,
    PANNING_MODE_STICKY = MSFPanningMode.F_PANNING_MODE_STICKY,
    PANNING_MODE_STICKY_FINAL = MSFPanningMode.F_PANNING_MODE_STICKY_FINAL
}

let runOnMainThread = true;

function mainThread(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    //wrapping the original method
    descriptor.value = function (...args: any[]) {
        if (runOnMainThread) {
            executeOnMainThread(() => {
                originalMethod.apply(this, args);
            });
        } else {
            originalMethod.apply(this, args);
        }
    };
}

@NativeClass

@NativeClass
class MSFRendererCaptureListenerImpl extends NSMSFRendererCaptureListener {
    private _callback: WeakRef<Function>;
    public static initWithCallback(callback: WeakRef<Function>): MSFRendererCaptureListenerImpl {
        const delegate = MSFRendererCaptureListenerImpl.new() as MSFRendererCaptureListenerImpl;
        delegate._callback = callback;
        return delegate;
    }

    onMapRenderedThreaded(param0: MSFBitmap) {
        const callback = this._callback.get();
        if (callback) {
            callback(MSFBitmapUtils.createUIImageFromBitmap(param0));
        }
    }
}
export class MassifMap<T = DefaultLatLonKeys> extends MassifMapViewBase {
    static projection = new EPSG4326();

    nativeProjection: MSFProjection;
    mProjection: IProjection;

    public static setRunOnMainThread(value: boolean) {
        runOnMainThread = value;
    }

    override get mapView(): NSMSFMapView {
        return super.mapView;
    }

    get projection() {
        return this.mProjection;
    }

    set projection(proj: IProjection) {
        this.mProjection = proj;
        this.nativeProjection = this.mProjection.getNative();
        if (this.nativeViewProtected) {
            this.mapView.getOptions().setBaseProjection(this.nativeProjection);
        }
    }

    public createNativeView(): object {
        return NSMSFMapView.alloc().init();
    }

    mOptions: MapOptions;
    /**
     * The map's Options, wrapped once and cached - the native instance never changes,
     * and re-wrapping would drop the wrapper's own state (the cached TerrainOptions and
     * friends). Null until the map is ready.
     */
    getOptions() {
        if (!this.mapReady) {
            return null;
        }
        const native = this.mapView.getOptions();
        if (this.mOptions?.getNative() !== native) {
            this.mOptions = new MapOptions(undefined, native);
        }
        return this.mOptions;
    }

    getTerrainOptions() {
        return this.getOptions()?.getTerrainOptions() ?? null;
    }
    /** install terrain built with `new TerrainOptions({ dataSource })` */
    setTerrainOptions(terrain: TerrainOptions) {
        this.getOptions()?.setTerrainOptions(terrain);
    }
    getSkyOptions() {
        return this.getOptions()?.getSkyOptions() ?? null;
    }
    setSkyOptions(skyOptions: SkyOptions) {
        this.getOptions()?.setSkyOptions(skyOptions);
    }
    getLightOptions() {
        return this.getOptions()?.getLightOptions() ?? null;
    }
    setLightOptions(lightOptions: LightOptions) {
        this.getOptions()?.setLightOptions(lightOptions);
    }
    getFogOptions() {
        return this.getOptions()?.getFogOptions() ?? null;
    }
    setFogOptions(fogOptions: FogOptions) {
        this.getOptions()?.setFogOptions(fogOptions);
    }
    mPostProcessEffect: PostProcessEffect;
    getPostProcessEffect() {
        const native = this.mapView?.getMapRenderer().getPostProcessEffect();
        if (!native) {
            return null;
        }
        if (this.mPostProcessEffect?.getNative() !== native) {
            this.mPostProcessEffect = new PostProcessEffect(undefined, native);
        }
        return this.mPostProcessEffect;
    }
    setPostProcessEffect(effect: PostProcessEffect) {
        this.mPostProcessEffect = effect;
        this.mapView?.getMapRenderer().setPostProcessEffect(effect?.getNative() ?? null);
    }

    flyTo(position: MapPos, options: FlyToOptions = {}) {
        const { bearing = this.mapView.getRotation(), climbHeight = 0, duration = 0, tilt = this.mapView.getTilt(), zoom = this.mapView.getZoom() } = options;
        this.mapView.flyToZoomRotationTiltClimbHeightDurationSeconds(toNativeMapPos(position), zoom, bearing, tilt, climbHeight, duration / 1000);
    }
    getFlightProgress() {
        return this.mapView.getFlightProgress();
    }
    isFlightActive() {
        return this.mapView.isFlightActive();
    }
    stopFlight() {
        this.mapView.stopFlight();
    }
    initNativeView(): void {
        super.initNativeView();
        if (!this.projection) {
            this.projection = new EPSG4326();
        }
    }

    disposeNativeView(): void {
        this.nativeProjection = null;
        this.mProjection = null;
        super.disposeNativeView();
    }

    fromNativeMapPos(position: MSFMapPos) {
        return fromNativeMapPos(position);
    }
    fromNativeMapBounds(position: MSFMapBounds) {
        return fromNativeMapBounds(MSFMapBounds.alloc().initWithMinMax(position.getMin(), position.getMax()));
    }
    toNativeMapPos(position: MapPos) {
        return toNativeMapPos(position);
    }
    toNativeMapBounds(position: MapBounds<T>) {
        return MSFMapBounds.alloc().initWithMinMax(toNativeMapPos(position.southwest), toNativeMapPos(position.northeast));
    }

    setFocusPos(value: MapPos, duration: number = 0) {
        this.mapView.setFocusPosDurationSeconds(toNativeMapPos(value), duration / 1000);
    }

    getFocusPos() {
        return fromNativeMapPos<T>(this.mapView.getFocusPos());
    }
    getMapBounds() {
        const screenBounds = toNativeScreenBounds({ min: { x: 0, y: 0 }, max: { x: this.getMeasuredWidth(), y: this.getMeasuredHeight() } }) as MSFScreenBounds;
        return new MapBounds<T>(fromNativeMapPos(this.mapView.screenToMap(screenBounds.getMin())), fromNativeMapPos(this.mapView.screenToMap(screenBounds.getMax())));
    }
    getZoom() {
        return this.mapView.getZoom();
    }
    setZoom(value: number, targetPos: MapPos | number, duration: number = 0) {
        if (typeof targetPos === 'number') {
            this.mapView.setZoomDurationSeconds(value, targetPos / 1000);
        } else {
            this.mapView.setZoomTargetPosDurationSeconds(value, toNativeMapPos(targetPos), duration / 1000);
        }
    }
    setMapRotation(value: number, targetPos: MapPos | number, duration: number = 0) {
        if (typeof targetPos === 'number') {
            this.mapView.setRotationDurationSeconds(value, targetPos / 1000);
        } else {
            this.mapView.setRotationTargetPosDurationSeconds(value, toNativeMapPos(targetPos), duration / 1000);
        }
    }
    setTilt(value: number, duration: number = 0) {
        this.mapView.setTiltDurationSeconds(value, duration / 1000);
    }
    setBearing(value: number, duration: number = 0) {
        this.mapView.setRotationDurationSeconds(value, duration / 1000);
    }
    moveToFitBounds(mapBounds: MapBounds<T>, screenBounds: ScreenBounds, integerZoom: boolean, resetRotation: boolean, resetTilt: boolean, durationSeconds: number) {
        if (!screenBounds) {
            screenBounds = { min: { x: 0, y: 0 }, max: { x: this.getMeasuredWidth(), y: this.getMeasuredHeight() } };
        }
        this.mapView.moveToFitBoundsScreenBoundsIntegerZoomResetRotationResetTiltDurationSeconds(
            this.toNativeMapBounds(mapBounds),
            toNativeScreenBounds(screenBounds),
            integerZoom,
            resetRotation,
            resetTilt,
            durationSeconds / 1000
        );
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
    cancelAllTasks() {
        this.mapView && this.mapView.cancelAllTasks();
    }
    requestRedraw() {
        this.mapView && this.mapView.getMapRenderer().requestRedraw('ui-massifmaps');
    }
    screenToMap(pos: ScreenPos | MSFScreenPos) {
        if (this.mapView) {
            if (pos instanceof MSFScreenPos) {
                return this.fromNativeMapPos(this.mapView.screenToMap(pos));
            }
            return this.fromNativeMapPos(this.mapView.screenToMap(toNativeScreenPos(pos)));
        }
        return null;
    }
    mapToScreen(pos: MapPos | MSFMapPos) {
        if (this.mapView) {
            if (pos instanceof MSFMapPos) {
                return fromNativeScreenPos(this.mapView.mapToScreen(pos));
            }
            return fromNativeScreenPos(this.mapView.mapToScreen(toNativeMapPos(pos)));
        }
        return null;
    }

    captureRendering(wait = false) {
        return new Promise((resolve) => {
            this.mapView.getMapRenderer().captureRenderingWaitWhileUpdating(
                MSFRendererCaptureListenerImpl.initWithCallback(
                    new WeakRef(function (bitmap) {
                        resolve(new ImageSource(bitmap));
                    })
                ),
                wait
            );
        });
    }
}

export class Layers extends BaseLayers<MSFLayers> {
    count() {
        return this.native.count();
    }
    insert(index: number, layer: Layer<any, any>) {
        super.insert(index, layer);
        this.native.insertLayer(index, layer.getNative());
    }
    //@ts-ignore
    set(index: number, layer: Layer<any, any>) {
        super.set(index, layer);
        this.native.setLayer(index, layer.getNative());
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
