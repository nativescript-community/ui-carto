import { BaseNative } from '../index.common';
import { Projection } from '../projections';
import { MapPosVector } from '../core';
import { featureCollectionFromArgs, mapPosVectorFromArgs, nativeProperty } from '..';
import { GeoJSONGeometryWriterOptions, WKBGeometryWriterOptions, WKTGeometryWriterOptions } from './writer';
import { Geometry } from '.';
import { FeatureCollection } from './feature';

export class GeoJSONGeometryWriter extends BaseNative<NTGeoJSONGeometryWriter, GeoJSONGeometryWriterOptions> {
    createNative() {
        return NTGeoJSONGeometryWriter.alloc().init();
    }
    writePoses(value: MapPosVector) {
        this.getNative().writeGeometry(new NTLineGeometry(mapPosVectorFromArgs(value)));
    }
    writeFeatureCollection(value: FeatureCollection) {
        this.getNative().writeFeatureCollection(featureCollectionFromArgs(value));
    }
    set sourceProjection(value: Projection) {
        this.native && this.native.setSourceProjection(value.getNative());
    }
    get sourceProjection() {
        return this.options.sourceProjection;
    }
}

export class WKBGeometryWriter extends BaseNative<NTWKBGeometryWriter, WKBGeometryWriterOptions> {
    @nativeProperty z: boolean;
    createNative() {
        return NTWKBGeometryWriter.alloc().init();
    }
    writeGeometry(value: Geometry<any, any>) {
        const geometry = value.getNative ? value.getNative() : value;
        return this.getNative().writeGeometry(geometry);
    }
}

export class WKTGeometryWriter extends BaseNative<NTWKTGeometryWriter, WKTGeometryWriterOptions> {
    @nativeProperty z: boolean;
    createNative() {
        return NTWKTGeometryWriter.alloc().init();
    }
    writeGeometry(value: Geometry<any, any>) {
        const geometry = value.getNative ? value.getNative() : value;
        return this.getNative().writeGeometry(geometry);
    }
}
