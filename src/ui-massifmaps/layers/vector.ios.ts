import { Layer, TileLayer } from '.';
import { BaseNative } from '..';
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
import {
    ACCESSORS as ACC_VectorTileLayer,
    Accessors as Acc_VectorTileLayer,
    METHODS as MET_VectorTileLayer,
    Methods as Met_VectorTileLayer,
    SELECTORS as SEL_VectorTileLayer
} from '../bindings/layers/VectorTileLayer';
import { bindNative } from '../nativeclass.common';
import { ACCESSORS as ACC_VectorLayer, Accessors as Acc_VectorLayer, METHODS as MET_VectorLayer, Methods as Met_VectorLayer, SELECTORS as SEL_VectorLayer } from '../bindings/layers/VectorLayer';
import {
    ACCESSORS as ACC_EditableVectorLayer,
    Accessors as Acc_EditableVectorLayer,
    METHODS as MET_EditableVectorLayer,
    Methods as Met_EditableVectorLayer,
    SELECTORS as SEL_EditableVectorLayer
} from '../bindings/layers/EditableVectorLayer';
import {
    ACCESSORS as ACC_ClusteredVectorLayer,
    Accessors as Acc_ClusteredVectorLayer,
    METHODS as MET_ClusteredVectorLayer,
    Methods as Met_ClusteredVectorLayer,
    SELECTORS as SEL_ClusteredVectorLayer
} from '../bindings/layers/ClusteredVectorLayer';
import {
    ACCESSORS as ACC_BaseVectorTileLayer,
    Accessors as Acc_BaseVectorTileLayer,
    METHODS as MET_BaseVectorTileLayer,
    Methods as Met_BaseVectorTileLayer,
    SELECTORS as SEL_BaseVectorTileLayer
} from '../bindings/layers/VectorTileLayer';
import {
    ACCESSORS as ACC_BaseVectorLayer,
    Accessors as Acc_BaseVectorLayer,
    METHODS as MET_BaseVectorLayer,
    Methods as Met_BaseVectorLayer,
    SELECTORS as SEL_BaseVectorLayer
} from '../bindings/layers/VectorLayer';

export enum VectorTileRenderOrder {
    HIDDEN = MSFVectorTileRenderOrder.F_VECTOR_TILE_RENDER_ORDER_HIDDEN,
    LAYER = MSFVectorTileRenderOrder.F_VECTOR_TILE_RENDER_ORDER_LAYER,
    LAST = MSFVectorTileRenderOrder.F_VECTOR_TILE_RENDER_ORDER_LAST
}

export enum VectorElementDragResult {
    IGNORE = MSFVectorElementDragResult.F_VECTOR_ELEMENT_DRAG_RESULT_IGNORE,
    STOP = MSFVectorElementDragResult.F_VECTOR_ELEMENT_DRAG_RESULT_STOP,
    MODIFY = MSFVectorElementDragResult.F_VECTOR_ELEMENT_DRAG_RESULT_MODIFY,
    DELETE = MSFVectorElementDragResult.F_VECTOR_ELEMENT_DRAG_RESULT_DELETE
}

@NativeClass
export class MSFVectorElementEventListenerImpl extends NSMSFVectorElementEventListener {
    private _layer: WeakRef<BaseVectorLayer<any, any>>;
    private _owner: WeakRef<IVectorElementEventListener>;
    private projection?: Projection;

