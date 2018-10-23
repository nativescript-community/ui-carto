import { BaseVectorElementStyleBuilder } from './vectorelements.common';
import { BaseVectorElement } from './vectorelements.ios';
import { PolygonOptions, PolygonStyleBuilderOptions } from './polygon';
import { Color } from 'tns-core-modules/color/color';
import { LineStyleBuilder } from './line';
export declare class PolygonStyleBuilder extends BaseVectorElementStyleBuilder<NTPolygonStyleBuilder, PolygonStyleBuilderOptions> {
    createNative(options: PolygonStyleBuilderOptions): NTPolygonStyleBuilder;
    color: Color | string;
    lineStyleBuilder: LineStyleBuilder<any, any>;
    _buildStyle: NTPolygonStyle;
    buildStyle(): NTPolygonStyle;
}
export declare class Polygon extends BaseVectorElement<NTPolygon, PolygonOptions> {
    createNative(options: PolygonOptions): NTPolygon;
    style: PolygonStyleBuilder | NTPolygonStyle;
}
