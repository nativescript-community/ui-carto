import { BaseNative } from '../carto.common';
import { EPSG3857Options } from './epsg3857.common';
import { BaseProjection } from './projection.common';

export class ProjectionOptions {}
export abstract class ProjectionClass<T, U extends ProjectionOptions> extends BaseProjection<T, U> {}
export declare class Projection<U extends ProjectionOptions> extends BaseProjection<any, U> {
    createNative(): any;
    fromWgs84(pos: Position): Position;
    toWgs84(pos: Position): Position;
}

export interface IProjection extends Projection<any>  {
    fromWgs84(pos: Position): Position;
    toWgs84(pos: Position): Position;
}
