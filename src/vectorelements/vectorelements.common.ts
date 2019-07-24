import { BaseNative } from '../carto.common';
import { VectorElementStyleBuilderOptions } from './vectorelements';

export abstract class BaseVectorElementStyleBuilder<T, U extends VectorElementStyleBuilderOptions> extends BaseNative<T, U> {
    abstract buildStyle(): any;

}
