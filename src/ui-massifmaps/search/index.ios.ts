import { nativeProperty, nativeStringListProperty } from '../index.common';
import { BaseNative } from '../BaseNative';
import { FeatureCollection, VectorTileFeatureCollection } from '../geometry/feature';
import { FeatureCollectionSearchServiceOptions, SearchRequest, VectorTileSearchServiceOptions } from '.';
import { toNativeMapPos } from '../core';
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

export class VectorTileSearchService extends BaseNative<NSMSFVectorTileSearchService, VectorTileSearchServiceOptions> {
    createNative(options: VectorTileSearchServiceOptions) {
        if (options.layer) {
            const layer = options.layer.getNative() as MSFVectorTileLayer;
            return NSMSFVectorTileSearchService.alloc().initWithDataSourceTileDecoder(layer.getDataSource(), layer.getTileDecoder());
        } else {
            return NSMSFVectorTileSearchService.alloc().initWithDataSourceTileDecoder(options.dataSource.getNative(), options.decoder.getNative());
        }
    }
    public findFeatures(options: SearchRequest, callback?: (res: VectorTileFeatureCollection) => void) {
        const nRequest = MSFSearchRequest.alloc().init();
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
            nRequest.setGeometry(MSFPointGeometry.alloc().initWithPos(toNativeMapPos(options.position)));
        }
        if (callback) {
            this.getNative().findFeaturesCallback(nRequest, (r) => callback(new VectorTileFeatureCollection(r)));
            return null;
        } else {
            return new VectorTileFeatureCollection(this.getNative().findFeatures(nRequest));
        }
    }
}

export class FeatureCollectionSearchService extends BaseNative<NSMSFFeatureCollectionSearchService, FeatureCollectionSearchServiceOptions> {
    createNative(options: FeatureCollectionSearchServiceOptions) {
        return NSMSFFeatureCollectionSearchService.alloc().initWithProjectionFeatureCollection(options.projection.getNative(), options.features.getNative());
    }
    public findFeatures(options: SearchRequest, callback?: (res: FeatureCollection) => void) {
        const nRequest = MSFSearchRequest.alloc().init();
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
                nRequest.setGeometry(MSFPointGeometry.alloc().initWithPos(toNativeMapPos(options.position)));
            }
        }
        if (callback) {
            this.getNative().findFeaturesCallback(nRequest, (r) => callback(new FeatureCollection(r)));
            return null;
        } else {
            return new FeatureCollection(this.getNative().findFeatures(nRequest));
        }
    }
}

export interface VectorTileSearchService extends Acc_VectorTileSearchService, Omit<Met_VectorTileSearchService, 'findFeatures'> {}
bindNative(VectorTileSearchService, MET_VectorTileSearchService, ACC_VectorTileSearchService, { selectors: SEL_VectorTileSearchService, converters: { layers: stringListConverter } });

export interface FeatureCollectionSearchService extends Acc_FeatureCollectionSearchService, Omit<Met_FeatureCollectionSearchService, 'findFeatures'> {}
bindNative(FeatureCollectionSearchService, MET_FeatureCollectionSearchService, ACC_FeatureCollectionSearchService, { selectors: SEL_FeatureCollectionSearchService });
