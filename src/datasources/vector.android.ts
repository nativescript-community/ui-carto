import { LocalVectorDataSourceOptions } from './vector';
import { DataSource } from './datasource';
import { BaseVectorElement, VectorElementVector } from '../vectorelements/vectorelements';

export abstract class VectorDataSource<T extends com.carto.datasources.VectorDataSource, U extends LocalVectorDataSourceOptions> extends DataSource<T, U> {
    // createNative(options: U) {
    //     return NTVectorDataSource.alloc().initWithProjection((options.projection as BaseProjection<any, any>).getNative());
    // }
}
export class LocalVectorDataSource extends VectorDataSource<com.carto.datasources.LocalVectorDataSource, LocalVectorDataSourceOptions> {
    createNative(options: LocalVectorDataSourceOptions) {
        return new com.carto.datasources.LocalVectorDataSource(options.projection.getNative());
    }
    add(element: BaseVectorElement<any, any>) {
        this.getNative().add(element.getNative() as com.carto.vectorelements.VectorElement);
    }
    addAll(elements: VectorElementVector) {
        console.log('addAll', elements.size());
        this.getNative().addAll(elements.getNative() as com.carto.vectorelements.VectorElementVector);
        console.log('addAll done ', elements.size());
    }
}
