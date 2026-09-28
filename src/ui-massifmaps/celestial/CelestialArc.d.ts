// SCAFFOLD - generated starting point, review before use.

import { BaseNative } from '../BaseNative';
import { Accessors, Methods } from '../bindings/celestial/CelestialArc';
import { Accessors as Acc_CelestialObject, Methods as Met_CelestialObject } from '../bindings/celestial/CelestialObject';

/** TODO extend CelestialObjectOptions once it exists */
export interface CelestialArcOptions {}

export interface CelestialArc extends Accessors, Methods {}
export class CelestialArc extends BaseNative<any, CelestialArcOptions> {
}

export interface CelestialArc extends Acc_CelestialObject, Met_CelestialObject {}
