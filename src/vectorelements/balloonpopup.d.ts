import { IProjection } from '../projections/projection';
import { MapPos } from '../core/core';
import { BaseVectorElement, BaseVectorElementStyleBuilder, VectorElementOptions } from './vectorelements';
import { Color } from 'tns-core-modules/color/color';
import { Marker } from './marker';

export class BalloonPopupStyleBuilderOptions extends VectorElementOptions {
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
    pos?: MapPos;
    marker?: Marker;
    projection?: IProjection;
}
export class BalloonPopup extends BaseVectorElement<any, BalloonPopupOptions> {
    styleBuilder?: BalloonPopupStyleBuilder<any, any>;
    style?: any;
}
