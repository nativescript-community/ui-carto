import { SearchRequest, VectorTileSearchServiceOptions } from './search';
import { BaseNative } from '../carto.common';
import { VectorTileFeatureCollection } from '../geometry/feature';
export declare class VectorTileSearchService extends BaseNative<com.akylas.carto.additions.AKVectorTileSearchService, VectorTileSearchServiceOptions> {
    minZoom: number;
    maxZoom: number;
    createNative(options: VectorTileSearchServiceOptions): com.akylas.carto.additions.AKVectorTileSearchService;
    findFeatures(options: SearchRequest, callback?: (res: VectorTileFeatureCollection) => void): VectorTileFeatureCollection;
}
