import { BaseVectorElementStyleBuilder } from './vectorelements.common';
import { BasePointVectorElement } from './vectorelements';
import { PointOptions, PointStyleBuilderOptions } from './point';
import { Color } from 'tns-core-modules/color/color';
export declare class PointStyleBuilder extends BaseVectorElementStyleBuilder<com.carto.styles.PointStyleBuilder, PointStyleBuilderOptions> {
    createNative(options: PointStyleBuilderOptions): com.carto.styles.PointStyleBuilder;
    size: number;
    color: Color | string;
    clickSize: number;
    _buildStyle: com.carto.styles.PointStyle;
    buildStyle(): com.carto.styles.PointStyle;
}
export declare class Point extends BasePointVectorElement<com.carto.vectorelements.Point, PointOptions> {
    createNative(options: PointOptions): com.carto.vectorelements.Point;
    style: PointStyleBuilder | com.carto.styles.PointStyle;
}
