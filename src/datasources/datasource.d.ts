import { BaseNative } from '../carto';

export interface DataSourceOptions {
    minZoom?: number;
    maxZoom?: number;
}
export interface TileDataSourceOptions extends DataSourceOptions {}
export abstract class DataSource<T, U extends DataSourceOptions> extends BaseNative<T, U> {}
export class TileDataSource<T, U extends TileDataSourceOptions> extends DataSource<T, U> {}

export interface OrderedTileDataSourceOptions extends DataSourceOptions {
    dataSources: Array<TileDataSource<any, any>>;
}
export class OrderedTileDataSource<T, U extends OrderedTileDataSourceOptions> extends TileDataSource<T, U> {}

export interface MergedMBVTTileDataSourceOptions extends DataSourceOptions {
    dataSources: Array<TileDataSource<any, any>>;
}
export class MergedMBVTTileDataSource<T, U extends MergedMBVTTileDataSourceOptions> extends TileDataSource<T, U> {}
