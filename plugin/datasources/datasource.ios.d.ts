import { BaseNative } from '../carto.common';
import { DataSourceOptions, TileDataSourceOptions } from './datasource';
export declare abstract class DataSource<T extends NTTileDataSource, U extends DataSourceOptions> extends BaseNative<T, U> {
}
export declare abstract class TileDataSource<T extends NTTileDataSource, U extends TileDataSourceOptions> extends BaseNative<T, U> {
}
