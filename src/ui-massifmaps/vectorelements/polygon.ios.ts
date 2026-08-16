import { Color } from '@nativescript/core';
import { geometryFromArgs, mapPosVectorFromArgs, mapPosVectorVectorFromArgs, nativeColorProperty } from '..';
import { Geometry } from '../geometry';
import { BaseVectorElementStyleBuilder, lineStyleBuilderProperty, styleBuilderProperty } from './index.common';
import { BaseLineVectorElement } from './index.ios';
import { LineStyleBuilder, LineStyleBuilderOptions } from './line';
import { PolygonOptions, PolygonStyleBuilderOptions } from './polygon';

export class PolygonStyleBuilder extends BaseVectorElementStyleBuilder<MSFPolygonStyleBuilder, PolygonStyleBuilderOptions> {
    createNative(options: PolygonStyleBuilderOptions) {
        return MSFPolygonStyleBuilder.alloc().init();
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
