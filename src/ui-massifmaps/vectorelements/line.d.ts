import { Projection } from '../projections';
import { DefaultLatLonKeys, GenericMapPos, MapBounds, MapPosVector } from '../core';
import { BaseLineVectorElement, BaseVectorElementStyleBuilder, LineVectorElementOptions, VectorElementOptions } from '.';
import { Color } from '@nativescript/core';
import { Geometry, LineGeometry } from '../geometry';
import { Accessors as Acc_Line } from '../bindings/vectorelements/Line';
import { Accessors as Acc_LineStyleBuilder, Methods as Met_LineStyleBuilder } from '../bindings/styles/LineStyleBuilder';
import { Accessors as Acc_StyleBuilder, Methods as Met_StyleBuilder } from '../bindings/styles/StyleBuilder';
import { Accessors as Acc_VectorElement, Methods as Met_VectorElement } from '../bindings/vectorelements/VectorElement';

declare enum LineJointType {
    FaceCamera,
    BEVEL,
    MITER,
    ROUND
}
declare enum LineEndType {
    ROUND,
    SQUARE,
    NONE
}
export class LineStyleBuilderOptions extends VectorElementOptions {
    color?: string | Color;
    width?: number;
    joinType?: LineJointType;
    endType?: LineEndType;
    clickWidth?: number;
    stretchFactor?: number;
}
export class LineOptions<T = DefaultLatLonKeys> extends LineVectorElementOptions<T> {
    geometry?: LineGeometry<T>;
    styleBuilder?: LineStyleBuilder | LineStyleBuilderOptions;
    projection?: Projection;
}
export class LineStyleBuilder extends BaseVectorElementStyleBuilder<any, LineStyleBuilderOptions> {
    color?: string | Color;
    width?: number;
    joinType?: LineJointType;
    endType?: LineEndType;
    clickWidth?: number;
    stretchFactor?: number;
}

export class Line<T = DefaultLatLonKeys> extends BaseLineVectorElement<any, LineOptions<T>, T> {
    styleBuilder?: LineStyleBuilder | LineStyleBuilderOptions;
    ignoreAltitude?: boolean;
    style?: any;
    color?: string | Color;
    width?: number;
    joinType?: LineJointType;
    endType?: LineEndType;
    clickWidth?: number;
    stretchFactor?: number;
    geometry: LineGeometry<T>;
    setPoses(positions: MapPosVector<T> | GenericMapPos<T>[]);
    getPoses(): MapPosVector<T> | GenericMapPos<T>[];
    getGeometry(): LineGeometry<T>;
    getBounds(): MapBounds<T>;
}

export interface Line<T = DefaultLatLonKeys> extends Acc_Line {}

export interface LineStyleBuilder extends Omit<Acc_LineStyleBuilder, 'clickWidth' | 'stretchFactor' | 'width'>, Met_LineStyleBuilder {}

export interface LineStyleBuilder extends Omit<Acc_StyleBuilder, 'color'>, Met_StyleBuilder {}

export interface Line<T = DefaultLatLonKeys> extends Acc_VectorElement, Omit<Met_VectorElement, 'getBounds' | 'getGeometry'> {}
