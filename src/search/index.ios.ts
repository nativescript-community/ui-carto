import { BaseNative, nativeProperty } from '../index.common';
import { FeatureCollection, VectorTileFeatureCollection } from '../geometry/feature';
import { FeatureCollectionSearchServiceOptions, SearchRequest, VectorTileSearchServiceOptions } from '.';
import { toNativeMapPos } from '../core';
import { geometryFromArgs } from '..';

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

export class FeatureCollectionSearchService extends BaseNative<NTFeatureCollectionSearchService, FeatureCollectionSearchServiceOptions> {
    createNative(options: FeatureCollectionSearchServiceOptions) {
        return NTFeatureCollectionSearchService.alloc().initWithProjectionFeatureCollection(options.projection.getNative(), options.features.getNative());
    }
    public findFeatures(options: SearchRequest, callback?: (res: FeatureCollection) => void) {
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
            nRequest.setGeometry(geometryFromArgs(options.geometry));
        } else {
            if (options.position) {
                nRequest.setGeometry(NTPointGeometry.alloc().initWithPos(toNativeMapPos(options.position)));
            }
        }
        if (callback) {
            callback(new FeatureCollection(this.getNative().findFeatures(nRequest)));
            return null;
        } else {
            return new FeatureCollection(this.getNative().findFeatures(nRequest));
        }
    }
}
