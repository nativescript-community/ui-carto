import { CartoOnlineRasterTileLayerOptions, RasterTileLayerOptions } from './raster';
import { RasterTileLayerBase } from './raster.common';
export declare class RasterTileLayer extends RasterTileLayerBase<com.carto.layers.RasterTileLayer, RasterTileLayerOptions> {
    createNative(options: RasterTileLayerOptions): com.carto.layers.RasterTileLayer;
}
export declare class CartoOnlineRasterTileLayer extends RasterTileLayerBase<com.carto.layers.CartoOnlineRasterTileLayer, CartoOnlineRasterTileLayerOptions> {
    createNative(options: any): com.carto.layers.CartoOnlineRasterTileLayer;
}
