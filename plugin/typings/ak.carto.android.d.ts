/// <reference path="./carto.android.d.ts" />

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
                export class ServerPackagesCallback {
                    constructor(impl?: { onServerPackages: (result: com.carto.packagemanager.PackageInfoVector) => void });
                    onServerPackages (result: com.carto.packagemanager.PackageInfoVector);
                }
                export class AKCartoPackageManager extends com.carto.packagemanager.CartoPackageManager {
                    getServerPackagesCallback(callback: com.akylas.carto.additions.ServerPackagesCallback);
                    getLocalPackagesCallback(callback: com.akylas.carto.additions.ServerPackagesCallback);
                }
                export class VectorTileSearchServiceCallback {
                    constructor(impl?: { onFindFeatures: (result: com.carto.geometry.VectorTileFeatureCollection) => void });
                    onFindFeatures (result: com.carto.geometry.VectorTileFeatureCollection);
                }
                export class AKVectorTileSearchService extends com.carto.search.VectorTileSearchService {
                    findFeaturesCallback(request: com.carto.search.SearchRequest, callback: com.akylas.carto.additions.VectorTileSearchServiceCallback);
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
                export class AKMapView extends com.carto.ui.MapView {
                    onMapClicked(mapClickInfo: com.carto.ui.MapClickInfo);
                    onMapMoved();
                    onMapIdle();
                    onMapStable();
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
            }
        }
    }
}
