import { CartoOfflineVectorTileLayerOptions, CartoOnlineVectorTileLayerOptions, ClusteredVectorLayerLayerOptions, VectorLayerOptions, VectorTileLayerOptions } from './vector';
import { TileDataSource } from '../datasources/datasource';
import { Layer, TileLayer } from './layer';
import { BaseNative } from '../carto';
import { VectorDataSource } from '../datasources/vector';
import { MBVectorTileDecoder, VectorTileDecoder } from '../vectortiles/vectortiles';
import { CartoPackageManager } from '../packagemanager/packagemanager';

export abstract class BaseVectorTileLayer<T extends NTVectorTileLayer, U extends VectorTileLayerOptions> extends TileLayer<T, U> {
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
export abstract class BaseVectorLayer<T extends NTVectorLayer, U extends VectorLayerOptions> extends Layer<T, U> {
    // setVectorElementEventListener(listener: IVectorElementEventListener) {
        // initVectorElementEventListener();
        // this.getNative().setVectorElementEventListener(new VectorElementEventListener(new WeakRef(listener), new WeakRef(this)));
    // }
}
export class VectorLayer extends BaseVectorLayer<NTVectorLayer, VectorLayerOptions> {
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
            const dataSource = (options.dataSource as TileDataSource<any, any>).getNative();
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
