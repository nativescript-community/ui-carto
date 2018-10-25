import { ProjectionClass, ProjectionOptions } from './projection';

export interface EPSG3857Options extends ProjectionOptions {}
export class EPSG3857 extends ProjectionClass<any, EPSG3857Options> {
    createNative()
}
