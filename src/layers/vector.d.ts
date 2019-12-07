import { Layer, LayerOptions, TileLayer, TileLayerOptions } from '.';
import { TileDataSource } from '../datasources';
import { VectorTileDecoder } from '../vectortiles';
import { CartoPackageManager } from '../packagemanager';
import { CartoMapStyle, ClickType, MapPos } from '../core';
import { MBVectorTileDecoder } from '../vectortiles';
import { ClusterElementBuilder } from './cluster';
import { VectorElement } from '../vectorelements';
import { Projection } from '../projections';
import { Geometry } from '../geometry';
import { PointStyleBuilder } from 'nativescript-carto/vectorelements/point';

export enum VectorTileRenderOrder {
    HIDDEN,
    LAYER,
    LAST
}
export enum VectorElementDragResult {
    IGNORE,
    STOP,
    MODIFY,
    DELETE
}

export interface VectorTileEventData {
    clickType: ClickType;
    layer: BaseVectorTileLayer<any, any>;
    featureId: number;
    featureData: { [k: string]: string };
    featureLayerName: string;
    position: MapPos;
    featurePosition: MapPos;
    featureGeometry: Geometry;
}
export interface VectorElementEventData {
    clickType: ClickType;
    layer: BaseVectorTileLayer<any, any>;
    // featureId: number;
    // featureData: { [k: string]: string };
    // featureLayerName: string;
    metaData: { [k: string]: string };
    element: VectorElement<any, any>;
    position: MapPos;
    elementPos: MapPos;
}

export interface VectorElementDragInfo {}

export interface VectorTileEventListener {
    onVectorTileClicked(info: VectorTileEventData);
}

export interface VectorElementEventListener {
    onVectorElementClicked(info: VectorElementEventData);
}
export interface VectorEditEventListener {
    onElementModify(param0: VectorElement<any, any>, param1: Geometry): void;
    onElementDeselected(param0: VectorElement<any, any>): void;
    onElementSelect(param0: VectorElement<any, any>): boolean;
    onSelectDragPointStyle(param0: VectorElement<any, any>, style: any): PointStyleBuilder;
    onDragMove(param0: VectorElementDragInfo): VectorElementDragResult;
    onDragEnd(param0: VectorElementDragInfo): VectorElementDragResult;
    onDragStart(param0: VectorElementDragInfo): VectorElementDragResult;
    onElementDelete(param0: VectorElement<any, any>): void;
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
    dataSource?: TileDataSource<any, any>;
    setLabelRenderOrder(order: VectorTileRenderOrder): void;
    setVectorTileEventListener(listener: VectorTileEventListener, projection?: Projection): void;
    getTileDecoder(): MBVectorTileDecoder;
}

export abstract class BaseVectorLayer<T, U extends VectorLayerOptions> extends Layer<T, U> {
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
