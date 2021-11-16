import { Color } from '@nativescript/core/color';
import { nativeCartoImageProperty, nativeColorProperty } from '..';
import { nativeProperty } from '..';
import { BalloonPopupOptions, BalloonPopupStyleBuilderOptions } from './balloonpopup';
import { BasePointVectorElement, BillboardStyleBuilder } from './index.ios';

export class BalloonPopupStyleBuilder extends BillboardStyleBuilder<NTBalloonPopupStyleBuilder, BalloonPopupStyleBuilderOptions> {
    createNative(options: BalloonPopupStyleBuilderOptions) {
        return NTBalloonPopupStyleBuilder.alloc().init();
    }
    @nativeColorProperty color: string | Color;
    @nativeProperty cornerRadius: number;
    @nativeColorProperty descriptionColor: string | Color;
    @nativeProperty descriptionFontName: string;
    @nativeProperty descriptionFontSize: number;
    @nativeProperty descriptionWrap: boolean;
    @nativeColorProperty leftColor: string | Color;
    @nativeCartoImageProperty leftImage: string;
    @nativeColorProperty rightColor: string | Color;
    @nativeCartoImageProperty rightImage: string;
    @nativeColorProperty strokeColor: string | Color;
    @nativeProperty strokeWidth: number;
    @nativeColorProperty titleColor: string | Color;
    @nativeProperty titleFontName: string;
    @nativeProperty titleFontSize: number;
    @nativeProperty titleWrap: boolean;
    @nativeProperty triangleHeight: number;
    @nativeProperty triangleWidth: number;

    mBuildStyle: NTBalloonPopupStyle;
    buildStyle() {
        if (!this.mBuildStyle) {
            this.mBuildStyle = this.getNative().buildStyle();
        }
        return this.mBuildStyle;
    }
}

export class BalloonPopup extends BasePointVectorElement<NTBalloonPopup, BalloonPopupOptions> {
    createNative(options: BalloonPopupOptions) {
        const style = this.buildStyle();
        let result: NTBalloonPopup;
        if (options.marker) {
            result = NTBalloonPopup.alloc().initWithBaseBillboardStyleTitleDesc(options.marker.getNative(), style, options.title, options.description);
        } else {
            const nativePos = this.getNativePos(options.position, options.projection);

            result = NTBalloonPopup.alloc().initWithPosStyleTitleDesc(nativePos, style, options.title, options.description);
        }
        // result['owner'] = new WeakRef(this);
        return result;
    }
    buildStyle() {
        let style: NTBalloonPopupStyle;
        const styleBuilder = this.options.styleBuilder;
        if (styleBuilder instanceof NTBalloonPopupStyle) {
            style = styleBuilder;
        } else if (styleBuilder instanceof BalloonPopupStyleBuilder) {
            style = styleBuilder.buildStyle();
        } else if (styleBuilder.hasOwnProperty) {
            style = new BalloonPopupStyleBuilder(styleBuilder as BalloonPopupStyleBuilderOptions).buildStyle();
        }
        return style;
    }
    get styleBuilder() {
        return this.native ? (this.native.getStyle() as any) : this.options.styleBuilder;
    }
    set styleBuilder(value: BalloonPopupStyleBuilder | NTBalloonPopupStyle | BalloonPopupStyleBuilderOptions) {
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
//         let style: NTBalloonPopupStyle;
//         const styleBuilder = this._styleBuilder;
//         if (styleBuilder instanceof NTBalloonPopupStyle) {
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
