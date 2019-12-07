import { BaseNative } from '../index.common';
import { GeoJSONGeometryReaderOptions } from './geojsonreader';
import { FeatureCollection } from './feature';
import { Projection } from '../projections';

export class GeoJSONGeometryReader extends BaseNative<com.carto.geometry.GeoJSONGeometryReader, GeoJSONGeometryReaderOptions> {
    createNative() {
        return new com.carto.geometry.GeoJSONGeometryReader();
    }
    readFeatureCollection(str: string) {
        return new FeatureCollection(this.getNative().readFeatureCollection(str));
    }
    set targetProjection(value: Projection) {
        this.native && this.native.setTargetProjection(value.getNative());
    }
    get targetProjection() {
        return this.options.targetProjection;
    }
}
