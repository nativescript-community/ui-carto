import { BaseVectorElementStyleBuilder } from './vectorelements.common';
import { BaseVectorElement } from './vectorelements.android';
import { LineOptions, LineStyleBuilderOptions } from './line';
import { Color } from 'tns-core-modules/color/color';
import { toNativeMapPos } from '../core/core';
import { androidNativeColorProperty, androidNativeProperty, mapPosVectorFromArgs } from '../carto.android';

export enum LineJointType {
    BEVEL = com.carto.styles.LineJoinType.LINE_JOIN_TYPE_BEVEL.ordinal(),
    MITER = com.carto.styles.LineJoinType.LINE_JOIN_TYPE_MITER.ordinal(),
    NONE = com.carto.styles.LineJoinType.LINE_JOIN_TYPE_NONE.ordinal(),
    ROUND = com.carto.styles.LineJoinType.LINE_JOIN_TYPE_ROUND.ordinal()
}

export enum LineEndType {
    ROUND = com.carto.styles.LineEndType.LINE_END_TYPE_ROUND.ordinal(),
    SQUARE = com.carto.styles.LineEndType.LINE_END_TYPE_SQUARE.ordinal(),
    NONE = com.carto.styles.LineEndType.LINE_END_TYPE_NONE.ordinal()
}
export class LineStyleBuilder extends BaseVectorElementStyleBuilder<com.carto.styles.LineStyleBuilder, LineStyleBuilderOptions> {
    createNative(options: LineStyleBuilderOptions) {
        return new com.carto.styles.LineStyleBuilder();
    }

    @androidNativeProperty width: number;
    @androidNativeColorProperty color: Color | string;

    get joinType() {
        if (this.native) {
            return this.native.getLineJoinType().ordinal();
        }
        return this.options.joinType;
    }
    set joinType(value: number) {
        this.options.joinType = value;
        if (this.native) {
            this.native.setLineJoinType(com.carto.styles.LineJoinType.values()[value]);
            this._buildStyle = null;
        }
    }
    get endType() {
        if (this.native) {
            return this.native.getLineEndType().ordinal();
        }
        return this.options.endType;
    }
    set endType(value: number) {
        this.options.endType = value;
        if (this.native) {
            this.native.setLineEndType(com.carto.styles.LineEndType.values()[value]);
            this._buildStyle = null;
        }
    }

    _buildStyle: com.carto.styles.LineStyle;
    buildStyle() {
        if (!this._buildStyle) {
            this._buildStyle = this.getNative().buildStyle();
        }
        return this._buildStyle;
    }
}

export class Line extends BaseVectorElement<com.carto.vectorelements.Line, LineOptions> {
    createNative(options: LineOptions) {
        const style: com.carto.styles.LineStyle = options.style || options.styleBuilder.buildStyle();
        const result = new com.carto.vectorelements.Line(mapPosVectorFromArgs(options.poses, options.projection), style);
        result['owner'] = new WeakRef(this);
        return result;
    }
    get style() {
        return this.native ? this.native.getStyle() : this.options.style;
    }
    set style(value: LineStyleBuilder | com.carto.styles.LineStyle) {
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
