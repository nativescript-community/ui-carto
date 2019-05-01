import { BaseNative } from '../carto';
import { DataSource } from '../datasources/datasource';
import { Projection } from '../projections/projection';

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
export interface TileLayerOptions extends LayerOptions {
    preloading?: boolean;
    synchronizedRefresh?: boolean;
    zoomLevelBias?: number;
    maxOverzoomLevel?: number;
    maxUnderzoomLevel?: number;
}
export class TileLayer<T, U extends TileLayerOptions> extends Layer<T, U> {
    constructor(options: U);
    preloading: boolean;
    synchronizedRefresh: boolean;
    zoomLevelBias: number;
    maxOverzoomLevel: number;
    maxUnderzoomLevel: number;
    clearTileCaches( all: boolean);
    getDataSource(): DataSource<any, any>
    getProjection(): Projection
}
