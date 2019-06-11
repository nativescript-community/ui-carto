import { Color } from 'tns-core-modules/color/color';
import { mapPosVectorFromArgs, nativeAndroidEnumProperty, nativeColorProperty } from '../carto';
import { nativeProperty } from '../carto.common';
import { fromNativeMapBounds, MapBounds, MapPos, MapPosVector } from '../core/core';
import { LineEndType as ILineEndType, LineJointType as ILineJointType, LineOptions, LineStyleBuilderOptions } from './line';
import { BaseLineVectorElement } from './vectorelements';
import { BaseVectorElementStyleBuilder } from './vectorelements.common';
export { MapBounds };

export const LineJointType = {
    get BEVEL() {
        return com.carto.styles.LineJoinType.LINE_JOIN_TYPE_BEVEL.swigValue();
    },
    get MITER() {
        return com.carto.styles.LineJoinType.LINE_JOIN_TYPE_MITER.swigValue();
    },
    get NONE() {
        return com.carto.styles.LineJoinType.LINE_JOIN_TYPE_NONE.swigValue();
    },
    get ROUND() {
        return com.carto.styles.LineJoinType.LINE_JOIN_TYPE_ROUND.swigValue();
    }
};

export const LineEndType = {
    get ROUND() {
        return com.carto.styles.LineEndType.LINE_END_TYPE_ROUND.swigValue();
    },
    get SQUARE() {
        return com.carto.styles.LineEndType.LINE_END_TYPE_SQUARE.swigValue();
    },
    get NONE() {
        return com.carto.styles.LineEndType.LINE_END_TYPE_NONE.swigValue();
    }
};
export class LineStyleBuilder extends BaseVectorElementStyleBuilder<com.carto.styles.LineStyleBuilder, LineStyleBuilderOptions> {
    createNative(options: LineStyleBuilderOptions) {
        return new com.carto.styles.LineStyleBuilder();
    }

    @nativeProperty width: number;
    @nativeColorProperty color: Color | string;
    @nativeAndroidEnumProperty(com.carto.styles.LineJoinType, {
        nativeSetterName: 'setLineJoinType',
        nativeGetterName: 'getLineJoinType'
    })
    joinType: ILineJointType;
    @nativeAndroidEnumProperty(com.carto.styles.LineEndType, {
        nativeSetterName: 'setLineEndType',
        nativeGetterName: 'getLineEndType'
    })
    endType: ILineEndType;
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
        // const nProjection = this.projection.getNative();
        return fromNativeMapBounds(new com.carto.core.MapBounds(nBounds.getMin(), nBounds.getMax()));
    }
}
