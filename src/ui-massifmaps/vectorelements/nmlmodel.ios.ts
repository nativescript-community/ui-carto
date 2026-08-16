import { BasePointVectorElement, BaseVectorElementStyleBuilder } from '.';
import { nativeProperty } from '..';
import { NMLModelOptions, NMLModelStyleBuilderOptions } from './nmlmodel';

export class NMLModelStyleBuilder extends BaseVectorElementStyleBuilder<MSFNMLModelStyleBuilder, NMLModelStyleBuilderOptions> {
    createNative(options: NMLModelStyleBuilderOptions) {
        return MSFBalloonPopupStyleBuilder.alloc().init();
    }

    mBuildStyle: MSFNMLModelStyle;
    buildStyle() {
        if (!this.mBuildStyle) {
            this.mBuildStyle = this.getNative().buildStyle();
        }
        return this.mBuildStyle;
    }
}

export class NMLModel extends BasePointVectorElement<MSFNMLModel, NMLModelOptions> {
    @nativeProperty scale: number;

    createNative(options: NMLModelOptions) {
        const style = this.buildStyle();
        const nativePos = this.getNativePos(options.position, options.projection);
        const result = MSFNMLModel.alloc().initWithPosStyle(nativePos, style);
        return result;
    }
    buildStyle() {
        let style: MSFNMLModelStyle;
        const styleBuilder = this.options.styleBuilder;
        if (styleBuilder instanceof MSFNMLModelStyle) {
            style = styleBuilder;
        } else if (styleBuilder instanceof NMLModelStyleBuilder) {
            style = styleBuilder.buildStyle();
        } else if (styleBuilder.hasOwnProperty) {
            style = new NMLModelStyleBuilder(styleBuilder).buildStyle();
        }
        return style;
    }
    get styleBuilder() {
        return this.native ? (this.native.getStyle() as any) : (this.options.styleBuilder as any);
    }
    set styleBuilder(value: NMLModelStyleBuilder | MSFBalloonPopupStyle | NMLModelStyleBuilderOptions) {
        if (this.native && !this.duringInit) {
            this.options.styleBuilder = value;
            this.native.setStyle(this.buildStyle());
        }
    }
}
