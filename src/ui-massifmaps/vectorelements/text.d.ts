import { Color } from '@nativescript/core';
import { BaseBillboardVectorElement, BillboardOrientation, BillboardStyleBuilder, BillboardStyleBuilderOptions, BillboardVectorElementOptions } from '.';
import { DefaultLatLonKeys } from '../core';

export class TextStyleBuilderOptions extends BillboardStyleBuilderOptions {
    color?: Color | string;
    orientationMode?: BillboardOrientation;
    fontSize?: number;
    anchorPointX?: number;
    anchorPointY?: number;
    fontName?: string;
    breakLines?: boolean;
    textField?: string;
    borderWidth?: number;
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
    color?: Color | string;
    strokeColor?: Color | string;
    borderColor?: Color | string;
    borderWidth?: number;
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
