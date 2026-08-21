import { TileDownloadListener as ITileDownloadListener, MemoryCacheTileDataSourceOptions, PersistentCacheTileDataSourceOptions } from './cache';
import { TileDataSource } from '.';
import { MapBounds, toNativeMapBounds } from '../core';
import { nativeProperty } from '..';
import {
    ACCESSORS as ACC_PersistentCacheTileDataSource,
    Accessors as Acc_PersistentCacheTileDataSource,
    METHODS as MET_PersistentCacheTileDataSource,
    Methods as Met_PersistentCacheTileDataSource,
    SELECTORS as SEL_PersistentCacheTileDataSource
} from '../bindings/datasources/PersistentCacheTileDataSource';
import { bindNative } from '../nativeclass.common';
import {
    ACCESSORS as ACC_MemoryCacheTileDataSource,
    Accessors as Acc_MemoryCacheTileDataSource,
    METHODS as MET_MemoryCacheTileDataSource,
    Methods as Met_MemoryCacheTileDataSource,
    SELECTORS as SEL_MemoryCacheTileDataSource
} from '../bindings/datasources/MemoryCacheTileDataSource';
import { ACCESSORS as ACC_CacheTileDataSource, Accessors as Acc_CacheTileDataSource, METHODS as MET_CacheTileDataSource, Methods as Met_CacheTileDataSource, SELECTORS as SEL_CacheTileDataSource } from '../bindings/datasources/CacheTileDataSource';

export class PersistentCacheTileDataSource extends TileDataSource<com.massifmaps.datasources.PersistentCacheTileDataSource, PersistentCacheTileDataSourceOptions> {
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
    loaderListener: com.nativescript.massifmaps.additions.TileDownloadListener;
    startDownloadArea(mapBounds: MapBounds, minZoom: number, maxZoom: number, tileDownloadListener: ITileDownloadListener, fetchDelay: number = 0) {
        return new Promise<void>((resolve, reject) => {
            let loaderListener = new com.nativescript.massifmaps.additions.TileDownloadListener(
                new com.nativescript.massifmaps.additions.TileDownloadListener.Listener({
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
            this.getNative().startDownloadArea(toNativeMapBounds(mapBounds), minZoom, maxZoom, fetchDelay, loaderListener);
        });
    }
}

export class MemoryCacheTileDataSource extends TileDataSource<com.massifmaps.datasources.MemoryCacheTileDataSource, MemoryCacheTileDataSourceOptions> {
    createNative(options: MemoryCacheTileDataSourceOptions) {
        return new com.massifmaps.datasources.MemoryCacheTileDataSource(options.dataSource.getNative());
    }
}

export interface PersistentCacheTileDataSource
    extends Acc_PersistentCacheTileDataSource, Omit<Met_PersistentCacheTileDataSource, 'clear' | 'close' | 'isOpen' | 'loadTile' | 'startDownloadArea' | 'stopAllDownloads'> {}
bindNative(PersistentCacheTileDataSource, MET_PersistentCacheTileDataSource, ACC_PersistentCacheTileDataSource, { selectors: SEL_PersistentCacheTileDataSource });

export interface MemoryCacheTileDataSource extends Acc_MemoryCacheTileDataSource, Omit<Met_MemoryCacheTileDataSource, 'loadTile'> {}
bindNative(MemoryCacheTileDataSource, MET_MemoryCacheTileDataSource, ACC_MemoryCacheTileDataSource, { selectors: SEL_MemoryCacheTileDataSource });

export interface PersistentCacheTileDataSource extends Omit<Acc_CacheTileDataSource, 'capacity'>, Omit<Met_CacheTileDataSource, 'clear' | 'getCapacity' | 'setCapacity'> {}
bindNative(PersistentCacheTileDataSource, MET_CacheTileDataSource, ACC_CacheTileDataSource, { selectors: SEL_CacheTileDataSource });

export interface MemoryCacheTileDataSource extends Omit<Acc_CacheTileDataSource, 'capacity'>, Omit<Met_CacheTileDataSource, 'clear' | 'getCapacity' | 'setCapacity'> {}
bindNative(MemoryCacheTileDataSource, MET_CacheTileDataSource, ACC_CacheTileDataSource, { selectors: SEL_CacheTileDataSource });
