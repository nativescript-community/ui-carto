import { Layer, TileLayer } from '.';
import { BaseNative, nativeProperty } from '..';
import { fromNativeMapPos, fromNativeScreenPos } from '../core';
import { Projection } from '../projections';
import { nativeVariantToJS } from '../utils';
import { VectorElement } from '../vectorelements';
import { MBVectorTileDecoder } from '../vectortiles';
import {
    ClusteredVectorLayerLayerOptions,
    VectorEditEventListener as IVectorEditEventListener,
    VectorElementEventListener as IVectorElementEventListener,
    VectorTileEventListener as IVectorTileEventListener,
    VectorTileRenderOrder as IVectorTileRenderOrder,
    VectorLayerOptions,
    VectorTileLayerOptions
} from './vector';

export enum VectorTileRenderOrder {
    HIDDEN = NTVectorTileRenderOrder.T_VECTOR_TILE_RENDER_ORDER_HIDDEN,
    LAYER = NTVectorTileRenderOrder.T_VECTOR_TILE_RENDER_ORDER_LAYER,
    LAST = NTVectorTileRenderOrder.T_VECTOR_TILE_RENDER_ORDER_LAST
}

export enum VectorElementDragResult {
    IGNORE = NTVectorElementDragResult.T_VECTOR_ELEMENT_DRAG_RESULT_IGNORE,
    STOP = NTVectorElementDragResult.T_VECTOR_ELEMENT_DRAG_RESULT_STOP,
    MODIFY = NTVectorElementDragResult.T_VECTOR_ELEMENT_DRAG_RESULT_MODIFY,
    DELETE = NTVectorElementDragResult.T_VECTOR_ELEMENT_DRAG_RESULT_DELETE
}

@NativeClass
export class NTVectorElementEventListenerImpl extends AKVectorElementEventListener {
    private _layer: WeakRef<BaseVectorLayer<any, any>>;
    private _owner: WeakRef<IVectorElementEventListener>;
    private projection?: Projection;

    public static initWithOwner(owner: WeakRef<IVectorElementEventListener>, layer: WeakRef<BaseVectorLayer<any, any>>, projection?: Projection): NTVectorElementEventListenerImpl {
        const delegate = NTVectorElementEventListenerImpl.new() as NTVectorElementEventListenerImpl;
        delegate._owner = owner;
        delegate._layer = layer;
        delegate.projection = projection;

        return delegate;
    }
    public onVectorElementClickedThreaded(info: NTVectorElementClickInfo) {
        const owner = this._owner.get();
        if (owner && owner.onVectorElementClicked) {
            const nElement = info.getVectorElement();
            const element = new VectorElement(undefined, nElement);
            let position = info.getClickPos();
            let elementPos = info.getElementClickPos();
            if (this.projection) {
                const layerProj = this._layer.get().getNative().getDataSource().getProjection();
                const nProj = this.projection.getNative();
                elementPos = nProj.fromWgs84(layerProj.toWgs84(elementPos));
                position = nProj.fromWgs84(layerProj.toWgs84(position));
            }
            return (
                owner.onVectorElementClicked({
                    clickType: info.getClickType() as any,
                    layer: this._layer.get() as any,
                    element,
                    native: nElement,
                    metaData: element.metaData,
                    position: fromNativeMapPos(position),
                    elementPos: fromNativeMapPos(elementPos)
                }) || false
            );
        }
        return false;
    }
}

let geojsonWriter: NTGeoJSONGeometryWriter;
function getGeojsonWriter() {
    if (!geojsonWriter) {
        geojsonWriter = NTGeoJSONGeometryWriter.alloc().init();
    }
    return geojsonWriter;
}

@NativeClass
export class NTVectorTileEventListenerImpl extends AKVectorTileEventListener {
    private _layer: WeakRef<BaseVectorLayer<any, any>>;
    private _owner: WeakRef<IVectorTileEventListener>;
    private projection?: Projection;

