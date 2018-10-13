import { MemoryCacheTileDataSourceOptions, PersistentCacheTileDataSourceOptions, TileDownloadListener } from './cache';
import { TileDataSource } from './datasource';
import { Bounds, toNativeMapBounds } from '../core/core';

class NTTileDownloadListenerImpl extends NTTileDownloadListener {
    private _owner: WeakRef<TileDownloadListener>;

    public static initWithOwner(owner: WeakRef<TileDownloadListener>): NTTileDownloadListenerImpl {
        const delegate = NTTileDownloadListenerImpl.new() as NTTileDownloadListenerImpl;
        delegate._owner = owner;
        return delegate;
    }
    onDownloadCompleted() {
        const owner = this._owner.get();
        console.log('onDownloadCompleted', owner);
        if (owner && owner.onDownloadCompleted) {
            owner.onDownloadCompleted();
        }
    }

    onDownloadFailed(tile: NTMapTile) {
        const owner = this._owner.get();
        console.log('onDownloadFailed', owner);
        if (owner && owner.onDownloadFailed) {
            owner.onDownloadFailed({
                tileId: tile.getTileId(),
                x: tile.getX(),
                y: tile.getY()
            });
        }
    }

    onDownloadProgress(progress: number) {
        const owner = this._owner.get();
        console.log('onDownloadProgress', owner);
        if (owner && owner.onDownloadProgress) {
            owner.onDownloadProgress(progress);
        }
    }

    onDownloadStarting(tileCount: number) {
        const owner = this._owner.get();
        console.log('onDownloadStarting', owner);
        if (owner && owner.onDownloadStarting) {
            owner.onDownloadProgress(tileCount);
        }
    }
}
export class PersistentCacheTileDataSource extends TileDataSource<NTPersistentCacheTileDataSource, PersistentCacheTileDataSourceOptions> {
    createNative(options: PersistentCacheTileDataSourceOptions) {
        if (options.databasePath) {
            return NTPersistentCacheTileDataSource.alloc().initWithDataSourceDatabasePath((options.dataSource as TileDataSource<any, any>).getNative(), options.databasePath);
        } else {
            return NTPersistentCacheTileDataSource.alloc().initWithDataSource((options.dataSource as TileDataSource<any, any>).getNative());
        }
    }
    close() {
        if (this.native) {
            this.native.close();
        }
    }
    isOpen() {
        return this.native && this.native.isOpen();
    }
    setCacheOnlyMode(value: boolean) {
        return this.getNative().setCacheOnlyMode(value);
    }
    stopAllDownloads() {
        return this.native && this.native.stopAllDownloads();
    }
    startDownloadAreaMinZoomMaxZoomTileDownloadListener(mapBounds: Bounds, minZoom: number, maxZoom: number, tileDownloadListener: TileDownloadListener) {
        this.getNative().startDownloadAreaMinZoomMaxZoomTileDownloadListener(
            toNativeMapBounds(mapBounds),
            minZoom,
            maxZoom,
            NTTileDownloadListenerImpl.initWithOwner(new WeakRef(tileDownloadListener))
        );
    }
}

export class MemoryCacheTileDataSource extends TileDataSource<NTMemoryCacheTileDataSource, MemoryCacheTileDataSourceOptions> {
    createNative(options: MemoryCacheTileDataSourceOptions) {
        return NTMemoryCacheTileDataSource.alloc().initWithDataSource((options.dataSource as TileDataSource<any, any>).getNative());
    }
    get capacity() {
        return this.native ? this.native.getCapacity() : this.options.capacity;
    }
    set capacity(value: number) {
        this.native.setCapacity(value);
    }
}
