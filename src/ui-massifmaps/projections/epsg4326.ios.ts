import { ProjectionClass } from '.';
import { EPSG4326Options } from './epsg4326';
import { ACCESSORS as ACC_EPSG4326, Accessors as Acc_EPSG4326, METHODS as MET_EPSG4326, Methods as Met_EPSG4326, SELECTORS as SEL_EPSG4326 } from '../bindings/projections/EPSG4326';
import { bindNative } from '../nativeclass.common';

export class EPSG4326 extends ProjectionClass<any, MSFEPSG4326, EPSG4326Options> {
    createNative() {
        return MSFEPSG4326.alloc().init();
    }
}

export interface EPSG4326 extends Acc_EPSG4326, Omit<Met_EPSG4326, 'fromWgs84' | 'toWgs84'> {}
bindNative(EPSG4326, MET_EPSG4326, ACC_EPSG4326, { selectors: SEL_EPSG4326 });
