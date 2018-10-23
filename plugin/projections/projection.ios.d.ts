import { MapPos } from '../core/core';
import { ProjectionOptions } from './projection';
import { BaseProjection } from './projection.common';
export declare abstract class ProjectionClass<T extends NTProjection, U extends ProjectionOptions> extends BaseProjection<T, U> {
    fromWgs84(pos: MapPos): MapPos;
    toWgs84(pos: MapPos): MapPos;
}
export declare class Projection extends ProjectionClass<NTProjection, ProjectionOptions> {
    createNative(): any;
}
