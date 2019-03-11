import { Layer, LayerOptions, TileLayer, TileLayerOptions } from './layer';
import { TileDataSource } from '../datasources/datasource';
import { VectorTileDecoder } from '../vectortiles/vectortiles';
import { CartoPackageManager } from '../packagemanager/packagemanager';
import { CartoMapStyle, MapPos } from '../core/core';
import { MBVectorTileDecoder } from '../vectortiles/vectortiles';
import { ClusterElementBuilder } from './cluster';
import { VectorElement } from '../vectorelements/vectorelements';
import { Projection } from '../projections/projection';
import { Geometry } from '../geometry/geometry';

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
    position: MapPos;
    featurePosition: MapPos;
    featureGeometry: Geometry;
}
export interface VectorElementEventData {
    type: any;
    layer: BaseVectorTileLayer<any, any>;
    // featureId: number;
    // featureData: { [k: string]: string };
    // featureLayerName: string;
    metaData: Object;
    element: VectorElement<any, any>;
    position: MapPos;
    elementPos: MapPos;
}

export interface VectorTileEventListener {
    onVectorTileClicked(info: VectorTileEventData);
}

export interface VectorElementEventListener {
    onVectorElementClicked(info: VectorElementEventData);
}

export interface VectorLayerOptions extends LayerOptions {
    dataSource: TileDataSource<any, any>;
}
export interface VectorTileLayerOptions extends TileLayerOptions {
    dataSource?: TileDataSource<any, any>;
    decoder?: VectorTileDecoder;
}

export interface CartoOnlineVectorTileLayerOptions extends VectorTileLayerOptions {
    style: CartoMapStyle;
}
export interface CartoOfflineVectorTileLayerOptions extends VectorTileLayerOptions {
    packageManager: CartoPackageManager;
    style: CartoMapStyle;
}

export interface ClusteredVectorLayerLayerOptions extends VectorTileLayerOptions {
    dataSource: TileDataSource<any, any>;
    builder: ClusterElementBuilder<any, any>;
    minimumClusterDistance?: number;
    maximumClusterZoom?: number;
    animatedClusters?: boolean;
}

export abstract class BaseVectorTileLayer<T, U extends TileLayerOptions> extends TileLayer<T, U> {
    setLabelRenderOrder(order: VectorTileRenderOrder): void;
    setVectorTileEventListener(listener: VectorTileEventListener, projection?: Projection): void;
    getTileDecoder(): MBVectorTileDecoder;
}

export abstract class BaseVectorLayer<T extends com.carto.layers.VectorLayer, U extends VectorLayerOptions> extends Layer<T, U> {
    setVectorElementEventListener(listener: VectorElementEventListener, projection?: Projection): void;
}

export class VectorLayer extends BaseVectorLayer<any, VectorLayerOptions> {}
export class EditableVectorLayer extends VectorLayer {}

export class VectorTileLayer extends BaseVectorTileLayer<any, VectorTileLayerOptions> {}
export class CartoOnlineVectorTileLayer extends BaseVectorTileLayer<any, CartoOnlineVectorTileLayerOptions> {}
export class CartoOfflineVectorTileLayer extends BaseVectorTileLayer<any, CartoOfflineVectorTileLayerOptions> {}
export class ClusteredVectorLayer extends BaseVectorLayer<any, ClusteredVectorLayerLayerOptions> {
    minimumClusterDistance?: number;
    maximumClusterZoom?: number;
    animatedClusters?: boolean;
}
