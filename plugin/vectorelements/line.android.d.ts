import { BaseVectorElementStyleBuilder } from './vectorelements.common';
import { BaseVectorElement } from './vectorelements.android';
import { LineOptions, LineStyleBuilderOptions } from './line';
import { Color } from 'tns-core-modules/color/color';
export declare enum LineJointType {
    BEVEL,
    MITER,
    NONE,
    ROUND,
}
export declare enum LineEndType {
    ROUND,
    SQUARE,
    NONE,
}
export declare class LineStyleBuilder extends BaseVectorElementStyleBuilder<com.carto.styles.LineStyleBuilder, LineStyleBuilderOptions> {
    createNative(options: LineStyleBuilderOptions): com.carto.styles.LineStyleBuilder;
    width: number;
    color: Color | string;
    joinType: LineJointType;
    endType: LineEndType;
    clickWidth: number;
    stretchFactor: number;
    _buildStyle: com.carto.styles.LineStyle;
    buildStyle(): com.carto.styles.LineStyle;
}
export declare class Line extends BaseVectorElement<com.carto.vectorelements.Line, LineOptions> {
    createNative(options: LineOptions): com.carto.vectorelements.Line;
    style: LineStyleBuilder | com.carto.styles.LineStyle;
}
