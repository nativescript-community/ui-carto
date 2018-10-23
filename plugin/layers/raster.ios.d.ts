import { CartoOnlineRasterTileLayerOptions, RasterTileLayerOptions } from './raster';
import { RasterTileLayerBase } from './raster.common';
export declare class RasterTileLayer extends RasterTileLayerBase<NTRasterTileLayer, RasterTileLayerOptions> {
    createNative(options: RasterTileLayerOptions): NTRasterTileLayer;
}
export declare class CartoOnlineRasterTileLayer extends RasterTileLayerBase<NTCartoOnlineRasterTileLayer, CartoOnlineRasterTileLayerOptions> {
    createNative(options: any): NTCartoOnlineRasterTileLayer;
}
