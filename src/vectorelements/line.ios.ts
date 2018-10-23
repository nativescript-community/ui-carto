import { BaseVectorElementStyleBuilder } from './vectorelements.common';
import { BaseVectorElement } from './vectorelements.ios';
import { LineOptions, LineStyleBuilderOptions } from './line';
import { Color } from 'tns-core-modules/color/color';
import { mapPosVectorFromArgs, nativeColorProperty, nativeProperty } from '../carto.ios';

export enum LineJointType {
    BEVEL = NTLineJoinType.T_LINE_JOIN_TYPE_BEVEL,
    MITER = NTLineJoinType.T_LINE_JOIN_TYPE_MITER,
    NONE = NTLineJoinType.T_LINE_JOIN_TYPE_NONE,
    ROUND = NTLineJoinType.T_LINE_JOIN_TYPE_ROUND
}

export enum LineEndType {
    ROUND = NTLineEndType.T_LINE_END_TYPE_ROUND,
    SQUARE = NTLineEndType.T_LINE_END_TYPE_SQUARE,
    NONE = NTLineEndType.T_LINE_END_TYPE_NONE
}

export class LineStyleBuilder extends BaseVectorElementStyleBuilder<NTLineStyleBuilder, LineStyleBuilderOptions> {
    createNative(options: LineStyleBuilderOptions) {
        return NTLineStyleBuilder.alloc().init();
    }
    @nativeProperty width: number;
    @nativeColorProperty color: Color | string;
    @nativeProperty joinType: LineJointType;
    @nativeProperty endType: LineEndType;
    @nativeProperty clickWidth: number;
    @nativeProperty stretchFactor: number;

    _buildStyle: NTLineStyle;
    buildStyle() {
        if (!this._buildStyle) {
            this._buildStyle = this.getNative().buildStyle();
        }
        return this._buildStyle;
    }
}

export class Line extends BaseVectorElement<NTLine, LineOptions> {
    createNative(options: LineOptions) {
        const style: NTLineStyle = options.style || options.styleBuilder.buildStyle();

        const result = NTLine.alloc().initWithPosesStyle(mapPosVectorFromArgs(options.poses, options.projection), style);
        result['owner'] = new WeakRef(this);
        return result;
    }
    get style() {
        return this.native ? this.native.getStyle() : this.options.style;
    }
    set style(value: LineStyleBuilder | NTLineStyle) {
        this.options.style = value;
        if (this.native) {
            if (value instanceof LineStyleBuilder) {
                this.native.setStyle(value.buildStyle());
            } else {
                this.native.setStyle(value);
            }
        }
    }
}
