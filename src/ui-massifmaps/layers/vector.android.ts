import { Layer, TileLayer } from '.';
import { BaseNative } from '..';
import { fromNativeMapPos, fromNativeScreenPos } from '../core';
import { Projection } from '../projections';
import { VectorElement } from '../vectorelements';
import { MBVectorTileDecoder, VectorTileDecoder } from '../vectortiles';
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

export { VectorTileDecoder };

export const VectorTileRenderOrder = {
    get HIDDEN() {
        return com.massifmaps.layers.VectorTileRenderOrder.VECTOR_TILE_RENDER_ORDER_HIDDEN;
    },
    get LAYER() {
        return com.massifmaps.layers.VectorTileRenderOrder.VECTOR_TILE_RENDER_ORDER_LAYER;
    },
    get LAST() {
        return com.massifmaps.layers.VectorTileRenderOrder.VECTOR_TILE_RENDER_ORDER_LAST;
    }
};

export const VectorElementDragResult = {
    get IGNORE() {
        return com.massifmaps.layers.VectorElementDragResult.VECTOR_ELEMENT_DRAG_RESULT_IGNORE;
    },
    get DELETE() {
        return com.massifmaps.layers.VectorElementDragResult.VECTOR_ELEMENT_DRAG_RESULT_DELETE;
    },
    get MODIFY() {
        return com.massifmaps.layers.VectorElementDragResult.VECTOR_ELEMENT_DRAG_RESULT_MODIFY;
    },
    get STOP() {
        return com.massifmaps.layers.VectorElementDragResult.VECTOR_ELEMENT_DRAG_RESULT_STOP;
    }
};

let geojsonWriter: com.massifmaps.geometry.GeoJSONGeometryWriter;
function getGeojsonWriter() {
    if (!geojsonWriter) {
        geojsonWriter = new com.massifmaps.geometry.GeoJSONGeometryWriter();
    }
    return geojsonWriter;
}

export abstract class BaseVectorTileLayer<T extends com.massifmaps.layers.VectorTileLayer, U extends VectorTileLayerOptions> extends TileLayer<T, U> {
    listenerProjection?: Projection;
    listener?: IVectorTileEventListener;
    nListener?: com.nativescript.massifmaps.additions.VectorTileEventListener | com.massifmaps.layers.VectorTileEventListener;

