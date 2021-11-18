import { CartoOnlineRasterTileLayerOptions, HillshadeRasterTileLayerOptions, RasterTileEventListener as IRasterTileEventListener, RasterTileLayerOptions } from './raster';
import { RasterTileLayerBase } from './raster.common';
import { nativeProperty } from '../';
import { Projection } from '../projections';
import { fromNativeMapPos } from '../core';
import { Color } from '@nativescript/core';
import { nativeColorProperty } from '../index.ios';

@NativeClass
export class NTRasterTileEventListenerImpl extends NTRasterTileEventListener {
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
    public onRasterTileClicked(info: NTRasterTileClickInfo) {
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
    setRasterTileEventListener(listener: IRasterTileEventListener, projection?: Projection) {
        if (listener) {
            this.getNative().setRasterTileEventListener(NTRasterTileEventListenerImpl.initWithOwner(new WeakRef(listener), new WeakRef(this), projection));
        } else {
            this.getNative().setRasterTileEventListener(null);
        }
    }
}

export class RasterTileLayer extends RasterTileLayerCommon<NTRasterTileLayer, RasterTileLayerOptions> {
    createNative(options: RasterTileLayerOptions) {
        return NTRasterTileLayer.alloc().initWithDataSource(options.dataSource.getNative());
    }
    setRasterTileEventListener(listener: IRasterTileEventListener, projection?: Projection) {
        if (listener) {
            this.getNative().setRasterTileEventListener(NTRasterTileEventListenerImpl.initWithOwner(new WeakRef(listener), new WeakRef(this), projection));
        } else {
            this.getNative().setRasterTileEventListener(null);
        }
    }
}

export class CartoOnlineRasterTileLayer extends RasterTileLayerBase<NTCartoOnlineRasterTileLayer, CartoOnlineRasterTileLayerOptions> {
    createNative(options) {
        return NTCartoOnlineRasterTileLayer.alloc().initWithSource(options.source);
    }
}

export class HillshadeRasterTileLayer extends RasterTileLayerBase<NTHillshadeRasterTileLayer, HillshadeRasterTileLayerOptions> {
    @nativeProperty heightScale: number;
    @nativeProperty contrast: number;
    @nativeProperty illuminationDirection: number;
    @nativeColorProperty highlightColor: string | Color;
    createNative(options) {
        return new NTHillshadeRasterTileLayer(options.dataSource.getNative());
    }
}
