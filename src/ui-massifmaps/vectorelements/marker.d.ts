import { Accessors as MarkerStyleBuilderAccessors } from '../bindings/styles/MarkerStyleBuilder';
import { Color, ImageAsset, ImageSource } from '@nativescript/core';
import { BaseBillboardVectorElement, BillboardOrientation, BillboardScaling, BillboardStyleBuilder, BillboardStyleBuilderOptions, BillboardVectorElementOptions } from '.';
import { DefaultLatLonKeys } from '../core';
import { Geometry } from '../geometry';
import { Accessors as Acc_Marker } from '../bindings/vectorelements/Marker';
import { Accessors as Acc_MarkerStyleBuilder, Methods as Met_MarkerStyleBuilder } from '../bindings/styles/MarkerStyleBuilder';
import { Accessors as Acc_BillboardStyleBuilder, Methods as Met_BillboardStyleBuilder } from '../bindings/styles/BillboardStyleBuilder';
import { Accessors as Acc_StyleBuilder, Methods as Met_StyleBuilder } from '../bindings/styles/StyleBuilder';
import { Accessors as Acc_Billboard, Methods as Met_Billboard } from '../bindings/vectorelements/Billboard';
import { Accessors as Acc_VectorElement, Methods as Met_VectorElement } from '../bindings/vectorelements/VectorElement';

export class MarkerStyleBuilderOptions extends BillboardStyleBuilderOptions {
    size?: number;
    bitmap?: string | ImageSource | ImageAsset;
    color?: string | Color;
    clickSize?: number;
    scalingMode?: BillboardScaling;
    orientationMode?: BillboardOrientation;
}
export interface MarkerStyleBuilder extends MarkerStyleBuilderAccessors {}
export class MarkerStyleBuilder extends BillboardStyleBuilder<any, MarkerStyleBuilderOptions> {}

export class MarkerOptions<T = DefaultLatLonKeys> extends BillboardVectorElementOptions<T> {
    styleBuilder?: MarkerStyleBuilder | MarkerStyleBuilderOptions;
    geometry?: Geometry<T>;
}
export class Marker<T = DefaultLatLonKeys> extends BaseBillboardVectorElement<any, MarkerOptions<T>, T> {
    styleBuilder?: MarkerStyleBuilder | MarkerStyleBuilderOptions;
    geometry?: Geometry<T>;
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

export interface Marker<T = DefaultLatLonKeys> extends Acc_Marker {}

export interface MarkerStyleBuilder extends Acc_MarkerStyleBuilder, Met_MarkerStyleBuilder {}

export interface MarkerStyleBuilder extends Acc_BillboardStyleBuilder, Met_BillboardStyleBuilder {}
export interface MarkerStyleBuilder extends Acc_StyleBuilder, Met_StyleBuilder {}

export interface Marker<T = DefaultLatLonKeys> extends Omit<Acc_Billboard, 'geometry'>, Met_Billboard {}
export interface Marker<T = DefaultLatLonKeys> extends Acc_VectorElement, Omit<Met_VectorElement, 'getBounds' | 'getGeometry'> {}
