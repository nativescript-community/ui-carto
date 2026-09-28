// SCAFFOLD - generated starting point, review before use.

import { BaseNative } from '../BaseNative';
import { bindNative } from '../nativeclass.common';
import { ACCESSORS, Accessors, METHODS, SELECTORS } from '../bindings/celestial/CelestialObjectVector';
import { CelestialObjectVectorOptions } from './CelestialObjectVector';

export interface CelestialObjectVector extends Accessors {}

export class CelestialObjectVector extends BaseNative<com.massifmaps.celestial.CelestialObjectVector, CelestialObjectVectorOptions> {
    createNative(options: CelestialObjectVectorOptions) {
        return new com.massifmaps.celestial.CelestialObjectVector(); // TODO pick the right overload
    }
}

bindNative(CelestialObjectVector, METHODS, ACCESSORS, { selectors: SELECTORS });
