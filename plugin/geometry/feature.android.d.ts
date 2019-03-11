import { Feature, FeatureCollection as IFeatureCollection, VectorTileFeature } from './feature';
import { Geometry } from './geometry';
export declare class FeatureCollection implements IFeatureCollection {
    protected native: com.carto.geometry.FeatureCollection;
    constructor(native: com.carto.geometry.FeatureCollection);
    getFeature(index: number): Feature;
    getGeometry(index: number): Geometry;
    getFeatureCount(): number;
    readonly featureCount: number;
}
export declare class VectorTileFeatureCollection extends FeatureCollection {
    protected native: com.carto.geometry.VectorTileFeatureCollection;
    constructor(native: com.carto.geometry.VectorTileFeatureCollection);
    getFeature(index: number): VectorTileFeature;
}
