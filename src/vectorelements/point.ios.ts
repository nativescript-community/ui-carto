import { BaseVectorElementStyleBuilder } from './vectorelements.common';
import { BasePointVectorElement } from './vectorelements';
import { PointOptions, PointStyleBuilderOptions } from './point';
import { Color } from 'tns-core-modules/color/color';
import { nativeColorProperty } from '../carto';
import { nativeProperty } from 'nativescript-carto/carto.common';

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
        const style: NTPointStyle = options.style || options.styleBuilder.buildStyle();
        const nativePos = this.getNativePos(options.position, options.projection);
        const result = NTPoint.alloc().initWithPosStyle(nativePos, style);
        // result['owner'] = new WeakRef(this);
        return result;
    }
    get style() {
        return this.native ? this.native.getStyle() : this.options.style;
    }
    set style(value: PointStyleBuilder | NTPointStyle) {
        this.options.style = value;
        if (this.native) {
            if (value instanceof PointStyleBuilder) {
                this.native.setStyle(value.buildStyle());
            } else {
                this.native.setStyle(value);
            }
        }
    }
}
