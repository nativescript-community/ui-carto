import { LocalVectorDataSourceOptions } from './vector';
import { DataSource } from './datasource';

export abstract class VectorDataSource<T extends NTVectorDataSource, U extends LocalVectorDataSourceOptions> extends DataSource<T, U> {
    // createNative(options: U) {
    //     return NTVectorDataSource.alloc().initWithProjection((options.projection as BaseProjection<any, any>).getNative());
    // }
}
export class LocalVectorDataSource extends VectorDataSource<NTLocalVectorDataSource, LocalVectorDataSourceOptions> {
    createNative(options: LocalVectorDataSourceOptions) {
        return NTLocalVectorDataSource.alloc().initWithProjection(options.projection.getNative());
    }
    add(element: any) {
        this.getNative().add(element.getNative() as NTVectorElement);
    }
}
