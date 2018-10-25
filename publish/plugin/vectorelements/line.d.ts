import { Projection } from '../projections/projection';
import { MapPos, MapPosVector } from '../core/core';
import { BaseVectorElement, BaseVectorElementStyleBuilder, VectorElementOptions } from './vectorelements';
import { Color } from 'tns-core-modules/color/color';

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
export class LineOptions extends LineStyleBuilderOptions {
    positions MapPosVector | MapPos[];
    projection?: Projection;
}
export class LineStyleBuilder<T, U extends LineStyleBuilderOptions> extends BaseVectorElementStyleBuilder<any, LineStyleBuilderOptions> {
    constructor(options: U);
    buildStyle(): any;
}

export class Line extends BaseVectorElement<any, LineOptions> {
    styleBuilder?: any;
    style?: any;
}
