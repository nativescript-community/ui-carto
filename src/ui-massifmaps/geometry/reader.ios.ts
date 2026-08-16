import { BaseNative } from '../BaseNative';
import { GeoJSONGeometryReaderOptions, WKBGeometryReaderOptions, WKTGeometryReaderOptions } from './reader';
import { FeatureCollection } from './feature';
import { Projection } from '../projections';
import { Geometry, PolygonGeometry } from '.';
import { nativeProperty } from '..';
import { LineGeometry, PointGeometry } from './index.ios';

export class GeoJSONGeometryReader extends BaseNative<MSFGeoJSONGeometryReader, GeoJSONGeometryReaderOptions> {
    createNative() {
        return MSFGeoJSONGeometryReader.alloc().init();
    }
    readFeatureCollection(str: string | Object) {
        return new FeatureCollection(this.getNative().readFeatureCollection(typeof str === 'string' ? str : JSON.stringify(str)));
    }
    readGeometry(value: string | Object) {
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

export class WKBGeometryReader extends BaseNative<MSFWKBGeometryReader, WKBGeometryReaderOptions> {
    @nativeProperty z: boolean;
    createNative() {
        return MSFWKBGeometryReader.alloc().init();
    }
    readGeometry(value: NSData | ArrayBuffer | MSFBinaryData) {
        if (!(value instanceof MSFBinaryData)) {
            if (value instanceof NSData) {
                const arr = new ArrayBuffer(value.length);
                value.getBytes(arr as any);
                value = arr;
            }
            value = MSFBinaryData.alloc().initWithDataPtrSize(value as any, value.byteLength);
        }
        const result = this.getNative().readGeometry(value);
        if (result instanceof MSFLineGeometry) {
            return new LineGeometry(null, result);
        } else if (result instanceof MSFPointGeometry) {
            return new PointGeometry(null, result);
        }
        return null;
    }
}

export class WKTGeometryReader extends BaseNative<MSFWKTGeometryReader, WKTGeometryReaderOptions> {
    @nativeProperty z: boolean;
    createNative() {
        return MSFWKTGeometryReader.alloc().init();
    }
    readGeometry(value) {
        const result = this.getNative().readGeometry(value);
        if (result instanceof MSFLineGeometry) {
            return new LineGeometry(null, result);
        } else if (result instanceof MSFPointGeometry) {
            return new PointGeometry(null, result);
        }
        return null;
    }
}
