import { BaseNative } from '..';
import { FeatureCollection } from './feature';
import { Projection } from '../projections';

export interface GeoJSONGeometryReaderOptions {
    targetProjection?: Projection;
}
export class GeoJSONGeometryReader extends BaseNative<any, GeoJSONGeometryReaderOptions> {
    targetProjection?: Projection;
    readFeatureCollection(str: string): FeatureCollection;
}
