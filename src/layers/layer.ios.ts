import { BaseLayer } from './layer.common';
import { LayerOptions, TileLayerOptions } from './layer';
import { nativeProperty } from 'nativescript-carto/carto.common';

export abstract class Layer<T extends NTLayer, U extends LayerOptions> extends BaseLayer<T, U> {
    @nativeProperty opacity: number;
    @nativeProperty updatePriority: number;
    @nativeProperty visible: boolean;

    get visibleZoomRange() {
        if (this.native) {
            const zoomRange = this.native.getVisibleZoomRange();
            return [zoomRange.getMin(), zoomRange.getMax()];
        }
        return this.options.visibleZoomRange;
    }
    set visibleZoomRange(value: [number, number]) {
        this.native && this.native.setVisibleZoomRange(NTMapRange.alloc().initWithMinMax(value[0], value[1]));
    }
    refresh() {
        this.native && this.native.refresh();
    }
}
export abstract class TileLayer<T extends NTTileLayer, U extends TileLayerOptions> extends Layer<T, U> {
    set preloading(value: boolean) {
        this.native && this.native.setPreloading(value);
    }
    get preloading() {
        if (this.native) {
            return this.native.isPreloading();
        }
        return this.options.preloading;
    }
}
