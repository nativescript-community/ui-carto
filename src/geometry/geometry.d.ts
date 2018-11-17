import { MapPos, MapBounds } from '../core/core';

export interface Geometry {
    getCenterPos(): any // native pos
    getBounds(): any // native bounds
}
export interface PointGeometry extends Geometry {
    getPos(): any // native pos,
}