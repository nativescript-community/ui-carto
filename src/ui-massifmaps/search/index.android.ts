import { nativeProperty, nativeStringListProperty } from '../index.common';
import { BaseNative } from '../BaseNative';
import { toNativeMapPos } from '../core';
import { FeatureCollection, VectorTileFeatureCollection } from '../geometry/feature';
import { FeatureCollectionSearchServiceOptions, SearchRequest, VectorTileSearchServiceOptions } from '.';
import { geometryFromArgs } from '..';

export class VectorTileSearchService extends BaseNative<com.nativescript.massifmaps.additions2.AKVectorTileSearchService, VectorTileSearchServiceOptions> {
    @nativeProperty minZoom: number;
    @nativeProperty maxZoom: number;
    @nativeProperty maxResults: number;
    @nativeProperty sortByDistance: boolean;
    @nativeProperty preventDuplicates: boolean;
    @nativeStringListProperty layers: string[];

    createNative(options: VectorTileSearchServiceOptions) {
        if (options.layer) {
            const layer = options.layer.getNative() as com.massifmaps.layers.VectorTileLayer;
            return new com.nativescript.massifmaps.additions2.AKVectorTileSearchService(layer.getDataSource(), layer.getTileDecoder());
        } else {
            return new com.nativescript.massifmaps.additions2.AKVectorTileSearchService(options.dataSource.getNative(), options.decoder.getNative());
        }
    }
    public findFeatures(options: SearchRequest, callback?: (res: VectorTileFeatureCollection) => void) {
        const nRequest = new com.massifmaps.search.SearchRequest();
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
            nRequest.setGeometry(new com.massifmaps.geometry.PointGeometry(toNativeMapPos(options.position)));
        }
        if (callback) {
            this.getNative().findFeaturesCallback(
                nRequest,
                new com.nativescript.massifmaps.additions2.VectorTileSearchServiceCallback({
                    onFindFeatures(res) {
                        callback(new VectorTileFeatureCollection(res));
                    }
                })
            );
            return null;
        }
        return new VectorTileFeatureCollection(this.getNative().findFeatures(nRequest));
    }
}

export class FeatureCollectionSearchService extends BaseNative<com.nativescript.massifmaps.additions2.AKFeatureCollectionSearchService, FeatureCollectionSearchServiceOptions> {
    createNative(options: FeatureCollectionSearchServiceOptions) {
        return new com.nativescript.massifmaps.additions2.AKFeatureCollectionSearchService(options.projection.getNative(), options.features.getNative());
    }
    public findFeatures(options: SearchRequest, callback?: (res: FeatureCollection) => void) {
        const nRequest = new com.massifmaps.search.SearchRequest();
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
                nRequest.setGeometry(new com.massifmaps.geometry.PointGeometry(toNativeMapPos(options.position)));
            }
        }
        if (callback) {
            this.getNative().findFeaturesCallback(
                nRequest,
                new com.nativescript.massifmaps.additions.FeatureCollectionSearchServiceCallback({
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
