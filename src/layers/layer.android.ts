import { BaseLayer } from './layer.common';
import { LayerOptions, TileLayerOptions } from './layer';

export abstract class Layer<T extends com.carto.layers.Layer, U extends LayerOptions> extends BaseLayer<T, U> {
    get opacity() {
        return this.native ? this.native.getOpacity() : this.options.opacity;
    }
    set opacity(opacity: number) {
        this.native && this.native.setOpacity(opacity);
    }
    get updatePriority() {
        return this.native ? this.native.getUpdatePriority() : this.options.updatePriority;
    }
    set updatePriority(value: number) {
        this.native && this.native.setUpdatePriority(value);
    }
    get visible() {
        return this.native ? this.native.isVisible() : this.options.visible;
    }
    set visible(value: boolean) {
        this.native && this.native.setVisible(value);
    }
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
}
export abstract class TileLayer<T extends com.carto.layers.TileLayer, U extends TileLayerOptions> extends Layer<T, U> {}
