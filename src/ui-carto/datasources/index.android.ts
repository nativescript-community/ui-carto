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

export abstract class DataSource<T extends com.carto.datasources.TileDataSource, U extends DataSourceOptions> extends BaseNative<T, U> {
    getProjection() {
        if (this['projection']) {
            return this['projection'];
        }
        return new Projection(undefined, this.getNative().getProjection());
    }
}
export class TileDataSource<T extends com.carto.datasources.TileDataSource, U extends TileDataSourceOptions> extends DataSource<T, U> {
    @nativeProperty maxOverzoomLevel: number;
    createNative(options) {
        return null;
    }

    loadTile(x, y, z): com.carto.datasources.components.TileData {
        return this.getNative().loadTile(new com.carto.core.MapTile(x, y, z, 0));
        // return (ArrayBuffer as any).from(java.nio.ByteBuffer.wrap(data.getData().getData()));
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
    @nativeProperty simplifyTolerance: number;
    @nativeProperty defaultLayerBuffer: number;
    createNative(options: GeoJSONVectorTileDataSourceOptions) {
        return new com.carto.datasources.GeoJSONVectorTileDataSource(options.minZoom, options.maxZoom);
    }
    createLayer(name: string) {
        return this.getNative().createLayer(name);
    }
    setLayerFeatureCollection(layerIndex: number, projection: Projection, featureCollection: FeatureCollection) {
        this.getNative().setLayerFeatureCollection(layerIndex, projection?.getNative(), featureCollectionFromArgs(featureCollection));
    }
    setLayerGeoJSON(layerIndex: number, geoJSON: Object) {
        this.getNative().setLayerGeoJSON(layerIndex, JSVariantToNative(geoJSON));
    }
    setLayerGeoJSONString(layerIndex: number, geoJSON: string | Object) {
        this.getNative().setLayerGeoJSONString(layerIndex, typeof geoJSON === 'string' ? geoJSON : JSON.stringify(geoJSON));
    }

    addGeoJSONFeature(layerIndex: number, geoJSON: Object) {
        this.getNative().addGeoJSONFeature(layerIndex, JSVariantToNative(geoJSON));
    }
    addGeoJSONStringFeature(layerIndex: number, geoJSON: string | Object) {
        this.getNative().addGeoJSONStringFeature(layerIndex, typeof geoJSON === 'string' ? geoJSON : JSON.stringify(geoJSON));
    }
    updateGeoJSONFeature(layerIndex: number, geoJSON: Object) {
        this.getNative().updateGeoJSONFeature(layerIndex, JSVariantToNative(geoJSON));
    }
    updateGeoJSONStringFeature(layerIndex: number, geoJSON: string | Object) {
        this.getNative().updateGeoJSONStringFeature(layerIndex, typeof geoJSON === 'string' ? geoJSON : JSON.stringify(geoJSON));
    }
    deleteLayer(index: number) {
        this.getNative().deleteLayer(index);
    }
    removeGeoJSONFeature(layerIndex: number, id: string | number) {
        this.getNative().removeGeoJSONFeature(layerIndex, JSVariantToNative(id));
    }
}

export class MultiTileDataSource extends TileDataSource<com.carto.datasources.MultiTileDataSource, MultiTileDataSourceOptions> {
    createNative(options: MultiTileDataSourceOptions) {
        if (options.maxOpenedPackages) {
            return new com.carto.datasources.MultiTileDataSource(options.maxOpenedPackages);
        } else {
            return new com.carto.datasources.MultiTileDataSource();
        }
    }
    add(source: TileDataSource<any, any>, tileMask?: string) {
        if (tileMask) {
            this.getNative().add(source.getNative(), tileMask);
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
