import { Layer, TileLayer } from '.';
import { BaseNative, nativeProperty } from '..';
import { fromNativeMapPos } from '../core';
import { Projection } from '../projections';
import { nativeVariantToJS } from '../utils';
import { VectorElement } from '../vectorelements';
import { MBVectorTileDecoder } from '../vectortiles';
import {
    CartoOfflineVectorTileLayerOptions,
    CartoOnlineVectorTileLayerOptions,
    ClusteredVectorLayerLayerOptions,
    VectorElementEventListener as IVectorElementEventListener,
    VectorTileEventListener as IVectorTileEventListener,
    VectorTileRenderOrder as IVectorTileRenderOrder,
    VectorLayerOptions,
    VectorTileLayerOptions,
} from './vector';

export enum VectorTileRenderOrder {
    HIDDEN = NTVectorTileRenderOrder.T_VECTOR_TILE_RENDER_ORDER_HIDDEN,
    LAYER = NTVectorTileRenderOrder.T_VECTOR_TILE_RENDER_ORDER_LAYER,
    LAST = NTVectorTileRenderOrder.T_VECTOR_TILE_RENDER_ORDER_LAST,
}

export enum VectorElementDragResult {
    IGNORE = NTVectorElementDragResult.T_VECTOR_ELEMENT_DRAG_RESULT_IGNORE,
    STOP = NTVectorElementDragResult.T_VECTOR_ELEMENT_DRAG_RESULT_STOP,
    MODIFY = NTVectorElementDragResult.T_VECTOR_ELEMENT_DRAG_RESULT_MODIFY,
    DELETE = NTVectorElementDragResult.T_VECTOR_ELEMENT_DRAG_RESULT_DELETE,
}

@NativeClass
export class NTVectorElementEventListenerImpl extends NTVectorElementEventListener {
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
    public onVectorElementClicked(info: NTVectorElementClickInfo) {
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
                    clickType: info.getClickType() as any,
                    layer: this._layer.get() as any,
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

let geojsonWriter: NTGeoJSONGeometryWriter;
function getGeojsonWriter() {
    if (!geojsonWriter) {
        geojsonWriter = NTGeoJSONGeometryWriter.alloc().init();
    }
    return geojsonWriter;
}

@NativeClass
export class NTVectorTileEventListenerImpl extends NTVectorTileEventListener {
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
    public onVectorTileClicked(info: NTVectorTileClickInfo) {
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
            let position = info.getClickPos();
            let featurePos = geometry.getCenterPos();

            let projection: NTProjection;
            const dataSourceProjection = this._layer.get().getNative().getDataSource().getProjection();
            if (this.projection) {
                projection = this.projection.getNative();
                featurePos = projection.fromWgs84(dataSourceProjection.toWgs84(featurePos));
                position = projection.fromWgs84(dataSourceProjection.toWgs84(position));
            }
            const geoFeature = {
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
                },
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
                    featurePosition: fromNativeMapPos(featurePos),
                    position: fromNativeMapPos(position),
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

    setVectorTileEventListener(listener: IVectorTileEventListener, projection?: Projection) {
        if (listener) {
            this.getNative().setVectorTileEventListener(NTVectorTileEventListenerImpl.initWithOwner(new WeakRef(listener), new WeakRef(this), projection));
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
    // setVectorElementEventListener(listener: IVectorElementEventListener) {
    // initVectorElementEventListener();
    // this.getNative().setVectorElementEventListener(new VectorElementEventListener(new WeakRef(listener), new WeakRef(this)));
    // }
    setVectorElementEventListener(listener: IVectorElementEventListener, projection?: Projection) {
        if (listener) {
            this.getNative().setVectorElementEventListener(NTVectorElementEventListenerImpl.initWithOwner(new WeakRef(listener), new WeakRef(this), projection));
        } else {
            this.getNative().setVectorElementEventListener(null);
        }
    }
}
export class VectorLayer extends BaseVectorLayer<NTVectorLayer, VectorLayerOptions> {
    createNative(options: VectorLayerOptions) {
        if (!!options.dataSource) {
            const dataSource = options.dataSource.getNative();
            if (dataSource) {
                return NTVectorLayer.alloc().initWithDataSource(options.dataSource.getNative());
            }
        }
        return null;
    }
}

@NativeClass
class NTVectorEditEventListenerImpl extends NTVectorEditEventListener {
    private _owner: WeakRef<EditableVectorLayer>;

    public static initWithOwner(owner: WeakRef<EditableVectorLayer>): NTVectorEditEventListenerImpl {
        const delegate = NTVectorEditEventListenerImpl.new() as NTVectorEditEventListenerImpl;
        delegate._owner = owner;
        return delegate;
    }

    onDragEnd(dragInfo: NTVectorElementDragInfo): NTVectorElementDragResult {
        return NTVectorElementDragResult.T_VECTOR_ELEMENT_DRAG_RESULT_IGNORE;
    }

    onDragMove(dragInfo: NTVectorElementDragInfo): NTVectorElementDragResult {
        return NTVectorElementDragResult.T_VECTOR_ELEMENT_DRAG_RESULT_IGNORE;
    }

    onDragStart(dragInfo: NTVectorElementDragInfo): NTVectorElementDragResult {
        return NTVectorElementDragResult.T_VECTOR_ELEMENT_DRAG_RESULT_IGNORE;
    }

    onElementDelete(element: NTVectorElement) {}

    onElementDeselected(element: NTVectorElement) {}

    // onElementModifyGeometry(element: NTVectorElement, geometry: NTGeometry) {
    //     console.log('onElementModifyGeometry', element);
    // }

    onElementSelect(element: NTVectorElement) {
        return true;
    }

    onSelectDragPointStyleDragPointStyle(element: NTVectorElement, dragPointStyle: NTVectorElementDragPointStyle) {
        return null;
    }
}
export class EditableVectorLayer extends BaseVectorLayer<NTEditableVectorLayer, VectorLayerOptions> {
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
}

export class ClusteredVectorLayer extends BaseVectorLayer<NTClusteredVectorLayer, ClusteredVectorLayerLayerOptions> {
    createNative(options: VectorLayerOptions) {
        return NTClusteredVectorLayer.alloc().initWithDataSource(options.dataSource.getNative());
    }

    @nativeProperty minimumClusterDistance: number;
    @nativeProperty maximumClusterZoom: number;
    @nativeProperty({
        nativeGetterName: 'isAnimatedClusters',
    })
    animatedClusters: boolean;
}
