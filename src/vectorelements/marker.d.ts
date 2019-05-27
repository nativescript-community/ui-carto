import { IProjection } from '../projections/projection';
import { MapPos } from '../core/core';
import { BasePointVectorElement, BaseVectorElementStyleBuilder, BillboardStyleBuilderOptions, PointVectorElementOptions, VectorElementOptions } from './vectorelements';
import { ImageAsset } from 'tns-core-modules/image-asset/image-asset';
import { ImageSource } from 'tns-core-modules/image-source/image-source';
import { Geometry } from '../geometry/geometry';
import { Color } from 'tns-core-modules/color/color';
import { BillboardOrientation, BillboardScaling } from './vectorelements';
import { BillboardStyleBuilder } from './vectorelements';

export class MarkerStyleBuilderOptions extends BillboardStyleBuilderOptions {
    size?: number;
    bitmap?: string | ImageSource | ImageAsset;
    color?: string | Color;
    clickSize?: number;
    scalingMode?: BillboardScaling;
    orientationMode?: BillboardOrientation;
}
export class MarkerStyleBuilder<T, U extends MarkerStyleBuilderOptions> extends BillboardStyleBuilder<any, MarkerStyleBuilderOptions> {
    constructor(options: U);
    buildStyle(): any;
}

export class MarkerOptions extends PointVectorElementOptions {
    rotation?: number;
    styleBuilder?: MarkerStyleBuilder<any, any>;
    style?: any;
    geometry?: Geometry;
}
export class Marker extends BasePointVectorElement<any, MarkerOptions> {
    styleBuilder?: MarkerStyleBuilder<any, any>;
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
