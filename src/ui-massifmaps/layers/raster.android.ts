import { Color } from '@nativescript/core';
import { mapPosVectorFromArgs, nativeColorProperty, nativeMapVecProperty, nativeProperty } from '../';
import { DoubleVector, MapPos, MapPosVector, MapVec, fromNativeMapPos, toNativeMapPos } from '../core';
import { Projection } from '../projections';
import {
    CustomRasterTileLayerOptions,
    HillshadeRasterTileLayerOptions,
    HillshadeMethod as IHillshadeMethod,
    RasterTileEventListener as IRasterTileEventListener,
    RasterTileFilterMode as IRasterTileFilterMode,
    RasterTileLayerOptions
} from './raster';
import { RasterTileLayerBase } from './raster.common';
import {
    ACCESSORS as ACC_RasterTileLayer,
    Accessors as Acc_RasterTileLayer,
    METHODS as MET_RasterTileLayer,
    Methods as Met_RasterTileLayer,
    SELECTORS as SEL_RasterTileLayer
} from '../bindings/layers/RasterTileLayer';
import { bindNative } from '../nativeclass.common';
import {
    ACCESSORS as ACC_RasterTileLayerCommon,
    Accessors as Acc_RasterTileLayerCommon,
    METHODS as MET_RasterTileLayerCommon,
    Methods as Met_RasterTileLayerCommon,
    SELECTORS as SEL_RasterTileLayerCommon
} from '../bindings/layers/RasterTileLayer';
import {
    ACCESSORS as ACC_HillshadeRasterTileLayer,
    Accessors as Acc_HillshadeRasterTileLayer,
    METHODS as MET_HillshadeRasterTileLayer,
    Methods as Met_HillshadeRasterTileLayer,
    SELECTORS as SEL_HillshadeRasterTileLayer
} from '../bindings/layers/HillshadeRasterTileLayer';
import { colorConverter, mapVecConverter } from '..';
import { ACCESSORS as ACC_CustomRasterTileLayer, Accessors as Acc_CustomRasterTileLayer, METHODS as MET_CustomRasterTileLayer, Methods as Met_CustomRasterTileLayer, SELECTORS as SEL_CustomRasterTileLayer } from '../bindings/layers/CustomRasterTileLayer';

export const RasterTileFilterMode = {
    get RASTER_TILE_FILTER_MODE_NEAREST() {
        return com.massifmaps.layers.RasterTileFilterMode.RASTER_TILE_FILTER_MODE_NEAREST;
    },
    get RASTER_TILE_FILTER_MODE_BILINEAR() {
        return com.massifmaps.layers.RasterTileFilterMode.RASTER_TILE_FILTER_MODE_BILINEAR;
    },
    get RASTER_TILE_FILTER_MODE_BICUBIC() {
        return com.massifmaps.layers.RasterTileFilterMode.RASTER_TILE_FILTER_MODE_BICUBIC;
    }
};

export const HillshadeMethod = {
    get STANDARD() {
        return com.massifmaps.layers.HillshadeMethod.STANDARD;
    },
    get COMBINED() {
        return com.massifmaps.layers.HillshadeMethod.COMBINED;
    },
    get IGOR() {
        return com.massifmaps.layers.HillshadeMethod.IGOR;
    },
    get MULTIDIRECTIONAL() {
        return com.massifmaps.layers.HillshadeMethod.MULTIDIRECTIONAL;
    },
    get BASIC() {
        return com.massifmaps.layers.HillshadeMethod.BASIC;
    }
};

export abstract class RasterTileLayerCommon<NativeClass extends com.massifmaps.layers.RasterTileLayer, U extends RasterTileLayerOptions> extends RasterTileLayerBase<NativeClass, U> {
    projection?: Projection;
    clickListener?: IRasterTileEventListener;
    nClickListener?: com.nativescript.massifmaps.additions.RasterTileEventListener;
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
                this.nClickListener = new com.nativescript.massifmaps.additions.RasterTileEventListener(
                    new com.nativescript.massifmaps.additions.RasterTileEventListener.Listener({
                        onRasterTileClicked: this.onRasterTileClicked.bind(this)
                    })
                );
            }
            this.getNative().setRasterTileEventListener(this.nClickListener);
        } else {
            this.nClickListener = null;
            this.getNative().setRasterTileEventListener(null);
        }
    }
    onRasterTileClicked(info: com.massifmaps.ui.RasterTileClickInfo) {
        if (this.clickListener && this.clickListener.onRasterTileClicked) {
            let position = info.getClickPos();
            if (this.projection) {
                const layerProj = this.getNative().getDataSource().getProjection();
                const nProj = this.projection.getNative();
                position = nProj.fromWgs84(layerProj.toWgs84(position));
            }
            return (
                this.clickListener.onRasterTileClicked.call(this.clickListener, {
                    clickType: info.getClickType(),
                    layer: this,
                    nearestColor: new Color(info.getNearestColor().getARGB()),
                    interpolatedColor: new Color(info.getInterpolatedColor().getARGB()),
                    position: fromNativeMapPos(position)
                }) || false
            );
        }
        return false;
    }
}

