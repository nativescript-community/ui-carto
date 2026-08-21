import { BaseNative } from '../BaseNative';
import { EPSG3857Options } from './epsg3857';
import { MapPos } from '../core';
import { Accessors as Acc_Projection } from '../bindings/projections/Projection';
import { Accessors as Acc_ProjectionClass, Methods as Met_ProjectionClass } from '../bindings/projections/Projection';

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

/** on the base, so every projection reports the same surface */
export interface ProjectionClass<G = DefaultLatLonKeys, T, U extends ProjectionOptions> extends Acc_Projection {}

export interface ProjectionClass<G = DefaultLatLonKeys, T, U extends ProjectionOptions>
    extends Omit<Acc_ProjectionClass, 'toLatLong'>,
        Omit<Met_ProjectionClass, 'fromWgs84' | 'toLatLong' | 'toWgs84'> {}
