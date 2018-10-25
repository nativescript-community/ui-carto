import { IProjection } from '../projections/projection';
import { MapPos } from '../core/core';
import { BasePointVectorElement, BaseVectorElementStyleBuilder, PointVectorElementOptions } from './vectorelements';
import { Color } from 'tns-core-modules/color/color';
import { BillboardOrientation } from './vectorelements';

export class TextStyleBuilderOptions extends PointVectorElementOptions {
    color?: string | Color;
    orientationMode?: BillboardOrientation;
    fontSize?: number;
    fontName?: string;
}
export class TextOptions extends TextStyleBuilderOptions {
    text: string;
    breakLines?: boolean;
    strokeWidth?: number;
    strokeColor?: Color | string;
    backgroundColor?: Color | string;
}

export class TextStyleBuilder<T, U extends TextStyleBuilderOptions> extends BaseVectorElementStyleBuilder<any, TextStyleBuilderOptions> {
    constructor(options: U);
    buildStyle(): any;
}

export class Text extends BasePointVectorElement<any, TextOptions> {
    styleBuilder?: TextStyleBuilder<any, any>;
    style?: any;
}
