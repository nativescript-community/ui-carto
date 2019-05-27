import { BaseNative, nativeProperty } from '../carto.common';
import { toNativeMapPos } from '../core/core';
import { FeatureCollection, VectorTileFeatureCollection } from '../geometry/feature';
import { FeatureCollectionSearchServiceOptions, SearchRequest, VectorTileSearchServiceOptions } from './search';

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
            return new com.akylas.carto.additions.AKVectorTileSearchService(options.dataSource.getNative(), options.decoder.getNative());
        }
    }
    public findFeatures(options: SearchRequest, callback?: (res: VectorTileFeatureCollection) => void) {
        const nRequest = new com.carto.search.SearchRequest();
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
        } else {
            if (options.position) {
                nRequest.setGeometry(new com.carto.geometry.PointGeometry(toNativeMapPos(options.position)));
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

export class FeatureCollectionSearchService extends BaseNative<com.akylas.carto.additions.AKFeatureCollectionSearchService, FeatureCollectionSearchServiceOptions> {
    createNative(options: FeatureCollectionSearchServiceOptions) {
        return new com.akylas.carto.additions.AKFeatureCollectionSearchService(options.projection.getNative(), options.features.getNative());
    }
    public findFeatures(options: SearchRequest, callback?: (res: FeatureCollection) => void) {
        const nRequest = new com.carto.search.SearchRequest();
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
        } else {
            if (options.position) {
                nRequest.setGeometry(new com.carto.geometry.PointGeometry(toNativeMapPos(options.position)));
            }
        }
        if (callback) {
            this.getNative().findFeaturesCallback(
                nRequest,
                new com.akylas.carto.additions.FeatureCollectionSearchServiceCallback({
                    onFindFeatures(res) {
                        callback(new VectorTileFeatureCollection(res));
                    }
                })
            );
        }
        return new FeatureCollection(this.getNative().findFeatures(nRequest));
    }
}
