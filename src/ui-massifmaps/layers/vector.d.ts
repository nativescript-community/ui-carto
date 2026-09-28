import { Layer, LayerOptions, TileLayer, TileLayerOptions } from '.';
import { TileDataSource } from '../datasources';
import { MBVectorTileDecoder, VectorTileDecoder } from '../vectortiles';
import { ClickType, DefaultLatLonKeys, GenericMapPos, MapPos } from '../core';
import { ClusterElementBuilder } from './cluster';
import { VectorElement } from '../vectorelements';
import { Projection } from '../projections';
import { Geometry } from '../geometry';
import { PointStyleBuilder } from '../vectorelements/point';
import { VectorDataSource } from '../datasources/vector';
import { Accessors as Acc_EditableVectorLayer } from '../bindings/layers/EditableVectorLayer';
import { Accessors as Acc_VectorTileLayer, Methods as Met_VectorTileLayer } from '../bindings/layers/VectorTileLayer';
import { Accessors as Acc_VectorLayer, Methods as Met_VectorLayer } from '../bindings/layers/VectorLayer';
import { Methods as Met_EditableVectorLayer } from '../bindings/layers/EditableVectorLayer';
import { Accessors as Acc_ClusteredVectorLayer, Methods as Met_ClusteredVectorLayer } from '../bindings/layers/ClusteredVectorLayer';
import { Accessors as Acc_BaseVectorTileLayer, Methods as Met_BaseVectorTileLayer } from '../bindings/layers/VectorTileLayer';
import { Accessors as Acc_BaseVectorLayer, Methods as Met_BaseVectorLayer } from '../bindings/layers/VectorLayer';
import { Accessors as Acc_TileLayer, Methods as Met_TileLayer } from '../bindings/layers/TileLayer';
import { Accessors as Acc_Layer, Methods as Met_Layer } from '../bindings/layers/Layer';

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

export interface VectorTileEventData<T = DefaultLatLonKeys> {
    clickType: ClickType;
    layer: BaseVectorTileLayer<any, any>;
    feature: any; // geojson object
    featureId: number;
    featureData: { [k: string]: string };
    featureGeometryPosIndex: number;
    featureLayerName: string;
    position: GenericMapPos<T>;
    featurePosition: GenericMapPos<T>;
    featureGeometry: Geometry | any;
}
export interface VectorElementEventData<T = DefaultLatLonKeys> {
    clickType: ClickType;
    layer: BaseVectorLayer<any, any>;
    native: any;
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
    /** Default 1.0; zero or negative disables blending. */
    layerBlendingSpeed?: number;
    /** Default 1.0; zero or negative disables blending. */
    labelBlendingSpeed?: number;
    clickRadius?: number;

    /** In bytes; too small makes tiles disappear. Default 10MB, sized for preloading. */
    tileCacheCapacity?: number;
    /** Default VECTOR_TILE_RENDER_ORDER_LAYER. */
    labelRenderOrder?: VectorTileRenderOrder;
    /** Default VECTOR_TILE_RENDER_ORDER_LAYER. */
    buildingRenderOrder?: VectorTileRenderOrder;
    /** ECMA regex on qualified layer names; if non-empty, only matching layers are rendered. */
    rendererLayerFilter?: string;

    /** ECMA regex on qualified layer names; if non-empty, only matching layers are click-tested. */
    clickHandlerLayerFilter?: string;
}

export interface ClusteredVectorLayerLayerOptions extends VectorTileLayerOptions {
    dataSource: VectorDataSource<any, any>;
    builder: ClusterElementBuilder<any, any>;
    minimumClusterDistance?: number;
    maximumClusterZoom?: number;
    animatedClusters?: boolean;
}

export abstract class BaseVectorTileLayer<T, U extends TileLayerOptions> extends TileLayer<T, U> {
    /** Default 1.0; zero or negative disables blending. */
    layerBlendingSpeed: number;
    /** Default 1.0; zero or negative disables blending. */
    labelBlendingSpeed: number;

