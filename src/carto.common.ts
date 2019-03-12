import { Observable } from 'tns-core-modules/ui/core/view';
import { fromAsset, fromNativeSource, fromUrl, ImageSource } from 'tns-core-modules/image-source/image-source';
import { ImageAsset } from 'tns-core-modules/image-asset/image-asset';
import { isDataURI, isFileOrResourcePath, RESOURCE_PREFIX } from 'tns-core-modules/utils/utils';

// export interface CreatMarkerOptions extends Location {
//     title: string;
//     subtitle: string;
//     selected: boolean;
// }

// export interface CreatRouteOptions {
//     points: Location[];
// }

// type Options<T> = { [P in keyof T]: any };

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

export function _createImageSourceFromSrc(value: string | ImageSource | ImageAsset): ImageSource {
    if (typeof value === 'string' || value instanceof String) {
        value = value.trim();

        const source = new ImageSource();
        if (isDataURI(value)) {
            const base64Data = value.split(',')[1];
            if (base64Data !== undefined) {
                // if (sync) {
                source.loadFromBase64(base64Data);
                // return source;
                // imageLoaded();
                // } else {
                // return source.fromBase64(base64Data).then(() => source);
                // .then(imageLoaded);
                // }
            }
        } else if (isFileOrResourcePath(value)) {
            if (value.indexOf(RESOURCE_PREFIX) === 0) {
                const resPath = value.substr(RESOURCE_PREFIX.length);
                // if (sync) {
                source.loadFromResource(resPath);
                // return source.fromResource(resPath).then(() => source);
                // imageLoaded();
                // } else {
                //     this.imageSource = null;
                //     source.fromResource(resPath)
                //     // .then(imageLoaded);
                // }
            } else {
                // if (sync) {
                source.loadFromFile(value);
                // return source.fromFile(value).then(() => source);
                // imageLoaded();
                // } else {
                //     this.imageSource = null;
                //     source.fromFile(value).then(imageLoaded);
                // }
            }
        } else {
            // this.imageSource = null;
            // return fromUrl(value);
            // fromUrl(value);
            // .then(
            //     r => {
            //         if (this['_url'] === value) {
            //             this.imageSource = r;
            //             this.isLoading = false;
            //         }
            //     },
            //     err => {
            //         // catch: Response content may not be converted to an Image
            //         this.isLoading = false;
            //         if (traceEnabled()) {
            //             if (typeof err === 'object' && err.message) {
            //                 err = err.message;
            //             }
            //             traceWrite(err, traceCategories.Debug);
            //         }
            //     }
            // );
        }
        return source;
    } else if (value instanceof ImageSource) {
        // Support binding the imageSource trough the src property
        // return Promise.resolve(value);
        return value;
    } else if (value instanceof ImageAsset) {
        // const result = await fromAsset(value);
        return null;
    } else {
        return fromNativeSource(value);
        // return Promise.resolve(fromNativeSource(value));
    }
}
export function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

import { knownFolders, path } from 'tns-core-modules/file-system';
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
    const toReplace = currentAppFolder
        .split('/')
        .slice(0, -1)
        .join('/');
    if (filePath.indexOf(toReplace) === 0) {
        return filePath.replace(toReplace, '').slice(1);
    }
    return filePath;
}
