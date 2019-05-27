import { BaseVectorElementStyleBuilder } from './vectorelements.common';
import { BasePointVectorElement, BillboardStyleBuilder } from './vectorelements';
import { BalloonPopupOptions, BalloonPopupStyleBuilderOptions } from './balloonpopup';
import { Color } from 'tns-core-modules/color/color';
import { toNativeMapPos } from '../core/core';
import { nativeCartoImageProperty, nativeColorProperty } from '../carto';
import { nativeProperty } from '../carto.common';

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

    _buildStyle: com.carto.styles.BalloonPopupStyle;
    buildStyle() {
        if (!this._buildStyle) {
            this._buildStyle = this.getNative().buildStyle();
        }
        return this._buildStyle;
    }
}

export class BalloonPopup extends BasePointVectorElement<com.carto.vectorelements.BalloonPopup, BalloonPopupOptions> {
    createNative(options: BalloonPopupOptions) {
        const style: com.carto.styles.BalloonPopupStyle = options.style || options.styleBuilder.buildStyle();
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
