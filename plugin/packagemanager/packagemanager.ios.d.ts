import { CartoPackageManagerListener, CartoPackageManagerOptions, PackageInfo, PackageManagerTileDataSourceOptions } from './packagemanager';
import { DataSource, TileDataSource } from '../datasources/datasource';
import { MapBounds, MapPos } from '../core/core';
import { Projection } from '../projections/projection';
export declare enum PackageErrorType {
    CONNECTION = 1,
    DOWNLOAD_LIMIT_EXCEEDED = 2,
    NO_OFFLINE_PLAN = 4,
    PACKAGE_TOO_BIG = 3,
    SYSTEM = 0
}
export declare enum PackageAction {
    READY = 0,
    WAITING = 1,
    DOWNLOADING = 2,
    COPYING = 3,
    REMOVING = 4
}
export declare enum PackageType {
    MAP = 0,
    ROUTING = 1,
    GEOCODING = 2,
    VALHALLA_ROUTING = 3
}
export declare class CartoPackageManager extends DataSource<NTCartoPackageManager, CartoPackageManagerOptions> {
    createNative(options: CartoPackageManagerOptions): NTCartoPackageManager;
    listener: CartoPackageManagerListener;
    start(): boolean;
    stop(wait: boolean): void;
    getServerPackageListAge(): number;
    getServerPackageListMetaInfo(): NTPackageMetaInfo;
    startPackageListDownload(): boolean;
    startPackageDownload(id: string): boolean;
    startPackageRemove(id: string): boolean;
    startPackageImportVersionPackageFileName(packageId: string, version: number, packageFileName: string): boolean;
    getLocalPackage(packageId: string): NTPackageInfo;
    getLocalPackageStatus(packageId: string, version: number): NTPackageStatus;
    getLocalPackages(): NTPackageInfoVector;
    getServerPackage(packageId: string): NTPackageInfo;
    getServerPackages(): NTPackageInfoVector;
    setPackagePriority(id: string, priority: number): void;
    cancelPackageTasks(id: string): void;
    isAreaDownloaded(bounds: MapBounds, zoom: number, projection: Projection): boolean;
    suggestPackages(position: MapPos, projection: Projection): PackageInfo[];
}
export declare class PackageManagerTileDataSource extends TileDataSource<NTPackageManagerTileDataSource, PackageManagerTileDataSourceOptions> {
    createNative(options: PackageManagerTileDataSourceOptions): NTPackageManagerTileDataSource;
}
