import { Color } from '@nativescript/core/color';
import { geometryFromArgs, mapPosVectorFromArgs, mapPosVectorVectorFromArgs, nativeColorProperty } from '..';
import { Geometry } from '../geometry';
import { BaseLineVectorElement } from './index.android';
import { BaseVectorElementStyleBuilder, lineStyleBuilderProperty, styleBuilderProperty } from './index.common';
import { LineStyleBuilder, LineStyleBuilderOptions } from './line';
import { PolygonOptions, PolygonStyleBuilderOptions } from './polygon';

export class PolygonStyleBuilder extends BaseVectorElementStyleBuilder<com.carto.styles.PolygonStyleBuilder, PolygonStyleBuilderOptions> {
    createNative(options: PolygonStyleBuilderOptions) {
        return new com.carto.styles.PolygonStyleBuilder();
    }
    @nativeColorProperty color: Color | string;

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
        let style: com.carto.styles.LineStyle;
        const styleBuilder = this.options.lineStyleBuilder;
        if (!styleBuilder) {
            return null;
        }
        if (styleBuilder instanceof com.carto.styles.LineStyle) {
            style = styleBuilder;
        } else if (styleBuilder instanceof LineStyleBuilder) {
            style = styleBuilder.buildStyle();
        } else if (styleBuilder.hasOwnProperty) {
            style = new LineStyleBuilder(styleBuilder as PolygonStyleBuilderOptions).buildStyle();
        }
        return style;
    }

    mBuildStyle: com.carto.styles.PolygonStyle;
    buildStyle() {
        if (!this.mBuildStyle) {
            this.mBuildStyle = this.getNative().buildStyle();
        }
        return this.mBuildStyle;
    }
}

export class Polygon extends BaseLineVectorElement<com.carto.vectorelements.Polygon, PolygonOptions> {
    @styleBuilderProperty color: Color | string;
    @styleBuilderProperty width: number;
    @lineStyleBuilderProperty lineColor: Color | string;
    @lineStyleBuilderProperty lineWidth: number;
    createNative(options: PolygonOptions) {
        const style = this.buildStyle();
        let result: com.carto.vectorelements.Polygon;
        if (options.positions) {
            result = new com.carto.vectorelements.Polygon(mapPosVectorFromArgs(options.positions, options.ignoreAltitude), style);
        } else if (options.geometry) {
            result = new com.carto.vectorelements.Polygon(geometryFromArgs(options.geometry), style);
        }
        if (options.holes) {
            result.setHoles(mapPosVectorVectorFromArgs(options.holes, options.ignoreAltitude));
        }
        return result;
    }
    buildStyle() {
        let style: com.carto.styles.PolygonStyle;
        const styleBuilder = this.options.styleBuilder;
        if (styleBuilder instanceof com.carto.styles.PolygonStyle) {
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
    set styleBuilder(value: PolygonStyleBuilder | com.carto.styles.PolygonStyle | PolygonStyleBuilderOptions) {
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