    public static initWithOwner(owner: WeakRef<IVectorTileEventListener>, layer, projection?: Projection): NTVectorTileEventListenerImpl {
        const delegate = NTVectorTileEventListenerImpl.new() as NTVectorTileEventListenerImpl;
        delegate._owner = owner;
        delegate._layer = layer;
        delegate.projection = projection;
        return delegate;
    }
    public onVectorTileClickedThreaded(info: NTVectorTileClickInfo) {
        const owner = this._owner.get();
        if (owner && owner.onVectorTileClicked) {
            const feature = info.getFeature();
            const geometry = feature.getGeometry();
            let position = info.getClickPos();
            const geoPosIndex = info.getFeaturePosIndex();
            let featurePos: NTMapPos;
            if (geoPosIndex !== -1 && /MultiPoint/.test(geometry.constructor.name)) {
                featurePos = (geometry as NTMultiPointGeometry).getGeometry(geoPosIndex)?.getCenterPos();
            }
            if (!featurePos) {
                featurePos = geometry.getCenterPos();
            }

            let projection: NTProjection;
            const dataSourceProjection = this._layer.get().getNative().getDataSource().getProjection();
            if (this.projection) {
                projection = this.projection.getNative();
                featurePos = projection.fromWgs84(dataSourceProjection.toWgs84(featurePos));
                position = projection.fromWgs84(dataSourceProjection.toWgs84(position));
            }
            const geoFeature = {
                feature,
                id: info.getFeatureId(),
                layer: info.getFeatureLayerName(),
                _nativeGeometry: geometry,
                get geometry() {
                    if (!this._parsedGeometry) {
                        const writer = getGeojsonWriter();
                        writer.setSourceProjection(dataSourceProjection);
                        this._geometry = getGeojsonWriter().writeGeometry(this._nativeGeometry);
                        this._parsedGeometry = JSON.parse(this._geometry);
                    }
                    return this._parsedGeometry;
                },
                get _properties() {
                    return info.getFeature().getProperties().toString();
                },
                get properties() {
                    if (!this._parsedProperties) {
                        this._parsedProperties = JSON.parse(this._properties);
                    }
                    return this._parsedProperties;
                }
            };
            return (
                owner.onVectorTileClicked({
                    clickType: info.getClickType() as any,
                    layer: this._layer.get() as any,
                    feature: geoFeature,
                    featureId: geoFeature.id,
                    featureData: geoFeature.properties,
                    featureLayerName: geoFeature.layer,
                    featureGeometry: geometry,
                    featureGeometryPosIndex: geoPosIndex,
                    featurePosition: fromNativeMapPos(featurePos),
                    position: fromNativeMapPos(position)
                }) || false
            );
        }
        return false;
    }
}

export abstract class BaseVectorTileLayer<T extends NTVectorTileLayer, U extends VectorTileLayerOptions> extends TileLayer<T, U> {
    @nativeProperty layerBlendingSpeed: number;
    @nativeProperty labelBlendingSpeed: number;
    @nativeProperty tileCacheCapacity: number;
    @nativeProperty clickRadius: number;
    @nativeProperty labelRenderOrder: IVectorTileRenderOrder;
    @nativeProperty buildingRenderOrder: IVectorTileRenderOrder;
    @nativeProperty rendererLayerFilter: string;
    @nativeProperty clickHandlerLayerFilter: string;

    listener?: IVectorTileEventListener;
    nListener?: NTVectorTileEventListener;
    listenerProjection?: Projection;
    constructor(options) {
        super(options);
        for (const property of ['listener', 'nListener']) {
            const descriptor = Object.getOwnPropertyDescriptor(BaseVectorTileLayer.prototype, property);
            if (descriptor) {
                descriptor.enumerable = false;
            }
        }
    }
    setVectorTileEventListener(listener: IVectorTileEventListener | any, projection?: Projection, nativeClass = NTVectorTileEventListenerImpl) {
        this.listener = listener;
        this.listenerProjection = projection;
        if (listener) {
            if (listener instanceof NTVectorTileEventListener) {
                this.getNative().setVectorTileEventListener(listener);
                this.nListener = listener;
            } else {
                this.nListener = nativeClass.initWithOwner(new WeakRef(listener), new WeakRef(this), projection);
                this.getNative().setVectorTileEventListener(this.nListener);
            }
        } else {
            this.nListener = null;
            this.getNative().setVectorTileEventListener(null);
        }
    }
    getTileDecoder() {
        if (this.options.decoder) {
            return this.options.decoder;
        } else {
            return new MBVectorTileDecoder(undefined, this.getNative().getTileDecoder());
        }
    }
}

