import { Feature, FeatureCollection as IFeatureCollection } from './feature';
import { nativeVariantToJS } from '../utils/utils';
import { Geometry } from './geometry';

export class FeatureCollection implements IFeatureCollection {
    constructor(private native: com.carto.geometry.FeatureCollection) {}

    getFeature(index: number) {
        const nResult = this.native.getFeature(index);
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
}
