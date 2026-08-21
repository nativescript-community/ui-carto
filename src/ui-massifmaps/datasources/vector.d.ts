import { DataSource, TileDataSourceOptions } from '.';
import { IProjection } from '../projections';
import { VectorElement, VectorElementVector } from '../vectorelements';
import { FeatureCollection } from '../geometry/feature';
import { GeometrySimplifier } from '../geometry/simplifier';
import { DefaultLatLonKeys, MapBounds } from '../core';
import { Accessors as Acc_LocalVectorDataSource } from '../bindings/datasources/LocalVectorDataSource';
import { Methods as Met_LocalVectorDataSource } from '../bindings/datasources/LocalVectorDataSource';
import { Accessors as Acc_VectorDataSource, Methods as Met_VectorDataSource } from '../bindings/datasources/VectorDataSource';

export interface VectorDataSourceOptions extends TileDataSourceOptions {
    projection: IProjection;
}
export interface LocalVectorDataSourceOptions extends VectorDataSourceOptions {}
export abstract class VectorDataSource<T, U extends LocalVectorDataSourceOptions> extends DataSource<T, U> {}
export class LocalVectorDataSource<T = DefaultLatLonKeys> extends VectorDataSource<any, LocalVectorDataSourceOptions> {
    add(element: VectorElement<any, any>);
    remove(element: VectorElement<any, any>);
    addAll(element: VectorElementVector);

    setGeometrySimplifier(simplifier: GeometrySimplifier<any, any>);
    clear();
    addFeatureCollection(featureCollection: FeatureCollection, style: any);
    getDataExtent(): MapBounds<T>;
}

export interface LocalVectorDataSource<T = DefaultLatLonKeys>
    extends Acc_LocalVectorDataSource, Omit<Met_LocalVectorDataSource, 'add' | 'addAll' | 'addFeatureCollection' | 'clear' | 'getDataExtent' | 'remove' | 'setGeometrySimplifier'> {}

export interface LocalVectorDataSource<T = DefaultLatLonKeys> extends Acc_LocalVectorDataSource, Omit<Met_LocalVectorDataSource, 'add' | 'addAll' | 'addFeatureCollection' | 'clear' | 'getDataExtent' | 'remove' | 'setGeometrySimplifier'> {}

export interface LocalVectorDataSource<T = DefaultLatLonKeys> extends Acc_VectorDataSource, Omit<Met_VectorDataSource, 'getDataExtent' | 'loadElements'> {}
