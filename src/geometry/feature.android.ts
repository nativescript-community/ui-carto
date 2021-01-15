import { Feature, FeatureCollection as IFeatureCollection, VectorTileFeature } from './feature';
import { nativeVariantToJS } from '../utils';
import { Geometry } from '.';
import { LatitudeKey, LongitudeKey, MapBounds, fromNativeMapBounds } from '../core';

export class FeatureCollection implements IFeatureCollection {
    constructor(protected native: com.carto.geometry.FeatureCollection) {}

    getFeature(index: number) {
        const nResult = this.native.getFeature(index);
        return {
            properties: nativeVariantToJS(nResult.getProperties()),
            geometry: nResult.getGeometry() as any,
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
    getNative() {
        return this.native;
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
            minLat = Math.min(minLat, bounds.southwest[LatitudeKey]);
            minLon = Math.min(minLon, bounds.southwest[LongitudeKey]);
            maxLat = Math.max(maxLat, bounds.northeast[LatitudeKey]);
            maxLon = Math.max(maxLon, bounds.northeast[LongitudeKey]);
        }
        return new MapBounds(
            {
                [LatitudeKey]: maxLat,
                [LongitudeKey]: maxLon,
            },
            {
                [LatitudeKey]: minLat,
                [LongitudeKey]: minLon,
            }
        );
    }
}

export class VectorTileFeatureCollection extends FeatureCollection {
    constructor(protected native: com.carto.geometry.VectorTileFeatureCollection) {
        super(native);
    }

    getFeature(index: number) {
        const nResult = this.native.getFeature(index) as com.carto.geometry.VectorTileFeature;
        return {
            properties: nativeVariantToJS(nResult.getProperties()),
            geometry: nResult.getGeometry() as any,
            id: nResult.getId(),
            layerName: nResult.getLayerName()
        } as VectorTileFeature;
    }
}
