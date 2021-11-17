import { MapBounds, MapPos, toNativeMapBounds, toNativeMapPos } from '../core';
import { DataSource, TileDataSource } from '../datasources';
import { Projection } from '../projections';
import { nativeVariantToJS } from '../utils';
import { CartoPackageManagerListener, CartoPackageManagerOptions, PackageInfo, PackageManagerTileDataSourceOptions } from '.';

export enum PackageErrorType {
    CONNECTION = NTPackageErrorType.T_PACKAGE_ERROR_TYPE_CONNECTION,
    DOWNLOAD_LIMIT_EXCEEDED = NTPackageErrorType.T_PACKAGE_ERROR_TYPE_DOWNLOAD_LIMIT_EXCEEDED,
    NO_OFFLINE_PLAN = NTPackageErrorType.T_PACKAGE_ERROR_TYPE_NO_OFFLINE_PLAN,
    PACKAGE_TOO_BIG = NTPackageErrorType.T_PACKAGE_ERROR_TYPE_PACKAGE_TOO_BIG,
    SYSTEM = NTPackageErrorType.T_PACKAGE_ERROR_TYPE_SYSTEM,
}
export enum PackageAction {
    READY = NTPackageAction.T_PACKAGE_ACTION_READY,
    WAITING = NTPackageAction.T_PACKAGE_ACTION_WAITING,
    DOWNLOADING = NTPackageAction.T_PACKAGE_ACTION_DOWNLOADING,
    COPYING = NTPackageAction.T_PACKAGE_ACTION_COPYING,
    REMOVING = NTPackageAction.T_PACKAGE_ACTION_REMOVING,
}

export enum PackageType {
    MAP = NTPackageType.T_PACKAGE_TYPE_MAP,
    ROUTING = NTPackageType.T_PACKAGE_TYPE_ROUTING,
    GEOCODING = NTPackageType.T_PACKAGE_TYPE_GEOCODING,
    VALHALLA_ROUTING = NTPackageType.T_PACKAGE_TYPE_VALHALLA_ROUTING,
}

@NativeClass
class NTPackageManagerListenerImpl extends NTPackageManagerListener {
    private _owner: WeakRef<CartoPackageManagerListener>;

    public static initWithOwner(owner: WeakRef<CartoPackageManagerListener>): NTPackageManagerListenerImpl {
        const delegate = NTPackageManagerListenerImpl.new() as NTPackageManagerListenerImpl;
        delegate._owner = owner;
        return delegate;
    }
    onPackageCancelledVersion(id: string, version: number): void {
        const owner = this._owner.get();
        if (owner && owner.onPackageCancelled) {
            owner.onPackageCancelled(id, version);
        }
    }

    onPackageFailedVersionErrorType(id: string, version: number, errorType: NTPackageErrorType): void {
        const owner = this._owner.get();
        if (owner && owner.onPackageFailed) {
            owner.onPackageFailed(id, version, errorType as number);
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

    onPackageStatusChangedVersionStatus(id: string, version: number, status: NTPackageStatus): void {
        const owner = this._owner.get();
        if (owner && owner.onPackageStatusChanged) {
            owner.onPackageStatusChanged(id, version, status as any);
        }
    }

    onPackageUpdatedVersion(id: string, version: number): void {
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

function fromNTPackageInfo(packageInfo: NTPackageInfo) {
    return {
        metaInfo: packageInfo.getMetaInfo() ? nativeVariantToJS(packageInfo.getMetaInfo().getVariant()) : undefined,
        name: packageInfo.getName(),
        // packageInfo.getNames(lang: string),
        packageId: packageInfo.getPackageId(),
        packageType: packageInfo.getPackageType(),
        size: packageInfo.getSize(),
        tileMask: packageInfo.getTileMask(),
        version: packageInfo.getVersion(),
    };
}

export class CartoPackageManager extends DataSource<NTCartoPackageManager, CartoPackageManagerOptions> {
    createNative(options: CartoPackageManagerOptions) {
        return NTCartoPackageManager.alloc().initWithSourceDataFolder(options.source, options.dataFolder);
    }
    set listener(listener: CartoPackageManagerListener) {
        if (this.native) {
            if (listener) {
                this.native.setPackageManagerListener(NTPackageManagerListenerImpl.initWithOwner(new WeakRef(listener)));
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
        return this.getNative().startPackageImportVersionPackageFileName(packageId, version, packageFileName);
    }
    getLocalPackage(packageId: string) {
        return this.getNative().getLocalPackage(packageId);
    }

    getLocalPackageStatus(packageId: string, version: number) {
        return this.getNative().getLocalPackageStatusVersion(packageId, version);
    }
    getLocalPackages() {
        const vector = this.getNative().getLocalPackages();
        return vector;
    }
    getServerPackage(packageId: string) {
        return this.getNative().getServerPackage(packageId);
    }
    getServerPackages() {
        const vector = this.getNative().getServerPackages();
        return vector;
    }
    setPackagePriority(id: string, priority: number) {
        this.getNative().setPackagePriorityPriority(id, priority);
    }
    cancelPackageTasks(id: string) {
        this.getNative().cancelPackageTasks(id);
    }

    isAreaDownloaded(bounds: MapBounds, zoom: number, projection: Projection) {
        return this.getNative().isAreaDownloadedZoomProjection(toNativeMapBounds(bounds), zoom, projection.getNative());
    }
    suggestPackages(position: MapPos, projection: Projection) {
        const vector = this.getNative().suggestPackagesProjection(toNativeMapPos(position), projection.getNative());
        const result = [];
        for (let index = 0; index < vector.size(); index++) {
            result[index] = vector.get(index);
        }
        return result as PackageInfo[];
    }
}

export class PackageManagerTileDataSource extends TileDataSource<NTPackageManagerTileDataSource, PackageManagerTileDataSourceOptions> {
    createNative(options: PackageManagerTileDataSourceOptions) {
        return NTPackageManagerTileDataSource.alloc().initWithPackageManager(options.packageManager.getNative());
    }
}
