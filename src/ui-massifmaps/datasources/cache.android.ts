import { TileDownloadListener as ITileDownloadListener, MemoryCacheTileDataSourceOptions, PersistentCacheTileDataSourceOptions } from './cache';
import { TileDataSource } from '.';
import { MapBounds, toNativeMapBounds } from '../core';
import { nativeProperty } from '..';

export class PersistentCacheTileDataSource extends TileDataSource<com.massifmaps.datasources.PersistentCacheTileDataSource, PersistentCacheTileDataSourceOptions> {
    @nativeProperty capacity: number;
    @nativeProperty cacheOnlyMode: number;
    createNative(options: PersistentCacheTileDataSourceOptions) {
        if (options.databasePath) {
            return new com.massifmaps.datasources.PersistentCacheTileDataSource(options.dataSource.getNative(), options.databasePath);
        } else {
            return new com.massifmaps.datasources.PersistentCacheTileDataSource(options.dataSource.getNative());
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
    loaderListener: com.nativescript.massifmaps.additions.AKTileDownloadListener;
    startDownloadArea(mapBounds: MapBounds, minZoom: number, maxZoom: number, tileDownloadListener: ITileDownloadListener) {
        return new Promise<void>((resolve,reject)=>{
            let loaderListener = new com.nativescript.massifmaps.additions.AKTileDownloadListener(
                new com.nativescript.massifmaps.additions.AKTileDownloadListener.Listener({
                    onDownloadCompleted() {
                        if (tileDownloadListener && tileDownloadListener.onDownloadCompleted) {
                            tileDownloadListener.onDownloadCompleted();
                        }
                        resolve();
                        loaderListener = null;
                    },
                    onDownloadFailed(tile: com.massifmaps.core.MapTile) {
                        if (tileDownloadListener && tileDownloadListener.onDownloadFailed) {
                            tileDownloadListener.onDownloadFailed({
                                tileId: tile.getTileId(),
                                x: tile.getX(),
                                y: tile.getY()
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
                            tileDownloadListener.onDownloadStarting(tileCount);
                        }
                    }
                })
            );
            this.getNative().startDownloadArea(toNativeMapBounds(mapBounds), minZoom, maxZoom, loaderListener);
        })
    }
}

export class MemoryCacheTileDataSource extends TileDataSource<com.massifmaps.datasources.MemoryCacheTileDataSource, MemoryCacheTileDataSourceOptions> {
    @nativeProperty capacity: number;
    createNative(options: MemoryCacheTileDataSourceOptions) {
        return new com.massifmaps.datasources.MemoryCacheTileDataSource(options.dataSource.getNative());
    }
}
