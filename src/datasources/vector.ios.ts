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
        const nativeObj = element.getNative();
        if (nativeObj instanceof NTVectorElementVector) {
            this.getNative().addAll(nativeObj);
        } else {
            this.getNative().add(nativeObj as NTVectorElement);
        }
    }
    remove(element: BaseVectorElement<any, any>) {
        const nativeObj = element.getNative();
        if (nativeObj instanceof NTVectorElementVector) {
            this.getNative().removeAll(nativeObj);
        } else {
            this.getNative().remove(nativeObj as NTVectorElement);
        }
    }
    clear() {
        this.getNative().clear();
    }
    addFeatureCollection(featureCollection: FeatureCollection, style: NTStyle) {
        this.getNative().addFeatureCollectionStyle(featureCollection.getNative(), style);
    }
    addAll(elements: VectorElementVector) {
        this.getNative().addAll(elements.getNative() as NTVectorElementVector);
    }
    removeAll(elements: VectorElementVector) {
        this.getNative().removeAll(elements.getNative() as NTVectorElementVector);
    }
    setGeometrySimplifier(simplifier: GeometrySimplifier<any, any>) {
        this.getNative().setGeometrySimplifier(simplifier.getNative());
    }
}
