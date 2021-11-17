import { ProjectionClass, ProjectionOptions } from '.';

export interface EPSG3857Options extends ProjectionOptions {}
export class EPSG3857<G = DefaultLatLonKeys> extends ProjectionClass<G, any, EPSG3857Options> {
    createNative();
}
