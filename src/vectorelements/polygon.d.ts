import { Color } from '@nativescript/core/color';
import { BaseLineVectorElement, BaseVectorElementStyleBuilder, LineVectorElementOptions, VectorElementOptions } from '.';
import { DefaultLatLonKeys, GenericMapPos, MapPosVectorVector } from '../core';
import { Projection } from '../projections';
import { LineStyleBuilder, LineStyleBuilderOptions } from './line';
export class PolygonStyleBuilderOptions extends VectorElementOptions {
    size?: number;
    color?: string | Color;
    lineStyleBuilder?: LineStyleBuilder | LineStyleBuilderOptions;
}
export class PolygonStyleBuilder extends BaseVectorElementStyleBuilder<any, PolygonStyleBuilderOptions> {
    color: Color | string;
    lineStyleBuilder: LineStyleBuilder | LineStyleBuilderOptions | any;
    buildStyle(): any;
}

export class PolygonOptions<T = DefaultLatLonKeys> extends LineVectorElementOptions<T> {
    holes?: GenericMapPos<T>[][] | MapPosVectorVector<T>;
    projection?: Projection;
    styleBuilder?: PolygonStyleBuilder | PolygonStyleBuilderOptions;
}

export class Polygon<T = DefaultLatLonKeys> extends BaseLineVectorElement<any, PolygonOptions<T>, T> {
    styleBuilder?: PolygonStyleBuilder | PolygonStyleBuilderOptions | any;
    style?: any;
    size?: number;
    color?: string | Color;
    lineStyleBuilder?: LineStyleBuilder | LineStyleBuilderOptions | any;
}
