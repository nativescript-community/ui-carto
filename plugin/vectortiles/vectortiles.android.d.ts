import { MBVectorTileDecoderOptions, VectorTileDecoderOptions } from './vectortiles';
import { BaseVectorTileDecoder } from './vectortiles.common';
export declare class VectorTileDecoder extends BaseVectorTileDecoder<com.carto.vectortiles.VectorTileDecoder, VectorTileDecoderOptions> {
    createNative(options: VectorTileDecoderOptions): any;
}
export declare class MBVectorTileDecoder extends BaseVectorTileDecoder<com.carto.vectortiles.MBVectorTileDecoder, MBVectorTileDecoderOptions> {
    pack: com.carto.utils.AssetPackage;
    createNative(options: MBVectorTileDecoderOptions): com.carto.vectortiles.MBVectorTileDecoder;
    style: string;
    setStyleParameter(param: string, value: string): void;
}
