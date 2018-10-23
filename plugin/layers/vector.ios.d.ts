import { CartoOfflineVectorTileLayerOptions, CartoOnlineVectorTileLayerOptions, ClusteredVectorLayerLayerOptions, VectorLayerOptions, VectorTileLayerOptions } from './vector';
import { Layer, TileLayer } from './layer';
import { MBVectorTileDecoder, VectorTileDecoder } from '../vectortiles/vectortiles';
export declare abstract class BaseVectorTileLayer<T extends NTVectorTileLayer, U extends VectorTileLayerOptions> extends TileLayer<T, U> {
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
