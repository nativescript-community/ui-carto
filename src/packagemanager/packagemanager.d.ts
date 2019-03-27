import { BaseNative } from '../carto';
import { TileDataSource, TileDataSourceOptions } from '../datasources/datasource';
import { DataSource } from '../datasources/datasource';
import { MapPos, MapBounds, NativeVector } from '../core/core';
import { Projection } from '../projections/projection';

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
    // currentAction: PackageAction;
    // progress: number;
    getCurrentAction(): PackageAction;
    getProgress(): number;
    isPaused(): boolean;
}
export interface PackageMetaInfo {
    getVariant(): any;
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

export class PackageInfoVector extends NativeVector<PackageInfo> {}

export class CartoPackageManager extends DataSource<any, CartoPackageManagerOptions> {
    start(): boolean;
    startPackageListDownload(): boolean;
    getServerPackageListAge(): number;
    getServerPackageListMetaInfo(): PackageMetaInfo;
    stop(wait: boolean): boolean;
    startPackageListDownload(): boolean;
    startPackageDownload(id: string): boolean;
    cancelPackageTasks(id: string);
    startPackageRemove(id: string): boolean;
    setPackagePriority(id: string, priority: number);
    startPackageImportVersionPackageFileName(packageId: string, version: number, packageFileName: string): boolean;
    getLocalPackage(packageId: string): PackageInfo;
    getLocalPackageStatus(packageId: string, version: number): PackageStatus;
    getLocalPackages(callback?: (result: PackageInfoVector) => void): PackageInfoVector;
    getServerPackage(packageId: string): PackageInfo;
    getServerPackages(callback?: (result: PackageInfoVector) => void): PackageInfoVector;
    isAreaDownloaded(bounds: MapBounds, zoom: number, projection: Projection): boolean
    suggestPackages(position: MapPos, projection: Projection): PackageInfo[];
}
export interface PackageManagerTileDataSourceOptions extends TileDataSourceOptions {
    packageManager: CartoPackageManager;
}
export class PackageManagerTileDataSource extends TileDataSource<any, PackageManagerTileDataSourceOptions> {}
