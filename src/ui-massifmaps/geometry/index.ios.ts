import { GeometryOptions, LineGeometryOptions, PointGeometryOptions, PolygonGeometryOptions } from '.';
import { mapPosVectorFromArgs } from '..';
import { MapPosVector, fromNativeMapBounds, fromNativeMapPos, toNativeMapPos } from '../core';
import { BaseNative } from '../BaseNative';

export abstract class Geometry<T extends MSFGeometry, U extends GeometryOptions> extends BaseNative<T, U> {
    getCenterPos() {
        return fromNativeMapPos(this.getNative().getCenterPos());
    }
    getBounds() {
        return fromNativeMapBounds(this.getNative().getBounds());
    }
}
export class PointGeometry extends Geometry<MSFPointGeometry, PointGeometryOptions> {
    createNative(options: PointGeometryOptions) {
        return MSFPointGeometry.alloc().initWithPos(toNativeMapPos(options.pos));
    }

    getPos() {
        return fromNativeMapPos(this.getNative().getPos());
    }
}
export class LineGeometry extends Geometry<MSFLineGeometry, LineGeometryOptions> {
    createNative(options: LineGeometryOptions) {
        return MSFLineGeometry.alloc().initWithPoses(mapPosVectorFromArgs(options.poses));
    }

    getPoses() {
        return new MapPosVector(this.getNative().getPoses());
    }
}

export class PolygonGeometry extends Geometry<MSFLineGeometry, PolygonGeometryOptions> {
    createNative(options: PolygonGeometryOptions) {
        return MSFPolygonGeometry.alloc().initWithPoses(mapPosVectorFromArgs(options.poses));
    }

    getPoses() {
        return new MapPosVector(this.getNative().getPoses());
    }
}
