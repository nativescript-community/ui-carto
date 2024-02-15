import { MemoryCacheTileDataSourceOptions, PersistentCacheTileDataSourceOptions, TileDownloadListener } from './cache';
import { TileDataSource } from '.';
import { MapBounds, toNativeMapBounds } from '../core';
import { nativeProperty } from '..';

@NativeClass
class NTTileDownloadListenerImpl extends AKTileDownloadListener {
    private _owner: WeakRef<TileDownloadListener>;
    private mOnComplete;
    public static initWithOwner(owner: WeakRef<TileDownloadListener>, onComplete): NTTileDownloadListenerImpl {
        const delegate = NTTileDownloadListenerImpl.new() as NTTileDownloadListenerImpl;
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

    onDownloadFailedThreaded(tile: NTMapTile) {
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
export class PersistentCacheTileDataSource extends TileDataSource<NTPersistentCacheTileDataSource, PersistentCacheTileDataSourceOptions> {
    @nativeProperty capacity: number;
    @nativeProperty cacheOnlyMode: number;
    createNative(options: PersistentCacheTileDataSourceOptions) {
        if (options.databasePath) {
            return NTPersistentCacheTileDataSource.alloc().initWithDataSourceDatabasePath(options.dataSource.getNative(), options.databasePath);
        } else {
            return NTPersistentCacheTileDataSource.alloc().initWithDataSource(options.dataSource.getNative());
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
    startDownloadArea(mapBounds: MapBounds, minZoom: number, maxZoom: number, tileDownloadListener: TileDownloadListener) {
        return new Promise<void>((resolve,reject)=>{
            let loaderListener = NTTileDownloadListenerImpl.initWithOwner(new WeakRef(tileDownloadListener), ()=>{
                resolve();
                loaderListener = null;
            })
            this.getNative().startDownloadAreaMinZoomMaxZoomTileDownloadListener(
                toNativeMapBounds(mapBounds),
                minZoom,
                maxZoom,
                loaderListener
            );
        })
    }
}

export class MemoryCacheTileDataSource extends TileDataSource<NTMemoryCacheTileDataSource, MemoryCacheTileDataSourceOptions> {
    @nativeProperty capacity: number;
    createNative(options: MemoryCacheTileDataSourceOptions) {
        return NTMemoryCacheTileDataSource.alloc().initWithDataSource(options.dataSource.getNative());
    }
}
