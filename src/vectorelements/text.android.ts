import { Color } from 'tns-core-modules/color/color';
import { nativeColorProperty, nativeEnumProperty } from '../carto';
import { nativeProperty } from '../carto.common';
import { TextOptions, TextStyleBuilderOptions } from './text';
import { BasePointVectorElement, BillboardOrientation, BillboardStyleBuilder } from './vectorelements';

export class TextStyleBuilder extends BillboardStyleBuilder<com.carto.styles.TextStyleBuilder, TextStyleBuilderOptions> {
    createNative(options: TextStyleBuilderOptions) {
        return new com.carto.styles.TextStyleBuilder();
    }
    @nativeColorProperty color: Color | string;
    @nativeProperty fontSize: number;
    @nativeProperty fontName: string;
    @nativeEnumProperty orientationMode: BillboardOrientation;
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
