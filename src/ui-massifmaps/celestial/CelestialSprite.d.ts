// SCAFFOLD - generated starting point, review before use.
// com.massifmaps.celestial.CelestialSprite / MSFCelestialSprite

import { BaseNative } from '../BaseNative';
import { Accessors, Methods } from '../bindings/celestial/CelestialSprite';
import { Accessors as Acc_CelestialObject, Methods as Met_CelestialObject } from '../bindings/celestial/CelestialObject';

/** TODO extend CelestialObjectOptions - the wrapper for com.massifmaps.celestial.CelestialObject - once you know it exists */
export interface CelestialSpriteOptions {}

/** the generated forwarders, so they are visible to TypeScript */
export interface CelestialSprite extends Accessors, Methods {}
export class CelestialSprite extends BaseNative<any, CelestialSpriteOptions> {
}

export interface CelestialSprite extends Acc_CelestialObject, Met_CelestialObject {}
