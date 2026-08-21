import { Color, ImageAsset, ImageSource } from '@nativescript/core';
import { BillboardOrientation, BillboardScaling, BillboardStyleBuilder } from '.';
import { geometryFromArgs, nativeColorProperty, nativeMassifImageProperty, nativeProperty } from '..';
import { Geometry } from '../geometry';
import { styleBuilderProperty } from './index.common';
import { BaseBillboardVectorElement } from './index.ios';
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

export class MarkerStyleBuilder extends BillboardStyleBuilder<MSFMarkerStyleBuilder, MarkerStyleBuilderOptions> {
    createNative(options: MarkerStyleBuilderOptions) {
        return MSFMarkerStyleBuilder.alloc().init();
    }

    mBuildStyle: MSFMarkerStyle;
    buildStyle() {
        if (!this.mBuildStyle) {
            this.mBuildStyle = this.getNative().buildStyle();
        }
        return this.mBuildStyle;
    }
}

export class Marker extends BaseBillboardVectorElement<MSFMarker, MarkerOptions> {
    @styleBuilderProperty color: Color | string;
    @styleBuilderProperty bitmap: string;
    @styleBuilderProperty size: number;
    @styleBuilderProperty width: number;
    @styleBuilderProperty clickSize: number;
    @styleBuilderProperty anchorPointX: number;
    @styleBuilderProperty anchorPointY: number;
    createNative(options: MarkerOptions) {
        const style = this.buildStyle();
        let result: MSFMarker;
        if (options.geometry) {
            result = MSFMarker.alloc().initWithGeometryStyle(geometryFromArgs(options.geometry), style);
        } else {
            const nativePos = this.getNativePos(options.position, options.projection);
            result = MSFMarker.alloc().initWithPosStyle(nativePos, style);
        }
        return result;
    }
    buildStyle() {
        let style: MSFMarkerStyle;
        const styleBuilder = this.options.styleBuilder;
        if (styleBuilder instanceof MSFMarkerStyle) {
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
    set styleBuilder(value: MarkerStyleBuilder | MSFMarkerStyle | MarkerStyleBuilderOptions) {
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
