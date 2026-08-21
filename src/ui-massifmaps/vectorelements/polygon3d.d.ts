import { Color } from '@nativescript/core';
import { BaseLineVectorElement, BaseVectorElementStyleBuilder, LineVectorElementOptions, VectorElementOptions } from '.';
import { DefaultLatLonKeys, GenericMapPos, MapPosVector, MapPosVectorVector } from '../core';
import { Projection } from '../projections';
import { Accessors as Acc_Polygon3D } from '../bindings/vectorelements/Polygon3D';
import { Accessors as Acc_Polygon3DStyleBuilder, Methods as Met_Polygon3DStyleBuilder } from '../bindings/styles/Polygon3DStyleBuilder';
import { Accessors as Acc_StyleBuilder, Methods as Met_StyleBuilder } from '../bindings/styles/StyleBuilder';
import { Accessors as Acc_VectorElement, Methods as Met_VectorElement } from '../bindings/vectorelements/VectorElement';
export class Polygon3DStyleBuilderOptions extends VectorElementOptions {
    size?: number;
    color?: string | Color;
    sideColor?: Color | string;
}
export class Polygon3DStyleBuilder extends BaseVectorElementStyleBuilder<any, Polygon3DStyleBuilderOptions> {
    size?: number;
    color?: string | Color;
    sideColor?: Color | string;
}

export class Polygon3DOptions<T = DefaultLatLonKeys> extends LineVectorElementOptions<T> {
    height: number;
    positions?: MapPosVector<T> | GenericMapPos<T>[];
    geometry?: Geometry<T>;
    holes?: GenericMapPos<T>[][] | MapPosVectorVector<T>;
    projection?: Projection;
    styleBuilder?: Polygon3DStyleBuilder | Polygon3DStyleBuilderOptions;
}

export class Polygon3D<T = DefaultLatLonKeys> extends BaseLineVectorElement<any, Polygon3DOptions<T>, T> {
    styleBuilder?: Polygon3DStyleBuilder | Polygon3DStyleBuilderOptions;
    geometry?: Geometry<T>;
    style?: any;
    size?: number;
    color?: string | Color;
    sideColor?: Color | string;
}

export interface Polygon3D<T = DefaultLatLonKeys> extends Acc_Polygon3D {}

export interface Polygon3DStyleBuilder extends Omit<Acc_Polygon3DStyleBuilder, 'sideColor'>, Met_Polygon3DStyleBuilder {}

export interface Polygon3DStyleBuilder extends Omit<Acc_StyleBuilder, 'color'>, Met_StyleBuilder {}

export interface Polygon3D<T = DefaultLatLonKeys> extends Acc_VectorElement, Omit<Met_VectorElement, 'getGeometry'> {}
