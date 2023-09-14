/* eslint-disable no-redeclare */
import { ImageAsset, ImageSource, Utils, knownFolders, path } from '@nativescript/core';
import { NativePropertyOptions } from '.';
import { fromNativeMapRange, toNativeMapRange } from './utils';

function createGetter(key: string, options: NativePropertyOptions) {
    const nativeGetterName = ((__ANDROID__ ? options.android : options.ios) || options).nativeGetterName || 'get' + key.charAt(0).toUpperCase() + key.slice(1);
    const converter = options.converter;
    return function () {
        let result;
        if (this['_' + key]) {
            return this['_' + key];
        }
        if (this.native && this.native[nativeGetterName]) {
            result = this.native[nativeGetterName]();
            result = converter ? converter.fromNative.call(this, result, key) : result;
        } else {
            result = this.options[key] || options.defaultValue;
        }
        return result;
    };
}
function createSetter(key, options: NativePropertyOptions) {
    const nativeSetterName = ((__ANDROID__ ? options.android : options.ios) || options).nativeSetterName || 'set' + key.charAt(0).toUpperCase() + key.slice(1);
    return function (newVal) {
        if (this['_' + key] === newVal) {
            return;
        }
        this['_' + key] = this.options[key] = newVal;
        if (this.native && this.native[nativeSetterName]) {
            const actualVal = options.converter ? options.converter.toNative.call(this, newVal, key) : newVal;
            this.getNative()[nativeSetterName](actualVal);
            this.mBuildStyle = null;
        }
    };
}

function nativePropertyGenerator(target: Object, key: string, options?: NativePropertyOptions) {
    Object.defineProperty(target, key, {
        get: createGetter(key, options),
        set: createSetter(key, options),
        enumerable: true,
        configurable: true
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

export function nativeMapRangeProperty(target: any, k?, desc?: PropertyDescriptor): any;
export function nativeMapRangeProperty(options: NativePropertyOptions): (target: any, k?, desc?: PropertyDescriptor) => any;
export function nativeMapRangeProperty(...args) {
    return nativeProperty(
        {
            converter: {
                fromNative: fromNativeMapRange,
                toNative: toNativeMapRange
            }
        },
        ...args
    );
}

export function nonenumerable(target: any, name: string): void;
export function nonenumerable(target: any, name: string, desc: PropertyDescriptor): PropertyDescriptor;
export function nonenumerable(target: any, name: string, desc?: any) {
    if (desc) {
        desc.enumerable = false;
        return desc;
    }
    Object.defineProperty(target, name, {
        set(value) {
            Object.defineProperty(this, name, {
                value,
                writable: true,
                configurable: true
            });
        },
        configurable: true
    });
}

export function _createImageSourceFromSrc(value: string | ImageSource | ImageAsset): ImageSource {
    if (typeof value === 'string' || value instanceof String) {
        value = value.trim();

        let source: ImageSource;
        if (Utils.isDataURI(value)) {
            const base64Data = value.split(',')[1];
            if (base64Data !== undefined) {
                source = ImageSource.fromBase64Sync(base64Data);
            }
        } else if (Utils.isFileOrResourcePath(value)) {
            if (value.indexOf(Utils.RESOURCE_PREFIX) === 0) {
                const resPath = value.substr(Utils.RESOURCE_PREFIX.length);
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
    if (fileName.indexOf('~/') === 0) {
        if (!currentAppFolder) {
            currentAppFolder = knownFolders.currentApp().path;
        }
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
