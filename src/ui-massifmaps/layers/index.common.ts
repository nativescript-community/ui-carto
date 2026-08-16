import { BaseNative, nativeProperty } from '..';
import { LayerOptions } from '.';

export abstract class BaseLayer<T, U extends LayerOptions> extends BaseNative<T, U> {
    @nativeProperty opacity: number;
    @nativeProperty updatePriority: number;
    @nativeProperty visible: boolean;
}
