import { BaseVectorElementStyleBuilder } from './vectorelements.common';
import { BasePointVectorElement } from './vectorelements.ios';
import { TextOptions, TextStyleBuilderOptions } from './text';
import { Color } from 'tns-core-modules/color/color';
import { BillboardOrientation } from './vectorelements';
export declare class TextStyleBuilder extends BaseVectorElementStyleBuilder<NTTextStyleBuilder, TextStyleBuilderOptions> {
    createNative(options: TextStyleBuilderOptions): NTTextStyleBuilder;
    color: Color | string;
    fontSize: number;
    fontName: string;
    orientationMode: BillboardOrientation;
    breakLines: boolean;
    strokeWidth: number;
    strokeColor: Color | string;
    backgroundColor: Color | string;
    _buildStyle: NTTextStyle;
    buildStyle(): NTTextStyle;
}
export declare class Text extends BasePointVectorElement<NTText, TextOptions> {
    createNative(options: TextOptions): NTText;
    style: TextStyleBuilder | NTTextStyle;
}
