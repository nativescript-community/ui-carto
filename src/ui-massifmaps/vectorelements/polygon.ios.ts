import { Color } from '@nativescript/core';
import { geometryFromArgs, mapPosVectorFromArgs, mapPosVectorVectorFromArgs, nativeColorProperty } from '..';
import { Geometry } from '../geometry';
import { BaseVectorElementStyleBuilder, lineStyleBuilderProperty, styleBuilderProperty } from './index.common';
import { BaseLineVectorElement } from './index.ios';
import { LineStyleBuilder, LineStyleBuilderOptions } from './line';
import { PolygonOptions, PolygonStyleBuilderOptions } from './polygon';
import {
    ACCESSORS as ACC_PolygonStyleBuilder,
    Accessors as Acc_PolygonStyleBuilder,
    METHODS as MET_PolygonStyleBuilder,
    Methods as Met_PolygonStyleBuilder,
    SELECTORS as SEL_PolygonStyleBuilder
} from '../bindings/styles/PolygonStyleBuilder';
import { bindNative } from '../nativeclass.common';
import { ACCESSORS as ACC_Polygon, Accessors as Acc_Polygon, METHODS as MET_Polygon, Methods as Met_Polygon, SELECTORS as SEL_Polygon } from '../bindings/vectorelements/Polygon';
import { ACCESSORS as ACC_StyleBuilder, Accessors as Acc_StyleBuilder, METHODS as MET_StyleBuilder, Methods as Met_StyleBuilder, SELECTORS as SEL_StyleBuilder } from '../bindings/styles/StyleBuilder';
import { colorConverter } from '..';

export class PolygonStyleBuilder extends BaseVectorElementStyleBuilder<MSFPolygonStyleBuilder, PolygonStyleBuilderOptions> {
    createNative(options: PolygonStyleBuilderOptions) {
        return MSFPolygonStyleBuilder.alloc().init();
    }

    get lineStyleBuilder() {
        return this.options.lineStyleBuilder;
    }
    set lineStyleBuilder(value: LineStyleBuilder | LineStyleBuilderOptions | any) {
        this.options.lineStyleBuilder = value;
        if (this.native) {
            this.native.setLineStyle(this.buildLineStyle());
            this.mBuildStyle = null;
        }
    }
    buildLineStyle() {
        let style: MSFLineStyle;
        const styleBuilder = this.options.lineStyleBuilder;
        if (!styleBuilder) {
            return null;
        }
        if (styleBuilder instanceof MSFLineStyle) {
            style = styleBuilder;
        } else if (styleBuilder instanceof LineStyleBuilder) {
            style = styleBuilder.buildStyle();
        } else if (styleBuilder.hasOwnProperty) {
            style = new LineStyleBuilder(styleBuilder).buildStyle();
        }
        return style;
    }

    mBuildStyle: MSFPolygonStyle;
    buildStyle() {
        if (!this.mBuildStyle) {
            this.mBuildStyle = this.getNative().buildStyle();
        }
        return this.mBuildStyle;
    }
}

export class Polygon extends BaseLineVectorElement<MSFPolygon, PolygonOptions> {
    @styleBuilderProperty color: Color | string;
    @styleBuilderProperty width: number;
    @lineStyleBuilderProperty lineColor: Color | string;
    @lineStyleBuilderProperty lineWidth: number;
    createNative(options: PolygonOptions) {
        const style = this.buildStyle();

        let result: MSFPolygon;
        if (options.positions) {
            result = MSFPolygon.alloc().initWithPosesStyle(mapPosVectorFromArgs(options.positions, options.ignoreAltitude), style);
        } else if (options.geometry) {
            result = MSFPolygon.alloc().initWithGeometryStyle(geometryFromArgs(options.geometry), style);
        }
        if (options.holes) {
            result.setHoles(mapPosVectorVectorFromArgs(options.holes, options.ignoreAltitude));
        }
        return result;
    }
    buildStyle() {
        let style: MSFPolygonStyle;
        const styleBuilder = this.options.styleBuilder;
        if (styleBuilder instanceof MSFPolygonStyle) {
            style = styleBuilder;
        } else if (styleBuilder instanceof PolygonStyleBuilder) {
            style = styleBuilder.buildStyle();
        } else if (styleBuilder.hasOwnProperty) {
            style = new PolygonStyleBuilder(styleBuilder as PolygonStyleBuilderOptions).buildStyle();
        }
        return style;
    }
    get styleBuilder() {
        return this.native ? this.native.getStyle() : this.options.styleBuilder;
    }
    set styleBuilder(value: PolygonStyleBuilder | MSFPolygonStyle | PolygonStyleBuilderOptions) {
        if (this.native && !this.duringInit) {
            this.options.styleBuilder = value as any;
            this.native.setStyle(this.buildStyle());
        }
    }
    set geometry(geometry: Geometry) {
        if (this.native) {
            this.native.setGeometry(geometryFromArgs(geometry));
        }
    }
    rebuildLineStyle() {
        this.options.styleBuilder.lineStyleBuilder = this.options.styleBuilder.lineStyleBuilder;
        this.rebuildStyle();
    }
}

export interface PolygonStyleBuilder extends Acc_PolygonStyleBuilder, Omit<Met_PolygonStyleBuilder, 'buildStyle'> {}
bindNative(PolygonStyleBuilder, MET_PolygonStyleBuilder, ACC_PolygonStyleBuilder, { selectors: SEL_PolygonStyleBuilder });

export interface Polygon extends Omit<Acc_Polygon, 'geometry'>, Omit<Met_Polygon, 'getGeometry'> {}
bindNative(Polygon, MET_Polygon, ACC_Polygon, { selectors: SEL_Polygon });

export interface PolygonStyleBuilder extends Acc_StyleBuilder, Met_StyleBuilder {}
bindNative(PolygonStyleBuilder, MET_StyleBuilder, ACC_StyleBuilder, { selectors: SEL_StyleBuilder, converters: { color: colorConverter } });
