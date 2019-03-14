import {
    CartoOfflineVectorTileLayerOptions,
    CartoOnlineVectorTileLayerOptions,
    ClusteredVectorLayerLayerOptions,
    VectorElementEventListener as IVectorElementEventListener,
    VectorLayerOptions,
    VectorTileEventListener as IVectorTileEventListener,
    VectorTileLayerOptions
} from './vector';
import { TileDataSource } from '../datasources/datasource';
import { Layer, TileLayer } from './layer';
import { BaseNative } from '../carto';
import { VectorDataSource } from '../datasources/vector';
import { MBVectorTileDecoder, VectorTileDecoder } from '../vectortiles/vectortiles';
import { CartoPackageManager } from '../packagemanager/packagemanager';
import { nativeProperty } from 'nativescript-carto/carto.common';
import { fromNativeMapPos } from '../core/core';
import { Projection } from '../projections/projection';
import { VectorElement } from '../vectorelements/vectorelements';
import { nativeVariantToJS } from '../utils/utils';

export class VectorElementEventListener extends NTVectorElementEventListener {
    private _layer: WeakRef<BaseVectorLayer<any, any>>;
    private _owner: WeakRef<IVectorElementEventListener>;
    private projection?: Projection;

    public static initWithOwner(owner: WeakRef<IVectorElementEventListener>, layer, projection?: Projection): VectorElementEventListener {
        const delegate = VectorElementEventListener.new() as VectorElementEventListener;
        delegate._owner = owner;
        delegate._layer = layer;
        delegate.projection = projection;
        return delegate;
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
                    position: this.projection ? fromNativeMapPos(this.projection.getNative().toWgs84(info.getClickPos())) : fromNativeMapPos(info.getClickPos()),
                    elementPos: this.projection ? fromNativeMapPos(this.projection.getNative().toWgs84(info.getElementClickPos())) : fromNativeMapPos(info.getElementClickPos())
                }) || false
            );
        }
        return false;
    }
}
export class VectorTileEventListener extends NTVectorTileEventListener {
    private _layer: WeakRef<BaseVectorLayer<any, any>>;
    private _owner: WeakRef<IVectorTileEventListener>;
    private projection?: Projection;

    public static initWithOwner(owner: WeakRef<IVectorTileEventListener>, layer, projection?: Projection): VectorTileEventListener {
        const delegate = VectorTileEventListener.new() as VectorTileEventListener;
        delegate._owner = owner;
        delegate._layer = layer;
        delegate.projection = projection;
        return delegate;
    }
    public onClicked(info: com.carto.ui.VectorTileClickInfo) {
        const owner = this._owner.get();
        if (owner && owner.onVectorTileClicked) {
            // const featureData = {};
            // const feature = info.getFeature();
            // const variant = feature.getProperties();
            // const keys = variant.getObjectKeys();
            // let key, i;
            // for (i = 0; i < keys.size(); i++) {
            //     key = keys.get(i);
            //     featureData[key] = variant.getObjectElement(key).getString();
            // }
            const feature = info.getFeature();
            const geometry = feature.getGeometry();
            const featurePos = geometry.getCenterPos();
            return (
                owner.onVectorTileClicked({
                    type: info.getClickType(),
                    layer: this._layer.get() as any,
                    featureId: info.getFeatureId(),
                    featureData: nativeVariantToJS(info.getFeature().getProperties()),
                    featureLayerName: info.getFeatureLayerName(),
                    featureGeometry: geometry,
                    featurePosition: this.projection ? fromNativeMapPos(this.projection.getNative().toWgs84(featurePos)) : fromNativeMapPos(featurePos),
                    position: this.projection ? fromNativeMapPos(this.projection.getNative().toWgs84(info.getClickPos())) : fromNativeMapPos(info.getClickPos())
                }) || false
            );
        }
        return false;
    }
}

