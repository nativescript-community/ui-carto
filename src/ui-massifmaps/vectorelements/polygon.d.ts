import { Color } from '@nativescript/core';
import { BaseLineVectorElement, BaseVectorElementStyleBuilder, LineVectorElementOptions, VectorElementOptions } from '.';
import { DefaultLatLonKeys, GenericMapPos, MapPosVectorVector } from '../core';
import { Geometry } from '../geometry';
import { Projection } from '../projections';
import { LineStyleBuilder, LineStyleBuilderOptions } from './line';
import { Accessors as Acc_Polygon } from '../bindings/vectorelements/Polygon';
import { Accessors as Acc_PolygonStyleBuilder, Methods as Met_PolygonStyleBuilder } from '../bindings/styles/PolygonStyleBuilder';
import { Accessors as Acc_StyleBuilder, Methods as Met_StyleBuilder } from '../bindings/styles/StyleBuilder';
import { Accessors as Acc_VectorElement, Methods as Met_VectorElement } from '../bindings/vectorelements/VectorElement';
export class PolygonStyleBuilderOptions extends VectorElementOptions {
    size?: number;
    color?: string | Color;
    lineStyleBuilder?: LineStyleBuilder | LineStyleBuilderOptions;
}
export class PolygonStyleBuilder extends BaseVectorElementStyleBuilder<any, PolygonStyleBuilderOptions> {
    color: Color | string;
    lineStyleBuilder: LineStyleBuilder | LineStyleBuilderOptions;
}

export class PolygonOptions<T = DefaultLatLonKeys> extends LineVectorElementOptions<T> {
    holes?: GenericMapPos<T>[][] | MapPosVectorVector<T>;
    projection?: Projection;
    styleBuilder?: PolygonStyleBuilder | PolygonStyleBuilderOptions;
    geometry?: Geometry<T>;
}

export class Polygon<T = DefaultLatLonKeys> extends BaseLineVectorElement<any, PolygonOptions<T>, T> {
    styleBuilder?: PolygonStyleBuilder | PolygonStyleBuilderOptions;
    geometry?: Geometry<T>;
    style?: any;
    size?: number;
    color?: string | Color;
    lineStyleBuilder?: LineStyleBuilder | LineStyleBuilderOptions;
}

export interface Polygon<T = DefaultLatLonKeys> extends Acc_Polygon {}

export interface PolygonStyleBuilder extends Acc_PolygonStyleBuilder, Met_PolygonStyleBuilder {}

export interface PolygonStyleBuilder extends Omit<Acc_StyleBuilder, 'color'>, Met_StyleBuilder {}

export interface Polygon<T = DefaultLatLonKeys> extends Acc_VectorElement, Omit<Met_VectorElement, 'getGeometry'> {}
