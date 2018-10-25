import { Geometry } from './geometry';

export interface Feature {
    properties: {};
    geometry: Geometry;
}

export class FeatureCollection {
    constructor(native: any);
    getFeature(index: number): Feature;
    getGeometry(index: number): Geometry;
    getFeatureCount(): number;
    readonly featureCount: number;
}
