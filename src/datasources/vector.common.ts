import { DataSource, TileDataSourceOptions } from './datasource';
import { IProjection } from '../projections/projection';
export interface VectorDataSourceOptions extends TileDataSourceOptions {
    projection: IProjection;
}
export abstract class VectorDataSource<T extends com.carto.datasources.VectorDataSource, U extends VectorDataSourceOptions> extends DataSource<T, U> {
}
