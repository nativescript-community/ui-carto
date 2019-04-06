import { BaseVectorElementStyleBuilder } from './vectorelements.common';
import { BaseLineVectorElement } from './vectorelements';
import { PolygonOptions, PolygonStyleBuilderOptions } from './polygon';
import { Color } from 'tns-core-modules/color/color';
import { LineStyleBuilder } from './line';
export declare class PolygonStyleBuilder extends BaseVectorElementStyleBuilder<com.carto.styles.PolygonStyleBuilder, PolygonStyleBuilderOptions> {
    createNative(options: PolygonStyleBuilderOptions): com.carto.styles.PolygonStyleBuilder;
    color: Color | string;
    lineStyleBuilder: LineStyleBuilder<any, any>;
    _buildStyle: com.carto.styles.PolygonStyle;
    buildStyle(): com.carto.styles.PolygonStyle;
}
export declare class Polygon extends BaseLineVectorElement<com.carto.vectorelements.Polygon, PolygonOptions> {
    createNative(options: PolygonOptions): com.carto.vectorelements.Polygon;
    style: PolygonStyleBuilder | com.carto.styles.PolygonStyle;
}
