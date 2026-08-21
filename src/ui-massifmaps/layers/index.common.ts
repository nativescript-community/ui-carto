import { BaseNative } from '..';
import { LayerOptions } from '.';

export abstract class BaseLayer<T, U extends LayerOptions> extends BaseNative<T, U> {
}
