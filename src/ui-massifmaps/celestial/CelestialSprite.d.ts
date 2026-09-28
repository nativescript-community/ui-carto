// SCAFFOLD - generated starting point, review before use.

import { BaseNative } from '../BaseNative';
import { Accessors, Methods } from '../bindings/celestial/CelestialSprite';
import { Accessors as Acc_CelestialObject, Methods as Met_CelestialObject } from '../bindings/celestial/CelestialObject';

/** TODO extend CelestialObjectOptions once it exists */
export interface CelestialSpriteOptions {}

export interface CelestialSprite extends Accessors, Methods {}
export class CelestialSprite extends BaseNative<any, CelestialSpriteOptions> {
}

export interface CelestialSprite extends Acc_CelestialObject, Met_CelestialObject {}
