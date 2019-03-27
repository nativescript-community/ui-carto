import { BaseLayer } from './layer.common';
import { LayerOptions, TileLayerOptions } from './layer';
import { nativeProperty } from 'nativescript-carto/carto.common';

export abstract class Layer<T extends com.carto.layers.Layer, U extends LayerOptions> extends BaseLayer<T, U> {
    get visibleZoomRange() {
        if (this.native) {
            const zoomRange = this.native.getVisibleZoomRange();
            return [zoomRange.getMin(), zoomRange.getMax()];
        }
        return this.options.visibleZoomRange;
    }
    set visibleZoomRange(value: [number, number]) {
        this.native && this.native.setVisibleZoomRange(new com.carto.core.MapRange(value[0], value[1]));
    }
    refresh() {
        this.native && this.native.refresh();
    }
}
export abstract class TileLayer<T extends com.carto.layers.TileLayer, U extends TileLayerOptions> extends Layer<T, U> {
    @nativeProperty preloading: boolean;
    @nativeProperty synchronizedRefresh: boolean;
    @nativeProperty zoomLevelBias: number;
    @nativeProperty maxOverzoomLevel: number;
    @nativeProperty maxUnderzoomLevel: number;

    clearTileCaches( all: boolean) {
        if (this.native) {
            this.native.clearTileCaches( all);
        }
    }
}
