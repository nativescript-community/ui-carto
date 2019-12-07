import { ProjectionClass } from '.';
import { EPSG3857Options } from './epsg3857';

export class EPSG3857 extends ProjectionClass<NTEPSG3857, EPSG3857Options> {
    createNative() {
        return NTEPSG3857.alloc().init();
    }
}
