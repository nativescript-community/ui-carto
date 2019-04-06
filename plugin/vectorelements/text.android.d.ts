import { BaseVectorElementStyleBuilder } from './vectorelements.common';
import { Color } from 'tns-core-modules/color/color';
import { TextOptions, TextStyleBuilderOptions } from './text';
import { BasePointVectorElement, BillboardOrientation } from './vectorelements';
export declare class TextStyleBuilder extends BaseVectorElementStyleBuilder<com.carto.styles.TextStyleBuilder, TextStyleBuilderOptions> {
    createNative(options: TextStyleBuilderOptions): com.carto.styles.TextStyleBuilder;
    color: Color | string;
    fontSize: number;
    fontName: string;
    orientationMode: BillboardOrientation;
    breakLines: boolean;
    strokeWidth: number;
    strokeColor: Color | string;
    backgroundColor: Color | string;
    _buildStyle: com.carto.styles.LabelStyle;
    buildStyle(): com.carto.styles.LabelStyle;
}
export declare class Text extends BasePointVectorElement<com.carto.vectorelements.Text, TextOptions> {
    createNative(options: TextOptions): com.carto.vectorelements.Text;
    style: TextStyleBuilder | com.carto.styles.TextStyle;
}
