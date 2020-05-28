import { BaseNative } from '..';
import { nativeProperty, nonenumerable } from '../index.common';
import { fromNativeMapPos, fromNativeScreenPos } from '../core';
import { VectorDataSource } from '../datasources/vector';
import { Projection } from '../projections';
import { nativeVariantToJS } from '../utils';
import { VectorElement } from '../vectorelements';
import { MBVectorTileDecoder, VectorTileDecoder } from '../vectortiles';
import { Layer, TileLayer } from '.';
import {
    CartoOfflineVectorTileLayerOptions,
    ClusteredVectorLayerLayerOptions,
    CartoOnlineVectorTileLayerOptions as ICartoOnlineVectorTileLayerOptions,
    VectorEditEventListener as IVectorEditEventListener,
    VectorElementEventListener as IVectorElementEventListener,
    VectorTileEventListener as IVectorTileEventListener,
    VectorLayerOptions,
    VectorTileLayerOptions,
} from './vector';

export { VectorTileDecoder };

export interface CartoOnlineVectorTileLayerOptions extends ICartoOnlineVectorTileLayerOptions {
    style: com.carto.layers.CartoBaseMapStyle;
}

export const VectorTileRenderOrder = {
    get HIDDEN() {
        return com.carto.layers.VectorTileRenderOrder.VECTOR_TILE_RENDER_ORDER_HIDDEN;
    },
    get LAYER() {
        return com.carto.layers.VectorTileRenderOrder.VECTOR_TILE_RENDER_ORDER_LAYER;
    },
    get LAST() {
        return com.carto.layers.VectorTileRenderOrder.VECTOR_TILE_RENDER_ORDER_LAST;
    },
};

export const VectorElementDragResult = {
    get IGNORE() {
        return com.carto.layers.VectorElementDragResult.VECTOR_ELEMENT_DRAG_RESULT_IGNORE;
    },
    get DELETE() {
        return com.carto.layers.VectorElementDragResult.VECTOR_ELEMENT_DRAG_RESULT_DELETE;
    },
    get MODIFY() {
        return com.carto.layers.VectorElementDragResult.VECTOR_ELEMENT_DRAG_RESULT_MODIFY;
    },
    get STOP() {
        return com.carto.layers.VectorElementDragResult.VECTOR_ELEMENT_DRAG_RESULT_STOP;
    },
};

