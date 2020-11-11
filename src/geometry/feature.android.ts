import { Feature, FeatureCollection as IFeatureCollection, VectorTileFeature } from './feature';
import { nativeVariantToJS } from '../utils';
import { Geometry } from '.';

export class FeatureCollection implements IFeatureCollection {
    constructor(protected native: com.carto.geometry.FeatureCollection) {}

    getFeature(index: number) {
        const nResult = this.native.getFeature(index);
        return {
            properties: nativeVariantToJS(nResult.getProperties()),
            geometry: nResult.getGeometry(),
        } as Feature;
    }
    getGeometry(index: number) {
        return this.native.getFeature(index).getGeometry();
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
    constructor(protected native: com.carto.geometry.VectorTileFeatureCollection) {
        super(native);
    }

    getFeature(index: number) {
        const nResult = this.native.getFeature(index) as com.carto.geometry.VectorTileFeature;
        return {
            properties: nativeVariantToJS(nResult.getProperties()),
            geometry: nResult.getGeometry(),
            id: nResult.getId(),
            layerName: nResult.getLayerName()
        } as VectorTileFeature;
    }
}
