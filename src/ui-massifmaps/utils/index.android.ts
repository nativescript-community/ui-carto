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
import {
    ACCESSORS as ACC_DirAssetPackage,
    Accessors as Acc_DirAssetPackage,
    METHODS as MET_DirAssetPackage,
    Methods as Met_DirAssetPackage,
    SELECTORS as SEL_DirAssetPackage
} from '../bindings/utils/AssetPackage';
import { ACCESSORS as ACC_AssetPackage, Accessors as Acc_AssetPackage, METHODS as MET_AssetPackage, Methods as Met_AssetPackage, SELECTORS as SEL_AssetPackage } from '../bindings/utils/AssetPackage';

export function nativeVectorToArray<T>(vector: NativeVector<T>) {
    const count = vector.size();
    const result = [];
    for (let index = 0; index < count; index++) {
        result[index] = vector.get(index);
    }
    return result;
}
export function arrayToNativeVector(array: any[]) {
    const vector = new com.massifmaps.core.StringVector();
    for (let index = 0; index < array.length; index++) {
        vector.add(array[index]);
    }
    return vector;
}

export function nativeVariantToJS(variant: com.massifmaps.core.Variant) {
    return JSON.parse(variant.toString());
}
export function jsonVariant(str: string) {
    return com.massifmaps.core.Variant.fromString(str);
}
export function JSVariantToNative(variant: any) {
    if (Array.isArray(variant) || typeof variant === 'object') {
        return com.massifmaps.core.Variant.fromString(JSON.stringify(variant));
    } else if (variant) {
        return new com.massifmaps.core.Variant(variant);
    }
    return null;
}

export function nativeMapToJS(theMap: com.massifmaps.core.StringVariantMap) {
    const result = {};
    const count = theMap.size();
    let key;
    for (let index = 0; index < count; index++) {
        key = theMap.get_key(index);
        result[key] = nativeVariantToJS(theMap.get(key));
    }
    return result;
}

export interface LogEventListener extends com.massifmaps.utils.LogEventListener {
    // tslint:disable-next-line:no-misused-new
    new (): LogEventListener;
    // owner: LogEventListener;
}

// let LogEventListener: LogEventListener;

// interface MapEventListener extends com.massifmaps.ui.MapEventListener {
//     // tslint:disable-next-line:no-misused-new
//     new (owner: WeakRef<MassifMap>): MapEventListener;
// }

// let MapEventListener: MapEventListener;

// function initLogEventListenerClass() {
//     if (LogEventListener) {
//         return;
//     }

//     // @Interfaces([com.massifmaps.ui.MapEventListener])
//     // class MapEventListenerImpl extends com.massifmaps.ui.MapEventListener {
//     //     constructor(private owner: WeakRef<MassifMap>) {
//     //         super();
//     //         return global.__native(this);
//     //     }
//     //     public onMapIdle() {
//     //         this.owner && this.owner.get().sendEvent(MapIdleEvent);
//     //     }
//     //     public onMapMoved() {
//     //         this.owner && this.owner.get().sendEvent(MapMovedEvent);
//     //     }
//     //     public onMapStable() {
//     //         this.owner && this.owner.get().sendEvent(MapStableEvent);
//     //     }
//     //     public onMapClicked(mapClickInfo: com.massifmaps.ui.MapClickInfo) {
//     //         this.owner &&
//     //             this.owner.get().sendEvent(MapClickedEvent, {
//     //                 clickType: mapClickInfo.getClickType(),
//     //                 position: this.owner.get().fromNativeMapPos(mapClickInfo.getClickPos())
//     //             });
//     //     }
//     // }
//     // MapEventListener = MapEventListenerImpl as any;

//     class LogEventListenerImpl extends com.massifmaps.utils.LogEventListener {
//         constructor() {
//             super();
//             return global.__native(this);
//         }
//         public onDebugEvent(event) {

//             return true;
//             // this.owner && this.owner.sendEvent(MapIdleEvent);
//         }
//     }
//     LogEventListener = LogEventListenerImpl as any;
// }

let showDebug = false;
export function setShowDebug(value: boolean) {
    showDebug = value;
    com.massifmaps.utils.Log.setShowDebug(value);
}
export function setShowWarn(value: boolean) {
    com.massifmaps.utils.Log.setShowWarn(value);
}
export function setShowInfo(value: boolean) {
    com.massifmaps.utils.Log.setShowInfo(value);
}
export function setShowError(value: boolean) {
    com.massifmaps.utils.Log.setShowError(value);
}

