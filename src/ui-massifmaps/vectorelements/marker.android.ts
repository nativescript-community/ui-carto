import { Color, ImageAsset, ImageSource } from '@nativescript/core';
import { BillboardOrientation, BillboardScaling } from '.';
import { geometryFromArgs, nativeAndroidEnumProperty, nativeColorProperty, nativeMassifImageProperty, nativeProperty } from '..';
import { Geometry } from '../geometry';
import { BaseBillboardVectorElement, BillboardStyleBuilder } from './index.android';
import { styleBuilderProperty } from './index.common';
import { MarkerOptions, MarkerStyleBuilderOptions } from './marker';
import {
    ACCESSORS as ACC_MarkerStyleBuilder,
    Accessors as Acc_MarkerStyleBuilder,
    METHODS as MET_MarkerStyleBuilder,
    Methods as Met_MarkerStyleBuilder,
    SELECTORS as SEL_MarkerStyleBuilder
} from '../bindings/styles/MarkerStyleBuilder';
import { bindNative } from '../nativeclass.common';
import { massifImageConverter } from '..';
import { ACCESSORS as ACC_Marker, Accessors as Acc_Marker, METHODS as MET_Marker, Methods as Met_Marker, SELECTORS as SEL_Marker } from '../bindings/vectorelements/Marker';
import { ACCESSORS as ACC_StyleBuilder, Accessors as Acc_StyleBuilder, METHODS as MET_StyleBuilder, Methods as Met_StyleBuilder, SELECTORS as SEL_StyleBuilder } from '../bindings/styles/StyleBuilder';
import { colorConverter } from '..';

export class MarkerStyleBuilder extends BillboardStyleBuilder<com.massifmaps.styles.MarkerStyleBuilder, MarkerStyleBuilderOptions> {
    createNative(options: MarkerStyleBuilderOptions) {
        return new com.massifmaps.styles.MarkerStyleBuilder();
    }

    mBuildStyle: com.massifmaps.styles.MarkerStyle;
    buildStyle() {
        if (!this.mBuildStyle) {
            this.mBuildStyle = this.getNative().buildStyle();
        }
        return this.mBuildStyle;
    }
}

export class Marker extends BaseBillboardVectorElement<com.massifmaps.vectorelements.Marker, MarkerOptions> {
    @styleBuilderProperty color: Color | string;
    @styleBuilderProperty bitmap: string;
    @styleBuilderProperty size: number;
    @styleBuilderProperty width: number;
    @styleBuilderProperty clickSize: number;
    @styleBuilderProperty anchorPointX: number;
    @styleBuilderProperty anchorPointY: number;
    createNative(options: MarkerOptions) {
        const style = this.buildStyle();
        let result: com.massifmaps.vectorelements.Marker;
        if (options.geometry) {
            result = new com.massifmaps.vectorelements.Marker(geometryFromArgs(options.geometry), style);
        } else {
            const nativePos = this.getNativePos(options.position, options.projection);
            result = new com.massifmaps.vectorelements.Marker(nativePos, style);
        }
        return result;
    }
    buildStyle() {
        let style: com.massifmaps.styles.MarkerStyle;
        const styleBuilder = this.options.styleBuilder;
        if (styleBuilder instanceof com.massifmaps.styles.MarkerStyle) {
            style = styleBuilder;
        } else if (styleBuilder instanceof MarkerStyleBuilder) {
            style = styleBuilder.buildStyle();
        } else if (styleBuilder.hasOwnProperty) {
            style = new MarkerStyleBuilder(styleBuilder as MarkerStyleBuilderOptions).buildStyle();
        }
        return style;
    }
    get styleBuilder() {
        return this.native ? this.native.getStyle() : this.options.styleBuilder;
    }
    set styleBuilder(value: MarkerStyleBuilder | com.massifmaps.styles.MarkerStyle | MarkerStyleBuilderOptions) {
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

export interface MarkerStyleBuilder extends Acc_MarkerStyleBuilder, Omit<Met_MarkerStyleBuilder, 'buildStyle'> {}
bindNative(MarkerStyleBuilder, MET_MarkerStyleBuilder, ACC_MarkerStyleBuilder, { selectors: SEL_MarkerStyleBuilder, converters: { bitmap: massifImageConverter } });

export interface Marker extends Acc_Marker, Met_Marker {}
bindNative(Marker, MET_Marker, ACC_Marker, { selectors: SEL_Marker });

export interface MarkerStyleBuilder extends Acc_StyleBuilder, Met_StyleBuilder {}
bindNative(MarkerStyleBuilder, MET_StyleBuilder, ACC_StyleBuilder, { selectors: SEL_StyleBuilder, converters: { color: colorConverter } });
