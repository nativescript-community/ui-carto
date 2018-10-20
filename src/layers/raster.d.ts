import { TileLayer, TileLayerOptions } from './layer';
import { TileDataSource } from '../datasources/datasource';

export interface RasterTileLayerOptions extends TileLayerOptions {
    dataSource?: TileDataSource<any, any>;
}
export interface CartoOnlineRasterTileLayerOptions extends RasterTileLayerOptions {
    source?: string;
}
export class RasterTileLayer extends TileLayer<any, RasterTileLayerOptions> {}
export class CartoOnlineRasterTileLayer extends TileLayer<any, CartoOnlineRasterTileLayerOptions> {}
