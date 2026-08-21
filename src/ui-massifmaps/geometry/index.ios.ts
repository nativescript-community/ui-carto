import { GeometryOptions, LineGeometryOptions, PointGeometryOptions, PolygonGeometryOptions } from '.';
import { mapPosVectorFromArgs } from '..';
import { MapPosVector, fromNativeMapBounds, fromNativeMapPos, toNativeMapPos } from '../core';
import { BaseNative } from '../BaseNative';
import {
    ACCESSORS as ACC_PointGeometry,
    Accessors as Acc_PointGeometry,
    METHODS as MET_PointGeometry,
    Methods as Met_PointGeometry,
    SELECTORS as SEL_PointGeometry
} from '../bindings/geometry/PointGeometry';
import { bindNative } from '../nativeclass.common';
import {
    ACCESSORS as ACC_LineGeometry,
    Accessors as Acc_LineGeometry,
    METHODS as MET_LineGeometry,
    Methods as Met_LineGeometry,
    SELECTORS as SEL_LineGeometry
} from '../bindings/geometry/LineGeometry';
import {
    ACCESSORS as ACC_PolygonGeometry,
    Accessors as Acc_PolygonGeometry,
    METHODS as MET_PolygonGeometry,
    Methods as Met_PolygonGeometry,
    SELECTORS as SEL_PolygonGeometry
} from '../bindings/geometry/PolygonGeometry';
import { ACCESSORS as ACC_Geometry, Accessors as Acc_Geometry, METHODS as MET_Geometry, Methods as Met_Geometry, SELECTORS as SEL_Geometry } from '../bindings/geometry/Geometry';

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

export class PolygonGeometry extends Geometry<MSFPolygonGeometry, PolygonGeometryOptions> {
    createNative(options: PolygonGeometryOptions) {
        return MSFPolygonGeometry.alloc().initWithPoses(mapPosVectorFromArgs(options.poses));
    }

    getPoses() {
        return new MapPosVector(this.getNative().getPoses());
    }
}

export interface PointGeometry extends Acc_PointGeometry, Omit<Met_PointGeometry, 'getCenterPos' | 'getPos'> {}
bindNative(PointGeometry, MET_PointGeometry, ACC_PointGeometry, { selectors: SEL_PointGeometry });

export interface LineGeometry extends Acc_LineGeometry, Omit<Met_LineGeometry, 'getCenterPos' | 'getPoses'> {}
bindNative(LineGeometry, MET_LineGeometry, ACC_LineGeometry, { selectors: SEL_LineGeometry });

export interface PolygonGeometry extends Acc_PolygonGeometry, Omit<Met_PolygonGeometry, 'getCenterPos' | 'getPoses'> {}
bindNative(PolygonGeometry, MET_PolygonGeometry, ACC_PolygonGeometry, { selectors: SEL_PolygonGeometry });

export interface Geometry<T extends MSFGeometry, U extends GeometryOptions> extends Acc_Geometry, Omit<Met_Geometry, 'getBounds' | 'getCenterPos'> {}
bindNative(Geometry, MET_Geometry, ACC_Geometry, { selectors: SEL_Geometry });
