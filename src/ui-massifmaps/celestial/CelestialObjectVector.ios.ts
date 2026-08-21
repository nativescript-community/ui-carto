// SCAFFOLD - generated starting point, review before use.
// MSFCelestialObjectVector

import { BaseNative } from '../BaseNative';
import { bindNative } from '../nativeclass.common';
import { ACCESSORS, Accessors, METHODS, SELECTORS } from '../bindings/celestial/CelestialObjectVector';
import { CelestialObjectVectorOptions } from './CelestialObjectVector';

/** the generated accessors, so they are visible to TypeScript */
export interface CelestialObjectVector extends Accessors {}

export class CelestialObjectVector extends BaseNative<MSFCelestialObjectVector, CelestialObjectVectorOptions> {
    createNative(options: CelestialObjectVectorOptions) {
        return MSFCelestialObjectVector.alloc().init(); // TODO pick the right overload
    }
}

bindNative(CelestialObjectVector, METHODS, ACCESSORS, { selectors: SELECTORS });
