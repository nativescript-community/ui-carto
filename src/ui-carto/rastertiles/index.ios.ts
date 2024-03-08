import { nativeProperty } from '../index.common';
import { BaseNative } from '../BaseNative';
import { MapPos, toNativeMapPos } from '../core';
import { FeatureCollection, VectorTileFeatureCollection } from '../geometry/feature';
import { MapBoxElevationDataDecoderOptions, TerrariumElevationDataDecoderOptions } from '.';

export class MapBoxElevationDataDecoder extends BaseNative<NTMapBoxElevationDataDecoder, MapBoxElevationDataDecoderOptions> {
    createNative(options: MapBoxElevationDataDecoderOptions) {
        return NTMapBoxElevationDataDecoder.new();
    }
    public getElevation(pos: MapPos) {}
}

export class TerrariumElevationDataDecoder extends BaseNative<NTTerrariumElevationDataDecoder, TerrariumElevationDataDecoderOptions> {
    createNative(options: TerrariumElevationDataDecoderOptions) {
        return NTTerrariumElevationDataDecoder.new();
    }
    public getElevation(pos: MapPos) {}
}
