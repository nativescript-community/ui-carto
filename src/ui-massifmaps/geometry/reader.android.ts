import { BaseNative } from '../BaseNative';
import { GeoJSONGeometryReaderOptions } from './reader';
import { FeatureCollection } from './feature';
import { Projection } from '../projections';
import { nativeProperty } from '..';
import { MapPosVector } from '../core';
import { Geometry, PolygonGeometry } from '.';
import { LineGeometry, PointGeometry } from './index.android';
import {
    ACCESSORS as ACC_GeoJSONGeometryReader,
    Accessors as Acc_GeoJSONGeometryReader,
    METHODS as MET_GeoJSONGeometryReader,
    Methods as Met_GeoJSONGeometryReader,
    SELECTORS as SEL_GeoJSONGeometryReader
} from '../bindings/geometry/GeoJSONGeometryReader';
import { bindNative } from '../nativeclass.common';

export class GeoJSONGeometryReader extends BaseNative<com.massifmaps.geometry.GeoJSONGeometryReader, GeoJSONGeometryReaderOptions> {
    createNative() {
        return new com.massifmaps.geometry.GeoJSONGeometryReader();
    }
    readFeatureCollection(str: string | object) {
        return new FeatureCollection(this.getNative().readFeatureCollection(typeof str === 'string' ? str : JSON.stringify(str)));
    }
    readGeometry(value: string | object) {
        const result = this.getNative().readGeometry(typeof value === 'string' ? value : JSON.stringify(value));
        if (result instanceof com.massifmaps.geometry.LineGeometry) {
            return new LineGeometry(null, result);
        } else if (result instanceof com.massifmaps.geometry.PointGeometry) {
            return new PointGeometry(null, result);
        } else if (result instanceof com.massifmaps.geometry.PolygonGeometry) {
            return new PolygonGeometry(null, result);
        }
        return result;
    }
    set targetProjection(value: Projection) {
        this.native && this.native.setTargetProjection(value.getNative());
    }
    get targetProjection() {
        return this.options.targetProjection;
    }
}

export interface GeoJSONGeometryReader extends Omit<Acc_GeoJSONGeometryReader, 'targetProjection'>, Omit<Met_GeoJSONGeometryReader, 'readFeatureCollection' | 'readGeometry'> {}
bindNative(GeoJSONGeometryReader, MET_GeoJSONGeometryReader, ACC_GeoJSONGeometryReader, { selectors: SEL_GeoJSONGeometryReader });
