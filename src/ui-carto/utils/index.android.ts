import { getFileName, getRelativePathToApp } from '../index.common';
import { BaseNative } from '../BaseNative';
import { DirAssetPackageOptions, ZippedAssetPackageOptions } from '.';
import { File, FileSystemEntity, Folder, knownFolders, path } from '@nativescript/core/file-system';
import { DefaultLatLonKeys, GenericMapPos, MapPos, MapPosVector, MapRange, toNativeMapPos } from '../core';
import { mapPosVectorFromArgs } from '..';

export function nativeVectorToArray(nVector: com.carto.core.StringVector) {
    const count = nVector.size();
    const result = [];
    for (let index = 0; index < count; index++) {
        result[index] = nVector.get(index);
    }
    return result;
}

export function nativeVariantToJS(variant: com.carto.core.Variant) {
    return JSON.parse(variant.toString());
}
export function jsonVariant(str: string) {
    return com.carto.core.Variant.fromString(str);
}
export function JSVariantToNative(variant: any) {
    if (Array.isArray(variant) || typeof variant === 'object') {
        return com.carto.core.Variant.fromString(JSON.stringify(variant));
    } else if (variant) {
        return new com.carto.core.Variant(variant);
    }
    return null;
}

export function nativeMapToJS(theMap: com.carto.core.StringVariantMap) {
    const result = {};
    const count = theMap.size();
    let key;
    for (let index = 0; index < count; index++) {
        key = theMap.get_key(index);
        result[key] = nativeVariantToJS(theMap.get(key));
    }
    return result;
}

export interface LogEventListener extends com.carto.utils.LogEventListener {
    // tslint:disable-next-line:no-misused-new
    new (): LogEventListener;
    // owner: LogEventListener;
}

// let LogEventListener: LogEventListener;

// interface MapEventListener extends com.carto.ui.MapEventListener {
//     // tslint:disable-next-line:no-misused-new
//     new (owner: WeakRef<CartoMap>): MapEventListener;
// }

// let MapEventListener: MapEventListener;

// function initLogEventListenerClass() {
//     if (LogEventListener) {
//         return;
//     }

//     // @Interfaces([com.carto.ui.MapEventListener])
//     // class MapEventListenerImpl extends com.carto.ui.MapEventListener {
//     //     constructor(private owner: WeakRef<CartoMap>) {
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
//     //     public onMapClicked(mapClickInfo: com.carto.ui.MapClickInfo) {
//     //         this.owner &&
//     //             this.owner.get().sendEvent(MapClickedEvent, {
//     //                 clickType: mapClickInfo.getClickType(),
//     //                 position: this.owner.get().fromNativeMapPos(mapClickInfo.getClickPos())
//     //             });
//     //     }
//     // }
//     // MapEventListener = MapEventListenerImpl as any;

//     class LogEventListenerImpl extends com.carto.utils.LogEventListener {
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
    com.carto.utils.Log.setShowDebug(value);
}
export function setShowWarn(value: boolean) {
    com.carto.utils.Log.setShowWarn(value);
}
export function setShowInfo(value: boolean) {
    com.carto.utils.Log.setShowInfo(value);
}
export function setShowError(value: boolean) {
    com.carto.utils.Log.setShowError(value);
}

const currentAppFolder = knownFolders.currentApp();

