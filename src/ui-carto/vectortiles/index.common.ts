import type { VectorTileDecoderOptions } from '.';
import { BaseNative } from '../BaseNative';

export abstract class BaseVectorTileDecoder<T, U extends VectorTileDecoderOptions> extends BaseNative<T, U> {}
