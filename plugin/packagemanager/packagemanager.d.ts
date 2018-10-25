import { BaseNative } from '../carto';
import { TileDataSourceOptions, TileDataSource } from '../datasources/datasource';
import { DataSource } from '../datasources/datasource';

declare enum PackageErrorType {
    CONNECTION,
    DOWNLOAD_LIMIT_EXCEEDED,
    NO_OFFLINE_PLAN,
    PACKAGE_TOO_BIG,
    SYSTEM
}
declare enum PackageType {
    MAP,
    ROUTING,
    GEOCODING,
    VALHALLA_ROUTING
}

declare interface PackageInfo {
    getMetaInfo();
    getName(): string;
    getNames(lang: string);
    getPackageId(): string;
    getPackageType(): PackageType;
    getSize(): number;
    getTileMask();
    getVersion(): number;
}

export enum PackageAction {
    READY,
    WAITING,
    DOWNLOADING,
    COPYING,
    REMOVING
}
export interface PackageStatus {
    currentAction: PackageAction;
    progress: number;
}

export interface CartoPackageManagerListener {
    onPackageCancelled?(id: string, version: number): void;
    onPackageFailed?(arg1: string, version: number, errorType: PackageErrorType): void;
    onPackageListFailed?(): void;
    onPackageListUpdated?(): void;
    onPackageStatusChanged?(arg1: string, version: number, status: PackageStatus): void;
    onPackageUpdated?(arg1: string, version: number): void;
    onStyleFailed?(styleName: string): void;
    onStyleUpdated?(styleName: string): void;
}


export interface CartoPackageManagerOptions extends TileDataSourceOptions {
    source: string;
    listener?: CartoPackageManagerListener;
    dataFolder: string;
}
export class CartoPackageManager extends DataSource<any, CartoPackageManagerOptions> {
    start(): boolean;
    startPackageListDownload(): boolean;
    stop(wait: boolean): boolean;
    startPackageListDownload(): boolean;
    startPackageDownload(id: string): boolean;
    startPackageRemove(id: string): boolean;
    startPackageImportVersionPackageFileName(packageId: string, version: number, packageFileName: string): boolean;
    getLocalPackage(packageId: string): PackageInfo;
    getLocalPackages(): PackageInfo[];
    getServerPackage(packageId: string): PackageInfo;
    getServerPackages(): PackageInfo[];
}
export interface PackageManagerTileDataSourceOptions extends TileDataSourceOptions {
    packageManager: CartoPackageManager;
}
export class PackageManagerTileDataSource extends TileDataSource<any, PackageManagerTileDataSourceOptions> {}


