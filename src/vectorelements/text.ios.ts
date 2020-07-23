import { Color } from '@nativescript/core/color';
import { nativeColorProperty } from '..';
import { nativeProperty } from '../index.common';
import { TextOptions, TextStyleBuilderOptions } from './text';
import { BaseBillboardVectorElement, BillboardOrientation, BillboardStyleBuilder } from '.';

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
    @nativeColorProperty color: Color | string;
    @nativeColorProperty strokeColor: Color | string;
    @nativeColorProperty borderColor: Color | string;
    @nativeColorProperty backgroundColor: Color | string;
    @nativeProperty flippable: boolean;

    _buildStyle: NTTextStyle;
    buildStyle() {
        if (!this._buildStyle) {
            this._buildStyle = this.getNative().buildStyle();
        }
        return this._buildStyle;
    }
}

export class Text extends BaseBillboardVectorElement<NTText, TextOptions> {
    @nativeProperty text: string;
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
