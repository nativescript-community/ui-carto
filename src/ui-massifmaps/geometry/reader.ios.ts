import { BaseNative } from '../BaseNative';
import { GeoJSONGeometryReaderOptions } from './reader';
import { FeatureCollection } from './feature';
import { Projection } from '../projections';
import { Geometry, PolygonGeometry } from '.';
import { nativeProperty } from '..';
import { LineGeometry, PointGeometry } from './index.ios';
import {
    ACCESSORS as ACC_GeoJSONGeometryReader,
    Accessors as Acc_GeoJSONGeometryReader,
    METHODS as MET_GeoJSONGeometryReader,
    Methods as Met_GeoJSONGeometryReader,
    SELECTORS as SEL_GeoJSONGeometryReader
} from '../bindings/geometry/GeoJSONGeometryReader';
import { bindNative } from '../nativeclass.common';

export class GeoJSONGeometryReader extends BaseNative<MSFGeoJSONGeometryReader, GeoJSONGeometryReaderOptions> {
    createNative() {
        return MSFGeoJSONGeometryReader.alloc().init();
    }
    readFeatureCollection(str: string | object) {
        return new FeatureCollection(this.getNative().readFeatureCollection(typeof str === 'string' ? str : JSON.stringify(str)));
    }
    readGeometry(value: string | object) {
        const result = this.getNative().readGeometry(typeof value === 'string' ? value : JSON.stringify(value));
        if (result instanceof MSFLineGeometry) {
            return new LineGeometry(null, result);
        } else if (result instanceof MSFPointGeometry) {
            return new PointGeometry(null, result);
        } else if (result instanceof MSFPolygonGeometry) {
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
