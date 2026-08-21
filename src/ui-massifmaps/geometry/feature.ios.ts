import { BaseNative } from '../BaseNative';
import { LatitudeKey, LongitudeKey, MapBounds, fromNativeMapBounds } from '../core';
import { nativeVariantToJS } from '../utils';
import { Feature, FeatureCollection as IFeatureCollection, VectorTileFeature } from './feature';
import {
    ACCESSORS as ACC_VectorTileFeatureCollection,
    Accessors as Acc_VectorTileFeatureCollection,
    METHODS as MET_VectorTileFeatureCollection,
    Methods as Met_VectorTileFeatureCollection,
    SELECTORS as SEL_VectorTileFeatureCollection
} from '../bindings/geometry/VectorTileFeatureCollection';
import { bindNative } from '../nativeclass.common';
import {
    ACCESSORS as ACC_FeatureCollection,
    Accessors as Acc_FeatureCollection,
    METHODS as MET_FeatureCollection,
    Methods as Met_FeatureCollection,
    SELECTORS as SEL_FeatureCollection
} from '../bindings/geometry/FeatureCollection';

export class FeatureCollection<T extends MSFFeatureCollection> extends BaseNative<T, {}> implements IFeatureCollection {
    constructor(native) {
        super(null, native);
    }
    getFeature(index: number) {
        const nResult = this.native.getFeature(index);
        // const nGeo = nResult.getGeometry();
        return {
            properties: nativeVariantToJS(nResult.getProperties()),
            geometry: nResult.getGeometry() as any
        } as Feature;
    }
    getGeometry(index: number) {
        return this.native.getFeature(index).getGeometry() as any;
    }

    getFeatureCount() {
        return this.native.getFeatureCount();
    }
    get featureCount() {
        return this.native.getFeatureCount();
    }
    getBounds() {
        let minLat = Number.MAX_SAFE_INTEGER;
        let minLon = Number.MAX_SAFE_INTEGER;
        let maxLat = -Number.MAX_SAFE_INTEGER;
        let maxLon = -Number.MAX_SAFE_INTEGER;
        const featureCount = this.featureCount;
        for (let index = 0; index < featureCount; index++) {
            const geometry = this.getGeometry(index);
            const bounds = fromNativeMapBounds(geometry.getBounds());
            minLat = Math.min(minLat, bounds.northeast[LatitudeKey]);
            minLon = Math.min(minLon, bounds.northeast[LongitudeKey]);
            maxLat = Math.max(maxLat, bounds.southwest[LatitudeKey]);
            maxLon = Math.max(maxLon, bounds.southwest[LongitudeKey]);
        }
        return new MapBounds(
            {
                [LatitudeKey]: minLat,
                [LongitudeKey]: minLon
            },
            {
                [LatitudeKey]: maxLat,
                [LongitudeKey]: maxLon
            }
        );
    }
}

export class VectorTileFeatureCollection extends FeatureCollection<MSFVectorTileFeatureCollection> {
    getFeature(index: number) {
        const nResult = this.native.getFeature(index);
        return {
            properties: nativeVariantToJS(nResult.getProperties()),
            geometry: nResult.getGeometry() as any,
            id: nResult.getId(),
            layerName: nResult.getLayerName(),
            distance: nResult.getDistance()
        } as VectorTileFeature;
    }
}

export interface VectorTileFeatureCollection extends Acc_VectorTileFeatureCollection, Omit<Met_VectorTileFeatureCollection, 'getFeature'> {}
bindNative(VectorTileFeatureCollection, MET_VectorTileFeatureCollection, ACC_VectorTileFeatureCollection, { selectors: SEL_VectorTileFeatureCollection });

export interface FeatureCollection<T extends MSFFeatureCollection> extends Acc_FeatureCollection, Omit<Met_FeatureCollection, 'getFeature'> {}
bindNative(FeatureCollection, MET_FeatureCollection, ACC_FeatureCollection, { selectors: SEL_FeatureCollection });
