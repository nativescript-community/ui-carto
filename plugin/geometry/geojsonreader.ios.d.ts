import { BaseNative } from '../carto.common';
import { GeoJSONGeometryReaderOptions } from './geojsonreader';
import { FeatureCollection } from './feature';
import { Projection } from '../projections/projection';
export declare class GeoJSONGeometryReader extends BaseNative<NTGeoJSONGeometryReader, GeoJSONGeometryReaderOptions> {
    createNative(): NTGeoJSONGeometryReader;
    readFeatureCollection(str: string): FeatureCollection;
    targetProjection: Projection;
}
