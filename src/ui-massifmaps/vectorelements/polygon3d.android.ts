import { Color } from '@nativescript/core';
import { geometryFromArgs, mapPosVectorFromArgs, mapPosVectorVectorFromArgs, nativeColorProperty } from '..';
import { BaseLineVectorElement } from './index.android';
import { BaseVectorElementStyleBuilder } from './index.common';
import { Polygon3DOptions, Polygon3DStyleBuilderOptions } from './polygon3d';
import {
    ACCESSORS as ACC_Polygon3DStyleBuilder,
    Accessors as Acc_Polygon3DStyleBuilder,
    METHODS as MET_Polygon3DStyleBuilder,
    Methods as Met_Polygon3DStyleBuilder,
    SELECTORS as SEL_Polygon3DStyleBuilder
} from '../bindings/styles/Polygon3DStyleBuilder';
import { bindNative } from '../nativeclass.common';
import { colorConverter } from '..';
import { ACCESSORS as ACC_Polygon3D, Accessors as Acc_Polygon3D, METHODS as MET_Polygon3D, Methods as Met_Polygon3D, SELECTORS as SEL_Polygon3D } from '../bindings/vectorelements/Polygon3D';
import { ACCESSORS as ACC_StyleBuilder, Accessors as Acc_StyleBuilder, METHODS as MET_StyleBuilder, Methods as Met_StyleBuilder, SELECTORS as SEL_StyleBuilder } from '../bindings/styles/StyleBuilder';

export class Polygon3DStyleBuilder extends BaseVectorElementStyleBuilder<com.massifmaps.styles.Polygon3DStyleBuilder, Polygon3DStyleBuilderOptions> {
    createNative(options: Polygon3DStyleBuilderOptions) {
        return new com.massifmaps.styles.Polygon3DStyleBuilder();
    }

    mBuildStyle: com.massifmaps.styles.Polygon3DStyle;
    buildStyle() {
        if (!this.mBuildStyle) {
            this.mBuildStyle = this.getNative().buildStyle();
        }
        return this.mBuildStyle;
    }
}

export class Polygon3D extends BaseLineVectorElement<com.massifmaps.vectorelements.Polygon3D, Polygon3DOptions> {
    createNative(options: Polygon3DOptions) {
        const style = this.buildStyle();
        let result: com.massifmaps.vectorelements.Polygon3D;
        if (options.positions) {
            result = new com.massifmaps.vectorelements.Polygon3D(mapPosVectorFromArgs(options.positions, options.ignoreAltitude), style, options.height);
        } else if (options.geometry) {
            result = new com.massifmaps.vectorelements.Polygon3D(geometryFromArgs(options.geometry), style, options.height);
        }
        if (options.holes) {
            result.setHoles(mapPosVectorVectorFromArgs(options.holes, options.ignoreAltitude));
        }
        // result['owner'] = new WeakRef(this);
        return result;
    }
    buildStyle() {
        let style: com.massifmaps.styles.Polygon3DStyle;
        const styleBuilder = this.options.styleBuilder;
        if (styleBuilder instanceof com.massifmaps.styles.Polygon3DStyle) {
            style = styleBuilder;
        } else if (styleBuilder instanceof Polygon3DStyleBuilder) {
            style = styleBuilder.buildStyle();
        } else if (styleBuilder.hasOwnProperty) {
            style = new Polygon3DStyleBuilder(styleBuilder as Polygon3DStyleBuilderOptions).buildStyle();
        }
        return style;
    }
    get styleBuilder() {
        return this.native ? this.native.getStyle() : this.options.styleBuilder;
    }
    set styleBuilder(value: Polygon3DStyleBuilderOptions | Polygon3DStyleBuilder | com.massifmaps.styles.Polygon3DStyle) {
        if (this.native && !this.duringInit) {
            this.options.styleBuilder = value as any;
            this.native.setStyle(this.buildStyle());
        }
    }
}

export interface Polygon3DStyleBuilder extends Acc_Polygon3DStyleBuilder, Omit<Met_Polygon3DStyleBuilder, 'buildStyle'> {}
bindNative(Polygon3DStyleBuilder, MET_Polygon3DStyleBuilder, ACC_Polygon3DStyleBuilder, { selectors: SEL_Polygon3DStyleBuilder, converters: { sideColor: colorConverter } });

export interface Polygon3D extends Acc_Polygon3D, Omit<Met_Polygon3D, 'getGeometry'> {}
bindNative(Polygon3D, MET_Polygon3D, ACC_Polygon3D, { selectors: SEL_Polygon3D });

export interface Polygon3DStyleBuilder extends Acc_StyleBuilder, Met_StyleBuilder {}
bindNative(Polygon3DStyleBuilder, MET_StyleBuilder, ACC_StyleBuilder, { selectors: SEL_StyleBuilder, converters: { color: colorConverter } });
