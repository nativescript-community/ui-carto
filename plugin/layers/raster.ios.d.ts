import { CartoOnlineRasterTileLayerOptions, RasterTileEventListener as IRasterTileEventListener, RasterTileLayerOptions } from './raster';
import { RasterTileLayerBase } from './raster.common';
import { Projection } from '../projections';
export declare class NTRasterTileEventListenerImpl extends NTRasterTileEventListener {
    private _layer;
    private _owner;
    private projection?;
    static initWithOwner(owner: WeakRef<IRasterTileEventListener>, layer: WeakRef<RasterTileLayer>, projection?: Projection): NTRasterTileEventListenerImpl;
    onRasterTileClicked(info: NTRasterTileClickInfo): boolean;
}
export declare abstract class RasterTileLayerCommon<NativeClass extends NTRasterTileLayer, U extends RasterTileLayerOptions> extends RasterTileLayerBase<NativeClass, U> {
    setRasterTileEventListener(listener: IRasterTileEventListener, projection?: Projection): void;
}
export declare class RasterTileLayer extends RasterTileLayerCommon<NTRasterTileLayer, RasterTileLayerOptions> {
    createNative(options: RasterTileLayerOptions): NTRasterTileLayer;
    setRasterTileEventListener(listener: IRasterTileEventListener, projection?: Projection): void;
}
export declare class CartoOnlineRasterTileLayer extends RasterTileLayerBase<NTCartoOnlineRasterTileLayer, CartoOnlineRasterTileLayerOptions> {
    createNative(options: any): NTCartoOnlineRasterTileLayer;
}
