import { CombinedTileDataSourceOptions, DataSourceOptions, GeoJSONVectorTileDataSourceOptions, MergedMBVTTileDataSourceOptions, OrderedTileDataSourceOptions, TileDataSourceOptions } from '.';
import { BaseNative } from '../index.common';
import { Projection } from '../projections';
import { FeatureCollection } from '../geometry/feature';
import { JSVariantToNative, jsonVariant } from '../utils';
import { nativeProperty } from '..';

export abstract class DataSource<T extends com.carto.datasources.TileDataSource, U extends DataSourceOptions> extends BaseNative<T, U> {
    getProjection() {
        if (this['projection']) {
            return this['projection'];
        }
        return new Projection(undefined, this.getNative().getProjection());
    }
}
export class TileDataSource<T extends com.carto.datasources.TileDataSource, U extends TileDataSourceOptions> extends DataSource<T, U> {
    createNative(options) {
        return null;
    }

    loadTile(x, y, z): com.carto.datasources.components.TileData {
        return this.getNative().loadTile(new com.carto.core.MapTile(x, y, z, 0));
        // return (ArrayBuffer as any).from(java.nio.ByteBuffer.wrap(data.getData().getData()));
    }

    // get minZoom() {
    //     if (this.native) {
    //         return this.native.getMinZoom();
    //     }
    //     return this.options.minZoom;
    // }
    // get maxZoom() {
    //     if (this.native) {
    //         return this.native.getMaxZoom();
    //     }
    //     return this.options.maxZoom;
    // }
}

export class OrderedTileDataSource extends TileDataSource<com.carto.datasources.OrderedTileDataSource, OrderedTileDataSourceOptions> {
    createNative(options: OrderedTileDataSourceOptions) {
        const dataSources: com.carto.datasources.TileDataSource[] = options.dataSources.map((d) => d.getNative());
        return new com.carto.datasources.OrderedTileDataSource(dataSources[0], dataSources[1]);
    }
}
export class CombinedTileDataSource extends TileDataSource<com.carto.datasources.CombinedTileDataSource, CombinedTileDataSourceOptions> {
    createNative(options: CombinedTileDataSourceOptions) {
        const dataSources: com.carto.datasources.TileDataSource[] = options.dataSources.map((d) => d.getNative());
        return new com.carto.datasources.CombinedTileDataSource(dataSources[0], dataSources[1], options.zoomLevel);
    }
}

export class MergedMBVTTileDataSource extends TileDataSource<com.carto.datasources.MergedMBVTTileDataSource, MergedMBVTTileDataSourceOptions> {
    createNative(options: MergedMBVTTileDataSourceOptions) {
        const dataSources: com.carto.datasources.TileDataSource[] = options.dataSources.map((d) => d.getNative());
        return new com.carto.datasources.MergedMBVTTileDataSource(dataSources[0], dataSources[1]);
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
    setLayerGeoJSONString(layerIndex: number, geoJSON: string) {
        this.getNative().setLayerGeoJSON(layerIndex, jsonVariant(geoJSON));
    }
    deleteLayer(index: number) {
        this.getNative().deleteLayer(index);
    }
}
