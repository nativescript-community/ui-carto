import { BaseLayer } from './index.common';
import { LayerOptions, TileLayerOptions } from '.';
import { nativeProperty } from '..';
import { TileDataSource } from '../datasources';
import { Projection } from '../projections';



export enum TileSubstitutionPolicy {
    TILE_SUBSTITUTION_POLICY_ALL = NTTileSubstitutionPolicy.T_TILE_SUBSTITUTION_POLICY_ALL,
    TILE_SUBSTITUTION_POLICY_VISIBLE = NTTileSubstitutionPolicy.T_TILE_SUBSTITUTION_POLICY_VISIBLE,
    TILE_SUBSTITUTION_POLICY_NONE = NTTileSubstitutionPolicy.T_TILE_SUBSTITUTION_POLICY_NONE
}
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
    @nativeProperty tileSubstitutionPolicy: TileSubstitutionPolicy;

    clearTileCaches( all: boolean) {
        if (this.native) {
            this.native.clearTileCaches( all);
        }
    }
}
