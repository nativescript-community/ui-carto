import { fromNativeMapPos, MapPos, toNativeMapPos } from '../core/core';
import {ProjectionOptions } from './projection';
import { BaseProjection } from './projection.common';

export abstract class ProjectionClass<T extends NTProjection, U extends ProjectionOptions> extends BaseProjection<T, U> {
    fromWgs84(position: MapPos) {
        return fromNativeMapPos(this.getNative().fromWgs84(toNativeMapPos(position)));
    }
    toWgs84(position: MapPos) {
        return fromNativeMapPos(this.getNative().toWgs84(toNativeMapPos(position)));
    }
}

export class Projection extends ProjectionClass<NTProjection, ProjectionOptions> {
    createNative() {
        return null;
    }
}
