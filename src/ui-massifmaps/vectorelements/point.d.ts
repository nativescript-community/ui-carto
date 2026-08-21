import { Color } from '@nativescript/core';
import { BasePointVectorElement, BaseVectorElementStyleBuilder, BillboardStyleBuilderOptions, PointVectorElementOptions } from '.';
import { DefaultLatLonKeys } from '../core';
import { Geometry } from '../geometry';
import { Accessors as Acc_Point } from '../bindings/vectorelements/Point';
import { Accessors as Acc_PointStyleBuilder, Methods as Met_PointStyleBuilder } from '../bindings/styles/PointStyleBuilder';
import { Accessors as Acc_StyleBuilder, Methods as Met_StyleBuilder } from '../bindings/styles/StyleBuilder';
import { Accessors as Acc_VectorElement, Methods as Met_VectorElement } from '../bindings/vectorelements/VectorElement';

export class PointStyleBuilderOptions extends BillboardStyleBuilderOptions {
    size?: number;
    clickSize?: number;
    color?: string | Color;
}
export class PointStyleBuilder extends BaseVectorElementStyleBuilder<any, PointStyleBuilderOptions> {
    size?: number;
    color?: string | Color;
    clickSize?: number;
}

export class PointOptions<T = DefaultLatLonKeys> extends PointVectorElementOptions<T> {
    geometry?: Geometry<T>;
    styleBuilder?: PointStyleBuilder | PointStyleBuilderOptions;
}
export class Point<T = DefaultLatLonKeys> extends BasePointVectorElement<any, PointOptions<T>, T> {
    styleBuilder?: PointStyleBuilder | PointStyleBuilderOptions;
    geometry?: Geometry<T>;
    style?: any;
    size?: number;
    color?: string | Color;
}

export interface Point<T = DefaultLatLonKeys> extends Acc_Point {}

export interface PointStyleBuilder extends Omit<Acc_PointStyleBuilder, 'clickSize' | 'size'>, Met_PointStyleBuilder {}

export interface PointStyleBuilder extends Omit<Acc_StyleBuilder, 'color'>, Met_StyleBuilder {}

export interface Point<T = DefaultLatLonKeys> extends Acc_VectorElement, Omit<Met_VectorElement, 'getGeometry'> {}
