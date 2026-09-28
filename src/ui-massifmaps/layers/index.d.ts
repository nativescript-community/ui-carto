import { BaseNative } from '..';
import { DataSource, TileDataSource } from '../datasources';
import { Projection } from '../projections';
import { Accessors as Acc_Layer, Methods as Met_Layer } from '../bindings/layers/Layer';
import { Accessors as Acc_TileLayer, Methods as Met_TileLayer } from '../bindings/layers/TileLayer';

export interface LayerOptions {
    updatePriority?: number;
    opacity?: number;
    visible?: boolean;
    visibleZoomRange?: [number, number];
    minVisibleZoom?: number;
    maxVisibleZoom?: number;
}

export class Layer<T, U extends LayerOptions> extends BaseNative<T, U> {
    constructor(options: U);
    refresh();

    updatePriority: number;
    opacity: number;
    visible: boolean;
    visibleZoomRange: [number, number];
    minVisibleZoom?: number;
    maxVisibleZoom?: number;
}
export enum TileSubstitutionPolicy {
    TILE_SUBSTITUTION_POLICY_ALL,
    TILE_SUBSTITUTION_POLICY_VISIBLE,
    TILE_SUBSTITUTION_POLICY_NONE
}
export interface TileLayerOptions extends LayerOptions {
    /** Also loads tiles adjacent to the visible ones; costs CPU and network traffic. Default false. */
    preloading?: boolean;
    /** Shows all visible tiles together once all are loaded, rather than one by one (for animated tiles). */
    synchronizedRefresh?: boolean;
    /** Higher bias uses more detailed tiles for a given view. Default 0. */
    zoomLevelBias?: number;
    /** A missing tile at zoom Z falls back to Z-1 ... Z-maxOverzoomLevel. Default 6. */
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

export interface Layer<T, U extends LayerOptions> extends Omit<Acc_Layer, 'opacity' | 'updatePriority' | 'visible' | 'visibleZoomRange'>, Omit<Met_Layer, 'refresh'> {}

export interface TileLayer<T, U extends TileLayerOptions>
    extends Omit<Acc_TileLayer, 'maxOverzoomLevel' | 'maxUnderzoomLevel' | 'preloading' | 'synchronizedRefresh' | 'tileSubstitutionPolicy' | 'zoomLevelBias'>,
        Omit<Met_TileLayer, 'clearTileCaches'> {}
