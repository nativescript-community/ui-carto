import { SearchRequest, VectorTileSearchServiceOptions } from './search';
import { BaseNative } from '../carto.common';
import { VectorTileFeatureCollection } from '../geometry/feature';
export declare class VectorTileSearchService extends BaseNative<NTVectorTileSearchService, VectorTileSearchServiceOptions> {
    minZoom: number;
    maxZoom: number;
    createNative(options: VectorTileSearchServiceOptions): NTVectorTileSearchService;
    findFeatures(options: SearchRequest): VectorTileFeatureCollection;
}
