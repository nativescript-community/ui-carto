import { File, Folder } from '@nativescript/core';
import { DirAssetPackageOptions, ZippedAssetPackageOptions } from '.';
import { mapPosVectorFromArgs } from '..';
import { BaseNative } from '../BaseNative';
import { DefaultLatLonKeys, GenericMapPos, MapPosVector, MapRange, NativeVector, toNativeMapPos } from '../core';
import { getFileName, getRelativePathToApp } from '../index.common';
import {
    ACCESSORS as ACC_ZippedAssetPackage,
    Accessors as Acc_ZippedAssetPackage,
    METHODS as MET_ZippedAssetPackage,
    Methods as Met_ZippedAssetPackage,
    SELECTORS as SEL_ZippedAssetPackage
} from '../bindings/utils/ZippedAssetPackage';
import { bindNative } from '../nativeclass.common';
import { ACCESSORS as ACC_AssetPackage, Accessors as Acc_AssetPackage, METHODS as MET_AssetPackage, Methods as Met_AssetPackage, SELECTORS as SEL_AssetPackage } from '../bindings/utils/AssetPackage';

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

export class ZippedAssetPackage extends BaseNative<MSFZippedAssetPackage, ZippedAssetPackageOptions> {
    createNative(options: ZippedAssetPackageOptions) {
        const zipPath = getRelativePathToApp(options.zipPath);
        try {
            if (!File.exists(getFileName(options.zipPath))) {
                throw new Error(`could not find zip file: ${options.zipPath}(${zipPath})`);
            }
            // The archive is bytes, not a path, which is the one thing a ZippedAssetPackage cannot
            // read itself.
            const data = MSFAssetUtils.loadAsset(zipPath);
            const base: MSFAssetPackage = options.basePack?.getNative();
            return base ? MSFZippedAssetPackage.alloc().initWithZipDataBaseAssetPackage(data, base) : MSFZippedAssetPackage.alloc().initWithZipData(data);
        } catch (error) {
            console.error(`ZippedAssetPackage(${zipPath}, ${options.zipPath}): ${error}`);
            throw error;
        }
    }
}

/**
 * A style read from a folder.
 *
 * Two native classes, because a folder is two different things: `loadUsingNS` reads the real file
 * system, which is what a live-reloaded style needs, and the default reads the app's own bundled
 * assets. On iOS both are directories, but only the bundle one resolves against the bundle root -
 * and only it behaves the same way on Android, where the assets sit inside the APK.
 */
export class DirAssetPackage extends BaseNative<MSFAssetPackage, DirAssetPackageOptions> {
    createNative(options: DirAssetPackageOptions) {
        if (!Folder.exists(getFileName(options.dirPath))) {
            console.error(`could not find dir: ${options.dirPath}`);
            return null;
        }
        const base: MSFAssetPackage = options.basePack?.getNative();
        if (options.loadUsingNS) {
            const dirPath = getFileName(options.dirPath);
            return base ? MSFDirAssetPackage.alloc().initWithDirPathBaseAssetPackage(dirPath, base) : MSFDirAssetPackage.alloc().initWithDirPath(dirPath);
        }
        const basePath = getRelativePathToApp(options.dirPath);
        return base ? MSFBundleAssetPackage.alloc().initWithBasePathBaseAssetPackage(basePath, base) : MSFBundleAssetPackage.alloc().initWithBasePath(basePath);
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

export interface ZippedAssetPackage extends Acc_ZippedAssetPackage, Met_ZippedAssetPackage {}
bindNative(ZippedAssetPackage, MET_ZippedAssetPackage, ACC_ZippedAssetPackage, { selectors: SEL_ZippedAssetPackage });

export interface ZippedAssetPackage extends Acc_AssetPackage, Met_AssetPackage {}
bindNative(ZippedAssetPackage, MET_AssetPackage, ACC_AssetPackage, { selectors: SEL_AssetPackage });

// The base only: this wraps a DirAssetPackage or a BundleAssetPackage depending on loadUsingNS,
// so getDirPath/getBasePath are not on every instance.
export interface DirAssetPackage extends Acc_AssetPackage, Met_AssetPackage {}
bindNative(DirAssetPackage, MET_AssetPackage, ACC_AssetPackage, { selectors: SEL_AssetPackage });
