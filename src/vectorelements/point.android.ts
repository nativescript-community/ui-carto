import { BaseVectorElementStyleBuilder } from './vectorelements.common';
import { BasePointVectorElement } from './vectorelements';
import { PointOptions, PointStyleBuilderOptions } from './point';
import { Color } from 'tns-core-modules/color/color';
import { toNativeMapPos } from '../core/core';
import { nativeColorProperty } from '../carto';
import { nativeProperty } from '../carto.common';

export class PointStyleBuilder extends BaseVectorElementStyleBuilder<com.carto.styles.PointStyleBuilder, PointStyleBuilderOptions> {
    createNative(options: PointStyleBuilderOptions) {
        return new com.carto.styles.PointStyleBuilder();
    }
    @nativeProperty size: number;
    @nativeColorProperty color: Color | string;
    @nativeProperty clickSize: number;

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
        const style = this.buildStyle();
        const nativePos = this.getNativePos(options.position, options.projection);
        const result = new com.carto.vectorelements.Point(nativePos, style);
        // result['owner'] = new WeakRef(this);
        return result;
    }
    buildStyle() {
        let style: com.carto.styles.PointStyle;
        const styleBuilder = this.options.styleBuilder;
        if (styleBuilder instanceof com.carto.styles.PointStyle) {
            style = styleBuilder;
        } else if (styleBuilder instanceof PointStyleBuilder) {
            style = styleBuilder.buildStyle();
        } else if (styleBuilder.hasOwnProperty) {
            style = new PointStyleBuilder(styleBuilder).buildStyle();
        }
        return style;
    }
    get styleBuilder() {
        return this.native ? this.native.getStyle() : this.options.styleBuilder;
    }
    set styleBuilder(value: PointStyleBuilder | com.carto.styles.PointStyle | PointStyleBuilderOptions) {
        if (this.native && !this.duringInit) {
            this.options.styleBuilder = value as any;
            this.native.setStyle(this.buildStyle());
        }
    }
}
