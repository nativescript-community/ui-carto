import { BaseElement, BaseElementStyleBuilder } from './vectorelements.common';
import { PointOptions, PointStyleBuilderOptions } from './point';
import { Color } from 'tns-core-modules/color/color';
import { toNativeMapPos } from '../core/core';

export class PointStyleBuilder extends BaseElementStyleBuilder<NTPointStyleBuilder, PointStyleBuilderOptions> {
    createNative(options: PointStyleBuilderOptions) {
        return NTPointStyleBuilder.alloc().init();
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
            this.native.setColor(NTColor.alloc().initWithRGBA(theColor.r, theColor.g, theColor.b, theColor.a));
            this._buildStyle = null;
        }
    }

    _buildStyle: NTPointStyle;
    buildStyle() {
        if (!this._buildStyle) {
            this._buildStyle = this.getNative().buildStyle();
        }
        return this._buildStyle;
    }
}

export class Point extends BaseElement<NTPoint, PointOptions> {
    createNative(options: PointOptions) {
        const style = options.style instanceof PointStyleBuilder ? options.style.buildStyle() : options.style;
        const pos = options.pos;
        let nativePos;
        if (options.projection) {
            nativePos = options.projection.getNative().fromWgs84(toNativeMapPos(pos));
        } else {
            nativePos = toNativeMapPos(pos);
        }
        const result = NTPoint.alloc().initWithPosStyle(nativePos, style);
        result['owner'] = new WeakRef(this);
        return result;
    }
    get style() {
        return this.native ? this.native.getStyle() : this.options.style;
    }
    set style(value: PointStyleBuilder | NTPointStyle) {
        if (this.native) {
            if (value instanceof PointStyleBuilder) {
                this.native.setStyle(value.buildStyle());
            } else {
                this.native.setStyle(value);
            }
        }
    }
}
