import { BaseNative } from "../BaseNative";
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
    writePoses<T>(value: MapPosVector<T>) {
        return this.getNative().writeGeometry(new NTLineGeometry(mapPosVectorFromArgs(value)));
    }
    writeGeometry<T>(value: Geometry<T>) {
        const geometry = value.getNative ? value.getNative() : value;
        return this.getNative().writeGeometry(geometry);
    }
    writeFeatureCollection<T>(value: FeatureCollection<T>) {
        return this.getNative().writeFeatureCollection(featureCollectionFromArgs<T>(value));
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
