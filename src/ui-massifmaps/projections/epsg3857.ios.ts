import { ProjectionClass } from '.';
import { EPSG3857Options } from './epsg3857';

export class EPSG3857 extends ProjectionClass<any, MSFEPSG3857, EPSG3857Options> {
    createNative() {
        return MSFEPSG3857.alloc().init();
    }
}
