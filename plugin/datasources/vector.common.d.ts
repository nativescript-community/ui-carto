import { DataSource, TileDataSourceOptions } from './datasource';
import { Projection } from '../projections/projection';
export interface VectorDataSourceOptions extends TileDataSourceOptions {
    projection: Projection;
}
export declare abstract class VectorDataSource<T extends com.carto.datasources.VectorDataSource, U extends VectorDataSourceOptions> extends DataSource<T, U> {
    projection: Projection;
}
