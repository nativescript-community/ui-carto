import { BaseNative } from '../index.common';
import { GeoJSONGeometryReaderOptions, WKBGeometryReaderOptions, WKTGeometryReaderOptions } from './reader';
import { FeatureCollection } from './feature';
import { Projection } from '../projections';
import { Geometry } from '.';
import { nativeProperty } from '..';
import { LineGeometry, PointGeometry } from './index.ios';

export class GeoJSONGeometryReader extends BaseNative<NTGeoJSONGeometryReader, GeoJSONGeometryReaderOptions> {
    createNative() {
        return NTGeoJSONGeometryReader.alloc().init();
    }
    readFeatureCollection(str: string) {
        return new FeatureCollection(this.getNative().readFeatureCollection(str));
    }
    readGeometry(value: string) {
        const result = this.getNative().readGeometry(value);
        if (result instanceof NTLineGeometry) {
            return new LineGeometry(null, result);
        } else if (result instanceof NTPointGeometry) {
            return new PointGeometry(null, result);
        }
        return null;
    }
    set targetProjection(value: Projection) {
        this.native && this.native.setTargetProjection(value.getNative());
    }
    get targetProjection() {
        return this.options.targetProjection;
    }
}

export class WKBGeometryReader extends BaseNative<NTWKBGeometryReader, WKBGeometryReaderOptions> {
    @nativeProperty z: boolean;
    createNative() {
        return NTWKBGeometryReader.alloc().init();
    }
    readGeometry(value: NSData | ArrayBuffer | NTBinaryData) {
        if (!(value instanceof NTBinaryData)) {
            if (value instanceof NSData) {
                const arr = new ArrayBuffer(value.length);
                value.getBytes(arr as any);
                value = arr;
            }
            value = NTBinaryData.alloc().initWithDataPtrSize(value as any, value.byteLength);
        }
        const result = this.getNative().readGeometry(value);
        if (result instanceof NTLineGeometry) {
            return new LineGeometry(null, result);
        } else if (result instanceof NTPointGeometry) {
            return new PointGeometry(null, result);
        }
        return null;
    }
}

export class WKTGeometryReader extends BaseNative<NTWKTGeometryReader, WKTGeometryReaderOptions> {
    @nativeProperty z: boolean;
    createNative() {
        return NTWKTGeometryReader.alloc().init();
    }
    readGeometry(value) {
        const result = this.getNative().readGeometry(value);
        if (result instanceof NTLineGeometry) {
            return new LineGeometry(null, result);
        } else if (result instanceof NTPointGeometry) {
            return new PointGeometry(null, result);
        }
        return null;
    }
}
