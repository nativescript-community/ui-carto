import { CartoOfflineVectorTileLayerOptions, CartoOnlineVectorTileLayerOptions, VectorLayerOptions, VectorTileLayerOptions } from './vector';
import { TileDataSource } from '../datasources/datasource';
import { Layer, TileLayer, TileLayerOptions } from './layer';
import { BaseNative } from '../carto';
import { VectorDataSource } from '../datasources/vector';
import { VectorTileDecoder } from '../vectortiles/vectortiles';
import { CartoPackageManager } from '../packagemanager/packagemanager';

export abstract class BaseVectorTileLayer<T, U extends TileLayerOptions> extends TileLayer<T, U> {

}

export class CartoOnlineVectorTileLayer extends BaseVectorTileLayer<NTCartoOnlineVectorTileLayer, CartoOnlineVectorTileLayerOptions> {
    createNative(options: CartoOnlineVectorTileLayerOptions) {
        return NTCartoOnlineVectorTileLayer.alloc().initWithStyle(options.style as number);
    }
}
export class CartoOfflineVectorTileLayer extends BaseVectorTileLayer<NTCartoOfflineVectorTileLayer, CartoOfflineVectorTileLayerOptions> {
    createNative(options: CartoOfflineVectorTileLayerOptions) {
        return NTCartoOfflineVectorTileLayer.alloc().initWithPackageManagerStyle((options.packageManager as CartoPackageManager).getNative(), options.style as number);
    }
}

export class VectorTileLayer extends TileLayer<NTVectorTileLayer, VectorTileLayerOptions> {
    createNative(options: VectorTileLayerOptions) {
        if (!!options.dataSource && !!options.decoder) {
            const dataSource = (options.dataSource as TileDataSource<any, any>).getNative();
            const decoder = (options.decoder as VectorTileDecoder).getNative();
            if (dataSource && decoder) {
                return NTVectorTileLayer.alloc().initWithDataSourceDecoder((options.dataSource as TileDataSource<any, any>).getNative(), (options.decoder as VectorTileDecoder).getNative());
            }
        }
        return null;
    }
}

export class VectorLayer extends Layer<NTVectorLayer, VectorLayerOptions> {
    createNative(options: VectorLayerOptions) {
        if (!!options.dataSource) {
            const dataSource = (options.dataSource as TileDataSource<any, any>).getNative();
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
class NTVectorElementEventListenerImpl extends NTVectorElementEventListener {
    private _owner: WeakRef<EditableVectorLayer>;

    public static initWithOwner(owner: WeakRef<EditableVectorLayer>): NTVectorElementEventListenerImpl {
        const delegate = NTVectorElementEventListenerImpl.new() as NTVectorElementEventListenerImpl;
        delegate._owner = owner;
        return delegate;
    }

    onVectorElementClicked(clickInfo: NTVectorElementClickInfo): boolean {
        const owner = this._owner.get();
        console.log('onVectorElementClicked', clickInfo, owner);
        if (owner) {
            owner.setSelectedVectorElement(clickInfo.getVectorElement());
        }

        return true;
        // return super.onVectorElementClicked(clickInfo);
    }
}
export class EditableVectorLayer extends Layer<NTEditableVectorLayer, VectorLayerOptions> {
    createNative(options: VectorLayerOptions) {
        if (!!options.dataSource) {
            const dataSource = (options.dataSource as TileDataSource<any, any>).getNative();
            if (dataSource) {
                const result = NTEditableVectorLayer.alloc().initWithDataSource((options.dataSource as VectorDataSource<any, any>).getNative());
                result.setVectorEditEventListener(NTVectorEditEventListenerImpl.initWithOwner(new WeakRef(this)));
                result.setVectorElementEventListener(NTVectorElementEventListenerImpl.initWithOwner(new WeakRef(this)));
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
