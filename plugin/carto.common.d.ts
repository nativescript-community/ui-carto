import { Observable } from 'tns-core-modules/ui/core/view';
import { ImageSource } from 'tns-core-modules/image-source/image-source';
import { ImageAsset } from 'tns-core-modules/image-asset/image-asset';
export declare abstract class BaseNative<T, U extends {}> extends Observable {
    options: U;
    constructor(options?: U, native?: T);
    native: T;
    initNativeView(native: T, options: U): void;
    getNative(): T;
    abstract createNative(options: U): T;
}
export declare function _createImageSourceFromSrc(value: string | ImageSource | ImageAsset): ImageSource;
export declare function capitalize(s: any): any;
export declare function getFileName(str: string): string;
export declare function getRelativePathToApp(str: string): string;
