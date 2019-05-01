import { Projection } from '../projections/projection';
import { MapBounds, MapPos, MapPosVector } from '../core/core';
import { BaseLineVectorElement, BaseVectorElementStyleBuilder, LineVectorElementOptions, VectorElementOptions } from './vectorelements';
import { Color } from 'tns-core-modules/color/color';
import { Geometry } from '../geometry/geometry';

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
    lineJoinType?: LineJointType;
    lineEndType?: LineEndType;
    clickWidth?: number;
    stretchFactor?: number;
}
export class LineOptions extends LineVectorElementOptions {
    positions: MapPosVector | MapPos[];
    projection?: Projection;
}
export class LineStyleBuilder<T, U extends LineStyleBuilderOptions> extends BaseVectorElementStyleBuilder<any, LineStyleBuilderOptions> {
    constructor(options: U);
    buildStyle(): any;
    color?: string | Color;
    width?: number;
    joinType?: LineJointType;
    endType?: LineEndType;
    clickWidth?: number;
    stretchFactor?: number;
}

export class Line extends BaseLineVectorElement<any, LineOptions> {
    styleBuilder?: any;
    style?: any;
    color?: string | Color;
    width?: number;
    joinType?: LineJointType;
    endType?: LineEndType;
    clickWidth?: number;
    stretchFactor?: number;
    setPoses(positions: MapPosVector | MapPos[]);
    getPoses(): MapPosVector | MapPos[];
    getGeometry(): Geometry;
    getBounds(): MapBounds;
}