export class ZippedAssetPackage extends BaseNative<com.massifmaps.utils.ZippedAssetPackage, ZippedAssetPackageOptions> {
    createNative(options: ZippedAssetPackageOptions) {
        // ZippedAssetPackage takes bytes, not a path: from the file system when live-reloading, else from the bundle.
        const data = options.liveReload === true
            ? new com.massifmaps.core.BinaryData(File.fromPath(getFileName(options.zipPath)).readSync())
            : com.massifmaps.utils.AssetUtils.loadAsset(getRelativePathToApp(options.zipPath));
        if (!data) {
            throw new Error(`could not read zip file: ${options.zipPath}`);
        }
        const base = options.basePack?.getNative();
        return base ? new com.massifmaps.utils.ZippedAssetPackage(data, base) : new com.massifmaps.utils.ZippedAssetPackage(data);
    }
}

/**
 * `loadUsingNS` reads the real file system (live reload); the default reads bundled assets, which
 * sit inside the APK where no file path reaches them.
 */
export class DirAssetPackage extends BaseNative<com.massifmaps.utils.AssetPackage, DirAssetPackageOptions> {
    createNative(options: DirAssetPackageOptions) {
        if (!Folder.exists(getFileName(options.dirPath))) {
            console.error(`could not find dir: ${options.dirPath}`);
            return null;
        }
        const base = options.basePack?.getNative();
        if (options.loadUsingNS) {
            const dirPath = getFileName(options.dirPath);
            return base ? new com.massifmaps.utils.DirAssetPackage(dirPath, base) : new com.massifmaps.utils.DirAssetPackage(dirPath);
        }
        const basePath = getRelativePathToApp(options.dirPath);
        return base ? new com.massifmaps.utils.BundleAssetPackage(basePath, base) : new com.massifmaps.utils.BundleAssetPackage(basePath);
    }
}

export function encodeMapPosVector<T = DefaultLatLonKeys>(coordinates: MapPosVector<T> | GenericMapPos<T>[], includeElevation: boolean, precision: number) {
    return com.nativescript.massifmaps.additions.Utils.encodeMapPosVector(mapPosVectorFromArgs<T>(coordinates), includeElevation, precision);
}
export function decodeMapPosVector<T = DefaultLatLonKeys>(str: string, includeElevation: boolean, precision: number) {
    return new MapPosVector<T>(com.nativescript.massifmaps.additions.Utils.decodeMapPosVector(str, includeElevation, precision));
}
export function distanceToEnd<T = DefaultLatLonKeys>(index: number, coordinates: MapPosVector<T> | GenericMapPos<T>[]) {
    return com.nativescript.massifmaps.additions.Utils.distanceToEnd(index, mapPosVectorFromArgs<T>(coordinates));
}
export function isLocationOnPath<T = DefaultLatLonKeys>(
    point: GenericMapPos<T>,
    coordinates: MapPosVector<T> | GenericMapPos<T>[],
    closed?: boolean,
    geodesic?: boolean,
    toleranceEarth?: number
): number {
    return com.nativescript.massifmaps.additions.Utils.isLocationOnPath(toNativeMapPos<T>(point), mapPosVectorFromArgs<T>(coordinates), closed, geodesic, toleranceEarth);
}

export function fromNativeMapRange(value: com.massifmaps.core.MapRange) {
    return [value.getMax(), value.getMin()] as MapRange;
}
export function toNativeMapRange(value: MapRange) {
    if (value instanceof com.massifmaps.core.MapRange) {
        return value;
    }
    return new com.massifmaps.core.MapRange(value[0], value[1]);
}

export interface ZippedAssetPackage extends Acc_ZippedAssetPackage, Met_ZippedAssetPackage {}
bindNative(ZippedAssetPackage, MET_ZippedAssetPackage, ACC_ZippedAssetPackage, { selectors: SEL_ZippedAssetPackage });

// The base only: this wraps a DirAssetPackage or a BundleAssetPackage depending on loadUsingNS,
// so getDirPath/getBasePath are not on every instance.
export interface DirAssetPackage extends Acc_DirAssetPackage, Met_DirAssetPackage {}
bindNative(DirAssetPackage, MET_DirAssetPackage, ACC_DirAssetPackage, { selectors: SEL_DirAssetPackage });

export interface ZippedAssetPackage extends Acc_AssetPackage, Met_AssetPackage {}
bindNative(ZippedAssetPackage, MET_AssetPackage, ACC_AssetPackage, { selectors: SEL_AssetPackage });