export class VectorTileLayer extends BaseVectorTileLayer<NTVectorTileLayer, VectorTileLayerOptions> {
    createNative(options: VectorTileLayerOptions) {
        if (!!options.dataSource && !!options.decoder) {
            const dataSource = options.dataSource.getNative();
            const decoder = options.decoder.getNative();
            if (dataSource && decoder) {
                return NTVectorTileLayer.alloc().initWithDataSourceDecoder(dataSource, decoder);
            }
        }
        return null;
    }
}
export abstract class BaseVectorLayer<T extends NTVectorLayer, U extends VectorLayerOptions> extends Layer<T, U> {
    projection?: Projection;
    elementListener?: IVectorElementEventListener;
    nElementListener?: NTVectorElementEventListener;
    constructor(options) {
        super(options);
        for (const property of ['elementListener', 'nElementListener']) {
            const descriptor = Object.getOwnPropertyDescriptor(BaseVectorLayer.prototype, property);
            if (descriptor) {
                descriptor.enumerable = false;
            }
        }
    }
    // setVectorElementEventListener(listener: IVectorElementEventListener) {
    // initVectorElementEventListener();
    // this.getNative().setVectorElementEventListener(new VectorElementEventListener(new WeakRef(listener), new WeakRef(this)));
    // }
    setVectorElementEventListener(listener: IVectorElementEventListener, projection?: Projection, nativeClass = NTVectorElementEventListenerImpl) {
        this.elementListener = listener;
        this.projection = projection;
        if (listener) {
            this.nElementListener = nativeClass.initWithOwner(new WeakRef(listener), new WeakRef(this), projection);
            this.getNative().setVectorElementEventListener(this.nElementListener);
        } else {
            this.nElementListener = null;
            this.getNative().setVectorElementEventListener(null);
        }
    }
}
export class VectorLayer extends BaseVectorLayer<NTVectorLayer, VectorLayerOptions> {
    createNative(options: VectorLayerOptions) {
        if (!!options.dataSource) {
            const dataSource = options.dataSource.getNative();
            if (dataSource) {
                return NTVectorLayer.alloc().initWithDataSource(dataSource);
            }
        }
        return null;
    }
}

@NativeClass
class NTVectorEditEventListenerImpl extends AKVectorEditEventListener {
    private _owner: WeakRef<IVectorEditEventListener>;
    public static initWithOwner(owner: WeakRef<IVectorEditEventListener>): NTVectorEditEventListenerImpl {
        const delegate = NTVectorEditEventListenerImpl.new() as NTVectorEditEventListenerImpl;
        delegate._owner = owner;

        return delegate;
    }

    onDragEndThreaded(dragInfo: NTVectorElementDragInfo): NTVectorElementDragResult {
        const owner = this._owner.get();
        if (owner && owner.onDragEnd) {
            return owner.onDragEnd.call(owner, {
                layer: this,
                element: new VectorElement(undefined, dragInfo.getVectorElement()),
                position: fromNativeMapPos(dragInfo.getMapPos()),
                screenPosition: fromNativeScreenPos(dragInfo.getScreenPos()),
                dragMode: dragInfo.getDragMode()
            });
        }
        return NTVectorElementDragResult.T_VECTOR_ELEMENT_DRAG_RESULT_IGNORE;
    }

    onDragMoveThreaded(dragInfo: NTVectorElementDragInfo): NTVectorElementDragResult {
        const owner = this._owner.get();
        if (owner && owner.onDragMove) {
            return owner.onDragMove.call(owner, {
                layer: this,
                element: new VectorElement(undefined, dragInfo.getVectorElement()),
                position: fromNativeMapPos(dragInfo.getMapPos()),
                screenPosition: fromNativeScreenPos(dragInfo.getScreenPos()),
                dragMode: dragInfo.getDragMode()
            });
        }
        return NTVectorElementDragResult.T_VECTOR_ELEMENT_DRAG_RESULT_IGNORE;
    }

