import { Projection } from '../projections';
import { MapPos } from '../core';
import { BaseLineVectorElement, BaseVectorElementStyleBuilder, LineVectorElementOptions, VectorElementOptions } from '.';
// import { LineStyleBuilder } from './line';
import { Color } from '@nativescript/core/color/color';
import { MapPosVector, MapPosVectorVector } from '../core';
import { DefaultLatLonKeys, GenericMapPos } from 'nativescript-carto/core/index.common';
export class Polygon3DStyleBuilderOptions extends VectorElementOptions {
    size?: number;
    color?: string | Color;
    sideColor?: Color | string;
    // lineStyleBuilder?:LineStyleBuilder<any, any>
}
export class Polygon3DStyleBuilder extends BaseVectorElementStyleBuilder<any, Polygon3DStyleBuilderOptions> {
    buildStyle(): any;
    size?: number;
    color?: string | Color;
    sideColor?: Color | string;
}

export class Polygon3DOptions<T = DefaultLatLonKeys> extends LineVectorElementOptions<T> {
    height: number;
    positions: MapPosVector<T> | GenericMapPos<T>[];
    holes?: GenericMapPos<T>[][] | MapPosVectorVector<T>;
    projection?: Projection;
    styleBuilder?: Polygon3DStyleBuilder | Polygon3DStyleBuilderOptions;
}

export class Polygon3D<T = DefaultLatLonKeys> extends BaseLineVectorElement<any, Polygon3DOptions<T>, T> {
    styleBuilder?: Polygon3DStyleBuilder | Polygon3DStyleBuilderOptions | any;
    style?: any;
    size?: number;
    color?: string | Color;
    sideColor?: Color | string;
}
