import { Color } from '@nativescript/core';
import { BasePointVectorElement, BillboardStyleBuilderOptions, PointVectorElementOptions } from '.';
import { DefaultLatLonKeys } from '../core';
import { BillboardStyleBuilder } from './index.ios';
import { Marker } from './marker';

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
    size?: number;
    color?: string | Color;
}

export class BalloonPopupOptions<T = DefaultLatLonKeys> extends PointVectorElementOptions<T> {
    marker?: Marker<T>;
    title?: string;
    description?: string;
    styleBuilder?: BalloonPopupStyleBuilder<any, any> | BalloonPopupStyleBuilderOptions | com.carto.styles.BalloonPopupStyle;
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
