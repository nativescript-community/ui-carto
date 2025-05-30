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

export abstract class DataSource<T extends NTTileDataSource, U extends DataSourceOptions> extends BaseNative<T, U> {
    getProjection() {
        if (this['projection']) {
            return this['projection'];
        }
        return new Projection(undefined, this.getNative().getProjection());
    }
}
export class TileDataSource<T extends NTTileDataSource, U extends TileDataSourceOptions> extends DataSource<T, U> {
    @nativeProperty maxOverzoomLevel: number;
    createNative(options) {
        return null;
    }

    loadTile(x, y, z) {
        return this.getNative().loadTile(NTMapTile.alloc().initWithXYZoomFrameNr(x, y, z, 0));
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

export class OrderedTileDataSource extends TileDataSource<NTOrderedTileDataSource, OrderedTileDataSourceOptions> {
    createNative(options: OrderedTileDataSourceOptions) {
        const dataSources: NTTileDataSource[] = options.dataSources.map((d) => d.getNative());
        return NTOrderedTileDataSource.alloc().initWithDataSource1DataSource2(dataSources[0], dataSources[1]);
    }
}

export class CombinedTileDataSource extends TileDataSource<NTCombinedTileDataSource, CombinedTileDataSourceOptions> {
    createNative(options: CombinedTileDataSourceOptions) {
        const dataSources: NTTileDataSource[] = options.dataSources.map((d) => d.getNative());
        return NTCombinedTileDataSource.alloc().initWithDataSource1DataSource2ZoomLevel(dataSources[0], dataSources[1], options.zoomLevel);
    }
}
export class MergedMBVTTileDataSource extends TileDataSource<NTMergedMBVTTileDataSource, MergedMBVTTileDataSourceOptions> {
    createNative(options: MergedMBVTTileDataSourceOptions) {
        const dataSources: NTTileDataSource[] = options.dataSources.map((d) => d.getNative());
        return NTMergedMBVTTileDataSource.alloc().initWithDataSource1DataSource2(dataSources[0], dataSources[1]);
    }
}

export class GeoJSONVectorTileDataSource extends TileDataSource<NTGeoJSONVectorTileDataSource, GeoJSONVectorTileDataSourceOptions> {
    @nativeProperty simplifyTolerance: number;
    @nativeProperty defaultLayerBuffer: number;
    createNative(options: GeoJSONVectorTileDataSourceOptions) {
        return NTGeoJSONVectorTileDataSource.alloc().initWithMinZoomMaxZoom(options.minZoom, options.maxZoom);
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
    setLayerGeoJSON(layerIndex: number, geoJSON: Object) {
        this.getNative().setLayerGeoJSONGeoJSON(layerIndex, JSVariantToNative(geoJSON));
    }
    setLayerGeoJSONString(layerIndex: number, geoJSON: string | Object) {
        this.getNative().setLayerGeoJSONStringGeoJSON(layerIndex, typeof geoJSON === 'string' ? geoJSON : JSON.stringify(geoJSON));
    }

    addGeoJSONFeature(layerIndex: number, geoJSON: Object) {
        this.getNative().addGeoJSONFeatureGeoJSON(layerIndex, JSVariantToNative(geoJSON));
    }
    addGeoJSONStringFeature(layerIndex: number, geoJSON: string | Object) {
        this.getNative().addGeoJSONStringFeatureGeoJSON(layerIndex, typeof geoJSON === 'string' ? geoJSON : JSON.stringify(geoJSON));
    }
    updateGeoJSONFeature(layerIndex: number, geoJSON: Object) {
        this.getNative().updateGeoJSONFeatureGeoJSON(layerIndex, JSVariantToNative(geoJSON));
    }
    updateGeoJSONStringFeature(layerIndex: number, geoJSON: string | Object) {
        this.getNative().updateGeoJSONStringFeatureGeoJSON(layerIndex, typeof geoJSON === 'string' ? geoJSON : JSON.stringify(geoJSON));
    }
}

export class MultiTileDataSource extends TileDataSource<NTMultiTileDataSource, MultiTileDataSourceOptions> {
    createNative(options: MultiTileDataSourceOptions) {
        if (options.maxOpenedPackages) {
            return NTMultiTileDataSource.alloc().initWithMaxOpenedPackages(options.maxOpenedPackages);
        } else {
            return NTMultiTileDataSource.alloc().init();
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
