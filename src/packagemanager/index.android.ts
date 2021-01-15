import { MapBounds, MapPos, toNativeMapBounds, toNativeMapPos } from '../core';
import { DataSource, TileDataSource } from '../datasources';
import { Projection } from '../projections';
import { CartoPackageManagerOptions, CartoPackageManagerListener as ICartoPackageManagerListener, PackageInfo, PackageInfoVector, PackageManagerTileDataSourceOptions } from '.';

export const PackageType = {
    get MAP() {
        return com.carto.packagemanager.PackageType.PACKAGE_TYPE_MAP;
    },
    get ROUTING() {
        return com.carto.packagemanager.PackageType.PACKAGE_TYPE_ROUTING;
    },
    get GEOCODING() {
        return com.carto.packagemanager.PackageType.PACKAGE_TYPE_GEOCODING;
    },
    get VALHALLA_ROUTING() {
        return com.carto.packagemanager.PackageType.PACKAGE_TYPE_VALHALLA_ROUTING;
    },
};

export const PackageErrorType = {
    get CONNECTION() {
        return com.carto.packagemanager.PackageErrorType.PACKAGE_ERROR_TYPE_CONNECTION;
    },
    get DOWNLOAD_LIMIEXCEEDED() {
        return com.carto.packagemanager.PackageErrorType.PACKAGE_ERROR_TYPE_DOWNLOAD_LIMIT_EXCEEDED;
    },
    get NO_OFFLINE_PLAN() {
        return com.carto.packagemanager.PackageErrorType.PACKAGE_ERROR_TYPE_NO_OFFLINE_PLAN;
    },
    get PACKAGE_TOO_BIG() {
        return com.carto.packagemanager.PackageErrorType.PACKAGE_ERROR_TYPE_PACKAGE_TOO_BIG;
    },
    get SYSTEM() {
        return com.carto.packagemanager.PackageErrorType.PACKAGE_ERROR_TYPE_SYSTEM;
    },
};
export const PackageAction = {
    get READY() {
        return com.carto.packagemanager.PackageAction.PACKAGE_ACTION_READY;
    },
    get WAITING() {
        return com.carto.packagemanager.PackageAction.PACKAGE_ACTION_WAITING;
    },
    get DOWNLOADING() {
        return com.carto.packagemanager.PackageAction.PACKAGE_ACTION_DOWNLOADING;
    },
    get COPYING() {
        return com.carto.packagemanager.PackageAction.PACKAGE_ACTION_COPYING;
    },
    get REMOVING() {
        return com.carto.packagemanager.PackageAction.PACKAGE_ACTION_REMOVING;
    },
};

export function fromVariant(variant: com.carto.core.Variant) {
    switch (variant.getType()) {
        case com.carto.core.VariantType.VARIANT_TYPE_ARRAY: {
            const result = [];
            for (let index = 0; index < variant.getArraySize(); index++) {
                result[index] = fromVariant(variant.getArrayElement(index));
            }
            return result;
        }
        case com.carto.core.VariantType.VARIANT_TYPE_BOOL:
            return variant.getBool();
        case com.carto.core.VariantType.VARIANT_TYPE_DOUBLE:
            return variant.getDouble();
        case com.carto.core.VariantType.VARIANT_TYPE_INTEGER:
            return variant.getLong();
        case com.carto.core.VariantType.VARIANT_TYPE_NULL:
            return null;
        case com.carto.core.VariantType.VARIANT_TYPE_STRING:
            return variant.getString();
        case com.carto.core.VariantType.VARIANT_TYPE_OBJECT: {
            const result = {} as any;
            const keys = variant.getObjectKeys();
            let key;
            for (let index = 0; index < keys.size(); index++) {
                key = keys.get(index);
                result[key] = fromVariant(variant.getObjectElement(key));
            }
            return result;
        }
    }
}

function fromNativeackageInfo(packageInfo: com.carto.packagemanager.PackageInfo) {
    return {
        metaInfo: packageInfo.getMetaInfo() ? fromVariant(packageInfo.getMetaInfo().getVariant()) : undefined,
        name: packageInfo.getName(),
        // packageInfo.getNames(lang: string),
        packageId: packageInfo.getPackageId(),
        packageType: packageInfo.getPackageType(),
        size: packageInfo.getSize(),
        tileMask: packageInfo.getTileMask(),
        version: packageInfo.getVersion(),
    };
}

export class CartoPackageManager extends DataSource<com.akylas.carto.additions.AKCartoPackageManager, CartoPackageManagerOptions> {
    _nListener: com.akylas.carto.additions.AKPackageManagerListener;
    _listener: ICartoPackageManagerListener;
    constructor(options) {
        super(options);
        for (const property of ['_nListener', '_listener']) {
            const descriptor = Object.getOwnPropertyDescriptor(CartoPackageManager.prototype, property);
            if (descriptor) {
                descriptor.enumerable = false;
            }
        }
    }
    createNative(options: CartoPackageManagerOptions) {
        return new com.akylas.carto.additions.AKCartoPackageManager(options.source, options.dataFolder);
    }
    set listener(listener: ICartoPackageManagerListener) {
        if (this.native) {
            if (listener) {
                this._listener = listener;
                if (!this._nListener) {
                    this._nListener = new com.akylas.carto.additions.AKPackageManagerListener(
                        new com.akylas.carto.additions.AKPackageManagerListener.Listener({
                            onPackageCancelled: this.onPackageCancelled.bind(this),
                            onPackageFailed: this.onPackageFailed.bind(this),
                            onPackageListFailed: this.onPackageListFailed.bind(this),
                            onPackageListUpdated: this.onPackageListUpdated.bind(this),
                            onPackageStatusChanged: this.onPackageStatusChanged.bind(this),
                            onPackageUpdated: this.onPackageUpdated.bind(this),
                            onStyleFailed: this.onStyleFailed.bind(this),
                            onStyleUpdated: this.onStyleUpdated.bind(this),
                        })
                    );
                }
                this.native.setPackageManagerListener(this._nListener);
            } else {
                this.native.setPackageManagerListener(null);
                this._nListener = null;
                this._listener = null;
            }
        }
    }

