import { BaseVectorElementStyleBuilder } from './vectorelements.common';
import { BaseVectorElement } from './vectorelements.ios';
import { BalloonPopupOptions, BalloonPopupStyleBuilderOptions } from './balloonpopup';
import { Color } from 'tns-core-modules/color/color';
export declare class BalloonPopupStyleBuilder extends BaseVectorElementStyleBuilder<NTBalloonPopupStyleBuilder, BalloonPopupStyleBuilderOptions> {
    createNative(options: BalloonPopupStyleBuilderOptions): NTBalloonPopupStyleBuilder;
    color: string | Color;
    cornerRadius: number;
    descriptionColor: string | Color;
    descriptionFontName: string;
    descriptionFontSize: number;
    descriptionWrap: boolean;
    leftColor: string | Color;
    leftImage: string;
    rightColor: string | Color;
    rightImage: string;
    strokeColor: string | Color;
    strokeWidth: number;
    titleColor: string | Color;
    titleFontName: string;
    titleFontSize: number;
    titleWrap: boolean;
    triangleHeight: number;
    triangleWidth: number;
    placementPriority: number;
    _buildStyle: NTBalloonPopupStyle;
    buildStyle(): NTBalloonPopupStyle;
}
export declare class BalloonPopup extends BaseVectorElement<NTBalloonPopup, BalloonPopupOptions> {
    createNative(options: BalloonPopupOptions): NTBalloonPopup;
    style: BalloonPopupStyleBuilder | NTBalloonPopupStyle;
}
