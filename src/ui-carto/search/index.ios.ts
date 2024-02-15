import { nativeProperty } from '../index.common';
import { BaseNative } from '../BaseNative';
import { FeatureCollection, VectorTileFeatureCollection } from '../geometry/feature';
import { FeatureCollectionSearchServiceOptions, SearchRequest, VectorTileSearchServiceOptions } from '.';
import { toNativeMapPos } from '../core';
import { geometryFromArgs } from '..';

export class VectorTileSearchService extends BaseNative<AKVectorTileSearchService, VectorTileSearchServiceOptions> {
    @nativeProperty minZoom: number;
    @nativeProperty maxZoom: number;
    createNative(options: VectorTileSearchServiceOptions) {
        if (options.layer) {
            const layer = options.layer.getNative() as NTVectorTileLayer;
            return AKVectorTileSearchService.alloc().initWithDataSourceTileDecoder(layer.getDataSource(), layer.getTileDecoder());
        } else {
            return AKVectorTileSearchService.alloc().initWithDataSourceTileDecoder(options.dataSource.getNative(), options.decoder.getNative());
        }
    }
    public findFeatures(options: SearchRequest, callback?: (res: VectorTileFeatureCollection) => void) {
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
        }
        if (callback) {
            this.getNative().findFeaturesCallback(nRequest, (r)=>new VectorTileFeatureCollection(r))
        } else {
            return  new VectorTileFeatureCollection(this.getNative().findFeatures(nRequest));
        }
    }
    set layers(value: string | string[]) {
        const array = Array.isArray(value) ? value : value.split('');
        const vector = NTStringVector.alloc().init();
        for (let index = 0; index < array.length; index++) {
            vector.add(array[index]);
        }
        this.native.setLayers(vector);
    }
}

export class FeatureCollectionSearchService extends BaseNative<AKFeatureCollectionSearchService, FeatureCollectionSearchServiceOptions> {
    createNative(options: FeatureCollectionSearchServiceOptions) {
        return AKFeatureCollectionSearchService.alloc().initWithProjectionFeatureCollection(options.projection.getNative(), options.features.getNative());
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
            this.getNative().findFeaturesCallback(nRequest, (r)=>new FeatureCollection(r))
        } else {
            return  new FeatureCollection(this.getNative().findFeatures(nRequest));
        }
    }
}
