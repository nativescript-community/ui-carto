// SCAFFOLD - generated starting point, review before use.
// MSFCelestialArc

import { BaseNative } from '../BaseNative';
import { bindNative } from '../nativeclass.common';
import { ACCESSORS, Accessors, METHODS, SELECTORS } from '../bindings/celestial/CelestialArc';
import { CelestialArcOptions } from './CelestialArc';
import { ACCESSORS as ACC_CelestialObject, Accessors as Acc_CelestialObject, METHODS as MET_CelestialObject, Methods as Met_CelestialObject, SELECTORS as SEL_CelestialObject } from '../bindings/celestial/CelestialObject';
import { colorConverter } from '..';

/** the generated accessors, so they are visible to TypeScript */
export interface CelestialArc extends Accessors {}

export class CelestialArc extends BaseNative<MSFCelestialArc, CelestialArcOptions> {
    createNative(options: CelestialArcOptions) {
        return MSFCelestialArc.alloc().init(); // TODO pick the right overload
    }
}

bindNative(CelestialArc, METHODS, ACCESSORS, { selectors: SELECTORS });

export interface CelestialArc extends Acc_CelestialObject, Met_CelestialObject {}
bindNative(CelestialArc, MET_CelestialObject, ACC_CelestialObject, { selectors: SEL_CelestialObject, converters: { color: colorConverter } });
