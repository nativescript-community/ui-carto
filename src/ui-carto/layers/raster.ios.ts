import { CartoOnlineRasterTileLayerOptions, HillshadeRasterTileLayerOptions, RasterTileEventListener as IRasterTileEventListener, 
    RasterTileFilterMode as IRasterTileFilterMode,
    RasterTileLayerOptions } from './raster';
import { RasterTileLayerBase } from './raster.common';
import { mapPosVectorFromArgs, nativeMapVecProperty, nativeProperty } from '../';
import { Projection } from '../projections';
import { DoubleVector, MapPos, MapPosVector, MapVec, fromNativeMapPos, toNativeMapPos } from '../core';
import { Color } from '@nativescript/core';
import { nativeColorProperty } from '../index.ios';


export const RasterTileFilterMode = {
    get RASTER_TILE_FILTER_MODE_NEAREST() {
        return NTRasterTileFilterMode.T_RASTER_TILE_FILTER_MODE_NEAREST;
    },
    get RASTER_TILE_FILTER_MODE_BILINEAR() {
        return  NTRasterTileFilterMode.T_RASTER_TILE_FILTER_MODE_BILINEAR;
    },
    get RASTER_TILE_FILTER_MODE_BICUBIC() {
        return  NTRasterTileFilterMode.T_RASTER_TILE_FILTER_MODE_BICUBIC;
    }
};


@NativeClass
export class NTRasterTileEventListenerImpl extends AKRasterTileEventListener {
    private _layer: WeakRef<RasterTileLayer>;
    private _owner: WeakRef<IRasterTileEventListener>;
    private projection?: Projection;

    public static initWithOwner(owner: WeakRef<IRasterTileEventListener>, layer: WeakRef<RasterTileLayer>, projection?: Projection): NTRasterTileEventListenerImpl {
        const delegate = NTRasterTileEventListenerImpl.new() as NTRasterTileEventListenerImpl;
        delegate._owner = owner;
        delegate._layer = layer;
        delegate.projection = projection;
        return delegate;
    }
    public onRasterTileClickedThreaded(info: NTRasterTileClickInfo) {
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

export abstract class RasterTileLayerCommon<NativeClass extends NTRasterTileLayer, U extends RasterTileLayerOptions> extends RasterTileLayerBase<NativeClass, U> {
    projection?: Projection;
    clickListener?: IRasterTileEventListener;
    nClickListener?:NTRasterTileEventListener;
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
            this.nClickListener = NTRasterTileEventListenerImpl.initWithOwner(new WeakRef(listener), new WeakRef(this), projection);
            this.getNative().setRasterTileEventListener(this.nClickListener);
        } else {
            this.nClickListener = null;
            this.getNative().setRasterTileEventListener(null);
        }
    }
}

export class RasterTileLayer extends RasterTileLayerCommon<NTRasterTileLayer, RasterTileLayerOptions> {
    createNative(options: RasterTileLayerOptions) {
        return NTRasterTileLayer.alloc().initWithDataSource(options.dataSource.getNative());
    }
}

export class CartoOnlineRasterTileLayer extends RasterTileLayerBase<NTCartoOnlineRasterTileLayer, CartoOnlineRasterTileLayerOptions> {
    createNative(options) {
        return NTCartoOnlineRasterTileLayer.alloc().initWithSource(options.source);
    }
}

export class HillshadeRasterTileLayer extends RasterTileLayerBase<AKHillshadeRasterTileLayer, HillshadeRasterTileLayerOptions> {
    @nativeProperty heightScale: number;
    @nativeProperty contrast: number;
    @nativeProperty exagerateHeightScaleEnabled: boolean;
    @nativeProperty normalMapLightingShader: string;
    @nativeMapVecProperty illuminationDirection: MapVec | [number, number, number];
    @nativeColorProperty highlightColor: string | Color;
    @nativeColorProperty shadowColor: string | Color;
    @nativeColorProperty accentColor: string | Color;
    @nativeProperty tileFilterMode: IRasterTileFilterMode;

    createNative(options) {
        if (options.decoder) {
        return AKHillshadeRasterTileLayer.alloc().initWithDataSourceElevationDecoder(options.dataSource.getNative(), options.decoder.getNative()); 
         } else {
            return AKHillshadeRasterTileLayer.alloc().initWithDataSource(options.dataSource.getNative()); 
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
            (res) => callback(null, res as any)
        );
    }
    public getElevationsAsync(pos: MapPosVector | MapPos[], callback: (error: any, res: DoubleVector) => void) {
        this.getNative().getElevationsCallback(
            mapPosVectorFromArgs(pos),
            (res) => callback(null, res as any)
        );
    }
}
