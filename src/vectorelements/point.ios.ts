import { BaseVectorElementStyleBuilder } from './vectorelements.common';
import { BaseVectorElement } from './vectorelements.ios';
import { PointOptions, PointStyleBuilderOptions } from './point';
import { Color } from 'tns-core-modules/color/color';
import { toNativeMapPos } from '../core/core';
import { nativeColorProperty, nativeProperty } from '../carto.ios';

export class PointStyleBuilder extends BaseVectorElementStyleBuilder<NTPointStyleBuilder, PointStyleBuilderOptions> {
    createNative(options: PointStyleBuilderOptions) {
        return NTPointStyleBuilder.alloc().init();
    }
    @nativeProperty size: number;
    @nativeColorProperty color: Color | string;
    @nativeProperty clickSize: number;

    _buildStyle: NTPointStyle;
    buildStyle() {
        if (!this._buildStyle) {
            this._buildStyle = this.getNative().buildStyle();
        }
        return this._buildStyle;
    }
}

export class Point extends BaseVectorElement<NTPoint, PointOptions> {
    createNative(options: PointOptions) {
        const style: NTPointStyle = options.style || options.styleBuilder.buildStyle();
        const pos = options.pos;
        let nativePos;
        if (options.projection) {
            nativePos = options.projection.getNative().fromWgs84(toNativeMapPos(pos));
        } else {
            nativePos = toNativeMapPos(pos);
        }
        const result = NTPoint.alloc().initWithPosStyle(nativePos, style);
        // result['owner'] = new WeakRef(this);
        return result;
    }
    get style() {
        return this.native ? this.native.getStyle() : this.options.style;
    }
    set style(value: PointStyleBuilder | NTPointStyle) {
        this.options.style = value;
        if (this.native) {
            if (value instanceof PointStyleBuilder) {
                this.native.setStyle(value.buildStyle());
            } else {
                this.native.setStyle(value);
            }
        }
    }
}
