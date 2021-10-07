import { LocalVectorDataSourceOptions } from './vector';
import { DataSource } from '.';
import { BaseVectorElement, VectorElementVector } from '../vectorelements';
import { GeometrySimplifier } from '../geometry/simplifier';
import { FeatureCollection } from '../geometry/feature';
import { fromNativeMapBounds } from '../core';
import { featureCollectionFromArgs, styleFromArgs } from '..';

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
        // a native element could have been passed
        const nativeObj = element.getNative ? element.getNative() : element;
        if (nativeObj instanceof com.carto.vectorelements.VectorElementVector) {
            this.getNative().addAll(nativeObj);
        } else {
            this.getNative().add(nativeObj as com.carto.vectorelements.VectorElement);
        }
    }
    remove(element: BaseVectorElement<any, any>) {
        // a native element could have been passed
        const nativeObj = element.getNative ? element.getNative() : element;
        if (nativeObj instanceof com.carto.vectorelements.VectorElementVector) {
            this.getNative().removeAll(nativeObj);
        } else {
            this.getNative().remove(nativeObj as com.carto.vectorelements.VectorElement);
        }
    }
    addAll(elements: VectorElementVector) {
        this.getNative().addAll(elements.getNative() as com.carto.vectorelements.VectorElementVector);
    }
    removeAll(elements: VectorElementVector) {
        this.getNative().removeAll(elements.getNative() as com.carto.vectorelements.VectorElementVector);
    }
    setGeometrySimplifier(simplifier: GeometrySimplifier<any, any>) {
        this.getNative().setGeometrySimplifier(simplifier.getNative());
    }
    clear() {
        this.getNative().clear();
    }
    addFeatureCollection(featureCollection: FeatureCollection, style: any) {
        this.getNative().addFeatureCollection(featureCollectionFromArgs(featureCollection), styleFromArgs(style));
    }

    getDataExtent() {
        return fromNativeMapBounds(this.getNative().getDataExtent());
    }
}
