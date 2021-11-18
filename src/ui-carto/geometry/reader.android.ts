import { BaseNative } from '../BaseNative';
import { GeoJSONGeometryReaderOptions, WKBGeometryReaderOptions, WKTGeometryReaderOptions } from './reader';
import { FeatureCollection } from './feature';
import { Projection } from '../projections';
import { nativeProperty } from '..';
import { MapPosVector } from '../core';
import { Geometry, PolygonGeometry } from '.';
import { LineGeometry, PointGeometry } from './index.android';

export class GeoJSONGeometryReader extends BaseNative<com.carto.geometry.GeoJSONGeometryReader, GeoJSONGeometryReaderOptions> {
    createNative() {
        return new com.carto.geometry.GeoJSONGeometryReader();
    }
    readFeatureCollection(str: string) {
        return new FeatureCollection(this.getNative().readFeatureCollection(str));
    }
    readGeometry(value: string) {
        const result = this.getNative().readGeometry(value);
        if (result instanceof com.carto.geometry.LineGeometry) {
            return new LineGeometry(null, result);
        } else if (result instanceof com.carto.geometry.PointGeometry) {
            return new PointGeometry(null, result);
        } else if (result instanceof com.carto.geometry.PolygonGeometry) {
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

export class WKBGeometryReader extends BaseNative<com.carto.geometry.WKBGeometryReader, WKBGeometryReaderOptions> {
    @nativeProperty z: boolean;
    createNative() {
        return new com.carto.geometry.WKBGeometryReader();
    }
    readGeometry(value: number[] | ArrayBuffer | com.carto.core.BinaryData) {
        if (!(value instanceof com.carto.core.BinaryData)) {
            value = new com.carto.core.BinaryData(value as any);
        }
        const result = this.getNative().readGeometry(value);
        if (result instanceof com.carto.geometry.LineGeometry) {
            return new LineGeometry(null, result);
        } else if (result instanceof com.carto.geometry.PointGeometry) {
            return new PointGeometry(null, result);
        }
        return null;
    }
}

export class WKTGeometryReader extends BaseNative<com.carto.geometry.WKTGeometryReader, WKTGeometryReaderOptions> {
    @nativeProperty z: boolean;
    createNative() {
        return new com.carto.geometry.WKTGeometryReader();
    }
    readGeometry(value) {
        const result = this.getNative().readGeometry(value);
        if (result instanceof com.carto.geometry.LineGeometry) {
            return new LineGeometry(null, result);
        } else if (result instanceof com.carto.geometry.PointGeometry) {
            return new PointGeometry(null, result);
        }
        return null;
    }
}
