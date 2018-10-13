import { DataSource, TileDataSourceOptions } from './datasource';
import { IProjection } from '../projections/projection';

export interface VectorDataSourceOptions extends TileDataSourceOptions {
    projection: IProjection;
}
export interface LocalVectorDataSourceOptions extends VectorDataSourceOptions {}
export abstract class VectorDataSource<T extends NTVectorDataSource, U extends LocalVectorDataSourceOptions> extends DataSource<T, U> {}
export class LocalVectorDataSource extends VectorDataSource<any, LocalVectorDataSourceOptions> {
    add(element);
}
