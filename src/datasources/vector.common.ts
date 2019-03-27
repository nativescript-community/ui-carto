import { DataSource, TileDataSourceOptions } from './datasource';
import { Projection } from '../projections/projection';
export interface VectorDataSourceOptions extends TileDataSourceOptions {
    projection: Projection;
}
export abstract class VectorDataSource<T extends any, U extends VectorDataSourceOptions> extends DataSource<T, U> {
    projection: Projection;
}
