import { BaseVectorElementStyleBuilder } from './vectorelements.common';
import { BaseLineVectorElement } from './vectorelements.android';
import { Polygon3DOptions, Polygon3DStyleBuilderOptions } from './polygon3d';
import { Color } from 'tns-core-modules/color/color';
import { mapPosVectorFromArgs, mapPosVectorVectorFromArgs, nativeColorProperty } from '../carto.android';

export class Polygon3DStyleBuilder extends BaseVectorElementStyleBuilder<com.carto.styles.Polygon3DStyleBuilder, Polygon3DStyleBuilderOptions> {
    createNative(options: Polygon3DStyleBuilderOptions) {
        return new com.carto.styles.Polygon3DStyleBuilder();
    }
    @nativeColorProperty color: Color | string;
    @nativeColorProperty sideColor: Color | string;


    _buildStyle: com.carto.styles.Polygon3DStyle;
    buildStyle() {
        if (!this._buildStyle) {
            this._buildStyle = this.getNative().buildStyle();
        }
        return this._buildStyle;
    }
}

export class Polygon3D extends BaseLineVectorElement<com.carto.vectorelements.Polygon3D, Polygon3DOptions> {
    createNative(options: Polygon3DOptions) {
        const style: com.carto.styles.Polygon3DStyle = options.style || options.styleBuilder.buildStyle();
        const result = new com.carto.vectorelements.Polygon3D(mapPosVectorFromArgs(options.positions, options.projection), style, options.height);
        if (options.holes) {
            result.setHoles(mapPosVectorVectorFromArgs(options.holes, options.projection));
        }
        // result['owner'] = new WeakRef(this);
        return result;
    }
    get style() {
        return this.native ? this.native.getStyle() : this.options.style;
    }
    set style(value: Polygon3DStyleBuilder | com.carto.styles.Polygon3DStyle) {
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
