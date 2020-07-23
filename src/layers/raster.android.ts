import { CartoOnlineRasterTileLayerOptions, HillshadeRasterTileLayerOptions, RasterTileFilterMode as IRasterTileFilterMode, RasterTileLayerOptions } from './raster';
import { RasterTileLayerBase } from './raster.common';
import { mapPosVectorFromArgs, nativeAndroidEnumProperty, nativeColorProperty, nativeProperty } from '../';
import { Color } from '@nativescript/core/color';
import { IntVector, MapPos, MapPosVector, toNativeMapPos } from '../core';

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
    createNative(options: CartoOnlineRasterTileLayerOptions) {
        return new com.carto.layers.CartoOnlineRasterTileLayer(options.source);
    }
}

export class HillshadeRasterTileLayer extends RasterTileLayerBase<com.akylas.carto.additions.AKHillshadeRasterTileLayer, HillshadeRasterTileLayerOptions> {
    @nativeProperty heightScale: number;
    @nativeProperty contrast: number;
    @nativeProperty illuminationDirection: number;
    @nativeColorProperty highlightColor: string | Color;
    createNative(options: HillshadeRasterTileLayerOptions) {
        if (options.decoder) {
            return new com.akylas.carto.additions.AKHillshadeRasterTileLayer(options.dataSource.getNative(), options.decoder.getNative());
        } else {
            return new com.akylas.carto.additions.AKHillshadeRasterTileLayer(options.dataSource.getNative());
        }
    }
    public getElevation(pos: MapPos): number {
        return this.getNative().getElevation(toNativeMapPos(pos));
    }
    public getElevations(pos: MapPosVector | MapPos[]): IntVector {
        return new IntVector(this.getNative().getElevations(mapPosVectorFromArgs(pos)));
    }

    public getElevationAsync(pos: MapPos, callback: (error: any, res: number) => void) {
        this.getNative().getElevationCallback(
            toNativeMapPos(pos),
            new com.akylas.carto.additions.AKHillshadeRasterTileLayer.ElevationCallback({
                onElevation(err, res) {
                    callback(err, res as any);
                },
            })
        );
    }
    public getElevationsAsync(pos: MapPosVector | MapPos[], callback: (error: any, res: IntVector) => void) {
        this.getNative().getElevationsCallback(
            mapPosVectorFromArgs(pos),
            new com.akylas.carto.additions.AKHillshadeRasterTileLayer.ElevationsCallback({
                onElevations(err, res) {
                    callback(err, new IntVector(res));
                },
            })
        );
    }
}
