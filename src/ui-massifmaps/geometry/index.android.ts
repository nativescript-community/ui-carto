import { GeometryOptions, LineGeometryOptions, PointGeometryOptions, PolygonGeometryOptions } from '.';
import { mapPosVectorFromArgs } from '..';
import { MapPosVector, fromNativeMapBounds, fromNativeMapPos, toNativeMapPos } from '../core';
import { BaseNative } from '../BaseNative';

export abstract class Geometry<T extends com.massifmaps.geometry.Geometry, U extends GeometryOptions> extends BaseNative<T, U> {
    getCenterPos() {
        return fromNativeMapPos(this.getNative().getCenterPos());
    }
    getBounds() {
        return fromNativeMapBounds(this.getNative().getBounds());
    }
}
export class PointGeometry extends Geometry<com.massifmaps.geometry.PointGeometry, PointGeometryOptions> {
    createNative(options: PointGeometryOptions) {
        return new com.massifmaps.geometry.PointGeometry(toNativeMapPos(options.pos));
    }

    getPos() {
        return fromNativeMapPos(this.getNative().getPos());
    }
}
export class LineGeometry extends Geometry<com.massifmaps.geometry.LineGeometry, LineGeometryOptions> {
    createNative(options: LineGeometryOptions) {
        return new com.massifmaps.geometry.LineGeometry(mapPosVectorFromArgs(options.poses));
    }

    getPoses() {
        return new MapPosVector(this.getNative().getPoses());
    }
}
export class PolygonGeometry extends Geometry<com.massifmaps.geometry.PolygonGeometry, PolygonGeometryOptions> {
    createNative(options: PolygonGeometryOptions) {
        return new com.massifmaps.geometry.PolygonGeometry(mapPosVectorFromArgs(options.poses));
    }

    getPoses() {
        return new MapPosVector(this.getNative().getPoses());
    }
}
