import { BaseVectorElementStyleBuilder } from './vectorelements.common';
import { BasePointVectorElement } from './vectorelements';
import { PointOptions, PointStyleBuilderOptions } from './point';
import { Color } from 'tns-core-modules/color/color';
import { nativeColorProperty } from '../carto';
import { nativeProperty } from '../carto.common';

export class PointStyleBuilder extends BaseVectorElementStyleBuilder<NTPointStyleBuilder, PointStyleBuilderOptions> {
    createNative(options: PointStyleBuilderOptions) {
        return NTPointStyleBuilder.alloc().init();
    }
    @nativeProperty size: number;
    @nativeColorProperty color: Color | string;
    @nativeProperty clickSize: number;

    _buildStyle: NTPointStyle;
    buildStyle() {
        if (!this._buildStyle) {
            this._buildStyle = this.getNative().buildStyle();
        }
        return this._buildStyle;
    }
}

export class Point extends BasePointVectorElement<NTPoint, PointOptions> {
    createNative(options: PointOptions) {
        const style = this.buildStyle();
        const nativePos = this.getNativePos(options.position, options.projection);
        const result = NTPoint.alloc().initWithPosStyle(nativePos, style);
        // result['owner'] = new WeakRef(this);
        return result;
    }
    buildStyle() {
        let style: NTPointStyle;
        const styleBuilder = this.options.styleBuilder;
        if (styleBuilder instanceof NTPointStyle) {
            style = styleBuilder;
        } else if (styleBuilder instanceof PointStyleBuilder) {
            style = styleBuilder.buildStyle();
        } else if (styleBuilder.hasOwnProperty) {
            style = new PointStyleBuilder(styleBuilder).buildStyle();
        }
        return style;
    }
    get styleBuilder() {
        return this.native ? this.native.getStyle() : this.options.styleBuilder;
    }
    set styleBuilder(value: PointStyleBuilder | NTPointStyle | PointStyleBuilderOptions) {
        this.options.styleBuilder = value as any;
        if (this.native) {
            this.native.setStyle(this.buildStyle());
        }
    }
}
