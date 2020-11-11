import { DefaultLatLonKeys, GenericMapPos, MapBounds, MapPos, MapPosVector } from '../core';
import { BaseNative } from '../index.common';

export interface GeometryOptions<T = DefaultLatLonKeys> {}
export abstract class Geometry<T = DefaultLatLonKeys, U extends GeometryOptions = GeometryOptions> extends BaseNative<any, U> {
    getCenterPos(): GenericMapPos<T>;
    getBounds(): MapBounds<T>;
}

export interface PointGeometryOptions<T = DefaultLatLonKeys> extends GeometryOptions<T> {
    pos: GenericMapPos<T>;
}
export interface LineGeometryOptions<T = DefaultLatLonKeys> extends GeometryOptions<T> {
    poses: MapPosVector<T>;
}
export class PointGeometry<T = DefaultLatLonKeys> extends Geometry<T, PointGeometryOptions<T>> {
    getPos(): GenericMapPos<T>;
}

export class LineGeometry<T = DefaultLatLonKeys> extends Geometry<T, LineGeometryOptions<T>> {
    getPoses(): MapPosVector<T>;
}