    public static initWithOwner(owner: WeakRef<IVectorElementEventListener>, layer: WeakRef<BaseVectorLayer<any, any>>, projection?: Projection): MSFVectorElementEventListenerImpl {
        const delegate = MSFVectorElementEventListenerImpl.new() as MSFVectorElementEventListenerImpl;
        delegate._owner = owner;
        delegate._layer = layer;
        delegate.projection = projection;

        return delegate;
    }
    public onVectorElementClickedThreaded(info: MSFVectorElementClickInfo) {
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

let geojsonWriter: MSFGeoJSONGeometryWriter;
function getGeojsonWriter() {
    if (!geojsonWriter) {
        geojsonWriter = MSFGeoJSONGeometryWriter.alloc().init();
    }
    return geojsonWriter;
}

@NativeClass
export class MSFVectorTileEventListenerImpl extends NSMSFVectorTileEventListener {
    private _layer: WeakRef<BaseVectorLayer<any, any>>;
    private _owner: WeakRef<IVectorTileEventListener>;
    private projection?: Projection;

    public static initWithOwner(owner: WeakRef<IVectorTileEventListener>, layer, projection?: Projection): MSFVectorTileEventListenerImpl {
        const delegate = MSFVectorTileEventListenerImpl.new() as MSFVectorTileEventListenerImpl;
        delegate._owner = owner;
        delegate._layer = layer;
        delegate.projection = projection;
        return delegate;
    }
    public onVectorTileClickedThreaded(info: MSFVectorTileClickInfo) {
        const owner = this._owner.get();
        if (owner && owner.onVectorTileClicked) {
            const feature = info.getFeature();
            const geometry = feature.getGeometry();
            let position = info.getClickPos();
            const geoPosIndex = info.getFeaturePosIndex();
            let featurePos: MSFMapPos;
            if (geoPosIndex !== -1 && /MultiPoint/.test(geometry.constructor.name)) {
                featurePos = (geometry as MSFMultiPointGeometry).getGeometry(geoPosIndex)?.getCenterPos();
            }
            if (!featurePos) {
                featurePos = geometry.getCenterPos();
            }

            let projection: MSFProjection;
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

export abstract class BaseVectorTileLayer<T extends MSFVectorTileLayer, U extends VectorTileLayerOptions> extends TileLayer<T, U> {
    listener?: IVectorTileEventListener;
    nListener?: MSFVectorTileEventListener;
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
    setVectorTileEventListener(listener: IVectorTileEventListener | any, projection?: Projection, nativeClass = MSFVectorTileEventListenerImpl) {
        this.listener = listener;
        this.listenerProjection = projection;
        if (listener) {
            if (listener instanceof MSFVectorTileEventListener) {
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

export class VectorTileLayer extends BaseVectorTileLayer<MSFVectorTileLayer, VectorTileLayerOptions> {
    createNative(options: VectorTileLayerOptions) {
        if (!!options.dataSource && !!options.decoder) {
            const dataSource = options.dataSource.getNative();
            const decoder = options.decoder.getNative();
            if (dataSource && decoder) {
                return MSFVectorTileLayer.alloc().initWithDataSourceDecoder(dataSource, decoder);
            }
        }
        return null;
    }
}
export abstract class BaseVectorLayer<T extends MSFVectorLayer, U extends VectorLayerOptions> extends Layer<T, U> {
    projection?: Projection;
    elementListener?: IVectorElementEventListener;
    nElementListener?: MSFVectorElementEventListener;
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
    setVectorElementEventListener(listener: IVectorElementEventListener, projection?: Projection, nativeClass = MSFVectorElementEventListenerImpl) {
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
export class VectorLayer extends BaseVectorLayer<MSFVectorLayer, VectorLayerOptions> {
    createNative(options: VectorLayerOptions) {
        if (!!options.dataSource) {
            const dataSource = options.dataSource.getNative();
            if (dataSource) {
                return MSFVectorLayer.alloc().initWithDataSource(dataSource);
            }
        }
        return null;
    }
}

@NativeClass
class MSFVectorEditEventListenerImpl extends NSMSFVectorEditEventListener {
    private _owner: WeakRef<IVectorEditEventListener>;
    public static initWithOwner(owner: WeakRef<IVectorEditEventListener>): MSFVectorEditEventListenerImpl {
        const delegate = MSFVectorEditEventListenerImpl.new() as MSFVectorEditEventListenerImpl;
        delegate._owner = owner;

        return delegate;
    }

    onDragEndThreaded(dragInfo: MSFVectorElementDragInfo): MSFVectorElementDragResult {
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
        return MSFVectorElementDragResult.F_VECTOR_ELEMENT_DRAG_RESULT_IGNORE;
    }

    onDragMoveThreaded(dragInfo: MSFVectorElementDragInfo): MSFVectorElementDragResult {
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
        return MSFVectorElementDragResult.F_VECTOR_ELEMENT_DRAG_RESULT_IGNORE;
    }

    onDragStartThreaded(dragInfo: MSFVectorElementDragInfo): MSFVectorElementDragResult {
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
        return MSFVectorElementDragResult.F_VECTOR_ELEMENT_DRAG_RESULT_IGNORE;
    }

    onElementDeleteThreaded(element: MSFVectorElement) {
        const owner = this._owner.get();
        if (owner && owner.onElementDelete) {
            const el = new VectorElement(undefined, element);
            owner.onElementDelete.call(owner, el);
        }
    }

    onElementDeselectedThreaded(element: MSFVectorElement) {
        const owner = this._owner.get();
        if (owner && owner.onElementDelete) {
            const el = new VectorElement(undefined, element);
            owner.onElementDelete.call(owner, el);
        }
    }

    onElementModifyThreadedGeometry(element: MSFVectorElement, geometry: MSFGeometry) {
        const owner = this._owner.get();
        if (owner && owner.onElementModify) {
            const el = new VectorElement(undefined, element);
            owner.onElementModify.call(owner, el, geometry);
        }
    }

    onElementSelectThreaded(element: MSFVectorElement) {
        const owner = this._owner.get();
        if (owner && owner.onElementSelect) {
            const el = new VectorElement(undefined, element);
            return owner.onElementSelect.call(owner, el);
        }
        return true;
    }

    onSelectDragPointStyleThreadedDragPointStyle(element: MSFVectorElement, dragPointStyle: MSFVectorElementDragPointStyle) {
        const owner = this._owner.get();
        if (owner && owner.onElementSelect) {
            const el = new VectorElement(undefined, element);
            const styleBuilder = owner.onSelectDragPointStyle.call(owner, el);
            return styleBuilder ? styleBuilder.buildStyle() : null;
        }
        return null;
    }
}
export class EditableVectorLayer extends BaseVectorLayer<MSFEditableVectorLayer, VectorLayerOptions> {
    editListener?: IVectorEditEventListener;
    nEditListener?: NSMSFVectorEditEventListener;
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
                const result = MSFEditableVectorLayer.alloc().initWithDataSource(options.dataSource.getNative());
                // result.setVectorEditEventListener(MSFVectorEditEventListenerImpl.initWithOwner(new WeakRef(this)));
                // result.setVectorElementEventListener(MSFVectorElementEventListenerImpl.initWithOwner(new WeakRef(this)));
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
            this.nEditListener = MSFVectorEditEventListenerImpl.initWithOwner(new WeakRef(listener));
            this.getNative().setVectorEditEventListener(this.nEditListener);
        } else {
            this.nEditListener = null;
            this.getNative().setVectorEditEventListener(null);
        }
    }
}

export class ClusteredVectorLayer extends BaseVectorLayer<MSFClusteredVectorLayer, ClusteredVectorLayerLayerOptions> {
    createNative(options: ClusteredVectorLayerLayerOptions) {
        return MSFClusteredVectorLayer.alloc().initWithDataSourceClusterElementBuilder(options.dataSource.getNative(), options.builder.getNative?.() || options.builder);
    }

    expandCluster(element: VectorElement<any, any>, px: number) {
        this.getNative().expandClusterPx(element.getNative(), px);
    }
}

export interface VectorTileLayer extends Acc_VectorTileLayer, Omit<Met_VectorTileLayer, 'getTileDecoder' | 'setVectorTileEventListener'> {}
bindNative(VectorTileLayer, MET_VectorTileLayer, ACC_VectorTileLayer, { selectors: SEL_VectorTileLayer });

export interface VectorLayer extends Acc_VectorLayer, Omit<Met_VectorLayer, 'setVectorElementEventListener'> {}
bindNative(VectorLayer, MET_VectorLayer, ACC_VectorLayer, { selectors: SEL_VectorLayer });

export interface EditableVectorLayer extends Acc_EditableVectorLayer, Omit<Met_EditableVectorLayer, 'setSelectedVectorElement' | 'setVectorEditEventListener'> {}
bindNative(EditableVectorLayer, MET_EditableVectorLayer, ACC_EditableVectorLayer, { selectors: SEL_EditableVectorLayer });

export interface ClusteredVectorLayer extends Acc_ClusteredVectorLayer, Omit<Met_ClusteredVectorLayer, 'expandCluster' | 'refresh'> {}
bindNative(ClusteredVectorLayer, MET_ClusteredVectorLayer, ACC_ClusteredVectorLayer, { selectors: SEL_ClusteredVectorLayer });

export interface BaseVectorTileLayer<T extends MSFVectorTileLayer, U extends VectorTileLayerOptions>
    extends Acc_BaseVectorTileLayer, Omit<Met_BaseVectorTileLayer, 'getTileDecoder' | 'setVectorTileEventListener'> {}
bindNative(BaseVectorTileLayer, MET_BaseVectorTileLayer, ACC_BaseVectorTileLayer, { selectors: SEL_BaseVectorTileLayer });

export interface BaseVectorLayer<T extends MSFVectorLayer, U extends VectorLayerOptions> extends Acc_BaseVectorLayer, Omit<Met_BaseVectorLayer, 'setVectorElementEventListener'> {}
bindNative(BaseVectorLayer, MET_BaseVectorLayer, ACC_BaseVectorLayer, { selectors: SEL_BaseVectorLayer });
