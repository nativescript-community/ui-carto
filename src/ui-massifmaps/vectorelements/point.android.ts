import { Color } from '@nativescript/core';
import { geometryFromArgs, nativeColorProperty, nativeProperty } from '..';
import { Geometry } from '../geometry';
import { BasePointVectorElement } from './index.android';
import { BaseVectorElementStyleBuilder, styleBuilderProperty } from './index.common';
import { PointOptions, PointStyleBuilderOptions } from './point';

export class PointStyleBuilder extends BaseVectorElementStyleBuilder<com.massifmaps.styles.PointStyleBuilder, PointStyleBuilderOptions> {
    createNative(options: PointStyleBuilderOptions) {
        return new com.massifmaps.styles.PointStyleBuilder();
    }
    @nativeProperty size: number;
    @nativeColorProperty color: Color | string;
    @nativeProperty clickSize: number;

    mBuildStyle: com.massifmaps.styles.PointStyle;
    buildStyle() {
        if (!this.mBuildStyle) {
            this.mBuildStyle = this.getNative().buildStyle();
        }
        return this.mBuildStyle;
    }
}

export class Point extends BasePointVectorElement<com.massifmaps.vectorelements.Point, PointOptions> {
    @styleBuilderProperty color: Color | string;
    @styleBuilderProperty size: number;
    createNative(options: PointOptions) {
        const style = this.buildStyle();
        const nativePos = this.getNativePos(options.position, options.projection);
        return new com.massifmaps.vectorelements.Point(nativePos, style);
    }
    buildStyle() {
        let style: com.massifmaps.styles.PointStyle;
        const styleBuilder = this.options.styleBuilder;
        if (styleBuilder instanceof com.massifmaps.styles.PointStyle) {
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
    set styleBuilder(value: PointStyleBuilder | com.massifmaps.styles.PointStyle | PointStyleBuilderOptions) {
        if (this.native && !this.duringInit) {
            this.options.styleBuilder = value as any;
            this.native.setStyle(this.buildStyle());
        }
    }
    set geometry(geometry: Geometry) {
        if (this.native) {
            this.native.setGeometry(geometryFromArgs(geometry));
        }
    }
}
