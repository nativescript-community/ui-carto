import { IProjection } from '../projections/projection';
import { Position } from '../core/core';
import { BaseElement, BaseElementStyleBuilder } from './vectorelements';

export class PointStyleBuilderOptions {
    size?: number;
    color?: string;
}
export class PointStyleBuilder<T, U extends PointStyleBuilderOptions> extends BaseElementStyleBuilder<any, PointStyleBuilderOptions> {
    constructor(options: U);
    buildStyle(): any;
}

export class PointOptions extends PointStyleBuilderOptions {
    metaData?: Object;
    pos: Position;
    projection?: IProjection;
    style?: any;
}
export class Point extends BaseElement<any, PointOptions> {}
