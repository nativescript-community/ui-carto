import { Color } from '@nativescript/core/color';
import { BasePointVectorElement, BaseVectorElementStyleBuilder, BillboardStyleBuilderOptions, PointVectorElementOptions } from '.';
import { DefaultLatLonKeys } from '../core';

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

export class PointOptions<T = DefaultLatLonKeys> extends PointVectorElementOptions<T> {
    styleBuilder?: PointStyleBuilder | PointStyleBuilderOptions;
}
export class Point<T = DefaultLatLonKeys> extends BasePointVectorElement<any, PointOptions<T>, T> {
    styleBuilder?: PointStyleBuilder | PointStyleBuilderOptions;
    style?: any;
    size?: number;
    color?: string | Color;
}
