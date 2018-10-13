import { MemoryCacheTileDataSourceOptions, PersistentCacheTileDataSourceOptions, TileDownloadListener } from './cache';
import { TileDataSource } from './datasource';
import { Bounds, toNativeMapBounds } from '../core/core';

export class PersistentCacheTileDataSource extends TileDataSource<com.carto.datasources.PersistentCacheTileDataSource, PersistentCacheTileDataSourceOptions> {
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
        this.getNative().startDownloadArea(toNativeMapBounds(mapBounds), minZoom, maxZoom, TileDownloadListenerImpl.initWithOwner(new WeakRef(tileDownloadListener)));
    }
}

class TileDownloadListenerImpl extends com.carto.datasources.TileDownloadListener {
    private _owner: WeakRef<TileDownloadListener>;

    public static initWithOwner(owner: WeakRef<TileDownloadListener>): TileDownloadListenerImpl {
        const delegate = new TileDownloadListenerImpl() as TileDownloadListenerImpl;
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

    onDownloadFailed(tile: com.carto.core.MapTile) {
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

export class MemoryCacheTileDataSource extends TileDataSource<com.carto.datasources.MemoryCacheTileDataSource, MemoryCacheTileDataSourceOptions> {
    createNative(options: MemoryCacheTileDataSourceOptions) {
        return new com.carto.datasources.MemoryCacheTileDataSource(options.dataSource.getNative());
    }
    get capacity() {
        return this.native ? this.native.getCapacity() : this.options.capacity;
    }
    set capacity(value: number) {
        this.native.setCapacity(value);
    }
}
