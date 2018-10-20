import { BaseVectorElementStyleBuilder } from './vectorelements.common';
import { BaseVectorElement } from './vectorelements.ios';
import { BalloonPopupOptions, BalloonPopupStyleBuilderOptions } from './balloonpopup';
import { Color } from 'tns-core-modules/color/color';
import { toNativeMapPos } from '../core/core';
import { iosNativeColorProperty, iosNativeImageProperty, iosNativeProperty } from '../carto.ios';

export class BalloonPopupStyleBuilder extends BaseVectorElementStyleBuilder<NTBalloonPopupStyleBuilder, BalloonPopupStyleBuilderOptions> {
    createNative(options: BalloonPopupStyleBuilderOptions) {
        return NTBalloonPopupStyleBuilder.alloc().init();
    }
    @iosNativeColorProperty color: string | Color;
    @iosNativeProperty cornerRadius: number;
    @iosNativeColorProperty descriptionColor: string | Color;
    @iosNativeProperty descriptionFontName: string;
    @iosNativeProperty descriptionFontSize: number;
    // @iosNativeProperty description: string;
    @iosNativeProperty descriptionWrap: boolean;
    @iosNativeColorProperty leftColor: string | Color;
    @iosNativeImageProperty leftImage: string;
    @iosNativeColorProperty rightColor: string | Color;
    @iosNativeImageProperty rightImage: string;
    @iosNativeColorProperty strokeColor: string | Color;
    @iosNativeProperty strokeWidth: number;
    @iosNativeColorProperty titleColor: string | Color;
    @iosNativeProperty titleFontName: string;
    @iosNativeProperty titleFontSize: number;
    // @iosNativeProperty title: string;
    @iosNativeProperty titleWrap: boolean;
    @iosNativeProperty triangleHeight: number;
    @iosNativeProperty triangleWidth: number;
    @iosNativeProperty placementPriority: number;

    _buildStyle: NTBalloonPopupStyle;
    buildStyle() {
        if (!this._buildStyle) {
            this._buildStyle = this.getNative().buildStyle();
        }
        return this._buildStyle;
    }
}

export class BalloonPopup extends BaseVectorElement<NTBalloonPopup, BalloonPopupOptions> {
    createNative(options: BalloonPopupOptions) {
        const style: NTBalloonPopupStyle = options.style || options.styleBuilder.buildStyle();
        let result: NTBalloonPopup;
        if (options.marker) {
            result = NTBalloonPopup.alloc().initWithBaseBillboardStyleTitleDesc(options.marker.getNative(), style, options.title, options.description);
        } else {
            const pos = options.pos;
            let nativePos;
            if (options.projection) {
                nativePos = options.projection.getNative().fromWgs84(toNativeMapPos(pos));
            } else {
                nativePos = toNativeMapPos(pos);
            }
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
