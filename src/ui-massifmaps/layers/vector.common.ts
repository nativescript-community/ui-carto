import { TileLayer } from '.';
import { VectorTileLayerOptions } from './vector';
import { MBVectorTileDecoder } from '../vectortiles';

export abstract class VectorTileLayerBase<NativeClass, U extends VectorTileLayerOptions> extends TileLayer<NativeClass, U> {
    abstract createNative(options: U): NativeClass;

    abstract getTileDecoder(): MBVectorTileDecoder;
}