    /** Extra click buffer around features, in dp. Default 4. */
    clickRadius: number;
    /** Default VECTOR_TILE_RENDER_ORDER_LAYER. */
    labelRenderOrder: VectorTileRenderOrder;
    /** Default VECTOR_TILE_RENDER_ORDER_LAYER. */
    buildingRenderOrder: VectorTileRenderOrder;
    /** In bytes; too small makes tiles disappear. Default 10MB, sized for preloading. */
    tileCacheCapacity: number;

    /** ECMA regex on qualified layer names; if non-empty, only matching layers are rendered. */
    rendererLayerFilter: string;

    /** ECMA regex on qualified layer names; if non-empty, only matching layers are click-tested. */
    clickHandlerLayerFilter: string;
    setLabelRenderOrder(order: VectorTileRenderOrder): void;
    setBuildingRenderOrder(order: VectorTileRenderOrder);
    setVectorTileEventListener<T = DefaultLatLonKeys>(listener: VectorTileEventListener<T>, projection?: Projection, nativeClass?: any): void;
    getTileDecoder(): MBVectorTileDecoder;
}

export abstract class BaseVectorLayer<T, U extends VectorLayerOptions> extends Layer<T, U> {
    setVectorElementEventListener<T = DefaultLatLonKeys>(listener: VectorElementEventListener<T>, projection?: Projection, nativeClass?: any): void;
}

export class VectorLayer extends BaseVectorLayer<any, VectorLayerOptions> {}
export class EditableVectorLayer extends VectorLayer {}

export class VectorTileLayer extends BaseVectorTileLayer<any, VectorTileLayerOptions> {}
export class ClusteredVectorLayer extends BaseVectorLayer<any, ClusteredVectorLayerLayerOptions> {
    minimumClusterDistance?: number;
    maximumClusterZoom?: number;
    animatedClusters?: boolean;
    expandCluster(element: VectorElement<any, any>, px: number);
}

export interface EditableVectorLayer extends Acc_EditableVectorLayer, Met_EditableVectorLayer {}

export interface VectorTileLayer extends Acc_VectorTileLayer, Met_VectorTileLayer {}

export interface VectorLayer extends Acc_VectorLayer, Met_VectorLayer {}

export interface ClusteredVectorLayer extends Omit<Acc_ClusteredVectorLayer, 'animatedClusters' | 'maximumClusterZoom' | 'minimumClusterDistance'>, Omit<Met_ClusteredVectorLayer, 'expandCluster'> {}

export interface BaseVectorTileLayer<T, U extends TileLayerOptions>
    extends Omit<
            Acc_BaseVectorTileLayer,
            'buildingRenderOrder' | 'clickHandlerLayerFilter' | 'clickRadius' | 'labelBlendingSpeed' | 'labelRenderOrder' | 'layerBlendingSpeed' | 'rendererLayerFilter' | 'tileCacheCapacity'
        >,
        Omit<Met_BaseVectorTileLayer, 'getTileDecoder' | 'setBuildingRenderOrder' | 'setLabelRenderOrder' | 'setVectorTileEventListener'> {}

export interface BaseVectorLayer<T, U extends VectorLayerOptions> extends Acc_BaseVectorLayer, Omit<Met_BaseVectorLayer, 'setVectorElementEventListener'> {}

export interface VectorTileLayer extends Acc_TileLayer, Met_TileLayer {}
export interface VectorTileLayer extends Acc_Layer, Omit<Met_Layer, 'isUpdateInProgress'> {}

export interface VectorLayer extends Acc_Layer, Omit<Met_Layer, 'isUpdateInProgress'> {}

export interface EditableVectorLayer extends Acc_VectorLayer, Met_VectorLayer {}
export interface EditableVectorLayer extends Acc_Layer, Omit<Met_Layer, 'isUpdateInProgress'> {}

export interface ClusteredVectorLayer extends Acc_VectorLayer, Met_VectorLayer {}
export interface ClusteredVectorLayer extends Acc_Layer, Omit<Met_Layer, 'isUpdateInProgress' | 'refresh'> {}
