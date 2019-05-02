import { BaseLayer } from './layer.common';
import { LayerOptions, TileLayerOptions } from './layer';
import { nativeProperty } from '../carto.common';
import { TileDataSource } from '../datasources/datasource';
import { Projection } from '../projections/projection';

export abstract class Layer<T extends NTLayer, U extends LayerOptions> extends BaseLayer<T, U> {
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
    getDataSource() {
        if (this['datasource']) {
            return this['datasource'];
        }
        return new TileDataSource<any, any>(undefined, this.getNative().getDataSource());
    }
    getProjection() {
        if (this['projection']) {
            return this['projection'];
        }
        return new Projection(undefined, this.getNative().getDataSource().getProjection());
    }
}
