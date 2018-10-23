import { BaseVectorElementStyleBuilder } from './vectorelements.common';
import { BaseVectorElement } from './vectorelements.ios';
import { PointOptions, PointStyleBuilderOptions } from './point';
import { Color } from 'tns-core-modules/color/color';
export declare class PointStyleBuilder extends BaseVectorElementStyleBuilder<NTPointStyleBuilder, PointStyleBuilderOptions> {
    createNative(options: PointStyleBuilderOptions): NTPointStyleBuilder;
    size: number;
    color: Color | string;
    clickSize: number;
    _buildStyle: NTPointStyle;
    buildStyle(): NTPointStyle;
}
export declare class Point extends BaseVectorElement<NTPoint, PointOptions> {
    createNative(options: PointOptions): NTPoint;
    style: PointStyleBuilder | NTPointStyle;
}
