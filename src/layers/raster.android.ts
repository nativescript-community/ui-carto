import { CartoOnlineRasterTileLayerOptions, RasterTileLayerOptions } from './raster';
import { RasterTileLayerBase } from './raster.common';

export class RasterTileLayer extends RasterTileLayerBase<com.carto.layers.RasterTileLayer, RasterTileLayerOptions> {
    createNative(options: RasterTileLayerOptions) {
        return new com.carto.layers.RasterTileLayer(options.dataSource.getNative());
    }
}

export class CartoOnlineRasterTileLayer extends RasterTileLayerBase<com.carto.layers.CartoOnlineRasterTileLayer, CartoOnlineRasterTileLayerOptions> {
    createNative(options) {
        return new com.carto.layers.CartoOnlineRasterTileLayer(options.source);
    }
}
