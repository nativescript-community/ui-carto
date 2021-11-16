import { Color } from '@nativescript/core';
import { nativeColorProperty } from '..';
import { nativeProperty } from '..';
import { TextOptions, TextStyleBuilderOptions } from './text';
import { BillboardOrientation, BillboardStyleBuilder } from '.';
import { BaseBillboardVectorElement } from './index.ios';
import { styleBuilderProperty } from './index.common';

export class TextStyleBuilder extends BillboardStyleBuilder<NTTextStyleBuilder, TextStyleBuilderOptions> {
    createNative(options: TextStyleBuilderOptions) {
        return NTTextStyleBuilder.alloc().init();
    }

    @nativeProperty fontSize: number;
    @nativeProperty anchorPointX: number;
    @nativeProperty anchorPointY: number;
    @nativeProperty fontName: string;
    @nativeProperty orientationMode: BillboardOrientation;
    @nativeProperty breakLines: boolean;
    @nativeProperty strokeWidth: number;
    @nativeProperty borderWidth: number;
    @nativeColorProperty color: Color | string;
    @nativeColorProperty strokeColor: Color | string;
    @nativeColorProperty borderColor: Color | string;
    @nativeColorProperty backgroundColor: Color | string;
    @nativeProperty flippable: boolean;

    mBuildStyle: NTTextStyle;
    buildStyle() {
        if (!this.mBuildStyle) {
            this.mBuildStyle = this.getNative().buildStyle();
        }
        return this.mBuildStyle;
    }
}

export class Text extends BaseBillboardVectorElement<NTText, TextOptions> {
    @nativeProperty text: string;
    @styleBuilderProperty color: Color | string;
    createNative(options: TextOptions) {
        const style = this.buildStyle();
        const nativePos = this.getNativePos(options.position, options.projection);
        const result = NTText.alloc().initWithPosStyleText(nativePos, style, options.text);
        // result['owner'] = new WeakRef(this);
        return result;
    }

    buildStyle() {
        let style: NTTextStyle;
        const styleBuilder = this.options.styleBuilder;
        if (styleBuilder instanceof NTTextStyle) {
            style = styleBuilder;
        } else if (styleBuilder instanceof TextStyleBuilder) {
            style = styleBuilder.buildStyle();
        } else if (styleBuilder.hasOwnProperty) {
            style = new TextStyleBuilder(styleBuilder as TextStyleBuilderOptions).buildStyle();
        }
        return style;
    }
    get styleBuilder() {
        return this.native ? this.native.getStyle() : this.options.styleBuilder;
    }
    set styleBuilder(value: TextStyleBuilder | NTTextStyle | TextStyleBuilderOptions) {
        if (this.native && !this.duringInit) {
            this.options.styleBuilder = value as any;
            this.native.setStyle(this.buildStyle());
        }
    }
}
