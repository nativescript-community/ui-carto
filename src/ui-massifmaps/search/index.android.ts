import { nativeProperty, nativeStringListProperty } from '../index.common';
import { BaseNative } from '../BaseNative';
import { toNativeMapPos } from '../core';
import { FeatureCollection, VectorTileFeatureCollection } from '../geometry/feature';
import { FeatureCollectionSearchServiceOptions, SearchRequest, VectorTileSearchServiceOptions } from '.';
import { geometryFromArgs } from '..';
import {
    ACCESSORS as ACC_VectorTileSearchService,
    Accessors as Acc_VectorTileSearchService,
    METHODS as MET_VectorTileSearchService,
    Methods as Met_VectorTileSearchService,
    SELECTORS as SEL_VectorTileSearchService
} from '../bindings/search/VectorTileSearchService';
import { bindNative } from '../nativeclass.common';
import { stringListConverter } from '..';
import {
    ACCESSORS as ACC_FeatureCollectionSearchService,
    Accessors as Acc_FeatureCollectionSearchService,
    METHODS as MET_FeatureCollectionSearchService,
    Methods as Met_FeatureCollectionSearchService,
    SELECTORS as SEL_FeatureCollectionSearchService
} from '../bindings/search/FeatureCollectionSearchService';

export class VectorTileSearchService extends BaseNative<com.nativescript.massifmaps.additions2.VectorTileSearchService, VectorTileSearchServiceOptions> {
    createNative(options: VectorTileSearchServiceOptions) {
        if (options.layer) {
            const layer = options.layer.getNative() as com.massifmaps.layers.VectorTileLayer;
            return new com.nativescript.massifmaps.additions2.VectorTileSearchService(layer.getDataSource(), layer.getTileDecoder());
        } else {
            return new com.nativescript.massifmaps.additions2.VectorTileSearchService(options.dataSource.getNative(), options.decoder.getNative());
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

export class FeatureCollectionSearchService extends BaseNative<com.nativescript.massifmaps.additions2.FeatureCollectionSearchService, FeatureCollectionSearchServiceOptions> {
    createNative(options: FeatureCollectionSearchServiceOptions) {
        return new com.nativescript.massifmaps.additions2.FeatureCollectionSearchService(options.projection.getNative(), options.features.getNative());
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

export interface VectorTileSearchService extends Acc_VectorTileSearchService, Omit<Met_VectorTileSearchService, 'findFeatures'> {}
bindNative(VectorTileSearchService, MET_VectorTileSearchService, ACC_VectorTileSearchService, { selectors: SEL_VectorTileSearchService, converters: { layers: stringListConverter } });

export interface FeatureCollectionSearchService extends Acc_FeatureCollectionSearchService, Omit<Met_FeatureCollectionSearchService, 'findFeatures'> {}
bindNative(FeatureCollectionSearchService, MET_FeatureCollectionSearchService, ACC_FeatureCollectionSearchService, { selectors: SEL_FeatureCollectionSearchService });
