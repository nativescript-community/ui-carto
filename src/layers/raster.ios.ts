import { CartoOnlineRasterTileLayerOptions, RasterTileLayerOptions } from './raster';
import { RasterTileLayerBase } from './raster.common';

export class RasterTileLayer extends RasterTileLayerBase<NTRasterTileLayer, RasterTileLayerOptions> {
    createNative(options: RasterTileLayerOptions) {
        return NTRasterTileLayer.alloc().initWithDataSource(options.dataSource.getNative());
    }
}

export class CartoOnlineRasterTileLayer extends RasterTileLayerBase<NTCartoOnlineRasterTileLayer, CartoOnlineRasterTileLayerOptions> {
    createNative(options) {
        return NTCartoOnlineRasterTileLayer.alloc().initWithSource(options.source);
    }
}
