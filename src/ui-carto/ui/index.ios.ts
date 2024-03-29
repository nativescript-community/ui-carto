import {
    DefaultLatLonKeys,
    MapBounds,
    MapPos,
    ScreenBounds,
    ScreenPos,
    fromNativeMapBounds,
    fromNativeMapPos,
    fromNativeScreenPos,
    toNativeMapPos,
    toNativeScreenBounds,
    toNativeScreenPos
} from '../core';
import { TileLayer } from '../layers';
import { EPSG4326 } from '../projections/epsg4326';
import { IProjection } from '../projections';
import { restrictedPanningProperty } from './cssproperties';
import { MapOptions } from '.';
import { CartoViewBase, Layers, MapClickedEvent, MapIdleEvent, MapInteractionEvent, MapMovedEvent, MapReadyEvent, MapStableEvent, isLicenseKeyRegistered, setLicenseKeyRegistered } from './index.common';
import { ImageSource } from '@nativescript/core';
import { executeOnMainThread } from '@nativescript/core/utils';

export { MapClickedEvent, MapIdleEvent, MapMovedEvent, MapReadyEvent, MapStableEvent, setLicenseKeyRegistered };

export enum RenderProjectionMode {
    RENDER_PROJECTION_MODE_PLANAR = NTRenderProjectionMode.T_RENDER_PROJECTION_MODE_PLANAR,
    RENDER_PROJECTION_MODE_SPHERICAL = NTRenderProjectionMode.T_RENDER_PROJECTION_MODE_SPHERICAL
}
export enum PanningMode {
    PANNING_MODE_FREE = NTPanningMode.T_PANNING_MODE_FREE,
    PANNING_MODE_STICKY = NTPanningMode.T_PANNING_MODE_STICKY,
    PANNING_MODE_STICKY_FINAL = NTPanningMode.T_PANNING_MODE_STICKY_FINAL
}

let licenseKey: string;
export function registerLicense(value: string, callback?: (result: boolean) => void) {
    const result = AKMapView.registerLicense(value);
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
class AKMapEventListenerImpl extends NSObject implements  AKMapEventListener {
    public static ObjCProtocols = [AKMapEventListener];
    private _owner: WeakRef<CartoMap<any>>;

    public static initWithOwner(owner: WeakRef<CartoMap<any>>): AKMapEventListenerImpl {
        const delegate = AKMapEventListenerImpl.new() as AKMapEventListenerImpl;
        delegate._owner = owner;
        return delegate;
    }

    public onMapIdle() {
        const owner = this._owner.get();
        if (owner && owner.hasListeners(MapIdleEvent)) {
            owner.notify({ eventName: MapIdleEvent, object: owner });
        }
    }

    public onMapMoved(userAction: boolean) {
        const owner = this._owner?.get();
        if (owner?.hasListeners(MapMovedEvent)) {
            owner.notify({
                eventName: MapMovedEvent,
                object: owner,
                data: { userAction }
            });
        }
    }
    public onMapInteraction(interaction: NTMapInteractionInfo, userAction: boolean) {
        const owner = this._owner?.get();
        if (owner?.hasListeners(MapInteractionEvent)) {
            owner.notify({
                eventName: MapInteractionEvent,
                object: owner,
                data: {
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
                }
            });
        }
    }
    public onMapStable(userAction: boolean) {
        const owner = this._owner?.get();

        if (owner) {
            if (owner.hasListeners(MapStableEvent)) {
                owner.notify({ eventName: MapStableEvent, object: owner, data: { userAction } });
            }
        }
    }
    public onMapClicked(mapClickInfo: NTMapClickInfo) {
        const owner = this._owner.get();
        if (owner && owner.hasListeners(MapClickedEvent)) {
            owner.notify({
                eventName: MapClickedEvent,
                object: owner,
                data: {
                    get clickInfo() {
                        return {
                            get duration() {
                                return (mapClickInfo as any).getClickInfo().getDuration();
                            }
                        };
                    },
                    get clickType() {
                        return mapClickInfo.getClickType();
                    },
                    get position() {
                        return fromNativeMapPos(mapClickInfo.getClickPos());
                    },
                    ios: mapClickInfo
                }
            });
        }
    }
}

@NativeClass
class NTRendererCaptureListenerImpl extends AKRendererCaptureListener {
    private _callback: WeakRef<Function>;
    public static initWithCallback(callback: WeakRef<Function>): NTRendererCaptureListenerImpl {
        const delegate = NTRendererCaptureListenerImpl.new() as NTRendererCaptureListenerImpl;
        delegate._callback = callback;
        return delegate;
    }

    onMapRenderedThreaded(param0: NTBitmap) {
        const callback = this._callback.get();
        if (callback) {
            callback(NTBitmapUtils.createUIImageFromBitmap(param0));
        }
    }
}
export class CartoMap<T = DefaultLatLonKeys> extends CartoViewBase {
    static projection = new EPSG4326();
    nativeProjection: NTProjection;
    mProjection: IProjection;
    constructor() {
        super();
        if (!isLicenseKeyRegistered()) {
            const license = this.style['licenseKey'] || getLicenseKey();
            if (license) {
                registerLicense(license);
            }
        }
    }

    public static setRunOnMainThread(value: boolean) {
        runOnMainThread = value;
    }
    get mapView() {
        return this.nativeViewProtected as AKMapView;
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

    public createNativeView(): Object {
        return AKMapView.alloc().init();
    }

    getOptions() {
        if (this.mapReady) {
            return this.mapView.getOptions() as MapOptions;
        }
        return null;
    }
    initNativeView(): void {
        super.initNativeView();
        if (!this.projection) {
            this.projection = new EPSG4326();
        }
        this.mapView.setAKMapEventListener(AKMapEventListenerImpl.initWithOwner(new WeakRef(this)));
    }

    disposeNativeView(): void {
        this.mapView.setMapEventListener(null);
        this.mapView.getLayers().clear();
        this.nativeProjection = null;
        this.mProjection = null;
        super.disposeNativeView();
    }

    fromNativeMapPos(position: NTMapPos) {
        return fromNativeMapPos(position);
    }
    fromNativeMapBounds(position: NTMapBounds) {
        return fromNativeMapBounds(NTMapBounds.alloc().initWithMinMax(position.getMin(), position.getMax()));
    }
    toNativeMapPos(position: MapPos) {
        return toNativeMapPos(position);
    }
    toNativeMapBounds(position: MapBounds<T>) {
        return NTMapBounds.alloc().initWithMinMax(toNativeMapPos(position.southwest), toNativeMapPos(position.northeast));
    }

    setFocusPos(value: MapPos, duration: number = 0) {
        this.mapView.setFocusPosDurationSeconds(toNativeMapPos(value), duration / 1000);
    }

    getFocusPos() {
        return fromNativeMapPos<T>(this.mapView.getFocusPos());
    }
    getMapBounds() {
        const screenBounds = toNativeScreenBounds({ min: { x: 0, y: 0 }, max: { x: this.getMeasuredWidth(), y: this.getMeasuredHeight() } }) as NTScreenBounds;
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
    removeAllLayers(layers: TileLayer<any, any>[]) {
        if (this.mapView) {
            const vector = NTLayerVector.alloc().init();
            layers.forEach((l) => vector.add(l.getNative()));
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
        return new Promise((resolve) => {
            this.mapView.getMapRenderer().captureRenderingWaitWhileUpdating(
                NTRendererCaptureListenerImpl.initWithCallback(
                    new WeakRef(function (bitmap) {
                        resolve(new ImageSource(bitmap));
                    })
                ),
                wait
            );
        });
    }
}
