import { BaseNative } from '../carto.common';
import { VectorElementOptions, VectorElementStyleBuilderOptions } from './vectorelements';

export abstract class BaseVectorElementStyleBuilder<T, U extends VectorElementStyleBuilderOptions> extends BaseNative<T, U> {}
