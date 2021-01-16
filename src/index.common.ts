/* eslint-disable no-redeclare */
import { Observable } from '@nativescript/core/data/observable';
import { ImageSource } from '@nativescript/core/image-source';
import { ImageAsset } from '@nativescript/core/image-asset';
import { RESOURCE_PREFIX, isDataURI, isFileOrResourcePath } from '@nativescript/core/utils/utils';
import { isAndroid } from '@nativescript/core/platform';
import { knownFolders, path } from '@nativescript/core/file-system';
import { NativePropertyOptions } from '.';

function createGetter(key: string, options: NativePropertyOptions) {
    const nativeGetterName = ((isAndroid ? options.android : options.ios) || options).nativeGetterName || 'get' + key.charAt(0).toUpperCase() + key.slice(1);
    const converter = options.converter;
    return function () {
        let result;
        if (this.native && this.native[nativeGetterName]) {
            result = this.native[nativeGetterName]();
        } else {
            result = this.options[key] || options.defaultValue;
        }
        result = converter ? converter.fromNative.call(this, result, key) : result;
        return result;
    };
}
function createSetter(key, options: NativePropertyOptions) {
    const nativeSetterName = ((isAndroid ? options.android : options.ios) || options).nativeSetterName || 'set' + key.charAt(0).toUpperCase() + key.slice(1);
    return function (newVal) {
        this.options[key] = newVal;
        if (this.native && this.native[nativeSetterName]) {
            const actualVal = options.converter ? options.converter.toNative.call(this, newVal, key) : newVal;
            this.native[nativeSetterName](actualVal);
            this._buildStyle = null;
        }
    };
}

function nativePropertyGenerator(target: Object, key: string, options?: NativePropertyOptions) {
    Object.defineProperty(target, key, {
        get: createGetter(key, options),
        set: createSetter(key, options),
        enumerable: true,
        configurable: true,
    });
}
export function nativeProperty(target: any, k?, desc?: PropertyDescriptor): any;
export function nativeProperty(options: NativePropertyOptions): (target: any, k?, desc?: PropertyDescriptor) => any;
export function nativeProperty(...args) {
    if (args.length === 1) {
        /// this must be a factory
        return function (target: any, key?: string, descriptor?: PropertyDescriptor) {
            return nativePropertyGenerator(target, key, args[0] || {});
        };
    } else {
        const options = typeof args[1] === 'string' ? undefined : args[0];
        const startIndex = !!options ? 1 : 0;
        return nativePropertyGenerator(args[startIndex], args[startIndex + 1], options || {});
    }
}
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
    abstract createNative(options: U): T;

    log(...args) {
        console.log(`[${this.constructor.name}]`, ...args);
    }
}

export function _createImageSourceFromSrc(value: string | ImageSource | ImageAsset): ImageSource {
    if (typeof value === 'string' || value instanceof String) {
        value = value.trim();

        let source: ImageSource;
        if (isDataURI(value)) {
            const base64Data = value.split(',')[1];
            if (base64Data !== undefined) {
                source = ImageSource.fromBase64Sync(base64Data);
            }
        } else if (isFileOrResourcePath(value)) {
            if (value.indexOf(RESOURCE_PREFIX) === 0) {
                const resPath = value.substr(RESOURCE_PREFIX.length);
                source = ImageSource.fromResourceSync(resPath);
            } else {
                source = ImageSource.fromFileSync(value);
            }
        } else {
        }
        return source;
    } else if (value instanceof ImageSource) {
        return value;
    } else if (value instanceof ImageAsset) {
        return new ImageSource(value.nativeImage);
    } else {
        return new ImageSource(value);
    }
}
export function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

let currentAppFolder: string;

export function getFileName(str: string): string {
    let fileName = typeof str === 'string' ? str.trim() : '';
    if (!currentAppFolder) {
        currentAppFolder = knownFolders.currentApp().path;
    }
    if (fileName.indexOf('~/') === 0) {
        fileName = path.join(currentAppFolder, fileName.replace('~/', ''));
    }
    return fileName;
}

export function getRelativePathToApp(str: string) {
    const filePath = getFileName(str);
    const toReplace = currentAppFolder.split('/').slice(0, -1).join('/');
    if (filePath.indexOf(toReplace) === 0) {
        return filePath.replace(toReplace, '').slice(1);
    }
    return filePath;
}
