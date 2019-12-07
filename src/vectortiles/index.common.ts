import { VectorTileDecoderOptions } from '.';
import { BaseNative } from '../index.common';

export abstract class BaseVectorTileDecoder<T, U extends VectorTileDecoderOptions> extends BaseNative<T, U> {}
