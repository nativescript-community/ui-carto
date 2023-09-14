import { nativeProperty } from '../index.common';
import { BaseNative } from '../BaseNative';
import { toNativeMapPos } from '../core';
import { FeatureCollection, VectorTileFeatureCollection } from '../geometry/feature';
import { FeatureCollectionSearchServiceOptions, SearchRequest, VectorTileSearchServiceOptions } from '.';
import { geometryFromArgs } from '..';

export class VectorTileSearchService extends BaseNative<com.akylas.carto.additions.AKVectorTileSearchService, VectorTileSearchServiceOptions> {
    @nativeProperty minZoom: number;
    @nativeProperty maxZoom: number;
    @nativeProperty sortByDistance: boolean;
    @nativeProperty preventDuplicates: boolean;
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
            nRequest.setGeometry(geometryFromArgs(options.geometry));
        } else if (options.position) {
            nRequest.setGeometry(new com.carto.geometry.PointGeometry(toNativeMapPos(options.position)));
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
            return null;
        }
        return new VectorTileFeatureCollection(this.getNative().findFeatures(nRequest));
    }

    set layers(value: string | string[]) {
        const array = Array.isArray(value) ? value : value.split('');
        const vector = new com.carto.core.StringVector();
        for (let index = 0; index < array.length; index++) {
            vector.add(array[index]);
        }
        this.native.setLayers(vector);
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
            return null;
        }
        return new FeatureCollection(this.getNative().findFeatures(nRequest));
    }
}
