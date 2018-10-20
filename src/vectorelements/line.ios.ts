import { BaseVectorElementStyleBuilder } from './vectorelements.common';
import { BaseVectorElement } from './vectorelements.ios';
import { LineOptions, LineStyleBuilderOptions } from './line';
import { Color } from 'tns-core-modules/color/color';
import { toNativeMapPos } from '../core/core';
import { iosNativeColorProperty, iosNativeProperty, mapPosVectorFromArgs } from '../carto.ios';

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
    @iosNativeProperty width: number;
    @iosNativeColorProperty color: Color | string;

    get joinType() {
        if (this.native) {
            return this.native.getLineJoinType();
        }
        return this.options.joinType;
    }
    set joinType(value: number) {
        this.options.joinType = value;
        if (this.native) {
            this.native.setLineJoinType(value);
            this._buildStyle = null;
        }
    }
    get endType() {
        if (this.native) {
            return this.native.getLineEndType();
        }
        return this.options.endType;
    }
    set endType(value: number) {
        this.options.endType = value;
        if (this.native) {
            this.native.setLineEndType(value);
            this._buildStyle = null;
        }
    }

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
