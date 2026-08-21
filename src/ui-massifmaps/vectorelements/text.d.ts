import { Color } from '@nativescript/core';
import { BaseBillboardVectorElement, BillboardOrientation, BillboardStyleBuilder, BillboardStyleBuilderOptions, BillboardVectorElementOptions } from '.';
import { DefaultLatLonKeys } from '../core';
import { Accessors as Acc_Text } from '../bindings/vectorelements/Text';
import { Accessors as Acc_TextStyleBuilder, Methods as Met_TextStyleBuilder } from '../bindings/styles/TextStyleBuilder';
import { Accessors as Acc_LabelStyleBuilder, Methods as Met_LabelStyleBuilder } from '../bindings/styles/LabelStyleBuilder';
import { Accessors as Acc_BillboardStyleBuilder, Methods as Met_BillboardStyleBuilder } from '../bindings/styles/BillboardStyleBuilder';
import { Accessors as Acc_StyleBuilder, Methods as Met_StyleBuilder } from '../bindings/styles/StyleBuilder';
import { Accessors as Acc_Label, Methods as Met_Label } from '../bindings/vectorelements/Label';
import { Accessors as Acc_Billboard, Methods as Met_Billboard } from '../bindings/vectorelements/Billboard';
import { Accessors as Acc_VectorElement, Methods as Met_VectorElement } from '../bindings/vectorelements/VectorElement';

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

export interface Text<T = DefaultLatLonKeys> extends Acc_Text {}

export interface TextStyleBuilder
    extends Omit<Acc_TextStyleBuilder, 'backgroundColor' | 'borderColor' | 'borderWidth' | 'breakLines' | 'fontName' | 'fontSize' | 'strokeColor' | 'textField'>, Met_TextStyleBuilder {}

export interface TextStyleBuilder extends Omit<Acc_TextStyleBuilder, 'backgroundColor' | 'borderColor' | 'borderWidth' | 'breakLines' | 'fontName' | 'fontSize' | 'strokeColor' | 'textField'>, Met_TextStyleBuilder {}

export interface TextStyleBuilder extends Omit<Acc_LabelStyleBuilder, 'anchorPointX' | 'anchorPointY' | 'flippable' | 'orientationMode'>, Omit<Met_LabelStyleBuilder, 'buildStyle'> {}
export interface TextStyleBuilder extends Acc_BillboardStyleBuilder, Met_BillboardStyleBuilder {}
export interface TextStyleBuilder extends Omit<Acc_StyleBuilder, 'color'>, Met_StyleBuilder {}

export interface Text<T = DefaultLatLonKeys> extends Omit<Acc_Label, 'style'>, Omit<Met_Label, 'drawBitmap' | 'getStyle' | 'setStyle'> {}
export interface Text<T = DefaultLatLonKeys> extends Acc_Billboard, Met_Billboard {}
export interface Text<T = DefaultLatLonKeys> extends Acc_VectorElement, Omit<Met_VectorElement, 'getBounds' | 'getGeometry'> {}
