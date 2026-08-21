import { BaseNative } from '../BaseNative';
import { GeoJSONGeometryWriterOptions } from './writer';
import { FeatureCollection } from './feature';
import { Projection } from '../projections';
import { Geometry } from '.';
import { MapPosVector } from '../core';
import { featureCollectionFromArgs, mapPosVectorFromArgs, nativeProperty } from '..';
import {
    ACCESSORS as ACC_GeoJSONGeometryWriter,
    Accessors as Acc_GeoJSONGeometryWriter,
    METHODS as MET_GeoJSONGeometryWriter,
    Methods as Met_GeoJSONGeometryWriter,
    SELECTORS as SEL_GeoJSONGeometryWriter
} from '../bindings/geometry/GeoJSONGeometryWriter';
import { bindNative } from '../nativeclass.common';

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

export interface GeoJSONGeometryWriter extends Omit<Acc_GeoJSONGeometryWriter, 'sourceProjection'>, Omit<Met_GeoJSONGeometryWriter, 'writeFeatureCollection' | 'writeGeometry'> {}
bindNative(GeoJSONGeometryWriter, MET_GeoJSONGeometryWriter, ACC_GeoJSONGeometryWriter, { selectors: SEL_GeoJSONGeometryWriter });
