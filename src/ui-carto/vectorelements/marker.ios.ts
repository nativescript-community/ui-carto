import { Color, ImageAsset, ImageSource } from '@nativescript/core';
import { BillboardOrientation, BillboardScaling, BillboardStyleBuilder } from '.';
import { geometryFromArgs, nativeCartoImageProperty, nativeColorProperty, nativeProperty } from '..';
import { Geometry } from '../geometry';
import { styleBuilderProperty } from './index.common';
import { BaseBillboardVectorElement } from './index.ios';
import { MarkerOptions, MarkerStyleBuilderOptions } from './marker';

export class MarkerStyleBuilder extends BillboardStyleBuilder<NTMarkerStyleBuilder, MarkerStyleBuilderOptions> {
    createNative(options: MarkerStyleBuilderOptions) {
        return NTMarkerStyleBuilder.alloc().init();
    }
    @nativeProperty width: number;
    @nativeProperty size: number;
    @nativeColorProperty color: Color | string;
    @nativeCartoImageProperty bitmap: string | ImageSource | ImageAsset;
    @nativeProperty clickSize: number;
    @nativeProperty scalingMode: BillboardScaling;
    @nativeProperty orientationMode: BillboardOrientation;

    mBuildStyle: NTMarkerStyle;
    buildStyle() {
        if (!this.mBuildStyle) {
            this.mBuildStyle = this.getNative().buildStyle();
        }
        return this.mBuildStyle;
    }
}

export class Marker extends BaseBillboardVectorElement<NTMarker, MarkerOptions> {
    @styleBuilderProperty color: Color | string;
    @styleBuilderProperty bitmap: string;
    @styleBuilderProperty size: number;
    @styleBuilderProperty width: number;
    @styleBuilderProperty clickSize: number;
    @styleBuilderProperty anchorPointX: number;
    @styleBuilderProperty anchorPointY: number;
    createNative(options: MarkerOptions) {
        const style = this.buildStyle();
        let result: NTMarker;
        if (options.geometry) {
            result = NTMarker.alloc().initWithGeometryStyle(geometryFromArgs(options.geometry), style);
        } else {
            const nativePos = this.getNativePos(options.position, options.projection);
            result = NTMarker.alloc().initWithPosStyle(nativePos, style);
        }
        return result;
    }
    buildStyle() {
        let style: NTMarkerStyle;
        const styleBuilder = this.options.styleBuilder;
        if (styleBuilder instanceof NTMarkerStyle) {
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
    set styleBuilder(value: MarkerStyleBuilder | NTMarkerStyle | MarkerStyleBuilderOptions) {
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
