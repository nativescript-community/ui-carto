import { LocalVectorDataSourceOptions } from './vector';
import { DataSource } from './datasource';
import { BaseVectorElement, VectorElementVector } from '../vectorelements/vectorelements';
export declare abstract class VectorDataSource<T extends NTVectorDataSource, U extends LocalVectorDataSourceOptions> extends DataSource<T, U> {
}
export declare class LocalVectorDataSource extends VectorDataSource<NTLocalVectorDataSource, LocalVectorDataSourceOptions> {
    createNative(options: LocalVectorDataSourceOptions): NTLocalVectorDataSource;
    add(element: BaseVectorElement<any, any>): void;
    remove(element: BaseVectorElement<any, any>): void;
    addAll(elements: VectorElementVector): void;
}
