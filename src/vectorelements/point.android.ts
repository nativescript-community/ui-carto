import { BaseElement, BaseElementStyleBuilder } from './vectorelements.common';
import { PointOptions, PointStyleBuilderOptions } from './point';
import { Color } from 'tns-core-modules/color/color';
import { toNativeMapPos } from '../core/core';

export class PointStyleBuilder extends BaseElementStyleBuilder<com.carto.styles.PointStyleBuilder, PointStyleBuilderOptions> {
    createNative(options: PointStyleBuilderOptions) {
        return new com.carto.styles.PointStyleBuilder();
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

    _buildStyle: com.carto.styles.PointStyle;
    buildStyle() {
        if (!this._buildStyle) {
            this._buildStyle = this.getNative().buildStyle();
        }
        return this._buildStyle;
    }
}

export class Point extends BaseElement<com.carto.vectorelements.Point, PointOptions> {
    createNative(options: PointOptions) {
        const style = options.style instanceof PointStyleBuilder ? options.style.buildStyle() : options.style;
        const pos = options.pos;
        let nativePos;
        if (options.projection) {
            nativePos = options.projection.getNative().fromWgs84(toNativeMapPos(pos));
        } else {
            nativePos = toNativeMapPos(pos);
        }
        const result = new com.carto.vectorelements.Point(nativePos, style);
        result['owner'] = new WeakRef(this);
        return result;
    }
    get style() {
        return this.native ? this.native.getStyle() : this.options.style;
    }
    set style(value: PointStyleBuilder | com.carto.styles.PointStyle) {
        if (this.native) {
            if (value instanceof PointStyleBuilder) {
                this.native.setStyle(value.buildStyle());
            } else {
                this.native.setStyle(value);
            }
        }
    }
}
