import { BaseNative } from '../carto.common';
import { DataSourceOptions, OrderedTileDataSourceOptions, TileDataSourceOptions } from './datasource';
export declare abstract class DataSource<T extends NTTileDataSource, U extends DataSourceOptions> extends BaseNative<T, U> {
}
export declare abstract class TileDataSource<T extends NTTileDataSource, U extends TileDataSourceOptions> extends BaseNative<T, U> {
}
export declare class OrderedTileDataSource extends TileDataSource<NTOrderedTileDataSource, OrderedTileDataSourceOptions> {
    createNative(options: OrderedTileDataSourceOptions): NTOrderedTileDataSource;
}
