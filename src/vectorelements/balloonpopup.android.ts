import { BaseVectorElementStyleBuilder } from './vectorelements.common';
import { BaseVectorElement } from './vectorelements.android';
import { BalloonPopupOptions, BalloonPopupStyleBuilderOptions } from './balloonpopup';
import { Color } from 'tns-core-modules/color/color';
import { toNativeMapPos } from '../core/core';
import { androidNativeColorProperty, androidNativeImageProperty, androidNativeProperty } from '../carto.android';

export class BalloonPopupStyleBuilder extends BaseVectorElementStyleBuilder<com.carto.styles.BalloonPopupStyleBuilder, BalloonPopupStyleBuilderOptions> {
    createNative(options: BalloonPopupStyleBuilderOptions) {
        return new com.carto.styles.BalloonPopupStyleBuilder();
    }
    @androidNativeColorProperty color: string | Color;
    @androidNativeProperty cornerRadius: number;
    @androidNativeColorProperty descriptionColor: string | Color;
    @androidNativeProperty descriptionFontName: string;
    @androidNativeProperty descriptionFontSize: number;
    // @androidNativeProperty description: string;
    @androidNativeProperty descriptionWrap: boolean;
    @androidNativeColorProperty leftColor: string | Color;
    @androidNativeImageProperty leftImage: string;
    @androidNativeColorProperty rightColor: string | Color;
    @androidNativeImageProperty rightImage: string;
    @androidNativeColorProperty strokeColor: string | Color;
    @androidNativeProperty strokeWidth: number;
    @androidNativeColorProperty titleColor: string | Color;
    @androidNativeProperty titleFontName: string;
    @androidNativeProperty titleFontSize: number;
    // @androidNativeProperty title: string;
    @androidNativeProperty titleWrap: boolean;
    @androidNativeProperty triangleHeight: number;
    @androidNativeProperty triangleWidth: number;
    @androidNativeProperty placementPriority: number;

    _buildStyle: com.carto.styles.BalloonPopupStyle;
    buildStyle() {
        if (!this._buildStyle) {
            this._buildStyle = this.getNative().buildStyle();
        }
        return this._buildStyle;
    }
}

export class BalloonPopup extends BaseVectorElement<com.carto.vectorelements.BalloonPopup, BalloonPopupOptions> {
    createNative(options: BalloonPopupOptions) {
        const style: com.carto.styles.BalloonPopupStyle = options.style || options.styleBuilder.buildStyle();
        let result: com.carto.vectorelements.BalloonPopup;
        if (options.marker) {
            result = new com.carto.vectorelements.BalloonPopup(options.marker.getNative(), style, this.options.title, this.options.description);
        } else {
            const pos = options.pos;
            let nativePos;
            if (options.projection) {
                nativePos = options.projection.getNative().fromWgs84(toNativeMapPos(pos));
            } else {
                nativePos = toNativeMapPos(pos);
            }
            result = new com.carto.vectorelements.BalloonPopup(nativePos, style, options.title, options.description);
        }
        // result['owner'] = new WeakRef(this);
        return result;
    }
    get style() {
        return this.native ? this.native.getStyle() : this.options.style;
    }
    set style(value: BalloonPopupStyleBuilder | com.carto.styles.BalloonPopupStyle) {
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
