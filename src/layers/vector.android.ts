import { nativeProperty } from '../carto.common';
import { BaseNative } from '../carto';
import { fromNativeMapPos } from '../core/core';
import { VectorDataSource } from '../datasources/vector';
import { Projection } from '../projections/projection';
import { nativeVariantToJS } from '../utils/utils';
import { VectorElement } from '../vectorelements/vectorelements';
import { MBVectorTileDecoder, VectorTileDecoder } from '../vectortiles/vectortiles';
import { Layer, TileLayer } from './layer';
import {
    CartoOfflineVectorTileLayerOptions,
    CartoOnlineVectorTileLayerOptions as ICartoOnlineVectorTileLayerOptions,
    ClusteredVectorLayerLayerOptions,
    VectorElementEventListener as IVectorElementEventListener,
    VectorLayerOptions,
    VectorTileEventListener as IVectorTileEventListener,
    VectorTileLayerOptions
} from './vector';

export { VectorTileDecoder }

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
    }
};

interface VectorTileEventListener extends com.akylas.carto.additions.AKVectorTileEventListener {
    // tslint:disable-next-line:no-misused-new
    new (owner: WeakRef<IVectorTileEventListener>, layer: WeakRef<BaseVectorTileLayer<any, any>>, projection?: Projection): VectorTileEventListener;
}
let VectorTileEventListener: VectorTileEventListener;
function initVectorTileEventListener() {
    if (VectorTileEventListener) {
        return;
    }
    class VectorTileEventListenerImpl extends com.akylas.carto.additions.AKVectorTileEventListener {
        private _owner: WeakRef<IVectorTileEventListener>;
        private _layer: WeakRef<BaseVectorTileLayer<any, any>>;

        constructor(owner: WeakRef<IVectorTileEventListener>, layer: WeakRef<BaseVectorTileLayer<any, any>>, private projection?: Projection) {
            super();
            this._owner = owner;
            this._layer = layer;
        }
        public onClicked(info: com.carto.ui.VectorTileClickInfo) {
            const owner = this._owner.get();
            if (owner && owner.onVectorTileClicked) {
                const feature = info.getFeature();
                const geometry = feature.getGeometry();
                let position = info.getClickPos();
                let featurePos = geometry.getCenterPos();

                if (this.projection) {
                    const layerProj = this._layer.get().getNative().getDataSource().getProjection();
                    const nProj = this.projection.getNative();
                    featurePos = nProj.fromWgs84(layerProj.toWgs84(featurePos));
                    position = nProj.fromWgs84(layerProj.toWgs84(position));
                }
                return (
                    owner.onVectorTileClicked({
                        type: info.getClickType(),
                        layer: this._layer.get() as any,
                        featureId: info.getFeatureId(),
                        featureData: nativeVariantToJS(info.getFeature().getProperties()),
                        featureLayerName: info.getFeatureLayerName(),
                        featureGeometry: geometry,
                        featurePosition: fromNativeMapPos(featurePos),
                        position: fromNativeMapPos(position)
                    }) || false
                );
            }
            return false;
        }
    }
    VectorTileEventListener = VectorTileEventListenerImpl as any;
}

interface VectorElementEventListener extends com.akylas.carto.additions.AKVectorElementEventListener {
    // tslint:disable-next-line:no-misused-new
    new (owner: WeakRef<IVectorElementEventListener>, layer: WeakRef<BaseVectorLayer<any, any>>, projection?: Projection): VectorElementEventListener;
}
let VectorElementEventListener: VectorElementEventListener;
function initVectorElementEventListener() {
    if (VectorElementEventListener) {
        return;
    }
    class VectorElementEventListenerImpl extends com.akylas.carto.additions.AKVectorElementEventListener {
        private _owner: WeakRef<IVectorElementEventListener>;
        private _layer: WeakRef<BaseVectorLayer<any, any>>;

        constructor(owner: WeakRef<IVectorElementEventListener>, layer: WeakRef<BaseVectorLayer<any, any>>, private projection?: Projection) {
            super();
            this._owner = owner;
            this._layer = layer;
        }
        public onClicked(info: com.carto.ui.VectorElementClickInfo) {
            const owner = this._owner.get();
            if (owner && owner.onVectorElementClicked) {
                const element = new VectorElement(undefined, info.getVectorElement());
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
                        type: info.getClickType(),
                        layer: this._layer.get() as any,
                        element,
                        metaData: element.metaData,
                        position: fromNativeMapPos(position),
                        elementPos: fromNativeMapPos(elementPos)
                    }) || false
                );
            }
            return false;
        }
    }
    VectorElementEventListener = VectorElementEventListenerImpl as any;
}

