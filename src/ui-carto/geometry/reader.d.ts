import { BaseNative } from '..';
import { FeatureCollection } from './feature';
import { Projection } from '../projections';

export interface GeoJSONGeometryReaderOptions {
    targetProjection?: Projection;
}
export class GeoJSONGeometryReader extends BaseNative<any, GeoJSONGeometryReaderOptions> {
    targetProjection?: Projection;
    readGeometry(value: any): Geometry<T>;
    readFeatureCollection(str: string): FeatureCollection;
}

export interface WKBGeometryReaderOptions {
    bigEndian?: boolean;
    z?: boolean;
}
export class WKBGeometryReader<T = DefaultLatLonKeys> extends BaseNative<any, WKBGeometryReaderOptions> {
    readGeometry(value: any): Geometry<T>;
}

export interface WKTGeometryReaderOptions {
    bigEndian?: boolean;
    z?: boolean;
}
export class WKTGeometryReader<T = DefaultLatLonKeys> extends BaseNative<any, WKTGeometryReaderOptions> {
    readGeometry(value: string): Geometry<T>;
}
