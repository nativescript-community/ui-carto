import { BaseNative } from '..';
import { VectorTileLayer } from '../layers/vector';
import { TileDataSource } from '../datasources';
import { VectorTileDecoder } from '../vectortiles';
import { Projection } from '../projections';
import { Geometry } from '../geometry';
import { Feature, FeatureCollection, VectorTileFeatureCollection } from '../geometry/feature';
import { GenericMapPos, MapPos } from '../core';
import { Accessors as Acc_VectorTileSearchService, Methods as Met_VectorTileSearchService } from '../bindings/search/VectorTileSearchService';
import { Accessors as Acc_FeatureCollectionSearchService, Methods as Met_FeatureCollectionSearchService } from '../bindings/search/FeatureCollectionSearchService';

export interface SearchRequest<T = DefaultLatLonKeys> {
    projection?: Projection<T>;
    regexFilter?: string;
    filterExpression?: string;
    searchRadius?: number;
    geometry?: Geometry<T>;
    position?: GenericMapPos<T>;
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
    maxResults?: number;
    layers?: string[];
    preventDuplicates?: boolean;
    sortByDistance?: boolean;
}

// export abstract class BaseSearchService<T, U extends SearchServiceOptions> extends BaseNative<T, U> {}

export class VectorTileSearchService extends BaseNative<any, VectorTileSearchServiceOptions> {
    minZoom?: number;
    maxZoom?: number;
    layers: string[];
    preventDuplicates: boolean;
    sortByDistance: boolean;
    maxResults?: number;
    findFeatures<T = DefaultLatLonKeys>(options: SearchRequest<T>, callback?: (res: VectorTileFeatureCollection<T>) => void): VectorTileFeatureCollection<T>;
}

export interface FeatureCollectionSearchServiceOptions {
    projection: Projection;
    features: FeatureCollection;
}
export class FeatureCollectionSearchService<U extends FeatureCollectionSearchServiceOptions> extends BaseNative<any, U> {
    findFeatures<T = DefaultLatLonKeys>(options: SearchRequest<T>, callback?: (res: FeatureCollection<T>) => void): FeatureCollection<T>;
}

export interface VectorTileSearchService
    extends Omit<Acc_VectorTileSearchService, 'layers' | 'maxResults' | 'maxZoom' | 'minZoom' | 'preventDuplicates' | 'sortByDistance'>, Omit<Met_VectorTileSearchService, 'findFeatures'> {}


export interface VectorTileSearchService extends Omit<Acc_VectorTileSearchService, 'layers' | 'maxResults' | 'maxZoom' | 'minZoom' | 'preventDuplicates' | 'sortByDistance'>, Omit<Met_VectorTileSearchService, 'findFeatures'> {}

export interface FeatureCollectionSearchService<U extends FeatureCollectionSearchServiceOptions> extends Acc_FeatureCollectionSearchService, Omit<Met_FeatureCollectionSearchService, 'findFeatures'> {}
