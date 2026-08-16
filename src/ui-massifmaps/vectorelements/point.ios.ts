import { Color } from '@nativescript/core';
import { geometryFromArgs, nativeColorProperty, nativeProperty } from '..';
import { Geometry } from '../geometry';
import { BaseVectorElementStyleBuilder, styleBuilderProperty } from './index.common';
import { BasePointVectorElement } from './index.ios';
import { PointOptions, PointStyleBuilderOptions } from './point';

export class PointStyleBuilder extends BaseVectorElementStyleBuilder<MSFPointStyleBuilder, PointStyleBuilderOptions> {
    createNative(options: PointStyleBuilderOptions) {
        return MSFPointStyleBuilder.alloc().init();
    }
    @nativeProperty size: number;
    @nativeColorProperty color: Color | string;
    @nativeProperty clickSize: number;

    mBuildStyle: MSFPointStyle;
    buildStyle() {
        if (!this.mBuildStyle) {
            this.mBuildStyle = this.getNative().buildStyle();
        }
        return this.mBuildStyle;
    }
}

export class Point extends BasePointVectorElement<MSFPoint, PointOptions> {
    @styleBuilderProperty color: Color | string;
    @styleBuilderProperty size: number;
    createNative(options: PointOptions) {
        const style = this.buildStyle();
        const nativePos = this.getNativePos(options.position, options.projection);
        const result = MSFPoint.alloc().initWithPosStyle(nativePos, style);
        // result['owner'] = new WeakRef(this);
        return result;
    }
    buildStyle() {
        let style: MSFPointStyle;
        const styleBuilder = this.options.styleBuilder;
        if (styleBuilder instanceof MSFPointStyle) {
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
    set styleBuilder(value: PointStyleBuilder | MSFPointStyle | PointStyleBuilderOptions) {
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
