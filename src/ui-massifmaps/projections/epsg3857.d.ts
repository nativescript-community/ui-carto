import { ProjectionClass, ProjectionOptions } from '.';
import { Accessors as Acc_EPSG3857, Methods as Met_EPSG3857 } from '../bindings/projections/EPSG3857';
import { Accessors as Acc_Projection, Methods as Met_Projection } from '../bindings/projections/Projection';

export interface EPSG3857Options extends ProjectionOptions {}
export class EPSG3857<G = DefaultLatLonKeys> extends ProjectionClass<G, any, EPSG3857Options> {
    createNative();
}

export interface EPSG3857<G = DefaultLatLonKeys> extends Acc_EPSG3857, Met_EPSG3857 {}

export interface EPSG3857<G = DefaultLatLonKeys> extends Acc_Projection, Omit<Met_Projection, 'fromWgs84' | 'getName' | 'toWgs84'> {}
