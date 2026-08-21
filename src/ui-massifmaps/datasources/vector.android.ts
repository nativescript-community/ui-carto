import { LocalVectorDataSourceOptions } from './vector';
import { DataSource } from '.';
import { BaseVectorElement, VectorElementVector } from '../vectorelements';
import { GeometrySimplifier } from '../geometry/simplifier';
import { FeatureCollection } from '../geometry/feature';
import { fromNativeMapBounds } from '../core';
import { featureCollectionFromArgs, styleFromArgs } from '..';
import {
    ACCESSORS as ACC_LocalVectorDataSource,
    Accessors as Acc_LocalVectorDataSource,
    METHODS as MET_LocalVectorDataSource,
    Methods as Met_LocalVectorDataSource,
    SELECTORS as SEL_LocalVectorDataSource
} from '../bindings/datasources/LocalVectorDataSource';
import { bindNative } from '../nativeclass.common';
import { ACCESSORS as ACC_VectorDataSource, Accessors as Acc_VectorDataSource, METHODS as MET_VectorDataSource, Methods as Met_VectorDataSource, SELECTORS as SEL_VectorDataSource } from '../bindings/datasources/VectorDataSource';

export abstract class VectorDataSource<T extends com.massifmaps.datasources.VectorDataSource, U extends LocalVectorDataSourceOptions> extends DataSource<T, U> {
    // createNative(options: U) {
    //     return MSFVectorDataSource.alloc().initWithProjection((options.projection as BaseProjection<any, any>).getNative());
    // }
}
export class LocalVectorDataSource extends VectorDataSource<com.massifmaps.datasources.LocalVectorDataSource, LocalVectorDataSourceOptions> {
    createNative(options: LocalVectorDataSourceOptions) {
        return new com.massifmaps.datasources.LocalVectorDataSource(options.projection.getNative());
    }
    add(element: BaseVectorElement<any, any>) {
        // a native element could have been passed
        const nativeObj = element.getNative ? element.getNative() : element;
        if (nativeObj instanceof com.massifmaps.vectorelements.VectorElementVector) {
            this.getNative().addAll(nativeObj);
        } else {
            this.getNative().add(nativeObj as com.massifmaps.vectorelements.VectorElement);
        }
    }
    remove(element: BaseVectorElement<any, any>) {
        // a native element could have been passed
        const nativeObj = element.getNative ? element.getNative() : element;
        if (nativeObj instanceof com.massifmaps.vectorelements.VectorElementVector) {
            this.getNative().removeAll(nativeObj);
        } else {
            this.getNative().remove(nativeObj as com.massifmaps.vectorelements.VectorElement);
        }
    }
    addAll(elements: VectorElementVector) {
        this.getNative().addAll(elements.getNative() as com.massifmaps.vectorelements.VectorElementVector);
    }
    getAll() {
        return this.getNative().getAll();
    }
    removeAll(elements: VectorElementVector) {
        this.getNative().removeAll(elements.getNative() as com.massifmaps.vectorelements.VectorElementVector);
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

export interface LocalVectorDataSource
    extends Acc_LocalVectorDataSource, Omit<Met_LocalVectorDataSource, 'add' | 'addAll' | 'addFeatureCollection' | 'clear' | 'getAll' | 'getDataExtent' | 'remove' | 'removeAll' | 'setGeometrySimplifier'> {}
bindNative(LocalVectorDataSource, MET_LocalVectorDataSource, ACC_LocalVectorDataSource, { selectors: SEL_LocalVectorDataSource });

export interface LocalVectorDataSource extends Acc_VectorDataSource, Omit<Met_VectorDataSource, 'getDataExtent' | 'getProjection' | 'loadElements'> {}
bindNative(LocalVectorDataSource, MET_VectorDataSource, ACC_VectorDataSource, { selectors: SEL_VectorDataSource });
