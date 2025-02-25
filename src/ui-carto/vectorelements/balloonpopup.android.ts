import { Color, ImageAsset, ImageSource } from '@nativescript/core';
import { BasePointVectorElement, BillboardStyleBuilder } from '.';
import { nativeCartoImageProperty, nativeColorProperty, nativeProperty } from '..';
import { BalloonPopupOptions, BalloonPopupStyleBuilderOptions } from './balloonpopup';

export class BalloonPopupStyleBuilder extends BillboardStyleBuilder<com.carto.styles.BalloonPopupStyleBuilder, BalloonPopupStyleBuilderOptions> {
    createNative(options: BalloonPopupStyleBuilderOptions) {
        return new com.carto.styles.BalloonPopupStyleBuilder();
    }
    @nativeColorProperty color: string | Color;
    @nativeProperty cornerRadius: number;
    @nativeColorProperty descriptionColor: string | Color;
    @nativeProperty descriptionFontName: string;
    @nativeProperty descriptionFontSize: number;
    @nativeProperty descriptionWrap: boolean;
    @nativeColorProperty leftColor: string | Color;
    @nativeCartoImageProperty leftImage: string | ImageSource | ImageAsset;
    @nativeColorProperty rightColor: string | Color;
    @nativeCartoImageProperty rightImage: string | ImageSource | ImageAsset;
    @nativeColorProperty strokeColor: string | Color;
    @nativeProperty strokeWidth: number;
    @nativeColorProperty titleColor: string | Color;
    @nativeProperty titleFontName: string;
    @nativeProperty titleFontSize: number;
    @nativeProperty titleWrap: boolean;
    @nativeProperty triangleHeight: number;
    @nativeProperty triangleWidth: number;
    @nativeProperty placementPriority: number;

    mBuildStyle: com.carto.styles.BalloonPopupStyle;
    buildStyle() {
        if (!this.mBuildStyle) {
            this.mBuildStyle = this.getNative().buildStyle();
        }
        return this.mBuildStyle;
    }
}

export class BalloonPopup extends BasePointVectorElement<com.carto.vectorelements.BalloonPopup, BalloonPopupOptions> {
    createNative(options: BalloonPopupOptions) {
        const style = this.buildStyle();
        let result: com.carto.vectorelements.BalloonPopup;
        if (options.marker) {
            result = new com.carto.vectorelements.BalloonPopup(options.marker.getNative(), style, this.options.title, this.options.description);
        } else {
            const nativePos = this.getNativePos(options.position, options.projection);
            result = new com.carto.vectorelements.BalloonPopup(nativePos, style, options.title, options.description);
        }
        // result['owner'] = new WeakRef(this);
        return result;
    }
    buildStyle() {
        let style: com.carto.styles.BalloonPopupStyle;
        const styleBuilder = this.options.styleBuilder;
        if (styleBuilder instanceof com.carto.styles.BalloonPopupStyle) {
            style = styleBuilder;
        } else if (styleBuilder instanceof BalloonPopupStyleBuilder) {
            style = styleBuilder.buildStyle();
        } else if (styleBuilder.hasOwnProperty) {
            style = new BalloonPopupStyleBuilder(styleBuilder).buildStyle();
        }
        return style;
    }
    get styleBuilder() {
        return this.native ? (this.native.getStyle() as any) : (this.options.styleBuilder as any);
    }
    set styleBuilder(value: BalloonPopupStyleBuilder | com.carto.styles.BalloonPopupStyle | BalloonPopupStyleBuilderOptions) {
        if (this.native && !this.duringInit) {
            this.options.styleBuilder = value;
            this.native.setStyle(this.buildStyle());
        }
    }
}
