import { LocalVectorDataSourceOptions } from './vector';
import { DataSource } from './datasource';
import { BaseVectorElement, VectorElementVector } from '../vectorelements/vectorelements';
import { GeometrySimplifier } from '../geometry/simplifier';
import { FeatureCollection } from '../geometry/feature';

export abstract class VectorDataSource<T extends NTVectorDataSource, U extends LocalVectorDataSourceOptions> extends DataSource<T, U> {
    // createNative(options: U) {
    //     return NTVectorDataSource.alloc().initWithProjection((options.projection as BaseProjection<any, any>).getNative());
    // }
}
export class LocalVectorDataSource extends VectorDataSource<NTLocalVectorDataSource, LocalVectorDataSourceOptions> {
    createNative(options: LocalVectorDataSourceOptions) {
        return NTLocalVectorDataSource.alloc().initWithProjection(options.projection.getNative());
    }
    add(element: BaseVectorElement<any, any>) {
        this.getNative().add(element.getNative() as NTVectorElement);
    }
    clear() {
        this.getNative().clear();
    }
    addFeatureCollection(featureCollection: FeatureCollection, style: NTStyle) {
        this.getNative().addFeatureCollectionStyle(featureCollection.getNative(), style);
    }
    remove(element: BaseVectorElement<any, any>) {
        this.getNative().remove(element.getNative() as NTVectorElement);
    }
    addAll(elements: VectorElementVector) {
        this.getNative().addAll(elements.getNative() as NTVectorElementVector);
    }

    setGeometrySimplifier(simplifier: GeometrySimplifier<any, any>) {
        this.getNative().setGeometrySimplifier(simplifier.getNative());
    }
}
