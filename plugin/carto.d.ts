import { Observable } from 'tns-core-modules/ui/core/view';

export abstract class BaseNative<T, U extends {}> extends Observable {
    options?:U
    constructor(options?: U);
    native: T;
    initNativeView(native: T, options: U);
    getNative(): T;
    createNative(options: U): T;
}
