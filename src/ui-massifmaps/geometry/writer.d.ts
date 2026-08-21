import { BaseNative } from '..';
import { FeatureCollection } from './feature';
import { Projection } from '../projections';
import { Accessors as Acc_GeoJSONGeometryWriter } from '../bindings/geometry/GeoJSONGeometryWriter';
import { Methods as Met_GeoJSONGeometryWriter } from '../bindings/geometry/GeoJSONGeometryWriter';

export interface GeoJSONGeometryWriterOptions {
    sourceProjection?: Projection;
}
export class GeoJSONGeometryWriter<T = DefaultLatLonKeys> extends BaseNative<any, GeoJSONGeometryWriterOptions> {
    targetProjection?: Projection;
    writePoses(value: MapPosVector): string;
    writeGeometry(value: Geometry<T, any>);
    writeFeatureCollection(value: FeatureCollection): string;
}

export interface GeoJSONGeometryWriter<T = DefaultLatLonKeys> extends Acc_GeoJSONGeometryWriter, Omit<Met_GeoJSONGeometryWriter, 'writeFeatureCollection' | 'writeGeometry'> {}
