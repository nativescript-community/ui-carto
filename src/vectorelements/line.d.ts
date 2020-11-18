import { Projection } from '../projections';
import { MapBounds, MapPos, MapPosVector } from '../core';
import { BaseLineVectorElement, BaseVectorElementStyleBuilder, LineVectorElementOptions, VectorElementOptions } from '.';
import { Color } from '@nativescript/core';
import { Geometry, LineGeometry } from '../geometry';
import { DefaultLatLonKeys, GenericMapPos } from '../core/index.common';

declare enum LineJointType {
    FaceCamera,
    BEVEL,
    MITER,
    ROUND,
}
declare enum LineEndType {
    ROUND,
    SQUARE,
    NONE,
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
    geometry?: LineGeometry;
    styleBuilder?: LineStyleBuilder | LineStyleBuilderOptions;
    projection?: Projection;
}
export class LineStyleBuilder extends BaseVectorElementStyleBuilder<any, LineStyleBuilderOptions> {
    buildStyle(): any;
    color?: string | Color;
    width?: number;
    joinType?: LineJointType;
    endType?: LineEndType;
    clickWidth?: number;
    stretchFactor?: number;
}

export class Line<T = DefaultLatLonKeys> extends BaseLineVectorElement<any, LineOptions<T>, T> {
    styleBuilder?: LineStyleBuilder | LineStyleBuilderOptions | any;
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
