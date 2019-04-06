import { ProjectionClass } from './projection';
import { EPSG3857Options } from './epsg3857';
export declare class EPSG3857 extends ProjectionClass<NTEPSG3857, EPSG3857Options> {
    createNative(): NTEPSG3857;
}
