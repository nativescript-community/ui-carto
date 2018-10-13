import { BaseElement, BaseElementStyleBuilder } from './vectorelements.common';
import { MarkerOptions, MarkerStyleBuilderOptions } from './marker';
import { Color } from 'tns-core-modules/color/color';
import { toNativeMapPos } from '../core/core';

export class MarkerStyleBuilder extends BaseElementStyleBuilder<com.carto.styles.MarkerStyleBuilder, MarkerStyleBuilderOptions> {
    createNative(options: MarkerStyleBuilderOptions) {
        return new com.carto.styles.MarkerStyleBuilder();
    }
    get size() {
        return this.native ? this.native.getSize() : this.options.size;
    }
    set size(value: number) {
        if (this.native) {
            this.native.setSize(value);
            this._buildStyle = null;
        }
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

    _buildStyle: com.carto.styles.MarkerStyle;
    buildStyle() {
        if (!this._buildStyle) {
            this._buildStyle = this.getNative().buildStyle();
        }
        return this._buildStyle;
    }
}

export class Marker extends BaseElement<com.carto.vectorelements.Marker, MarkerOptions> {
    createNative(options: MarkerOptions) {
        const style = options.style instanceof MarkerStyleBuilder ? options.style.buildStyle() : options.style;
        const pos = options.pos;
        let nativePos;
        if (options.projection) {
            nativePos = options.projection.getNative().fromWgs84(toNativeMapPos(pos));
        } else {
            nativePos = toNativeMapPos(pos);
        }
        const result = new com.carto.vectorelements.Marker(nativePos, style);
        result['owner'] = new WeakRef(this);
        return result;
    }
    get style() {
        return this.native ? this.native.getStyle() : this.options.style;
    }
    set style(value: MarkerStyleBuilder | com.carto.styles.MarkerStyle) {
        if (this.native) {
            if (value instanceof MarkerStyleBuilder) {
                this.native.setStyle(value.buildStyle());
            } else {
                this.native.setStyle(value);
            }
        }
    }
    get rotation() {
        if (this.native) {
            return this.native.getRotation();
        }
        return this.options.rotation;
    }
    set rotation(value: number) {
        this.native && this.native.setRotation(value);
    }
}
