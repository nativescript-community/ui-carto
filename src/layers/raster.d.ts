import { TileLayer, TileLayerOptions } from '.';
import { TileDataSource } from '../datasources';
import { ElevationDataDecoder } from '../rastertiles';
import { Color } from '@nativescript/core';
import { DefaultLatLonKeys, DoubleVector, GenericMapPos, IntVector, MapPos, MapPosVector } from '../core';

export enum RasterTileFilterMode {
    RASTER_TILE_FILTER_MODE_NEAREST,
    RASTER_TILE_FILTER_MODE_BILINEAR,
    RASTER_TILE_FILTER_MODE_BICUBIC,
}

export interface RasterTileLayerOptions extends TileLayerOptions {
    tileFilterMode?: RasterTileFilterMode;
    dataSource?: TileDataSource<any, any>;
}
export class RasterTileLayer extends TileLayer<any, RasterTileLayerOptions> {
    // dataSource?: TileDataSource<any, any>;
}

export interface CartoOnlineRasterTileLayerOptions extends RasterTileLayerOptions {
    source?: string;
}
export class CartoOnlineRasterTileLayer extends TileLayer<any, CartoOnlineRasterTileLayerOptions> {}

export interface HillshadeRasterTileLayerOptions extends RasterTileLayerOptions {
    decoder?: ElevationDataDecoder<any, any>;
    heightScale?: number;
    contrast?: number;
    illuminationDirection?: number;
    highlightColor?: Color;
}
export class HillshadeRasterTileLayer extends TileLayer<any, HillshadeRasterTileLayerOptions> {
    heightScale?: number;
    contrast?: number;
    illuminationDirection?: number;
    highlightColor?: Color;
    public getElevation<T = DefaultLatLonKeys>(pos: GenericMapPos<T>): number;
    public getElevationAsync<T = DefaultLatLonKeys>(pos: GenericMapPos<T>, callback: (error: Error, res: number) => void);
    public getElevations<T = DefaultLatLonKeys>(pos: MapPosVector<T> | GenericMapPos<T>[]): DoubleVector;
    public getElevationsAsync<T = DefaultLatLonKeys>(pos: MapPosVector<T> | GenericMapPos<T>[], callback: (error: Error, res: DoubleVector) => void);
}
