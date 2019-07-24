import { Projection } from '../projections/projection';
import { MapPos } from '../core/core';
import { BasePointVectorElement, BaseVectorElementStyleBuilder, PointVectorElementOptions, VectorElementOptions, BillboardStyleBuilderOptions } from './vectorelements';
import { Color } from 'tns-core-modules/color/color';

export class PointStyleBuilderOptions extends BillboardStyleBuilderOptions {
    size?: number;
    color?: string | Color;
}
export class PointStyleBuilder extends BaseVectorElementStyleBuilder<any, PointStyleBuilderOptions> {
    buildStyle(): any;
    size?: number;
    color?: string | Color;
    clickSize?: number;
}

export class PointOptions extends PointVectorElementOptions {
    styleBuilder?: PointStyleBuilder | PointStyleBuilderOptions;

}
export class Point extends BasePointVectorElement<any, PointOptions> {
    styleBuilder?: PointStyleBuilder | PointStyleBuilderOptions;
    style?: any;
    size?: number;
    color?: string | Color;
}
