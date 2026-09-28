// SCAFFOLD - generated starting point, review before use.

import { BaseNative } from '../BaseNative';
import { bindNative } from '../nativeclass.common';
import { ACCESSORS, Accessors, METHODS, SELECTORS } from '../bindings/celestial/CelestialObject';
import { colorConverter } from '..';
import { CelestialObjectOptions } from './CelestialObject';

export interface CelestialObject extends Accessors {}

export class CelestialObject extends BaseNative<MSFCelestialObject, CelestialObjectOptions> {
    createNative(options: CelestialObjectOptions) {
        return MSFCelestialObject.alloc().init(); // TODO pick the right overload
    }
}

bindNative(CelestialObject, METHODS, ACCESSORS, { selectors: SELECTORS, converters: { color: colorConverter } });
