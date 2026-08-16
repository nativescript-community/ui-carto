import { File, FileSystemEntity, Folder, knownFolders, path } from '@nativescript/core';
import { DirAssetPackageOptions, ZippedAssetPackageOptions } from '.';
import { mapPosVectorFromArgs } from '..';
import { BaseNative } from '../BaseNative';
import { DefaultLatLonKeys, GenericMapPos, MapPosVector, MapRange, NativeVector, toNativeMapPos } from '../core';
import { getFileName, getRelativePathToApp } from '../index.common';

export function nativeVectorToArray<T>(vector: NativeVector<T>) {
    const count = vector.size();
    const result = [];
    for (let index = 0; index < count; index++) {
        result[index] = vector.get(index);
    }
    return result;
}

export function arrayToNativeVector<T>(array: any[]) {
    const vector = MSFStringVector.alloc().init();
    for (let index = 0; index < array.length; index++) {
        vector.add(array[index]);
    }
    return vector;
}

export function nativeVariantToJS(variant: MSFVariant) {
    return JSON.parse(variant.toString());
}
export function jsonVariant(str: string) {
    return MSFVariant.fromString(str);
}
export function JSVariantToNative(variant: any) {
    if (Array.isArray(variant) || typeof variant === 'object') {
        return MSFVariant.fromString(JSON.stringify(variant));
    } else if (variant) {
        if (typeof variant === 'boolean') {
            return MSFVariant.alloc().initWithBoolVal(variant);
        } else if (typeof variant === 'number') {
            return MSFVariant.alloc().initWithDoubleVal(variant);
        } else if (typeof variant === 'string') {
            return MSFVariant.alloc().initWithString(variant);
            // } else {
            // return MSFVariant.alloc().initWithObject(variant);
        }
    }
    return null;
}

export function nativeMapToJS(theMap: MSFStringVariantMap) {
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
    MSFLog.setShowDebug(value);
}
export function setShowWarn(value: boolean) {
    MSFLog.setShowWarn(value);
}
export function setShowInfo(value: boolean) {
    MSFLog.setShowInfo(value);
}
export function setShowError(value: boolean) {
    MSFLog.setShowError(value);
}

const currentAppFolder = knownFolders.currentApp();

export class ZippedAssetPackage extends BaseNative<MSFZippedAssetPackage, ZippedAssetPackageOptions> {
    createNative(options: ZippedAssetPackageOptions) {
        let zipPath;
        try {
            const fullZipPath = getFileName(options.zipPath);
            zipPath = getRelativePathToApp(options.zipPath);
            if (File.exists(fullZipPath)) {
                let assetPackage: MSFAssetPackage;
                if (options.basePack) {
                    assetPackage = options.basePack.getNative();
                }
                const vectorTileStyleSetData = MSFAssetUtils.loadAsset(zipPath);
                if (assetPackage) {
                    return MSFZippedAssetPackage.alloc().initWithZipDataBaseAssetPackage(vectorTileStyleSetData, assetPackage);
                } else {
                    return MSFZippedAssetPackage.alloc().initWithZipData(vectorTileStyleSetData);
                }
            } else {
                throw new Error(`could not find zip file: ${options.zipPath}(${zipPath})`);
            }
        } catch (error) {
            console.error(`ZippedAssetPackage(${zipPath}, ${options.zipPath}): ${error}`);
            throw error;
        }
    }
    getAssetNames() {
        return this.getNative().getAssetNames();
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
export class MSFDirAssetPackageImpl extends MSFAssetPackage {
    assetNames: MSFStringVector;
    mBaseAssetPackage: MSFAssetPackage;
    dirPath: string;
    massifDirPath: string;
    loadUsingNS = false;

    public static initWithBasePackage(basePackage): MSFDirAssetPackageImpl {
        const result = MSFDirAssetPackageImpl.alloc().init() as any;
        result.mBaseAssetPackage = basePackage;
        return result;
    }
    public initialize(options: DirAssetPackageOptions) {
        const dirPath = options.dirPath;
        this.loadUsingNS = !!options.loadUsingNS;
        this.dirPath = getFileName(dirPath);
        this.massifDirPath = getRelativePathToApp(dirPath);
    }
    public loadAsset(name) {
        if (!name) {
            return null;
        }
        let result: MSFBinaryData;
        if (this.mBaseAssetPackage != null) {
            result = this.mBaseAssetPackage.loadAsset(name);
        }
        if (!result) {
            if (this.loadUsingNS) {
                const data = File.fromPath(path.join(this.dirPath, name)).readSync() as NSData;
                const arr = new ArrayBuffer(data.length);
                data.getBytes(arr as any);
                result = MSFBinaryData.alloc().initWithDataPtrSize(arr as any, data.length);
            } else {
                result = MSFAssetUtils.loadAsset(path.join(this.massifDirPath, name));
            }
        }
        return result;
    }
    public getAssetNames() {
        if (this.assetNames == null) {
            try {
                this.assetNames = MSFStringVector.alloc().init();
                if (this.mBaseAssetPackage) {
                    const result2 = this.mBaseAssetPackage.getAssetNames();
                    for (let i = 0; i < result2.size(); i++) {
                        this.assetNames.add(result2.get(i));
                    }
                }
                walkDir(this.dirPath, (fileRelPath: string) => {
                    this.assetNames.add(fileRelPath);
                });
            } catch (e) {}
        }
        return this.assetNames;
    }
}

export class DirAssetPackage extends BaseNative<MSFDirAssetPackageImpl, DirAssetPackageOptions> {
    mBaseAssetPackage: MSFAssetPackage;
    createNative(options: DirAssetPackageOptions) {
        if (Folder.exists(getFileName(options.dirPath))) {
            if (options.basePack) {
                this.mBaseAssetPackage = options.basePack.getNative();
            }
            const result = MSFDirAssetPackageImpl.initWithBasePackage(this.mBaseAssetPackage);
            result.initialize(options);
            return result;
        } else {
            console.error(`could not find dir: ${options.dirPath}`);
            return null;
        }
    }
    dispose(): void {
        this.mBaseAssetPackage = null;
        super.dispose();
    }
}
export function distanceToEnd<T = DefaultLatLonKeys>(index: number, coordinates: MapPosVector<T> | GenericMapPos<T>[]) {
    return MassifMapsAdditionsUtils.distanceToEndWithIntPoly(index, mapPosVectorFromArgs<T>(coordinates));
}
export function isLocationOnPath<T = DefaultLatLonKeys>(
    point: GenericMapPos<T>,
    coordinates: MapPosVector<T> | GenericMapPos<T>[],
    closed?: boolean,
    geodesic?: boolean,
    toleranceEarth?: number
): number {
    return MassifMapsAdditionsUtils.isLocationOnPolyClosedGeodesicToleranceEarth(toNativeMapPos<T>(point), mapPosVectorFromArgs<T>(coordinates), closed, geodesic, toleranceEarth);
}

export function fromNativeMapRange(value: MSFMapRange) {
    return [value.getMax(), value.getMin()] as MapRange;
}
export function toNativeMapRange(value: MapRange) {
    if (value instanceof MSFMapRange) {
        return value;
    }
    //  ignore z for now as points can get under the map!
    return MSFMapRange.alloc().initWithMinMax(value[0], value[1]);
}
