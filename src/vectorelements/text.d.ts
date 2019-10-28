import { Color } from 'tns-core-modules/color/color';
import { BaseBillboardVectorElement, BillboardOrientation, BillboardStyleBuilder, BillboardStyleBuilderOptions, PointVectorElementOptions, BillboardVectorElementOptions } from './vectorelements';

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
export class TextOptions extends BillboardVectorElementOptions {
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

export class Text extends BaseBillboardVectorElement<any, TextOptions> {
    text?: string;
    styleBuilder?: TextStyleBuilder | TextStyleBuilderOptions | any;
}
