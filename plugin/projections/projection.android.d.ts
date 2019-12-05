import { MapPos } from '../core/core';
import { ProjectionOptions } from './projection';
import { BaseProjection } from './projection.common';
export declare abstract class ProjectionClass<T extends com.carto.projections.Projection, U extends ProjectionOptions> extends BaseProjection<T, U> {
    fromWgs84(position: MapPos): import("../core/core.common").GenericMapPos<import("../core/core.common").DefaultLatLonKeys>;
    toWgs84(position: MapPos): import("../core/core.common").GenericMapPos<import("../core/core.common").DefaultLatLonKeys>;
}
export declare class Projection extends ProjectionClass<com.carto.projections.Projection, ProjectionOptions> {
    createNative(): any;
}
