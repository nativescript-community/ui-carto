import { ElevationDataDecoderOptions, MapBoxElevationDataDecoderOptions, TerrariumElevationDataDecoderOptions } from '.';
import { BaseNative } from '..';

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
