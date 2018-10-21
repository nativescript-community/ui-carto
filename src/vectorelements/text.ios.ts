import { BaseVectorElementStyleBuilder } from './vectorelements.common';
import { BaseVectorElement } from './vectorelements.ios';
import { TextOptions, TextStyleBuilderOptions } from './text';
import { Color } from 'tns-core-modules/color/color';
import { toNativeMapPos } from '../core/core';
import { BillboardOrientation } from './vectorelements';
import { nativeColorProperty, nativeProperty } from '../carto.ios';

export class TextStyleBuilder extends BaseVectorElementStyleBuilder<NTTextStyleBuilder, TextStyleBuilderOptions> {
    createNative(options: TextStyleBuilderOptions) {
        return NTTextStyleBuilder.alloc().init();
    }

    @nativeColorProperty color: Color | string;
    @nativeProperty fontSize: number;
    @nativeProperty fontName: string;
    @nativeProperty orientationMode: BillboardOrientation;

    _buildStyle: NTTextStyle;
    buildStyle() {
        if (!this._buildStyle) {
            this._buildStyle = this.getNative().buildStyle();
        }
        return this._buildStyle;
    }
}

export class Text extends BaseVectorElement<NTText, TextOptions> {
    createNative(options: TextOptions) {
        const style: NTTextStyle = options.style || options.styleBuilder.buildStyle();
        const pos = options.pos;
        let nativePos;
        if (options.projection) {
            nativePos = options.projection.getNative().fromWgs84(toNativeMapPos(pos));
        } else {
            nativePos = toNativeMapPos(pos);
        }
        const result = NTText.alloc().initWithPosStyleText(nativePos, style, options.text);
        // result['owner'] = new WeakRef(this);
        return result;
    }

    get style() {
        return this.native ? this.native.getStyle() : this.options.style;
    }
    set style(value: TextStyleBuilder | NTTextStyle) {
        this.options.style = value;
        if (this.native) {
            if (value instanceof TextStyleBuilder) {
                this.native.setStyle(value.buildStyle());
            } else {
                this.native.setStyle(value);
            }
        }
    }
}
