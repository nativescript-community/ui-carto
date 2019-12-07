import { BaseNative } from '..';
import { VectorTileLayer } from '../layers/vector';
import { TileDataSource } from '../datasources';
import { VectorTileDecoder } from '../vectortiles';
import { Projection } from '../projections';
import { Geometry } from '../geometry';
import { Feature, FeatureCollection, VectorTileFeatureCollection } from '../geometry/feature';
import { MapPos } from '../core';

export interface SearchRequest {
    projection?: Projection;
    regexFilter?: string;
    filterExpression?: string;
    searchRadius?: number;
    geometry?: Geometry;
    position?: MapPos;
}

export interface SearchServiceOptions {
    // metaData?: { [k: string]: string };
}

export interface VectorTileSearchServiceOptions extends SearchServiceOptions {
    // metaData?: { [k: string]: string };
    layer?: VectorTileLayer;
    dataSource?: TileDataSource<any, any>;
    decoder?: VectorTileDecoder;
    minZoom?: number;
    maxZoom?: number;
}

// export abstract class BaseSearchService<T, U extends SearchServiceOptions> extends BaseNative<T, U> {}

export class VectorTileSearchService extends BaseNative<any, VectorTileSearchServiceOptions> {
    minZoom?: number;
    maxZoom?: number;
    findFeatures(options: SearchRequest, callback?: (res: VectorTileFeatureCollection) => void): VectorTileFeatureCollection;
}

export interface FeatureCollectionSearchServiceOptions {
    projection: Projection;
    features: FeatureCollection
}
export class FeatureCollectionSearchService<U extends FeatureCollectionSearchServiceOptions>   extends BaseNative<any, U> {
    findFeatures(options: SearchRequest, callback?: (res: FeatureCollection) => void): FeatureCollection;
}