import { TileLayer, TileLayerOptions } from '.';
import { TileDataSource } from '../datasources';
import { ElevationDataDecoder } from '../rastertiles';
import { Color } from '@nativescript/core';
import { DefaultLatLonKeys, DoubleVector, GenericMapPos, IntVector, MapPos, MapPosVector } from '../core';
import { Accessors as Acc_RasterTileLayer, Methods as Met_RasterTileLayer } from '../bindings/layers/RasterTileLayer';
import { Accessors as Acc_HillshadeRasterTileLayer, Methods as Met_HillshadeRasterTileLayer } from '../bindings/layers/HillshadeRasterTileLayer';
import { Accessors as Acc_TileLayer, Methods as Met_TileLayer } from '../bindings/layers/TileLayer';
import { Accessors as Acc_Layer, Methods as Met_Layer } from '../bindings/layers/Layer';
import { Accessors as Acc_CustomRasterTileLayer, Methods as Met_CustomRasterTileLayer } from '../bindings/layers/CustomRasterTileLayer';

export enum RasterTileFilterMode {
    RASTER_TILE_FILTER_MODE_NEAREST,
    RASTER_TILE_FILTER_MODE_BILINEAR,
    RASTER_TILE_FILTER_MODE_BICUBIC
}
export enum HillshadeMethod {
    STANDARD,
    COMBINED,
    IGOR,
    MULTIDIRECTIONAL,
    BASIC
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

/**
 * The shader gets the normal map and the raw texel (`getRawColor()`) and must define `vec4 applyLighting(lowp vec4 color,
 * mediump vec3 normal, mediump vec3 surfaceNormal, mediump float intensity)` returning a premultiplied colour.
 */
export interface CustomRasterTileLayerOptions extends RasterTileLayerOptions {
    shaderSource?: string;
}
export class CustomRasterTileLayer extends TileLayer<any, CustomRasterTileLayerOptions> {
    shaderSource?: string;
    tileFilterMode?: RasterTileFilterMode;
    setRasterTileEventListener<T = DefaultLatLonKeys>(listener: RasterTileEventListener<T>, projection?: Projection): void;
}

export interface HillshadeRasterTileLayerOptions extends RasterTileLayerOptions {
    decoder?: ElevationDataDecoder<any, any>;
    heightScale?: number;
    contrast?: number;
    illuminationDirection?: MapVec | [number, number, number];
    highlightColor?: Color | string;
    accentColor?: Color | string;
    shadowColor?: Color | string;
    exagerateHeightScaleEnabled?: boolean;
    normalMapLightingShader?: string;
    hillshadeMethod?: HillshadeMethod;
    tileFilterMode?: RasterTileFilterMode;
}
export class HillshadeRasterTileLayer extends TileLayer<any, HillshadeRasterTileLayerOptions> {
    tileFilterMode?: RasterTileFilterMode;
    public getElevation<T = DefaultLatLonKeys>(pos: GenericMapPos<T>): number;
    public getElevationAsync<T = DefaultLatLonKeys>(pos: GenericMapPos<T>, callback: (error: Error, res: number) => void);
    public getElevations<T = DefaultLatLonKeys>(pos: MapPosVector<T> | GenericMapPos<T>[]): DoubleVector;
    public getElevationsAsync<T = DefaultLatLonKeys>(pos: MapPosVector<T> | GenericMapPos<T>[], callback: (error: Error, res: DoubleVector) => void);
    setRasterTileEventListener<T = DefaultLatLonKeys>(listener: RasterTileEventListener<T>, projection?: Projection): void;
}

export interface RasterTileLayer extends Omit<Acc_RasterTileLayer, 'tileFilterMode'>, Omit<Met_RasterTileLayer, 'setRasterTileEventListener'> {}

export interface HillshadeRasterTileLayer extends Acc_HillshadeRasterTileLayer, Omit<Met_HillshadeRasterTileLayer, 'getElevation' | 'getElevations'> {}

export interface CustomRasterTileLayer extends Omit<Acc_RasterTileLayer, 'tileFilterMode'>, Omit<Met_RasterTileLayer, 'setRasterTileEventListener'> {}

export interface RasterTileLayer extends Acc_TileLayer, Met_TileLayer {}
export interface RasterTileLayer extends Acc_Layer, Omit<Met_Layer, 'isUpdateInProgress'> {}

export interface CustomRasterTileLayer extends Omit<Acc_CustomRasterTileLayer, 'shaderSource'>, Met_CustomRasterTileLayer {}
export interface CustomRasterTileLayer extends Acc_TileLayer, Met_TileLayer {}
export interface CustomRasterTileLayer extends Acc_Layer, Omit<Met_Layer, 'isUpdateInProgress'> {}

export interface HillshadeRasterTileLayer extends Acc_CustomRasterTileLayer, Met_CustomRasterTileLayer {}
export interface HillshadeRasterTileLayer extends Omit<Acc_RasterTileLayer, 'tileFilterMode'>, Omit<Met_RasterTileLayer, 'setRasterTileEventListener'> {}
export interface HillshadeRasterTileLayer extends Acc_TileLayer, Met_TileLayer {}
export interface HillshadeRasterTileLayer extends Acc_Layer, Omit<Met_Layer, 'isUpdateInProgress'> {}
