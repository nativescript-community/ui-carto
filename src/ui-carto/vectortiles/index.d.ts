import { BaseNative } from '..';

export interface VectorTileDecoderOptions {}

export class VectorTileDecoder extends BaseNative<any, VectorTileDecoderOptions> {
    constructor(options: VectorTileDecoderOptions);
}

export interface MBVectorTileDecoderOptions extends VectorTileDecoderOptions {
    zipPath?: string;
    dirPath?: string;
    cartoCss?: string;
    style?: string;
    liveReload?: boolean;
}
export class MBVectorTileDecoder extends BaseNative<any, MBVectorTileDecoderOptions> {
    style?: string;
    liveReload?: boolean;
    constructor(options: MBVectorTileDecoderOptions, native?: any);
    setStyleParameter(param: string, value: string);
}
