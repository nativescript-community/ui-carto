import { CSSType, Observable, View } from 'tns-core-modules/ui/core/view';
import { ElementOptions, ElementStyleBuilderOptions } from './carto';

export interface CreatMarkerOptions extends Location {
    title: string;
    subtitle: string;
    selected: boolean;
}

export interface CreatRouteOptions {
    points: Location[];
}



type Options<T> = { [P in keyof T]: any };

export abstract class BaseNative<T, U extends {}> extends Observable {
    constructor(public options?: U, native?: T) {
        super();
        if (native) {
            this.native = native;
        }
    }
    native: T;
    initNativeView(native: T, options: U) {
        for (const key in options) {
            (this as any)[key] = options[key];
        }
    }
    getNative() {
        if (!this.native) {
            this.native = this.createNative(this.options);
            this.initNativeView(this.native, this.options);
        }
        return this.native;
    }
    abstract createNative(options: U): T;
}
export abstract class BaseElementStyleBuilder<T, U extends ElementStyleBuilderOptions> extends BaseNative<T, U> {}
export abstract class BaseElement<T, U extends ElementOptions> extends BaseNative<T, U> {}
