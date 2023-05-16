import { Color } from '@nativescript/core';
import { geometryFromArgs, mapPosVectorFromArgs, mapPosVectorVectorFromArgs, nativeColorProperty } from '..';
import { BaseLineVectorElement } from './index.android';
import { BaseVectorElementStyleBuilder } from './index.common';
import { Polygon3DOptions, Polygon3DStyleBuilderOptions } from './polygon3d';

export class Polygon3DStyleBuilder extends BaseVectorElementStyleBuilder<com.carto.styles.Polygon3DStyleBuilder, Polygon3DStyleBuilderOptions> {
    createNative(options: Polygon3DStyleBuilderOptions) {
        return new com.carto.styles.Polygon3DStyleBuilder();
    }
    @nativeColorProperty color: Color | string;
    @nativeColorProperty sideColor: Color | string;

    mBuildStyle: com.carto.styles.Polygon3DStyle;
    buildStyle() {
        if (!this.mBuildStyle) {
            this.mBuildStyle = this.getNative().buildStyle();
        }
        return this.mBuildStyle;
    }
}

export class Polygon3D extends BaseLineVectorElement<com.carto.vectorelements.Polygon3D, Polygon3DOptions> {
    createNative(options: Polygon3DOptions) {
        const style = this.buildStyle();
        let result: com.carto.vectorelements.Polygon3D;
        if (options.positions) {
            result = new com.carto.vectorelements.Polygon3D(mapPosVectorFromArgs(options.positions, options.ignoreAltitude), style, options.height);
        } else if (options.geometry) {
            result = new com.carto.vectorelements.Polygon3D(geometryFromArgs(options.geometry), style, options.height);
        }
        if (options.holes) {
            result.setHoles(mapPosVectorVectorFromArgs(options.holes, options.ignoreAltitude));
        }
        // result['owner'] = new WeakRef(this);
        return result;
    }
    buildStyle() {
        let style: com.carto.styles.Polygon3DStyle;
        const styleBuilder = this.options.styleBuilder;
        if (styleBuilder instanceof com.carto.styles.Polygon3DStyle) {
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
    set styleBuilder(value: Polygon3DStyleBuilderOptions | Polygon3DStyleBuilder | com.carto.styles.Polygon3DStyle) {
        if (this.native && !this.duringInit) {
            this.options.styleBuilder = value as any;
            this.native.setStyle(this.buildStyle());
        }
    }
}
