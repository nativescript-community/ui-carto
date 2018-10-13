import { LayerOptions, TileLayer, TileLayerOptions } from './layer';
import { TileDataSource } from '../datasources/datasource';
import { VectorTileDecoder } from '../vectortiles/vectortiles';
import { CartoPackageManager } from '../packagemanager/packagemanager';
import { CartoMapStyle, Position } from '../core/core';

export enum VectorTileRenderOrder {
    HIDDEN,
    LAYER,
    LAST
}

export interface VectorTileEventData {
    type: any;
    layer: BaseVectorTileLayer<any, any>;
    featureId: number;
    featureData: { [k: string]: string };
    featureLayerName: string;
    pos: Position;
}

export interface VectorTileEventListener {
    onVectorTileClicked(info: VectorTileEventData);
}

export interface VectorLayerOptions extends LayerOptions {
    dataSource: TileDataSource<any, any>;
}
export interface VectorTileLayerOptions extends TileLayerOptions {
    dataSource: TileDataSource<any, any>;
    decoder: VectorTileDecoder;
}

export interface CartoOnlineVectorTileLayerOptions extends VectorTileLayerOptions {
    style: CartoMapStyle;
}
export interface CartoOfflineVectorTileLayerOptions extends TileLayerOptions {
    packageManager: CartoPackageManager;
    style: CartoMapStyle;
}

export class VectorLayer extends TileLayer<any, VectorLayerOptions> {}
export class EditableVectorLayer extends VectorLayer {}

export abstract class BaseVectorTileLayer<T, U extends TileLayerOptions> extends TileLayer<T, U> {
    setLabelRenderOrder(order: VectorTileRenderOrder): void;
    setVectorTileEventListener(listener: VectorTileEventListener): void;
}

export class VectorTileLayer extends BaseVectorTileLayer<any, VectorTileLayerOptions> {}
export class CartoOnlineVectorTileLayer extends BaseVectorTileLayer<any, CartoOnlineVectorTileLayerOptions> {}
