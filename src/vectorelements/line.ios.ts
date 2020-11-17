import { BaseVectorElementStyleBuilder } from './index.common';
import { MapBounds, MapPos, MapPosVector, fromNativeMapBounds } from '../core';
import { Color } from '@nativescript/core/color';
import { mapPosVectorFromArgs, nativeColorProperty } from '..';
import { LineOptions, LineStyleBuilderOptions } from './line';
import { BaseLineVectorElement } from './index.ios';
import { nativeProperty } from '../index.common';

export { MapBounds };
export enum LineJointType {
    BEVEL = NTLineJoinType.T_LINE_JOIN_TYPE_BEVEL,
    MITER = NTLineJoinType.T_LINE_JOIN_TYPE_MITER,
    NONE = NTLineJoinType.T_LINE_JOIN_TYPE_NONE,
    ROUND = NTLineJoinType.T_LINE_JOIN_TYPE_ROUND,
}

export enum LineEndType {
    ROUND = NTLineEndType.T_LINE_END_TYPE_ROUND,
    SQUARE = NTLineEndType.T_LINE_END_TYPE_SQUARE,
    NONE = NTLineEndType.T_LINE_END_TYPE_NONE,
}

export class LineStyleBuilder extends BaseVectorElementStyleBuilder<NTLineStyleBuilder, LineStyleBuilderOptions> {
    createNative(options: LineStyleBuilderOptions) {
        return NTLineStyleBuilder.alloc().init();
    }
    @nativeProperty width: number;
    @nativeColorProperty color: Color | string;
    @nativeProperty({
        nativeSetterName: 'setLineJoinType',
        nativeGetterName: 'getLineJoinType',
    })
    joinType: LineJointType;
    @nativeProperty({
        nativeSetterName: 'setLineEndType',
        nativeGetterName: 'getLineEndType',
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

function styleBuilderProperty(target: Line, propertyKey?, desc?: PropertyDescriptor): any {
    Object.defineProperty(target, propertyKey, {
        get() {
            return this.options.styleBuilder[propertyKey];
        },
        set(value) {
            this.options.styleBuilder[propertyKey] = value;
            this.rebuildStyle();
        },
    });
}

export class Line extends BaseLineVectorElement<NTLine, LineOptions> {
    @styleBuilderProperty color: Color | string;
    @styleBuilderProperty width: number;
    @styleBuilderProperty joinType: LineJointType;
    @styleBuilderProperty endType: LineEndType;
    @styleBuilderProperty clickWidth: number;
    @styleBuilderProperty stretchFactor: number;

    constructor(public options: LineOptions = {} as any, native?: NTLine) {
        super(options, native);
        if (native && !options.styleBuilder) {
            const nStyle = native.getStyle();
            const nStyleBuilder =  NTLineStyleBuilder.alloc().init();
            nStyleBuilder.setBitmap(nStyle.getBitmap());
            nStyleBuilder.setColor(nStyle.getColor());
            nStyleBuilder.setWidth(nStyle.getWidth());
            nStyleBuilder.setClickWidth(nStyle.getClickWidth());
            nStyleBuilder.setLineEndType(nStyle.getLineEndType());
            nStyleBuilder.setLineJoinType(nStyle.getLineJoinType());
            options.styleBuilder = new LineStyleBuilder(undefined, nStyleBuilder) as any;
            options.positions = new MapPosVector(native.getPoses());
        }
    }

    createNative(options: LineOptions) {
        const style = this.buildStyle();
        const result = NTLine.alloc().initWithPosesStyle(mapPosVectorFromArgs(options.positions, options.ignoreAltitude), style);
        return result;
    }
    buildStyle() {
        let style: NTLineStyle;
        const styleBuilder = this.options.styleBuilder;
        if (styleBuilder instanceof NTLineStyle) {
            style = styleBuilder;
        } else if (styleBuilder instanceof LineStyleBuilder) {
            style = styleBuilder.buildStyle();
        } else if (styleBuilder.hasOwnProperty) {
            style = new LineStyleBuilder(styleBuilder).buildStyle();
        }
        return style;
    }
    get styleBuilder() {
        return this.native ? this.native.getStyle() : this.options.styleBuilder;
    }
    set styleBuilder(value: LineStyleBuilder | NTLineStyle | LineStyleBuilderOptions) {
        if (this.native && !this.duringInit) {
            this.options.styleBuilder = value as any;
            this.native.setStyle(this.buildStyle());
        }
    }
    rebuildStyle() {
        this.native.setStyle(this.buildStyle());
    }
    setPoses(positions: MapPosVector | MapPos[]) {
        this.positions = positions;
        if (this.native) {
            this.native.setPoses(mapPosVectorFromArgs(positions, this.options.ignoreAltitude));
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
        return fromNativeMapBounds(nBounds);
    }
}
