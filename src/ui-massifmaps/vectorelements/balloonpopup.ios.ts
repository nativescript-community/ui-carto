import { Color, ImageAsset, ImageSource } from '@nativescript/core';
import { nativeColorProperty, nativeMassifImageProperty, nativeProperty } from '..';
import { BalloonPopupOptions, BalloonPopupStyleBuilderOptions } from './balloonpopup';
import { BasePointVectorElement, BillboardStyleBuilder } from './index.ios';
import {
    ACCESSORS as ACC_BalloonPopupStyleBuilder,
    Accessors as Acc_BalloonPopupStyleBuilder,
    METHODS as MET_BalloonPopupStyleBuilder,
    Methods as Met_BalloonPopupStyleBuilder,
    SELECTORS as SEL_BalloonPopupStyleBuilder
} from '../bindings/styles/BalloonPopupStyleBuilder';
import { bindNative } from '../nativeclass.common';
import { colorConverter, massifImageConverter } from '..';
import {
    ACCESSORS as ACC_BalloonPopup,
    Accessors as Acc_BalloonPopup,
    METHODS as MET_BalloonPopup,
    Methods as Met_BalloonPopup,
    SELECTORS as SEL_BalloonPopup
} from '../bindings/vectorelements/BalloonPopup';
import { ACCESSORS as ACC_PopupStyleBuilder, Accessors as Acc_PopupStyleBuilder, METHODS as MET_PopupStyleBuilder, Methods as Met_PopupStyleBuilder, SELECTORS as SEL_PopupStyleBuilder } from '../bindings/styles/PopupStyleBuilder';
import { ACCESSORS as ACC_StyleBuilder, Accessors as Acc_StyleBuilder, METHODS as MET_StyleBuilder, Methods as Met_StyleBuilder, SELECTORS as SEL_StyleBuilder } from '../bindings/styles/StyleBuilder';
import { ACCESSORS as ACC_Popup, Accessors as Acc_Popup, METHODS as MET_Popup, Methods as Met_Popup, SELECTORS as SEL_Popup } from '../bindings/vectorelements/Popup';
import { ACCESSORS as ACC_Billboard, Accessors as Acc_Billboard, METHODS as MET_Billboard, Methods as Met_Billboard, SELECTORS as SEL_Billboard } from '../bindings/vectorelements/Billboard';

export class BalloonPopupStyleBuilder extends BillboardStyleBuilder<MSFBalloonPopupStyleBuilder, BalloonPopupStyleBuilderOptions> {
    createNative(options: BalloonPopupStyleBuilderOptions) {
        return MSFBalloonPopupStyleBuilder.alloc().init();
    }

    mBuildStyle: MSFBalloonPopupStyle;
    buildStyle() {
        if (!this.mBuildStyle) {
            this.mBuildStyle = this.getNative().buildStyle();
        }
        return this.mBuildStyle;
    }
}

export class BalloonPopup extends BasePointVectorElement<MSFBalloonPopup, BalloonPopupOptions> {
    createNative(options: BalloonPopupOptions) {
        const style = this.buildStyle();
        let result: MSFBalloonPopup;
        if (options.marker) {
            result = MSFBalloonPopup.alloc().initWithBaseBillboardStyleTitleDesc(options.marker.getNative(), style, options.title, options.description);
        } else {
            const nativePos = this.getNativePos(options.position, options.projection);

            result = MSFBalloonPopup.alloc().initWithPosStyleTitleDesc(nativePos, style, options.title, options.description);
        }
        // result['owner'] = new WeakRef(this);
        return result;
    }
    buildStyle() {
        let style: MSFBalloonPopupStyle;
        const styleBuilder = this.options.styleBuilder;
        if (styleBuilder instanceof MSFBalloonPopupStyle) {
            style = styleBuilder;
        } else if (styleBuilder instanceof BalloonPopupStyleBuilder) {
            style = styleBuilder.buildStyle();
        } else if (styleBuilder.hasOwnProperty) {
            style = new BalloonPopupStyleBuilder(styleBuilder as BalloonPopupStyleBuilderOptions).buildStyle();
        }
        return style;
    }
    get styleBuilder() {
        return this.native ? this.native.getStyle() : (this.options.styleBuilder as BalloonPopupStyleBuilder | MSFBalloonPopupStyle | BalloonPopupStyleBuilderOptions);
    }
    set styleBuilder(value: BalloonPopupStyleBuilder | MSFBalloonPopupStyle | BalloonPopupStyleBuilderOptions) {
        if (this.native && !this.duringInit) {
            this.options.styleBuilder = value as any;
            this.native.setStyle(this.buildStyle());
        }
    }
}

