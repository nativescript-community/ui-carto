import { Observable } from '@nativescript/core';

export abstract class BaseNative<T, U extends {}> extends Observable {
    constructor(public options: U = {} as any, native?: T) {
        super();
        if (native) {
            this.native = native;
        }
    }
    native: T;
    protected duringInit = false;
    initNativeView(native: T, options: U) {
        this.duringInit = true;
        for (const key in options) {
            (this as any)[key] = options[key];
        }
        this.duringInit = false;
    }
    getNative() {
        if (!this.native) {
            this.native = this.createNative(this.options);
            this.initNativeView(this.native, this.options);
        }
        return this.native;
    }
    createNative(options: U): T {
        return null;
    }
}
