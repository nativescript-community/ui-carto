import { nativeProperty } from '../index.common';
import { BaseNative } from "../BaseNative";
import { MapPos, toNativeMapPos } from '../core';
import { FeatureCollection, VectorTileFeatureCollection } from '../geometry/feature';
import { MapBoxElevationDataDecoderOptions, TerrariumElevationDataDecoderOptions } from '.';

// export class MapBoxElevationDataDecoder extends BaseNative<com.carto.rastertiles.MapBoxElevationDataDecoder, MapBoxElevationDataDecoderOptions> {
//     createNative(options: MapBoxElevationDataDecoderOptions) {
//         return new com.carto.rastertiles.MapBoxElevationDataDecoder();
//     }
//     public getElevation(pos: MapPos) {}
// }

// export class TerrariumElevationDataDecoder extends BaseNative<com.carto.rastertiles.TerrariumElevationDataDecoder, TerrariumElevationDataDecoderOptions> {
//     createNative(options: TerrariumElevationDataDecoderOptions) {
//         return  NTTerrariumElevationDataDecoder.alloc.init();
//     }
//     public getElevation(pos: MapPos) {}
// }
