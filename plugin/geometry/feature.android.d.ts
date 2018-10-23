import { Feature, FeatureCollection as IFeatureCollection } from './feature';
import { Geometry } from './geometry';
export declare class FeatureCollection implements IFeatureCollection {
    private native;
    constructor(native: com.carto.geometry.FeatureCollection);
    getFeature(index: number): Feature;
    getGeometry(index: number): Geometry;
    getFeatureCount(): number;
    readonly featureCount: number;
}
