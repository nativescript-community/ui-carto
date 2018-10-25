import { BaseVectorElementStyleBuilder } from './vectorelements.common';
import { BasePointVectorElement } from './vectorelements.ios';
import { BalloonPopupOptions, BalloonPopupStyleBuilderOptions } from './balloonpopup';
import { Color } from 'tns-core-modules/color/color';
import { toNativeMapPos } from '../core/core';
import { nativeCartoImageProperty, nativeColorProperty, nativeProperty } from '../carto.ios';

export class BalloonPopupStyleBuilder extends BaseVectorElementStyleBuilder<NTBalloonPopupStyleBuilder, BalloonPopupStyleBuilderOptions> {
    createNative(options: BalloonPopupStyleBuilderOptions) {
        return NTBalloonPopupStyleBuilder.alloc().init();
    }
    @nativeColorProperty color: string | Color;
    @nativeProperty cornerRadius: number;
    @nativeColorProperty descriptionColor: string | Color;
    @nativeProperty descriptionFontName: string;
    @nativeProperty descriptionFontSize: number;
    @nativeProperty descriptionWrap: boolean;
    @nativeColorProperty leftColor: string | Color;
    @nativeCartoImageProperty leftImage: string;
    @nativeColorProperty rightColor: string | Color;
    @nativeCartoImageProperty rightImage: string;
    @nativeColorProperty strokeColor: string | Color;
    @nativeProperty strokeWidth: number;
    @nativeColorProperty titleColor: string | Color;
    @nativeProperty titleFontName: string;
    @nativeProperty titleFontSize: number;
    @nativeProperty titleWrap: boolean;
    @nativeProperty triangleHeight: number;
    @nativeProperty triangleWidth: number;
    @nativeProperty placementPriority: number;

    _buildStyle: NTBalloonPopupStyle;
    buildStyle() {
        if (!this._buildStyle) {
            this._buildStyle = this.getNative().buildStyle();
        }
        return this._buildStyle;
    }
}

export class BalloonPopup extends BasePointVectorElement<NTBalloonPopup, BalloonPopupOptions> {
    createNative(options: BalloonPopupOptions) {
        const style: NTBalloonPopupStyle = options.style || options.styleBuilder.buildStyle();
        let result: NTBalloonPopup;
        if (options.marker) {
            result = NTBalloonPopup.alloc().initWithBaseBillboardStyleTitleDesc(options.marker.getNative(), style, options.title, options.description);
        } else {
            const nativePos = this.getNativePos(options.position, options.projection);

            result = NTBalloonPopup.alloc().initWithPosStyleTitleDesc(nativePos, style, options.title, options.description);
        }
        // result['owner'] = new WeakRef(this);
        return result;
    }
    get style() {
        return this.native ? this.native.getStyle() : this.options.style;
    }
    set style(value: BalloonPopupStyleBuilder | NTBalloonPopupStyle) {
        this.options.style = value;
        if (this.native) {
            if (value instanceof BalloonPopupStyleBuilder) {
                this.native.setStyle(value.buildStyle());
            } else {
                this.native.setStyle(value);
            }
        }
    }
}
