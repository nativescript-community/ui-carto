// SCAFFOLD - generated starting point, review before use.
// com.massifmaps.celestial.CelestialArc / MSFCelestialArc

import { BaseNative } from '../BaseNative';
import { Accessors, Methods } from '../bindings/celestial/CelestialArc';
import { Accessors as Acc_CelestialObject, Methods as Met_CelestialObject } from '../bindings/celestial/CelestialObject';

/** TODO extend CelestialObjectOptions - the wrapper for com.massifmaps.celestial.CelestialObject - once you know it exists */
export interface CelestialArcOptions {}

/** the generated forwarders, so they are visible to TypeScript */
export interface CelestialArc extends Accessors, Methods {}
export class CelestialArc extends BaseNative<any, CelestialArcOptions> {
}

export interface CelestialArc extends Acc_CelestialObject, Met_CelestialObject {}
