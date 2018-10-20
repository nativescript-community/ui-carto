import { TileLayer } from './layer';
import { VectorTileLayerOptions } from './vector';
import { MBVectorTileDecoder } from '../vectortiles/vectortiles';

export abstract class VectorTileLayerBase<NativeClass, U extends VectorTileLayerOptions> extends TileLayer<NativeClass, U> {
    abstract createNative(options: U): NativeClass;

    abstract getTileDecoder(): MBVectorTileDecoder;
}
