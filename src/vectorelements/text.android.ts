import { BaseVectorElementStyleBuilder } from './vectorelements.common';
import { BasePointVectorElement } from './vectorelements.android';
import { TextOptions, TextStyleBuilderOptions } from './text';
import { Color } from 'tns-core-modules/color/color';
import { BillboardOrientation } from './vectorelements';
import { nativeColorProperty, nativeEnumProperty, nativeProperty } from '../carto.android';

export class TextStyleBuilder extends BaseVectorElementStyleBuilder<com.carto.styles.TextStyleBuilder, TextStyleBuilderOptions> {
    createNative(options: TextStyleBuilderOptions) {
        return new com.carto.styles.TextStyleBuilder();
    }
    @nativeColorProperty color: Color | string;
    @nativeProperty fontSize: number;
    @nativeProperty fontName: string;
    @nativeEnumProperty(com.carto.styles.BillboardOrientation) orientationMode: BillboardOrientation;
    @nativeProperty breakLines: boolean;
    @nativeProperty strokeWidth: number;
    @nativeProperty strokeColor: Color | string;
    @nativeProperty backgroundColor: Color | string;

    _buildStyle: com.carto.styles.LabelStyle;
    buildStyle() {
        if (!this._buildStyle) {
            this._buildStyle = this.getNative().buildStyle();
        }
        return this._buildStyle;
    }
}

export class Text extends BasePointVectorElement<com.carto.vectorelements.Text, TextOptions> {
    createNative(options: TextOptions) {
        const style: com.carto.styles.TextStyle = options.style || options.styleBuilder.buildStyle();
        const nativePos = this.getNativePos(options.position, options.projection);
        const result = new com.carto.vectorelements.Text(nativePos, style, options.text);
        result['owner'] = new WeakRef(this);
        return result;
    }
    get style() {
        return this.native ? this.native.getStyle() : this.options.style;
    }
    set style(value: TextStyleBuilder | com.carto.styles.TextStyle) {
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
