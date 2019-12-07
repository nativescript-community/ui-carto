import { TileLayer, TileLayerOptions } from '.';
import { TileDataSource } from '../datasources';

export interface RasterTileLayerOptions extends TileLayerOptions {
    dataSource?: TileDataSource<any, any>;
}
export interface CartoOnlineRasterTileLayerOptions extends RasterTileLayerOptions {
    source?: string;
}
export class RasterTileLayer extends TileLayer<any, RasterTileLayerOptions> {
    dataSource?: TileDataSource<any, any>;
}
export class CartoOnlineRasterTileLayer extends TileLayer<any, CartoOnlineRasterTileLayerOptions> {}
