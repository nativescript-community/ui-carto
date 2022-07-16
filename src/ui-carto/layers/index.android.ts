import { nativeAndroidEnumProperty, nativeProperty } from '..';
import { TileDataSource } from '../datasources';
import { Projection } from '../projections';
import { LayerOptions, TileLayerOptions } from '.';
import { BaseLayer } from './index.common';

export const TileSubstitutionPolicy = {
    get TILE_SUBSTITUTION_POLICY_ALL() {
        return com.carto.layers.TileSubstitutionPolicy.TILE_SUBSTITUTION_POLICY_ALL;
    },
    get TILE_SUBSTITUTION_POLICY_VISIBLE() {
        return com.carto.layers.TileSubstitutionPolicy.TILE_SUBSTITUTION_POLICY_VISIBLE;
    },
    get TILE_SUBSTITUTION_POLICY_NONE() {
        return com.carto.layers.TileSubstitutionPolicy.TILE_SUBSTITUTION_POLICY_NONE;
    }
};

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
    get minVisibleZoom() {
        if (this.native) {
            const zoomRange = this.native.getVisibleZoomRange();
            return zoomRange.getMin();
        }
        return this.options.visibleZoomRange?.[0];
    }
    set minVisibleZoom(value: number) {
        if (this.native) {
            const zoomRange = this.native.getVisibleZoomRange();
            this.native.setVisibleZoomRange(new com.carto.core.MapRange(value, zoomRange.getMax()));
        }
    }
    get maxVisibleZoom() {
        if (this.native) {
            const zoomRange = this.native.getVisibleZoomRange();
            return zoomRange.getMax();
        }
        return this.options.visibleZoomRange?.[1];
    }
    set maxVisibleZoom(value: number) {
        if (this.native) {
            const zoomRange = this.native.getVisibleZoomRange();
            this.native.setVisibleZoomRange(new com.carto.core.MapRange(zoomRange.getMin(), value));
        }
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
    @nativeProperty tileSubstitutionPolicy;

    clearTileCaches(all: boolean) {
        if (this.native) {
            this.native.clearTileCaches(all);
        }
    }

    get dataSource() {
        if (this.options.dataSource) {
            return this.options.dataSource;
        }
        return new TileDataSource<any, any>(undefined, this.getNative().getDataSource());
    }
    set dataSource(value) {
        // no op cant change!
    }

    get projection() {
        if (this.options['projection']) {
            return this.options['projection'];
        }
        return new Projection(undefined, this.getNative().getDataSource().getProjection());
    }
}
