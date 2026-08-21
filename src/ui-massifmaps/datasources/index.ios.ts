import { bindNative } from '../nativeclass.common';
import { ACCESSORS as TDS_ACC, METHODS as TDS_MET, SELECTORS as TDS_SEL, Accessors as TdsAcc } from '../bindings/datasources/TileDataSource';
import { ACCESSORS as GEO_ACC, METHODS as GEO_MET, SELECTORS as GEO_SEL, Accessors as GeoAcc } from '../bindings/datasources/GeoJSONVectorTileDataSource';
import {
    CombinedTileDataSourceOptions,
    DataSourceOptions,
    GeoJSONVectorTileDataSourceOptions,
    MergedMBVTTileDataSourceOptions,
    MultiTileDataSourceOptions,
    OrderedTileDataSourceOptions,
    TileDataSourceOptions
} from '.';
import { featureCollectionFromArgs, nativeProperty } from '..';
import { FeatureCollection } from '../geometry/feature';
import { BaseNative } from '../BaseNative';
import { Projection } from '../projections';
import { JSVariantToNative, jsonVariant } from '../utils';
import {
    ACCESSORS as ACC_MergedMBVTTileDataSource,
    Accessors as Acc_MergedMBVTTileDataSource,
    METHODS as MET_MergedMBVTTileDataSource,
    Methods as Met_MergedMBVTTileDataSource,
    SELECTORS as SEL_MergedMBVTTileDataSource
} from '../bindings/datasources/MergedMBVTTileDataSource';
import {
    ACCESSORS as ACC_MultiTileDataSource,
    Accessors as Acc_MultiTileDataSource,
    METHODS as MET_MultiTileDataSource,
    Methods as Met_MultiTileDataSource,
    SELECTORS as SEL_MultiTileDataSource
} from '../bindings/datasources/MultiTileDataSource';
import {
    ACCESSORS as ACC_OrderedTileDataSource,
    Accessors as Acc_OrderedTileDataSource,
    METHODS as MET_OrderedTileDataSource,
    Methods as Met_OrderedTileDataSource,
    SELECTORS as SEL_OrderedTileDataSource
} from '../bindings/datasources/OrderedTileDataSource';
import {
    ACCESSORS as ACC_CombinedTileDataSource,
    Accessors as Acc_CombinedTileDataSource,
    METHODS as MET_CombinedTileDataSource,
    Methods as Met_CombinedTileDataSource,
    SELECTORS as SEL_CombinedTileDataSource
} from '../bindings/datasources/CombinedTileDataSource';
import { ACCESSORS as ACC_DataSource, Accessors as Acc_DataSource, METHODS as MET_DataSource, Methods as Met_DataSource, SELECTORS as SEL_DataSource } from '../bindings/datasources/TileDataSource';

export abstract class DataSource<T extends MSFTileDataSource, U extends DataSourceOptions> extends BaseNative<T, U> {
    getProjection() {
        if (this['projection']) {
            return this['projection'];
        }
        return new Projection(undefined, this.getNative().getProjection());
    }
}
export class TileDataSource<T extends MSFTileDataSource, U extends TileDataSourceOptions> extends DataSource<T, U> {
    createNative(options) {
        return null;
    }

    loadTile(x, y, z) {
        return this.getNative().loadTile(MSFMapTile.alloc().initWithXYZoomFrameNr(x, y, z, 0));
        // return interop.bufferFromData(NSData.dataWithBytesLength(data.getData().getData() as any, data.getData().size()));
    }
    get minZoom() {
        if (this.options.minZoom) {
            return this.options.minZoom;
        }
        return this.getNative().getMinZoom();
    }
    set minZoom(value) {
        this.options.minZoom = value;
    }
    get maxZoom() {
        if (this.options.maxZoom) {
            return this.options.maxZoom;
        }
        return this.getNative().getMaxZoom();
    }
    set maxZoom(value) {
        this.options.maxZoom = value;
    }
}

export class OrderedTileDataSource extends TileDataSource<MSFOrderedTileDataSource, OrderedTileDataSourceOptions> {
    createNative(options: OrderedTileDataSourceOptions) {
        const dataSources: MSFTileDataSource[] = options.dataSources.map((d) => d.getNative());
        return MSFOrderedTileDataSource.alloc().initWithDataSource1DataSource2(dataSources[0], dataSources[1]);
    }
}

export class CombinedTileDataSource extends TileDataSource<MSFCombinedTileDataSource, CombinedTileDataSourceOptions> {
    createNative(options: CombinedTileDataSourceOptions) {
        const dataSources: MSFTileDataSource[] = options.dataSources.map((d) => d.getNative());
        return MSFCombinedTileDataSource.alloc().initWithDataSource1DataSource2ZoomLevel(dataSources[0], dataSources[1], options.zoomLevel);
    }
}
export class MergedMBVTTileDataSource extends TileDataSource<MSFMergedMBVTTileDataSource, MergedMBVTTileDataSourceOptions> {
    createNative(options: MergedMBVTTileDataSourceOptions) {
        const dataSources: MSFTileDataSource[] = options.dataSources.map((d) => d.getNative());
        return MSFMergedMBVTTileDataSource.alloc().initWithDataSource1DataSource2(dataSources[0], dataSources[1]);
    }
}

