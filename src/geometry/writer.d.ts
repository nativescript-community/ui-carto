import { BaseNative } from '..';
import { FeatureCollection } from './feature';
import { Projection } from '../projections';

export interface GeoJSONGeometryWriterOptions {
    sourceProjection?: Projection;
}
export class GeoJSONGeometryWriter<T = DefaultLatLonKeys> extends BaseNative<any, GeoJSONGeometryWriterOptions> {
    targetProjection?: Projection;
    writePoses(value: MapPosVector): string;
    writeGeometry(value: Geometry<T, any>);
    writeFeatureCollection(value: FeatureCollection): string;
}

export interface WKBGeometryWriterOptions {
    bigEndian?: boolean;
    z?: boolean;
}
export class WKBGeometryWriter<T = DefaultLatLonKeys> extends BaseNative<any, WKBGeometryWriterOptions> {
    bigEndian?: boolean;
    z?: boolean;
    writeGeometry(value: Geometry<T, any>);
}

export interface WKTGeometryWriterOptions {
    z?: boolean;
}
export class WKTGeometryWriter<T = DefaultLatLonKeys> extends BaseNative<any, WKTGeometryWriterOptions> {
    z?: boolean;
    writeGeometry(value: Geometry<T, any>);
}
