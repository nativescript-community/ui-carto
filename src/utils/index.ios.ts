import { BaseNative, getFileName, getRelativePathToApp } from '../index.common';
import { DirAssetPackageOptions, ZippedAssetPackageOptions } from '.';
import { File, FileSystemEntity, Folder, knownFolders, path } from '@nativescript/core/file-system';

export function nativeVectorToArray(nVector: NTStringVector) {
    const count = nVector.size();
    const result = [];
    for (let index = 0; index < count; index++) {
        result[index] = nVector.get(index);
    }
    return result;
}

export function nativeVariantToJS(variant: NTVariant) {
    return JSON.parse(variant.toString());
}
export function JSVariantToNative(variant: any) {
    if (Array.isArray(variant)) {
        return NTVariant.fromString(JSON.stringify(variant));
    } else if (typeof variant === 'object') {
        return NTVariant.fromString(JSON.stringify(variant));
    } else if (variant) {
        if (typeof variant === 'boolean') {
            return NTVariant.alloc().initWithBoolVal(variant);
        } else if (typeof variant === 'number') {
            return NTVariant.alloc().initWithDoubleVal(variant);
        } else if (typeof variant === 'string') {
            return NTVariant.alloc().initWithString(variant);
            // } else {
            // return NTVariant.alloc().initWithObject(variant);
        }
    }
    return null;
}

export function nativeMapToJS(theMap: NTStringVariantMap) {
    const result = {};
    const count = theMap.size();
    let key;
    for (let index = 0; index < count; index++) {
        key = theMap.get_key(index);
        result[key] = nativeVariantToJS(theMap.get(key));
    }
    return result;
}

export function setShowDebug(value: boolean) {
    NTLog.setShowDebug(value);
}
export function setShowWarn(value: boolean) {
    NTLog.setShowWarn(value);
}
export function setShowInfo(value: boolean) {
    NTLog.setShowInfo(value);
}
export function setShowError(value: boolean) {
    NTLog.setShowError(value);
}

const currentAppFolder = knownFolders.currentApp();

export class ZippedAssetPackage extends BaseNative<NTZippedAssetPackage, ZippedAssetPackageOptions> {
    createNative(options: ZippedAssetPackageOptions) {
        if (File.exists(path.join(currentAppFolder.path, '..', options.zipPath))) {
            const vectorTileStyleSetData = NTAssetUtils.loadAsset(options.zipPath);
            return NTZippedAssetPackage.alloc().initWithZipData(vectorTileStyleSetData);
        } else {
            console.error(`could not find zip file: ${options.zipPath}`);
            return null;
        }
    }
}

function walkDir(dirPath: string, cb: (str: string) => void, currentSubDir?: string) {
    const folder = Folder.fromPath(dirPath);
    folder.eachEntity((entity: FileSystemEntity) => {
        if (Folder.exists(entity.path)) {
            walkDir(entity.path, cb, currentSubDir ? path.join(currentSubDir, entity.name) : entity.name);
        } else {
            cb(currentSubDir ? path.join(currentSubDir, entity.name) : entity.name);
        }
        return true;
    });
}

@NativeClass
export class NTDirAssetPackageImpl extends NTAssetPackage {
    assetNames: NTStringVector;
    dirPath: string;
    cartoDirPath: string;
    loadUsingNS = false;

    public static new(): NTDirAssetPackageImpl {
        const result = NTDirAssetPackageImpl.alloc().init() as any;
        return result;
    }
    public initialize(options: DirAssetPackageOptions) {
        const dirPath = options.dirPath;
        this.loadUsingNS = !!options.loadUsingNS;
        this.dirPath = getFileName(dirPath);
        this.cartoDirPath = getRelativePathToApp(dirPath);
    }
    public loadAsset(name) {
        if (!name) {
            return null;
        }
        let result: NTBinaryData;
        if (this.loadUsingNS) {
            const data = File.fromPath(path.join(this.dirPath, name)).readSync() as NSData;
            const arr = new ArrayBuffer(data.length);
            data.getBytes(arr as any);
            result = NTBinaryData.alloc().initWithDataPtrSize(arr as any, data.length);
        } else {
            result = NTAssetUtils.loadAsset(path.join(this.cartoDirPath, name));
        }
        return result;
    }
    public getAssetNames() {
        if (this.assetNames == null) {
            try {
                this.assetNames = NTStringVector.alloc().init();
                const test = [];
                walkDir(this.dirPath, (fileRelPath: string) => {
                    this.assetNames.add(fileRelPath);
                    test.push(fileRelPath);
                });
            } catch (e) {}
        }
        return this.assetNames;
    }
}

export class DirAssetPackage extends BaseNative<NTDirAssetPackageImpl, DirAssetPackageOptions> {
    createNative(options: DirAssetPackageOptions) {
        if (Folder.exists(getFileName(options.dirPath))) {
            const result = NTDirAssetPackageImpl.new();
            result.initialize(options);
            return result;
        } else {
            console.error(`could not find dir: ${options.dirPath}`);
            return null;
        }
    }
}
