import { Color } from 'tns-core-modules/color/color';
import { MarkerOptions, MarkerStyleBuilderOptions } from './marker';
import { BasePointVectorElement, BillboardOrientation, BillboardScaling } from './vectorelements';
import { BaseVectorElementStyleBuilder } from './vectorelements.common';
export declare class MarkerStyleBuilder extends BaseVectorElementStyleBuilder<com.carto.styles.MarkerStyleBuilder, MarkerStyleBuilderOptions> {
    createNative(options: MarkerStyleBuilderOptions): com.carto.styles.MarkerStyleBuilder;
    width: number;
    scaleWithDPI: boolean;
    size: number;
    placementPriority: number;
    color: Color | string;
    bitmap: string;
    anchorPointX: number;
    anchorPointY: number;
    clickSize: number;
    scalingMode: BillboardScaling;
    orientationMode: BillboardOrientation;
    _buildStyle: com.carto.styles.MarkerStyle;
    buildStyle(): com.carto.styles.MarkerStyle;
}
export declare class Marker extends BasePointVectorElement<com.carto.vectorelements.Marker, MarkerOptions> {
    rotation: number;
    createNative(options: MarkerOptions): com.carto.vectorelements.Marker;
    style: MarkerStyleBuilder | com.carto.styles.MarkerStyle;
}
