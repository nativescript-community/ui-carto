import { BaseVectorElementStyleBuilder } from './index.common';
import { Color } from '@nativescript/core/color/color';
import { mapPosVectorFromArgs, mapPosVectorVectorFromArgs, nativeColorProperty } from '../carto';
import { Polygon3DOptions, Polygon3DStyleBuilderOptions } from './polygon3d';
import { BaseLineVectorElement } from '.';

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
        const style = this.buildStyle();
        const result = NTPolygon3D.alloc().initWithPosesStyleHeight(mapPosVectorFromArgs(options.positions, options.ignoreAltitude), style, options.height);
        if (options.holes) {
            result.setHoles(mapPosVectorVectorFromArgs(options.holes, options.ignoreAltitude));
        }
        // result['owner'] = new WeakRef(this);
        return result;
    }
    buildStyle() {
        let style: NTPolygon3DStyle;
        const styleBuilder = this.options.styleBuilder;
        if (styleBuilder instanceof NTPolygon3DStyle) {
            style = styleBuilder;
        } else if (styleBuilder instanceof Polygon3DStyleBuilder) {
            style = styleBuilder.buildStyle();
        } else if (styleBuilder.hasOwnProperty) {
            style = new Polygon3DStyleBuilder(styleBuilder as Polygon3DStyleBuilderOptions).buildStyle();
        }
        return style;
    }
    get styleBuilder() {
        return this.native ? this.native.getStyle() : this.options.styleBuilder;
    }
    set styleBuilder(value: Polygon3DStyleBuilder | NTPolygon3DStyle | Polygon3DStyleBuilderOptions) {
        if (this.native && !this.duringInit) {
            this.options.styleBuilder = value as any;
            this.native.setStyle(this.buildStyle());
        }
    }
}
