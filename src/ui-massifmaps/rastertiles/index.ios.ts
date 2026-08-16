import { nativeProperty } from '../index.common';
import { BaseNative } from '../BaseNative';
import { MapPos, toNativeMapPos } from '../core';
import { FeatureCollection, VectorTileFeatureCollection } from '../geometry/feature';
import { MapBoxElevationDataDecoderOptions, TerrariumElevationDataDecoderOptions } from '.';

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
