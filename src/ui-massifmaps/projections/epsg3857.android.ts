import { ProjectionClass } from '.';
import { EPSG3857Options } from './epsg3857';
import { ACCESSORS as ACC_EPSG3857, Accessors as Acc_EPSG3857, METHODS as MET_EPSG3857, Methods as Met_EPSG3857, SELECTORS as SEL_EPSG3857 } from '../bindings/projections/EPSG3857';
import { bindNative } from '../nativeclass.common';

export class EPSG3857 extends ProjectionClass<any, com.massifmaps.projections.EPSG3857, EPSG3857Options> {
    createNative() {
        return new com.massifmaps.projections.EPSG3857();
    }
}

export interface EPSG3857 extends Acc_EPSG3857, Omit<Met_EPSG3857, 'fromWgs84' | 'toWgs84'> {}
bindNative(EPSG3857, MET_EPSG3857, ACC_EPSG3857, { selectors: SEL_EPSG3857 });
