import { MapBounds, MapPos } from '../core/core';
import { DataSource, TileDataSource } from '../datasources/datasource';
import { Projection } from '../projections/projection';
import { CartoPackageManagerListener, CartoPackageManagerOptions, PackageInfo, PackageInfoVector, PackageManagerTileDataSourceOptions } from './packagemanager';
export declare const PackageType: {
    readonly MAP: com.carto.packagemanager.PackageType;
    readonly ROUTING: com.carto.packagemanager.PackageType;
    readonly GEOCODING: com.carto.packagemanager.PackageType;
    readonly VALHALLA_ROUTING: com.carto.packagemanager.PackageType;
};
export declare const PackageErrorType: {
    readonly CONNECTION: com.carto.packagemanager.PackageErrorType;
    readonly DOWNLOAD_LIMIEXCEEDED: com.carto.packagemanager.PackageErrorType;
    readonly NO_OFFLINE_PLAN: com.carto.packagemanager.PackageErrorType;
    readonly PACKAGE_TOO_BIG: com.carto.packagemanager.PackageErrorType;
    readonly SYSTEM: com.carto.packagemanager.PackageErrorType;
};
export declare const PackageAction: {
    readonly READY: com.carto.packagemanager.PackageAction;
    readonly WAITING: com.carto.packagemanager.PackageAction;
    readonly DOWNLOADING: com.carto.packagemanager.PackageAction;
    readonly COPYING: com.carto.packagemanager.PackageAction;
    readonly REMOVING: com.carto.packagemanager.PackageAction;
};
export declare function fromVariant(variant: com.carto.core.Variant): any;
export declare class CartoPackageManager extends DataSource<com.akylas.carto.additions.AKCartoPackageManager, CartoPackageManagerOptions> {
    createNative(options: CartoPackageManagerOptions): com.akylas.carto.additions.AKCartoPackageManager;
    listener: CartoPackageManagerListener;
    start(): boolean;
    stop(wait: boolean): void;
    getServerPackageListAge(): number;
    getServerPackageListMetaInfo(): com.carto.packagemanager.PackageMetaInfo;
    startPackageListDownload(): boolean;
    startPackageDownload(id: string): boolean;
    startPackageRemove(id: string): boolean;
    startPackageImportVersionPackageFileName(packageId: string, version: number, packageFileName: string): boolean;
    getLocalPackage(packageId: string): com.carto.packagemanager.PackageInfo;
    getLocalPackageStatus(packageId: string, version: number): com.carto.packagemanager.PackageStatus;
    getLocalPackages(callback?: (result: PackageInfoVector) => void): any;
    getServerPackage(packageId: string): com.carto.packagemanager.PackageInfo;
    getServerPackages(callback?: (result: PackageInfoVector) => void): any;
    setPackagePriority(id: string, priority: number): void;
    cancelPackageTasks(id: string): void;
    isAreaDownloaded(bounds: MapBounds, zoom: number, projection: Projection): boolean;
    suggestPackages(position: MapPos, projection: Projection): PackageInfo[];
}
export declare class PackageManagerTileDataSource extends TileDataSource<com.carto.datasources.PackageManagerTileDataSource, PackageManagerTileDataSourceOptions> {
    createNative(options: PackageManagerTileDataSourceOptions): com.carto.datasources.PackageManagerTileDataSource;
}
