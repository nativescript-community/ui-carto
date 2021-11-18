import { BaseNative } from '..';
import { DataSource, TileDataSource } from '../datasources';
import { Projection } from '../projections';

export interface LayerOptions {
    updatePriority?: number;
    opacity?: number;
    visible?: boolean;
    visibleZoomRange?: [number, number];
}

export class Layer<T, U extends LayerOptions> extends BaseNative<T, U> {
    constructor(options: U);
    refresh();

    updatePriority: number;
    opacity: number;
    visible: boolean;
    visibleZoomRange: [number, number];
}
export enum TileSubstitutionPolicy {
    TILE_SUBSTITUTION_POLICY_ALL,
    TILE_SUBSTITUTION_POLICY_VISIBLE,
    TILE_SUBSTITUTION_POLICY_NONE
}
export interface TileLayerOptions extends LayerOptions {
    /**
     *Sets the state of preloading for this layer. Preloading allows the downloading of tiles that are not
     *currently visible on screen, but are adjacent to ones that are. This means that the user can pan the map without
     *immediately noticing any missing tiles.
     *Enabling this option might introduce a small performance hit on slower devices. It should also be noted that this
     *will considerably increase network traffic if used with online maps. The default is false.
     */
    preloading?: boolean;
    /**
     *Sets the state of the synchronized refresh flag. If disabled all tiles will appear on screen
     *one by one as they finish loading. If enabled the map will wait for all the visible tiles to finish loading
     *and then show them all on screen together. This is useful for animated tiles.
     */
    synchronizedRefresh?: boolean;
    /**
     * Sets the zoom level bias for this layer.
     *Higher zoom level bias forces SDK to use more detailed tiles for given view compared to lower zoom bias.
     *The default bias is 0.
     */
    zoomLevelBias?: number;
    /**
     * Sets the maximum overzoom level for this layer.
     *If a tile for the given zoom level Z is not available, SDK will try to use tiles with zoom levels Z-1, ..., Z-MaxOverzoomLevel.
     *The default is 6.
     */
    maxOverzoomLevel?: number;
    maxUnderzoomLevel?: number;
    tileSubstitutionPolicy?: TileSubstitutionPolicy;
    dataSource?: TileDataSource<any, any>;
}
export class TileLayer<T, U extends TileLayerOptions> extends Layer<T, U> {
    constructor(options: U);
    preloading: boolean;
    synchronizedRefresh: boolean;
    zoomLevelBias: number;
    maxOverzoomLevel: number;
    maxUnderzoomLevel: number;
    tileSubstitutionPolicy?: TileSubstitutionPolicy;
    dataSource: TileDataSource<any, any>;
    clearTileCaches(all: boolean);
    readonly dataSource: TileDataSource<any, any>;
    projection?: Projection;
}
