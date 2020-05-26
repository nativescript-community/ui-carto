import { CartoOnlineRasterTileLayerOptions, HillshadeRasterTileLayerOptions, RasterTileLayerOptions } from './raster';
import { RasterTileLayerBase } from './raster.common';
import { nativeProperty } from 'nativescript-carto';

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

export class HillshadeRasterTileLayer extends RasterTileLayerBase<com.carto.layers.RasterTileLayer, HillshadeRasterTileLayerOptions> {
    @nativeProperty heightScale: number;
    @nativeProperty contrast: number;
    createNative(options) {
        return new (com.carto.layers as any).HillshadeRasterTileLayer(options.dataSource.getNative());
    }
}
