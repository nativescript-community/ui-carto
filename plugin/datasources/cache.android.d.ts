import { MemoryCacheTileDataSourceOptions, PersistentCacheTileDataSourceOptions, TileDownloadListener } from './cache';
import { TileDataSource } from './datasource';
import { MapBounds } from '../core/core';
export declare class PersistentCacheTileDataSource extends TileDataSource<com.carto.datasources.PersistentCacheTileDataSource, PersistentCacheTileDataSourceOptions> {
    createNative(options: PersistentCacheTileDataSourceOptions): com.carto.datasources.PersistentCacheTileDataSource;
    close(): void;
    isOpen(): boolean;
    setCacheOnlyMode(value: boolean): void;
    stopAllDownloads(): void;
    startDownloadAreaMinZoomMaxZoomTileDownloadListener(mapBounds: MapBounds, minZoom: number, maxZoom: number, tileDownloadListener: TileDownloadListener): void;
}
export declare class MemoryCacheTileDataSource extends TileDataSource<com.carto.datasources.MemoryCacheTileDataSource, MemoryCacheTileDataSourceOptions> {
    createNative(options: MemoryCacheTileDataSourceOptions): com.carto.datasources.MemoryCacheTileDataSource;
    capacity: number;
}
