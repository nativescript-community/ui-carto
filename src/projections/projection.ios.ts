import { fromNativeMapPos, MapPos, toNativeMapPos } from '../core/core';
import {ProjectionOptions } from './projection';
import { BaseProjection } from './projection.common';

export abstract class ProjectionClass<T extends NTProjection, U extends ProjectionOptions> extends BaseProjection<T, U> {
    fromWgs84(pos: MapPos) {
        return fromNativeMapPos(this.getNative().fromWgs84(toNativeMapPos(pos)));
    }
    toWgs84(pos: MapPos) {
        return fromNativeMapPos(this.getNative().toWgs84(toNativeMapPos(pos)));
    }
}

export class Projection extends ProjectionClass<NTProjection, ProjectionOptions> {
    createNative() {
        return null;
    }
}
