import { CartoOfflineVectorTileLayerOptions, CartoOnlineVectorTileLayerOptions, ClusteredVectorLayerLayerOptions, VectorElementEventListener as IVectorElementEventListener, VectorLayerOptions, VectorTileEventListener as IVectorTileEventListener, VectorTileLayerOptions } from './vector';
import { Layer, TileLayer } from './layer';
import { MBVectorTileDecoder, VectorTileDecoder } from '../vectortiles/vectortiles';
import { Projection } from '../projections/projection';
export declare class VectorElementEventListener extends NTVectorElementEventListener {
    private _layer;
    private _owner;
    private projection?;
    static initWithOwner(owner: WeakRef<IVectorElementEventListener>, layer: any, projection?: Projection): VectorElementEventListener;
    onClicked(info: com.carto.ui.VectorElementClickInfo): any;
}
export declare class VectorTileEventListener extends NTVectorTileEventListener {
    private _layer;
    private _owner;
    private projection?;
    static initWithOwner(owner: WeakRef<IVectorTileEventListener>, layer: any, projection?: Projection): VectorTileEventListener;
    onClicked(info: com.carto.ui.VectorTileClickInfo): any;
}
export declare abstract class BaseVectorTileLayer<T extends NTVectorTileLayer, U extends VectorTileLayerOptions> extends TileLayer<T, U> {
    setVectorTileEventListener(listener: IVectorTileEventListener, projection?: Projection): void;
    getTileDecoder(): VectorTileDecoder | MBVectorTileDecoder;
}
export declare class CartoOnlineVectorTileLayer extends BaseVectorTileLayer<NTCartoOnlineVectorTileLayer, CartoOnlineVectorTileLayerOptions> {
    createNative(options: CartoOnlineVectorTileLayerOptions): NTCartoOnlineVectorTileLayer;
}
export declare class CartoOfflineVectorTileLayer extends BaseVectorTileLayer<NTCartoOfflineVectorTileLayer, CartoOfflineVectorTileLayerOptions> {
    createNative(options: CartoOfflineVectorTileLayerOptions): NTCartoOfflineVectorTileLayer;
}
export declare class VectorTileLayer extends TileLayer<NTVectorTileLayer, VectorTileLayerOptions> {
    createNative(options: VectorTileLayerOptions): NTVectorTileLayer;
}
export declare abstract class BaseVectorLayer<T extends NTVectorLayer, U extends VectorLayerOptions> extends Layer<T, U> {
}
export declare class VectorLayer extends BaseVectorLayer<NTVectorLayer, VectorLayerOptions> {
    createNative(options: VectorLayerOptions): NTVectorLayer;
}
export declare class EditableVectorLayer extends BaseVectorLayer<NTEditableVectorLayer, VectorLayerOptions> {
    createNative(options: VectorLayerOptions): NTEditableVectorLayer;
    setSelectedVectorElement(element: any): void;
}
export declare class ClusteredVectorLayer extends BaseVectorLayer<NTClusteredVectorLayer, ClusteredVectorLayerLayerOptions> {
    createNative(options: VectorLayerOptions): NTClusteredVectorLayer;
    minimumClusterDistance: number;
    maximumClusterZoom: number;
    animatedClusters: boolean;
}
