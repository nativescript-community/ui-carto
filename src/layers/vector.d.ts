import { Layer, LayerOptions, TileLayer, TileLayerOptions } from '.';
import { TileDataSource } from '../datasources';
import { MBVectorTileDecoder, VectorTileDecoder } from '../vectortiles';
import { CartoPackageManager } from '../packagemanager';
import { CartoMapStyle, ClickType, DefaultLatLonKeys, GenericMapPos, MapPos } from '../core';
import { ClusterElementBuilder } from './cluster';
import { VectorElement } from '../vectorelements';
import { Projection } from '../projections';
import { Geometry } from '../geometry';
import { PointStyleBuilder } from '../vectorelements/point';
import { VectorDataSource } from '../datasources/vector';

export enum VectorTileRenderOrder {
    HIDDEN,
    LAYER,
    LAST,
}
export enum VectorElementDragResult {
    IGNORE,
    STOP,
    MODIFY,
    DELETE,
}

export interface VectorTileEventData<T = DefaultLatLonKeys> {
    clickType: ClickType;
    layer: BaseVectorTileLayer<any, any>;
    feature: any; // geojson object
    featureId: number;
    featureData: { [k: string]: string };
    featureLayerName: string;
    position: GenericMapPos<T>;
    featurePosition: GenericMapPos<T>;
    featureGeometry: Geometry | any;
}
export interface VectorElementEventData<T = DefaultLatLonKeys> {
    clickType: ClickType;
    layer: BaseVectorTileLayer<any, any>;
    // featureId: number;
    // featureData: { [k: string]: string };
    // featureLayerName: string;
    metaData: { [k: string]: string };
    element: VectorElement<any, any>;
    position: GenericMapPos<T>;
    elementPos: GenericMapPos<T>;
}

export interface VectorElementDragInfo {}

export interface VectorTileEventListener<T = DefaultLatLonKeys> {
    onVectorTileClicked(info: VectorTileEventData<T>): boolean;
}

export interface VectorElementEventListener<T = DefaultLatLonKeys> {
    onVectorElementClicked(info: VectorElementEventData<T>): boolean;
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
    dataSource: VectorDataSource<any, any>;
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
    setBuildingRenderOrder(order: VectorTileRenderOrder);
    setVectorTileEventListener<T = DefaultLatLonKeys>(listener: VectorTileEventListener<T>, projection?: Projection): void;
    getTileDecoder(): MBVectorTileDecoder;
}

export abstract class BaseVectorLayer<T, U extends VectorLayerOptions> extends Layer<T, U> {
    setVectorElementEventListener<T = DefaultLatLonKeys>(listener: VectorElementEventListener<T>, projection?: Projection): void;
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
