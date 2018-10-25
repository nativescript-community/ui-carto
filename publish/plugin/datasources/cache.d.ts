import { DataSource, TileDataSourceOptions, TileDataSource } from './datasource';


export interface TileDownloadListener {
    onDownloadCompleted();
    onDownloadFailed(tile: { x: number; y: number; tileId: number });
    onDownloadProgress(progress: number);
    onDownloadStarting(tileCount: number);
}

export interface PersistentCacheTileDataSourceOptions extends TileDataSourceOptions {
    dataSource: TileDataSource<any, any>;
    databasePath?: string;
}
export class PersistentCacheTileDataSource extends DataSource<any, PersistentCacheTileDataSourceOptions> {}


export interface MemoryCacheTileDataSourceOptions extends TileDataSourceOptions {
    dataSource: TileDataSource<any, any>;
    capacity: number;
}
export class MemoryCacheTileDataSource extends DataSource<any, MemoryCacheTileDataSourceOptions> {}
