/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable no-redeclare */
/* eslint-disable @typescript-eslint/unified-signatures */

declare namespace com {
    export namespace nativescript {
        export namespace massifmaps {
            export namespace additions {
                export class AKAssetPackage extends com.massifmaps.utils.AssetPackage {
                    public static class: java.lang.Class<AKAssetPackage>;
                    public constructor();
                    public loadAsset(param0: string): com.massifmaps.core.BinaryData;
                    public getAssetNames(): com.massifmaps.core.StringVector;
                    public setInterface(param0: AKAssetPackage.Interface): void;
                    public constructor(param0: number, param1: boolean);
                    public constructor(param0: AKAssetPackage.Interface);
                    public constructor(param0: AKAssetPackage.Interface, param1: com.massifmaps.utils.AssetPackage);
                }
                export namespace AKAssetPackage {
                    export class Interface extends java.lang.Object {
                        public static class: java.lang.Class<Interface>;
                        /**
                         * Constructs a new instance of the com.nativescript.massifmaps.additions.AKAssetPackage$Interface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { loadAsset(param0: string): com.massifmaps.core.BinaryData; getAssetNames(): com.massifmaps.core.StringVector });
                        public constructor();
                        public getAssetNames(): com.massifmaps.core.StringVector;
                        public loadAsset(param0: string): com.massifmaps.core.BinaryData;
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
                export class AKClusterElementBuilder extends com.massifmaps.layers.ClusterElementBuilder {
                    public constructor(screenScale: number);
                    public static class: java.lang.Class<AKClusterElementBuilder>;
                    public buildClusterElement(param0: com.massifmaps.core.MapPos, param1: com.massifmaps.vectorelements.VectorElementVector): com.massifmaps.vectorelements.VectorElement;
                    public setShape(param0: string): void;
                    public setUseNativeBuilder(param0: boolean): void;
                    public setSize(param0: number): void;
                    public constructor();
                    public nativeBuildClusterElement(param0: com.massifmaps.core.MapPos, param1: com.massifmaps.vectorelements.VectorElementVector): com.massifmaps.vectorelements.VectorElement;
                    public buildClusterElement(param0: com.massifmaps.core.MapPos, param1: number): com.massifmaps.vectorelements.VectorElement;
                    public setInterface(param0: AKClusterElementBuilder.Interface): void;
                    public constructor(param0: number, param1: boolean);
                    public setBitmap(param0: globalAndroid.graphics.Bitmap): void;
                    public setColor(param0: com.massifmaps.graphics.Color): void;
                }
                export namespace AKClusterElementBuilder {
                    export class Interface extends java.lang.Object {
                        public static class: java.lang.Class<Interface>;
                        /**
                         * Constructs a new instance of the com.nativescript.massifmaps.additions.AKClusterElementBuilder$Interface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            buildClusterElement(param0: com.massifmaps.core.MapPos, param1: com.massifmaps.vectorelements.VectorElementVector): com.massifmaps.vectorelements.VectorElement;
                        });
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
                export class AKDirAssetPackage extends com.massifmaps.utils.AssetPackage {
                    public static class: java.lang.Class<AKDirAssetPackage>;
                    public constructor();
                    public loadAsset(param0: string): com.massifmaps.core.BinaryData;
                    public getAssetNames(): com.massifmaps.core.StringVector;
                    public constructor(param0: globalAndroid.content.Context, param1: string);
                    public constructor(param0: number, param1: boolean);
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace massifmaps {
            export namespace additions2 {
                export class AKFeatureCollectionSearchService extends com.massifmaps.search.FeatureCollectionSearchService {
                    public static class: java.lang.Class<AKFeatureCollectionSearchService>;
                    public constructor(param0: com.massifmaps.projections.Projection, param1: com.massifmaps.geometry.FeatureCollection);
                    public constructor(param0: number, param1: boolean);
                    public findFeaturesCallback(param0: com.massifmaps.search.SearchRequest, param1: FeatureCollectionSearchServiceCallback): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace massifmaps {
            export namespace geocoding {
                export class AKGeocodingService extends com.massifmaps.geocoding.GeocodingService {
                    public static class: java.lang.Class<AKGeocodingService>;
                    public calculateAddressCallback(param0: com.massifmaps.geocoding.GeocodingRequest, param1: GeocodingServiceAddressCallback): void;
                    public constructor();
                    public constructor(param0: number, param1: boolean);
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace massifmaps {
            export namespace geocoding {
                export class AKGeocodingServiceAdditions extends java.lang.Object {
                    public static class: java.lang.Class<AKGeocodingServiceAdditions>;
                    public static calculateAddress(
                        param0: com.massifmaps.geocoding.ReverseGeocodingService,
                        param1: com.massifmaps.geocoding.ReverseGeocodingRequest,
                        param2: GeocodingServiceAddressCallback
                    ): void;
                    public constructor();
                    public static calculateAddress(param0: com.massifmaps.geocoding.GeocodingService, param1: com.massifmaps.geocoding.GeocodingRequest, param2: GeocodingServiceAddressCallback): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace massifmaps {
            export namespace additions {
                export class AKHillshadeRasterTileLayer extends com.massifmaps.layers.HillshadeRasterTileLayer {
                    public static class: java.lang.Class<AKHillshadeRasterTileLayer>;
                    public constructor(param0: com.massifmaps.datasources.TileDataSource, param1: com.massifmaps.rastertiles.ElevationDecoder);
                    public getElevationCallback(param0: com.massifmaps.core.MapPos, param1: AKHillshadeRasterTileLayer.ElevationCallback): void;
                    public constructor(param0: com.massifmaps.datasources.TileDataSource);
                    public getElevationsCallback(param0: com.massifmaps.core.MapPosVector, param1: AKHillshadeRasterTileLayer.ElevationsCallback): void;
                    public constructor(param0: number, param1: boolean);
                }
                export namespace AKHillshadeRasterTileLayer {
                    export class ElevationCallback extends java.lang.Object {
                        public static class: java.lang.Class<ElevationCallback>;
                        /**
                         * Constructs a new instance of the com.nativescript.massifmaps.additions.AKHillshadeRasterTileLayer$ElevationCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { onElevation(param0: java.lang.Exception, param1: java.lang.Integer): void });
                        public constructor();
                        public onElevation(param0: java.lang.Exception, param1: java.lang.Integer): void;
                    }
                    export class ElevationsCallback extends java.lang.Object {
                        public static class: java.lang.Class<ElevationsCallback>;
                        /**
                         * Constructs a new instance of the com.nativescript.massifmaps.additions.AKHillshadeRasterTileLayer$ElevationsCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { onElevations(param0: java.lang.Exception, param1: com.massifmaps.core.IntVector): void });
                        public constructor();
                        public onElevations(param0: java.lang.Exception, param1: com.massifmaps.core.IntVector): void;
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
                export class AKMapBoxOnlineGeocodingService extends com.massifmaps.geocoding.MapBoxOnlineGeocodingService {
                    public static class: java.lang.Class<AKMapBoxOnlineGeocodingService>;
                    public calculateAddressCallback(param0: com.massifmaps.geocoding.GeocodingRequest, param1: GeocodingServiceAddressCallback): void;
                    public constructor(param0: string);
                    public constructor();
                    public constructor(param0: number, param1: boolean);
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace massifmaps {
            export namespace additions {
                export class AKMapBoxOnlineReverseGeocodingService extends com.massifmaps.geocoding.MapBoxOnlineReverseGeocodingService {
                    public static class: java.lang.Class<AKMapBoxOnlineReverseGeocodingService>;
                    public constructor(param0: string);
                    public constructor();
                    public calculateAddressCallback(param0: com.massifmaps.geocoding.ReverseGeocodingRequest, param1: GeocodingServiceAddressCallback): void;
                    public constructor(param0: number, param1: boolean);
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace massifmaps {
            export namespace additions {
                export class AKMapEventListener extends java.lang.Object {
                    public static class: java.lang.Class<AKMapEventListener>;
                    /**
                     * Constructs a new instance of the com.nativescript.massifmaps.additions.AKMapEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        onMapMoved(param0: boolean): void;
                        onMapIdle(): void;
                        onMapStable(param0: boolean): void;
                        onMapClicked(param0: com.massifmaps.ui.MapClickInfo): void;
                        onMapInteraction(interaction: com.massifmaps.ui.MapInteractionInfo, param0: boolean): void;
                    });
                    public constructor();
                    public onMapMoved(param0: boolean): void;
                    public onMapIdle(): void;
                    public onMapStable(param0: boolean): void;
                    public onMapClicked(param0: com.massifmaps.ui.MapClickInfo): void;
                    public onMapInteraction(interaction: com.massifmaps.ui.MapInteractionInfo, param0: boolean): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace massifmaps {
            export namespace additions {
                export class Utils {
                    static encodeMapPosVector(coordinates: com.massifmaps.core.MapPosVector, includeElevation: boolean, precision: number): string;
                    static decodeMapPosVector(str: string, includeElevation: boolean, precision: number): com.massifmaps.core.MapPosVector;
                    static distanceToEnd(index: number, coordinates: com.massifmaps.core.MapPosVector): number;
                    static isLocationOnPath(point: com.massifmaps.core.MapPos, poly: com.massifmaps.core.MapPosVector, closed?: boolean, geodesic?: boolean, toleranceEarth?: number): number;
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace massifmaps {
            export namespace additions {
                export class AKMapView extends com.massifmaps.ui.MapView {
                    public static class: java.lang.Class<AKMapView>;
                    public static setRunOnMainThread(value: boolean);
                    public userAction: boolean;
                    public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                    public surfaceRedrawNeeded(param0: globalAndroid.view.SurfaceHolder): void;
                    /** @deprecated */
                    public surfaceRedrawNeeded(param0: globalAndroid.view.SurfaceHolder): void;
                    public onSurfaceCreated(param0: javax.microedition.khronos.opengles.GL10, param1: javax.microedition.khronos.egl.EGLConfig): void;
                    public surfaceRedrawNeededAsync(param0: globalAndroid.view.SurfaceHolder, param1: java.lang.Runnable): void;
                    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
                    public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
                    public setMapEventListener(param0: AKMapEventListener): void;
                    public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
                    public setMapEventListener(param0: com.massifmaps.ui.MapEventListener): void;
                    public constructor(param0: globalAndroid.content.Context);
                    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
                    public onDrawFrame(param0: javax.microedition.khronos.opengles.GL10): void;
                    public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
                    public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                    public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                    public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
                    public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
                    public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                    public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
                    public sendAccessibilityEvent(param0: number): void;
                    public onSurfaceChanged(param0: javax.microedition.khronos.opengles.GL10, param1: number, param2: number): void;
                }
                export class AKTextureMapView extends AKMapView {}
            }
        }
    }
}
declare namespace com {
    export namespace nativescript {
        export namespace massifmaps {
            export namespace packagemanager {
                export class AKPackageManagerListener extends com.massifmaps.packagemanager.PackageManagerListener {
                    public static class: java.lang.Class<AKPackageManagerListener>;
                    public onPackageFailed(param0: string, param1: number, param2: com.massifmaps.packagemanager.PackageErrorType): void;
                    public onPackageListUpdated(): void;
                    public onStyleFailed(param0: string): void;
                    public constructor();
                    public onPackageUpdated(param0: string, param1: number): void;
                    public onPackageStatusChanged(param0: string, param1: number, param2: com.massifmaps.packagemanager.PackageStatus): void;
                    public setListener(param0: AKPackageManagerListener.Listener): void;
                    public constructor(param0: AKPackageManagerListener.Listener);
                    public onPackageListFailed(): void;
                    public onPackageCancelled(param0: string, param1: number): void;
                    public constructor(param0: number, param1: boolean);
                    public onStyleUpdated(param0: string): void;
                }
                export namespace AKPackageManagerListener {
                    export class Listener extends java.lang.Object {
                        public static class: java.lang.Class<Listener>;
                        /**
                         * Constructs a new instance of the com.nativescript.massifmaps.additions.AKPackageManagerListener$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            onPackageCancelled(param0: string, param1: number): void;
                            onPackageFailed(param0: string, param1: number, param2: com.massifmaps.packagemanager.PackageErrorType): void;
                            onPackageListFailed(): void;
                            onPackageListUpdated(): void;
                            onPackageStatusChanged(param0: string, param1: number, param2: com.massifmaps.packagemanager.PackageStatus): void;
                            onPackageUpdated(param0: string, param1: number): void;
                            onStyleFailed(param0: string): void;
                            onStyleUpdated(param0: string): void;
                        });
                        public constructor();
                        public onPackageUpdated(param0: string, param1: number): void;
                        public onStyleFailed(param0: string): void;
                        public onPackageListFailed(): void;
                        public onPackageCancelled(param0: string, param1: number): void;
                        public onPackageStatusChanged(param0: string, param1: number, param2: com.massifmaps.packagemanager.PackageStatus): void;
                        public onPackageFailed(param0: string, param1: number, param2: com.massifmaps.packagemanager.PackageErrorType): void;
                        public onStyleUpdated(param0: string): void;
                        public onPackageListUpdated(): void;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace massifmaps {
            export namespace routing {
                export class AKRoutingServiceAdditions extends java.lang.Object {
                    public static class: java.lang.Class<AKRoutingServiceAdditions>;
                    public constructor();
                    public static matchRoute(
                        service:
                            | com.massifmaps.routing.PackageManagerValhallaRoutingService
                            | com.massifmaps.routing.ValhallaOfflineRoutingService
                            | com.massifmaps.routing.MultiValhallaOfflineRoutingService
                            | com.massifmaps.routing.ValhallaOnlineRoutingService,
                        request: com.massifmaps.routing.RouteMatchingRequest,
                        profile: string,
                        callback: RoutingServiceRouteMatchingCallback
                    ): void;
                    public static calculateRoute(param0: com.massifmaps.routing.RoutingService, param1: com.massifmaps.routing.RoutingRequest, profile: string, 
                        stringify:boolean, param2: RoutingServiceRouteCallback): void;
                    public static routingResultToJSON(param0: com.massifmaps.routing.RoutingResult, param2: RoutingResultToJSONCallback): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace massifmaps {
            export namespace additions {
                export class AKTileDownloadListener extends com.massifmaps.datasources.TileDownloadListener {
                    public static class: java.lang.Class<AKTileDownloadListener>;
                    public onDownloadStarting(param0: number): void;
                    public constructor(param0: AKTileDownloadListener.Listener);
                    public constructor();
                    public onDownloadFailed(param0: com.massifmaps.core.MapTile): void;
                    public onDownloadProgress(param0: number): void;
                    public onDownloadCompleted(): void;
                    public setListener(param0: AKTileDownloadListener.Listener): void;
                    public constructor(param0: number, param1: boolean);
                }
                export namespace AKTileDownloadListener {
                    export class Listener extends java.lang.Object {
                        public static class: java.lang.Class<Listener>;
                        /**
                         * Constructs a new instance of the com.nativescript.massifmaps.additions.AKTileDownloadListener$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            onDownloadCompleted(): void;
                            onDownloadFailed(param0: com.massifmaps.core.MapTile): void;
                            onDownloadProgress(param0: number): void;
                            onDownloadStarting(param0: number): void;
                        });
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
                export class AKTomTomOnlineGeocodingService extends com.massifmaps.geocoding.TomTomOnlineGeocodingService {
                    public static class: java.lang.Class<AKTomTomOnlineGeocodingService>;
                    public calculateAddressCallback(param0: com.massifmaps.geocoding.GeocodingRequest, param1: GeocodingServiceAddressCallback): void;
                    public constructor(param0: string);
                    public constructor();
                    public constructor(param0: number, param1: boolean);
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace massifmaps {
            export namespace additions {
                export class AKTomTomOnlineReverseGeocodingService extends com.massifmaps.geocoding.TomTomOnlineReverseGeocodingService {
                    public static class: java.lang.Class<AKTomTomOnlineReverseGeocodingService>;
                    public constructor(param0: string);
                    public constructor();
                    public calculateAddressCallback(param0: com.massifmaps.geocoding.ReverseGeocodingRequest, param1: GeocodingServiceAddressCallback): void;
                    public constructor(param0: number, param1: boolean);
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace massifmaps {
            export namespace additions2 {
                export class AKVectorEditEventListener extends com.massifmaps.layers.VectorEditEventListener {
                    public static class: java.lang.Class<AKVectorEditEventListener>;
                    public setListener(param0: AKVectorEditEventListener.Listener): void;
                    public onElementModify(param0: com.massifmaps.vectorelements.VectorElement, param1: com.massifmaps.geometry.Geometry): void;
                    public onElementDelete(param0: com.massifmaps.vectorelements.VectorElement): void;
                    public constructor();
                    public onElementSelect(param0: com.massifmaps.vectorelements.VectorElement): boolean;
                    public onDragMove(param0: com.massifmaps.ui.VectorElementDragInfo): com.massifmaps.layers.VectorElementDragResult;
                    public onElementDeselected(param0: com.massifmaps.vectorelements.VectorElement): void;
                    public onDragStart(param0: com.massifmaps.ui.VectorElementDragInfo): com.massifmaps.layers.VectorElementDragResult;
                    public onDragEnd(param0: com.massifmaps.ui.VectorElementDragInfo): com.massifmaps.layers.VectorElementDragResult;
                    public onSelectDragPointStyle(param0: com.massifmaps.vectorelements.VectorElement, param1: com.massifmaps.layers.VectorElementDragPointStyle): com.massifmaps.styles.PointStyle;
                    public constructor(param0: AKVectorEditEventListener.Listener);
                    public constructor(param0: number, param1: boolean);
                }
                export namespace AKVectorEditEventListener {
                    export class Listener extends java.lang.Object {
                        public static class: java.lang.Class<Listener>;
                        /**
                         * Constructs a new instance of the com.nativescript.massifmaps.additions.AKVectorEditEventListener$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            onElementSelect(param0: com.massifmaps.vectorelements.VectorElement): boolean;
                            onSelectDragPointStyle(param0: com.massifmaps.vectorelements.VectorElement, param1: com.massifmaps.layers.VectorElementDragPointStyle): com.massifmaps.styles.PointStyle;
                            onDragEnd(param0: com.massifmaps.ui.VectorElementDragInfo): com.massifmaps.layers.VectorElementDragResult;
                            onDragMove(param0: com.massifmaps.ui.VectorElementDragInfo): com.massifmaps.layers.VectorElementDragResult;
                            onDragStart(param0: com.massifmaps.ui.VectorElementDragInfo): com.massifmaps.layers.VectorElementDragResult;
                            onElementDelete(param0: com.massifmaps.vectorelements.VectorElement): void;
                            onElementDeselected(param0: com.massifmaps.vectorelements.VectorElement): void;
                            onElementModify(param0: com.massifmaps.vectorelements.VectorElement, param1: com.massifmaps.geometry.Geometry): void;
                        });
                        public constructor();
                        public onDragStart(param0: com.massifmaps.ui.VectorElementDragInfo): com.massifmaps.layers.VectorElementDragResult;
                        public onSelectDragPointStyle(param0: com.massifmaps.vectorelements.VectorElement, param1: com.massifmaps.layers.VectorElementDragPointStyle): com.massifmaps.styles.PointStyle;
                        public onDragEnd(param0: com.massifmaps.ui.VectorElementDragInfo): com.massifmaps.layers.VectorElementDragResult;
                        public onElementDelete(param0: com.massifmaps.vectorelements.VectorElement): void;
                        public onDragMove(param0: com.massifmaps.ui.VectorElementDragInfo): com.massifmaps.layers.VectorElementDragResult;
                        public onElementSelect(param0: com.massifmaps.vectorelements.VectorElement): boolean;
                        public onElementModify(param0: com.massifmaps.vectorelements.VectorElement, param1: com.massifmaps.geometry.Geometry): void;
                        public onElementDeselected(param0: com.massifmaps.vectorelements.VectorElement): void;
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
                export class AKVectorElementEventListener extends com.massifmaps.layers.VectorElementEventListener {
                    public static class: java.lang.Class<AKVectorElementEventListener>;
                    public constructor();
                    public setListener(param0: AKVectorElementEventListener.Listener): void;
                    public onVectorElementClicked(param0: com.massifmaps.ui.VectorElementClickInfo): boolean;
                    public constructor(param0: AKVectorElementEventListener.Listener);
                    public constructor(param0: number, param1: boolean);
                }
                export namespace AKVectorElementEventListener {
                    export class Listener extends java.lang.Object {
                        public static class: java.lang.Class<Listener>;
                        /**
                         * Constructs a new instance of the com.nativescript.massifmaps.additions.AKVectorElementEventListener$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { onVectorElementClicked(param0: com.massifmaps.ui.VectorElementClickInfo): boolean });
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
                export class AKRasterTileEventListener extends com.massifmaps.layers.RasterTileEventListener {
                    public static class: java.lang.Class<AKRasterTileEventListener>;
                    public constructor();
                    public setListener(param0: AKRasterTileEventListener.Listener): void;
                    public onRasterTileClicked(param0: com.massifmaps.ui.RasterTileClickInfo): boolean;
                    public constructor(param0: AKRasterTileEventListener.Listener);
                    public constructor(param0: number, param1: boolean);
                }
                export namespace AKRasterTileEventListener {
                    export class Listener extends java.lang.Object {
                        public static class: java.lang.Class<Listener>;
                        /**
                         * Constructs a new instance of the com.nativescript.massifmaps.additions.AKVectorElementEventListener$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { onRasterTileClicked(param0: com.massifmaps.ui.RasterTileClickInfo): boolean });
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
                export class AKVectorTileEventListener extends com.massifmaps.layers.VectorTileEventListener {
                    public static class: java.lang.Class<AKVectorTileEventListener>;
                    public setListener(param0: AKVectorTileEventListener.Listener): void;
                    public constructor();
                    public constructor(param0: AKVectorTileEventListener.Listener);
                    public constructor(param0: number, param1: boolean);
                    public onVectorTileClicked(param0: com.massifmaps.ui.VectorTileClickInfo): boolean;
                }
                export namespace AKVectorTileEventListener {
                    export class Listener extends java.lang.Object {
                        public static class: java.lang.Class<Listener>;
                        /**
                         * Constructs a new instance of the com.nativescript.massifmaps.additions.AKVectorTileEventListener$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { onVectorTileClicked(param0: com.massifmaps.ui.VectorTileClickInfo): boolean });
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
                export class AKVectorTileSearchService extends com.massifmaps.search.VectorTileSearchService {
                    public static class: java.lang.Class<AKVectorTileSearchService>;
                    public findFeaturesCallback(param0: com.massifmaps.search.SearchRequest, param1: VectorTileSearchServiceCallback): void;
                    public constructor(param0: com.massifmaps.datasources.TileDataSource, param1: com.massifmaps.vectortiles.VectorTileDecoder);
                    public constructor(param0: number, param1: boolean);
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace massifmaps {
            export namespace additions {
                export class AssetPackage extends com.massifmaps.utils.AssetPackage {
                    public static class: java.lang.Class<AssetPackage>;
                    public constructor();
                    public constructor(param0: number, param1: boolean);
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace massifmaps {
            export namespace additions {
                export class BuildConfig extends java.lang.Object {
                    public static class: java.lang.Class<BuildConfig>;
                    public static DEBUG: boolean;
                    public static APPLICATION_ID: string;
                    public static BUILD_TYPE: string;
                    public static FLAVOR: string;
                    public static VERSION_CODE: number;
                    public static VERSION_NAME: string;
                    public constructor();
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
                    public static class: java.lang.Class<FeatureCollectionSearchServiceCallback>;
                    /**
                     * Constructs a new instance of the com.nativescript.massifmaps.additions.FeatureCollectionSearchServiceCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { onFindFeatures(param0: com.massifmaps.geometry.FeatureCollection): void });
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
            export namespace geocoding {
                export class GeocodingServiceAddressCallback extends java.lang.Object {
                    public static class: java.lang.Class<GeocodingServiceAddressCallback>;
                    /**
                     * Constructs a new instance of the com.nativescript.massifmaps.additions.GeocodingServiceAddressCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { onGeoCodingResult(param0: java.lang.Exception, param1: com.massifmaps.geocoding.GeocodingResultVector): void });
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
            export namespace additions {
                export class RendererCaptureListener extends com.massifmaps.renderers.RendererCaptureListener {
                    public static class: java.lang.Class<RendererCaptureListener>;
                    public constructor();
                    public constructor(param0: RendererCaptureListener.Listener);
                    public onMapRendered(param0: com.massifmaps.graphics.Bitmap): void;
                    public constructor(param0: number, param1: boolean);
                    public setListener(param0: RendererCaptureListener.Listener): void;
                }
                export namespace RendererCaptureListener {
                    export class Listener extends java.lang.Object {
                        public static class: java.lang.Class<Listener>;
                        /**
                         * Constructs a new instance of the com.nativescript.massifmaps.additions.RendererCaptureListener$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { onMapRendered(param0: com.massifmaps.graphics.Bitmap): void });
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
            export namespace routing {
                export class RoutingServiceRouteCallback extends java.lang.Object {
                    public static class: java.lang.Class<RoutingServiceRouteCallback>;
                    /**
                     * Constructs a new instance of the com.nativescript.massifmaps.additions.RoutingServiceRouteCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { onRoutingResult(param0: java.lang.Exception, param1: com.massifmaps.routing.RoutingResult, param2: string): void });
                    public constructor();
                    public onRoutingResult(param0: java.lang.Exception, param1: com.massifmaps.routing.RoutingResult): void;
                }
                export class RoutingResultToJSONCallback extends java.lang.Object {
                    public static class: java.lang.Class<RoutingResultToJSONCallback>;
                    /**
                     * Constructs a new instance of the com.nativescript.massifmaps.additions.RoutingResultToJSONCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { onJSON(param0: java.lang.Exception, param1: string): void });
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
                export class RoutingServiceRouteMatchingCallback extends java.lang.Object {
                    public static class: java.lang.Class<RoutingServiceRouteMatchingCallback>;
                    /**
                     * Constructs a new instance of the com.nativescript.massifmaps.additions.RoutingServiceRouteMatchingCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { onRouteMatchingResult(param0: java.lang.Exception, param1: com.massifmaps.routing.RouteMatchingResult): void });
                    public constructor();
                    public onRouteMatchingResult(param0: java.lang.Exception, param1: com.massifmaps.routing.RouteMatchingResult): void;
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
                    public static class: java.lang.Class<ServerPackagesCallback>;
                    /**
                     * Constructs a new instance of the com.nativescript.massifmaps.additions.ServerPackagesCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { onServerPackages(param0: com.massifmaps.packagemanager.PackageInfoVector): void });
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
            export namespace additions {
                export class SynchronousHandler extends java.lang.Object {
                    public static class: java.lang.Class<SynchronousHandler>;
                    public constructor();
                    public static postAndWait(param0: globalAndroid.os.Handler, param1: java.lang.Runnable): void;
                }
                export namespace SynchronousHandler {
                    export class NotifyRunnable extends java.lang.Object implements java.lang.Runnable {
                        public static class: java.lang.Class<NotifyRunnable>;
                        public run(): void;
                        public constructor(param0: java.lang.Runnable);
                        public isFinished(): boolean;
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
                export class VectorTileSearchServiceCallback extends java.lang.Object {
                    public static class: java.lang.Class<VectorTileSearchServiceCallback>;
                    /**
                     * Constructs a new instance of the com.nativescript.massifmaps.additions.VectorTileSearchServiceCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { onFindFeatures(param0: com.massifmaps.geometry.VectorTileFeatureCollection): void });
                    public constructor();
                    public onFindFeatures(param0: com.massifmaps.geometry.VectorTileFeatureCollection): void;
                }
            }
        }
    }
}

//Generics information:
