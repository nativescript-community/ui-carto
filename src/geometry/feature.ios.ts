import { Feature, FeatureCollection as IFeatureCollection, VectorTileFeature } from './feature';
import { nativeVariantToJS } from '../utils/utils';
import { Geometry } from './geometry';

export class FeatureCollection implements IFeatureCollection {
    constructor(protected native: NTFeatureCollection) {}

    getFeature(index: number) {
        const nResult = this.native.getFeature(index);
        // const nGeo = nResult.getGeometry();
        return {
            properties: nativeVariantToJS(nResult.getProperties()),
            geometry: nResult.getGeometry() as Geometry
        } as Feature;
    }
    getGeometry(index: number) {
        return this.native.getFeature(index).getGeometry() as Geometry;
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
            geometry: nResult.getGeometry() as Geometry,
            id: nResult.getId(),
            layerName: nResult.getLayerName()
        } as VectorTileFeature;
    }
}
