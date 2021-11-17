import { ProjectionClass, ProjectionOptions } from '.';

export interface EPSG4326Options extends ProjectionOptions {}
export class EPSG4326<G = DefaultLatLonKeys> extends ProjectionClass<G, any, EPSG4326Options> {
    createNative();
}
