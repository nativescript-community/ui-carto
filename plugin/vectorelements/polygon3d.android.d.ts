import { BaseVectorElementStyleBuilder } from './vectorelements.common';
import { BaseLineVectorElement } from './vectorelements';
import { Polygon3DOptions, Polygon3DStyleBuilderOptions } from './polygon3d';
import { Color } from 'tns-core-modules/color/color';
export declare class Polygon3DStyleBuilder extends BaseVectorElementStyleBuilder<com.carto.styles.Polygon3DStyleBuilder, Polygon3DStyleBuilderOptions> {
    createNative(options: Polygon3DStyleBuilderOptions): com.carto.styles.Polygon3DStyleBuilder;
    color: Color | string;
    sideColor: Color | string;
    _buildStyle: com.carto.styles.Polygon3DStyle;
    buildStyle(): com.carto.styles.Polygon3DStyle;
}
export declare class Polygon3D extends BaseLineVectorElement<com.carto.vectorelements.Polygon3D, Polygon3DOptions> {
    createNative(options: Polygon3DOptions): com.carto.vectorelements.Polygon3D;
    style: Polygon3DStyleBuilder | com.carto.styles.Polygon3DStyle;
}
