// SCAFFOLD - generated starting point, review before use.

import { BaseNative } from '../BaseNative';
import { bindNative } from '../nativeclass.common';
import { ACCESSORS, Accessors, METHODS, SELECTORS } from '../bindings/celestial/CelestialArc';
import { CelestialArcOptions } from './CelestialArc';
import { ACCESSORS as ACC_CelestialObject, Accessors as Acc_CelestialObject, METHODS as MET_CelestialObject, Methods as Met_CelestialObject, SELECTORS as SEL_CelestialObject } from '../bindings/celestial/CelestialObject';
import { colorConverter } from '..';

export interface CelestialArc extends Accessors {}

export class CelestialArc extends BaseNative<com.massifmaps.celestial.CelestialArc, CelestialArcOptions> {
    createNative(options: CelestialArcOptions) {
        return new com.massifmaps.celestial.CelestialArc(); // TODO pick the right overload
    }
}

bindNative(CelestialArc, METHODS, ACCESSORS, { selectors: SELECTORS });

export interface CelestialArc extends Acc_CelestialObject, Met_CelestialObject {}
bindNative(CelestialArc, MET_CelestialObject, ACC_CelestialObject, { selectors: SEL_CelestialObject, converters: { color: colorConverter } });
