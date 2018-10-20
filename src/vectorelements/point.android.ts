import { BaseVectorElementStyleBuilder } from './vectorelements.common';
import { BaseVectorElement } from './vectorelements.android';
import { PointOptions, PointStyleBuilderOptions } from './point';
import { Color } from 'tns-core-modules/color/color';
import { toNativeMapPos } from '../core/core';
import { androidNativeColorProperty, androidNativeImageProperty, androidNativeProperty } from '../carto.android';

export class PointStyleBuilder extends BaseVectorElementStyleBuilder<com.carto.styles.PointStyleBuilder, PointStyleBuilderOptions> {
    createNative(options: PointStyleBuilderOptions) {
        return new com.carto.styles.PointStyleBuilder();
    }
    @androidNativeProperty size: number;
    @androidNativeColorProperty color: Color | string;
    // @androidNativeImageProperty image: string;

    _buildStyle: com.carto.styles.PointStyle;
    buildStyle() {
        if (!this._buildStyle) {
            this._buildStyle = this.getNative().buildStyle();
        }
        return this._buildStyle;
    }
}

export class Point extends BaseVectorElement<com.carto.vectorelements.Point, PointOptions> {
    createNative(options: PointOptions) {
        const style: com.carto.styles.PointStyle = options.style || options.styleBuilder.buildStyle();
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
