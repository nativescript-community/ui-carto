import { Geometry } from '.';
import { Accessors as Acc_VectorTileFeatureCollection } from '../bindings/geometry/VectorTileFeatureCollection';
import { Methods as Met_VectorTileFeatureCollection } from '../bindings/geometry/VectorTileFeatureCollection';
import { Accessors as Acc_FeatureCollection, Methods as Met_FeatureCollection } from '../bindings/geometry/FeatureCollection';

export interface Feature<T = DefaultLatLonKeys> {
    properties: { [k: string]: any };
    geometry: Geometry<T>;
    // getProperties(): any;

    // getGeometry(): Geometry;
}

export interface VectorTileFeature extends Feature {
    id: number;
    layerName: string;
    mapTile: any;
    distance: number;
}

export class FeatureCollection<T = DefaultLatLonKeys> {
    constructor(native: any);
    getFeature(index: number): Feature<T>;
    getGeometry(index: number): Geometry<T>;
    getFeatureCount(): number;
    readonly featureCount: number;
    getNative();
    getBounds(): MapBounds<T>;
}
export class VectorTileFeatureCollection<T = DefaultLatLonKeys> extends FeatureCollection {
    getFeature(index: number): VectorTileFeature<T>;
}

export interface VectorTileFeatureCollection<T = DefaultLatLonKeys> extends Acc_VectorTileFeatureCollection, Omit<Met_VectorTileFeatureCollection, 'getFeature'> {}

export interface FeatureCollection<T = DefaultLatLonKeys> extends Acc_FeatureCollection, Omit<Met_FeatureCollection, 'getFeature' | 'getFeatureCount'> {}

export interface VectorTileFeatureCollection<T = DefaultLatLonKeys> extends Acc_FeatureCollection, Omit<Met_FeatureCollection, 'getFeature'> {}
