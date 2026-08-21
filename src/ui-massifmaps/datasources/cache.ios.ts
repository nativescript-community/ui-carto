import { MemoryCacheTileDataSourceOptions, PersistentCacheTileDataSourceOptions, TileDownloadListener } from './cache';
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

@NativeClass
class MSFTileDownloadListenerImpl extends NSMSFTileDownloadListener {
    private _owner: WeakRef<TileDownloadListener>;
    private mOnComplete;
    public static initWithOwner(owner: WeakRef<TileDownloadListener>, onComplete): MSFTileDownloadListenerImpl {
        const delegate = MSFTileDownloadListenerImpl.new() as MSFTileDownloadListenerImpl;
        delegate._owner = owner;
        delegate.mOnComplete = onComplete;
        return delegate;
    }
    onDownloadCompletedThreaded() {
        const owner = this._owner.get();
        if (owner && owner.onDownloadCompleted) {
            owner.onDownloadCompleted();
        }
        this.mOnComplete?.();
    }

    onDownloadFailedThreaded(tile: MSFMapTile) {
        const owner = this._owner.get();
        if (owner && owner.onDownloadFailed) {
            owner.onDownloadFailed({
                tileId: tile.getTileId(),
                x: tile.getX(),
                y: tile.getY()
            });
        }
    }

    onDownloadProgressThreaded(progress: number) {
        const owner = this._owner.get();
        if (owner && owner.onDownloadProgress) {
            owner.onDownloadProgress(progress);
        }
    }

    onDownloadStartingThreaded(tileCount: number) {
        const owner = this._owner.get();
        if (owner && owner.onDownloadStarting) {
            owner.onDownloadStarting(tileCount);
        }
    }
}
export class PersistentCacheTileDataSource extends TileDataSource<MSFPersistentCacheTileDataSource, PersistentCacheTileDataSourceOptions> {
    createNative(options: PersistentCacheTileDataSourceOptions) {
        if (options.databasePath) {
            return MSFPersistentCacheTileDataSource.alloc().initWithDataSourceDatabasePath(options.dataSource.getNative(), options.databasePath);
        } else {
            return MSFPersistentCacheTileDataSource.alloc().initWithDataSource(options.dataSource.getNative());
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
    startDownloadArea(mapBounds: MapBounds, minZoom: number, maxZoom: number, tileDownloadListener: TileDownloadListener, fetchDelay: number = 0) {
        return new Promise<void>((resolve, reject) => {
            let loaderListener = MSFTileDownloadListenerImpl.initWithOwner(new WeakRef(tileDownloadListener), () => {
                resolve();
                loaderListener = null;
            });
            this.getNative().startDownloadAreaMinZoomMaxZoomFetchDelayTileDownloadListener(toNativeMapBounds(mapBounds), minZoom, maxZoom, fetchDelay, loaderListener);
        });
    }
}

export class MemoryCacheTileDataSource extends TileDataSource<MSFMemoryCacheTileDataSource, MemoryCacheTileDataSourceOptions> {
    createNative(options: MemoryCacheTileDataSourceOptions) {
        return MSFMemoryCacheTileDataSource.alloc().initWithDataSource(options.dataSource.getNative());
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
