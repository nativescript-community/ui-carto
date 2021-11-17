import { DataSource, TileDataSource, TileDataSourceOptions } from '.';
import { DefaultLatLonKeys, MapBounds } from '../core';

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
    startDownloadArea<T = DefaultLatLonKeys>(mapBounds: MapBounds<T>, minZoom: number, maxZoom: number, tileDownloadListener: TileDownloadListener);
    stopAllDownloads();
}

export interface MemoryCacheTileDataSourceOptions extends TileDataSourceOptions {
    dataSource: TileDataSource<any, any>;
    capacity?: number;
}
export class MemoryCacheTileDataSource extends DataSource<any, MemoryCacheTileDataSourceOptions> {}