    onPackageCancelled(id: string, version: number): void {
        if (this._listener && this._listener.onPackageCancelled) {
            this._listener.onPackageCancelled(id, version);
        }
    }

    onPackageFailed(id: string, version: number, errorType: com.carto.packagemanager.PackageErrorType): void {
        if (this._listener && this._listener.onPackageFailed) {
            this._listener.onPackageFailed(id, version, errorType as any);
        }
    }

    onPackageListFailed(): void {
        if (this._listener && this._listener.onPackageListFailed) {
            this._listener.onPackageListFailed();
        }
    }

    onPackageListUpdated(): void {
        if (this._listener && this._listener.onPackageListUpdated) {
            this._listener.onPackageListUpdated();
        }
    }

    onPackageStatusChanged(id: string, version: number, status: com.carto.packagemanager.PackageStatus): void {
        if (this._listener && this._listener.onPackageStatusChanged) {
            this._listener.onPackageStatusChanged(id, version, status as any);
        }
    }

    onPackageUpdated(id: string, version: number): void {
        if (this._listener && this._listener.onPackageUpdated) {
            this._listener.onPackageUpdated(id, version);
        }
    }

    onStyleFailed(styleName: string): void {
        if (this._listener && this._listener.onStyleFailed) {
            this._listener.onStyleFailed(styleName);
        }
    }

    onStyleUpdated(styleName: string): void {
        if (this._listener && this._listener.onStyleUpdated) {
            this._listener.onStyleUpdated(styleName);
        }
    }
    start() {
        return this.getNative().start();
    }
    stop(wait: boolean) {
        this.getNative().stop(wait);
    }
    getServerPackageListAge() {
        return this.getNative().getServerPackageListAge();
    }
    getServerPackageListMetaInfo() {
        return this.getNative().getServerPackageListMetaInfo();
    }
    startPackageListDownload() {
        return this.getNative().startPackageListDownload();
    }
    startPackageDownload(id: string) {
        return this.getNative().startPackageDownload(id);
    }
    startPackageRemove(id: string) {
        return this.getNative().startPackageRemove(id);
    }
    startPackageImportVersionPackageFileName(packageId: string, version: number, packageFileName: string) {
        return this.getNative().startPackageImport(packageId, version, packageFileName);
    }
    getLocalPackage(packageId: string) {
        return this.getNative().getLocalPackage(packageId);
    }
    getLocalPackageStatus(packageId: string, version: number) {
        return this.getNative().getLocalPackageStatus(packageId, version);
    }
    getLocalPackages(callback?: (result: PackageInfoVector) => void) {
        if (callback) {
            return this.getNative().getLocalPackagesCallback(new com.akylas.carto.additions.ServerPackagesCallback({ onServerPackages: callback as any }));
        }
        return this.getNative().getLocalPackages();
        // const result = [];
        // for (let index = 0; index < vector.size(); index++) {
        //     result[index] = vector.get(index);
        // }
        // return result as PackageInfo[];
    }
    getServerPackage(packageId: string) {
        return this.getNative().getServerPackage(packageId);
    }
    getServerPackages(callback?: (result: PackageInfoVector) => void) {
        if (callback) {
            return this.getNative().getServerPackagesCallback(new com.akylas.carto.additions.ServerPackagesCallback({ onServerPackages: callback as any }));
        }
        return this.getNative().getServerPackages();
    }
    setPackagePriority(id: string, priority: number) {
        this.getNative().setPackagePriority(id, priority);
    }
    cancelPackageTasks(id: string) {
        this.getNative().cancelPackageTasks(id);
    }
    isAreaDownloaded(bounds: MapBounds, zoom: number, projection: Projection) {
        return this.getNative().isAreaDownloaded(toNativeMapBounds(bounds), zoom, projection.getNative());
    }
    suggestPackages(position: MapPos, projection: Projection) {
        const vector = this.getNative().suggestPackages(toNativeMapPos(position), projection.getNative());
        const result = [];
        for (let index = 0; index < vector.size(); index++) {
            result[index] = vector.get(index);
        }
        return result as PackageInfo[];
    }
}

export class PackageManagerTileDataSource extends TileDataSource<com.carto.datasources.PackageManagerTileDataSource, PackageManagerTileDataSourceOptions> {
    createNative(options: PackageManagerTileDataSourceOptions) {
        return new com.carto.datasources.PackageManagerTileDataSource(options.packageManager.getNative());
    }
}
