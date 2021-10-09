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
    /**
     * Sets the relative layer blending speed.
     * Default is 1.0. Use zero or negative values to disable blending.
     */
    layerBlendingSpeed?: number;
    /**
     * Sets the relative label blending speed.
     * Default is 1.0. Use zero or negative values to disable blending.
     */
    labelBlendingSpeed?: number;
    /**
     * display order of the labels. Default is VECTOR_TILE_RENDER_ORDER_LAYER
     */
    clickRadius?: number;

    /**
     * the vector tile cache capacity in bytes. Tile cache is the primary storage for vector data,
     * all tiles contained within the cache are stored as uncompressed vertex buffers and can immediately be
     * drawn to the screen. Setting the cache size too small may cause artifacts, such as disappearing tiles.
     * The more tiles are visible on the screen, the larger this cache should be.
     * The default is 10MB, which should be enough for most use cases with preloading enabled. If preloading is
     * disabled, the cache size should be reduced by the user to conserve memory.
     */
    tileCacheCapacity?: number;
    /**
     * display order of the labels. Default is VECTOR_TILE_RENDER_ORDER_LAYER
     */
    labelRenderOrder?: VectorTileRenderOrder;
    /**
     * Sets the current display order of the buildings.
     * Default is VECTOR_TILE_RENDER_ORDER_LAYER.
     */
    buildingRenderOrder?: VectorTileRenderOrder;
}

export interface CartoOnlineVectorTileLayerOptions extends VectorTileLayerOptions {
    style: CartoMapStyle;
}
export interface CartoOfflineVectorTileLayerOptions extends VectorTileLayerOptions {
    packageManager: CartoPackageManager;
    style: CartoMapStyle;
}

export interface ClusteredVectorLayerLayerOptions extends VectorTileLayerOptions {
    dataSource: VectorDataSource<any, any>;
    builder: ClusterElementBuilder<any, any>;
    minimumClusterDistance?: number;
    maximumClusterZoom?: number;
    animatedClusters?: boolean;
}

export abstract class BaseVectorTileLayer<T, U extends TileLayerOptions> extends TileLayer<T, U> {
    /**
     * Sets the relative layer blending speed.
     * Default is 1.0. Use zero or negative values to disable blending.
     */
    layerBlendingSpeed: number;
    /**
     * Sets the relative label blending speed.
     * Default is 1.0. Use zero or negative values to disable blending.
     */
    labelBlendingSpeed: number;

    /**
     * Sets the click radius of vector tile features.
     * The click radius is applied as an extra buffer to the vector tile features to make clicking on small features less sensitive.
     * Units are screen density independent pixels (DP or DIP).
     *The default value is 4.
     */
    clickRadius: number;
    /**
     * display order of the labels. Default is VECTOR_TILE_RENDER_ORDER_LAYER
     */
    labelRenderOrder: VectorTileRenderOrder;
    /**
     * Sets the current display order of the buildings.
     * Default is VECTOR_TILE_RENDER_ORDER_LAYER.
     */
    buildingRenderOrder: VectorTileRenderOrder;
    /**
     * the vector tile cache capacity in bytes. Tile cache is the primary storage for vector data,
     * all tiles contained within the cache are stored as uncompressed vertex buffers and can immediately be
     * drawn to the screen. Setting the cache size too small may cause artifacts, such as disappearing tiles.
     * The more tiles are visible on the screen, the larger this cache should be.
     * The default is 10MB, which should be enough for most use cases with preloading enabled. If preloading is
     * disabled, the cache size should be reduced by the user to conserve memory.
     */
    tileCacheCapacity: number;
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
    expandCluster(element: VectorElement<any, any>, px: number);
}
