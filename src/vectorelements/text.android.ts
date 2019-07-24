import { Color } from 'tns-core-modules/color/color';
import { nativeColorProperty } from '../carto';
import { nativeProperty } from '../carto.common';
import { TextOptions, TextStyleBuilderOptions } from './text';
import { BasePointVectorElement, BillboardOrientation, BillboardStyleBuilder } from './vectorelements';
import { nativeAndroidEnumProperty } from 'nativescript-carto/carto.android';

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

export class Text extends BasePointVectorElement<com.carto.vectorelements.Text, TextOptions> {
    @nativeProperty text: string;
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
        this.options.styleBuilder = value as any;
        if (this.native) {
            this.native.setStyle(this.buildStyle());
        }
    }
}
