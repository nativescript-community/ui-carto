import { MemoryCacheTileDataSourceOptions, PersistentCacheTileDataSourceOptions, TileDownloadListener } from './cache';
import { TileDataSource } from './datasource';
import { MapBounds, toNativeMapBounds } from '../core/core';
import { nativeProperty } from '../carto.common';

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
    startDownloadAreaMinZoomMaxZoomTileDownloadListener(mapBounds: MapBounds, minZoom: number, maxZoom: number, tileDownloadListener: TileDownloadListener) {
        this.getNative().startDownloadArea(toNativeMapBounds(mapBounds), minZoom, maxZoom, TileDownloadListenerImpl.initWithOwner(new WeakRef(tileDownloadListener)));
    }
}

class TileDownloadListenerImpl extends com.carto.datasources.TileDownloadListener {
    private _owner: WeakRef<TileDownloadListener>;

    public static initWithOwner(owner: WeakRef<TileDownloadListener>): TileDownloadListenerImpl {
        const delegate = new TileDownloadListenerImpl();
        delegate._owner = owner;
        return delegate;
    }
    onDownloadCompleted() {
        const owner = this._owner.get();
        if (owner && owner.onDownloadCompleted) {
            owner.onDownloadCompleted();
        }
    }

    onDownloadFailed(tile: com.carto.core.MapTile) {
        const owner = this._owner.get();
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
        if (owner && owner.onDownloadProgress) {
            owner.onDownloadProgress(progress);
        }
    }

    onDownloadStarting(tileCount: number) {
        const owner = this._owner.get();
        if (owner && owner.onDownloadStarting) {
            owner.onDownloadProgress(tileCount);
        }
    }
}

export class MemoryCacheTileDataSource extends TileDataSource<com.carto.datasources.MemoryCacheTileDataSource, MemoryCacheTileDataSourceOptions> {
    @nativeProperty capacity: number;
    createNative(options: MemoryCacheTileDataSourceOptions) {
        return new com.carto.datasources.MemoryCacheTileDataSource(options.dataSource.getNative());
    }
}
