import { BaseNative } from '../carto.common';
import { EPSG3857Options } from './epsg3857.common';
import { BaseProjection } from './projection.common';
import { MapPos } from '../core/core';

export class ProjectionOptions {}
export abstract class ProjectionClass<T, U extends ProjectionOptions> extends BaseProjection<T, U> {
    fromWgs84(pos: MapPos): MapPos;
    toWgs84(pos: MapPos): MapPos;
}
export declare class Projection extends ProjectionClass<any, ProjectionOptions> {
    createNative(): any;
}

export interface IProjection extends ProjectionClass<any, any>  {
    fromWgs84(pos: MapPos): MapPos;
    toWgs84(pos: MapPos): MapPos;
}
