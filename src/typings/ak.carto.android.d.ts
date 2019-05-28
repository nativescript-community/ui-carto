/// <reference path="./carto.android.d.ts" />

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class AssetPackage extends com.carto.utils.AssetPackage {
                    
                }
                export class ServerPackagesCallback {
                    constructor(impl?: { onServerPackages: (result: com.carto.packagemanager.PackageInfoVector) => void });
                    onServerPackages(result: com.carto.packagemanager.PackageInfoVector);
                }
                export class AKCartoPackageManager extends com.carto.packagemanager.CartoPackageManager {
                    getServerPackagesCallback(callback: com.akylas.carto.additions.ServerPackagesCallback);
                    getLocalPackagesCallback(callback: com.akylas.carto.additions.ServerPackagesCallback);
                }
                export class VectorTileSearchServiceCallback {
                    constructor(impl?: { onFindFeatures: (result: com.carto.geometry.VectorTileFeatureCollection) => void });
                    onFindFeatures(result: com.carto.geometry.VectorTileFeatureCollection);
                }
                export class AKVectorTileSearchService extends com.carto.search.VectorTileSearchService {
                    findFeaturesCallback(request: com.carto.search.SearchRequest, callback: com.akylas.carto.additions.VectorTileSearchServiceCallback);
                }
                export class FeatureCollectionSearchServiceCallback {
                    constructor(impl?: { onFindFeatures: (result: com.carto.geometry.FeatureCollection) => void });
                    onFindFeatures(result: com.carto.geometry.FeatureCollection);
                }
                export class AKFeatureCollectionSearchService extends com.carto.search.FeatureCollectionSearchService {
                    findFeaturesCallback(request: com.carto.search.SearchRequest, callback: com.akylas.carto.additions.FeatureCollectionSearchServiceCallback);
                }
                export class AKHTTPTileDataSource extends com.carto.datasources.HTTPTileDataSource {
                    setAutoHD(value: boolean): this;
                }
                export class AKOrderedDataSource extends com.carto.datasources.TileDataSource {
                    constructor(dataSources: native.Array<com.carto.datasources.TileDataSource>);
                }
                export class AKMergeTileDataSource extends com.carto.datasources.TileDataSource {
                    constructor(dataSources: native.Array<com.carto.datasources.TileDataSource>);
                }
                export class AKMBTilesTileDataSource extends com.carto.datasources.MBTilesTileDataSource {}
                export class RegisterLicenseCallback {
                    constructor(impl?: { onLicenseRegistered: (result: boolean) => void });
                    onLicenseRegistered(result: boolean);
                }
                export class AKLicenseManager {
                    static registerLicenseCallback(key: string, context: globalAndroid.content.Context, callback: RegisterLicenseCallback);
                }
                export class AKMapView extends com.carto.ui.MapView {
                    onMapClicked(mapClickInfo: com.carto.ui.MapClickInfo);
                    onMapMoved(userAction: boolean);
                    onMapIdle();
                    onMapStable(userAction: boolean);
                }

                export class AKVectorTileEventListener extends com.carto.layers.VectorTileEventListener {
                    onClicked(info: com.carto.ui.VectorTileClickInfo): boolean;
                }
                export class AKVectorElementEventListener extends com.carto.layers.VectorElementEventListener {
                    onClicked(info: com.carto.ui.VectorElementClickInfo): boolean;
                }
                export class AKClusterElementBuilder extends com.carto.layers.ClusterElementBuilder {
                    buildCluster(position: com.carto.core.MapPos, nElements: com.carto.vectorelements.VectorElementVector): com.carto.vectorelements.VectorElement;
                    setUseNativeBuilder(value: boolean);
                    setBitmap(bitmap: any);
                }

                export class RoutingServiceRouteCallback {
                    constructor(impl?: { onRoutingResult: (err: Error, result: com.carto.routing.RoutingResult) => void });
                    namespace(err: Error, result: com.carto.routing.RoutingResult);
                }
                export class RoutingServiceRouteMatchingCallback {
                    constructor(impl?: { onRouteMatchingResult: (err: Error, result: com.carto.routing.RouteMatchingResult) => void });
                    namespace(err: Error, result: com.carto.routing.RouteMatchingResult);
                }
                export class AKRoutingService extends com.carto.routing.RoutingService {
                    calculateRouteCallback(request: com.carto.routing.RoutingRequest, callback: com.akylas.carto.additions.RoutingServiceRouteCallback);
                }
                export class AKPackageManagerRoutingService extends com.carto.routing.PackageManagerRoutingService {
                    calculateRouteCallback(request: com.carto.routing.RoutingRequest, callback: com.akylas.carto.additions.RoutingServiceRouteCallback);
                }
                export class AKCartoOnlineRoutingService extends com.carto.routing.CartoOnlineRoutingService {
                    calculateRouteCallback(request: com.carto.routing.RoutingRequest, callback: com.akylas.carto.additions.RoutingServiceRouteCallback);
                }
                export class AKSGREOfflineRoutingService extends com.carto.routing.SGREOfflineRoutingService {
                    calculateRouteCallback(request: com.carto.routing.RoutingRequest, callback: com.akylas.carto.additions.RoutingServiceRouteCallback);
                }

                export class AKOSRMOfflineRoutingService extends com.carto.routing.OSRMOfflineRoutingService {
                    calculateRouteCallback(request: com.carto.routing.RoutingRequest, callback: com.akylas.carto.additions.RoutingServiceRouteCallback);
                }
                export class AKPackageManagerValhallaRoutingService extends com.carto.routing.PackageManagerValhallaRoutingService {
                    calculateRouteCallback(request: com.carto.routing.RoutingRequest, callback: com.akylas.carto.additions.RoutingServiceRouteCallback);
                    matchRouteCallback(request: com.carto.routing.RouteMatchingRequest, callback: com.akylas.carto.additions.RoutingServiceRouteMatchingCallback);
                }
                export class AKValhallaOnlineRoutingService extends com.carto.routing.ValhallaOnlineRoutingService {
                    calculateRouteCallback(request: com.carto.routing.RoutingRequest, callback: com.akylas.carto.additions.RoutingServiceRouteCallback);
                }

                export class AKValhallaOfflineRoutingService extends com.carto.routing.ValhallaOfflineRoutingService {
                    calculateRouteCallback(request: com.carto.routing.RoutingRequest, callback: com.akylas.carto.additions.RoutingServiceRouteCallback);
                    matchRouteCallback(request: com.carto.routing.RouteMatchingRequest, callback: com.akylas.carto.additions.RoutingServiceRouteMatchingCallback);
                }

                export class GeocodingServiceAddressCallback {
                    constructor(impl?: { onGeoCodingResult: (err: Error, result: com.carto.geocoding.GeocodingResultVector) => void });
                    onGeoCodingResult(err: Error, result: com.carto.geocoding.GeocodingResultVector);
                }
                export class AKGeocodingService extends com.carto.geocoding.GeocodingService {
                    calculateAddressCallback(request: com.carto.geocoding.GeocodingRequest, callback: com.akylas.carto.additions.GeocodingServiceAddressCallback);
                }
                export class AKPackageManagerGeocodingService extends com.carto.geocoding.PackageManagerGeocodingService {
                    calculateAddressCallback(request: com.carto.geocoding.GeocodingRequest, callback: com.akylas.carto.additions.GeocodingServiceAddressCallback);
                }
                export class AKPeliasOnlineGeocodingService extends com.carto.geocoding.PeliasOnlineGeocodingService {
                    calculateAddressCallback(request: com.carto.geocoding.GeocodingRequest, callback: com.akylas.carto.additions.GeocodingServiceAddressCallback);
                }
                export class AKMapBoxOnlineGeocodingService extends com.carto.geocoding.MapBoxOnlineGeocodingService {
                    calculateAddressCallback(request: com.carto.geocoding.GeocodingRequest, callback: com.akylas.carto.additions.GeocodingServiceAddressCallback);
                }
                export class AKTomTomOnlineGeocodingService extends com.carto.geocoding.TomTomOnlineGeocodingService {
                    calculateAddressCallback(request: com.carto.geocoding.GeocodingRequest, callback: com.akylas.carto.additions.GeocodingServiceAddressCallback);
                }
            }
        }
    }
}
