import { BaseVectorElementStyleBuilder } from './vectorelements.common';
import { BaseLineVectorElement } from './vectorelements.ios';
import { Polygon3DOptions, Polygon3DStyleBuilderOptions } from './polygon3d';
import { Color } from 'tns-core-modules/color/color';
import { mapPosVectorFromArgs, nativeColorProperty } from '../carto.ios';
import { mapPosVectorVectorFromArgs } from '../carto';

export class Polygon3DStyleBuilder extends BaseVectorElementStyleBuilder<NTPolygon3DStyleBuilder, Polygon3DStyleBuilderOptions> {
    createNative(options: Polygon3DStyleBuilderOptions) {
        return NTPolygon3DStyleBuilder.alloc().init();
    }
    @nativeColorProperty color: Color | string;
    @nativeColorProperty sideColor: Color | string;

    _buildStyle: NTPolygon3DStyle;
    buildStyle() {
        if (!this._buildStyle) {
            this._buildStyle = this.getNative().buildStyle();
        }
        return this._buildStyle;
    }
}

export class Polygon3D extends BaseLineVectorElement<NTPolygon3D, Polygon3DOptions> {
    createNative(options: Polygon3DOptions) {
        const style: NTPolygon3DStyle = options.style || options.styleBuilder.buildStyle();
        const result = NTPolygon3D.alloc().initWithPosesStyleHeight(mapPosVectorFromArgs(options.positions, options.projection), style, options.height);
        if (options.holes) {
            result.setHoles(mapPosVectorVectorFromArgs(options.holes, options.projection));
        }
        // result['owner'] = new WeakRef(this);
        return result;
    }
    get style() {
        return this.native ? this.native.getStyle() : this.options.style;
    }
    set style(value: Polygon3DStyleBuilder | NTPolygon3DStyle) {
        this.options.style = value;
        if (this.native) {
            if (value instanceof Polygon3DStyleBuilder) {
                this.native.setStyle(value.buildStyle());
            } else {
                this.native.setStyle(value);
            }
        }
    }
}
