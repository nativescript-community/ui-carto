// SCAFFOLD - generated starting point, review before use.
// com.massifmaps.celestial.CelestialObjectVector

import { BaseNative } from '../BaseNative';
import { bindNative } from '../nativeclass.common';
import { ACCESSORS, Accessors, METHODS, SELECTORS } from '../bindings/celestial/CelestialObjectVector';
import { CelestialObjectVectorOptions } from './CelestialObjectVector';

/** the generated accessors, so they are visible to TypeScript */
export interface CelestialObjectVector extends Accessors {}

export class CelestialObjectVector extends BaseNative<com.massifmaps.celestial.CelestialObjectVector, CelestialObjectVectorOptions> {
    // available native constructors:
    //   new CelestialObjectVector(n: number)
    //   new CelestialObjectVector()
    createNative(options: CelestialObjectVectorOptions) {
        return new com.massifmaps.celestial.CelestialObjectVector(); // TODO pick the right overload
    }
}

bindNative(CelestialObjectVector, METHODS, ACCESSORS, { selectors: SELECTORS });
