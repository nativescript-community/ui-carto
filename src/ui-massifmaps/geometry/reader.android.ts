import { BaseNative } from '../BaseNative';
import { GeoJSONGeometryReaderOptions, WKBGeometryReaderOptions, WKTGeometryReaderOptions } from './reader';
import { FeatureCollection } from './feature';
import { Projection } from '../projections';
import { nativeProperty } from '..';
import { MapPosVector } from '../core';
import { Geometry, PolygonGeometry } from '.';
import { LineGeometry, PointGeometry } from './index.android';

export class GeoJSONGeometryReader extends BaseNative<com.massifmaps.geometry.GeoJSONGeometryReader, GeoJSONGeometryReaderOptions> {
    createNative() {
        return new com.massifmaps.geometry.GeoJSONGeometryReader();
    }
    readFeatureCollection(str: string | Object) {
        return new FeatureCollection(this.getNative().readFeatureCollection(typeof str === 'string' ? str : JSON.stringify(str)));
    }
    readGeometry(value: string | Object) {
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

export class WKBGeometryReader extends BaseNative<com.massifmaps.geometry.WKBGeometryReader, WKBGeometryReaderOptions> {
    @nativeProperty z: boolean;
    createNative() {
        return new com.massifmaps.geometry.WKBGeometryReader();
    }
    readGeometry(value: number[] | ArrayBuffer | com.massifmaps.core.BinaryData) {
        if (!(value instanceof com.massifmaps.core.BinaryData)) {
            value = new com.massifmaps.core.BinaryData(value as any);
        }
        const result = this.getNative().readGeometry(value);
        if (result instanceof com.massifmaps.geometry.LineGeometry) {
            return new LineGeometry(null, result);
        } else if (result instanceof com.massifmaps.geometry.PointGeometry) {
            return new PointGeometry(null, result);
        }
        return null;
    }
}

export class WKTGeometryReader extends BaseNative<com.massifmaps.geometry.WKTGeometryReader, WKTGeometryReaderOptions> {
    @nativeProperty z: boolean;
    createNative() {
        return new com.massifmaps.geometry.WKTGeometryReader();
    }
    readGeometry(value) {
        const result = this.getNative().readGeometry(value);
        if (result instanceof com.massifmaps.geometry.LineGeometry) {
            return new LineGeometry(null, result);
        } else if (result instanceof com.massifmaps.geometry.PointGeometry) {
            return new PointGeometry(null, result);
        }
        return null;
    }
}
