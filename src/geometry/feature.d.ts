import { Geometry } from './geometry';

export interface Feature {
    properties: {};
    geometry: Geometry;
    // getProperties(): any;

    // getGeometry(): Geometry;
}

export interface VectorTileFeature extends Feature {
    id: number;
    layerName: string;
    mapTile: any;
}

export class FeatureCollection {
    constructor(native: any);
    getFeature(index: number): Feature;
    getGeometry(index: number): Geometry;
    getFeatureCount(): number;
    readonly featureCount: number;
    getNative();
}
export class VectorTileFeatureCollection extends FeatureCollection {
    getFeature(index: number): VectorTileFeature;
}
