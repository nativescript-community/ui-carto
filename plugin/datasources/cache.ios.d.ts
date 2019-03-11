import { MemoryCacheTileDataSourceOptions, PersistentCacheTileDataSourceOptions, TileDownloadListener } from './cache';
import { TileDataSource } from './datasource';
import { MapBounds } from '../core/core';
export declare class PersistentCacheTileDataSource extends TileDataSource<NTPersistentCacheTileDataSource, PersistentCacheTileDataSourceOptions> {
    createNative(options: PersistentCacheTileDataSourceOptions): NTPersistentCacheTileDataSource;
    close(): void;
    isOpen(): boolean;
    setCacheOnlyMode(value: boolean): void;
    stopAllDownloads(): void;
    startDownloadAreaMinZoomMaxZoomTileDownloadListener(mapBounds: MapBounds, minZoom: number, maxZoom: number, tileDownloadListener: TileDownloadListener): void;
}
export declare class MemoryCacheTileDataSource extends TileDataSource<NTMemoryCacheTileDataSource, MemoryCacheTileDataSourceOptions> {
    createNative(options: MemoryCacheTileDataSourceOptions): NTMemoryCacheTileDataSource;
    capacity: number;
}
