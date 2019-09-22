import { BaseVectorElementStyleBuilder } from './vectorelements.common';
import { BaseLineVectorElement } from './vectorelements';
import { PolygonOptions, PolygonStyleBuilderOptions } from './polygon';
import { Color } from 'tns-core-modules/color/color';
import { LineStyleBuilder, LineStyleBuilderOptions } from './line';
import { mapPosVectorFromArgs, mapPosVectorVectorFromArgs, nativeColorProperty } from '../carto';
import { nativeProperty } from '../carto.common';

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
            this._buildStyle = null;
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

    _buildStyle: com.carto.styles.PolygonStyle;
    buildStyle() {
        if (!this._buildStyle) {
            this._buildStyle = this.getNative().buildStyle();
        }
        return this._buildStyle;
    }
}

export class Polygon extends BaseLineVectorElement<com.carto.vectorelements.Polygon, PolygonOptions> {
    createNative(options: PolygonOptions) {
        const style = this.buildStyle();
        const result = new com.carto.vectorelements.Polygon(mapPosVectorFromArgs(options.positions, options.ignoreAltitude), style);
        if (options.holes) {
            result.setHoles(mapPosVectorVectorFromArgs(options.holes, options.ignoreAltitude));
        }
        result['owner'] = new WeakRef(this);
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
}
