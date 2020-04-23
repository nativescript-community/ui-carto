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
    switch (variant.getType()) {
        case NTVariantType.T_VARIANT_TYPE_ARRAY: {
            const result = [];
            for (let index = 0; index < variant.getArraySize(); index++) {
                result[index] = nativeVariantToJS(variant.getArrayElement(index));
            }
            return result;
        }
        case NTVariantType.T_VARIANT_TYPE_BOOL:
            return variant.getBool();
        case NTVariantType.T_VARIANT_TYPE_DOUBLE:
            return variant.getDouble();
        case NTVariantType.T_VARIANT_TYPE_INTEGER:
            return variant.getLong();
        case NTVariantType.T_VARIANT_TYPE_NULL:
            return null;
        case NTVariantType.T_VARIANT_TYPE_STRING:
            return variant.getString();
        case NTVariantType.T_VARIANT_TYPE_OBJECT: {
            const result = {} as any;
            const keys = variant.getObjectKeys();
            let key;
            for (let index = 0; index < keys.size(); index++) {
                key = keys.get(index);
                result[key] = nativeVariantToJS(variant.getObjectElement(key));
            }
            return result;
        }
    }
}
export function JSVariantToNative(variant: any) {
    if (Array.isArray(variant)) {
        const builder = NTVariantArrayBuilder.alloc().init();
        for (let index = 0; index < variant.length; index++) {
            const obj = variant[index];
            if (typeof obj === 'boolean') {
                builder.addBool(obj);
            } else if (typeof obj === 'number') {
                builder.addDouble(obj);
            } else if (typeof obj === 'string') {
                builder.addString(obj);
            } else {
                builder.addVariant(JSVariantToNative(obj));
            }
        }
        return builder.buildVariant();
    } else if (typeof variant === 'object') {
        const builder = NTVariantObjectBuilder.alloc().init();
        Object.keys(variant).forEach(k => {
            const obj = variant[k];
            if (typeof obj === 'boolean') {
                builder.setBoolVal(k, obj);
            } else if (typeof obj === 'number') {
                builder.setDoubleVal(k, obj);
            } else if (typeof obj === 'string') {
                builder.setStringStr(k, obj);
            } else {
                builder.setVariantVar(k, JSVariantToNative(obj));
            }
        });
        return builder.buildVariant();
    } else if (variant) {
        if (typeof variant === 'boolean') {
            return NTVariant.alloc().initWithBoolVal(variant);
        } else if (typeof variant === 'number') {
            return NTVariant.alloc().initWithDoubleVal(variant);
        } else if (typeof variant === 'string') {
            return NTVariant.alloc().initWithString(variant);
        } else {
            return NTVariant.alloc().initWithObject(variant);
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
    // console.log('walkDir', dirPath);
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

export class NTDirAssetPackageImpl extends NTAssetPackage {
    assetNames: NTStringVector;
    // context: android.content.Context;
    dirPath: string;
    cartoDirPath: string;
    loadUsingNS = false;
    // private _owner: WeakRef<CartoPackageManagerListener>;

    public static new(): NTDirAssetPackageImpl {
        const result = NTDirAssetPackageImpl.alloc().init() as any;
        // delegate._owner = owner;
        return result;
    }
    public initialize(options: DirAssetPackageOptions) {
        const dirPath = options.dirPath;
        // this.context = context;
        this.loadUsingNS = !!options.loadUsingNS;
        this.dirPath = getFileName(dirPath);
        this.cartoDirPath = getRelativePathToApp(dirPath);
        // console.log('DirAssetPackageNativeImpl', dirPath, this.dirPath, this.cartoDirPath, this.loadUsingNS);
        // this.dirPath = dirPath;
    }
    public loadAsset(name) {
        if (!name) {
            return null;
        }
        const startTime = Date.now();
        let result: NTBinaryData;
        // console.log(`loadAsset ${name}`, this.loadUsingNS);
        if (this.loadUsingNS) {
            const data = File.fromPath(path.join(this.dirPath, name)).readSync() as NSData;
            const arr = new ArrayBuffer(data.length);
            data.getBytes(arr as any);
            result = NTBinaryData.alloc().initWithDataPtrSize(arr as any, data.length);
        } else {
            result = NTAssetUtils.loadAsset(path.join(this.cartoDirPath, name));
        }
        // console.log(`loadAsset done in ${Date.now() - startTime} ms for ${name}`);
        return result;
    }
    public getAssetNames() {
        if (this.assetNames == null) {
            try {
                const startTime = Date.now();
                this.assetNames = NTStringVector.alloc().init();
                const test = [];
                walkDir(this.dirPath, (fileRelPath: string) => {
                    this.assetNames.add(fileRelPath);
                    test.push(fileRelPath);
                });

                // console.log(`getAssetNames done ${this.assetNames.size()}: ${test}`);
                // console.log(`getAssetNames done in ${Date.now() - startTime} ms`);
                // }
            } catch (e) {}
        }
        return this.assetNames;
    }
}

export class DirAssetPackage extends BaseNative<NTDirAssetPackageImpl, DirAssetPackageOptions> {
    createNative(options: DirAssetPackageOptions) {
        // this.log('DirAssetPackage', options.dirPath, getFileName(options.dirPath), Folder.exists(getFileName(options.dirPath)));
        if (Folder.exists(getFileName(options.dirPath))) {
            // this.log('intDirAssetPackageClass done');
            const result = NTDirAssetPackageImpl.new();
            // this.log('about to initialize');
            result.initialize(options);
            return result;
        } else {
            console.error(`could not find dir: ${options.dirPath}`);
            return null;
        }
    }
}
