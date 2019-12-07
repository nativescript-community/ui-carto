import { ProjectionClass } from '.';
import { EPSG4326Options } from './epsg4326';

export class EPSG4326 extends ProjectionClass<NTEPSG4326, EPSG4326Options> {
    createNative() {
        return NTEPSG4326.alloc().init();
    }
}
