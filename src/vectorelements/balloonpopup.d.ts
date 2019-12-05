import { IProjection } from '../projections/projection';
import { MapPos } from '../core/core';
import { BasePointVectorElement, BaseVectorElementStyleBuilder, PointVectorElementOptions, VectorElementOptions, BillboardStyleBuilderOptions } from './vectorelements';
import { Color } from 'tns-core-modules/color/color';
import { Marker } from './marker';
import { BillboardStyleBuilder } from './vectorelements.ios';
import { DefaultLatLonKeys } from 'nativescript-carto/core/core.common';

export class BalloonPopupStyleBuilderOptions extends BillboardStyleBuilderOptions {
    color?: string | Color;
    cornerRadius?: number;
    descriptionColor?: string | Color;
    descriptionFontName?: string;
    descriptionFontSize?: number;
    descriptionWrap?: boolean;
    leftColor?: string | Color;
    leftImage?: string;
    rightColor?: string | Color;
    rightImage?: string;
    strokeColor?: string | Color;
    strokeWidth?: number;
    titleColor?: string | Color;
    titleFontName?: string;
    titleFontSize?: number;
    titleWrap?: boolean;
    triangleHeight?: number;
    triangleWidth?: number;
}
export class BalloonPopupStyleBuilder<T, U extends BalloonPopupStyleBuilderOptions> extends BillboardStyleBuilder<any, BalloonPopupStyleBuilderOptions> {
    constructor(options: U);
    buildStyle(): any;
    size?: number;
    color?: string | Color;
}

export class BalloonPopupOptions<T = DefaultLatLonKeys> extends PointVectorElementOptions<T> {
    marker?: Marker<T>;
    title?: string;
    description?: string;
    styleBuilder?: BalloonPopupStyleBuilder<any, any> | BalloonPopupStyleBuilderOptions;
}
export class BalloonPopup<T = DefaultLatLonKeys> extends BasePointVectorElement<any, BalloonPopupOptions<T>, T> {
    styleBuilder?: BalloonPopupStyleBuilder<any, any> | BalloonPopupStyleBuilderOptions;
    style?: any;
    color?: string | Color;
    cornerRadius?: number;
    descriptionColor?: string | Color;
    descriptionFontName?: string;
    descriptionFontSize?: number;
    description?: string;
    descriptionWrap?: boolean;
    leftColor?: string | Color;
    leftImage?: string;
    rightColor?: string | Color;
    rightImage?: string;
    strokeColor?: string | Color;
    strokeWidth?: number;
    titleColor?: string | Color;
    titleFontName?: string;
    titleFontSize?: number;
    title?: string;
    titleWrap?: boolean;
    triangleHeight?: number;
    triangleWidth?: number;
    placementPriority?: number;
}