export class RasterTileLayer extends RasterTileLayerCommon<com.massifmaps.layers.RasterTileLayer, RasterTileLayerOptions> {
    createNative(options: RasterTileLayerOptions) {
        return new com.massifmaps.layers.RasterTileLayer(options.dataSource.getNative());
    }
}

export class CustomRasterTileLayer extends RasterTileLayerCommon<com.massifmaps.layers.CustomRasterTileLayer, CustomRasterTileLayerOptions> {
    createNative(options: CustomRasterTileLayerOptions) {
        return new com.massifmaps.layers.CustomRasterTileLayer(options.dataSource.getNative());
    }
}

export class HillshadeRasterTileLayer extends RasterTileLayerCommon<com.nativescript.massifmaps.additions.HillshadeRasterTileLayer, HillshadeRasterTileLayerOptions> {
    createNative(options: HillshadeRasterTileLayerOptions) {
        if (options.decoder) {
            return new com.nativescript.massifmaps.additions.HillshadeRasterTileLayer(options.dataSource.getNative(), options.decoder.getNative());
        } else {
            return new com.nativescript.massifmaps.additions.HillshadeRasterTileLayer(options.dataSource.getNative());
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
            new com.nativescript.massifmaps.additions.HillshadeRasterTileLayer.ElevationCallback({
                onElevation(err, res) {
                    callback(err, res as any);
                }
            })
        );
    }
    public getElevationsAsync(pos: MapPosVector | MapPos[], callback: (error: any, res: DoubleVector) => void) {
        this.getNative().getElevationsCallback(
            mapPosVectorFromArgs(pos),
            new com.nativescript.massifmaps.additions.HillshadeRasterTileLayer.ElevationsCallback({
                onElevations(err, res) {
                    callback(err, new DoubleVector(res));
                }
            })
        );
    }
}

export interface RasterTileLayer extends Acc_RasterTileLayer, Omit<Met_RasterTileLayer, 'setRasterTileEventListener'> {}
bindNative(RasterTileLayer, MET_RasterTileLayer, ACC_RasterTileLayer, { selectors: SEL_RasterTileLayer });

export interface RasterTileLayerCommon<NativeClass extends com.massifmaps.layers.RasterTileLayer, U extends RasterTileLayerOptions>
    extends Acc_RasterTileLayer, Omit<Met_RasterTileLayer, 'setRasterTileEventListener'> {}
bindNative(RasterTileLayerCommon, MET_RasterTileLayerCommon, ACC_RasterTileLayerCommon, { selectors: SEL_RasterTileLayerCommon });

export interface HillshadeRasterTileLayer extends Acc_HillshadeRasterTileLayer, Omit<Met_HillshadeRasterTileLayer, 'getElevation' | 'getElevations'> {}
bindNative(HillshadeRasterTileLayer, MET_HillshadeRasterTileLayer, ACC_HillshadeRasterTileLayer, {
    selectors: SEL_HillshadeRasterTileLayer,
    converters: { accentColor: colorConverter, contourColor: colorConverter, highlightColor: colorConverter, illuminationDirection: mapVecConverter, shadowColor: colorConverter }
});

export interface HillshadeRasterTileLayer extends Acc_CustomRasterTileLayer, Met_CustomRasterTileLayer {}
bindNative(HillshadeRasterTileLayer, MET_CustomRasterTileLayer, ACC_CustomRasterTileLayer, { selectors: SEL_CustomRasterTileLayer });

export interface CustomRasterTileLayer extends Acc_CustomRasterTileLayer, Met_CustomRasterTileLayer {}
bindNative(CustomRasterTileLayer, MET_CustomRasterTileLayer, ACC_CustomRasterTileLayer, { selectors: SEL_CustomRasterTileLayer });
