import { BasePointVectorElement, BaseVectorElementStyleBuilder } from '.';
import { nativeProperty } from '..';
import { NMLModelOptions, NMLModelStyleBuilderOptions } from './nmlmodel';
import {
    ACCESSORS as ACC_NMLModelStyleBuilder,
    Accessors as Acc_NMLModelStyleBuilder,
    METHODS as MET_NMLModelStyleBuilder,
    Methods as Met_NMLModelStyleBuilder,
    SELECTORS as SEL_NMLModelStyleBuilder
} from '../bindings/styles/NMLModelStyleBuilder';
import { bindNative } from '../nativeclass.common';
import { ACCESSORS as ACC_NMLModel, Accessors as Acc_NMLModel, METHODS as MET_NMLModel, Methods as Met_NMLModel, SELECTORS as SEL_NMLModel } from '../bindings/vectorelements/NMLModel';
import { mapVecConverter } from '..';
import { ACCESSORS as ACC_BillboardStyleBuilder, Accessors as Acc_BillboardStyleBuilder, METHODS as MET_BillboardStyleBuilder, Methods as Met_BillboardStyleBuilder, SELECTORS as SEL_BillboardStyleBuilder } from '../bindings/styles/BillboardStyleBuilder';
import { ACCESSORS as ACC_StyleBuilder, Accessors as Acc_StyleBuilder, METHODS as MET_StyleBuilder, Methods as Met_StyleBuilder, SELECTORS as SEL_StyleBuilder } from '../bindings/styles/StyleBuilder';
import { colorConverter } from '..';
import { ACCESSORS as ACC_Billboard, Accessors as Acc_Billboard, METHODS as MET_Billboard, Methods as Met_Billboard, SELECTORS as SEL_Billboard } from '../bindings/vectorelements/Billboard';

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

export interface NMLModelStyleBuilder extends Acc_NMLModelStyleBuilder, Omit<Met_NMLModelStyleBuilder, 'buildStyle'> {}
bindNative(NMLModelStyleBuilder, MET_NMLModelStyleBuilder, ACC_NMLModelStyleBuilder, { selectors: SEL_NMLModelStyleBuilder });

export interface NMLModel extends Acc_NMLModel, Met_NMLModel {}
bindNative(NMLModel, MET_NMLModel, ACC_NMLModel, { selectors: SEL_NMLModel, converters: { rotationAxis: mapVecConverter } });

export interface NMLModelStyleBuilder extends Acc_BillboardStyleBuilder, Met_BillboardStyleBuilder {}
bindNative(NMLModelStyleBuilder, MET_BillboardStyleBuilder, ACC_BillboardStyleBuilder, { selectors: SEL_BillboardStyleBuilder });

export interface NMLModelStyleBuilder extends Acc_StyleBuilder, Met_StyleBuilder {}
bindNative(NMLModelStyleBuilder, MET_StyleBuilder, ACC_StyleBuilder, { selectors: SEL_StyleBuilder, converters: { color: colorConverter } });

export interface NMLModel extends Acc_Billboard, Omit<Met_Billboard, 'getBounds' | 'getGeometry' | 'setRotation'> {}
bindNative(NMLModel, MET_Billboard, ACC_Billboard, { selectors: SEL_Billboard });
