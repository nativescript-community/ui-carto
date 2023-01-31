import { Color } from '@nativescript/core';
import { BasePointVectorElement, BaseVectorElementStyleBuilder, BillboardStyleBuilderOptions, PointVectorElementOptions } from '.';
import { DefaultLatLonKeys } from '../core';
import { Geometry } from '../geometry';

export class PointStyleBuilderOptions extends BillboardStyleBuilderOptions {
    size?: number;
    clickSize?: number;
    color?: string | Color;
}
export class PointStyleBuilder extends BaseVectorElementStyleBuilder<any, PointStyleBuilderOptions> {
    size?: number;
    color?: string | Color;
    clickSize?: number;
}

export class PointOptions<T = DefaultLatLonKeys> extends PointVectorElementOptions<T> {
    geometry?: Geometry<T>;
    styleBuilder?: PointStyleBuilder | PointStyleBuilderOptions;
}
export class Point<T = DefaultLatLonKeys> extends BasePointVectorElement<any, PointOptions<T>, T> {
    styleBuilder?: PointStyleBuilder | PointStyleBuilderOptions;
    geometry?: Geometry<T>;
    style?: any;
    size?: number;
    color?: string | Color;
}
