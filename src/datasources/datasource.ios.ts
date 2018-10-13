import { BaseNative } from '../carto.common';
import { DataSourceOptions, TileDataSourceOptions } from './datasource';

export abstract class DataSource<T extends NTTileDataSource, U extends DataSourceOptions> extends BaseNative<T, U> {}
export abstract class TileDataSource<T extends NTTileDataSource, U extends TileDataSourceOptions> extends BaseNative<T, U> {}
