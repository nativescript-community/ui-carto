import { BaseVectorElementStyleBuilder } from './vectorelements.common';
import { Color } from 'tns-core-modules/color/color';
import { Polygon3DOptions, Polygon3DStyleBuilderOptions } from './polygon3d';
import { BaseLineVectorElement } from './vectorelements';
export declare class Polygon3DStyleBuilder extends BaseVectorElementStyleBuilder<NTPolygon3DStyleBuilder, Polygon3DStyleBuilderOptions> {
    createNative(options: Polygon3DStyleBuilderOptions): NTPolygon3DStyleBuilder;
    color: Color | string;
    sideColor: Color | string;
    _buildStyle: NTPolygon3DStyle;
    buildStyle(): NTPolygon3DStyle;
}
export declare class Polygon3D extends BaseLineVectorElement<NTPolygon3D, Polygon3DOptions> {
    createNative(options: Polygon3DOptions): NTPolygon3D;
    style: Polygon3DStyleBuilder | NTPolygon3DStyle;
}
