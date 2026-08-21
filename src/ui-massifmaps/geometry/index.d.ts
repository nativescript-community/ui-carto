import { DefaultLatLonKeys, GenericMapPos, MapBounds, MapPos, MapPosVector } from '../core';
import { BaseNative } from '../BaseNative';
import { Accessors as Acc_PointGeometry } from '../bindings/geometry/PointGeometry';
import { Accessors as Acc_LineGeometry } from '../bindings/geometry/LineGeometry';
import { Accessors as Acc_PolygonGeometry } from '../bindings/geometry/PolygonGeometry';
import { Methods as Met_PointGeometry } from '../bindings/geometry/PointGeometry';
import { Methods as Met_LineGeometry } from '../bindings/geometry/LineGeometry';
import { Methods as Met_PolygonGeometry } from '../bindings/geometry/PolygonGeometry';
import { Accessors as Acc_Geometry, Methods as Met_Geometry } from '../bindings/geometry/Geometry';

export interface GeometryOptions<T = DefaultLatLonKeys> {}
export abstract class Geometry<T = DefaultLatLonKeys, U extends GeometryOptions = GeometryOptions<T>> extends BaseNative<any, U> {
    getCenterPos(): GenericMapPos<T>;
    getBounds(): MapBounds<T>;
}

export interface PointGeometryOptions<T = DefaultLatLonKeys> extends GeometryOptions<T> {
    pos: GenericMapPos<T>;
}
export interface LineGeometryOptions<T = DefaultLatLonKeys> extends GeometryOptions<T> {
    poses: MapPosVector<T> | GenericMapPos<T>[];
}
export interface PolygonGeometryOptions<T = DefaultLatLonKeys> extends GeometryOptions<T> {
    poses: MapPosVector<T> | GenericMapPos<T>[];
}
export class PointGeometry<T = DefaultLatLonKeys> extends Geometry<T, PointGeometryOptions<T>> {
    getPos(): GenericMapPos<T>;
}

export class LineGeometry<T = DefaultLatLonKeys> extends Geometry<T, LineGeometryOptions<T>> {
    getPoses(): MapPosVector<T>;
}

export class PolygonGeometry<T = DefaultLatLonKeys> extends Geometry<T, PolygonGeometryOptions<T>> {
    getPoses(): MapPosVector<T>;
}

export interface PointGeometry<T = DefaultLatLonKeys> extends Acc_PointGeometry, Omit<Met_PointGeometry, 'getPos'> {}

export interface LineGeometry<T = DefaultLatLonKeys> extends Acc_LineGeometry, Omit<Met_LineGeometry, 'getPoses'> {}

export interface PolygonGeometry<T = DefaultLatLonKeys> extends Acc_PolygonGeometry, Omit<Met_PolygonGeometry, 'getPoses'> {}

export interface Geometry<T = DefaultLatLonKeys, U extends GeometryOptions = GeometryOptions<T>> extends Acc_Geometry, Omit<Met_Geometry, 'getBounds' | 'getCenterPos'> {}

export interface PointGeometry<T = DefaultLatLonKeys> extends Acc_Geometry, Omit<Met_Geometry, 'getCenterPos'> {}

export interface LineGeometry<T = DefaultLatLonKeys> extends Acc_Geometry, Omit<Met_Geometry, 'getCenterPos'> {}

export interface PolygonGeometry<T = DefaultLatLonKeys> extends Acc_Geometry, Omit<Met_Geometry, 'getCenterPos'> {}
