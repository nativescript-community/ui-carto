import { BaseVectorElementStyleBuilder } from './vectorelements.common';
import { BasePointVectorElement } from './vectorelements.ios';
import { TextOptions, TextStyleBuilderOptions } from './text';
import { Color } from 'tns-core-modules/color/color';
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
    @nativeProperty breakLines: boolean;
    @nativeProperty strokeWidth: number;
    @nativeProperty strokeColor: Color | string;
    @nativeProperty backgroundColor: Color | string;

    _buildStyle: NTTextStyle;
    buildStyle() {
        if (!this._buildStyle) {
            this._buildStyle = this.getNative().buildStyle();
        }
        return this._buildStyle;
    }
}

export class Text extends BasePointVectorElement<NTText, TextOptions> {
    createNative(options: TextOptions) {
        const style: NTTextStyle = options.style || options.styleBuilder.buildStyle();
        const nativePos = this.getNativePos(options.position, options.projection);
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
