import { fromNativeMapPos, Position, toNativeMapPos } from '../core/core';
import {ProjectionOptions } from './projection';
import { ProjectionClassBase } from './projection.common';

export abstract class ProjectionClass<T extends com.carto.projections.Projection, U extends ProjectionOptions> extends ProjectionClassBase<T, U> {
    fromWgs84(pos: Position) {
        return fromNativeMapPos(this.getNative().fromWgs84(toNativeMapPos(pos)));
    }
    toWgs84(pos: Position) {
        return fromNativeMapPos(this.getNative().toWgs84(toNativeMapPos(pos)));
    }
}
