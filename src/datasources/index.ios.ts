import { BaseNative } from '../index.common';
import { DataSourceOptions, GeoJSONVectorTileDataSourceOptions, MergedMBVTTileDataSourceOptions, OrderedTileDataSourceOptions, TileDataSourceOptions } from '.';
import { JSVariantToNative } from 'nativescript-carto/utils';
import { FeatureCollection } from 'nativescript-carto/geometry/feature.ios';
import { Projection } from 'nativescript-carto/projections';

export abstract class DataSource<T extends NTTileDataSource, U extends DataSourceOptions> extends BaseNative<T, U> {}
export class TileDataSource<T extends NTTileDataSource, U extends TileDataSourceOptions> extends BaseNative<T, U> {
    createNative(options) {
        return null;
    }
}

export class OrderedTileDataSource extends TileDataSource<NTOrderedTileDataSource, OrderedTileDataSourceOptions> {
    createNative(options: OrderedTileDataSourceOptions) {
        const dataSources: NTTileDataSource[] = options.dataSources.map(d => d.getNative());
        return NTOrderedTileDataSource.alloc().initWithDataSource1DataSource2(dataSources[0], dataSources[1]);
    }
}

export class MergedMBVTTileDataSource extends TileDataSource<NTMergedMBVTTileDataSource, MergedMBVTTileDataSourceOptions> {
    createNative(options: MergedMBVTTileDataSourceOptions) {
        const dataSources: NTTileDataSource[] = options.dataSources.map(d => d.getNative());
        return NTMergedMBVTTileDataSource.alloc().initWithDataSource1DataSource2(dataSources[0], dataSources[1]);
    }
}

export class GeoJSONVectorTileDataSource extends TileDataSource<NTGeoJSONVectorTileDataSource, GeoJSONVectorTileDataSourceOptions> {
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
        this.getNative().setLayerFeatureCollectionProjectionFeatureCollection(layerIndex, projection ? projection.getNative() : null, featureCollection.getNative());
    }
    setLayerGeoJSON(layerIndex: number, geoJSON: Object) {
        this.getNative().setLayerGeoJSONGeoJSON(layerIndex, JSVariantToNative(geoJSON));
    }
}
