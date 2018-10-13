import { BaseElement, BaseElementStyleBuilder } from './vectorelements.common';
import { TextOptions, TextStyleBuilderOptions } from './text';
import { Color } from 'tns-core-modules/color/color';
import { toNativeMapPos } from '../core/core';

export class TextStyleBuilder extends BaseElementStyleBuilder<com.carto.styles.TextStyleBuilder, TextStyleBuilderOptions> {
    createNative(options: TextStyleBuilderOptions) {
        return new com.carto.styles.TextStyleBuilder();
    }
    get color() {
        if (this.native) {
            const nativeColor = this.native.getColor();
            this._buildStyle = null;
            return new Color(nativeColor.getARGB()).hex;
        }
        return this.options.color;
    }
    set color(value: string) {
        if (this.native) {
            const theColor = new Color(value);
            this.native.setColor(new com.carto.graphics.Color(theColor.r, theColor.g, theColor.b, theColor.a));
            this._buildStyle = null;
        }
    }

    _buildStyle: com.carto.styles.LabelStyle;
    buildStyle() {
        if (!this._buildStyle) {
            this._buildStyle = this.getNative().buildStyle();
        }
        return this._buildStyle;
    }
}

export class Text extends BaseElement<com.carto.vectorelements.Text, TextOptions> {
    createNative(options: TextOptions) {
        const style = options.style instanceof TextStyleBuilder ? options.style.buildStyle() : options.style;
        const pos = options.pos;
        let nativePos;
        if (options.projection) {
            nativePos = options.projection.getNative().fromWgs84(toNativeMapPos(pos));
        } else {
            nativePos = toNativeMapPos(pos);
        }
        const result = new com.carto.vectorelements.Text(nativePos, style, options.text);
        result['owner'] = new WeakRef(this);
        return result;
    }
    get style() {
        return this.native ? this.native.getStyle() : this.options.style;
    }
    set style(value: TextStyleBuilder | com.carto.styles.TextStyle) {
        if (this.native) {
            if (value instanceof TextStyleBuilder) {
                this.native.setStyle(value.buildStyle());
            } else {
                this.native.setStyle(value);
            }
        }
    }
}
