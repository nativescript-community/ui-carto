import { LocalVectorDataSourceOptions } from './vector';
import { DataSource } from '.';
import { BaseVectorElement, VectorElementVector } from '../vectorelements';
import { GeometrySimplifier } from '../geometry/simplifier';
import { FeatureCollection } from '../geometry/feature';
import { fromNativeMapBounds } from '../core';
import { featureCollectionFromArgs, styleFromArgs } from '..';

export abstract class VectorDataSource<T extends MSFVectorDataSource, U extends LocalVectorDataSourceOptions> extends DataSource<T, U> {
    // createNative(options: U) {
    //     return MSFVectorDataSource.alloc().initWithProjection((options.projection as BaseProjection<any, any>).getNative());
    // }
}
export class LocalVectorDataSource extends VectorDataSource<MSFLocalVectorDataSource, LocalVectorDataSourceOptions> {
    createNative(options: LocalVectorDataSourceOptions) {
        return MSFLocalVectorDataSource.alloc().initWithProjection(options.projection.getNative());
    }
    add(element: BaseVectorElement<any, any>) {
        const nativeObj = element.getNative();
        if (nativeObj instanceof MSFVectorElementVector) {
            this.getNative().addAll(nativeObj);
        } else {
            this.getNative().add(nativeObj as MSFVectorElement);
        }
    }
    remove(element: BaseVectorElement<any, any>) {
        const nativeObj = element.getNative();
        if (nativeObj instanceof MSFVectorElementVector) {
            this.getNative().removeAll(nativeObj);
        } else {
            this.getNative().remove(nativeObj as MSFVectorElement);
        }
    }
    clear() {
        this.getNative().clear();
    }
    addFeatureCollection(featureCollection: FeatureCollection, style: any) {
        this.getNative().addFeatureCollectionStyle(featureCollectionFromArgs(featureCollection), styleFromArgs(style));
    }
    addAll(elements: VectorElementVector) {
        this.getNative().addAll(elements.getNative() as MSFVectorElementVector);
    }
    removeAll(elements: VectorElementVector) {
        this.getNative().removeAll(elements.getNative() as MSFVectorElementVector);
    }
    setGeometrySimplifier(simplifier: GeometrySimplifier<any, any>) {
        this.getNative().setGeometrySimplifier(simplifier.getNative());
    }

    getDataExtent() {
        return fromNativeMapBounds(this.getNative().getDataExtent());
    }
}
