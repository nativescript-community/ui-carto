import { BaseVectorElementStyleBuilder } from './vectorelements.common';
import { BaseLineVectorElement } from './vectorelements.ios';
import { PolygonOptions, PolygonStyleBuilderOptions } from './polygon';
import { Color } from 'tns-core-modules/color/color';
import { LineStyleBuilder } from './line';
import { mapPosVectorFromArgs, mapPosVectorVectorFromArgs, nativeColorProperty } from '../carto.ios';

export class PolygonStyleBuilder extends BaseVectorElementStyleBuilder<NTPolygonStyleBuilder, PolygonStyleBuilderOptions> {
    createNative(options: PolygonStyleBuilderOptions) {
        return NTPolygonStyleBuilder.alloc().init();
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
        const style: NTPolygonStyle = options.style || options.styleBuilder.buildStyle();
        const result = NTPolygon.alloc().initWithPosesStyle(mapPosVectorFromArgs(options.positions, options.projection), style);
        if (options.holes) {
            result.setHoles(mapPosVectorVectorFromArgs(options.holes, options.projection));
        }
        // result['owner'] = new WeakRef(this);
        return result;
    }
    get style() {
        return this.native ? this.native.getStyle() : this.options.style;
    }
    set style(value: PolygonStyleBuilder | NTPolygonStyle) {
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
