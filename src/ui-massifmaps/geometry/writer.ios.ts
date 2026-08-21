import { BaseNative } from '../BaseNative';
import { Projection } from '../projections';
import { MapPosVector } from '../core';
import { featureCollectionFromArgs, mapPosVectorFromArgs, nativeProperty } from '..';
import { GeoJSONGeometryWriterOptions } from './writer';
import { Geometry } from '.';
import { FeatureCollection } from './feature';
import {
    ACCESSORS as ACC_GeoJSONGeometryWriter,
    Accessors as Acc_GeoJSONGeometryWriter,
    METHODS as MET_GeoJSONGeometryWriter,
    Methods as Met_GeoJSONGeometryWriter,
    SELECTORS as SEL_GeoJSONGeometryWriter
} from '../bindings/geometry/GeoJSONGeometryWriter';
import { bindNative } from '../nativeclass.common';

export class GeoJSONGeometryWriter extends BaseNative<MSFGeoJSONGeometryWriter, GeoJSONGeometryWriterOptions> {
    createNative() {
        return MSFGeoJSONGeometryWriter.alloc().init();
    }
    writePoses<T>(value: MapPosVector<T>) {
        return this.getNative().writeGeometry(new MSFLineGeometry(mapPosVectorFromArgs(value)));
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

export interface GeoJSONGeometryWriter extends Omit<Acc_GeoJSONGeometryWriter, 'sourceProjection'>, Omit<Met_GeoJSONGeometryWriter, 'writeFeatureCollection' | 'writeGeometry'> {}
bindNative(GeoJSONGeometryWriter, MET_GeoJSONGeometryWriter, ACC_GeoJSONGeometryWriter, { selectors: SEL_GeoJSONGeometryWriter });
