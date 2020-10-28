import { TileDownloadListener as ITileDownloadListener, MemoryCacheTileDataSourceOptions, PersistentCacheTileDataSourceOptions } from './cache';
import { TileDataSource } from '.';
import { MapBounds, toNativeMapBounds } from '../core';
import { nativeProperty } from '../index.common';

export class PersistentCacheTileDataSource extends TileDataSource<com.carto.datasources.PersistentCacheTileDataSource, PersistentCacheTileDataSourceOptions> {
    @nativeProperty capacity: number;
    @nativeProperty cacheOnlyMode: number;
    createNative(options: PersistentCacheTileDataSourceOptions) {
        if (options.databasePath) {
            return new com.carto.datasources.PersistentCacheTileDataSource(options.dataSource.getNative(), options.databasePath);
        } else {
            return new com.carto.datasources.PersistentCacheTileDataSource(options.dataSource.getNative());
        }
    }
    close() {
        if (this.native) {
            this.native.close();
        }
    }
    clear() {
        this.getNative().clear();
    }
    isOpen() {
        return this.native && this.native.isOpen();
    }
    stopAllDownloads() {
        return this.native && this.native.stopAllDownloads();
    }
    loaderListener: com.akylas.carto.additions.AKTileDownloadListener;
    startDownloadArea(mapBounds: MapBounds, minZoom: number, maxZoom: number, tileDownloadListener: ITileDownloadListener) {
        const loaderListener = new com.akylas.carto.additions.AKTileDownloadListener(
            new com.akylas.carto.additions.AKTileDownloadListener.Listener({
                onDownloadCompleted() {
                    if (tileDownloadListener && tileDownloadListener.onDownloadCompleted) {
                        tileDownloadListener.onDownloadCompleted();
                    }
                },
                onDownloadFailed(tile: com.carto.core.MapTile) {
                    if (tileDownloadListener && tileDownloadListener.onDownloadFailed) {
                        tileDownloadListener.onDownloadFailed({
                            tileId: tile.getTileId(),
                            x: tile.getX(),
                            y: tile.getY(),
                        });
                    }
                },
                onDownloadProgress(progress: number) {
                    if (tileDownloadListener && tileDownloadListener.onDownloadProgress) {
                        tileDownloadListener.onDownloadProgress(progress);
                    }
                },
                onDownloadStarting(tileCount: number) {
                    if (tileDownloadListener && tileDownloadListener.onDownloadStarting) {
                        tileDownloadListener.onDownloadProgress(tileCount);
                    }
                },
            })
        );
        this.getNative().startDownloadArea(toNativeMapBounds(mapBounds), minZoom, maxZoom, loaderListener);
    }
}

export class MemoryCacheTileDataSource extends TileDataSource<com.carto.datasources.MemoryCacheTileDataSource, MemoryCacheTileDataSourceOptions> {
    @nativeProperty capacity: number;
    createNative(options: MemoryCacheTileDataSourceOptions) {
        return new com.carto.datasources.MemoryCacheTileDataSource(options.dataSource.getNative());
    }
}
