import { TileLayer, TileLayerOptions } from '.';
import { TileDataSource } from '../datasources';

export enum RasterTileFilterMode {
    RASTER_TILE_FILTER_MODE_NEAREST,
    RASTER_TILE_FILTER_MODE_BILINEAR,
    RASTER_TILE_FILTER_MODE_BICUBIC,
}

export interface RasterTileLayerOptions extends TileLayerOptions {
    tileFilterMode?: RasterTileFilterMode;
    dataSource?: TileDataSource<any, any>;
}
export class RasterTileLayer extends TileLayer<any, RasterTileLayerOptions> {
    dataSource?: TileDataSource<any, any>;
}

export interface CartoOnlineRasterTileLayerOptions extends RasterTileLayerOptions {
    source?: string;
}
export class CartoOnlineRasterTileLayer extends TileLayer<any, CartoOnlineRasterTileLayerOptions> {}

export interface HillshadeRasterTileLayerOptions extends RasterTileLayerOptions {
    heightScale?: number;
    contrast?: number;
}
export class HillshadeRasterTileLayer extends TileLayer<any, HillshadeRasterTileLayerOptions> {
    heightScale?: number;
    contrast?: number;
}
