import { DataSourceOptions, MergeTileDataSourceOptions, OrderedTileDataSourceOptions, TileDataSourceOptions } from './datasource';
import { BaseNative } from '../carto.common';

export abstract class DataSource<T extends com.carto.datasources.TileDataSource, U extends DataSourceOptions> extends BaseNative<T, U> {}
export abstract class TileDataSource<T extends com.carto.datasources.TileDataSource, U extends TileDataSourceOptions> extends BaseNative<T, U> {}

export class OrderedTileDataSource extends TileDataSource<com.carto.datasources.OrderedTileDataSource, OrderedTileDataSourceOptions> {
    createNative(options: OrderedTileDataSourceOptions) {
        const array: com.carto.datasources.TileDataSource[] = Array.create(com.carto.datasources.TileDataSource, options.dataSources.length);
        options.dataSources.forEach((d, i) => (array[i] = d.getNative()));
        return new com.carto.datasources.OrderedTileDataSource(array[0], array[1]);
    }
}

export class MergeTileDataSource extends TileDataSource<com.akylas.carto.additions.AKMergeTileDataSource, MergeTileDataSourceOptions> {
    createNative(options: MergeTileDataSourceOptions) {
        const array: com.carto.datasources.TileDataSource[] = Array.create(com.carto.datasources.TileDataSource, options.dataSources.length);
        options.dataSources.forEach((d, i) => (array[i] = d.getNative()));
        return new com.carto.datasources.MergedMBVTTileDataSource(array[0], array[1]);
    }
}
