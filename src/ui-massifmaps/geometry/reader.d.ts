import { BaseNative } from '..';
import { FeatureCollection } from './feature';
import { Projection } from '../projections';
import { Accessors as Acc_GeoJSONGeometryReader } from '../bindings/geometry/GeoJSONGeometryReader';
import { Methods as Met_GeoJSONGeometryReader } from '../bindings/geometry/GeoJSONGeometryReader';

export interface GeoJSONGeometryReaderOptions {
    targetProjection?: Projection;
}
export class GeoJSONGeometryReader extends BaseNative<any, GeoJSONGeometryReaderOptions> {
    targetProjection?: Projection;
    readGeometry(value: string | object): Geometry<T>;
    readFeatureCollection(str: string | object): FeatureCollection;
}

export interface GeoJSONGeometryReader extends Omit<Acc_GeoJSONGeometryReader, 'targetProjection'>, Omit<Met_GeoJSONGeometryReader, 'readFeatureCollection' | 'readGeometry'> {}
