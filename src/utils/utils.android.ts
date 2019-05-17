import { BaseNative, getFileName, getRelativePathToApp } from '../carto.common';
import { DirAssetPackageOptions, ZippedAssetPackageOptions } from './utils';
import { File, FileSystemEntity, Folder, knownFolders, path } from 'tns-core-modules/file-system';

export function nativeVectorToArray(nVector: com.carto.core.StringVector) {
    const count = nVector.size();
    const result = [];
    for (let index = 0; index < count; index++) {
        result[index] = nVector.get(index);
    }
    return result;
}

export function nativeVariantToJS(variant: com.carto.core.Variant) {
    switch (variant.getType()) {
        case com.carto.core.VariantType.VARIANT_TYPE_ARRAY: {
            const result = [];
            for (let index = 0; index < variant.getArraySize(); index++) {
                result[index] = nativeVariantToJS(variant.getArrayElement(index));
            }
            return result;
        }
        case com.carto.core.VariantType.VARIANT_TYPE_STRING:
            return variant.getString();
        case com.carto.core.VariantType.VARIANT_TYPE_BOOL:
            return variant.getBool();
        case com.carto.core.VariantType.VARIANT_TYPE_DOUBLE:
            return variant.getDouble();
        case com.carto.core.VariantType.VARIANT_TYPE_INTEGER:
            return variant.getLong();
        case com.carto.core.VariantType.VARIANT_TYPE_OBJECT:
            const result = {};
            const keys = variant.getObjectKeys();
            let key;
            for (let index = 0; index < keys.size(); index++) {
                key = keys.get(index);
                result[key] = nativeVariantToJS(variant.getObjectElement(key));
            }
            return result;
    }
    return undefined;
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

let LogEventListener: LogEventListener;

// interface MapEventListener extends com.carto.ui.MapEventListener {
//     // tslint:disable-next-line:no-misused-new
//     new (owner: WeakRef<CartoMap>): MapEventListener;
// }

// let MapEventListener: MapEventListener;

function initLogEventListenerClass() {
    if (LogEventListener) {
        return;
    }

    // @Interfaces([com.carto.ui.MapEventListener])
    // class MapEventListenerImpl extends com.carto.ui.MapEventListener {
    //     constructor(private owner: WeakRef<CartoMap>) {
    //         super();
    //         return global.__native(this);
    //     }
    //     public onMapIdle() {
    //         this.owner && this.owner.get().sendEvent(MapIdleEvent);
    //     }
    //     public onMapMoved() {
    //         this.owner && this.owner.get().sendEvent(MapMovedEvent);
    //     }
    //     public onMapStable() {
    //         this.owner && this.owner.get().sendEvent(MapStableEvent);
    //     }
    //     public onMapClicked(mapClickInfo: com.carto.ui.MapClickInfo) {
    //         this.owner &&
    //             this.owner.get().sendEvent(MapClickedEvent, {
    //                 clickType: mapClickInfo.getClickType(),
    //                 position: this.owner.get().fromNativeMapPos(mapClickInfo.getClickPos())
    //             });
    //     }
    // }
    // MapEventListener = MapEventListenerImpl as any;

    class LogEventListenerImpl extends com.carto.utils.LogEventListener {
        constructor() {
            super();
            return global.__native(this);
        }
        public onDebugEvent(event) {
            console.log('onDebugEvent', event);
            return true;
            // this.owner && this.owner.sendEvent(MapIdleEvent);
        }
    }
    LogEventListener = LogEventListenerImpl as any;
}

export function setShowDebug(value: boolean) {
    // initLogEventListenerClass();
    // com.carto.utils.Log.setLogEventListener(new LogEventListener());
    com.carto.utils.Log.setShowDebug(value);
    com.carto.utils.Log.setShowWarn(value);
}

const currentAppFolder = knownFolders.currentApp();

export class ZippedAssetPackage extends BaseNative<com.carto.utils.ZippedAssetPackage, ZippedAssetPackageOptions> {
    createNative(options: ZippedAssetPackageOptions) {
        if (File.exists(path.join(currentAppFolder.path, '..', options.zipPath))) {
            const vectorTileStyleSetData = com.carto.utils.AssetUtils.loadAsset(options.zipPath);
            return new com.carto.utils.ZippedAssetPackage(vectorTileStyleSetData);
        } else {
            console.error(`could not find zip file: ${options.zipPath}`);
            return null;
        }
    }
}

export interface DirAssetPackageNative extends com.carto.utils.AssetPackage {
    // tslint:disable-next-line:no-misused-new
    new (): DirAssetPackageNative;
    initialize(options: DirAssetPackageOptions);
    // owner: LogEventListener;
}

let DirAssetPackageNative: DirAssetPackageNative;

// interface MapEventListener extends com.carto.ui.MapEventListener {
//     // tslint:disable-next-line:no-misused-new
//     new (owner: WeakRef<CartoMap>): MapEventListener;
// }

// let MapEventListener: MapEventListener;

// Full DirAssetPackage written in TS for live sync
function intDirAssetPackageClass() {
    if (DirAssetPackageNative) {
        return;
    }

    const AssetUtils = com.carto.utils.AssetUtils;

    // @Interfaces([com.carto.ui.MapEventListener])
    // class MapEventListenerImpl extends com.carto.ui.MapEventListener {
    //     constructor(private owner: WeakRef<CartoMap>) {
    //         super();
    //         return global.__native(this);
    //     }
    //     public onMapIdle() {
    //         this.owner && this.owner.get().sendEvent(MapIdleEvent);
    //     }
    //     public onMapMoved() {
    //         this.owner && this.owner.get().sendEvent(MapMovedEvent);
    //     }
    //     public onMapStable() {
    //         this.owner && this.owner.get().sendEvent(MapStableEvent);
    //     }
    //     public onMapClicked(mapClickInfo: com.carto.ui.MapClickInfo) {
    //         this.owner &&
    //             this.owner.get().sendEvent(MapClickedEvent, {
    //                 clickType: mapClickInfo.getClickType(),
    //                 position: this.owner.get().fromNativeMapPos(mapClickInfo.getClickPos())
    //             });
    //     }
    // }
    // MapEventListener = MapEventListenerImpl as any;

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

    class DirAssetPackageNativeImpl extends com.akylas.carto.additions.AssetPackage {
        assetNames: com.carto.core.StringVector;
        // context: android.content.Context;
        dirPath: string;
        cartoDirPath: string;
        loadUsingNS = false;
        constructor() {
            super();
            return global.__native(this);
        }
        public initialize(options: DirAssetPackageOptions) {
            const dirPath = options.dirPath;
            // this.context = context;
            this.loadUsingNS = !!options.loadUsingNS;
            this.dirPath = getFileName(dirPath);
            this.cartoDirPath = getRelativePathToApp(dirPath);
            console.log('DirAssetPackageNativeImpl', dirPath, this.dirPath, this.cartoDirPath, this.loadUsingNS);
            // this.dirPath = dirPath;
        }
        public loadAsset(name) {
            const startTime = Date.now();
            let result: com.carto.core.BinaryData;
            console.log(`loadAsset ${this.dirPath} ${name}`);
            if (this.loadUsingNS) {
                result = new com.carto.core.BinaryData(File.fromPath(path.join(this.dirPath, name)).readSync());
            } else {
                result = AssetUtils.loadAsset(path.join(this.cartoDirPath, name));
            }
            console.log(`loadAsset done in ${Date.now() - startTime} ms for ${name}`);
            return result;
        }
        public getAssetNames() {
            if (this.assetNames == null) {
                try {
                    const startTime = Date.now();
                    this.assetNames = new com.carto.core.StringVector();
                    const test = [];
                    walkDir(this.dirPath, (fileRelPath: string) => {
                        this.assetNames.add(fileRelPath);
                        test.push(fileRelPath);
                    });

                    console.log(`getAssetNames done ${this.assetNames.size()}: ${test}`);
                    console.log(`getAssetNames done in ${Date.now() - startTime} ms`);
                    // }
                } catch (e) {}
            }
            return this.assetNames;
        }
    }
    DirAssetPackageNative = DirAssetPackageNativeImpl as any;
}

export class DirAssetPackage extends BaseNative<DirAssetPackageNative, DirAssetPackageOptions> {
    createNative(options: DirAssetPackageOptions) {
        console.log('DirAssetPackage', options.dirPath, getFileName(options.dirPath), Folder.exists(getFileName(options.dirPath)));
        if (Folder.exists(getFileName(options.dirPath))) {
            intDirAssetPackageClass();
            console.log('intDirAssetPackageClass done');
            const result = new DirAssetPackageNative();
            console.log('about to initialize');
            result.initialize(options);
            return result;
        } else {
            console.error(`could not find dir: ${options.dirPath}`);
            return null;
        }
    }
}
