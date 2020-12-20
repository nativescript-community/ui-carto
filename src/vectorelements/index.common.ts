import { BaseNative } from '../index.common';
import { VectorElementStyleBuilderOptions } from '.';

export function styleBuilderProperty(target: any, propertyKey?, desc?: PropertyDescriptor): any {
    Object.defineProperty(target, propertyKey, {
        get() {
            return this.options.styleBuilder[propertyKey];
        },
        set(value) {
            this.options.styleBuilder[propertyKey] = value;
            this.rebuildStyle();
        },
    });
}

export function lineStyleBuilderProperty(target: any, propertyKey?, desc?: PropertyDescriptor): any {
    const realKey = propertyKey.charAt(4).toLowerCase() + propertyKey.slice(5);
    Object.defineProperty(target, propertyKey, {
        get() {
            return this.options.styleBuilder.lineStyleBuilder[realKey];
        },
        set(value) {
            this.options.styleBuilder.lineStyleBuilder[realKey] = value;
            this.rebuildLineStyle();
        },
    });
}

export abstract class BaseVectorElementStyleBuilder<T, U extends VectorElementStyleBuilderOptions> extends BaseNative<T, U> {
    abstract buildStyle(): any;

}
