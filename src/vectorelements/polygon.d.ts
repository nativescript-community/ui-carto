import { Projection } from '../projections';
import { MapPos, MapPosVector, MapPosVectorVector } from '../core';
import { BaseLineVectorElement, BaseVectorElementStyleBuilder, LineVectorElementOptions, VectorElementOptions } from '.';
import { LineStyleBuilder, LineStyleBuilderOptions } from './line';
import { Color } from '@nativescript/core/color/color';
import { DefaultLatLonKeys, GenericMapPos } from 'nativescript-carto/core/index.common';
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
