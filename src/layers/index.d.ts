import { BaseNative } from '..';
import { DataSource } from '../datasources';
import { Projection } from '../projections';

export interface LayerOptions {
    updatePriority?: number;
    opacity?: number;
    visible?: boolean;
    visibleZoomRange?: [number, number];
}

export class Layer<T, U extends LayerOptions> extends BaseNative<T, U> {
    constructor(options: U);

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
    preloading?: boolean;
    synchronizedRefresh?: boolean;
    zoomLevelBias?: number;
    maxOverzoomLevel?: number;
    maxUnderzoomLevel?: number;
    tileSubstitutionPolicy?:TileSubstitutionPolicy
}
export class TileLayer<T, U extends TileLayerOptions> extends Layer<T, U> {
    constructor(options: U);
    preloading: boolean;
    synchronizedRefresh: boolean;
    zoomLevelBias: number;
    maxOverzoomLevel: number;
    maxUnderzoomLevel: number;
    tileSubstitutionPolicy?:TileSubstitutionPolicy
    clearTileCaches( all: boolean);
    getDataSource(): DataSource<any, any>
    getProjection(): Projection
}
