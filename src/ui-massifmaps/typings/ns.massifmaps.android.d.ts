/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable no-redeclare */

// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run typings.android` / `npm run typings.ios`.

declare namespace com {
    export namespace nativescript {
        export namespace massifmaps {
            export namespace additions {
                export class CelestialEventListener extends com.massifmaps.layers.CelestialEventListener {
                    public static class: java.lang.Class<com.nativescript.massifmaps.additions.CelestialEventListener>;
                    public listener: com.nativescript.massifmaps.additions.CelestialEventListener.Listener;
                    public onCelestialObjectClicked(this_: com.massifmaps.ui.ClickInfo, arg0: com.massifmaps.celestial.CelestialObject): boolean;
                    public setListener(listener: com.nativescript.massifmaps.additions.CelestialEventListener.Listener): void;
                    public constructor();
                    public constructor(listener: com.nativescript.massifmaps.additions.CelestialEventListener.Listener);
                }
                export namespace CelestialEventListener {
                    export class Listener extends java.lang.Object {
                        public static class: java.lang.Class<com.nativescript.massifmaps.additions.CelestialEventListener.Listener>;
                        /**
                         * Constructs a new instance of the com.nativescript.massifmaps.additions.CelestialEventListener$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { onCelestialObjectClicked(param0: com.massifmaps.ui.ClickInfo, param1: com.massifmaps.celestial.CelestialObject): boolean; });
                        public constructor();
                        public onCelestialObjectClicked(param0: com.massifmaps.ui.ClickInfo, param1: com.massifmaps.celestial.CelestialObject): boolean;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace massifmaps {
            export namespace additions {
                export class ClusterElementBuilder extends com.massifmaps.layers.ClusterElementBuilder {
                    public static class: java.lang.Class<com.nativescript.massifmaps.additions.ClusterElementBuilder>;
                    public nativeBuildClusterElement(size: com.massifmaps.core.MapPos, canvasBitmap: com.massifmaps.vectorelements.VectorElementVector): com.massifmaps.vectorelements.VectorElement;
                    public constructor(screenScale: number);
                    public setInterface(inter: com.nativescript.massifmaps.additions.ClusterElementBuilder.Interface): void;
                    public setBbox(value: boolean): void;
                    public setUseNativeBuilder(value: boolean): void;
                    public setBitmap(value: globalAndroid.graphics.Bitmap): void;
                    public setColor(value: com.massifmaps.graphics.Color): void;
                    public setShape(value: string): void;
                    public buildClusterElement(this_: com.massifmaps.core.MapPos, pos: com.massifmaps.vectorelements.VectorElementVector): com.massifmaps.vectorelements.VectorElement;
                    public constructor();
                    public setTextColor(value: com.massifmaps.graphics.Color): void;
                    public buildClusterElement(mapPos: com.massifmaps.core.MapPos, elementCount: number): com.massifmaps.vectorelements.VectorElement;
                    public setTextSize(value: number): void;
                    public setSize(value: number): void;
                    public setFont(value: globalAndroid.graphics.Typeface): void;
                }
                export namespace ClusterElementBuilder {
                    export class Interface extends java.lang.Object {
                        public static class: java.lang.Class<com.nativescript.massifmaps.additions.ClusterElementBuilder.Interface>;
                        /**
                         * Constructs a new instance of the com.nativescript.massifmaps.additions.ClusterElementBuilder$Interface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { buildClusterElement(param0: com.massifmaps.core.MapPos, param1: com.massifmaps.vectorelements.VectorElementVector): com.massifmaps.vectorelements.VectorElement; });
                        public constructor();
                        public buildClusterElement(param0: com.massifmaps.core.MapPos, param1: com.massifmaps.vectorelements.VectorElementVector): com.massifmaps.vectorelements.VectorElement;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace massifmaps {
            export namespace additions {
                export class FeatureCollectionSearchServiceCallback extends java.lang.Object {
                    public static class: java.lang.Class<com.nativescript.massifmaps.additions.FeatureCollectionSearchServiceCallback>;
                    /**
                     * Constructs a new instance of the com.nativescript.massifmaps.additions.FeatureCollectionSearchServiceCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { onFindFeatures(param0: com.massifmaps.geometry.FeatureCollection): void; });
                    public constructor();
                    public onFindFeatures(param0: com.massifmaps.geometry.FeatureCollection): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace massifmaps {
            export namespace additions {
                export class HillshadeRasterTileLayer extends com.massifmaps.layers.HillshadeRasterTileLayer {
                    public static class: java.lang.Class<com.nativescript.massifmaps.additions.HillshadeRasterTileLayer>;
                    public constructor(datasource: com.massifmaps.datasources.TileDataSource);
                    public constructor(datasource: com.massifmaps.datasources.TileDataSource, decoder: com.massifmaps.rastertiles.ElevationDecoder);
                    public constructor(dataSource: com.massifmaps.datasources.TileDataSource);
                    public getElevationCallback(pos: com.massifmaps.core.MapPos, callback: com.nativescript.massifmaps.additions.HillshadeRasterTileLayer.ElevationCallback): void;
                    public getElevationsCallback(poses: com.massifmaps.core.MapPosVector, callback: com.nativescript.massifmaps.additions.HillshadeRasterTileLayer.ElevationsCallback): void;
                }
                export namespace HillshadeRasterTileLayer {
                    export class ElevationCallback extends java.lang.Object {
                        public static class: java.lang.Class<com.nativescript.massifmaps.additions.HillshadeRasterTileLayer.ElevationCallback>;
                        /**
                         * Constructs a new instance of the com.nativescript.massifmaps.additions.HillshadeRasterTileLayer$ElevationCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { onElevation(param0: java.lang.Exception, param1: java.lang.Double): void; });
                        public constructor();
                        public onElevation(param0: java.lang.Exception, param1: java.lang.Double): void;
                    }
                    export class ElevationsCallback extends java.lang.Object {
                        public static class: java.lang.Class<com.nativescript.massifmaps.additions.HillshadeRasterTileLayer.ElevationsCallback>;
                        /**
                         * Constructs a new instance of the com.nativescript.massifmaps.additions.HillshadeRasterTileLayer$ElevationsCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { onElevations(param0: java.lang.Exception, param1: com.massifmaps.core.DoubleVector): void; });
                        public constructor();
                        public onElevations(param0: java.lang.Exception, param1: com.massifmaps.core.DoubleVector): void;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace massifmaps {
            export namespace additions {
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace massifmaps {
            export namespace additions {
                export class MapView extends com.massifmaps.ui.MapView {
                    public static class: java.lang.Class<com.massifmaps.ui.MapView>;
                    public static RUN_ON_MAIN_THREAD: boolean;
                    public tilt(param0: number, param1: number): void;
                    public setZoom(param0: number, param1: number): void;
                    public surfaceRedrawNeededAsync(holder: globalAndroid.view.SurfaceHolder, drawingFinished: java.lang.Runnable): void;
                    public getLayers(): com.massifmaps.components.Layers;
                    public mapToScreen(param0: com.massifmaps.core.MapPos): com.massifmaps.core.ScreenPos;
                    public getFocusPos(): com.massifmaps.core.MapPos;
                    public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
                    public rotate(deltaAngle: number, targetPos: com.massifmaps.core.MapPos, durationSeconds: number): void;
                    public setMapRotation(param0: number, param1: number): void;
                    public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                    public zoom(deltaZoom: number, targetPos: com.massifmaps.core.MapPos, durationSeconds: number): void;
                    public setMapRotation(angle: number, targetPos: com.massifmaps.core.MapPos, durationSeconds: number): void;
                    public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
                    public onSurfaceChanged(param0: javax.microedition.khronos.opengles.GL10, param1: number, param2: number): void;
                    public getMapRenderer(): com.massifmaps.renderers.MapRenderer;
                    public rotate(param0: number, param1: com.massifmaps.core.MapPos, param2: number): void;
                    public screenToMap(param0: com.massifmaps.core.ScreenPos): com.massifmaps.core.MapPos;
                    public moveToFitBounds(mapBounds: com.massifmaps.core.MapBounds, screenBounds: com.massifmaps.core.ScreenBounds, integerZoom: boolean, resetRotation: boolean, resetTilt: boolean, durationSeconds: number): void;
                    public moveToFitBounds(param0: com.massifmaps.core.MapBounds, param1: com.massifmaps.core.ScreenBounds, param2: boolean, param3: number): void;
                    public pan(param0: com.massifmaps.core.MapVec, param1: number): void;
                    public setZoom(zoom: number, targetPos: com.massifmaps.core.MapPos, durationSeconds: number): void;
                    public static setRunOnMainThread(value: boolean): void;
                    public onResume(): void;
                    public getTilt(): number;
                    public clearAllCaches(): void;
                    public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
                    public setTilt(param0: number, param1: number): void;
                    public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                    public constructor(context: globalAndroid.content.Context);
                    public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
                    public setFocusPos(param0: com.massifmaps.core.MapPos, param1: number): void;
                    public setMapRotation(param0: number, param1: com.massifmaps.core.MapPos, param2: number): void;
                    public setZoom(param0: number, param1: com.massifmaps.core.MapPos, param2: number): void;
                    public surfaceRedrawNeeded(param0: globalAndroid.view.SurfaceHolder): void;
                    public setMapEventListener(param0: com.massifmaps.ui.MapEventListener): void;
                    public getMapEventListener(): com.massifmaps.ui.MapEventListener;
                    public onSurfaceCreated(param0: javax.microedition.khronos.opengles.GL10, param1: javax.microedition.khronos.egl.EGLConfig): void;
                    public constructor(e: globalAndroid.content.Context, m: globalAndroid.util.AttributeSet);
                    public onDrawFrame(param0: javax.microedition.khronos.opengles.GL10): void;
                    public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
                    public getMapRotation(): number;
                    public sendAccessibilityEvent(param0: number): void;
                    public getZoom(): number;
                    public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                    public moveToFitBounds(param0: com.massifmaps.core.MapBounds, param1: com.massifmaps.core.ScreenBounds, param2: boolean, param3: boolean, param4: boolean, param5: number): void;
                    public cancelAllTasks(): void;
                    public getOptions(): com.massifmaps.components.Options;
                    public onTouchEvent(event: globalAndroid.view.MotionEvent): boolean;
                    public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
                    public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
                    public zoom(param0: number, param1: com.massifmaps.core.MapPos, param2: number): void;
                    public rotate(param0: number, param1: number): void;
                    public onPause(): void;
                    public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                    public zoom(param0: number, param1: number): void;
                    public clearPreloadingCaches(): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace massifmaps {
            export namespace additions {
                export class RasterTileEventListener extends com.massifmaps.layers.RasterTileEventListener {
                    public static class: java.lang.Class<com.nativescript.massifmaps.additions.RasterTileEventListener>;
                    public listener: com.nativescript.massifmaps.additions.RasterTileEventListener.Listener;
                    public constructor();
                    public constructor(listener: com.nativescript.massifmaps.additions.RasterTileEventListener.Listener);
                    public setListener(listener: com.nativescript.massifmaps.additions.RasterTileEventListener.Listener): void;
                    public onRasterTileClicked(this_: com.massifmaps.ui.RasterTileClickInfo): boolean;
                }
                export namespace RasterTileEventListener {
                    export class Listener extends java.lang.Object {
                        public static class: java.lang.Class<com.nativescript.massifmaps.additions.RasterTileEventListener.Listener>;
                        /**
                         * Constructs a new instance of the com.nativescript.massifmaps.additions.RasterTileEventListener$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { onRasterTileClicked(param0: com.massifmaps.ui.RasterTileClickInfo): boolean; });
                        public constructor();
                        public onRasterTileClicked(param0: com.massifmaps.ui.RasterTileClickInfo): boolean;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace massifmaps {
            export namespace additions {
                export class RendererCaptureListener extends com.massifmaps.renderers.RendererCaptureListener {
                    public static class: java.lang.Class<com.nativescript.massifmaps.additions.RendererCaptureListener>;
                    public listener: com.nativescript.massifmaps.additions.RendererCaptureListener.Listener;
                    public constructor(listener: com.nativescript.massifmaps.additions.RendererCaptureListener.Listener);
                    public constructor();
                    public onMapRendered(this_: com.massifmaps.graphics.Bitmap): void;
                    public setListener(listener: com.nativescript.massifmaps.additions.RendererCaptureListener.Listener): void;
                }
                export namespace RendererCaptureListener {
                    export class Listener extends java.lang.Object {
                        public static class: java.lang.Class<com.nativescript.massifmaps.additions.RendererCaptureListener.Listener>;
                        /**
                         * Constructs a new instance of the com.nativescript.massifmaps.additions.RendererCaptureListener$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { onMapRendered(param0: com.massifmaps.graphics.Bitmap): void; });
                        public constructor();
                        public onMapRendered(param0: com.massifmaps.graphics.Bitmap): void;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace massifmaps {
            export namespace additions {
                export class SynchronousHandler extends java.lang.Object {
                    public static class: java.lang.Class<com.nativescript.massifmaps.additions.SynchronousHandler>;
                    public constructor();
                    public static postAndWait(is: globalAndroid.os.Handler, runnable: java.lang.Runnable): void;
                    public static run(is: globalAndroid.os.Handler, runnable: java.lang.Runnable): void;
                    public static setRunOnMainThread(value: boolean): void;
                    public static RUN_ON_MAIN_THREAD: boolean;
                }
                export namespace SynchronousHandler {
                    export class NotifyRunnable extends java.lang.Object implements java.lang.Runnable {
                        public static class: java.lang.Class<com.nativescript.massifmaps.additions.SynchronousHandler.NotifyRunnable>;
                        public run(): void;
                        public isFinished(): boolean;
                        public constructor(r: java.lang.Runnable);
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace massifmaps {
            export namespace additions {
                export class TileDownloadListener extends com.massifmaps.datasources.TileDownloadListener {
                    public static class: java.lang.Class<com.nativescript.massifmaps.additions.TileDownloadListener>;
                    public listener: com.nativescript.massifmaps.additions.TileDownloadListener.Listener;
                    public constructor(listener: com.nativescript.massifmaps.additions.TileDownloadListener.Listener);
                    public onDownloadProgress(this_: number): void;
                    public constructor();
                    public onDownloadStarting(this_: number): void;
                    public setListener(listener: com.nativescript.massifmaps.additions.TileDownloadListener.Listener): void;
                    public onDownloadCompleted(): void;
                    public onDownloadFailed(this_: com.massifmaps.core.MapTile): void;
                }
                export namespace TileDownloadListener {
                    export class Listener extends java.lang.Object {
                        public static class: java.lang.Class<com.nativescript.massifmaps.additions.TileDownloadListener.Listener>;
                        /**
                         * Constructs a new instance of the com.nativescript.massifmaps.additions.TileDownloadListener$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { onDownloadCompleted(): void; onDownloadFailed(param0: com.massifmaps.core.MapTile): void; onDownloadProgress(param0: number): void; onDownloadStarting(param0: number): void; });
                        public constructor();
                        public onDownloadCompleted(): void;
                        public onDownloadStarting(param0: number): void;
                        public onDownloadFailed(param0: com.massifmaps.core.MapTile): void;
                        public onDownloadProgress(param0: number): void;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace massifmaps {
            export namespace additions {
                export class Utils extends java.lang.Object {
                    public static class: java.lang.Class<com.nativescript.massifmaps.additions.Utils>;
                    public static EARTH_RADIUS: number;
                    public static TO_RAD: number;
                    public static inverseMercator(y: number): number;
                    public static hav(x: number): number;
                    public static havDistance(lat1: number, lat2: number, dLng: number): number;
                    public static isOnSegmentGC(lat1: number, lng1: number, lat2: number, lng2: number, lat3: number, lng3: number, havTolerance: number): boolean;
                    public static isLocationOnPath(point: com.massifmaps.core.MapPos, poly: com.massifmaps.core.MapPosVector, closed: boolean, geodesic: boolean): number;
                    public static mercator(lat: number): number;
                    public static wrap(n: number, min: number, max: number): number;
                    public static havFromSin(x: number): number;
                    public static sinDeltaBearing(lat1: number, lng1: number, lat2: number, lng2: number, lat3: number, lng3: number): number;
                    public static computeAngleBetween(from: com.massifmaps.core.MapPos, to: com.massifmaps.core.MapPos): number;
                    public constructor();
                    public static arcHav(x: number): number;
                    public static sinSumFromHav(x: number, y: number): number;
                    public static encodeMapPosVector(poly: com.massifmaps.core.MapPosVector, includeElevation: boolean): string;
                    public static toRadians(value: number): number;
                    public static isLocationOnPath(point2: com.massifmaps.core.MapPos, lat2: com.massifmaps.core.MapPosVector, lng2: boolean, index: boolean, x3: number): number;
                    public static distanceToEnd(element: number, i: com.massifmaps.core.MapPosVector): number;
                    public static isLocationOnPath(point: com.massifmaps.core.MapPos, poly: com.massifmaps.core.MapPosVector): number;
                    public static decodeMapPosVector(deltaElevation: string, b: boolean, shift: number): com.massifmaps.core.MapPosVector;
                    public static distanceRadians(lat1: number, lng1: number, lat2: number, lng2: number): number;
                    public static computeDistanceBetween(from: com.massifmaps.core.MapPos, to: com.massifmaps.core.MapPos): number;
                    public static encodeMapPosVector(num: com.massifmaps.core.MapPosVector, i: boolean, coordinates: number): string;
                    public static clamp(x: number, low: number, high: number): number;
                    public static isLocationOnPath(point: com.massifmaps.core.MapPos, poly: com.massifmaps.core.MapPosVector, closed: boolean): number;
                    public static sinFromHav(h: number): number;
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace massifmaps {
            export namespace additions {
                export class VectorElementEventListener extends com.massifmaps.layers.VectorElementEventListener {
                    public static class: java.lang.Class<com.nativescript.massifmaps.additions.VectorElementEventListener>;
                    public listener: com.nativescript.massifmaps.additions.VectorElementEventListener.Listener;
                    public onVectorElementClicked(this_: com.massifmaps.ui.VectorElementClickInfo): boolean;
                    public constructor(listener: com.nativescript.massifmaps.additions.VectorElementEventListener.Listener);
                    public constructor();
                    public setListener(listener: com.nativescript.massifmaps.additions.VectorElementEventListener.Listener): void;
                }
                export namespace VectorElementEventListener {
                    export class Listener extends java.lang.Object {
                        public static class: java.lang.Class<com.nativescript.massifmaps.additions.VectorElementEventListener.Listener>;
                        /**
                         * Constructs a new instance of the com.nativescript.massifmaps.additions.VectorElementEventListener$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { onVectorElementClicked(param0: com.massifmaps.ui.VectorElementClickInfo): boolean; });
                        public constructor();
                        public onVectorElementClicked(param0: com.massifmaps.ui.VectorElementClickInfo): boolean;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace massifmaps {
            export namespace additions {
                export class VectorTileEventListener extends com.massifmaps.layers.VectorTileEventListener {
                    public static class: java.lang.Class<com.nativescript.massifmaps.additions.VectorTileEventListener>;
                    public listener: com.nativescript.massifmaps.additions.VectorTileEventListener.Listener;
                    public onVectorTileClicked(this_: com.massifmaps.ui.VectorTileClickInfo): boolean;
                    public constructor(listener: com.nativescript.massifmaps.additions.VectorTileEventListener.Listener);
                    public constructor();
                    public setListener(listener: com.nativescript.massifmaps.additions.VectorTileEventListener.Listener): void;
                }
                export namespace VectorTileEventListener {
                    export class Listener extends java.lang.Object {
                        public static class: java.lang.Class<com.nativescript.massifmaps.additions.VectorTileEventListener.Listener>;
                        /**
                         * Constructs a new instance of the com.nativescript.massifmaps.additions.VectorTileEventListener$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { onVectorTileClicked(param0: com.massifmaps.ui.VectorTileClickInfo): boolean; });
                        public constructor();
                        public onVectorTileClicked(param0: com.massifmaps.ui.VectorTileClickInfo): boolean;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace massifmaps {
            export namespace additions2 {
                export class FeatureCollectionSearchService extends com.massifmaps.search.FeatureCollectionSearchService {
                    public static class: java.lang.Class<com.nativescript.massifmaps.additions2.FeatureCollectionSearchService>;
                    public findFeaturesCallback(request: com.massifmaps.search.SearchRequest, callback: com.nativescript.massifmaps.additions.FeatureCollectionSearchServiceCallback): void;
                    public constructor(projection: com.massifmaps.projections.Projection, features: com.massifmaps.geometry.FeatureCollection);
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace massifmaps {
            export namespace additions2 {
                export class VectorEditEventListener extends com.massifmaps.layers.VectorEditEventListener {
                    public static class: java.lang.Class<com.nativescript.massifmaps.additions2.VectorEditEventListener>;
                    public listener: com.nativescript.massifmaps.additions2.VectorEditEventListener.Listener;
                    public onSelectDragPointStyle(this_: com.massifmaps.vectorelements.VectorElement, element: number): com.massifmaps.styles.PointStyle;
                    public onDragMove(this_: com.massifmaps.ui.VectorElementDragInfo): number;
                    public onDragEnd(this_: com.massifmaps.ui.VectorElementDragInfo): number;
                    public constructor();
                    public onElementDelete(element: com.massifmaps.vectorelements.VectorElement): void;
                    public onDragStart(this_: com.massifmaps.ui.VectorElementDragInfo): number;
                    public onElementModify(element: com.massifmaps.vectorelements.VectorElement, geometry: com.massifmaps.geometry.Geometry): void;
                    public onElementDeselected(element: com.massifmaps.vectorelements.VectorElement): void;
                    public constructor(listener: com.nativescript.massifmaps.additions2.VectorEditEventListener.Listener);
                    public setListener(listener: com.nativescript.massifmaps.additions2.VectorEditEventListener.Listener): void;
                    public onElementSelect(this_: com.massifmaps.vectorelements.VectorElement): boolean;
                }
                export namespace VectorEditEventListener {
                    export class Listener extends java.lang.Object {
                        public static class: java.lang.Class<com.nativescript.massifmaps.additions2.VectorEditEventListener.Listener>;
                        /**
                         * Constructs a new instance of the com.nativescript.massifmaps.additions2.VectorEditEventListener$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { onElementSelect(param0: com.massifmaps.vectorelements.VectorElement): boolean; onSelectDragPointStyle(param0: com.massifmaps.vectorelements.VectorElement, param1: number): com.massifmaps.styles.PointStyle; onDragEnd(param0: com.massifmaps.ui.VectorElementDragInfo): number; onDragMove(param0: com.massifmaps.ui.VectorElementDragInfo): number; onDragStart(param0: com.massifmaps.ui.VectorElementDragInfo): number; onElementDelete(param0: com.massifmaps.vectorelements.VectorElement): void; onElementDeselected(param0: com.massifmaps.vectorelements.VectorElement): void; onElementModify(param0: com.massifmaps.vectorelements.VectorElement, param1: com.massifmaps.geometry.Geometry): void; });
                        public constructor();
                        public onElementDeselected(param0: com.massifmaps.vectorelements.VectorElement): void;
                        public onElementDelete(param0: com.massifmaps.vectorelements.VectorElement): void;
                        public onElementSelect(param0: com.massifmaps.vectorelements.VectorElement): boolean;
                        public onDragEnd(param0: com.massifmaps.ui.VectorElementDragInfo): number;
                        public onDragMove(param0: com.massifmaps.ui.VectorElementDragInfo): number;
                        public onSelectDragPointStyle(param0: com.massifmaps.vectorelements.VectorElement, param1: number): com.massifmaps.styles.PointStyle;
                        public onDragStart(param0: com.massifmaps.ui.VectorElementDragInfo): number;
                        public onElementModify(param0: com.massifmaps.vectorelements.VectorElement, param1: com.massifmaps.geometry.Geometry): void;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace massifmaps {
            export namespace additions2 {
                export class VectorTileSearchService extends com.massifmaps.search.VectorTileSearchService {
                    public static class: java.lang.Class<com.nativescript.massifmaps.additions2.VectorTileSearchService>;
                    public findFeaturesCallback(request: com.massifmaps.search.SearchRequest, callback: com.nativescript.massifmaps.additions2.VectorTileSearchServiceCallback): void;
                    public constructor(source: com.massifmaps.datasources.TileDataSource, decoder: com.massifmaps.vectortiles.VectorTileDecoder);
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace massifmaps {
            export namespace additions2 {
                export class VectorTileSearchServiceCallback extends java.lang.Object {
                    public static class: java.lang.Class<com.nativescript.massifmaps.additions2.VectorTileSearchServiceCallback>;
                    /**
                     * Constructs a new instance of the com.nativescript.massifmaps.additions2.VectorTileSearchServiceCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { onFindFeatures(param0: com.massifmaps.geometry.VectorTileFeatureCollection): void; });
                    public constructor();
                    public onFindFeatures(param0: com.massifmaps.geometry.VectorTileFeatureCollection): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace massifmaps {
            export namespace api {
                export class EventListener extends com.massifmaps.api.EventListener {
                    public static class: java.lang.Class<com.nativescript.massifmaps.api.EventListener>;
                    public listener: com.nativescript.massifmaps.api.EventListener.Listener;
                    public constructor(listener: com.nativescript.massifmaps.api.EventListener.Listener);
                    public setListener(listener: com.nativescript.massifmaps.api.EventListener.Listener): void;
                    public constructor();
                    public onEvent(target: number, event: string, payload: number): boolean;
                }
                export namespace EventListener {
                    export class Listener extends java.lang.Object {
                        public static class: java.lang.Class<com.nativescript.massifmaps.api.EventListener.Listener>;
                        /**
                         * Constructs a new instance of the com.nativescript.massifmaps.api.EventListener$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { onEvent(param0: number, param1: string, param2: number): boolean; });
                        public constructor();
                        public onEvent(param0: number, param1: string, param2: number): boolean;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace massifmaps {
            export namespace geocoding {
                export class GeocodingServiceAdditions extends java.lang.Object {
                    public static class: java.lang.Class<com.nativescript.massifmaps.geocoding.GeocodingServiceAdditions>;
                    public static calculateAddress(service: com.massifmaps.geocoding.GeocodingService, request: com.massifmaps.geocoding.GeocodingRequest, callback: com.nativescript.massifmaps.geocoding.GeocodingServiceAddressCallback): void;
                    public constructor();
                    public static calculateAddress(service: com.massifmaps.geocoding.ReverseGeocodingService, request: com.massifmaps.geocoding.ReverseGeocodingRequest, callback: com.nativescript.massifmaps.geocoding.GeocodingServiceAddressCallback): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace massifmaps {
            export namespace geocoding {
                export class GeocodingServiceAddressCallback extends java.lang.Object {
                    public static class: java.lang.Class<com.nativescript.massifmaps.geocoding.GeocodingServiceAddressCallback>;
                    /**
                     * Constructs a new instance of the com.nativescript.massifmaps.geocoding.GeocodingServiceAddressCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { onGeoCodingResult(param0: java.lang.Exception, param1: com.massifmaps.geocoding.GeocodingResultVector): void; });
                    public constructor();
                    public onGeoCodingResult(param0: java.lang.Exception, param1: com.massifmaps.geocoding.GeocodingResultVector): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace massifmaps {
            export namespace geocoding {
                export class PackageManagerReverseGeocodingService extends com.massifmaps.geocoding.PackageManagerReverseGeocodingService {
                    public static class: java.lang.Class<com.nativescript.massifmaps.geocoding.PackageManagerReverseGeocodingService>;
                    public calculateAddressCallback(request: com.massifmaps.geocoding.ReverseGeocodingRequest, callback: com.nativescript.massifmaps.geocoding.GeocodingServiceAddressCallback): void;
                    public constructor();
                    public constructor(manager: com.massifmaps.packagemanager.PackageManager);
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace massifmaps {
            export namespace packagemanager {
                export class PackageManagerListener extends com.massifmaps.packagemanager.PackageManagerListener {
                    public static class: java.lang.Class<com.nativescript.massifmaps.packagemanager.PackageManagerListener>;
                    public listener: com.nativescript.massifmaps.packagemanager.PackageManagerListener.Listener;
                    public constructor(listener: com.nativescript.massifmaps.packagemanager.PackageManagerListener.Listener);
                    public onStyleUpdated(this_: string): void;
                    public onPackageCancelled(this_: string, id: number): void;
                    public onPackageFailed(this_: string, id: number, version: number): void;
                    public onPackageListUpdated(): void;
                    public onStyleFailed(this_: string): void;
                    public constructor();
                    public onPackageUpdated(this_: string, id: number): void;
                    public setListener(listener: com.nativescript.massifmaps.packagemanager.PackageManagerListener.Listener): void;
                    public onPackageListFailed(): void;
                    public onPackageStatusChanged(this_: string, id: number, version: com.massifmaps.packagemanager.PackageStatus): void;
                }
                export namespace PackageManagerListener {
                    export class Listener extends java.lang.Object {
                        public static class: java.lang.Class<com.nativescript.massifmaps.packagemanager.PackageManagerListener.Listener>;
                        /**
                         * Constructs a new instance of the com.nativescript.massifmaps.packagemanager.PackageManagerListener$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { onPackageCancelled(param0: string, param1: number): void; onPackageFailed(param0: string, param1: number, param2: number): void; onPackageListFailed(): void; onPackageListUpdated(): void; onPackageStatusChanged(param0: string, param1: number, param2: com.massifmaps.packagemanager.PackageStatus): void; onPackageUpdated(param0: string, param1: number): void; onStyleFailed(param0: string): void; onStyleUpdated(param0: string): void; });
                        public constructor();
                        public onPackageFailed(param0: string, param1: number, param2: number): void;
                        public onPackageUpdated(param0: string, param1: number): void;
                        public onStyleFailed(param0: string): void;
                        public onPackageListFailed(): void;
                        public onPackageCancelled(param0: string, param1: number): void;
                        public onStyleUpdated(param0: string): void;
                        public onPackageListUpdated(): void;
                        public onPackageStatusChanged(param0: string, param1: number, param2: com.massifmaps.packagemanager.PackageStatus): void;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace massifmaps {
            export namespace packagemanager {
                export class ServerPackagesCallback extends java.lang.Object {
                    public static class: java.lang.Class<com.nativescript.massifmaps.packagemanager.ServerPackagesCallback>;
                    /**
                     * Constructs a new instance of the com.nativescript.massifmaps.packagemanager.ServerPackagesCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { onServerPackages(param0: com.massifmaps.packagemanager.PackageInfoVector): void; });
                    public constructor();
                    public onServerPackages(param0: com.massifmaps.packagemanager.PackageInfoVector): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace massifmaps {
            export namespace routing {
                export class RoutingResultToJSONCallback extends java.lang.Object {
                    public static class: java.lang.Class<com.nativescript.massifmaps.routing.RoutingResultToJSONCallback>;
                    /**
                     * Constructs a new instance of the com.nativescript.massifmaps.routing.RoutingResultToJSONCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { onJSON(param0: java.lang.Exception, param1: string): void; });
                    public constructor();
                    public onJSON(param0: java.lang.Exception, param1: string): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace massifmaps {
            export namespace routing {
                export class RoutingServiceAdditions extends java.lang.Object {
                    public static class: java.lang.Class<com.nativescript.massifmaps.routing.RoutingServiceAdditions>;
                    public static matchRoute(service: com.massifmaps.routing.MultiValhallaOfflineRoutingService, request: com.massifmaps.routing.RouteMatchingRequest, profile: string, callback: com.nativescript.massifmaps.routing.RoutingServiceRouteMatchingCallback): void;
                    public constructor();
                    public static matchRoute(service: com.massifmaps.routing.ValhallaOfflineRoutingService, request: com.massifmaps.routing.RouteMatchingRequest, profile: string, callback: com.nativescript.massifmaps.routing.RoutingServiceRouteMatchingCallback): void;
                    public static matchRoute(service: com.massifmaps.routing.ValhallaOnlineRoutingService, request: com.massifmaps.routing.RouteMatchingRequest, profile: string, callback: com.nativescript.massifmaps.routing.RoutingServiceRouteMatchingCallback): void;
                    public static calculateRoute(service: com.massifmaps.routing.RoutingService, request: com.massifmaps.routing.RoutingRequest, profile: string, stringify: boolean, callback: com.nativescript.massifmaps.routing.RoutingServiceRouteCallback): void;
                    public static stringifyRoutingResult(instruction: com.massifmaps.routing.RoutingResult): string;
                    public static matchRoute(service: com.massifmaps.routing.PackageManagerValhallaRoutingService, request: com.massifmaps.routing.RouteMatchingRequest, profile: string, callback: com.nativescript.massifmaps.routing.RoutingServiceRouteMatchingCallback): void;
                    public static routingResultToJSON(routingResult: com.massifmaps.routing.RoutingResult, callback: com.nativescript.massifmaps.routing.RoutingResultToJSONCallback): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace massifmaps {
            export namespace routing {
                export class RoutingServiceRouteCallback extends java.lang.Object {
                    public static class: java.lang.Class<com.nativescript.massifmaps.routing.RoutingServiceRouteCallback>;
                    /**
                     * Constructs a new instance of the com.nativescript.massifmaps.routing.RoutingServiceRouteCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { onRoutingResult(param0: java.lang.Exception, param1: com.massifmaps.routing.RoutingResult, param2: string): void; });
                    public constructor();
                    public onRoutingResult(param0: java.lang.Exception, param1: com.massifmaps.routing.RoutingResult, param2: string): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace massifmaps {
            export namespace routing {
                export class RoutingServiceRouteMatchingCallback extends java.lang.Object {
                    public static class: java.lang.Class<com.nativescript.massifmaps.routing.RoutingServiceRouteMatchingCallback>;
                    /**
                     * Constructs a new instance of the com.nativescript.massifmaps.routing.RoutingServiceRouteMatchingCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { onRouteMatchingResult(param0: java.lang.Exception, param1: com.massifmaps.routing.RouteMatchingResult): void; });
                    public constructor();
                    public onRouteMatchingResult(param0: java.lang.Exception, param1: com.massifmaps.routing.RouteMatchingResult): void;
                }
            }
        }
    }
}
