import { MapPos, fromNativeMapPos, toNativeMapPos } from '../core';
import { ProjectionOptions } from '.';
import { BaseProjection } from './index.common';

export abstract class ProjectionClass<T extends com.carto.projections.Projection, U extends ProjectionOptions> extends BaseProjection<T, U> {
    fromWgs84(position: MapPos) {
        return fromNativeMapPos(this.getNative().fromWgs84(toNativeMapPos(position)));
    }
    toWgs84(position: MapPos) {
        return fromNativeMapPos(this.getNative().toWgs84(toNativeMapPos(position)));
    }
    fromLatLong(latitude, longitude) {
        return fromNativeMapPos(this.getNative().fromLatLong(latitude, longitude));
    }
    toLatLong(x, y) {
        return fromNativeMapPos(this.getNative().toLatLong(x, y));
    }
}

export class Projection extends ProjectionClass<com.carto.projections.Projection, ProjectionOptions> {}
