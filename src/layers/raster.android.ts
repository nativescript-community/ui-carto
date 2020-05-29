import { CartoOnlineRasterTileLayerOptions, HillshadeRasterTileLayerOptions, RasterTileFilterMode as IRasterTileFilterMode, RasterTileLayerOptions } from './raster';
import { RasterTileLayerBase } from './raster.common';
import { nativeAndroidEnumProperty, nativeProperty } from '../';


export const RasterTileFilterMode = {
    get RASTER_TILE_FILTER_MODE_NEAREST() {
        return com.carto.layers.RasterTileFilterMode.RASTER_TILE_FILTER_MODE_NEAREST;
    },
    get RASTER_TILE_FILTER_MODE_BILINEAR() {
        return com.carto.layers.RasterTileFilterMode.RASTER_TILE_FILTER_MODE_BILINEAR;
    },
    get RASTER_TILE_FILTER_MODE_BICUBIC() {
        return com.carto.layers.RasterTileFilterMode.RASTER_TILE_FILTER_MODE_BICUBIC;
    },
};

export class RasterTileLayer extends RasterTileLayerBase<com.carto.layers.RasterTileLayer, RasterTileLayerOptions> {
    @nativeAndroidEnumProperty(com.carto.layers.RasterTileFilterMode, {}) tileFilterMode: IRasterTileFilterMode;
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
        console.log('HillshadeRasterTileLayer', options);
        return new com.carto.layers.HillshadeRasterTileLayer(options.dataSource.getNative());
    }
}
