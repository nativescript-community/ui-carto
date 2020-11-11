import { Feature, FeatureCollection as IFeatureCollection, VectorTileFeature } from './feature';
import { nativeVariantToJS } from '../utils';
import { Geometry } from '.';
import { DefaultLatLonKeys } from '../core';

export class FeatureCollection implements IFeatureCollection {
    constructor(protected native: NTFeatureCollection) {}

    getFeature(index: number) {
        const nResult = this.native.getFeature(index);
        // const nGeo = nResult.getGeometry();
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
}

export class VectorTileFeatureCollection extends FeatureCollection {
    constructor(protected native: NTVectorTileFeatureCollection) {
        super(native);
    }

    getFeature(index: number) {
        const nResult = this.native.getFeature(index);
        return {
            properties: nativeVariantToJS(nResult.getProperties()),
            geometry: nResult.getGeometry(),
            id: nResult.getId(),
            layerName: nResult.getLayerName(),
        } as VectorTileFeature;
    }
}
