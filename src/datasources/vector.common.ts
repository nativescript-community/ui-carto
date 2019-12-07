import { DataSource, TileDataSourceOptions } from '.';
import { Projection } from '../projections';
export interface VectorDataSourceOptions extends TileDataSourceOptions {
    projection: Projection;
}
export abstract class VectorDataSource<T extends any, U extends VectorDataSourceOptions> extends DataSource<T, U> {
    projection: Projection;
}
