import { Color, ImageAsset, ImageSource } from '@nativescript/core';
import { BasePointVectorElement, BillboardStyleBuilderOptions, PointVectorElementOptions } from '.';
import { DefaultLatLonKeys } from '../core';
import { BillboardStyleBuilder } from './index.ios';
import { Marker } from './marker';
import { Accessors as Acc_BalloonPopup } from '../bindings/vectorelements/BalloonPopup';
import { Accessors as Acc_BalloonPopupStyleBuilder, Methods as Met_BalloonPopupStyleBuilder } from '../bindings/styles/BalloonPopupStyleBuilder';
import { Accessors as Acc_PopupStyleBuilder, Methods as Met_PopupStyleBuilder } from '../bindings/styles/PopupStyleBuilder';
import { Accessors as Acc_BillboardStyleBuilder, Methods as Met_BillboardStyleBuilder } from '../bindings/styles/BillboardStyleBuilder';
import { Accessors as Acc_StyleBuilder, Methods as Met_StyleBuilder } from '../bindings/styles/StyleBuilder';
import { Accessors as Acc_Popup, Methods as Met_Popup } from '../bindings/vectorelements/Popup';
import { Accessors as Acc_Billboard, Methods as Met_Billboard } from '../bindings/vectorelements/Billboard';
import { Accessors as Acc_VectorElement, Methods as Met_VectorElement } from '../bindings/vectorelements/VectorElement';

export class BalloonPopupStyleBuilderOptions extends BillboardStyleBuilderOptions {
    color?: string | Color;
    cornerRadius?: number;
    descriptionColor?: string | Color;
    descriptionFontName?: string;
    descriptionFontSize?: number;
    descriptionWrap?: boolean;
    leftColor?: string | Color;
    leftImage?: string | ImageSource | ImageAsset;
    rightColor?: string | Color;
    rightImage?: string | ImageSource | ImageAsset;
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
    buildStyle();
}

export class BalloonPopupOptions<T = DefaultLatLonKeys> extends PointVectorElementOptions<T> {
    marker?: Marker<T>;
    title?: string;
    description?: string;
    styleBuilder?: BalloonPopupStyleBuilder<any, any> | BalloonPopupStyleBuilderOptions | com.massifmaps.styles.BalloonPopupStyle | MSFBalloonPopupStyle;
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
    leftImage?: string | ImageSource | ImageAsset;
    rightColor?: string | Color;
    rightImage?: string | ImageSource | ImageAsset;
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

export interface BalloonPopup<T = DefaultLatLonKeys> extends Acc_BalloonPopup {}

export interface BalloonPopupStyleBuilder<T, U extends BalloonPopupStyleBuilderOptions> extends Acc_BalloonPopupStyleBuilder, Omit<Met_BalloonPopupStyleBuilder, 'buildStyle'> {}

export interface BalloonPopupStyleBuilder<T, U extends BalloonPopupStyleBuilderOptions> extends Acc_PopupStyleBuilder, Omit<Met_PopupStyleBuilder, 'buildStyle'> {}
export interface BalloonPopupStyleBuilder<T, U extends BalloonPopupStyleBuilderOptions> extends Acc_BillboardStyleBuilder, Met_BillboardStyleBuilder {}
export interface BalloonPopupStyleBuilder<T, U extends BalloonPopupStyleBuilderOptions> extends Omit<Acc_StyleBuilder, 'color'>, Met_StyleBuilder {}

export interface BalloonPopup<T = DefaultLatLonKeys> extends Omit<Acc_Popup, 'style'>, Omit<Met_Popup, 'drawBitmap' | 'getStyle' | 'processClick' | 'setStyle'> {}
export interface BalloonPopup<T = DefaultLatLonKeys> extends Acc_Billboard, Met_Billboard {}
export interface BalloonPopup<T = DefaultLatLonKeys> extends Acc_VectorElement, Omit<Met_VectorElement, 'getBounds' | 'getGeometry'> {}
