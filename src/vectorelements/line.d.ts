import { IProjection } from '../projections/projection';
import { Position } from '../core/core';
import { BaseElement, BaseElementStyleBuilder } from './vectorelements';

declare enum LineJointType {
    NONE,
    BEVEL,
    MITER,
    ROUND
}
declare enum LineEndType {
    ROUND,
    SQUARE,
    NONE
}
export class LineStyleBuilderOptions {
    color?: string;
    width?: number;
    joinType?: LineJointType;
    endType?: LineEndType;
}
export class LineOptions extends LineStyleBuilderOptions {
    metaData?: Object;
    poses: Position[];
    projection?: IProjection;
    style?: any;
}
export class LineStyleBuilder<T, U extends LineStyleBuilderOptions> extends BaseElementStyleBuilder<any, LineStyleBuilderOptions> {
    constructor(options: U);
    buildStyle(): any;
}

export class Line extends BaseElement<any, LineOptions> {}
