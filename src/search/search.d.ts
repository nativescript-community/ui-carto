import { BaseNative } from '../carto';
import { VectorTileLayer } from '../layers/vector';
import { TileDataSource } from '../datasources/datasource';
import { VectorTileDecoder } from '../vectortiles/vectortiles';
import { Projection } from '../projections/projection';
import { Geometry } from '../geometry/geometry';
import { Feature, FeatureCollection, VectorTileFeatureCollection } from '../geometry/feature';
import { MapPos } from '../core/core';

export interface SearchRequest {
    projection?: Projection;
    regexFilter?: string;
    filterExpression?: string;
    searchRadius?: number;
    geometry?: Geometry;
    position?: MapPos;
}

export interface SearchServiceOptions {
    // metaData?: Object;
}

export interface VectorTileSearchServiceOptions extends SearchServiceOptions {
    // metaData?: Object;
    layer?: VectorTileLayer;
    dataSource?: TileDataSource<any, any>;
    decoder?: VectorTileDecoder;
    minZoom?: number;
    maxZoom?: number;
}

// export abstract class BaseSearchService<T, U extends SearchServiceOptions> extends BaseNative<T, U> {}

export class VectorTileSearchService extends BaseNative<any, VectorTileSearchServiceOptions> {
    findFeatures(options: SearchRequest, callback?: (res: VectorTileFeatureCollection) => void): VectorTileFeatureCollection;
}
