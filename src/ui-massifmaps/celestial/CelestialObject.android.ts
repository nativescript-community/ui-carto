// SCAFFOLD - generated starting point, review before use.
// com.massifmaps.celestial.CelestialObject

import { BaseNative } from '../BaseNative';
import { bindNative } from '../nativeclass.common';
import { ACCESSORS, Accessors, METHODS, SELECTORS } from '../bindings/celestial/CelestialObject';
import { colorConverter } from '..';
import { CelestialObjectOptions } from './CelestialObject';

/** the generated accessors, so they are visible to TypeScript */
export interface CelestialObject extends Accessors {}

export class CelestialObject extends BaseNative<com.massifmaps.celestial.CelestialObject, CelestialObjectOptions> {
    createNative(options: CelestialObjectOptions) {
        return new com.massifmaps.celestial.CelestialObject(); // TODO pick the right overload
    }
}

bindNative(CelestialObject, METHODS, ACCESSORS, { selectors: SELECTORS, converters: { color: colorConverter } });
