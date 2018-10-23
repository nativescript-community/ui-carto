import { BaseVectorElementStyleBuilder } from './vectorelements.common';
import { BaseVectorElement } from './vectorelements.ios';
import { MarkerOptions, MarkerStyleBuilderOptions } from './marker';
import { Color } from 'tns-core-modules/color/color';
import { BillboardOrientation, BillboardScaling } from './vectorelements';
export declare class MarkerStyleBuilder extends BaseVectorElementStyleBuilder<NTMarkerStyleBuilder, MarkerStyleBuilderOptions> {
    createNative(options: MarkerStyleBuilderOptions): NTMarkerStyleBuilder;
    width: number;
    size: number;
    placementPriority: number;
    color: Color | string;
    bitmap: string;
    anchorPointX: number;
    anchorPointY: number;
    clickSize: number;
    scalingMode: BillboardScaling;
    orientationMode: BillboardOrientation;
    _buildStyle: NTMarkerStyle;
    buildStyle(): NTMarkerStyle;
}
export declare class Marker extends BaseVectorElement<NTMarker, MarkerOptions> {
    rotation: number;
    createNative(options: MarkerOptions): NTMarker;
    style: MarkerStyleBuilder | NTMarkerStyle;
}
