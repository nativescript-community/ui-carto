import { GeometryOptions, LineGeometryOptions, PointGeometryOptions, PolygonGeometryOptions } from '.';
import { mapPosVectorFromArgs } from '..';
import { MapPosVector, fromNativeMapBounds, fromNativeMapPos, toNativeMapPos } from '../core';
import { BaseNative } from '../index.common';

export abstract class Geometry<T extends NTGeometry, U extends GeometryOptions> extends BaseNative<T, U> {
    getCenterPos() {
        return fromNativeMapPos(this.getNative().getCenterPos());
    }
    getBounds() {
        return fromNativeMapBounds(this.getNative().getBounds());
    }
}
export class PointGeometry extends Geometry<NTPointGeometry, PointGeometryOptions> {
    createNative(options: PointGeometryOptions) {
        return NTPointGeometry.alloc().initWithPos(toNativeMapPos(options.pos));
    }

    getPos() {
        return fromNativeMapPos(this.getNative().getPos());
    }
}
export class LineGeometry extends Geometry<NTLineGeometry, LineGeometryOptions> {
    createNative(options: LineGeometryOptions) {
        return NTLineGeometry.alloc().initWithPoses(mapPosVectorFromArgs(options.poses));
    }

    getPoses() {
        return new MapPosVector(this.getNative().getPoses());
    }
}

export class PolygonGeometry extends Geometry<NTLineGeometry, PolygonGeometryOptions> {
    createNative(options: PolygonGeometryOptions) {
        return NTPolygonGeometry.alloc().initWithPoses(mapPosVectorFromArgs(options.poses));
    }

    getPoses() {
        return new MapPosVector(this.getNative().getPoses());
    }
}
