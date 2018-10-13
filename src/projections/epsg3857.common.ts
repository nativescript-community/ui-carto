import { ProjectionClass, ProjectionOptions } from './projection';

export interface EPSG3857Options extends ProjectionOptions {}
export abstract class EPSG3857Base<NativeClass> extends ProjectionClass<NativeClass, EPSG3857Options> {}