    constructor(options) {
        super(options);
        for (const property of ['listener', 'nListener']) {
            const descriptor = Object.getOwnPropertyDescriptor(BaseVectorTileLayer.prototype, property);
            if (descriptor) {
                descriptor.enumerable = false;
            }
        }
    }
    setVectorTileEventListener(listener: IVectorTileEventListener | any, projection?: Projection, nativeClass = com.nativescript.massifmaps.additions.VectorTileEventListener) {
        this.listener = listener;
        this.listenerProjection = projection;
        if (listener) {
            if (listener instanceof com.massifmaps.layers.VectorTileEventListener) {
                this.nListener = listener;
            } else {
                if (!this.nListener) {
                    this.nListener = new nativeClass(
                        new com.nativescript.massifmaps.additions.VectorTileEventListener.Listener({
                            onVectorTileClicked: this.onTileClicked.bind(this)
                        })
                    );
                }
            }
            this.getNative().setVectorTileEventListener(this.nListener);
        } else {
            this.nListener = null;
            this.getNative().setVectorTileEventListener(null);
        }
    }
    onTileClicked(info: com.massifmaps.ui.VectorTileClickInfo) {
        if (this.listener && this.listener.onVectorTileClicked) {
            const feature = info.getFeature();
            const geometry = feature.getGeometry();
            let position = info.getClickPos();
            const geoPosIndex = info.getFeaturePosIndex();
            let featurePos: com.massifmaps.core.MapPos;
            if (geoPosIndex !== -1 && /MultiPoint/.test(geometry.constructor.name)) {
                featurePos = (geometry as com.massifmaps.geometry.MultiPointGeometry).getGeometry(geoPosIndex)?.getCenterPos();
            }
            if (!featurePos) {
                featurePos = geometry.getCenterPos();
            }
            let projection: com.massifmaps.projections.Projection;
            const dataSourceProjection = this.getNative().getDataSource().getProjection();
            if (this.listenerProjection) {
                projection = this.listenerProjection.getNative();
                featurePos = projection.fromWgs84(dataSourceProjection.toWgs84(featurePos));
                position = projection.fromWgs84(dataSourceProjection.toWgs84(position));
            }
            const geoFeature = {
                feature,
                id: info.getFeatureId(),
                layer: info.getFeatureLayerName(),
                _nativeGeometry: geometry,
                geoPosIndex,
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
                    return feature.getProperties().toString();
                },
                get properties() {
                    if (!this._parsedProperties) {
                        this._parsedProperties = JSON.parse(this._properties);
                    }
                    return this._parsedProperties;
                }
            };
            return (
                this.listener.onVectorTileClicked.call(this.listener, {
                    clickType: info.getClickType().swigValue(),
                    layer: this,
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
    getTileDecoder() {
        if (this.options.decoder) {
            return this.options.decoder;
        } else {
            return new MBVectorTileDecoder(undefined, this.getNative().getTileDecoder());
        }
    }
}

export class VectorTileLayer extends BaseVectorTileLayer<com.massifmaps.layers.VectorTileLayer, VectorTileLayerOptions> {
    createNative(options: VectorTileLayerOptions) {
        if (!!options.dataSource && !!options.decoder) {
            const dataSource = options.dataSource.getNative();
            const decoder = options.decoder.getNative();
            if (dataSource && decoder) {
                return new com.massifmaps.layers.VectorTileLayer(dataSource, decoder);
            }
        }
        return null;
    }
}

export abstract class BaseVectorLayer<T extends com.massifmaps.layers.VectorLayer, U extends VectorLayerOptions> extends Layer<T, U> {
    projection?: Projection;
    elementListener?: IVectorElementEventListener;
    nElementListener?: com.nativescript.massifmaps.additions.VectorElementEventListener;
    constructor(options) {
        super(options);
        for (const property of ['elementListener', 'nElementListener']) {
            const descriptor = Object.getOwnPropertyDescriptor(BaseVectorLayer.prototype, property);
            if (descriptor) {
                descriptor.enumerable = false;
            }
        }
    }
    setVectorElementEventListener(listener: IVectorElementEventListener, projection?: Projection, nativeClass = com.nativescript.massifmaps.additions.VectorElementEventListener) {
        this.elementListener = listener;
        this.projection = projection;
        if (listener) {
            if (!this.nElementListener) {
                this.nElementListener = new nativeClass(
                    new com.nativescript.massifmaps.additions.VectorElementEventListener.Listener({
                        onVectorElementClicked: this.onElementClicked.bind(this)
                    })
                );
            }
            this.getNative().setVectorElementEventListener(this.nElementListener);
        } else {
            this.nElementListener = null;
            this.getNative().setVectorElementEventListener(null);
        }
    }
    onElementClicked(info: com.massifmaps.ui.VectorElementClickInfo) {
        if (this.elementListener && this.elementListener.onVectorElementClicked) {
            const nElement = info.getVectorElement();
            const element = new VectorElement(undefined, nElement);

            let position = info.getClickPos();
            let elementPos = info.getElementClickPos();
            if (this.projection) {
                const layerProj = this.getNative().getDataSource().getProjection();
                const nProj = this.projection.getNative();
                elementPos = nProj.fromWgs84(layerProj.toWgs84(elementPos));
                position = nProj.fromWgs84(layerProj.toWgs84(position));
            }
            return (
                this.elementListener.onVectorElementClicked.call(this.elementListener, {
                    clickType: info.getClickType().swigValue(),
                    layer: this,
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

export class VectorLayer extends BaseVectorLayer<com.massifmaps.layers.VectorLayer, VectorLayerOptions> {
    createNative(options: VectorLayerOptions) {
        if (!!options.dataSource) {
            const dataSource = options.dataSource.getNative();
            if (dataSource) {
                return new com.massifmaps.layers.VectorLayer(options.dataSource.getNative());
            }
        }
        return null;
    }
}

export class EditableVectorLayer extends BaseVectorLayer<com.massifmaps.layers.EditableVectorLayer, VectorLayerOptions> {
    editListener?: IVectorEditEventListener;
    nEditListener?: com.nativescript.massifmaps.additions2.VectorEditEventListener;
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
                const result = new com.massifmaps.layers.EditableVectorLayer(options.dataSource.getNative());
                // result.setVectorEditEventListener(VectorEditEventListenerImpl.initWithOwner(new WeakRef(this)));
                // result.setVectorElementEventListener(VectorElementEventListenerImpl.initWithOwner(new WeakRef(this)));
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
    setVectorEditEventListener(listener: IVectorEditEventListener, projection?: Projection, nativeClass = com.nativescript.massifmaps.additions2.VectorEditEventListener) {
        this.editListener = listener;
        this.projection = projection;
        if (listener) {
            if (!this.nEditListener) {
                this.nEditListener = new nativeClass(
                    new com.nativescript.massifmaps.additions2.VectorEditEventListener.Listener({
                        onDragEnd: this.onDragEnd.bind(this),
                        onDragMove: this.onDragMove.bind(this),
                        onDragStart: this.onDragStart.bind(this),
                        onElementDelete: this.onElementDelete.bind(this),
                        onElementDeselected: this.onElementDeselected.bind(this),
                        onElementModify: this.onElementModify.bind(this),
                        onElementSelect: this.onElementSelect.bind(this),
                        onSelectDragPointStyle: this.onSelectDragPointStyle.bind(this)
                    })
                );
            }
            this.getNative().setVectorEditEventListener(this.nEditListener);
        } else {
            this.nEditListener = null;
            this.getNative().setVectorEditEventListener(null);
        }
    }

    onDragEnd(dragInfo: com.massifmaps.ui.VectorElementDragInfo): com.massifmaps.layers.VectorElementDragResult {
        if (this.editListener && this.editListener.onDragEnd) {
            return this.editListener.onDragEnd.call(this.editListener, {
                layer: this,
                element: new VectorElement(undefined, dragInfo.getVectorElement()),
                position: fromNativeMapPos(dragInfo.getMapPos()),
                screenPosition: fromNativeScreenPos(dragInfo.getScreenPos()),
                dragMode: dragInfo.getDragMode()
            });
        }
        return com.massifmaps.layers.VectorElementDragResult.VECTOR_ELEMENT_DRAG_RESULT_IGNORE;
    }

    onDragMove(dragInfo: com.massifmaps.ui.VectorElementDragInfo): com.massifmaps.layers.VectorElementDragResult {
        if (this.editListener && this.editListener.onDragMove) {
            return this.editListener.onDragMove.call(this.editListener, {
                layer: this,
                element: new VectorElement(undefined, dragInfo.getVectorElement()),
                position: fromNativeMapPos(dragInfo.getMapPos()),
                screenPosition: fromNativeScreenPos(dragInfo.getScreenPos()),
                dragMode: dragInfo.getDragMode()
            });
        }
        return com.massifmaps.layers.VectorElementDragResult.VECTOR_ELEMENT_DRAG_RESULT_IGNORE;
    }

    onDragStart(dragInfo: com.massifmaps.ui.VectorElementDragInfo): com.massifmaps.layers.VectorElementDragResult {
        if (this.editListener && this.editListener.onDragStart) {
            return this.editListener.onDragStart.call(this.editListener, {
                layer: this,
                element: new VectorElement(undefined, dragInfo.getVectorElement()),
                position: fromNativeMapPos(dragInfo.getMapPos()),
                screenPosition: fromNativeScreenPos(dragInfo.getScreenPos()),
                dragMode: dragInfo.getDragMode()
            });
        }
        return com.massifmaps.layers.VectorElementDragResult.VECTOR_ELEMENT_DRAG_RESULT_IGNORE;
    }

    onElementDelete(element: com.massifmaps.vectorelements.VectorElement) {
        if (this.editListener && this.editListener.onElementDelete) {
            const el = new VectorElement(undefined, element);
            this.editListener.onElementDelete.call(this.editListener, el);
        }
    }

    onElementDeselected(element: com.massifmaps.vectorelements.VectorElement) {
        if (this.editListener && this.editListener.onElementDelete) {
            const el = new VectorElement(undefined, element);
            this.editListener.onElementDelete.call(this.editListener, el);
        }
    }

    onElementModify(element: com.massifmaps.vectorelements.VectorElement, geometry: com.massifmaps.geometry.Geometry) {
        if (this.editListener && this.editListener.onElementModify) {
            const el = new VectorElement(undefined, element);
            this.editListener.onElementModify.call(this.editListener, el, geometry);
        }
    }

    onElementSelect(element: com.massifmaps.vectorelements.VectorElement) {
        if (this.editListener && this.editListener.onElementSelect) {
            const el = new VectorElement(undefined, element);
            return this.editListener.onElementSelect.call(this.editListener, el);
        }
        return true;
    }

    onSelectDragPointStyle(element: com.massifmaps.vectorelements.VectorElement, dragPointStyle: com.massifmaps.layers.VectorElementDragPointStyle) {
        if (this.editListener && this.editListener.onElementSelect) {
            const el = new VectorElement(undefined, element);
            const styleBuilder = this.editListener.onSelectDragPointStyle.call(this.editListener, el);
            return styleBuilder ? styleBuilder.buildStyle() : null;
        }
        return null;
    }
}

export class ClusteredVectorLayer extends BaseVectorLayer<com.massifmaps.layers.ClusteredVectorLayer, ClusteredVectorLayerLayerOptions> {
    createNative(options: ClusteredVectorLayerLayerOptions) {
        return new com.massifmaps.layers.ClusteredVectorLayer(options.dataSource.getNative(), options.builder.getNative?.() || options.builder);
    }

    expandCluster(element: VectorElement<any, any>, px: number) {
        this.getNative().expandCluster(element.getNative(), px);
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

export interface BaseVectorTileLayer<T extends com.massifmaps.layers.VectorTileLayer, U extends VectorTileLayerOptions>
    extends Acc_BaseVectorTileLayer, Omit<Met_BaseVectorTileLayer, 'getTileDecoder' | 'setVectorTileEventListener'> {}
bindNative(BaseVectorTileLayer, MET_BaseVectorTileLayer, ACC_BaseVectorTileLayer, { selectors: SEL_BaseVectorTileLayer });

export interface BaseVectorLayer<T extends com.massifmaps.layers.VectorLayer, U extends VectorLayerOptions> extends Acc_BaseVectorLayer, Omit<Met_BaseVectorLayer, 'setVectorElementEventListener'> {}
bindNative(BaseVectorLayer, MET_BaseVectorLayer, ACC_BaseVectorLayer, { selectors: SEL_BaseVectorLayer });
