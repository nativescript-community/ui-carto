// SCAFFOLD - generated starting point, review before use.
// com.massifmaps.layers.CelestialLayer / MSFCelestialLayer

import { BaseNative } from '../BaseNative';
import { Accessors, Methods } from '../bindings/layers/CelestialLayer';
import { Accessors as Acc_Layer, Methods as Met_Layer } from '../bindings/layers/Layer';

/** TODO extend LayerOptions - the wrapper for com.massifmaps.layers.Layer - once you know it exists */
export interface CelestialLayerOptions {}

/** what a caller implements to hear about celestial events */
export interface CelestialEventListener {
    /** TODO name the arguments - natively ClickInfo, CelestialObject */
    onCelestialObjectClicked(arg0: any, arg1: any): boolean;
}

/** the generated forwarders, so they are visible to TypeScript */
export interface CelestialLayer extends Accessors, Omit<Methods, 'setCelestialEventListener' | 'getCelestialEventListener'> {}
export class CelestialLayer extends BaseNative<any, CelestialLayerOptions> {
    setCelestialEventListener(listener: CelestialEventListener): void;
}

export interface CelestialLayer extends Acc_Layer, Omit<Met_Layer, 'isUpdateInProgress'> {}
