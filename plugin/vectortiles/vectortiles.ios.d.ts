import { MBVectorTileDecoderOptions, VectorTileDecoderOptions } from './vectortiles';
import { BaseVectorTileDecoder } from './vectortiles.common';
export declare class VectorTileDecoder extends BaseVectorTileDecoder<NTVectorTileDecoder, VectorTileDecoderOptions> {
    createNative(options: VectorTileDecoderOptions): NTVectorTileDecoder;
}
export declare class MBVectorTileDecoder extends BaseVectorTileDecoder<NTMBVectorTileDecoder, MBVectorTileDecoderOptions> {
    createNative(options: MBVectorTileDecoderOptions): NTMBVectorTileDecoder;
    setStyleParameter(param: string, value: string): void;
}
