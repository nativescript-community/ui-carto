import { TileLayer, TileLayerOptions } from '.';
import { TileDataSource } from '../datasources';
import { ElevationDataDecoder } from '../rastertiles';
import { Color } from '@nativescript/core';
import { DefaultLatLonKeys, DoubleVector, GenericMapPos, IntVector, MapPos, MapPosVector } from '../core';

export enum RasterTileFilterMode {
    RASTER_TILE_FILTER_MODE_NEAREST,
    RASTER_TILE_FILTER_MODE_BILINEAR,
    RASTER_TILE_FILTER_MODE_BICUBIC
}

export interface RasterTileClickInfo<T = DefaultLatLonKeys> {
    clickType: ClickType;
    layer: BaseVectorTileLayer<any, any>;
    position: GenericMapPos<T>;
    nearestColor: Color;
    interpolatedColor: Color;
}
export interface RasterTileEventListener<T = DefaultLatLonKeys> {
    onRasterTileClicked(info: RasterTileClickInfo<T>): boolean;
}

export interface RasterTileLayerOptions extends TileLayerOptions {
    tileFilterMode?: RasterTileFilterMode;
    dataSource?: TileDataSource<any, any>;
}
export class RasterTileLayer extends TileLayer<any, RasterTileLayerOptions> {
    // dataSource?: TileDataSource<any, any>;
    tileFilterMode?: RasterTileFilterMode;
    setRasterTileEventListener<T = DefaultLatLonKeys>(listener: RasterTileEventListener<T>, projection?: Projection): void;
}

export interface HillshadeRasterTileLayerOptions extends RasterTileLayerOptions {
    decoder?: ElevationDataDecoder<any, any>;
    heightScale?: number;
    contrast?: number;
    illuminationDirection?: MapVec | [number, number, number];
    highlightColor?: Color;
    accentColor?: Color;
    shadowColor?: Color;
    exagerateHeightScaleEnabled?: boolean;
    normalMapLightingShader?: string;
}
export class HillshadeRasterTileLayer extends TileLayer<any, HillshadeRasterTileLayerOptions> {
    heightScale?: number;
    contrast?: number;
    illuminationDirection?: MapVec | [number, number, number];
    highlightColor?: Color;
    shadowColor?: Color;
    accentColor?: Color;
    exagerateHeightScaleEnabled?: boolean;
    normalMapLightingShader?: string;
    tileFilterMode?: RasterTileFilterMode;
    public getElevation<T = DefaultLatLonKeys>(pos: GenericMapPos<T>): number;
    public getElevationAsync<T = DefaultLatLonKeys>(pos: GenericMapPos<T>, callback: (error: Error, res: number) => void);
    public getElevations<T = DefaultLatLonKeys>(pos: MapPosVector<T> | GenericMapPos<T>[]): DoubleVector;
    public getElevationsAsync<T = DefaultLatLonKeys>(pos: MapPosVector<T> | GenericMapPos<T>[], callback: (error: Error, res: DoubleVector) => void);
    setRasterTileEventListener<T = DefaultLatLonKeys>(listener: RasterTileEventListener<T>, projection?: Projection): void;
}
