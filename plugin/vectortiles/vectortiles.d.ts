import { BaseNative } from '../carto';

export interface VectorTileDecoderOptions {}

export class VectorTileDecoder extends BaseNative<any, VectorTileDecoderOptions> {
    constructor(options: VectorTileDecoderOptions);
}

export interface MBVectorTileDecoderOptions extends VectorTileDecoderOptions {
    zipPath?: string;
    cartoCss?: string;
    style?: string;
}
export class MBVectorTileDecoder extends BaseNative<any, MBVectorTileDecoderOptions> {
    constructor(options: MBVectorTileDecoderOptions, native?: any);
    setStyleParameter(param: string, value: string);
}
