import { BaseNative } from '../carto';

export interface LayerOptions {
    updatePriority?: number;
    opacity?: number;
    visible?: boolean;
    visibleZoomRange?: [number, number];
}
export interface TileLayerOptions extends LayerOptions {}

export class Layer<T, U extends LayerOptions> extends BaseNative<T, U> {
    constructor(options: U);

    updatePriority: number;
    opacity: number;
    visible: boolean;
    visibleZoomRange: [number, number];
}
export class TileLayer<T, U extends TileLayerOptions> extends Layer<T, U> {
    constructor(options: U);
}
