import { Color } from '@nativescript/core/color/color';
import { BaseBillboardVectorElement, BillboardOrientation, BillboardStyleBuilder, BillboardStyleBuilderOptions, PointVectorElementOptions, BillboardVectorElementOptions } from '.';
import { DefaultLatLonKeys } from 'nativescript-carto/core/index.common';

export class TextStyleBuilderOptions extends BillboardStyleBuilderOptions {
    color?: Color | string;
    orientationMode?: BillboardOrientation;
    fontSize?: number;
    anchorPointX?: number;
    anchorPointY?: number;
    fontName?: string;
    breakLines?: boolean;
    textField?: string;
    strokeWidth?: number;
    strokeColor?: Color | string;
    borderColor?: Color | string;
    backgroundColor?: Color | string;
    flippable?: boolean;
}
export class TextOptions<T = DefaultLatLonKeys> extends BillboardVectorElementOptions<T> {
    text?: string;
    styleBuilder?: TextStyleBuilder | TextStyleBuilderOptions;
}

export class TextStyleBuilder extends BillboardStyleBuilder<any, TextStyleBuilderOptions> {
    buildStyle(): any;
    color?: Color | string;
    strokeColor?: Color | string;
    borderColor?: Color | string;
    backgroundColor?: Color | string;
    orientationMode?: BillboardOrientation;
    fontSize?: number;
    fontName?: string;
    breakLines?: boolean;
    flippable?: boolean;
    textField?: string;
    anchorPointX?: number;
    anchorPointY?: number;
}

export class Text<T = DefaultLatLonKeys> extends BaseBillboardVectorElement<any, TextOptions<T>, T> {
    text?: string;
    styleBuilder?: TextStyleBuilder | TextStyleBuilderOptions | any;
}
