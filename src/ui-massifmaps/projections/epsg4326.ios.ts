import { ProjectionClass } from '.';
import { EPSG4326Options } from './epsg4326';

export class EPSG4326 extends ProjectionClass<any, MSFEPSG4326, EPSG4326Options> {
    createNative() {
        return MSFEPSG4326.alloc().init();
    }
}
