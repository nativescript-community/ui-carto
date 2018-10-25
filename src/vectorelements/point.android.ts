import { BaseVectorElementStyleBuilder } from './vectorelements.common';
import { BasePointVectorElement } from './vectorelements.android';
import { PointOptions, PointStyleBuilderOptions } from './point';
import { Color } from 'tns-core-modules/color/color';
import { toNativeMapPos } from '../core/core';
import { nativeColorProperty, nativeProperty } from '../carto.android';

export class PointStyleBuilder extends BaseVectorElementStyleBuilder<com.carto.styles.PointStyleBuilder, PointStyleBuilderOptions> {
    createNative(options: PointStyleBuilderOptions) {
        return new com.carto.styles.PointStyleBuilder();
    }
    @nativeProperty
    size: number;
    @nativeColorProperty
    color: Color | string;
    @nativeProperty
    clickSize: number;

    _buildStyle: com.carto.styles.PointStyle;
    buildStyle() {
        if (!this._buildStyle) {
            this._buildStyle = this.getNative().buildStyle();
        }
        return this._buildStyle;
    }
}

export class Point extends BasePointVectorElement<com.carto.vectorelements.Point, PointOptions> {
    createNative(options: PointOptions) {
        const style: com.carto.styles.PointStyle = options.style || options.styleBuilder.buildStyle();
        const nativePos = this.getNativePos(options.position, options.projection);
        const result = new com.carto.vectorelements.Point(nativePos, style);
        // result['owner'] = new WeakRef(this);
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
