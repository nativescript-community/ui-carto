import { Color } from '@nativescript/core';
import { BillboardOrientation, BillboardStyleBuilder } from '.';
import { nativeColorProperty, nativeProperty } from '..';
import { nativeAndroidEnumProperty } from '../index.android';
import { BaseBillboardVectorElement } from './index.android';
import { styleBuilderProperty } from './index.common';
import { TextOptions, TextStyleBuilderOptions } from './text';
import {
    ACCESSORS as ACC_TextStyleBuilder,
    Accessors as Acc_TextStyleBuilder,
    METHODS as MET_TextStyleBuilder,
    Methods as Met_TextStyleBuilder,
    SELECTORS as SEL_TextStyleBuilder
} from '../bindings/styles/TextStyleBuilder';
import { bindNative } from '../nativeclass.common';
import { colorConverter } from '..';
import { ACCESSORS as ACC_Text, Accessors as Acc_Text, METHODS as MET_Text, Methods as Met_Text, SELECTORS as SEL_Text } from '../bindings/vectorelements/Text';
import { ACCESSORS as ACC_LabelStyleBuilder, Accessors as Acc_LabelStyleBuilder, METHODS as MET_LabelStyleBuilder, Methods as Met_LabelStyleBuilder, SELECTORS as SEL_LabelStyleBuilder } from '../bindings/styles/LabelStyleBuilder';
import { ACCESSORS as ACC_StyleBuilder, Accessors as Acc_StyleBuilder, METHODS as MET_StyleBuilder, Methods as Met_StyleBuilder, SELECTORS as SEL_StyleBuilder } from '../bindings/styles/StyleBuilder';
import { ACCESSORS as ACC_Label, Accessors as Acc_Label, METHODS as MET_Label, Methods as Met_Label, SELECTORS as SEL_Label } from '../bindings/vectorelements/Label';

export class TextStyleBuilder extends BillboardStyleBuilder<com.massifmaps.styles.TextStyleBuilder, TextStyleBuilderOptions> {
    createNative(options: TextStyleBuilderOptions) {
        return new com.massifmaps.styles.TextStyleBuilder();
    }

    mBuildStyle: com.massifmaps.styles.TextStyle;
    buildStyle() {
        if (!this.mBuildStyle) {
            this.mBuildStyle = this.getNative().buildStyle() as com.massifmaps.styles.TextStyle;
        }
        return this.mBuildStyle;
    }
}

export class Text extends BaseBillboardVectorElement<com.massifmaps.vectorelements.Text, TextOptions> {
    @styleBuilderProperty color: Color | string;
    createNative(options: TextOptions) {
        const style = this.buildStyle();
        const nativePos = this.getNativePos(options.position, options.projection);
        const result = new com.massifmaps.vectorelements.Text(nativePos, style, options.text);
        // result['owner'] = new WeakRef(this);
        return result;
    }
    buildStyle() {
        let style: com.massifmaps.styles.TextStyle;
        const styleBuilder = this.options.styleBuilder;
        if (styleBuilder instanceof com.massifmaps.styles.TextStyle) {
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
    set styleBuilder(value: TextStyleBuilder | com.massifmaps.styles.TextStyle | TextStyleBuilderOptions) {
        if (this.native && !this.duringInit) {
            this.options.styleBuilder = value as any;
            this.native.setStyle(this.buildStyle());
        }
    }
}

export interface TextStyleBuilder extends Acc_TextStyleBuilder, Omit<Met_TextStyleBuilder, 'buildStyle'> {}
bindNative(TextStyleBuilder, MET_TextStyleBuilder, ACC_TextStyleBuilder, {
    selectors: SEL_TextStyleBuilder,
    converters: { backgroundColor: colorConverter, borderColor: colorConverter, strokeColor: colorConverter }
});

export interface Text extends Acc_Text, Met_Text {}
bindNative(Text, MET_Text, ACC_Text, { selectors: SEL_Text });

export interface TextStyleBuilder extends Acc_LabelStyleBuilder, Omit<Met_LabelStyleBuilder, 'buildStyle'> {}
bindNative(TextStyleBuilder, MET_LabelStyleBuilder, ACC_LabelStyleBuilder, { selectors: SEL_LabelStyleBuilder });

export interface TextStyleBuilder extends Acc_StyleBuilder, Met_StyleBuilder {}
bindNative(TextStyleBuilder, MET_StyleBuilder, ACC_StyleBuilder, { selectors: SEL_StyleBuilder, converters: { color: colorConverter } });

export interface Text extends Omit<Acc_Label, 'style'>, Omit<Met_Label, 'drawBitmap' | 'getStyle' | 'setStyle'> {}
bindNative(Text, MET_Label, ACC_Label, { selectors: SEL_Label });
