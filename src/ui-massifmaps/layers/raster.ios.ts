import {
    CustomRasterTileLayerOptions,
    HillshadeRasterTileLayerOptions,
    HillshadeMethod as IHillshadeMethod,
    RasterTileEventListener as IRasterTileEventListener,
    RasterTileFilterMode as IRasterTileFilterMode,
    RasterTileLayerOptions
} from './raster';
import { RasterTileLayerBase } from './raster.common';
import { mapPosVectorFromArgs, nativeMapVecProperty, nativeProperty } from '../';
import { Projection } from '../projections';
import { DoubleVector, MapPos, MapPosVector, MapVec, fromNativeMapPos, toNativeMapPos } from '../core';
import { Color } from '@nativescript/core';
import { nativeColorProperty } from '../index.ios';
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
        return MSFRasterTileFilterMode.F_RASTER_TILE_FILTER_MODE_NEAREST;
    },
    get RASTER_TILE_FILTER_MODE_BILINEAR() {
        return MSFRasterTileFilterMode.F_RASTER_TILE_FILTER_MODE_BILINEAR;
    },
    get RASTER_TILE_FILTER_MODE_BICUBIC() {
        return MSFRasterTileFilterMode.F_RASTER_TILE_FILTER_MODE_BICUBIC;
    }
};

export const HillshadeMethod = {
    get STANDARD() {
        return MSFHillshadeMethod.F_STANDARD;
    },
    get COMBINED() {
        return MSFHillshadeMethod.F_COMBINED;
    },
    get IGOR() {
        return MSFHillshadeMethod.F_IGOR;
    },
    get MULTIDIRECTIONAL() {
        return MSFHillshadeMethod.F_MULTIDIRECTIONAL;
    },
    get BASIC() {
        return MSFHillshadeMethod.F_BASIC;
    }
};

@NativeClass
export class MSFRasterTileEventListenerImpl extends NSMSFRasterTileEventListener {
    private _layer: WeakRef<RasterTileLayer>;
    private _owner: WeakRef<IRasterTileEventListener>;
    private projection?: Projection;

    public static initWithOwner(owner: WeakRef<IRasterTileEventListener>, layer: WeakRef<RasterTileLayer>, projection?: Projection): MSFRasterTileEventListenerImpl {
        const delegate = MSFRasterTileEventListenerImpl.new() as MSFRasterTileEventListenerImpl;
        delegate._owner = owner;
        delegate._layer = layer;
        delegate.projection = projection;
        return delegate;
    }
    public onRasterTileClickedThreaded(info: MSFRasterTileClickInfo) {
        const owner = this._owner.get();
        if (owner && owner.onRasterTileClicked) {
            let position = info.getClickPos();
            if (this.projection) {
                const layerProj = this._layer.get().getNative().getDataSource().getProjection();
                const nProj = this.projection.getNative();
                position = nProj.fromWgs84(layerProj.toWgs84(position));
            }
            return (
                owner.onRasterTileClicked({
                    clickType: info.getClickType() as any,
                    layer: this._layer.get() as any,
                    nearestColor: new Color(info.getNearestColor().getARGB()),
                    interpolatedColor: new Color(info.getInterpolatedColor().getARGB()),
                    position: fromNativeMapPos(position)
                }) || false
            );
        }
        return false;
    }
}

export abstract class RasterTileLayerCommon<NativeClass extends MSFRasterTileLayer, U extends RasterTileLayerOptions> extends RasterTileLayerBase<NativeClass, U> {
    projection?: Projection;
    clickListener?: IRasterTileEventListener;
    nClickListener?: MSFRasterTileEventListener;
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
            this.nClickListener = MSFRasterTileEventListenerImpl.initWithOwner(new WeakRef(listener), new WeakRef(this as any as RasterTileLayer), projection);
            this.getNative().setRasterTileEventListener(this.nClickListener);
        } else {
            this.nClickListener = null;
            this.getNative().setRasterTileEventListener(null);
        }
    }
}

export class RasterTileLayer extends RasterTileLayerCommon<MSFRasterTileLayer, RasterTileLayerOptions> {
    createNative(options: RasterTileLayerOptions) {
        return MSFRasterTileLayer.alloc().initWithDataSource(options.dataSource.getNative());
    }
}

export class CustomRasterTileLayer extends RasterTileLayerCommon<MSFCustomRasterTileLayer, CustomRasterTileLayerOptions> {
    createNative(options: CustomRasterTileLayerOptions) {
        return MSFCustomRasterTileLayer.alloc().initWithDataSource(options.dataSource.getNative());
    }
}

export class HillshadeRasterTileLayer extends RasterTileLayerBase<NSMSFHillshadeRasterTileLayer, HillshadeRasterTileLayerOptions> {
    createNative(options) {
        if (options.decoder) {
            return NSMSFHillshadeRasterTileLayer.alloc().initWithDataSourceElevationDecoder(options.dataSource.getNative(), options.decoder.getNative());
        } else {
            return NSMSFHillshadeRasterTileLayer.alloc().initWithDataSource(options.dataSource.getNative());
        }
    }
    public getElevation(pos: MapPos): number {
        return this.getNative().getElevation(toNativeMapPos(pos));
    }
    public getElevations(pos: MapPosVector | MapPos[]): DoubleVector {
        return new DoubleVector(this.getNative().getElevations(mapPosVectorFromArgs(pos)));
    }

    public getElevationAsync(pos: MapPos, callback: (error: any, res: number) => void) {
        this.getNative().getElevationCallback(toNativeMapPos(pos), (res) => callback(null, res as any));
    }
    public getElevationsAsync(pos: MapPosVector | MapPos[], callback: (error: any, res: DoubleVector) => void) {
        this.getNative().getElevationsCallback(mapPosVectorFromArgs(pos), (res) => callback(null, res as any));
    }
}

export interface RasterTileLayer extends Acc_RasterTileLayer, Omit<Met_RasterTileLayer, 'setRasterTileEventListener'> {}
bindNative(RasterTileLayer, MET_RasterTileLayer, ACC_RasterTileLayer, { selectors: SEL_RasterTileLayer });

export interface RasterTileLayerCommon<NativeClass extends MSFRasterTileLayer, U extends RasterTileLayerOptions>
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
