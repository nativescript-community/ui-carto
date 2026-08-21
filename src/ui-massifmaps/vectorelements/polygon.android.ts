import { Color } from '@nativescript/core';
import { geometryFromArgs, mapPosVectorFromArgs, mapPosVectorVectorFromArgs, nativeColorProperty } from '..';
import { Geometry } from '../geometry';
import { BaseLineVectorElement } from './index.android';
import { BaseVectorElementStyleBuilder, lineStyleBuilderProperty, styleBuilderProperty } from './index.common';
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

export class PolygonStyleBuilder extends BaseVectorElementStyleBuilder<com.massifmaps.styles.PolygonStyleBuilder, PolygonStyleBuilderOptions> {
    createNative(options: PolygonStyleBuilderOptions) {
        return new com.massifmaps.styles.PolygonStyleBuilder();
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
        let style: com.massifmaps.styles.LineStyle;
        const styleBuilder = this.options.lineStyleBuilder;
        if (!styleBuilder) {
            return null;
        }
        if (styleBuilder instanceof com.massifmaps.styles.LineStyle) {
            style = styleBuilder;
        } else if (styleBuilder instanceof LineStyleBuilder) {
            style = styleBuilder.buildStyle();
        } else if (styleBuilder.hasOwnProperty) {
            style = new LineStyleBuilder(styleBuilder as PolygonStyleBuilderOptions).buildStyle();
        }
        return style;
    }

    mBuildStyle: com.massifmaps.styles.PolygonStyle;
    buildStyle() {
        if (!this.mBuildStyle) {
            this.mBuildStyle = this.getNative().buildStyle();
        }
        return this.mBuildStyle;
    }
}

export class Polygon extends BaseLineVectorElement<com.massifmaps.vectorelements.Polygon, PolygonOptions> {
    @styleBuilderProperty color: Color | string;
    @styleBuilderProperty width: number;
    @lineStyleBuilderProperty lineColor: Color | string;
    @lineStyleBuilderProperty lineWidth: number;
    createNative(options: PolygonOptions) {
        const style = this.buildStyle();
        let result: com.massifmaps.vectorelements.Polygon;
        if (options.positions) {
            result = new com.massifmaps.vectorelements.Polygon(mapPosVectorFromArgs(options.positions, options.ignoreAltitude), style);
        } else if (options.geometry) {
            result = new com.massifmaps.vectorelements.Polygon(geometryFromArgs(options.geometry), style);
        }
        if (options.holes) {
            result.setHoles(mapPosVectorVectorFromArgs(options.holes, options.ignoreAltitude));
        }
        return result;
    }
    buildStyle() {
        let style: com.massifmaps.styles.PolygonStyle;
        const styleBuilder = this.options.styleBuilder;
        if (styleBuilder instanceof com.massifmaps.styles.PolygonStyle) {
            style = styleBuilder;
        } else if (styleBuilder instanceof PolygonStyleBuilder) {
            style = styleBuilder.buildStyle();
        } else if (styleBuilder.hasOwnProperty) {
            style = new PolygonStyleBuilder(styleBuilder).buildStyle();
        }
        return style;
    }
    get styleBuilder() {
        return this.native ? this.native.getStyle() : this.options.styleBuilder;
    }
    set styleBuilder(value: PolygonStyleBuilder | com.massifmaps.styles.PolygonStyle | PolygonStyleBuilderOptions) {
        if (this.native && !this.duringInit) {
            this.options.styleBuilder = value as any;
            this.native.setStyle(this.buildStyle());
        }
    }

    rebuildLineStyle() {
        this.options.styleBuilder.lineStyleBuilder = this.options.styleBuilder.lineStyleBuilder;
        this.rebuildStyle();
    }
    set geometry(geometry: Geometry) {
        if (this.native) {
            this.native.setGeometry(geometryFromArgs(geometry));
        }
    }
}

export interface PolygonStyleBuilder extends Acc_PolygonStyleBuilder, Omit<Met_PolygonStyleBuilder, 'buildStyle'> {}
bindNative(PolygonStyleBuilder, MET_PolygonStyleBuilder, ACC_PolygonStyleBuilder, { selectors: SEL_PolygonStyleBuilder });

export interface Polygon extends Omit<Acc_Polygon, 'geometry'>, Omit<Met_Polygon, 'getGeometry'> {}
bindNative(Polygon, MET_Polygon, ACC_Polygon, { selectors: SEL_Polygon });

export interface PolygonStyleBuilder extends Acc_StyleBuilder, Met_StyleBuilder {}
bindNative(PolygonStyleBuilder, MET_StyleBuilder, ACC_StyleBuilder, { selectors: SEL_StyleBuilder, converters: { color: colorConverter } });
