import { BaseVectorElementStyleBuilder } from './vectorelements.common';
import { BaseLineVectorElement } from './vectorelements.android';
import { LineEndType as ILineEndType, LineJointType as ILineJointType, LineOptions, LineStyleBuilderOptions } from './line';
import { Color } from 'tns-core-modules/color/color';
import { mapPosVectorFromArgs, nativeColorProperty, nativeEnumProperty, nativeProperty } from '../carto.android';

export const LineJointType = {
    get BEVEL() {
        return com.carto.styles.LineJoinType.LINE_JOIN_TYPE_BEVEL;
    },
    get MITER() {
        return com.carto.styles.LineJoinType.LINE_JOIN_TYPE_MITER;
    },
    get NONE() {
        return com.carto.styles.LineJoinType.LINE_JOIN_TYPE_NONE;
    },
    get ROUND() {
        return com.carto.styles.LineJoinType.LINE_JOIN_TYPE_ROUND;
    }
};

export const LineEndType = {
    get ROUND() {
        return com.carto.styles.LineEndType.LINE_END_TYPE_ROUND;
    },
    get SQUARE() {
        return com.carto.styles.LineEndType.LINE_END_TYPE_SQUARE;
    },
    get NONE() {
        return com.carto.styles.LineEndType.LINE_END_TYPE_NONE;
    }
};
export class LineStyleBuilder extends BaseVectorElementStyleBuilder<com.carto.styles.LineStyleBuilder, LineStyleBuilderOptions> {
    createNative(options: LineStyleBuilderOptions) {
        return new com.carto.styles.LineStyleBuilder();
    }

    @nativeProperty width: number;
    @nativeColorProperty color: Color | string;
    @nativeEnumProperty(com.carto.styles.LineJoinType) lineJoinType: ILineJointType;
    @nativeEnumProperty(com.carto.styles.LineEndType) lineEndType: ILineEndType;
    @nativeProperty clickWidth: number;
    @nativeProperty stretchFactor: number;

    _buildStyle: com.carto.styles.LineStyle;
    buildStyle() {
        if (!this._buildStyle) {
            this._buildStyle = this.getNative().buildStyle();
        }
        return this._buildStyle;
    }
}

export class Line extends BaseLineVectorElement<com.carto.vectorelements.Line, LineOptions> {
    createNative(options: LineOptions) {
        const style: com.carto.styles.LineStyle = options.style || options.styleBuilder.buildStyle();
        const result = new com.carto.vectorelements.Line(mapPosVectorFromArgs(options.positions, options.projection), style);
        // result['owner'] = new WeakRef(this);
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
