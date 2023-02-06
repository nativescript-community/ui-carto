import { Color } from '@nativescript/core/color';
import { geometryFromArgs, nativeAndroidEnumProperty, nativeCartoImageProperty, nativeColorProperty } from '..';
import { nativeProperty } from '..';
import { MarkerOptions, MarkerStyleBuilderOptions } from './marker';
import { BaseBillboardVectorElement, BillboardStyleBuilder } from './index.android';
import { BillboardOrientation, BillboardScaling } from '.';
import { Geometry } from '../geometry';
import { styleBuilderProperty } from './index.common';

export class MarkerStyleBuilder extends BillboardStyleBuilder<com.carto.styles.MarkerStyleBuilder, MarkerStyleBuilderOptions> {
    createNative(options: MarkerStyleBuilderOptions) {
        return new com.carto.styles.MarkerStyleBuilder();
    }
    @nativeProperty width: number;
    @nativeProperty size: number;
    @nativeColorProperty color: Color | string;
    @nativeCartoImageProperty bitmap: string;
    @nativeProperty anchorPointX: number;
    @nativeProperty anchorPointY: number;
    @nativeProperty clickSize: number;
    @nativeProperty scalingMode: BillboardScaling;
    @nativeProperty orientationMode: BillboardOrientation;

    mBuildStyle: com.carto.styles.MarkerStyle;
    buildStyle() {
        if (!this.mBuildStyle) {
            this.mBuildStyle = this.getNative().buildStyle();
        }
        return this.mBuildStyle;
    }
}

export class Marker extends BaseBillboardVectorElement<com.carto.vectorelements.Marker, MarkerOptions> {
    @styleBuilderProperty color: Color | string;
    @styleBuilderProperty bitmap: string;
    @styleBuilderProperty size: number;
    @styleBuilderProperty width: number;
    @styleBuilderProperty clickSize: number;
    @styleBuilderProperty anchorPointX: number;
    @styleBuilderProperty anchorPointY: number;
    createNative(options: MarkerOptions) {
        const style = this.buildStyle();
        let result: com.carto.vectorelements.Marker;
        if (options.geometry) {
            result = new com.carto.vectorelements.Marker(geometryFromArgs(options.geometry), style);
        } else {
            const nativePos = this.getNativePos(options.position, options.projection);
            result = new com.carto.vectorelements.Marker(nativePos, style);
        }
        return result;
    }
    buildStyle() {
        let style: com.carto.styles.MarkerStyle;
        const styleBuilder = this.options.styleBuilder;
        if (styleBuilder instanceof com.carto.styles.MarkerStyle) {
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
    set styleBuilder(value: MarkerStyleBuilder | com.carto.styles.MarkerStyle | MarkerStyleBuilderOptions) {
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
