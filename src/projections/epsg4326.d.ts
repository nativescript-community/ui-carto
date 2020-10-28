import { ProjectionClass, ProjectionOptions } from '.';

export interface EPSG4326Options extends ProjectionOptions {}
export class EPSG4326 extends ProjectionClass<any, EPSG4326Options> {
    createNative();
}
