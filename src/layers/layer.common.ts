import { BaseNative, nativeProperty } from '../carto.common';
import { LayerOptions } from './layer';

export abstract class BaseLayer<T, U extends LayerOptions> extends BaseNative<T, U> {
    @nativeProperty opacity: number;
    @nativeProperty updatePriority: number;
    @nativeProperty visible: boolean;
}
