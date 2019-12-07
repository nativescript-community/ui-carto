import { Projection } from '../projections';
import { MapPos } from '../core';
import { BasePointVectorElement, BaseVectorElementStyleBuilder, PointVectorElementOptions, VectorElementOptions, BillboardStyleBuilderOptions } from '.';
import { Color } from '@nativescript/core/color/color';
import { DefaultLatLonKeys } from 'nativescript-carto/core/index.common';

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
