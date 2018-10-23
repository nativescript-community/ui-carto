import { LocalVectorDataSourceOptions } from './vector';
import { DataSource } from './datasource';
import { BaseVectorElement, VectorElementVector } from '../vectorelements/vectorelements';
export declare abstract class VectorDataSource<T extends com.carto.datasources.VectorDataSource, U extends LocalVectorDataSourceOptions> extends DataSource<T, U> {
}
export declare class LocalVectorDataSource extends VectorDataSource<com.carto.datasources.LocalVectorDataSource, LocalVectorDataSourceOptions> {
    createNative(options: LocalVectorDataSourceOptions): com.carto.datasources.LocalVectorDataSource;
    add(element: BaseVectorElement<any, any>): void;
    addAll(elements: VectorElementVector): void;
}
