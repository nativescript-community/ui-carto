import { DataSource, TileDataSource, TileDataSourceOptions } from '.';
import { DefaultLatLonKeys, MapBounds } from '../core';
import { Accessors as Acc_PersistentCacheTileDataSource, Methods as Met_PersistentCacheTileDataSource } from '../bindings/datasources/PersistentCacheTileDataSource';
import { Accessors as Acc_MemoryCacheTileDataSource, Methods as Met_MemoryCacheTileDataSource } from '../bindings/datasources/MemoryCacheTileDataSource';
import { Accessors as Acc_CacheTileDataSource, Methods as Met_CacheTileDataSource } from '../bindings/datasources/CacheTileDataSource';
import { Accessors as Acc_TileDataSource, Methods as Met_TileDataSource } from '../bindings/datasources/TileDataSource';

export interface TileDownloadListener {
    onDownloadCompleted();
    onDownloadFailed(tile: { x: number; y: number; tileId: number });
    onDownloadProgress(progress: number);
    onDownloadStarting(tileCount: number);
}

export interface PersistentCacheTileDataSourceOptions extends TileDataSourceOptions {
    dataSource: TileDataSource<any, any>;
    databasePath?: string;
    capacity?: number;
    cacheOnlyMode?: boolean;
}
export class PersistentCacheTileDataSource extends TileDataSource<any, PersistentCacheTileDataSourceOptions> {
    capacity: number;
    cacheOnlyMode: boolean;
    clear();
    startDownloadArea<T = DefaultLatLonKeys>(mapBounds: MapBounds<T>, minZoom: number, maxZoom: number, tileDownloadListener: TileDownloadListener, fetchDelay?: number);
    stopAllDownloads();
}

export interface MemoryCacheTileDataSourceOptions extends TileDataSourceOptions {
    dataSource: TileDataSource<any, any>;
    capacity?: number;
}
export class MemoryCacheTileDataSource extends DataSource<any, MemoryCacheTileDataSourceOptions> {}

export interface PersistentCacheTileDataSource
    extends Omit<Acc_PersistentCacheTileDataSource, 'cacheOnlyMode' | 'capacity'>, Omit<Met_PersistentCacheTileDataSource, 'clear' | 'startDownloadArea' | 'stopAllDownloads'> {}

export interface MemoryCacheTileDataSource extends Acc_MemoryCacheTileDataSource, Met_MemoryCacheTileDataSource {}

export interface PersistentCacheTileDataSource extends Omit<Acc_PersistentCacheTileDataSource, 'cacheOnlyMode' | 'capacity'>, Omit<Met_PersistentCacheTileDataSource, 'clear' | 'startDownloadArea' | 'stopAllDownloads'> {}

export interface PersistentCacheTileDataSource extends Omit<Acc_CacheTileDataSource, 'capacity'>, Omit<Met_CacheTileDataSource, 'clear' | 'getCapacity' | 'setCapacity'> {}
export interface PersistentCacheTileDataSource extends Acc_TileDataSource, Omit<Met_TileDataSource, 'getDataExtent' | 'getEncoding' | 'getMaxZoom' | 'getMetaData' | 'getMinZoom' | 'loadTile' | 'notifyTilesChanged'> {}

export interface MemoryCacheTileDataSource extends Omit<Acc_CacheTileDataSource, 'capacity'>, Omit<Met_CacheTileDataSource, 'clear' | 'getCapacity' | 'setCapacity'> {}
export interface MemoryCacheTileDataSource extends Acc_TileDataSource, Omit<Met_TileDataSource, 'getDataExtent' | 'getEncoding' | 'getMaxZoom' | 'getMetaData' | 'getMinZoom' | 'loadTile' | 'notifyTilesChanged'> {}
