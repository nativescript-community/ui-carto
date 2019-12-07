import { Color } from '@nativescript/core/color/color';
import { ImageAsset } from '@nativescript/core/image-asset/image-asset';
import { ImageSource } from '@nativescript/core/image-source/image-source';
import { Geometry } from '../geometry';
import {
    BaseBillboardVectorElement,
    BillboardOrientation,
    BillboardScaling,
    BillboardStyleBuilder,
    BillboardStyleBuilderOptions,
    PointVectorElementOptions,
    BillboardVectorElementOptions
} from '.';
import { DefaultLatLonKeys } from 'nativescript-carto/core/index.common';

export class MarkerStyleBuilderOptions extends BillboardStyleBuilderOptions {
    size?: number;
    bitmap?: string | ImageSource | ImageAsset;
    color?: string | Color;
    clickSize?: number;
    scalingMode?: BillboardScaling;
    orientationMode?: BillboardOrientation;
}
export class MarkerStyleBuilder extends BillboardStyleBuilder<any, MarkerStyleBuilderOptions> {
    buildStyle(): any;
    width: number;
    hideIfOverlapped: boolean;
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
}

export class MarkerOptions<T = DefaultLatLonKeys> extends BillboardVectorElementOptions<T> {
    styleBuilder?: MarkerStyleBuilder | MarkerStyleBuilderOptions;
    geometry?: Geometry;
}
export class Marker<T = DefaultLatLonKeys> extends BaseBillboardVectorElement<any, MarkerOptions<T>, T> {
    styleBuilder?: MarkerStyleBuilder | MarkerStyleBuilderOptions | any;
    style?: any;
    size?: number;
    placementPriority?: number;
    bitmap?: string | ImageSource | ImageAsset;
    color?: string | Color;
    anchorPointX?: number;
    anchorPointY?: number;
    clickSize?: number;
    scalingMode?: BillboardScaling;
    orientationMode?: BillboardOrientation;
}
