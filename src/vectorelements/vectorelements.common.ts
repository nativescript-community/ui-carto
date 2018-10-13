import { BaseNative } from '../carto.common';
import { ElementOptions, ElementStyleBuilderOptions } from './vectorelements';

export abstract class BaseElement<T, U extends ElementOptions> extends BaseNative<T, U> {}
export abstract class BaseElementStyleBuilder<T, U extends ElementStyleBuilderOptions> extends BaseNative<T, U> {}
