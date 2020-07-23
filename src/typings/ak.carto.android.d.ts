/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable no-redeclare */
/* eslint-disable @typescript-eslint/unified-signatures */

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class AKAssetPackage extends com.carto.utils.AssetPackage {
                    public static class: java.lang.Class<AKAssetPackage>;
                    public constructor();
                    public loadAsset(param0: string): com.carto.core.BinaryData;
                    public getAssetNames(): com.carto.core.StringVector;
                    public setInterface(param0: AKAssetPackage.Interface): void;
                    public constructor(param0: number, param1: boolean);
                    public constructor(param0: AKAssetPackage.Interface);
                }
                export namespace AKAssetPackage {
                    export class Interface extends java.lang.Object {
                        public static class: java.lang.Class<Interface>;
                        /**
                         * Constructs a new instance of the com.akylas.carto.additions.AKAssetPackage$Interface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { loadAsset(param0: string): com.carto.core.BinaryData; getAssetNames(): com.carto.core.StringVector });
                        public constructor();
                        public getAssetNames(): com.carto.core.StringVector;
                        public loadAsset(param0: string): com.carto.core.BinaryData;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class AKCartoOnlineRoutingService extends com.carto.routing.CartoOnlineRoutingService {
                    public static class: java.lang.Class<AKCartoOnlineRoutingService>;
                    public calculateRouteCallback(param0: com.carto.routing.RoutingRequest, param1: RoutingServiceRouteCallback): void;
                    public constructor(param0: string);
                    public constructor();
                    public constructor(param0: number, param1: boolean);
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class AKCartoPackageManager extends com.carto.packagemanager.CartoPackageManager {
                    public static class: java.lang.Class<AKCartoPackageManager>;
                    public constructor(param0: string, param1: string);
                    public getLocalPackagesCallback(param0: ServerPackagesCallback): void;
                    public constructor(param0: string, param1: string, param2: string, param3: string);
                    public getServerPackagesCallback(param0: ServerPackagesCallback): void;
                    public constructor(param0: number, param1: boolean);
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class AKClusterElementBuilder extends com.carto.layers.ClusterElementBuilder {
                    public static class: java.lang.Class<AKClusterElementBuilder>;
                    public buildClusterElement(param0: com.carto.core.MapPos, param1: com.carto.vectorelements.VectorElementVector): com.carto.vectorelements.VectorElement;
                    public setShape(param0: string): void;
                    public setUseNativeBuilder(param0: boolean): void;
                    public setSize(param0: number): void;
                    public constructor();
                    public nativeBuildClusterElement(param0: com.carto.core.MapPos, param1: com.carto.vectorelements.VectorElementVector): com.carto.vectorelements.VectorElement;
                    public buildClusterElement(param0: com.carto.core.MapPos, param1: number): com.carto.vectorelements.VectorElement;
                    public setInterface(param0: AKClusterElementBuilder.Interface): void;
                    public constructor(param0: number, param1: boolean);
                    public setBitmap(param0: globalAndroid.graphics.Bitmap): void;
                    public setColor(param0: com.carto.graphics.Color): void;
                }
                export namespace AKClusterElementBuilder {
                    export class Interface extends java.lang.Object {
                        public static class: java.lang.Class<Interface>;
                        /**
                         * Constructs a new instance of the com.akylas.carto.additions.AKClusterElementBuilder$Interface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            buildClusterElement(param0: com.carto.core.MapPos, param1: com.carto.vectorelements.VectorElementVector): com.carto.vectorelements.VectorElement;
                        });
                        public constructor();
                        public buildClusterElement(param0: com.carto.core.MapPos, param1: com.carto.vectorelements.VectorElementVector): com.carto.vectorelements.VectorElement;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class AKDirAssetPackage extends com.carto.utils.AssetPackage {
                    public static class: java.lang.Class<AKDirAssetPackage>;
                    public constructor();
                    public loadAsset(param0: string): com.carto.core.BinaryData;
                    public getAssetNames(): com.carto.core.StringVector;
                    public constructor(param0: globalAndroid.content.Context, param1: string);
                    public constructor(param0: number, param1: boolean);
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class AKFeatureCollectionSearchService extends com.carto.search.FeatureCollectionSearchService {
                    public static class: java.lang.Class<AKFeatureCollectionSearchService>;
                    public constructor(param0: com.carto.projections.Projection, param1: com.carto.geometry.FeatureCollection);
                    public constructor(param0: number, param1: boolean);
                    public findFeaturesCallback(param0: com.carto.search.SearchRequest, param1: FeatureCollectionSearchServiceCallback): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class AKGeocodingService extends com.carto.geocoding.GeocodingService {
                    public static class: java.lang.Class<AKGeocodingService>;
                    public calculateAddressCallback(param0: com.carto.geocoding.GeocodingRequest, param1: GeocodingServiceAddressCallback): void;
                    public constructor();
                    public constructor(param0: number, param1: boolean);
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class AKGeocodingServiceAdditions extends java.lang.Object {
                    public static class: java.lang.Class<AKGeocodingServiceAdditions>;
                    public static calculateAddress(
                        param0: com.carto.geocoding.ReverseGeocodingService,
                        param1: com.carto.geocoding.ReverseGeocodingRequest,
                        param2: GeocodingServiceAddressCallback
                    ): void;
                    public constructor();
                    public static calculateAddress(
                        param0: com.carto.geocoding.GeocodingService,
                        param1: com.carto.geocoding.GeocodingRequest,
                        param2: GeocodingServiceAddressCallback
                    ): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class AKHillshadeRasterTileLayer extends com.carto.layers.HillshadeRasterTileLayer {
                    public static class: java.lang.Class<AKHillshadeRasterTileLayer>;
                    public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.rastertiles.ElevationDecoder);
                    public getElevationCallback(param0: com.carto.core.MapPos, param1: AKHillshadeRasterTileLayer.ElevationCallback): void;
                    public constructor(param0: com.carto.datasources.TileDataSource);
                    public getElevationsCallback(param0: com.carto.core.MapPosVector, param1: AKHillshadeRasterTileLayer.ElevationsCallback): void;
                    public constructor(param0: number, param1: boolean);
                }
                export namespace AKHillshadeRasterTileLayer {
                    export class ElevationCallback extends java.lang.Object {
                        public static class: java.lang.Class<ElevationCallback>;
                        /**
                         * Constructs a new instance of the com.akylas.carto.additions.AKHillshadeRasterTileLayer$ElevationCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { onElevation(param0: java.lang.Exception, param1: java.lang.Integer): void });
                        public constructor();
                        public onElevation(param0: java.lang.Exception, param1: java.lang.Integer): void;
                    }
                    export class ElevationsCallback extends java.lang.Object {
                        public static class: java.lang.Class<ElevationsCallback>;
                        /**
                         * Constructs a new instance of the com.akylas.carto.additions.AKHillshadeRasterTileLayer$ElevationsCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { onElevations(param0: java.lang.Exception, param1: com.carto.core.IntVector): void });
                        public constructor();
                        public onElevations(param0: java.lang.Exception, param1: com.carto.core.IntVector): void;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class AKLicenseManager extends java.lang.Object {
                    public static class: java.lang.Class<AKLicenseManager>;
                    public static registerLicenseCallback(param0: string, param1: globalAndroid.content.Context, param2: RegisterLicenseCallback): void;
                    public constructor();
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class AKMBTilesTileDataSource extends com.carto.datasources.MBTilesTileDataSource {
                    public static class: java.lang.Class<AKMBTilesTileDataSource>;
                    public mTileSizePixels: number;
                    public mEnableSSL: boolean;
                    public mDpi: number;
                    public mShowTileAfterMaxZoom: boolean;
                    public mShowTileBeforeMaxZoom: boolean;
                    public mMinimumZoomLevel: number;
                    public mMaximumZoomLevel: number;
                    public shouldMergeIfNull: boolean;
                    public getMetaData(): com.carto.core.StringMap;
                    public setTileSize(param0: number): AKMBTilesTileDataSource;
                    public getMinZoom(): number;
                    public getMaximumZoomLevel(): number;
                    public getCenterZoom(): number;
                    public constructor(param0: string);
                    public constructor(param0: number, param1: number, param2: string, param3: com.carto.datasources.MBTilesScheme);
                    public setShowTileAfterMaxZoom(param0: boolean): AKMBTilesTileDataSource;
                    public getDpi(): number;
                    public actualLoadTile(param0: com.carto.core.MapTile): com.carto.datasources.components.TileData;
                    public setAutoHD(param0: boolean): AKMBTilesTileDataSource;
                    public constructor(param0: number, param1: boolean);
                    public setMinimumZoomLevel(param0: number): AKMBTilesTileDataSource;
                    public getMaxZoom(): number;
                    public getTileFromNextZoomLevel(param0: com.carto.core.MapTile, param1: number, param2: number, param3: number): com.carto.datasources.components.TileData;
                    public setDpi(param0: number): AKMBTilesTileDataSource;
                    public constructor();
                    public loadTile(param0: com.carto.core.MapTile): com.carto.datasources.components.TileData;
                    public getMinimumZoomLevel(): number;
                    public setMaximumZoomLevel(param0: number): AKMBTilesTileDataSource;
                    public mergeTileDatas(param0: native.Array<com.carto.datasources.components.TileData>): com.carto.datasources.components.TileData;
                    public constructor(param0: number, param1: number, param2: string);
                    public constructor(param0: number, param1: number);
                    public getTileSizePixels(): number;
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class AKMapBoxOnlineGeocodingService extends com.carto.geocoding.MapBoxOnlineGeocodingService {
                    public static class: java.lang.Class<AKMapBoxOnlineGeocodingService>;
                    public calculateAddressCallback(param0: com.carto.geocoding.GeocodingRequest, param1: GeocodingServiceAddressCallback): void;
                    public constructor(param0: string);
                    public constructor();
                    public constructor(param0: number, param1: boolean);
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class AKMapBoxOnlineReverseGeocodingService extends com.carto.geocoding.MapBoxOnlineReverseGeocodingService {
                    public static class: java.lang.Class<AKMapBoxOnlineReverseGeocodingService>;
                    public constructor(param0: string);
                    public constructor();
                    public calculateAddressCallback(param0: com.carto.geocoding.ReverseGeocodingRequest, param1: GeocodingServiceAddressCallback): void;
                    public constructor(param0: number, param1: boolean);
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class AKMapEventListener extends java.lang.Object {
                    public static class: java.lang.Class<AKMapEventListener>;
                    /**
                     * Constructs a new instance of the com.akylas.carto.additions.AKMapEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        onMapMoved(param0: boolean): void;
                        onMapIdle(): void;
                        onMapStable(param0: boolean): void;
                        onMapClicked(param0: com.carto.ui.MapClickInfo): void;
                    });
                    public constructor();
                    public onMapMoved(param0: boolean): void;
                    public onMapIdle(): void;
                    public onMapStable(param0: boolean): void;
                    public onMapClicked(param0: com.carto.ui.MapClickInfo): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class AKMapView extends com.carto.ui.MapView {
                    public static class: java.lang.Class<AKMapView>;
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
                    public setMapEventListener(param0: com.carto.ui.MapEventListener): void;
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
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class AKOSMOfflineGeocodingService extends com.carto.geocoding.OSMOfflineGeocodingService {
                    public static class: java.lang.Class<AKOSMOfflineGeocodingService>;
                    public calculateAddressCallback(param0: com.carto.geocoding.GeocodingRequest, param1: GeocodingServiceAddressCallback): void;
                    public constructor(param0: string);
                    public constructor();
                    public constructor(param0: number, param1: boolean);
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class AKOSMOfflineReverseGeocodingService extends com.carto.geocoding.OSMOfflineReverseGeocodingService {
                    public static class: java.lang.Class<AKOSMOfflineReverseGeocodingService>;
                    public constructor(param0: string);
                    public constructor();
                    public calculateAddressCallback(param0: com.carto.geocoding.ReverseGeocodingRequest, param1: GeocodingServiceAddressCallback): void;
                    public constructor(param0: number, param1: boolean);
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class AKOSRMOfflineRoutingService extends com.carto.routing.OSRMOfflineRoutingService {
                    public static class: java.lang.Class<AKOSRMOfflineRoutingService>;
                    public calculateRouteCallback(param0: com.carto.routing.RoutingRequest, param1: RoutingServiceRouteCallback): void;
                    public constructor(param0: string);
                    public constructor();
                    public constructor(param0: number, param1: boolean);
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class AKPackageManagerGeocodingService extends com.carto.geocoding.PackageManagerGeocodingService {
                    public static class: java.lang.Class<AKPackageManagerGeocodingService>;
                    public calculateAddressCallback(param0: com.carto.geocoding.GeocodingRequest, param1: GeocodingServiceAddressCallback): void;
                    public constructor(param0: com.carto.packagemanager.PackageManager);
                    public constructor();
                    public constructor(param0: number, param1: boolean);
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class AKPackageManagerListener extends com.carto.packagemanager.PackageManagerListener {
                    public static class: java.lang.Class<AKPackageManagerListener>;
                    public onPackageFailed(param0: string, param1: number, param2: com.carto.packagemanager.PackageErrorType): void;
                    public onPackageListUpdated(): void;
                    public onStyleFailed(param0: string): void;
                    public constructor();
                    public onPackageUpdated(param0: string, param1: number): void;
                    public onPackageStatusChanged(param0: string, param1: number, param2: com.carto.packagemanager.PackageStatus): void;
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
                         * Constructs a new instance of the com.akylas.carto.additions.AKPackageManagerListener$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            onPackageCancelled(param0: string, param1: number): void;
                            onPackageFailed(param0: string, param1: number, param2: com.carto.packagemanager.PackageErrorType): void;
                            onPackageListFailed(): void;
                            onPackageListUpdated(): void;
                            onPackageStatusChanged(param0: string, param1: number, param2: com.carto.packagemanager.PackageStatus): void;
                            onPackageUpdated(param0: string, param1: number): void;
                            onStyleFailed(param0: string): void;
                            onStyleUpdated(param0: string): void;
                        });
                        public constructor();
                        public onPackageUpdated(param0: string, param1: number): void;
                        public onStyleFailed(param0: string): void;
                        public onPackageListFailed(): void;
                        public onPackageCancelled(param0: string, param1: number): void;
                        public onPackageStatusChanged(param0: string, param1: number, param2: com.carto.packagemanager.PackageStatus): void;
                        public onPackageFailed(param0: string, param1: number, param2: com.carto.packagemanager.PackageErrorType): void;
                        public onStyleUpdated(param0: string): void;
                        public onPackageListUpdated(): void;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class AKPackageManagerReverseGeocodingService extends com.carto.geocoding.PackageManagerReverseGeocodingService {
                    public static class: java.lang.Class<AKPackageManagerReverseGeocodingService>;
                    public constructor(param0: com.carto.packagemanager.PackageManager);
                    public constructor();
                    public calculateAddressCallback(param0: com.carto.geocoding.ReverseGeocodingRequest, param1: GeocodingServiceAddressCallback): void;
                    public constructor(param0: number, param1: boolean);
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class AKPackageManagerRoutingService extends com.carto.routing.PackageManagerRoutingService {
                    public static class: java.lang.Class<AKPackageManagerRoutingService>;
                    public calculateRouteCallback(param0: com.carto.routing.RoutingRequest, param1: RoutingServiceRouteCallback): void;
                    public constructor(param0: com.carto.packagemanager.PackageManager);
                    public constructor();
                    public constructor(param0: number, param1: boolean);
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class AKPackageManagerValhallaRoutingService extends com.carto.routing.PackageManagerValhallaRoutingService {
                    public static class: java.lang.Class<AKPackageManagerValhallaRoutingService>;
                    public matchRouteCallback(param0: com.carto.routing.RouteMatchingRequest, param1: RoutingServiceRouteMatchingCallback): void;
                    public calculateRouteCallback(param0: com.carto.routing.RoutingRequest, param1: RoutingServiceRouteCallback): void;
                    public constructor(param0: com.carto.packagemanager.PackageManager);
                    public constructor();
                    public constructor(param0: number, param1: boolean);
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class AKPeliasOnlineGeocodingService extends com.carto.geocoding.PeliasOnlineGeocodingService {
                    public static class: java.lang.Class<AKPeliasOnlineGeocodingService>;
                    public calculateAddressCallback(param0: com.carto.geocoding.GeocodingRequest, param1: GeocodingServiceAddressCallback): void;
                    public constructor(param0: string);
                    public constructor();
                    public constructor(param0: number, param1: boolean);
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class AKPeliasOnlineReverseGeocodingService extends com.carto.geocoding.PeliasOnlineReverseGeocodingService {
                    public static class: java.lang.Class<AKPeliasOnlineReverseGeocodingService>;
                    public constructor(param0: string);
                    public constructor();
                    public calculateAddressCallback(param0: com.carto.geocoding.ReverseGeocodingRequest, param1: GeocodingServiceAddressCallback): void;
                    public constructor(param0: number, param1: boolean);
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class AKReverseGeocodingService extends com.carto.geocoding.ReverseGeocodingService {
                    public static class: java.lang.Class<AKReverseGeocodingService>;
                    public constructor();
                    public calculateAddressCallback(param0: com.carto.geocoding.ReverseGeocodingRequest, param1: GeocodingServiceAddressCallback): void;
                    public constructor(param0: number, param1: boolean);
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class AKRoutingService extends com.carto.routing.RoutingService {
                    public static class: java.lang.Class<AKRoutingService>;
                    public calculateRouteCallback(param0: com.carto.routing.RoutingRequest, param1: RoutingServiceRouteCallback): void;
                    public constructor();
                    public constructor(param0: number, param1: boolean);
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class AKRoutingServiceAdditions extends java.lang.Object {
                    public static class: java.lang.Class<AKRoutingServiceAdditions>;
                    public constructor();
                    public static matchRoute(
                        param0: com.carto.routing.ValhallaOfflineRoutingService,
                        param1: com.carto.routing.RouteMatchingRequest,
                        param2: RoutingServiceRouteMatchingCallback
                    ): void;
                    public static matchRoute(
                        param0: com.carto.routing.PackageManagerValhallaRoutingService,
                        param1: com.carto.routing.RouteMatchingRequest,
                        param2: RoutingServiceRouteMatchingCallback
                    ): void;
                    public static calculateRoute(
                        param0: com.carto.routing.RoutingService,
                        param1: com.carto.routing.RoutingRequest,
                        param2: RoutingServiceRouteCallback
                    ): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class AKSGREOfflineRoutingService extends com.carto.routing.SGREOfflineRoutingService {
                    public static class: java.lang.Class<AKSGREOfflineRoutingService>;
                    public constructor(param0: com.carto.core.Variant, param1: com.carto.core.Variant);
                    public calculateRouteCallback(param0: com.carto.routing.RoutingRequest, param1: RoutingServiceRouteCallback): void;
                    public constructor();
                    public constructor(param0: com.carto.projections.Projection, param1: com.carto.geometry.FeatureCollection, param2: com.carto.core.Variant);
                    public constructor(param0: number, param1: boolean);
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class AKTileDownloadListener extends com.carto.datasources.TileDownloadListener {
                    public static class: java.lang.Class<AKTileDownloadListener>;
                    public onDownloadStarting(param0: number): void;
                    public constructor(param0: AKTileDownloadListener.Listener);
                    public constructor();
                    public onDownloadFailed(param0: com.carto.core.MapTile): void;
                    public onDownloadProgress(param0: number): void;
                    public onDownloadCompleted(): void;
                    public setListener(param0: AKTileDownloadListener.Listener): void;
                    public constructor(param0: number, param1: boolean);
                }
                export namespace AKTileDownloadListener {
                    export class Listener extends java.lang.Object {
                        public static class: java.lang.Class<Listener>;
                        /**
                         * Constructs a new instance of the com.akylas.carto.additions.AKTileDownloadListener$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            onDownloadCompleted(): void;
                            onDownloadFailed(param0: com.carto.core.MapTile): void;
                            onDownloadProgress(param0: number): void;
                            onDownloadStarting(param0: number): void;
                        });
                        public constructor();
                        public onDownloadCompleted(): void;
                        public onDownloadStarting(param0: number): void;
                        public onDownloadFailed(param0: com.carto.core.MapTile): void;
                        public onDownloadProgress(param0: number): void;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class AKTomTomOnlineGeocodingService extends com.carto.geocoding.TomTomOnlineGeocodingService {
                    public static class: java.lang.Class<AKTomTomOnlineGeocodingService>;
                    public calculateAddressCallback(param0: com.carto.geocoding.GeocodingRequest, param1: GeocodingServiceAddressCallback): void;
                    public constructor(param0: string);
                    public constructor();
                    public constructor(param0: number, param1: boolean);
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class AKTomTomOnlineReverseGeocodingService extends com.carto.geocoding.TomTomOnlineReverseGeocodingService {
                    public static class: java.lang.Class<AKTomTomOnlineReverseGeocodingService>;
                    public constructor(param0: string);
                    public constructor();
                    public calculateAddressCallback(param0: com.carto.geocoding.ReverseGeocodingRequest, param1: GeocodingServiceAddressCallback): void;
                    public constructor(param0: number, param1: boolean);
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class AKValhallaOfflineRoutingService extends com.carto.routing.ValhallaOfflineRoutingService {
                    public static class: java.lang.Class<AKValhallaOfflineRoutingService>;
                    public matchRouteCallback(param0: com.carto.routing.RouteMatchingRequest, param1: RoutingServiceRouteMatchingCallback): void;
                    public calculateRouteCallback(param0: com.carto.routing.RoutingRequest, param1: RoutingServiceRouteCallback): void;
                    public constructor(param0: string);
                    public constructor();
                    public constructor(param0: number, param1: boolean);
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class AKValhallaOnlineRoutingService extends com.carto.routing.ValhallaOnlineRoutingService {
                    public static class: java.lang.Class<AKValhallaOnlineRoutingService>;
                    public calculateRouteCallback(param0: com.carto.routing.RoutingRequest, param1: RoutingServiceRouteCallback): void;
                    public constructor(param0: string);
                    public constructor();
                    public constructor(param0: number, param1: boolean);
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class AKVectorEditEventListener extends com.carto.layers.VectorEditEventListener {
                    public static class: java.lang.Class<AKVectorEditEventListener>;
                    public setListener(param0: AKVectorEditEventListener.Listener): void;
                    public onElementModify(param0: com.carto.vectorelements.VectorElement, param1: com.carto.geometry.Geometry): void;
                    public onElementDelete(param0: com.carto.vectorelements.VectorElement): void;
                    public constructor();
                    public onElementSelect(param0: com.carto.vectorelements.VectorElement): boolean;
                    public onDragMove(param0: com.carto.ui.VectorElementDragInfo): com.carto.layers.VectorElementDragResult;
                    public onElementDeselected(param0: com.carto.vectorelements.VectorElement): void;
                    public onDragStart(param0: com.carto.ui.VectorElementDragInfo): com.carto.layers.VectorElementDragResult;
                    public onDragEnd(param0: com.carto.ui.VectorElementDragInfo): com.carto.layers.VectorElementDragResult;
                    public onSelectDragPointStyle(param0: com.carto.vectorelements.VectorElement, param1: com.carto.layers.VectorElementDragPointStyle): com.carto.styles.PointStyle;
                    public constructor(param0: AKVectorEditEventListener.Listener);
                    public constructor(param0: number, param1: boolean);
                }
                export namespace AKVectorEditEventListener {
                    export class Listener extends java.lang.Object {
                        public static class: java.lang.Class<Listener>;
                        /**
                         * Constructs a new instance of the com.akylas.carto.additions.AKVectorEditEventListener$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            onElementSelect(param0: com.carto.vectorelements.VectorElement): boolean;
                            onSelectDragPointStyle(param0: com.carto.vectorelements.VectorElement, param1: com.carto.layers.VectorElementDragPointStyle): com.carto.styles.PointStyle;
                            onDragEnd(param0: com.carto.ui.VectorElementDragInfo): com.carto.layers.VectorElementDragResult;
                            onDragMove(param0: com.carto.ui.VectorElementDragInfo): com.carto.layers.VectorElementDragResult;
                            onDragStart(param0: com.carto.ui.VectorElementDragInfo): com.carto.layers.VectorElementDragResult;
                            onElementDelete(param0: com.carto.vectorelements.VectorElement): void;
                            onElementDeselected(param0: com.carto.vectorelements.VectorElement): void;
                            onElementModify(param0: com.carto.vectorelements.VectorElement, param1: com.carto.geometry.Geometry): void;
                        });
                        public constructor();
                        public onDragStart(param0: com.carto.ui.VectorElementDragInfo): com.carto.layers.VectorElementDragResult;
                        public onSelectDragPointStyle(param0: com.carto.vectorelements.VectorElement, param1: com.carto.layers.VectorElementDragPointStyle): com.carto.styles.PointStyle;
                        public onDragEnd(param0: com.carto.ui.VectorElementDragInfo): com.carto.layers.VectorElementDragResult;
                        public onElementDelete(param0: com.carto.vectorelements.VectorElement): void;
                        public onDragMove(param0: com.carto.ui.VectorElementDragInfo): com.carto.layers.VectorElementDragResult;
                        public onElementSelect(param0: com.carto.vectorelements.VectorElement): boolean;
                        public onElementModify(param0: com.carto.vectorelements.VectorElement, param1: com.carto.geometry.Geometry): void;
                        public onElementDeselected(param0: com.carto.vectorelements.VectorElement): void;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class AKVectorElementEventListener extends com.carto.layers.VectorElementEventListener {
                    public static class: java.lang.Class<AKVectorElementEventListener>;
                    public constructor();
                    public setListener(param0: AKVectorElementEventListener.Listener): void;
                    public onVectorElementClicked(param0: com.carto.ui.VectorElementClickInfo): boolean;
                    public constructor(param0: AKVectorElementEventListener.Listener);
                    public constructor(param0: number, param1: boolean);
                }
                export namespace AKVectorElementEventListener {
                    export class Listener extends java.lang.Object {
                        public static class: java.lang.Class<Listener>;
                        /**
                         * Constructs a new instance of the com.akylas.carto.additions.AKVectorElementEventListener$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { onVectorElementClicked(param0: com.carto.ui.VectorElementClickInfo): boolean });
                        public constructor();
                        public onVectorElementClicked(param0: com.carto.ui.VectorElementClickInfo): boolean;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class AKVectorTileEventListener extends com.carto.layers.VectorTileEventListener {
                    public static class: java.lang.Class<AKVectorTileEventListener>;
                    public setListener(param0: AKVectorTileEventListener.Listener): void;
                    public constructor();
                    public constructor(param0: AKVectorTileEventListener.Listener);
                    public constructor(param0: number, param1: boolean);
                    public onVectorTileClicked(param0: com.carto.ui.VectorTileClickInfo): boolean;
                }
                export namespace AKVectorTileEventListener {
                    export class Listener extends java.lang.Object {
                        public static class: java.lang.Class<Listener>;
                        /**
                         * Constructs a new instance of the com.akylas.carto.additions.AKVectorTileEventListener$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { onVectorTileClicked(param0: com.carto.ui.VectorTileClickInfo): boolean });
                        public constructor();
                        public onVectorTileClicked(param0: com.carto.ui.VectorTileClickInfo): boolean;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class AKVectorTileSearchService extends com.carto.search.VectorTileSearchService {
                    public static class: java.lang.Class<AKVectorTileSearchService>;
                    public findFeaturesCallback(param0: com.carto.search.SearchRequest, param1: VectorTileSearchServiceCallback): void;
                    public constructor(param0: com.carto.datasources.TileDataSource, param1: com.carto.vectortiles.VectorTileDecoder);
                    public constructor(param0: number, param1: boolean);
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class AssetPackage extends com.carto.utils.AssetPackage {
                    public static class: java.lang.Class<AssetPackage>;
                    public constructor();
                    public constructor(param0: number, param1: boolean);
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
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
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class FeatureCollectionSearchServiceCallback extends java.lang.Object {
                    public static class: java.lang.Class<FeatureCollectionSearchServiceCallback>;
                    /**
                     * Constructs a new instance of the com.akylas.carto.additions.FeatureCollectionSearchServiceCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { onFindFeatures(param0: com.carto.geometry.FeatureCollection): void });
                    public constructor();
                    public onFindFeatures(param0: com.carto.geometry.FeatureCollection): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class GeocodingServiceAddressCallback extends java.lang.Object {
                    public static class: java.lang.Class<GeocodingServiceAddressCallback>;
                    /**
                     * Constructs a new instance of the com.akylas.carto.additions.GeocodingServiceAddressCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { onGeoCodingResult(param0: java.lang.Exception, param1: com.carto.geocoding.GeocodingResultVector): void });
                    public constructor();
                    public onGeoCodingResult(param0: java.lang.Exception, param1: com.carto.geocoding.GeocodingResultVector): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class RegisterLicenseCallback extends java.lang.Object {
                    public static class: java.lang.Class<RegisterLicenseCallback>;
                    /**
                     * Constructs a new instance of the com.akylas.carto.additions.RegisterLicenseCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { onLicenseRegistered(param0: java.lang.Boolean): void });
                    public constructor();
                    public onLicenseRegistered(param0: java.lang.Boolean): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class RendererCaptureListener extends com.carto.renderers.RendererCaptureListener {
                    public static class: java.lang.Class<RendererCaptureListener>;
                    public constructor();
                    public constructor(param0: RendererCaptureListener.Listener);
                    public onMapRendered(param0: com.carto.graphics.Bitmap): void;
                    public constructor(param0: number, param1: boolean);
                    public setListener(param0: RendererCaptureListener.Listener): void;
                }
                export namespace RendererCaptureListener {
                    export class Listener extends java.lang.Object {
                        public static class: java.lang.Class<Listener>;
                        /**
                         * Constructs a new instance of the com.akylas.carto.additions.RendererCaptureListener$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: { onMapRendered(param0: com.carto.graphics.Bitmap): void });
                        public constructor();
                        public onMapRendered(param0: com.carto.graphics.Bitmap): void;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class RoutingServiceRouteCallback extends java.lang.Object {
                    public static class: java.lang.Class<RoutingServiceRouteCallback>;
                    /**
                     * Constructs a new instance of the com.akylas.carto.additions.RoutingServiceRouteCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { onRoutingResult(param0: java.lang.Exception, param1: com.carto.routing.RoutingResult): void });
                    public constructor();
                    public onRoutingResult(param0: java.lang.Exception, param1: com.carto.routing.RoutingResult): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class RoutingServiceRouteMatchingCallback extends java.lang.Object {
                    public static class: java.lang.Class<RoutingServiceRouteMatchingCallback>;
                    /**
                     * Constructs a new instance of the com.akylas.carto.additions.RoutingServiceRouteMatchingCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { onRouteMatchingResult(param0: java.lang.Exception, param1: com.carto.routing.RouteMatchingResult): void });
                    public constructor();
                    public onRouteMatchingResult(param0: java.lang.Exception, param1: com.carto.routing.RouteMatchingResult): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class ServerPackagesCallback extends java.lang.Object {
                    public static class: java.lang.Class<ServerPackagesCallback>;
                    /**
                     * Constructs a new instance of the com.akylas.carto.additions.ServerPackagesCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { onServerPackages(param0: com.carto.packagemanager.PackageInfoVector): void });
                    public constructor();
                    public onServerPackages(param0: com.carto.packagemanager.PackageInfoVector): void;
                }
            }
        }
    }
}

declare namespace com {
    export namespace akylas {
        export namespace carto {
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
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class VectorTileSearchServiceCallback extends java.lang.Object {
                    public static class: java.lang.Class<VectorTileSearchServiceCallback>;
                    /**
                     * Constructs a new instance of the com.akylas.carto.additions.VectorTileSearchServiceCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { onFindFeatures(param0: com.carto.geometry.VectorTileFeatureCollection): void });
                    public constructor();
                    public onFindFeatures(param0: com.carto.geometry.VectorTileFeatureCollection): void;
                }
            }
        }
    }
}

//Generics information:
