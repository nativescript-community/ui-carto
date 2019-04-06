import { BaseVectorElementStyleBuilder } from './vectorelements.common';
import { mapPosVectorFromArgs, nativeColorProperty, nativeEnumProperty } from 'nativescript-carto/carto';
import { fromNativeMapBounds, MapBounds, MapPos, MapPosVector } from 'nativescript-carto/core/core';
import { Color } from 'tns-core-modules/color/color';
import { LineEndType as ILineEndType, LineJointType as ILineJointType, LineOptions, LineStyleBuilderOptions } from './line';
import { BaseLineVectorElement } from './vectorelements';
import { nativeProperty } from 'nativescript-carto/carto.common';
export { MapBounds };

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
    @nativeEnumProperty lineJoinType: ILineJointType;
    @nativeEnumProperty lineEndType: ILineEndType;
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

    setPoses(positions: MapPosVector | MapPos[]) {
        this.positions = positions;
        if (this.native) {
            this.native.setPoses(mapPosVectorFromArgs(positions, this.projection));
        }
    }
    getPoses() {
        return this.positions;
    }
    getGeometry() {
        return this.getNative().getGeometry();
    }
    getBounds() {
        const nBounds = this.getNative().getBounds();
        const nProjection = this.projection.getNative();
        return fromNativeMapBounds(new com.carto.core.MapBounds(nProjection.toWgs84(nBounds.getMin()), nProjection.toWgs84(nBounds.getMax())));
    }
}
