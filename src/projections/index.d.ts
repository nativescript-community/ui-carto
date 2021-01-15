import { BaseNative } from '../index.common';
import { EPSG3857Options } from './epsg3857';
import { MapPos } from '../core';

export class ProjectionOptions {}
export abstract class BaseProjection<T, U extends ProjectionOptions> extends BaseNative<T, U> {}
export abstract class ProjectionClass<G = DefaultLatLonKeys, T, U extends ProjectionOptions> extends BaseProjection<T, U> {
    fromWgs84<U = G>(position: GenericMapPos<U>): GenericMapPos<U>;
    toWgs84<U = G>(position: GenericMapPos<U>): GenericMapPos<U>;
    fromLatLong<U = G>(lat, lon): GenericMapPos<U>;
    toLatLong<U = G>(x, y): GenericMapPos<U>;
}
export declare class Projection extends ProjectionClass<DefaultLatLonKeys, any, ProjectionOptions> {
    createNative(): any;
}

export interface IProjection extends ProjectionClass<any, any, any> {}
