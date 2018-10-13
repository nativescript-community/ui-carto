import { TileLayer } from './layer';
import { VectorTileLayerOptions } from './vector';

export abstract class VectorTileLayerBase<NativeClass, U extends VectorTileLayerOptions> extends TileLayer<NativeClass, U> {
    abstract createNative(options: U): NativeClass;
}
