import { TileLayer } from '.';
import { RasterTileLayerOptions } from './raster';

export abstract class RasterTileLayerBase<NativeClass, U extends RasterTileLayerOptions> extends TileLayer<NativeClass, U> {
    abstract createNative(options: U): NativeClass;
}
