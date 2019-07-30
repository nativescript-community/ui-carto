import { DataSourceOptions, GeoJSONVectorTileDataSourceOptions, MergedMBVTTileDataSourceOptions, OrderedTileDataSourceOptions, TileDataSourceOptions } from './datasource';
import { BaseNative } from '../carto.common';
import { Projection } from 'nativescript-carto/projections/projection';
import { FeatureCollection } from 'nativescript-carto/geometry/feature';
import { JSVariantToNative } from 'nativescript-carto/utils/utils';

export abstract class DataSource<T extends com.carto.datasources.TileDataSource, U extends DataSourceOptions> extends BaseNative<T, U> {}
export class TileDataSource<T extends com.carto.datasources.TileDataSource, U extends TileDataSourceOptions> extends BaseNative<T, U> {
    createNative(options) {
        return null;
    }
}

export class OrderedTileDataSource extends TileDataSource<com.carto.datasources.OrderedTileDataSource, OrderedTileDataSourceOptions> {
    createNative(options: OrderedTileDataSourceOptions) {
        const array: com.carto.datasources.TileDataSource[] = Array.create(com.carto.datasources.TileDataSource, options.dataSources.length);
        options.dataSources.forEach((d, i) => (array[i] = d.getNative()));
        return new com.carto.datasources.OrderedTileDataSource(array[0], array[1]);
    }
}

export class MergedMBVTTileDataSource extends TileDataSource<com.carto.datasources.MergedMBVTTileDataSource, MergedMBVTTileDataSourceOptions> {
    createNative(options: MergedMBVTTileDataSourceOptions) {
        const array: com.carto.datasources.TileDataSource[] = Array.create(com.carto.datasources.TileDataSource, options.dataSources.length);
        options.dataSources.forEach((d, i) => (array[i] = d.getNative()));
        return new com.carto.datasources.MergedMBVTTileDataSource(array[0], array[1]);
    }
}

export class GeoJSONVectorTileDataSource extends TileDataSource<com.carto.datasources.GeoJSONVectorTileDataSource, GeoJSONVectorTileDataSourceOptions> {
    createNative(options: GeoJSONVectorTileDataSourceOptions) {
        return new com.carto.datasources.GeoJSONVectorTileDataSource(options.minZoom, options.maxZoom);
    }
    createLayer(name: string) {
        return this.getNative().createLayer(name);
    }
    setLayerFeatureCollection(layerIndex: number, projection: Projection, featureCollection: FeatureCollection) {
        this.getNative().setLayerFeatureCollection(layerIndex, projection ? projection.getNative() : null, featureCollection.getNative());
    }
    setLayerGeoJSON(layerIndex: number, geoJSON: Object) {
        this.getNative().setLayerGeoJSON(layerIndex, JSVariantToNative(geoJSON));
    }
    deleteLayer(index: number) {
        this.getNative().deleteLayer(index);
    }
}
