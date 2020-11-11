import { Color } from '@nativescript/core/color';
import { nativeCartoImageProperty, nativeColorProperty } from '..';
import { nativeProperty } from '../index.common';
import { MarkerOptions, MarkerStyleBuilderOptions } from './marker';
import { BaseBillboardVectorElement, BillboardOrientation, BillboardScaling, BillboardStyleBuilder } from '.';

export class MarkerStyleBuilder extends BillboardStyleBuilder<NTMarkerStyleBuilder, MarkerStyleBuilderOptions> {
    createNative(options: MarkerStyleBuilderOptions) {
        return NTMarkerStyleBuilder.alloc().init();
    }
    @nativeProperty width: number;
    @nativeProperty size: number;
    @nativeColorProperty color: Color | string;
    @nativeCartoImageProperty bitmap: string;
    @nativeProperty clickSize: number;
    @nativeProperty scalingMode: BillboardScaling;
    @nativeProperty orientationMode: BillboardOrientation;

    _buildStyle: NTMarkerStyle;
    buildStyle() {
        if (!this._buildStyle) {
            this._buildStyle = this.getNative().buildStyle();
        }
        return this._buildStyle;
    }
}

export class Marker extends BaseBillboardVectorElement<NTMarker, MarkerOptions> {
    createNative(options: MarkerOptions) {
        const style = this.buildStyle();
        let result: NTMarker;
        if (options.geometry) {
            const geometry = options.geometry.native ? options.geometry.getNative() : options.geometry;
            result = NTMarker.alloc().initWithGeometryStyle(geometry, style);
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
}
