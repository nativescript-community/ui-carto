import { TileDataSource } from '../datasources/datasource';
import { Layer, TileLayer } from './layer';
import {
    CartoOfflineVectorTileLayerOptions,
    CartoOnlineVectorTileLayerOptions,
    ClusteredVectorLayerLayerOptions,
    VectorElementEventListener as IVectorElementEventListener,
    VectorLayerOptions,
    VectorTileEventListener as IVectorTileEventListener,
    VectorTileLayerOptions
} from './vector';

import { BaseNative } from '../carto';
import { VectorDataSource } from '../datasources/vector';
import { MBVectorTileDecoder, VectorTileDecoder } from '../vectortiles/vectortiles';
import { CartoPackageManager } from '../packagemanager/packagemanager';
import { fromNativeMapPos } from '../core/core';
import { VectorElement } from '../vectorelements/vectorelements';
import { Projection } from '../projections/projection';

export enum VectorTileRenderOrder {
    HIDDEN,
    LAYER,
    LAST
}

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
                const featureData = {};
                const feature = info.getFeature();
                const variant = feature.getProperties();
                const keys = variant.getObjectKeys();
                let key, i;
                for (i = 0; i < keys.size(); i++) {
                    key = keys.get(i);
                    featureData[key] = variant.getObjectElement(key).getString();
                }
                return (
                    owner.onVectorTileClicked({
                        type: info.getClickType(),
                        layer: this._layer.get() as any,
                        featureId: info.getFeatureId(),
                        featureData,
                        featureLayerName: info.getFeatureLayerName(),
                        pos: this.projection ? fromNativeMapPos(this.projection.getNative().toWgs84(info.getClickPos())) : fromNativeMapPos(info.getClickPos())
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

                return (
                    owner.onVectorElementClicked({
                        type: info.getClickType(),
                        layer: this._layer.get() as any,
                        element,
                        metaData: element.metaData,
                        pos: this.projection ? fromNativeMapPos(this.projection.getNative().toWgs84(info.getClickPos())) : fromNativeMapPos(info.getClickPos()),
                        elementPos: this.projection ? fromNativeMapPos(this.projection.getNative().toWgs84(info.getElementClickPos())) : fromNativeMapPos(info.getElementClickPos())
                    }) || false
                );
            }
            return false;
        }
    }
    VectorElementEventListener = VectorElementEventListenerImpl as any;
}

export abstract class BaseVectorTileLayer<T extends com.carto.layers.VectorTileLayer, U extends VectorTileLayerOptions> extends TileLayer<T, U> {
    setLabelRenderOrder(order: VectorTileRenderOrder) {
        this.getNative().setLabelRenderOrder(order as any);
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
            const dataSource = (options.dataSource as TileDataSource<any, any>).getNative();
            const decoder = (options.decoder as VectorTileDecoder).getNative();
            if (dataSource && decoder) {
                return new com.carto.layers.VectorTileLayer((options.dataSource as TileDataSource<any, any>).getNative(), (options.decoder as VectorTileDecoder).getNative());
            }
        }
        return null;
    }
}

export class CartoOnlineVectorTileLayer extends BaseVectorTileLayer<com.carto.layers.CartoOnlineVectorTileLayer, CartoOnlineVectorTileLayerOptions> {
    createNative(options: CartoOnlineVectorTileLayerOptions) {
        return new com.carto.layers.CartoOnlineVectorTileLayer(com.carto.layers.CartoBaseMapStyle.values()[options.style]);
    }
}
export class CartoOfflineVectorTileLayer extends TileLayer<com.carto.layers.CartoOfflineVectorTileLayer, CartoOfflineVectorTileLayerOptions> {
    createNative(options: CartoOfflineVectorTileLayerOptions) {
        return new com.carto.layers.CartoOfflineVectorTileLayer((options.packageManager as CartoPackageManager).getNative(), com.carto.layers.CartoBaseMapStyle.values()[options.style]);
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
            const dataSource = (options.dataSource as TileDataSource<any, any>).getNative();
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
        const delegate = new VectorEditEventListenerImpl() as VectorEditEventListenerImpl;
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
    get minimumClusterDistance() {
        return this.options.minimumClusterDistance;
    }
    set minimumClusterDistance(value: number) {
        this.options.minimumClusterDistance = value;
        if (this.native) {
            this.native.setMinimumClusterDistance(value);
        }
    }
    get maximumClusterZoom() {
        return this.options.maximumClusterZoom;
    }
    set maximumClusterZoom(value: number) {
        this.options.maximumClusterZoom = value;
        if (this.native) {
            this.native.setMaximumClusterZoom(value);
        }
    }
    get animatedClusters() {
        return this.options.animatedClusters;
    }
    set animatedClusters(value: boolean) {
        this.options.animatedClusters = value;
        if (this.native) {
            this.native.setAnimatedClusters(value);
        }
    }
}
