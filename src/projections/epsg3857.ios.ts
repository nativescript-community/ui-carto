import { EPSG3857Base } from './epsg3857.common';

export class EPSG3857 extends EPSG3857Base<NTEPSG3857> {
    createNative() {
        return NTEPSG3857.alloc().init();
    }
}
