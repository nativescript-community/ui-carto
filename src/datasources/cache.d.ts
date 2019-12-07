import { DataSource, TileDataSource, TileDataSourceOptions } from '.';

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
export class PersistentCacheTileDataSource extends DataSource<any, PersistentCacheTileDataSourceOptions> {
    capacity: number;
    cacheOnlyMode: boolean;
    clear();
}

export interface MemoryCacheTileDataSourceOptions extends TileDataSourceOptions {
    dataSource: TileDataSource<any, any>;
    capacity?: number;
}
export class MemoryCacheTileDataSource extends DataSource<any, MemoryCacheTileDataSourceOptions> {}
