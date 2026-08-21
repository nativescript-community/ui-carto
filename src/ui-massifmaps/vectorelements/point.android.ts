import { Color } from '@nativescript/core';
import { geometryFromArgs, nativeColorProperty, nativeProperty } from '..';
import { Geometry } from '../geometry';
import { BasePointVectorElement } from './index.android';
import { BaseVectorElementStyleBuilder, styleBuilderProperty } from './index.common';
import { PointOptions, PointStyleBuilderOptions } from './point';
import {
    ACCESSORS as ACC_PointStyleBuilder,
    Accessors as Acc_PointStyleBuilder,
    METHODS as MET_PointStyleBuilder,
    Methods as Met_PointStyleBuilder,
    SELECTORS as SEL_PointStyleBuilder
} from '../bindings/styles/PointStyleBuilder';
import { bindNative } from '../nativeclass.common';
import { massifImageConverter } from '..';
import { ACCESSORS as ACC_Point, Accessors as Acc_Point, METHODS as MET_Point, Methods as Met_Point, SELECTORS as SEL_Point } from '../bindings/vectorelements/Point';
import { ACCESSORS as ACC_StyleBuilder, Accessors as Acc_StyleBuilder, METHODS as MET_StyleBuilder, Methods as Met_StyleBuilder, SELECTORS as SEL_StyleBuilder } from '../bindings/styles/StyleBuilder';
import { colorConverter } from '..';

export class PointStyleBuilder extends BaseVectorElementStyleBuilder<com.massifmaps.styles.PointStyleBuilder, PointStyleBuilderOptions> {
    createNative(options: PointStyleBuilderOptions) {
        return new com.massifmaps.styles.PointStyleBuilder();
    }

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

export interface PointStyleBuilder extends Acc_PointStyleBuilder, Omit<Met_PointStyleBuilder, 'buildStyle'> {}
bindNative(PointStyleBuilder, MET_PointStyleBuilder, ACC_PointStyleBuilder, { selectors: SEL_PointStyleBuilder, converters: { bitmap: massifImageConverter } });

export interface Point extends Omit<Acc_Point, 'geometry'>, Omit<Met_Point, 'getGeometry'> {}
bindNative(Point, MET_Point, ACC_Point, { selectors: SEL_Point });

export interface PointStyleBuilder extends Acc_StyleBuilder, Met_StyleBuilder {}
bindNative(PointStyleBuilder, MET_StyleBuilder, ACC_StyleBuilder, { selectors: SEL_StyleBuilder, converters: { color: colorConverter } });
