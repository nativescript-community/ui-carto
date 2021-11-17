import { MapPos, fromNativeMapPos, toNativeMapPos } from '../core';
import {ProjectionOptions } from '.';
import { BaseProjection } from './index.common';

export abstract class ProjectionClass<T extends NTProjection, U extends ProjectionOptions> extends BaseProjection<T, U> {
    fromWgs84(position: MapPos) {
        return fromNativeMapPos(this.getNative().fromWgs84(toNativeMapPos(position)));
    }
    toWgs84(position: MapPos) {
        return fromNativeMapPos(this.getNative().toWgs84(toNativeMapPos(position)));
    }
    fromLatLong(latitude, longitude) {
        return fromNativeMapPos(this.getNative().fromLatLng(latitude, longitude));
    }
    toLatLong(x, y) {
        return fromNativeMapPos(this.getNative().toLatLongY(x, y));
    }
}

export class Projection extends ProjectionClass<NTProjection, ProjectionOptions> {
    
}
