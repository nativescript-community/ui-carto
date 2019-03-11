import { BaseVectorElementStyleBuilder } from './vectorelements.common';
import { BaseLineVectorElement } from './vectorelements.android';
import { LineEndType as ILineEndType, LineJointType as ILineJointType, LineOptions, LineStyleBuilderOptions } from './line';
import { Color } from 'tns-core-modules/color/color';
export declare const LineJointType: {
    readonly BEVEL: com.carto.styles.LineJoinType;
    readonly MITER: com.carto.styles.LineJoinType;
    readonly NONE: com.carto.styles.LineJoinType;
    readonly ROUND: com.carto.styles.LineJoinType;
};
export declare const LineEndType: {
    readonly ROUND: com.carto.styles.LineEndType;
    readonly SQUARE: com.carto.styles.LineEndType;
    readonly NONE: com.carto.styles.LineEndType;
};
export declare class LineStyleBuilder extends BaseVectorElementStyleBuilder<com.carto.styles.LineStyleBuilder, LineStyleBuilderOptions> {
    createNative(options: LineStyleBuilderOptions): com.carto.styles.LineStyleBuilder;
    width: number;
    color: Color | string;
    lineJoinType: ILineJointType;
    lineEndType: ILineEndType;
    clickWidth: number;
    stretchFactor: number;
    _buildStyle: com.carto.styles.LineStyle;
    buildStyle(): com.carto.styles.LineStyle;
}
export declare class Line extends BaseLineVectorElement<com.carto.vectorelements.Line, LineOptions> {
    createNative(options: LineOptions): com.carto.vectorelements.Line;
    style: LineStyleBuilder | com.carto.styles.LineStyle;
}
