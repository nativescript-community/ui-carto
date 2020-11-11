import { GeometryOptions, LineGeometryOptions, PointGeometryOptions } from '.';
import { mapPosVectorFromArgs } from '..';
import { MapPosVector, fromNativeMapBounds, fromNativeMapPos, toNativeMapPos } from '../core';
import { BaseNative } from '../index.common';

export abstract class Geometry<T extends com.carto.geometry.Geometry, U extends GeometryOptions> extends BaseNative<T, U> {
    getCenterPos() {
        return fromNativeMapPos(this.getNative().getCenterPos());
    }
    getBounds() {
        return fromNativeMapBounds(this.getNative().getBounds());
    }
}
export class PointGeometry extends Geometry<com.carto.geometry.PointGeometry, PointGeometryOptions> {
    createNative(options: PointGeometryOptions) {
        return new com.carto.geometry.PointGeometry(toNativeMapPos(options.pos));
    }

    getPos() {
        return fromNativeMapPos(this.getNative().getPos());
    }
}
export class LineGeometry extends Geometry<com.carto.geometry.LineGeometry, LineGeometryOptions> {
    createNative(options: LineGeometryOptions) {
        console.log('create native LineGeometry', options.poses, mapPosVectorFromArgs(options.poses));
        return new com.carto.geometry.LineGeometry(mapPosVectorFromArgs(options.poses));
    }

    getPoses() {
        return new MapPosVector(this.getNative().getPoses());
    }
}