// class BuildingStyleObject<BO extends VectorElementStyleBuilderOptions, OptionsType extends VectorElementOptions, N, SN, E extends BaseVectorElement<N, OptionsType>, B extends BaseVectorElementStyleBuilder<SN, BO>> {
//     _styleBuilder: B;
//     _builtStyle: SN;
//     buildStyle() {
//         let style: MSFBalloonPopupStyle;
//         const styleBuilder = this._styleBuilder;
//         if (styleBuilder instanceof MSFBalloonPopupStyle) {
//             style = styleBuilder;
//         } else if (styleBuilder instanceof BalloonPopupStyleBuilder) {
//             style = styleBuilder.buildStyle();
//         } else if (styleBuilder.hasOwnProperty) {
//             style = new BalloonPopupStyleBuilder(styleBuilder).buildStyle();
//         }
//         return styleBuilder.buildStyle();
//     }
//     get styleBuilder() {
//         return this._styleBuilder;
//     }
//     set styleBuilder(value: OptionsType | B) {
//         if ((value as any).getNative) {
//             this._styleBuilder = value as B;
//         } else {
//             this._styleBuilder = new OptionsType(value);
//         }
//         this.options.styleBuilder = value as any;
//         if (this.native) {
//             this.native.setStyle(this.buildStyle());
//         }
//     }
// }

export interface BalloonPopupStyleBuilder extends Acc_BalloonPopupStyleBuilder, Omit<Met_BalloonPopupStyleBuilder, 'buildStyle'> {}
bindNative(BalloonPopupStyleBuilder, MET_BalloonPopupStyleBuilder, ACC_BalloonPopupStyleBuilder, {
    selectors: SEL_BalloonPopupStyleBuilder,
    converters: {
        descriptionColor: colorConverter,
        leftColor: colorConverter,
        leftImage: massifImageConverter,
        rightColor: colorConverter,
        rightImage: massifImageConverter,
        strokeColor: colorConverter,
        titleColor: colorConverter
    }
});

export interface BalloonPopup extends Acc_BalloonPopup, Met_BalloonPopup {}
bindNative(BalloonPopup, MET_BalloonPopup, ACC_BalloonPopup, { selectors: SEL_BalloonPopup });

export interface BalloonPopupStyleBuilder extends Acc_PopupStyleBuilder, Omit<Met_PopupStyleBuilder, 'buildStyle'> {}
bindNative(BalloonPopupStyleBuilder, MET_PopupStyleBuilder, ACC_PopupStyleBuilder, { selectors: SEL_PopupStyleBuilder });

export interface BalloonPopupStyleBuilder extends Acc_StyleBuilder, Met_StyleBuilder {}
bindNative(BalloonPopupStyleBuilder, MET_StyleBuilder, ACC_StyleBuilder, { selectors: SEL_StyleBuilder, converters: { color: colorConverter } });

export interface BalloonPopup extends Omit<Acc_Popup, 'style'>, Omit<Met_Popup, 'drawBitmap' | 'getStyle' | 'processClick' | 'setStyle'> {}
bindNative(BalloonPopup, MET_Popup, ACC_Popup, { selectors: SEL_Popup });

export interface BalloonPopup extends Acc_Billboard, Omit<Met_Billboard, 'getBounds' | 'getGeometry'> {}
bindNative(BalloonPopup, MET_Billboard, ACC_Billboard, { selectors: SEL_Billboard });
