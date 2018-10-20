import { CartoPackageManagerListener, CartoPackageManagerOptions, PackageInfo, PackageManagerTileDataSourceOptions, PackageStatus } from './packagemanager';
import { DataSource, TileDataSource } from '../datasources/datasource';

export enum CartoMapStyle {
    VOYAGER = com.carto.layers.CartoBaseMapStyle.CARTO_BASEMAP_STYLE_VOYAGER.ordinal(),
    POSITRON = com.carto.layers.CartoBaseMapStyle.CARTO_BASEMAP_STYLE_POSITRON.ordinal(),
    DARKMATTER = com.carto.layers.CartoBaseMapStyle.CARTO_BASEMAP_STYLE_DARKMATTER.ordinal()
}

export enum PackageErrorType {
    CONNECTION = com.carto.packagemanager.PackageErrorType.PACKAGE_ERROR_TYPE_CONNECTION.ordinal(),
    DOWNLOAD_LIMIEXCEEDED = com.carto.packagemanager.PackageErrorType.PACKAGE_ERROR_TYPE_DOWNLOAD_LIMIT_EXCEEDED.ordinal(),
    NO_OFFLINE_PLAN = com.carto.packagemanager.PackageErrorType.PACKAGE_ERROR_TYPE_NO_OFFLINE_PLAN.ordinal(),
    PACKAGE_TOO_BIG = com.carto.packagemanager.PackageErrorType.PACKAGE_ERROR_TYPE_PACKAGE_TOO_BIG.ordinal(),
    SYSTEM = com.carto.packagemanager.PackageErrorType.PACKAGE_ERROR_TYPE_SYSTEM.ordinal()
}
// export enum PackageAction {
//     READY = com.carto.packagemanager.PackageAction.PACKAGE_ACTION_READY.ordinal(),
//     WAITING = com.carto.packagemanager.PackageAction.PACKAGE_ACTION_WAITING.ordinal(),
//     DOWNLOADING = com.carto.packagemanager.PackageAction.PACKAGE_ACTION_DOWNLOADING.ordinal(),
//     COPYING = com.carto.packagemanager.PackageAction.PACKAGE_ACTION_COPYING.ordinal(),
//     REMOVING = com.carto.packagemanager.PackageAction.PACKAGE_ACTION_REMOVING.ordinal()
// }
export enum PackageAction {
    READY,
    WAITING,
    DOWNLOADING,
    COPYING,
    REMOVING
}

class PackageManagerListenerImpl extends com.carto.packagemanager.PackageManagerListener {
    private _owner: WeakRef<CartoPackageManagerListener>;

    public static initWithOwner(owner: WeakRef<CartoPackageManagerListener>): PackageManagerListenerImpl {
        const delegate = new PackageManagerListenerImpl() as PackageManagerListenerImpl;
        delegate._owner = owner;
        return delegate;
    }
    onPackageCancelled(id: string, version: number): void {
        const owner = this._owner.get();
        if (owner && owner.onPackageCancelled) {
            owner.onPackageCancelled(id, version);
        }
    }

    onPackageFailed(id: string, version: number, errorType: com.carto.packagemanager.PackageErrorType): void {
        const owner = this._owner.get();
        if (owner && owner.onPackageFailed) {
            owner.onPackageFailed(id, version, errorType as any);
        }
    }

    onPackageListFailed(): void {
        const owner = this._owner.get();
        if (owner && owner.onPackageListFailed) {
            owner.onPackageListFailed();
        }
    }

    onPackageListUpdated(): void {
        const owner = this._owner.get();
        if (owner && owner.onPackageListUpdated) {
            owner.onPackageListUpdated();
        }
    }

    onPackageStatusChanged(id: string, version: number, status: com.carto.packagemanager.PackageStatus): void {
        const owner = this._owner.get();
        if (owner && owner.onPackageStatusChanged) {
            owner.onPackageStatusChanged(id, version, {
                currentAction: status.getCurrentAction() as any,
                progress: status.getProgress()
            });
        }
    }

    onPackageUpdated(id: string, version: number): void {
        const owner = this._owner.get();
        if (owner && owner.onPackageUpdated) {
            owner.onPackageUpdated(id, version);
        }
    }

    onStyleFailed(styleName: string): void {
        const owner = this._owner.get();
        if (owner && owner.onStyleFailed) {
            owner.onStyleFailed(styleName);
        }
    }

    onStyleUpdated(styleName: string): void {
        const owner = this._owner.get();
        if (owner && owner.onStyleUpdated) {
            owner.onStyleUpdated(styleName);
        }
    }
}

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
export enum PackageType {
    MAP,
    ROUTING,
    GEOCODING,
    VALHALLA_ROUTING
}

function fromNTPackageInfo(packageInfo: com.carto.packagemanager.PackageInfo) {
    return {
        metaInfo: packageInfo.getMetaInfo() ? fromVariant(packageInfo.getMetaInfo().getVariant()) : undefined,
        name: packageInfo.getName(),
        // packageInfo.getNames(lang: string),
        packageId: packageInfo.getPackageId(),
        packageType: packageInfo.getPackageType(),
        size: packageInfo.getSize(),
        tileMask: packageInfo.getTileMask(),
        version: packageInfo.getVersion()
    };
}

export class CartoPackageManager extends DataSource<com.carto.packagemanager.CartoPackageManager, CartoPackageManagerOptions> {
    createNative(options: CartoPackageManagerOptions) {
        return new com.carto.packagemanager.CartoPackageManager(options.source, options.dataFolder);
    }
    set listener(listener: CartoPackageManagerListener) {
        if (this.native) {
            if (listener) {
                this.native.setPackageManagerListener(PackageManagerListenerImpl.initWithOwner(new WeakRef(listener)));
            } else {
                this.native.setPackageManagerListener(null);
            }
        }
    }
    start() {
        return this.getNative().start();
    }
    stop(wait: boolean) {
        this.getNative().stop(wait);
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
    getLocalPackages() {
        const vector = this.getNative().getLocalPackages();
        console.log('getLocalPackages', vector.size());
        const result = [];
        for (let index = 0; index < vector.size(); index++) {
            result[index] = vector.get(index);
        }
        return result as PackageInfo[];
    }
    getServerPackage(packageId: string) {
        return this.getNative().getServerPackage(packageId);
    }
    getServerPackages() {
        const vector = this.getNative().getServerPackages();
        console.log('getServerPackages', vector.size());
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