export abstract class BaseVectorTileLayer<T extends com.carto.layers.VectorTileLayer, U extends VectorTileLayerOptions> extends TileLayer<T, U> {
    setLabelRenderOrder(order: com.carto.layers.VectorTileRenderOrder) {
        this.getNative().setLabelRenderOrder(order);
    }
    projection?: Projection;
    @nonenumerable listener?: IVectorTileEventListener;
    @nonenumerable nListener?: com.akylas.carto.additions.AKVectorTileEventListener;
    setVectorTileEventListener(listener: IVectorTileEventListener, projection?: Projection) {
        this.listener = listener;
        this.projection = projection;
        if (listener) {
            if (!this.nListener) {
                this.nListener = new com.akylas.carto.additions.AKVectorTileEventListener(
                    new com.akylas.carto.additions.AKVectorTileEventListener.Listener({
                        onVectorTileClicked: this.onTileClicked.bind(this),
                    })
                );
            }
            this.getNative().setVectorTileEventListener(this.nListener);
        } else {
            this.nListener = null;
            this.getNative().setVectorTileEventListener(null);
        }
    }
    onTileClicked(info: com.carto.ui.VectorTileClickInfo) {
        if (this.listener && this.listener.onVectorTileClicked) {
            const feature = info.getFeature();
            const geometry = feature.getGeometry();
            let position = info.getClickPos();
            let featurePos = geometry.getCenterPos();

            if (this.projection) {
                const layerProj = this.getNative().getDataSource().getProjection();
                const nProj = this.projection.getNative();
                featurePos = nProj.fromWgs84(layerProj.toWgs84(featurePos));
                position = nProj.fromWgs84(layerProj.toWgs84(position));
            }
            return (
                this.listener.onVectorTileClicked.call(this.listener, {
                    clickType: info.getClickType().swigValue(),
                    layer: this,
                    featureId: info.getFeatureId(),
                    featureData: nativeVariantToJS(info.getFeature().getProperties()),
                    featureLayerName: info.getFeatureLayerName(),
                    featureGeometry: geometry,
                    featurePosition: fromNativeMapPos(featurePos),
                    position: fromNativeMapPos(position),
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

export class VectorTileLayer extends BaseVectorTileLayer<com.carto.layers.VectorTileLayer, VectorTileLayerOptions> {
    createNative(options: VectorTileLayerOptions) {
        if (!!options.dataSource && !!options.decoder) {
            const dataSource = options.dataSource.getNative();
            const decoder = options.decoder.getNative();
            if (dataSource && decoder) {
                return new com.carto.layers.VectorTileLayer(dataSource, decoder);
            }
        }
        return null;
    }
}

export class CartoOnlineVectorTileLayer extends BaseVectorTileLayer<com.carto.layers.CartoOnlineVectorTileLayer, CartoOnlineVectorTileLayerOptions> {
    createNative(options: CartoOnlineVectorTileLayerOptions) {
        return new com.carto.layers.CartoOnlineVectorTileLayer(options.style as any);
    }
}
export class CartoOfflineVectorTileLayer extends TileLayer<com.carto.layers.CartoOfflineVectorTileLayer, CartoOfflineVectorTileLayerOptions> {
    createNative(options: CartoOfflineVectorTileLayerOptions) {
        return new com.carto.layers.CartoOfflineVectorTileLayer(options.packageManager.getNative(), options.style as any);
    }
}

export abstract class BaseVectorLayer<T extends com.carto.layers.VectorLayer, U extends VectorLayerOptions> extends Layer<T, U> {
    projection?: Projection;
    @nonenumerable elementListener?: IVectorElementEventListener;
    @nonenumerable nElementListener?: com.akylas.carto.additions.AKVectorElementEventListener;
    setVectorElementEventListener(listener: IVectorElementEventListener, projection?: Projection) {
        this.elementListener = listener;
        this.projection = projection;
        if (listener) {
            if (!this.nElementListener) {
                this.nElementListener = new com.akylas.carto.additions.AKVectorElementEventListener(
                    new com.akylas.carto.additions.AKVectorElementEventListener.Listener({
                        onVectorElementClicked: this.onElementClicked.bind(this),
                    })
                );
            }
            this.getNative().setVectorElementEventListener(this.nElementListener);
        } else {
            this.nElementListener = null;
            this.getNative().setVectorElementEventListener(null);
        }
    }
    onElementClicked(info: com.carto.ui.VectorElementClickInfo) {
        if (this.elementListener && this.elementListener.onVectorElementClicked) {
            const element = new VectorElement(undefined, info.getVectorElement());
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
                    metaData: element.metaData,
                    position: fromNativeMapPos(position),
                    elementPos: fromNativeMapPos(elementPos),
                }) || false
            );
        }
        return false;
    }
}

export class VectorLayer extends BaseVectorLayer<com.carto.layers.VectorLayer, VectorLayerOptions> {
    createNative(options: VectorLayerOptions) {
        if (!!options.dataSource) {
            const dataSource = options.dataSource.getNative();
            if (dataSource) {
                return new com.carto.layers.VectorLayer((options.dataSource as VectorDataSource<any, any>).getNative());
            }
        }
        return null;
    }
}

export class EditableVectorLayer extends BaseVectorLayer<com.carto.layers.EditableVectorLayer, VectorLayerOptions> {
    createNative(options: VectorLayerOptions) {
        if (!!options.dataSource) {
            const dataSource = options.dataSource.getNative();
            if (dataSource) {
                const result = new com.carto.layers.EditableVectorLayer((options.dataSource as VectorDataSource<any, any>).getNative());
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
    @nonenumerable editListener?: IVectorEditEventListener;
    @nonenumerable nEditListener?: com.akylas.carto.additions.AKVectorEditEventListener;
    projection?: Projection;
    setVectorEditEventListener(listener: IVectorEditEventListener, projection?: Projection) {
        this.editListener = listener;
        this.projection = projection;
        if (listener) {
            if (!this.nEditListener) {
                this.nEditListener = new com.akylas.carto.additions.AKVectorEditEventListener(
                    new com.akylas.carto.additions.AKVectorEditEventListener.Listener({
                        onDragEnd: this.onDragEnd.bind(this),
                        onDragMove: this.onDragMove.bind(this),
                        onDragStart: this.onDragStart.bind(this),
                        onElementDelete: this.onElementDelete.bind(this),
                        onElementDeselected: this.onElementDeselected.bind(this),
                        onElementModify: this.onElementModify.bind(this),
                        onElementSelect: this.onElementSelect.bind(this),
                        onSelectDragPointStyle: this.onSelectDragPointStyle.bind(this),
                    })
                );
            }
            this.getNative().setVectorEditEventListener(this.nEditListener);
        } else {
            this.nEditListener = null;
            this.getNative().setVectorEditEventListener(null);
        }
    }

    onDragEnd(dragInfo: com.carto.ui.VectorElementDragInfo): com.carto.layers.VectorElementDragResult {
        if (this.editListener && this.editListener.onDragEnd) {
            return this.editListener.onDragEnd.call(this.editListener, {
                layer: this,
                element: new VectorElement(undefined, dragInfo.getVectorElement()),
                position: fromNativeMapPos(dragInfo.getMapPos()),
                screenPosition: fromNativeScreenPos(dragInfo.getScreenPos()),
                dragMode: dragInfo.getDragMode().swigValue(),
            });
        }
        return com.carto.layers.VectorElementDragResult.VECTOR_ELEMENT_DRAG_RESULT_IGNORE;
    }

    onDragMove(dragInfo: com.carto.ui.VectorElementDragInfo): com.carto.layers.VectorElementDragResult {
        if (this.editListener && this.editListener.onDragMove) {
            return this.editListener.onDragMove.call(this.editListener, {
                layer: this,
                element: new VectorElement(undefined, dragInfo.getVectorElement()),
                position: fromNativeMapPos(dragInfo.getMapPos()),
                screenPosition: fromNativeScreenPos(dragInfo.getScreenPos()),
                dragMode: dragInfo.getDragMode().swigValue(),
            });
        }
        return com.carto.layers.VectorElementDragResult.VECTOR_ELEMENT_DRAG_RESULT_IGNORE;
    }

    onDragStart(dragInfo: com.carto.ui.VectorElementDragInfo): com.carto.layers.VectorElementDragResult {
        if (this.editListener && this.editListener.onDragStart) {
            return this.editListener.onDragStart.call(this.editListener, {
                layer: this,
                element: new VectorElement(undefined, dragInfo.getVectorElement()),
                position: fromNativeMapPos(dragInfo.getMapPos()),
                screenPosition: fromNativeScreenPos(dragInfo.getScreenPos()),
                dragMode: dragInfo.getDragMode().swigValue(),
            });
        }
        return com.carto.layers.VectorElementDragResult.VECTOR_ELEMENT_DRAG_RESULT_IGNORE;
    }

    onElementDelete(element: com.carto.vectorelements.VectorElement) {
        if (this.editListener && this.editListener.onElementDelete) {
            const el = new VectorElement(undefined, element);
            this.editListener.onElementDelete.call(this.editListener, el);
        }
    }

    onElementDeselected(element: com.carto.vectorelements.VectorElement) {
        if (this.editListener && this.editListener.onElementDelete) {
            const el = new VectorElement(undefined, element);
            this.editListener.onElementDelete.call(this.editListener, el);
        }
    }

    onElementModify(element: com.carto.vectorelements.VectorElement, geometry: com.carto.geometry.Geometry) {
        if (this.editListener && this.editListener.onElementModify) {
            const el = new VectorElement(undefined, element);
            this.editListener.onElementModify.call(this.editListener, el, geometry);
        }
    }

    onElementSelect(element: com.carto.vectorelements.VectorElement) {
        if (this.editListener && this.editListener.onElementSelect) {
            const el = new VectorElement(undefined, element);
            return this.editListener.onElementSelect.call(this.editListener, el);
        }
        return true;
    }

    onSelectDragPointStyle(element: com.carto.vectorelements.VectorElement, dragPointStyle: com.carto.layers.VectorElementDragPointStyle) {
        if (this.editListener && this.editListener.onElementSelect) {
            const el = new VectorElement(undefined, element);
            const styleBuilder = this.editListener.onSelectDragPointStyle.call(this.editListener, el);
            return styleBuilder ? styleBuilder.buildStyle() : null;
        }
        return null;
    }
}

export class ClusteredVectorLayer extends BaseVectorLayer<com.carto.layers.ClusteredVectorLayer, ClusteredVectorLayerLayerOptions> {
    createNative(options: ClusteredVectorLayerLayerOptions) {
        return new com.carto.layers.ClusteredVectorLayer(options.dataSource.getNative(), options.builder.getNative());
    }

    @nativeProperty
    minimumClusterDistance: number;
    @nativeProperty
    maximumClusterZoom: number;
    @nativeProperty({
        nativeGetterName: 'isAnimatedClusters',
    })
    animatedClusters: boolean;
}
