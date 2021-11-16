import { BaseVectorElementStyleBuilder, lineStyleBuilderProperty, styleBuilderProperty } from './index.common';
import { BaseLineVectorElement } from './index.ios';
import { PolygonOptions, PolygonStyleBuilderOptions } from './polygon';
import { Color } from '@nativescript/core/color';
import { LineStyleBuilder, LineStyleBuilderOptions } from './line';
import { geometryFromArgs, mapPosVectorFromArgs, mapPosVectorVectorFromArgs, nativeColorProperty } from '..';
import { Geometry } from '../geometry';

export class PolygonStyleBuilder extends BaseVectorElementStyleBuilder<NTPolygonStyleBuilder, PolygonStyleBuilderOptions> {
    createNative(options: PolygonStyleBuilderOptions) {
        return NTPolygonStyleBuilder.alloc().init();
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
        let style: NTLineStyle;
        const styleBuilder = this.options.lineStyleBuilder;
        if (!styleBuilder) {
            return null;
        }
        if (styleBuilder instanceof NTLineStyle) {
            style = styleBuilder;
        } else if (styleBuilder instanceof LineStyleBuilder) {
            style = styleBuilder.buildStyle();
        } else if (styleBuilder.hasOwnProperty) {
            style = new LineStyleBuilder(styleBuilder).buildStyle();
        }
        return style;
    }

    mBuildStyle: NTPolygonStyle;
    buildStyle() {
        if (!this.mBuildStyle) {
            this.mBuildStyle = this.getNative().buildStyle();
        }
        return this.mBuildStyle;
    }
}

export class Polygon extends BaseLineVectorElement<NTPolygon, PolygonOptions> {
    @styleBuilderProperty color: Color | string;
    @styleBuilderProperty width: number;
    @lineStyleBuilderProperty lineColor: Color | string;
    @lineStyleBuilderProperty lineWidth: number;
    createNative(options: PolygonOptions) {
        const style = this.buildStyle();

        let result: NTPolygon;
        if (options.positions) {
            result = NTPolygon.alloc().initWithPosesStyle(mapPosVectorFromArgs(options.positions, options.ignoreAltitude), style);
        } else if (options.geometry) {
            result = NTPolygon.alloc().initWithGeometryStyle(geometryFromArgs(options.geometry), style);
        }
        if (options.holes) {
            result.setHoles(mapPosVectorVectorFromArgs(options.holes, options.ignoreAltitude));
        }
        return result;
    }
    buildStyle() {
        let style: NTPolygonStyle;
        const styleBuilder = this.options.styleBuilder;
        if (styleBuilder instanceof NTPolygonStyle) {
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
    set styleBuilder(value: PolygonStyleBuilder | NTPolygonStyle | PolygonStyleBuilderOptions) {
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
