import { BaseNative } from '../carto';

export class ElementOptions {
    metaData?: Object;
}
export class ElementStyleBuilderOptions {}

export abstract class BaseElement<T, U extends ElementOptions> extends BaseNative<T, U> {}
export abstract class Element<T, U extends ElementOptions> extends BaseElement<T, U> {}
export abstract class BaseElementStyleBuilder<T, U extends ElementStyleBuilderOptions> extends BaseNative<T, U> {}
