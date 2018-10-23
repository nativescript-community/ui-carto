import { CartoPackageManagerListener, CartoPackageManagerOptions, PackageInfo, PackageManagerTileDataSourceOptions } from './packagemanager';
import { DataSource, TileDataSource } from '../datasources/datasource';
export declare enum CartoMapStyle {
    VOYAGER,
    POSITRON,
    DARKMATTER,
}
export declare enum PackageErrorType {
    CONNECTION,
    DOWNLOAD_LIMIEXCEEDED,
    NO_OFFLINE_PLAN,
    PACKAGE_TOO_BIG,
    SYSTEM,
}
export declare enum PackageAction {
    READY = 0,
    WAITING = 1,
    DOWNLOADING = 2,
    COPYING = 3,
    REMOVING = 4,
}
export declare function fromVariant(variant: com.carto.core.Variant): any;
export declare enum PackageType {
    MAP = 0,
    ROUTING = 1,
    GEOCODING = 2,
    VALHALLA_ROUTING = 3,
}
export declare class CartoPackageManager extends DataSource<com.carto.packagemanager.CartoPackageManager, CartoPackageManagerOptions> {
    createNative(options: CartoPackageManagerOptions): com.carto.packagemanager.CartoPackageManager;
    listener: CartoPackageManagerListener;
    start(): boolean;
    stop(wait: boolean): void;
    startPackageListDownload(): boolean;
    startPackageDownload(id: string): boolean;
    startPackageRemove(id: string): boolean;
    startPackageImportVersionPackageFileName(packageId: string, version: number, packageFileName: string): boolean;
    getLocalPackage(packageId: string): com.carto.packagemanager.PackageInfo;
    getLocalPackages(): PackageInfo[];
    getServerPackage(packageId: string): com.carto.packagemanager.PackageInfo;
    getServerPackages(): PackageInfo[];
}
export declare class PackageManagerTileDataSource extends TileDataSource<com.carto.datasources.PackageManagerTileDataSource, PackageManagerTileDataSourceOptions> {
    createNative(options: PackageManagerTileDataSourceOptions): com.carto.datasources.PackageManagerTileDataSource;
}
