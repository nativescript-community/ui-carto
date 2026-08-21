import { nativeProperty } from '../index.common';
import { BaseNative } from '../BaseNative';
import { MapPos, toNativeMapPos } from '../core';
import { FeatureCollection, VectorTileFeatureCollection } from '../geometry/feature';
import { MapBoxElevationDataDecoderOptions, TerrariumElevationDataDecoderOptions } from '.';
import {
    ACCESSORS as ACC_MapBoxElevationDataDecoder,
    Accessors as Acc_MapBoxElevationDataDecoder,
    METHODS as MET_MapBoxElevationDataDecoder,
    Methods as Met_MapBoxElevationDataDecoder,
    SELECTORS as SEL_MapBoxElevationDataDecoder
} from '../bindings/rastertiles/MapBoxElevationDataDecoder';
import { bindNative } from '../nativeclass.common';
import {
    ACCESSORS as ACC_TerrariumElevationDataDecoder,
    Accessors as Acc_TerrariumElevationDataDecoder,
    METHODS as MET_TerrariumElevationDataDecoder,
    Methods as Met_TerrariumElevationDataDecoder,
    SELECTORS as SEL_TerrariumElevationDataDecoder
} from '../bindings/rastertiles/TerrariumElevationDataDecoder';
import { ACCESSORS as ACC_ElevationDecoder, Accessors as Acc_ElevationDecoder, METHODS as MET_ElevationDecoder, Methods as Met_ElevationDecoder, SELECTORS as SEL_ElevationDecoder } from '../bindings/rastertiles/ElevationDecoder';

export class MapBoxElevationDataDecoder extends BaseNative<MSFMapBoxElevationDataDecoder, MapBoxElevationDataDecoderOptions> {
    createNative(options: MapBoxElevationDataDecoderOptions) {
        return MSFMapBoxElevationDataDecoder.new();
    }
    public getElevation(pos: MapPos) {}
}

export class TerrariumElevationDataDecoder extends BaseNative<MSFTerrariumElevationDataDecoder, TerrariumElevationDataDecoderOptions> {
    createNative(options: TerrariumElevationDataDecoderOptions) {
        return MSFTerrariumElevationDataDecoder.new();
    }
    public getElevation(pos: MapPos) {}
}

export interface MapBoxElevationDataDecoder extends Acc_MapBoxElevationDataDecoder, Met_MapBoxElevationDataDecoder {}
bindNative(MapBoxElevationDataDecoder, MET_MapBoxElevationDataDecoder, ACC_MapBoxElevationDataDecoder, { selectors: SEL_MapBoxElevationDataDecoder });

export interface TerrariumElevationDataDecoder extends Acc_TerrariumElevationDataDecoder, Met_TerrariumElevationDataDecoder {}
bindNative(TerrariumElevationDataDecoder, MET_TerrariumElevationDataDecoder, ACC_TerrariumElevationDataDecoder, { selectors: SEL_TerrariumElevationDataDecoder });

export interface MapBoxElevationDataDecoder extends Acc_ElevationDecoder, Omit<Met_ElevationDecoder, 'getMinimumHeightScale'> {}
bindNative(MapBoxElevationDataDecoder, MET_ElevationDecoder, ACC_ElevationDecoder, { selectors: SEL_ElevationDecoder });

export interface TerrariumElevationDataDecoder extends Acc_ElevationDecoder, Omit<Met_ElevationDecoder, 'getMinimumHeightScale'> {}
bindNative(TerrariumElevationDataDecoder, MET_ElevationDecoder, ACC_ElevationDecoder, { selectors: SEL_ElevationDecoder });
