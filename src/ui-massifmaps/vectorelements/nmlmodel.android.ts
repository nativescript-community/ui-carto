import { BasePointVectorElement, BaseVectorElementStyleBuilder } from '.';
import { nativeProperty } from '..';
import { NMLModelOptions, NMLModelStyleBuilderOptions } from './nmlmodel';

export class NMLModelStyleBuilder extends BaseVectorElementStyleBuilder<com.massifmaps.styles.NMLModelStyleBuilder, NMLModelStyleBuilderOptions> {
    createNative(options: NMLModelStyleBuilderOptions) {
        return new com.massifmaps.styles.BalloonPopupStyleBuilder();
    }

    mBuildStyle: com.massifmaps.styles.NMLModelStyle;
    buildStyle() {
        if (!this.mBuildStyle) {
            this.mBuildStyle = this.getNative().buildStyle();
        }
        return this.mBuildStyle;
    }
}

export class NMLModel extends BasePointVectorElement<com.massifmaps.vectorelements.NMLModel, NMLModelOptions> {
    @nativeProperty scale: number;

    createNative(options: NMLModelOptions) {
        const style = this.buildStyle();
        const nativePos = this.getNativePos(options.position, options.projection);
        const result = new com.massifmaps.vectorelements.NMLModel(nativePos, style);
        return result;
    }
    buildStyle() {
        let style: com.massifmaps.styles.NMLModelStyle;
        const styleBuilder = this.options.styleBuilder;
        if (styleBuilder instanceof com.massifmaps.styles.NMLModelStyle) {
            style = styleBuilder;
        } else if (styleBuilder instanceof NMLModelStyleBuilder) {
            style = styleBuilder.buildStyle();
        } else if (styleBuilder.hasOwnProperty) {
            style = new NMLModelStyleBuilder(styleBuilder).buildStyle();
        }
        return style;
    }
    get styleBuilder() {
        return this.native ? (this.native.getStyle() as any) : this.options.styleBuilder;
    }
    set styleBuilder(value: NMLModelStyleBuilder | com.massifmaps.styles.BalloonPopupStyle | NMLModelStyleBuilderOptions) {
        if (this.native && !this.duringInit) {
            this.options.styleBuilder = value;
            this.native.setStyle(this.buildStyle());
        }
    }
}