export class GeoJSONVectorTileDataSource extends TileDataSource<MSFGeoJSONVectorTileDataSource, GeoJSONVectorTileDataSourceOptions> {
    createNative(options: GeoJSONVectorTileDataSourceOptions) {
        return MSFGeoJSONVectorTileDataSource.alloc().initWithMinZoomMaxZoom(options.minZoom, options.maxZoom);
    }

    createLayer(name: string) {
        return this.getNative().createLayer(name);
    }
    deleteLayer(index: number) {
        this.getNative().deleteLayer(index);
    }
    setLayerFeatureCollection(layerIndex: number, projection: Projection, featureCollection: FeatureCollection) {
        this.getNative().setLayerFeatureCollectionProjectionFeatureCollection(layerIndex, projection?.getNative(), featureCollectionFromArgs(featureCollection));
    }
    setLayerGeoJSON(layerIndex: number, geoJSON: object) {
        this.getNative().setLayerGeoJSONGeoJSON(layerIndex, JSVariantToNative(geoJSON));
    }
    setLayerGeoJSONString(layerIndex: number, geoJSON: string | object) {
        this.getNative().setLayerGeoJSONStringGeoJSON(layerIndex, typeof geoJSON === 'string' ? geoJSON : JSON.stringify(geoJSON));
    }

    addGeoJSONFeature(layerIndex: number, geoJSON: object) {
        this.getNative().addGeoJSONFeatureGeoJSON(layerIndex, JSVariantToNative(geoJSON));
    }
    addGeoJSONStringFeature(layerIndex: number, geoJSON: string | object) {
        this.getNative().addGeoJSONStringFeatureGeoJSON(layerIndex, typeof geoJSON === 'string' ? geoJSON : JSON.stringify(geoJSON));
    }
    updateGeoJSONFeature(layerIndex: number, geoJSON: object) {
        this.getNative().updateGeoJSONFeatureGeoJSON(layerIndex, JSVariantToNative(geoJSON));
    }
    updateGeoJSONStringFeature(layerIndex: number, geoJSON: string | object) {
        this.getNative().updateGeoJSONStringFeatureGeoJSON(layerIndex, typeof geoJSON === 'string' ? geoJSON : JSON.stringify(geoJSON));
    }
    removeGeoJSONFeature(layerIndex: number, id: string | number) {
        this.getNative().removeGeoJSONFeatureArg2(layerIndex, JSVariantToNative(id));
    }
}

export class MultiTileDataSource extends TileDataSource<MSFMultiTileDataSource, MultiTileDataSourceOptions> {
    createNative(options: MultiTileDataSourceOptions) {
        if (options.maxOpenedPackages) {
            return MSFMultiTileDataSource.alloc().initWithMaxOpenedPackages(options.maxOpenedPackages);
        } else {
            return MSFMultiTileDataSource.alloc().init();
        }
    }
    add(source: TileDataSource<any, any>, tileMask?: string) {
        if (tileMask) {
            this.getNative().addTileMask(source.getNative(), tileMask);
        } else {
            this.getNative().add(source.getNative());
        }
    }
    remove(source: TileDataSource<any, any>) {
        if (this.native) {
            this.getNative().remove(source.getNative());
        }
    }
}

export interface TileDataSource<T extends MSFTileDataSource, U extends TileDataSourceOptions> extends TdsAcc {}
bindNative(TileDataSource, TDS_MET, TDS_ACC, { selectors: TDS_SEL });

export interface GeoJSONVectorTileDataSource extends GeoAcc {}
bindNative(GeoJSONVectorTileDataSource, GEO_MET, GEO_ACC, { selectors: GEO_SEL });

export interface MergedMBVTTileDataSource extends Acc_MergedMBVTTileDataSource, Omit<Met_MergedMBVTTileDataSource, 'loadTile'> {}
bindNative(MergedMBVTTileDataSource, MET_MergedMBVTTileDataSource, ACC_MergedMBVTTileDataSource, { selectors: SEL_MergedMBVTTileDataSource });

export interface MultiTileDataSource extends Acc_MultiTileDataSource, Omit<Met_MultiTileDataSource, 'add' | 'loadTile' | 'remove'> {}
bindNative(MultiTileDataSource, MET_MultiTileDataSource, ACC_MultiTileDataSource, { selectors: SEL_MultiTileDataSource });

export interface OrderedTileDataSource extends Acc_OrderedTileDataSource, Omit<Met_OrderedTileDataSource, 'loadTile'> {}
bindNative(OrderedTileDataSource, MET_OrderedTileDataSource, ACC_OrderedTileDataSource, { selectors: SEL_OrderedTileDataSource });

export interface CombinedTileDataSource extends Acc_CombinedTileDataSource, Omit<Met_CombinedTileDataSource, 'loadTile'> {}
bindNative(CombinedTileDataSource, MET_CombinedTileDataSource, ACC_CombinedTileDataSource, { selectors: SEL_CombinedTileDataSource });
