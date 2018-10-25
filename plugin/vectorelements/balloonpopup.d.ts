import { IProjection } from '../projections/projection';
import { MapPos } from '../core/core';
import { BasePointVectorElement, BaseVectorElementStyleBuilder, PointVectorElementOptions } from './vectorelements';
import { Color } from 'tns-core-modules/color/color';
import { Marker } from './marker';

export class BalloonPopupStyleBuilderOptions extends PointVectorElementOptions {
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
export class BalloonPopupStyleBuilder<T, U extends BalloonPopupStyleBuilderOptions> extends BaseVectorElementStyleBuilder<any, BalloonPopupStyleBuilderOptions> {
    constructor(options: U);
    buildStyle(): any;
    size?: number;
    color?: string | Color;
}

export class BalloonPopupOptions extends BalloonPopupStyleBuilderOptions {
    marker?: Marker;
}
export class BalloonPopup extends BasePointVectorElement<any, BalloonPopupOptions> {
    styleBuilder?: BalloonPopupStyleBuilder<any, any>;
    style?: any;
}
