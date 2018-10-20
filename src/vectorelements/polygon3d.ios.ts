import { BaseVectorElementStyleBuilder } from './vectorelements.common';
import { BaseVectorElement } from './vectorelements.ios';
import { Polygon3DOptions, Polygon3DStyleBuilderOptions } from './polygon3d';
import { Color } from 'tns-core-modules/color/color';
import { toNativeMapPos } from '../core/core';
import { LineStyleBuilder } from './line';
import { iosNativeColorProperty, mapPosVectorFromArgs } from '../carto.ios';
import { mapPosVectorVectorFromArgs } from '../carto';

export class Polygon3DStyleBuilder extends BaseVectorElementStyleBuilder<NTPolygon3DStyleBuilder, Polygon3DStyleBuilderOptions> {
    createNative(options: Polygon3DStyleBuilderOptions) {
        return NTPolygon3DStyleBuilder.alloc().init();
    }
    @iosNativeColorProperty color: Color | string;

    // get lineStyleBuilder() {
    //     return this.options.lineStyleBuilder;
    // }
    // set lineStyleBuilder(value: LineStyleBuilder<any, any>) {
    //     this.options.lineStyleBuilder = value;
    //     if (this.native) {
    //         this.native.setLineStyle(value.buildStyle());
    //         this._buildStyle = null;
    //     }
    // }

    _buildStyle: NTPolygon3DStyle;
    buildStyle() {
        if (!this._buildStyle) {
            this._buildStyle = this.getNative().buildStyle();
        }
        return this._buildStyle;
    }
}

export class Polygon3D extends BaseVectorElement<NTPolygon3D, Polygon3DOptions> {
    createNative(options: Polygon3DOptions) {
        const style: NTPolygon3DStyle = options.style || options.styleBuilder.buildStyle();
        const result = NTPolygon3D.alloc().initWithPosesStyleHeight(mapPosVectorFromArgs(options.poses, options.projection), style, options.height);
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
