import { nativeAndroidEnumProperty } from '../index.android';
import { Color } from '@nativescript/core/color';
import { nativeColorProperty } from '..';
import { nativeProperty } from '..';
import { TextOptions, TextStyleBuilderOptions } from './text';
import { BillboardOrientation, BillboardStyleBuilder } from '.';
import { BaseBillboardVectorElement } from './index.android';
import { styleBuilderProperty } from './index.common';

export class TextStyleBuilder extends BillboardStyleBuilder<com.carto.styles.TextStyleBuilder, TextStyleBuilderOptions> {
    createNative(options: TextStyleBuilderOptions) {
        return new com.carto.styles.TextStyleBuilder();
    }
    @nativeProperty fontSize: number;
    @nativeProperty fontName: string;
    @nativeAndroidEnumProperty(com.carto.styles.BillboardOrientation, {}) orientationMode: BillboardOrientation;
    @nativeProperty breakLines: boolean;
    @nativeProperty textField: string;
    @nativeProperty strokeWidth: number;
    @nativeProperty borderWidth: number;
    @nativeColorProperty color: Color | string;
    @nativeColorProperty strokeColor: Color | string;
    @nativeColorProperty borderColor: Color | string;
    @nativeColorProperty backgroundColor: Color | string;
    @nativeProperty anchorPointX: number;
    @nativeProperty anchorPointY: number;
    @nativeProperty flippable: boolean;

    _buildStyle: com.carto.styles.TextStyle;
    buildStyle() {
        if (!this._buildStyle) {
            this._buildStyle = this.getNative().buildStyle() as com.carto.styles.TextStyle;
        }
        return this._buildStyle;
    }
}

export class Text extends BaseBillboardVectorElement<com.carto.vectorelements.Text, TextOptions> {
    @nativeProperty text: string;
    @styleBuilderProperty color: Color | string;
    createNative(options: TextOptions) {
        const style = this.buildStyle();
        const nativePos = this.getNativePos(options.position, options.projection);
        const result = new com.carto.vectorelements.Text(nativePos, style, options.text);
        // result['owner'] = new WeakRef(this);
        return result;
    }
    buildStyle() {
        let style: com.carto.styles.TextStyle;
        const styleBuilder = this.options.styleBuilder;
        if (styleBuilder instanceof com.carto.styles.TextStyle) {
            style = styleBuilder;
        } else if (styleBuilder instanceof TextStyleBuilder) {
            style = styleBuilder.buildStyle();
        } else if (styleBuilder.hasOwnProperty) {
            style = new TextStyleBuilder(styleBuilder as TextStyleBuilderOptions).buildStyle();
        }
        return style;
    }
    get styleBuilder() {
        return this.native ? (this.native.getStyle() as com.carto.styles.TextStyle) : this.options.styleBuilder;
    }
    set styleBuilder(value: TextStyleBuilder | com.carto.styles.TextStyle | TextStyleBuilderOptions) {
        if (this.native && !this.duringInit) {
            this.options.styleBuilder = value as any;
            this.native.setStyle(this.buildStyle());
        }
    }
}
