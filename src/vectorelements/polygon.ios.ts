import { BaseVectorElementStyleBuilder } from './index.common';
import { BaseLineVectorElement } from '.';
import { PolygonOptions, PolygonStyleBuilderOptions } from './polygon';
import { Color } from '@nativescript/core/color';
import { LineStyleBuilder, LineStyleBuilderOptions } from './line';
import { mapPosVectorFromArgs, mapPosVectorVectorFromArgs, nativeColorProperty } from '..';

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
            this._buildStyle = null;
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

    _buildStyle: NTPolygonStyle;
    buildStyle() {
        if (!this._buildStyle) {
            this._buildStyle = this.getNative().buildStyle();
        }
        return this._buildStyle;
    }
}

export class Polygon extends BaseLineVectorElement<NTPolygon, PolygonOptions> {
    createNative(options: PolygonOptions) {
        const style = this.buildStyle();
        const result = NTPolygon.alloc().initWithPosesStyle(mapPosVectorFromArgs(options.positions, options.ignoreAltitude), style);
        if (options.holes) {
            result.setHoles(mapPosVectorVectorFromArgs(options.holes, options.ignoreAltitude));
        }
        // result['owner'] = new WeakRef(this);
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
}
