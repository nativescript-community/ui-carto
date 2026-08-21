import { ProjectionClass, ProjectionOptions } from '.';
import { Accessors as Acc_EPSG4326, Methods as Met_EPSG4326 } from '../bindings/projections/EPSG4326';
import { Accessors as Acc_Projection, Methods as Met_Projection } from '../bindings/projections/Projection';

export interface EPSG4326Options extends ProjectionOptions {}
export class EPSG4326<G = DefaultLatLonKeys> extends ProjectionClass<G, any, EPSG4326Options> {
    createNative();
}

export interface EPSG4326<G = DefaultLatLonKeys> extends Acc_EPSG4326, Met_EPSG4326 {}

export interface EPSG4326<G = DefaultLatLonKeys> extends Acc_Projection, Omit<Met_Projection, 'fromWgs84' | 'getName' | 'toWgs84'> {}
