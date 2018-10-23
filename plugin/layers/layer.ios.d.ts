import { BaseLayer } from './layer.common';
import { LayerOptions, TileLayerOptions } from './layer';
export declare abstract class Layer<T extends NTLayer, U extends LayerOptions> extends BaseLayer<T, U> {
    opacity: number;
    updatePriority: number;
    visible: boolean;
    visibleZoomRange: [number, number];
}
export declare abstract class TileLayer<T extends NTTileLayer, U extends TileLayerOptions> extends Layer<T, U> {
    preloading: boolean;
}
