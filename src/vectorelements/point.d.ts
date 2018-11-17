import { Projection } from '../projections/projection';
import { MapPos } from '../core/core';
import { BasePointVectorElement, BaseVectorElementStyleBuilder, PointVectorElementOptions, VectorElementOptions } from './vectorelements';
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
    clickSize?: number;
}

export class PointOptions extends PointVectorElementOptions {}
export class Point extends BasePointVectorElement<any, PointOptions> {
    styleBuilder?: PointStyleBuilder<any, any>;
    style?: any;
    size?: number;
    color?: string | Color;
}
