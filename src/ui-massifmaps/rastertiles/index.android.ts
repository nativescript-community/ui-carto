import { ElevationDataDecoderOptions, MapBoxElevationDataDecoderOptions, TerrariumElevationDataDecoderOptions } from '.';
import { BaseNative } from '..';
import {
    ACCESSORS as ACC_ElevationDataDecoder,
    Accessors as Acc_ElevationDataDecoder,
    METHODS as MET_ElevationDataDecoder,
    Methods as Met_ElevationDataDecoder,
    SELECTORS as SEL_ElevationDataDecoder
} from '../bindings/rastertiles/ElevationDecoder';
import { bindNative } from '../nativeclass.common';
import {
    ACCESSORS as ACC_MapBoxElevationDataDecoder,
    Accessors as Acc_MapBoxElevationDataDecoder,
    METHODS as MET_MapBoxElevationDataDecoder,
    Methods as Met_MapBoxElevationDataDecoder,
    SELECTORS as SEL_MapBoxElevationDataDecoder
} from '../bindings/rastertiles/MapBoxElevationDataDecoder';
import {
    ACCESSORS as ACC_TerrariumElevationDataDecoder,
    Accessors as Acc_TerrariumElevationDataDecoder,
    METHODS as MET_TerrariumElevationDataDecoder,
    Methods as Met_TerrariumElevationDataDecoder,
    SELECTORS as SEL_TerrariumElevationDataDecoder
} from '../bindings/rastertiles/TerrariumElevationDataDecoder';
import { ACCESSORS as ACC_ElevationDecoder, Accessors as Acc_ElevationDecoder, METHODS as MET_ElevationDecoder, Methods as Met_ElevationDecoder, SELECTORS as SEL_ElevationDecoder } from '../bindings/rastertiles/ElevationDecoder';

export abstract class ElevationDataDecoder<N extends com.massifmaps.rastertiles.ElevationDecoder, O extends ElevationDataDecoderOptions> extends BaseNative<
    com.massifmaps.rastertiles.ElevationDecoder,
    ElevationDataDecoderOptions
> {}
export class MapBoxElevationDataDecoder extends BaseNative<com.massifmaps.rastertiles.MapBoxElevationDataDecoder, MapBoxElevationDataDecoderOptions> {
    createNative(options: MapBoxElevationDataDecoderOptions) {
        return new com.massifmaps.rastertiles.MapBoxElevationDataDecoder();
    }
}

export class TerrariumElevationDataDecoder extends BaseNative<com.massifmaps.rastertiles.TerrariumElevationDataDecoder, TerrariumElevationDataDecoderOptions> {
    createNative(options: TerrariumElevationDataDecoderOptions) {
        return new com.massifmaps.rastertiles.TerrariumElevationDataDecoder();
    }
}

bindNative(ElevationDataDecoder, MET_ElevationDataDecoder, ACC_ElevationDataDecoder, { selectors: SEL_ElevationDataDecoder });

export interface MapBoxElevationDataDecoder extends Acc_MapBoxElevationDataDecoder, Met_MapBoxElevationDataDecoder {}
bindNative(MapBoxElevationDataDecoder, MET_MapBoxElevationDataDecoder, ACC_MapBoxElevationDataDecoder, { selectors: SEL_MapBoxElevationDataDecoder });

export interface TerrariumElevationDataDecoder extends Acc_TerrariumElevationDataDecoder, Met_TerrariumElevationDataDecoder {}
bindNative(TerrariumElevationDataDecoder, MET_TerrariumElevationDataDecoder, ACC_TerrariumElevationDataDecoder, { selectors: SEL_TerrariumElevationDataDecoder });

export interface MapBoxElevationDataDecoder extends Acc_ElevationDecoder, Met_ElevationDecoder {}
bindNative(MapBoxElevationDataDecoder, MET_ElevationDecoder, ACC_ElevationDecoder, { selectors: SEL_ElevationDecoder });

export interface TerrariumElevationDataDecoder extends Acc_ElevationDecoder, Met_ElevationDecoder {}
bindNative(TerrariumElevationDataDecoder, MET_ElevationDecoder, ACC_ElevationDecoder, { selectors: SEL_ElevationDecoder });
