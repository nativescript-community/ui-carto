import { BaseLayer } from './index.common';
import { LayerOptions, TileLayerOptions } from '.';
import { nativeProperty } from '..';
import { TileDataSource } from '../datasources';
import { Projection } from '../projections';
import { ACCESSORS as ACC_Layer, Accessors as Acc_Layer, METHODS as MET_Layer, Methods as Met_Layer, SELECTORS as SEL_Layer } from '../bindings/layers/Layer';
import { bindNative } from '../nativeclass.common';
import { mapRangeConverter } from '..';
import { ACCESSORS as ACC_TileLayer, Accessors as Acc_TileLayer, METHODS as MET_TileLayer, Methods as Met_TileLayer, SELECTORS as SEL_TileLayer } from '../bindings/layers/TileLayer';

export enum TileSubstitutionPolicy {
    TILE_SUBSTITUTION_POLICY_ALL = MSFTileSubstitutionPolicy.F_TILE_SUBSTITUTION_POLICY_ALL,
    TILE_SUBSTITUTION_POLICY_VISIBLE = MSFTileSubstitutionPolicy.F_TILE_SUBSTITUTION_POLICY_VISIBLE,
    TILE_SUBSTITUTION_POLICY_NONE = MSFTileSubstitutionPolicy.F_TILE_SUBSTITUTION_POLICY_NONE
}
export abstract class Layer<T extends MSFLayer, U extends LayerOptions> extends BaseLayer<T, U> {
    get visibleZoomRange() {
        if (this.native) {
            const zoomRange = this.native.getVisibleZoomRange();
            return [zoomRange.getMin(), zoomRange.getMax()];
        }
        return this.options.visibleZoomRange;
    }
    set visibleZoomRange(value: [number, number]) {
        this.native && this.native.setVisibleZoomRange(MSFMapRange.alloc().initWithMinMax(value[0], value[1]));
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
            this.native.setVisibleZoomRange(MSFMapRange.alloc().initWithMinMax(value, zoomRange.getMax()));
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
            this.native.setVisibleZoomRange(MSFMapRange.alloc().initWithMinMax(zoomRange.getMin(), value));
        }
    }
    refresh() {
        this.native && this.native.refresh();
    }
}
export abstract class TileLayer<T extends MSFTileLayer, U extends TileLayerOptions> extends Layer<T, U> {
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
    clearTileCaches(all: boolean) {
        if (this.native) {
            this.native.clearTileCaches(all);
        }
    }
}

export interface Layer<T extends MSFLayer, U extends LayerOptions> extends Omit<Acc_Layer, 'visibleZoomRange'>, Omit<Met_Layer, 'refresh'> {}
bindNative(Layer, MET_Layer, ACC_Layer, { selectors: SEL_Layer, converters: { visibleZoomRange: mapRangeConverter } });

export interface TileLayer<T extends MSFTileLayer, U extends TileLayerOptions> extends Acc_TileLayer, Omit<Met_TileLayer, 'clearTileCaches'> {}
bindNative(TileLayer, MET_TileLayer, ACC_TileLayer, { selectors: SEL_TileLayer });
