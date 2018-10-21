import { BaseVectorElementStyleBuilder } from './vectorelements.common';
import { BaseVectorElement } from './vectorelements.android';
import { PolygonOptions, PolygonStyleBuilderOptions } from './polygon';
import { Color } from 'tns-core-modules/color/color';
import { LineStyleBuilder } from './line';
import { mapPosVectorFromArgs, mapPosVectorVectorFromArgs, nativeColorProperty } from '../carto.android';

export class PolygonStyleBuilder extends BaseVectorElementStyleBuilder<com.carto.styles.PolygonStyleBuilder, PolygonStyleBuilderOptions> {
    createNative(options: PolygonStyleBuilderOptions) {
        return new com.carto.styles.PolygonStyleBuilder();
    }
    @nativeColorProperty color: Color | string;

    get lineStyleBuilder() {
        return this.options.lineStyleBuilder;
    }
    set lineStyleBuilder(value: LineStyleBuilder<any, any>) {
        this.options.lineStyleBuilder = value;
        if (this.native) {
            this.native.setLineStyle(value.buildStyle());
            this._buildStyle = null;
        }
    }

    _buildStyle: com.carto.styles.PolygonStyle;
    buildStyle() {
        if (!this._buildStyle) {
            this._buildStyle = this.getNative().buildStyle();
        }
        return this._buildStyle;
    }
}

export class Polygon extends BaseVectorElement<com.carto.vectorelements.Polygon, PolygonOptions> {
    createNative(options: PolygonOptions) {
        const style: com.carto.styles.PolygonStyle = options.style || options.styleBuilder.buildStyle();
        const result = new com.carto.vectorelements.Polygon(mapPosVectorFromArgs(options.poses, options.projection), style);
        if (options.holes) {
            result.setHoles(mapPosVectorVectorFromArgs(options.holes, options.projection));
        }
        result['owner'] = new WeakRef(this);
        return result;
    }
    get style() {
        return this.native ? this.native.getStyle() : this.options.style;
    }
    set style(value: PolygonStyleBuilder | com.carto.styles.PolygonStyle) {
        this.options.style = value;
        if (this.native) {
            if (value instanceof PolygonStyleBuilder) {
                this.native.setStyle(value.buildStyle());
            } else {
                this.native.setStyle(value);
            }
        }
    }
}
