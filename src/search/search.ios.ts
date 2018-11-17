import { SearchRequest, VectorTileSearchServiceOptions } from './search';
import { BaseNative } from '../carto.common';
import { Projection } from '../projections/projection.ios';
import { TileDataSource } from '../datasources/datasource.ios';
import { VectorTileDecoder } from '../vectortiles/vectortiles.ios';
import { VectorTileFeatureCollection } from '../geometry/feature';
import { nativeProperty } from '../carto.ios';

export class VectorTileSearchService extends BaseNative<NTVectorTileSearchService, VectorTileSearchServiceOptions> {
    @nativeProperty minZoom: number;
    @nativeProperty maxZoom: number;
    createNative(options: VectorTileSearchServiceOptions) {
        if (options.layer) {
            const layer = options.layer.getNative() as NTVectorTileLayer;
            return NTVectorTileSearchService.alloc().initWithDataSourceTileDecoder(layer.getDataSource(), layer.getTileDecoder());
        } else {
            return NTVectorTileSearchService.alloc().initWithDataSourceTileDecoder((options.dataSource as TileDataSource<any, any>).getNative(), (options.decoder as VectorTileDecoder).getNative());
        }
    }
    public findFeatures(options: SearchRequest) {
        const nRequest = NTSearchRequest.alloc().init();
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
        }
        return new VectorTileFeatureCollection(this.getNative().findFeatures(nRequest));
    }
}
