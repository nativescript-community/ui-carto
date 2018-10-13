import { TileDataSource } from '../datasources/datasource';
import { Layer, TileLayer, TileLayerOptions } from './layer';
import { CartoOfflineVectorTileLayerOptions, CartoOnlineVectorTileLayerOptions, VectorLayerOptions, VectorTileEventListener, VectorTileLayerOptions } from './vector';

import { BaseNative } from '../carto';
import { VectorDataSource } from '../datasources/vector';
import { VectorTileDecoder } from '../vectortiles/vectortiles';
import { CartoPackageManager } from '../packagemanager/packagemanager';
import { fromNativeMapPos } from '../core/core';

export enum VectorTileRenderOrder {
    HIDDEN,
    LAYER,
    LAST
}

class VectorTileEventListenerImpl extends com.akylas.carto.additions.AKVectorTileEventListener {
    private _owner: WeakRef<VectorTileEventListener>;
    private _layer: WeakRef<BaseVectorTileLayer<any, any>>;

    public static initWithOwner(owner: WeakRef<VectorTileEventListener>, layer: WeakRef<BaseVectorTileLayer<any, any>>): VectorTileEventListenerImpl {
        const delegate = new VectorTileEventListenerImpl() as VectorTileEventListenerImpl;
        delegate._owner = owner;
        delegate._layer = layer;
        return delegate;
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
            return owner.onVectorTileClicked({
                type: info.getClickType(),
                layer: this._layer.get() as any,
                featureId: info.getFeatureId(),
                featureData,
                featureLayerName: info.getFeatureLayerName(),
                pos: fromNativeMapPos(info.getClickPos())
            });
        }
        return false;
    }
}

export abstract class BaseVectorTileLayer<T extends com.carto.layers.VectorTileLayer, U extends TileLayerOptions> extends TileLayer<T, U> {
    setLabelRenderOrder(order: VectorTileRenderOrder) {
        this.getNative().setLabelRenderOrder(order as any);
    }
    setVectorTileEventListener(listener: VectorTileEventListener) {
        this.getNative().setVectorTileEventListener(VectorTileEventListenerImpl.initWithOwner(new WeakRef(listener), new WeakRef(this)));
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
        return new com.carto.layers.CartoOnlineVectorTileLayer(options.style as any);
    }
}
export class CartoOfflineVectorTileLayer extends TileLayer<com.carto.layers.CartoOfflineVectorTileLayer, CartoOfflineVectorTileLayerOptions> {
    createNative(options: CartoOfflineVectorTileLayerOptions) {
        return new com.carto.layers.CartoOfflineVectorTileLayer((options.packageManager as CartoPackageManager).getNative(), options.style as any);
    }
}

export class VectorLayer extends Layer<com.carto.layers.VectorLayer, VectorLayerOptions> {
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
class VectorElementEventListenerImpl extends com.carto.layers.VectorElementEventListener {
    private _owner: WeakRef<EditableVectorLayer>;

    public static initWithOwner(owner: WeakRef<EditableVectorLayer>): VectorElementEventListenerImpl {
        const delegate = new VectorElementEventListenerImpl() as VectorElementEventListenerImpl;
        delegate._owner = owner;
        return delegate;
    }

    onVectorElementClicked(clickInfo: com.carto.ui.VectorElementClickInfo): boolean {
        const owner = this._owner.get();
        console.log('onVectorElementClicked', clickInfo, owner);
        if (owner) {
            owner.setSelectedVectorElement(clickInfo.getVectorElement());
        }

        return true;
        // return super.onVectorElementClicked(clickInfo);
    }
}
export class EditableVectorLayer extends Layer<com.carto.layers.EditableVectorLayer, VectorLayerOptions> {
    createNative(options: VectorLayerOptions) {
        if (!!options.dataSource) {
            const dataSource = (options.dataSource as TileDataSource<any, any>).getNative();
            if (dataSource) {
                const result = new com.carto.layers.EditableVectorLayer((options.dataSource as VectorDataSource<any, any>).getNative());
                result.setVectorEditEventListener(VectorEditEventListenerImpl.initWithOwner(new WeakRef(this)));
                result.setVectorElementEventListener(VectorElementEventListenerImpl.initWithOwner(new WeakRef(this)));
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