    onDragStartThreaded(dragInfo: NTVectorElementDragInfo): NTVectorElementDragResult {
        const owner = this._owner.get();
        if (owner && owner.onDragStart) {
            return owner.onDragStart.call(owner, {
                layer: this,
                element: new VectorElement(undefined, dragInfo.getVectorElement()),
                position: fromNativeMapPos(dragInfo.getMapPos()),
                screenPosition: fromNativeScreenPos(dragInfo.getScreenPos()),
                dragMode: dragInfo.getDragMode()
            });
        }
        return NTVectorElementDragResult.T_VECTOR_ELEMENT_DRAG_RESULT_IGNORE;
    }

    onElementDeleteThreaded(element: NTVectorElement) {
        const owner = this._owner.get();
        if (owner && owner.onElementDelete) {
            const el = new VectorElement(undefined, element);
            owner.onElementDelete.call(owner, el);
        }
    }

    onElementDeselectedThreaded(element: NTVectorElement) {
        const owner = this._owner.get();
        if (owner && owner.onElementDelete) {
            const el = new VectorElement(undefined, element);
            owner.onElementDelete.call(owner, el);
        }
    }

    onElementModifyThreadedGeometry(element: NTVectorElement, geometry: NTGeometry) {
        const owner = this._owner.get();
        if (owner && owner.onElementModify) {
            const el = new VectorElement(undefined, element);
            owner.onElementModify.call(owner, el, geometry);
        }
    }

    onElementSelectThreaded(element: NTVectorElement) {
        const owner = this._owner.get();
        if (owner && owner.onElementSelect) {
            const el = new VectorElement(undefined, element);
            return owner.onElementSelect.call(owner, el);
        }
        return true;
    }

    onSelectDragPointStyleThreadedDragPointStyle(element: NTVectorElement, dragPointStyle: NTVectorElementDragPointStyle) {
        const owner = this._owner.get();
        if (owner && owner.onElementSelect) {
            const el = new VectorElement(undefined, element);
            const styleBuilder = owner.onSelectDragPointStyle.call(owner, el);
            return styleBuilder ? styleBuilder.buildStyle() : null;
        }
        return null;
    }
}
export class EditableVectorLayer extends BaseVectorLayer<NTEditableVectorLayer, VectorLayerOptions> {
    editListener?: IVectorEditEventListener;
    nEditListener?: AKVectorEditEventListener;
    constructor(options) {
        super(options);
        for (const property of ['editListener', 'nEditListener']) {
            const descriptor = Object.getOwnPropertyDescriptor(EditableVectorLayer.prototype, property);
            if (descriptor) {
                descriptor.enumerable = false;
            }
        }
    }
    createNative(options: VectorLayerOptions) {
        if (!!options.dataSource) {
            const dataSource = options.dataSource.getNative();
            if (dataSource) {
                const result = NTEditableVectorLayer.alloc().initWithDataSource(options.dataSource.getNative());
                // result.setVectorEditEventListener(NTVectorEditEventListenerImpl.initWithOwner(new WeakRef(this)));
                // result.setVectorElementEventListener(NTVectorElementEventListenerImpl.initWithOwner(new WeakRef(this)));
                return result;
            }
        }
        return null;
    }
    setSelectedVectorElement(element) {
        if (this.native) {
            this.native.setSelectedVectorElement(element instanceof BaseNative ? element.getNative() : element);
        }
    }
    setVectorEditEventListener(listener: IVectorEditEventListener, projection?: Projection) {
        this.editListener = listener;
        this.projection = projection;
        if (listener) {
            this.nEditListener = NTVectorEditEventListenerImpl.initWithOwner(new WeakRef(listener));
            this.getNative().setVectorEditEventListener(this.nEditListener);
        } else {
            this.nEditListener = null;
            this.getNative().setVectorEditEventListener(null);
        }
    }
}

export class ClusteredVectorLayer extends BaseVectorLayer<NTClusteredVectorLayer, ClusteredVectorLayerLayerOptions> {
    createNative(options: ClusteredVectorLayerLayerOptions) {
        return NTClusteredVectorLayer.alloc().initWithDataSourceClusterElementBuilder(options.dataSource.getNative(), options.builder.getNative?.() || options.builder);
    }

    @nativeProperty minimumClusterDistance: number;
    @nativeProperty maximumClusterZoom: number;
    @nativeProperty({
        nativeGetterName: 'isAnimatedClusters'
    })
    animatedClusters: boolean;

    expandCluster(element: VectorElement<any, any>, px: number) {
        this.getNative().expandClusterPx(element.getNative(), px);
    }
}
