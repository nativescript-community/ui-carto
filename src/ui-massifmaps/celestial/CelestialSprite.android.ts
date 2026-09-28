// SCAFFOLD - generated starting point, review before use.

import { BaseNative } from '../BaseNative';
import { bindNative } from '../nativeclass.common';
import { ACCESSORS, Accessors, METHODS, SELECTORS } from '../bindings/celestial/CelestialSprite';
import { massifImageConverter } from '..';
import { CelestialSpriteOptions } from './CelestialSprite';
import { ACCESSORS as ACC_CelestialObject, Accessors as Acc_CelestialObject, METHODS as MET_CelestialObject, Methods as Met_CelestialObject, SELECTORS as SEL_CelestialObject } from '../bindings/celestial/CelestialObject';
import { colorConverter } from '..';

export interface CelestialSprite extends Accessors {}

export class CelestialSprite extends BaseNative<com.massifmaps.celestial.CelestialSprite, CelestialSpriteOptions> {
    createNative(options: CelestialSpriteOptions) {
        return new com.massifmaps.celestial.CelestialSprite(); // TODO pick the right overload
    }
}

bindNative(CelestialSprite, METHODS, ACCESSORS, { selectors: SELECTORS, converters: { bitmap: massifImageConverter } });

export interface CelestialSprite extends Acc_CelestialObject, Met_CelestialObject {}
bindNative(CelestialSprite, MET_CelestialObject, ACC_CelestialObject, { selectors: SEL_CelestialObject, converters: { color: colorConverter } });
