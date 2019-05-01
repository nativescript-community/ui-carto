import { BaseNative, nativeProperty } from '../carto.common';
import { VectorTileFeatureCollection } from '../geometry/feature';
import { SearchRequest, VectorTileSearchServiceOptions } from './search';

export class VectorTileSearchService extends BaseNative<NTVectorTileSearchService, VectorTileSearchServiceOptions> {
    @nativeProperty minZoom: number;
    @nativeProperty maxZoom: number;
    createNative(options: VectorTileSearchServiceOptions) {
        if (options.layer) {
            const layer = options.layer.getNative() as NTVectorTileLayer;
            return NTVectorTileSearchService.alloc().initWithDataSourceTileDecoder(layer.getDataSource(), layer.getTileDecoder());
        } else {
            return NTVectorTileSearchService.alloc().initWithDataSourceTileDecoder(options.dataSource.getNative(), options.decoder.getNative());
        }
    }
    public findFeatures(options: SearchRequest) {
        const nRequest = NTSearchRequest.alloc().init();
        if (options.projection) {
            nRequest.setProjection(options.projection.getNative());
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