export class ZippedAssetPackage extends BaseNative<com.carto.utils.ZippedAssetPackage, ZippedAssetPackageOptions> {
    createNative(options: ZippedAssetPackageOptions) {
        const zipPath = getRelativePathToApp(options.zipPath);
        console.log('zipPath', zipPath, options.zipPath, File.exists(options.zipPath), File.exists(zipPath));
        if (File.exists(options.zipPath)) {
            const vectorTileStyleSetData = com.carto.utils.AssetUtils.loadAsset(zipPath);
            return new com.carto.utils.ZippedAssetPackage(vectorTileStyleSetData);
        } else {
            console.error(`could not find zip file: ${options.zipPath}`);
            return null;
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
export class DirAssetPackage extends BaseNative<com.akylas.carto.additions.AKAssetPackage, DirAssetPackageOptions> {
    assetNames: com.carto.core.StringVector;
    mDirPath: string;
    mCartoDirPath: string;
    loadUsingNS = false;
    _nInterface: com.akylas.carto.additions.AKAssetPackage.Interface;
    constructor(options) {
        super(options);
        for (const property of ['_nInterface']) {
            const descriptor = Object.getOwnPropertyDescriptor(DirAssetPackage.prototype, property);
            if (descriptor) {
                descriptor.enumerable = false;
            }
        }
    }
    createNative(options: DirAssetPackageOptions) {
        if (Folder.exists(getFileName(options.dirPath))) {
            const dirPath = options.dirPath;
            this.mDirPath = getFileName(dirPath);
            this.mCartoDirPath = getRelativePathToApp(dirPath);
            this._nInterface = new com.akylas.carto.additions.AKAssetPackage.Interface({
                getAssetNames: this.getAssetNames.bind(this),
                loadAsset: this.loadAsset.bind(this)
            });
            const result = new com.akylas.carto.additions.AKAssetPackage(this._nInterface);

            this.loadUsingNS = !!options.loadUsingNS;
            return result;
        } else {
            console.error(`could not find dir: ${options.dirPath}`);
            return null;
        }
    }
    public loadAsset(name) {
        if (!name) {
            return null;
        }
        let result: com.carto.core.BinaryData;
        if (this.loadUsingNS) {
            result = new com.carto.core.BinaryData(File.fromPath(path.join(this.mDirPath, name)).readSync());
        } else {
            result = com.carto.utils.AssetUtils.loadAsset(path.join(this.mCartoDirPath, name));
        }
        return result;
    }
    public getAssetNames() {
        if (!this.assetNames) {
            try {
                this.assetNames = new com.carto.core.StringVector();
                walkDir(this.mDirPath, (fileRelPath: string) => {
                    this.assetNames.add(fileRelPath);
                });
            } catch (e) {}
        }
        return this.assetNames;
    }
}

export function encodeMapPosVector<T = DefaultLatLonKeys>(coordinates: MapPosVector<T> | GenericMapPos<T>[], includeElevation: boolean, precision: number) {
    return com.akylas.carto.additions.Utils.encodeMapPosVector(mapPosVectorFromArgs<T>(coordinates), includeElevation, precision);
}
export function decodeMapPosVector<T = DefaultLatLonKeys>(str: string, includeElevation: boolean, precision: number) {
    return new MapPosVector<T>(com.akylas.carto.additions.Utils.decodeMapPosVector(str, includeElevation, precision));
}
export function distanceToEnd<T = DefaultLatLonKeys>(index: number, coordinates: MapPosVector<T> | GenericMapPos<T>[]) {
    return com.akylas.carto.additions.Utils.distanceToEnd(index, mapPosVectorFromArgs<T>(coordinates));
}
export function isLocationOnPath<T = DefaultLatLonKeys>(
    point: GenericMapPos<T>,
    coordinates: MapPosVector<T> | GenericMapPos<T>[],
    closed?: boolean,
    geodesic?: boolean,
    toleranceEarth?: number
): number {
    return com.akylas.carto.additions.Utils.isLocationOnPath(toNativeMapPos<T>(point), mapPosVectorFromArgs<T>(coordinates), closed, geodesic, toleranceEarth);
}

export function fromNativeMapRange(value: com.carto.core.MapRange) {
    return [value.getMax(), value.getMin()] as MapRange;
}
export function toNativeMapRange(value: MapRange) {
    if (value instanceof com.carto.core.MapRange) {
        return value;
    }
    //  ignore z for now as points can get under the map!
    return new com.carto.core.MapRange(value[0], value[1]);
}
