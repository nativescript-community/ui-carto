/// <reference path="./carto.android.d.ts" />

declare namespace com {
    export namespace akylas {
        export namespace carto {
            export namespace additions {
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
                    buildCluster(pos: com.carto.core.MapPos, nElements: com.carto.vectorelements.VectorElementVector): com.carto.vectorelements.VectorElement;
                    setUseNativeBuilder(value: boolean);
                    setBitmap(bitmap: any);
                }
            }
        }
    }
}
