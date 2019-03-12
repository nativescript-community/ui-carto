import { BaseVectorElementStyleBuilder } from './vectorelements.common';
import { BaseLineVectorElement } from './vectorelements.ios';
import { LineOptions, LineStyleBuilderOptions } from './line';
import { Color } from 'tns-core-modules/color/color';
export declare enum LineJointType {
    BEVEL = 2,
    MITER = 1,
    NONE = 0,
    ROUND = 3
}
export declare enum LineEndType {
    ROUND = 2,
    SQUARE = 1,
    NONE = 0
}
export declare class LineStyleBuilder extends BaseVectorElementStyleBuilder<NTLineStyleBuilder, LineStyleBuilderOptions> {
    createNative(options: LineStyleBuilderOptions): NTLineStyleBuilder;
    width: number;
    color: Color | string;
    joinType: LineJointType;
    endType: LineEndType;
    clickWidth: number;
    stretchFactor: number;
    _buildStyle: NTLineStyle;
    buildStyle(): NTLineStyle;
}
export declare class Line extends BaseLineVectorElement<NTLine, LineOptions> {
    createNative(options: LineOptions): NTLine;
    style: LineStyleBuilder | NTLineStyle;
}