export abstract class BaseVectorTileLayer<T extends NTVectorTileLayer, U extends VectorTileLayerOptions> extends TileLayer<T, U> {
    setVectorTileEventListener(listener: IVectorTileEventListener, projection?: Projection) {
        if (listener) {
            this.getNative().setVectorTileEventListener(VectorTileEventListener.initWithOwner(new WeakRef(listener), new WeakRef(this), projection));
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

export class CartoOnlineVectorTileLayer extends BaseVectorTileLayer<NTCartoOnlineVectorTileLayer, CartoOnlineVectorTileLayerOptions> {
    createNative(options: CartoOnlineVectorTileLayerOptions) {
        return NTCartoOnlineVectorTileLayer.alloc().initWithStyle(options.style as number);
    }
}
export class CartoOfflineVectorTileLayer extends BaseVectorTileLayer<NTCartoOfflineVectorTileLayer, CartoOfflineVectorTileLayerOptions> {
    createNative(options: CartoOfflineVectorTileLayerOptions) {
        return NTCartoOfflineVectorTileLayer.alloc().initWithPackageManagerStyle(options.packageManager.getNative(), options.style as number);
    }
}

export class VectorTileLayer extends TileLayer<NTVectorTileLayer, VectorTileLayerOptions> {
    createNative(options: VectorTileLayerOptions) {
        if (!!options.dataSource && !!options.decoder) {
            const dataSource = options.dataSource.getNative();
            const decoder = options.decoder.getNative();
            if (dataSource && decoder) {
                return NTVectorTileLayer.alloc().initWithDataSourceDecoder(options.dataSource.getNative(), options.decoder.getNative());
            }
        }
        return null;
    }
}
export abstract class BaseVectorLayer<T extends NTVectorLayer, U extends VectorLayerOptions> extends Layer<T, U> {
    // setVectorElementEventListener(listener: IVectorElementEventListener) {
    // initVectorElementEventListener();
    // this.getNative().setVectorElementEventListener(new VectorElementEventListener(new WeakRef(listener), new WeakRef(this)));
    // }
}
export class VectorLayer extends BaseVectorLayer<NTVectorLayer, VectorLayerOptions> {
    createNative(options: VectorLayerOptions) {
        if (!!options.dataSource) {
            const dataSource = options.dataSource.getNative();
            if (dataSource) {
                return NTVectorLayer.alloc().initWithDataSource((options.dataSource as VectorDataSource<any, any>).getNative());
            }
        }
        return null;
    }
}

class NTVectorEditEventListenerImpl extends NTVectorEditEventListener {
    private _owner: WeakRef<EditableVectorLayer>;

    public static initWithOwner(owner: WeakRef<EditableVectorLayer>): NTVectorEditEventListenerImpl {
        const delegate = NTVectorEditEventListenerImpl.new() as NTVectorEditEventListenerImpl;
        delegate._owner = owner;
        return delegate;
    }

    onDragEnd(dragInfo: NTVectorElementDragInfo): NTVectorElementDragResult {
        console.log('onDragEnd', dragInfo);
        return NTVectorElementDragResult.T_VECTOR_ELEMENT_DRAG_RESULT_IGNORE;
    }

    onDragMove(dragInfo: NTVectorElementDragInfo): NTVectorElementDragResult {
        console.log('onDragMove', dragInfo);
        return NTVectorElementDragResult.T_VECTOR_ELEMENT_DRAG_RESULT_IGNORE;
    }

    onDragStart(dragInfo: NTVectorElementDragInfo): NTVectorElementDragResult {
        console.log('onDragStart', dragInfo);
        return NTVectorElementDragResult.T_VECTOR_ELEMENT_DRAG_RESULT_IGNORE;
    }

    onElementDelete(element: NTVectorElement) {
        console.log('onElementDelete', element);
    }

    onElementDeselected(element: NTVectorElement) {
        console.log('onElementDeselected', element);
    }

    // onElementModifyGeometry(element: NTVectorElement, geometry: NTGeometry) {
    //     console.log('onElementModifyGeometry', element);
    // }

    onElementSelect(element: NTVectorElement) {
        console.log('onElementSelect', element);
        return true;
    }

    onSelectDragPointStyleDragPointStyle(element: NTVectorElement, dragPointStyle: NTVectorElementDragPointStyle) {
        console.log('onSelectDragPointStyleDragPointStyle', element, dragPointStyle);
        return null;
    }
}
// class NTVectorElementEventListenerImpl extends NTVectorElementEventListener {
//     private _owner: WeakRef<EditableVectorLayer>;

//     public static initWithOwner(owner: WeakRef<EditableVectorLayer>): NTVectorElementEventListenerImpl {
//         const delegate = NTVectorElementEventListenerImpl.new() as NTVectorElementEventListenerImpl;
//         delegate._owner = owner;
//         return delegate;
//     }

//     onVectorElementClicked(clickInfo: NTVectorElementClickInfo): boolean {
//         const owner = this._owner.get();
//         console.log('onVectorElementClicked', clickInfo, owner);
//         if (owner) {
//             owner.setSelectedVectorElement(clickInfo.getVectorElement());
//         }

//         return true;
//         // return super.onVectorElementClicked(clickInfo);
//     }
// }
export class EditableVectorLayer extends BaseVectorLayer<NTEditableVectorLayer, VectorLayerOptions> {
    createNative(options: VectorLayerOptions) {
        if (!!options.dataSource) {
            const dataSource = options.dataSource.getNative();
            if (dataSource) {
                const result = NTEditableVectorLayer.alloc().initWithDataSource((options.dataSource as VectorDataSource<any, any>).getNative());
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
}

export class ClusteredVectorLayer extends BaseVectorLayer<NTClusteredVectorLayer, ClusteredVectorLayerLayerOptions> {
    createNative(options: VectorLayerOptions) {
        return NTClusteredVectorLayer.alloc().initWithDataSource(options.dataSource.getNative());
    }

    @nativeProperty minimumClusterDistance: number;
    @nativeProperty maximumClusterZoom: number;
    @nativeProperty animatedClusters: boolean;
}
