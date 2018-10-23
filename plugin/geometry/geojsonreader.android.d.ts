import { BaseNative } from '../carto.common';
import { GeoJSONGeometryReaderOptions } from './geojsonreader';
import { FeatureCollection } from './feature';
import { Projection } from '../projections/projection.android';
export declare class GeoJSONGeometryReader extends BaseNative<com.carto.geometry.GeoJSONGeometryReader, GeoJSONGeometryReaderOptions> {
    createNative(): com.carto.geometry.GeoJSONGeometryReader;
    readFeatureCollection(str: string): FeatureCollection;
    targetProjection: Projection;
}
