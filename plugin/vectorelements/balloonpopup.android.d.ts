import { BaseVectorElementStyleBuilder } from './vectorelements.common';
import { BasePointVectorElement } from './vectorelements';
import { BalloonPopupOptions, BalloonPopupStyleBuilderOptions } from './balloonpopup';
import { Color } from 'tns-core-modules/color/color';
export declare class BalloonPopupStyleBuilder extends BaseVectorElementStyleBuilder<com.carto.styles.BalloonPopupStyleBuilder, BalloonPopupStyleBuilderOptions> {
    createNative(options: BalloonPopupStyleBuilderOptions): com.carto.styles.BalloonPopupStyleBuilder;
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
    _buildStyle: com.carto.styles.BalloonPopupStyle;
    buildStyle(): com.carto.styles.BalloonPopupStyle;
}
export declare class BalloonPopup extends BasePointVectorElement<com.carto.vectorelements.BalloonPopup, BalloonPopupOptions> {
    createNative(options: BalloonPopupOptions): com.carto.vectorelements.BalloonPopup;
    style: BalloonPopupStyleBuilder | com.carto.styles.BalloonPopupStyle;
}
