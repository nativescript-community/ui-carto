import { SearchRequest, VectorTileSearchServiceOptions } from './search';
import { BaseNative } from '../carto.common';
import { Projection } from '../projections/projection.android';
import { TileDataSource } from '../datasources/datasource.android';
import { VectorTileDecoder } from '../vectortiles/vectortiles.android';
import { VectorTileFeatureCollection } from '../geometry/feature';
import { nativeProperty } from '../carto.android';
import { toNativeMapPos } from '../core/core.android';

export class VectorTileSearchService extends BaseNative<com.akylas.carto.additions.AKVectorTileSearchService, VectorTileSearchServiceOptions> {
    @nativeProperty
    minZoom: number;
    @nativeProperty
    maxZoom: number;
    createNative(options: VectorTileSearchServiceOptions) {
        if (options.layer) {
            const layer = options.layer.getNative() as com.carto.layers.VectorTileLayer;
            return new com.akylas.carto.additions.AKVectorTileSearchService(layer.getDataSource(), layer.getTileDecoder());
        } else {
            return new com.akylas.carto.additions.AKVectorTileSearchService((options.dataSource as TileDataSource<any, any>).getNative(), (options.decoder as VectorTileDecoder).getNative());
        }
    }
    public findFeatures(options: SearchRequest, callback?: (res: VectorTileFeatureCollection) => void) {
        const nRequest = new com.carto.search.SearchRequest();
        if (options.projection) {
            nRequest.setProjection((options.projection as Projection).getNative());
        }
        if (options.searchRadius !== undefined) {
            nRequest.setSearchRadius(options.searchRadius);
        }
        if (options.filterExpression !== undefined) {
            nRequest.setFilterExpression(options.filterExpression);
        }
        if (options.regexFilter !== undefined) {
            nRequest.setRegexFilter(options.regexFilter);
        }
        if (options.geometry) {
            nRequest.setGeometry(options.geometry as any);
        } else {
            if (options.position) {
                if (options.projection) {
                    nRequest.setGeometry(new com.carto.geometry.PointGeometry(options.projection.getNative().fromWgs84(toNativeMapPos(options.position))));
                } else {
                    nRequest.setGeometry(new com.carto.geometry.PointGeometry(toNativeMapPos(options.position)));
                }
            }
        }
        if (callback) {
            this.getNative().findFeaturesCallback(
                nRequest,
                new com.akylas.carto.additions.VectorTileSearchServiceCallback({
                    onFindFeatures(res) {
                        callback(new VectorTileFeatureCollection(res));
                    }
                })
            );
        }
        return new VectorTileFeatureCollection(this.getNative().findFeatures(nRequest));
    }
}
