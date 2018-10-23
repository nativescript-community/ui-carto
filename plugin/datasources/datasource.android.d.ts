import { DataSourceOptions, MergeTileDataSourceOptions, OrderedTileDataSourceOptions, TileDataSourceOptions } from './datasource';
import { BaseNative } from '../carto.common';
export declare abstract class DataSource<T extends com.carto.datasources.TileDataSource, U extends DataSourceOptions> extends BaseNative<T, U> {
}
export declare abstract class TileDataSource<T extends com.carto.datasources.TileDataSource, U extends TileDataSourceOptions> extends BaseNative<T, U> {
}
export declare class OrderedTileDataSource extends TileDataSource<com.akylas.carto.additions.AKOrderedDataSource, OrderedTileDataSourceOptions> {
    createNative(options: OrderedTileDataSourceOptions): com.akylas.carto.additions.AKOrderedDataSource;
}
export declare class MergeTileDataSource extends TileDataSource<com.akylas.carto.additions.AKMergeTileDataSource, MergeTileDataSourceOptions> {
    createNative(options: MergeTileDataSourceOptions): com.akylas.carto.additions.AKMergeTileDataSource;
}
