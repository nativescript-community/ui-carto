import { DataSource, TileDataSourceOptions } from '.';
import { IProjection } from '../projections';
import { VectorElement, VectorElementVector } from '../vectorelements';
import { FeatureCollection } from '../geometry/feature';
import { GeometrySimplifier } from '../geometry/simplifier';

export interface VectorDataSourceOptions extends TileDataSourceOptions {
    projection: IProjection;
}
export interface LocalVectorDataSourceOptions extends VectorDataSourceOptions {}
export abstract class VectorDataSource<T extends any, U extends LocalVectorDataSourceOptions> extends DataSource<T, U> {}
export class LocalVectorDataSource extends VectorDataSource<any, LocalVectorDataSourceOptions> {
    add(element:VectorElement<any, any>);
    remove(element:VectorElement<any, any>);
    addAll(element:VectorElementVector);

    setGeometrySimplifier(simplifier: GeometrySimplifier<any, any>) 
    clear()
    addFeatureCollection(featureCollection: FeatureCollection, style: any) 
}
