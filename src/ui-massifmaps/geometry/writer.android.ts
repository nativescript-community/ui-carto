import { BaseNative } from '../BaseNative';
import { GeoJSONGeometryWriterOptions, WKBGeometryWriterOptions, WKTGeometryWriterOptions } from './writer';
import { FeatureCollection } from './feature';
import { Projection } from '../projections';
import { Geometry } from '.';
import { MapPosVector } from '../core';
import { featureCollectionFromArgs, mapPosVectorFromArgs, nativeProperty } from '..';

export class GeoJSONGeometryWriter extends BaseNative<com.massifmaps.geometry.GeoJSONGeometryWriter, GeoJSONGeometryWriterOptions> {
    createNative() {
        return new com.massifmaps.geometry.GeoJSONGeometryWriter();
    }
    writePoses(value: MapPosVector) {
        return this.getNative().writeGeometry(new com.massifmaps.geometry.LineGeometry(mapPosVectorFromArgs(value)));
    }
    writeGeometry(value: Geometry) {
        const geometry = value.getNative ? value.getNative() : value;
        return this.getNative().writeGeometry(geometry);
    }
    writeFeatureCollection(value: FeatureCollection) {
        return this.getNative().writeFeatureCollection(featureCollectionFromArgs(value));
    }
    set sourceProjection(value: Projection) {
        this.native && this.native.setSourceProjection(value.getNative());
    }
    get sourceProjection() {
        return this.options.sourceProjection;
    }
}

export class WKBGeometryWriter extends BaseNative<com.massifmaps.geometry.WKBGeometryWriter, WKBGeometryWriterOptions> {
    @nativeProperty z: boolean;
    createNative() {
        return new com.massifmaps.geometry.WKBGeometryWriter();
    }
    writeGeometry(value: Geometry<any, any>) {
        const geometry = value.getNative ? value.getNative() : value;
        return this.getNative().writeGeometry(geometry);
    }
}

export class WKTGeometryWriter extends BaseNative<com.massifmaps.geometry.WKTGeometryWriter, WKTGeometryWriterOptions> {
    @nativeProperty z: boolean;
    createNative() {
        return new com.massifmaps.geometry.WKTGeometryWriter();
    }
    writeGeometry(value: Geometry<any, any>) {
        const geometry = value.getNative ? value.getNative() : value;
        return this.getNative().writeGeometry(geometry);
    }
}
