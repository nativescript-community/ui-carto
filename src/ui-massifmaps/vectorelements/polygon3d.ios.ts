import { BaseVectorElementStyleBuilder } from './index.common';
import { Color } from '@nativescript/core';
import { geometryFromArgs, mapPosVectorFromArgs, mapPosVectorVectorFromArgs, nativeColorProperty } from '..';
import { Polygon3DOptions, Polygon3DStyleBuilderOptions } from './polygon3d';
import { BaseLineVectorElement } from './index.ios';

export class Polygon3DStyleBuilder extends BaseVectorElementStyleBuilder<MSFPolygon3DStyleBuilder, Polygon3DStyleBuilderOptions> {
    createNative(options: Polygon3DStyleBuilderOptions) {
        return MSFPolygon3DStyleBuilder.alloc().init();
    }
    @nativeColorProperty color: Color | string;
    @nativeColorProperty sideColor: Color | string;

    mBuildStyle: MSFPolygon3DStyle;
    buildStyle() {
        if (!this.mBuildStyle) {
            this.mBuildStyle = this.getNative().buildStyle();
        }
        return this.mBuildStyle;
    }
}

export class Polygon3D extends BaseLineVectorElement<MSFPolygon3D, Polygon3DOptions> {
    createNative(options: Polygon3DOptions) {
        const style = this.buildStyle();
        let result: MSFPolygon3D;
        if (options.positions) {
            result = MSFPolygon3D.alloc().initWithPosesStyleHeight(mapPosVectorFromArgs(options.positions, options.ignoreAltitude), style, options.height);
        } else if (options.geometry) {
            result = MSFPolygon3D.alloc().initWithGeometryStyleHeight(geometryFromArgs(options.geometry), style, options.height);
        }
        if (options.holes) {
            result.setHoles(mapPosVectorVectorFromArgs(options.holes, options.ignoreAltitude));
        }
        return result;
    }
    buildStyle() {
        let style: MSFPolygon3DStyle;
        const styleBuilder = this.options.styleBuilder;
        if (styleBuilder instanceof MSFPolygon3DStyle) {
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
    set styleBuilder(value: Polygon3DStyleBuilder | MSFPolygon3DStyle | Polygon3DStyleBuilderOptions) {
        if (this.native && !this.duringInit) {
            this.options.styleBuilder = value as any;
            this.native.setStyle(this.buildStyle());
        }
    }
}
