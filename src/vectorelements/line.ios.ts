import { BaseVectorElementStyleBuilder } from './vectorelements.common';
import { fromNativeMapBounds, MapBounds, MapPos, MapPosVector } from '../core/core';
import { Color } from 'tns-core-modules/color/color';
import { mapPosVectorFromArgs, nativeColorProperty } from '../carto';
import { LineOptions, LineStyleBuilderOptions } from './line';
import { BaseLineVectorElement } from './vectorelements';
import { nativeProperty } from '../carto.common';

export { MapBounds };
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
    @nativeProperty({
        nativeSetterName: 'setLineJoinType',
        nativeGetterName: 'getLineJoinType'
    })
    joinType: LineJointType;
    @nativeProperty({
        nativeSetterName: 'setLineEndType',
        nativeGetterName: 'getLineEndType'
    })
    endType: LineEndType;
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

export class Line extends BaseLineVectorElement<NTLine, LineOptions> {
    createNative(options: LineOptions) {
        const style: NTLineStyle = options.style || options.styleBuilder.buildStyle();

        const result = NTLine.alloc().initWithPosesStyle(mapPosVectorFromArgs(options.positions, options.projection), style);
        // result['owner'] = new WeakRef(this);
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
        return fromNativeMapBounds(NTMapBounds.alloc().initWithMinMax(nBounds.getMin(), nBounds.getMax()));
    }
}
