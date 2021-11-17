import {
    CartoOnlineRasterTileLayerOptions,
    HillshadeRasterTileLayerOptions,
    RasterTileEventListener as IRasterTileEventListener,
    RasterTileFilterMode as IRasterTileFilterMode,
    RasterTileLayerOptions,
} from './raster';
import { RasterTileLayerBase } from './raster.common';
import { mapPosVectorFromArgs, nativeAndroidEnumProperty, nativeColorProperty, nativeMapVecProperty, nativeProperty } from '../';
import { Color } from '@nativescript/core/color';
import { DoubleVector, IntVector, MapPos, MapPosVector, MapVec, fromNativeMapPos, toNativeMapPos } from '../core';
import { Projection } from '../projections';

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

export abstract class RasterTileLayerCommon<NativeClass extends com.carto.layers.RasterTileLayer, U extends RasterTileLayerOptions> extends RasterTileLayerBase<NativeClass, U> {
    projection?: Projection;
    clickListener?: IRasterTileEventListener;
    nClickListener?: com.akylas.carto.additions.AKRasterTileEventListener;
    constructor(options) {
        super(options);
        for (const property of ['elementListener', 'nElementListener']) {
            const descriptor = Object.getOwnPropertyDescriptor(RasterTileLayer.prototype, property);
            if (descriptor) {
                descriptor.enumerable = false;
            }
        }
    }
    setRasterTileEventListener(listener: IRasterTileEventListener, projection?: Projection) {
        this.clickListener = listener;
        this.projection = projection;
        if (listener) {
            if (!this.nClickListener) {
                this.nClickListener = new com.akylas.carto.additions.AKRasterTileEventListener(
                    new com.akylas.carto.additions.AKRasterTileEventListener.Listener({
                        onRasterTileClicked: this.onRasterTileClicked.bind(this),
                    })
                );
            }
            this.getNative().setRasterTileEventListener(this.nClickListener);
        } else {
            this.nClickListener = null;
            this.getNative().setRasterTileEventListener(null);
        }
    }
    onRasterTileClicked(info: com.carto.ui.RasterTileClickInfo) {
        if (this.clickListener && this.clickListener.onRasterTileClicked) {
            let position = info.getClickPos();
            if (this.projection) {
                const layerProj = this.getNative().getDataSource().getProjection();
                const nProj = this.projection.getNative();
                position = nProj.fromWgs84(layerProj.toWgs84(position));
            }
            return (
                this.clickListener.onRasterTileClicked.call(this.clickListener, {
                    clickType: info.getClickType().swigValue(),
                    layer: this,
                    nearestColor: new Color(info.getNearestColor().getARGB()),
                    interpolatedColor: new Color(info.getInterpolatedColor().getARGB()),
                    position: fromNativeMapPos(position),
                }) || false
            );
        }
        return false;
    }
}

export class RasterTileLayer extends RasterTileLayerCommon<com.carto.layers.RasterTileLayer, RasterTileLayerOptions> {
    @nativeProperty tileFilterMode: IRasterTileFilterMode;
    createNative(options: RasterTileLayerOptions) {
        return new com.carto.layers.RasterTileLayer(options.dataSource.getNative());
    }
}

export class CartoOnlineRasterTileLayer extends RasterTileLayerBase<com.carto.layers.CartoOnlineRasterTileLayer, CartoOnlineRasterTileLayerOptions> {
    createNative(options: CartoOnlineRasterTileLayerOptions) {
        return new com.carto.layers.CartoOnlineRasterTileLayer(options.source);
    }
}

export class HillshadeRasterTileLayer extends RasterTileLayerCommon<com.akylas.carto.additions.AKHillshadeRasterTileLayer, HillshadeRasterTileLayerOptions> {
    @nativeProperty heightScale: number;
    @nativeProperty contrast: number;
    @nativeProperty exagerateHeightScaleEnabled: boolean;
    @nativeProperty normalMapLightingShader: string;
    @nativeMapVecProperty illuminationDirection: MapVec | [number, number, number];
    @nativeColorProperty highlightColor: string | Color;
    @nativeColorProperty shadowColor: string | Color;
    @nativeColorProperty accentColor: string | Color;
    @nativeProperty tileFilterMode: IRasterTileFilterMode;
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
    public getElevations(pos: MapPosVector | MapPos[]): DoubleVector {
        return new DoubleVector(this.getNative().getElevations(mapPosVectorFromArgs(pos)));
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
    public getElevationsAsync(pos: MapPosVector | MapPos[], callback: (error: any, res: DoubleVector) => void) {
        this.getNative().getElevationsCallback(
            mapPosVectorFromArgs(pos),
            new com.akylas.carto.additions.AKHillshadeRasterTileLayer.ElevationsCallback({
                onElevations(err, res) {
                    callback(err, new DoubleVector(res));
                },
            })
        );
    }
}
