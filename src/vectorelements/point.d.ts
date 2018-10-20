import { IProjection } from '../projections/projection';
import { MapPos } from '../core/core';
import { BaseVectorElement, BaseVectorElementStyleBuilder, VectorElementOptions } from './vectorelements';
import { Color } from 'tns-core-modules/color/color';

export class PointStyleBuilderOptions extends VectorElementOptions {
    size?: number;
    color?: string | Color;
}
export class PointStyleBuilder<T, U extends PointStyleBuilderOptions> extends BaseVectorElementStyleBuilder<any, PointStyleBuilderOptions> {
    constructor(options: U);
    buildStyle(): any;
    size?: number;
    color?: string | Color;
}

export class PointOptions extends PointStyleBuilderOptions {
    pos: MapPos;
    projection?: IProjection;
}
export class Point extends BaseVectorElement<any, PointOptions> {
    styleBuilder?: PointStyleBuilder<any, any>;
    style?: any;
}