export abstract class BaseVectorTileLayer<T extends com.carto.layers.VectorTileLayer, U extends VectorTileLayerOptions> extends TileLayer<T, U> {
    setLabelRenderOrder(order: com.carto.layers.VectorTileRenderOrder) {
        this.getNative().setLabelRenderOrder(order);
    }
    setVectorTileEventListener(listener: IVectorTileEventListener, projection?: Projection) {
        if (listener) {
            initVectorTileEventListener();
            this.getNative().setVectorTileEventListener(new VectorTileEventListener(new WeakRef(listener), new WeakRef(this), projection));
        } else {
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
    setVectorElementEventListener(listener: IVectorElementEventListener, projection?: Projection) {
        if (listener) {
            initVectorElementEventListener();
            this.getNative().setVectorElementEventListener(new VectorElementEventListener(new WeakRef(listener), new WeakRef(this), projection));
        } else {
            this.getNative().setVectorElementEventListener(null);
        }
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

class VectorEditEventListenerImpl extends com.carto.layers.VectorEditEventListener {
    private _owner: WeakRef<EditableVectorLayer>;

    public static initWithOwner(owner: WeakRef<EditableVectorLayer>): VectorEditEventListenerImpl {
        const delegate = new VectorEditEventListenerImpl();
        delegate._owner = owner;
        return delegate;
    }

    onDragEnd(dragInfo: com.carto.ui.VectorElementDragInfo): com.carto.layers.VectorElementDragResult {
        console.log('onDragEnd', dragInfo);
        return com.carto.layers.VectorElementDragResult.VECTOR_ELEMENT_DRAG_RESULT_IGNORE;
    }

    onDragMove(dragInfo: com.carto.ui.VectorElementDragInfo): com.carto.layers.VectorElementDragResult {
        console.log('onDragMove', dragInfo);
        return com.carto.layers.VectorElementDragResult.VECTOR_ELEMENT_DRAG_RESULT_IGNORE;
    }

    onDragStart(dragInfo: com.carto.ui.VectorElementDragInfo): com.carto.layers.VectorElementDragResult {
        console.log('onDragStart', dragInfo);
        return com.carto.layers.VectorElementDragResult.VECTOR_ELEMENT_DRAG_RESULT_IGNORE;
    }

    onElementDelete(element: com.carto.vectorelements.VectorElement) {
        console.log('onElementDelete', element);
    }

    onElementDeselected(element: com.carto.vectorelements.VectorElement) {
        console.log('onElementDeselected', element);
    }

    // onElementModifyGeometry(element: NTVectorElement, geometry: NTGeometry) {
    //     console.log('onElementModifyGeometry', element);
    // }

    onElementSelect(element: com.carto.vectorelements.VectorElement) {
        console.log('onElementSelect', element);
        return true;
    }

    onSelectDragPointStyle(element: com.carto.vectorelements.VectorElement, dragPointStyle: com.carto.layers.VectorElementDragPointStyle) {
        console.log('onSelectDragPointStyleDragPointStyle', element, dragPointStyle);
        return null;
    }
}
// class VectorElementEventListenerImpl extends com.akylas.carto.additions.AKVectorElementEventListener {
//     private _owner: WeakRef<VectorLayer>;

//     public static initWithOwner(owner: WeakRef<EditableVectorLayer>): VectorElementEventListenerImpl {
//         const delegate = new VectorElementEventListenerImpl() as VectorElementEventListenerImpl;
//         delegate._owner = owner;
//         return delegate;
//     }

//     onVectorElementClicked(clickInfo: com.carto.ui.VectorElementClickInfo): boolean {
//         const owner = this._owner.get();
//         console.log('onVectorElementClicked', clickInfo, owner);
//         if (owner) {
//             owner.setSelectedVectorElement(clickInfo.getVectorElement());
//         }

//         return true;
//         // return super.onVectorElementClicked(clickInfo);
//     }
// }
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
}

export class ClusteredVectorLayer extends Layer<com.carto.layers.ClusteredVectorLayer, ClusteredVectorLayerLayerOptions> {
    createNative(options: ClusteredVectorLayerLayerOptions) {
        return new com.carto.layers.ClusteredVectorLayer(options.dataSource.getNative(), options.builder.getNative());
    }

    @nativeProperty
    minimumClusterDistance: number;
    @nativeProperty
    maximumClusterZoom: number;
    @nativeProperty({
        nativeGetterName: 'isAnimatedClusters'
    })
    animatedClusters: boolean;
}
