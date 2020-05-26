import { TileLayer, TileLayerOptions } from '.';
import { TileDataSource } from '../datasources';

export interface RasterTileLayerOptions extends TileLayerOptions {
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
