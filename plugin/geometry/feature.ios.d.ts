import { Feature, FeatureCollection as IFeatureCollection, VectorTileFeature } from './feature';
import { Geometry } from './geometry';
export declare class FeatureCollection implements IFeatureCollection {
    protected native: NTFeatureCollection;
    constructor(native: NTFeatureCollection);
    getFeature(index: number): Feature;
    getGeometry(index: number): Geometry;
    getFeatureCount(): number;
    readonly featureCount: number;
}
export declare class VectorTileFeatureCollection extends FeatureCollection {
    protected native: NTVectorTileFeatureCollection;
    constructor(native: NTVectorTileFeatureCollection);
    getFeature(index: number): VectorTileFeature;
}
