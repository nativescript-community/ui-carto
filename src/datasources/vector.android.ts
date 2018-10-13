import { LocalVectorDataSourceOptions } from './vector';
import { DataSource } from './datasource';

export abstract class VectorDataSource<T extends com.carto.datasources.VectorDataSource, U extends LocalVectorDataSourceOptions> extends DataSource<T, U> {
    // createNative(options: U) {
    //     return NTVectorDataSource.alloc().initWithProjection((options.projection as BaseProjection<any, any>).getNative());
    // }
}
export class LocalVectorDataSource extends VectorDataSource<com.carto.datasources.LocalVectorDataSource, LocalVectorDataSourceOptions> {
    createNative(options: LocalVectorDataSourceOptions) {
        return new com.carto.datasources.LocalVectorDataSource(options.projection.getNative());
    }
    add(element: any) {
        this.getNative().add(element.getNative() as com.carto.vectorelements.VectorElement);
    }
}
