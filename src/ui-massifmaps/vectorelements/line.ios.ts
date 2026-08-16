import { Color } from '@nativescript/core';
import { geometryFromArgs, mapPosVectorFromArgs, nativeColorProperty, nativeProperty } from '..';
import { MapBounds, MapPos, MapPosVector, fromNativeMapBounds } from '../core';
import { LineGeometry } from '../geometry';
import { BaseVectorElementStyleBuilder } from './index.common';
import { BaseLineVectorElement } from './index.ios';
import { LineOptions, LineStyleBuilderOptions } from './line';

export { MapBounds };
export enum LineJointType {
    BEVEL = MSFLineJoinType.T_LINE_JOIN_TYPE_BEVEL,
    MITER = MSFLineJoinType.T_LINE_JOIN_TYPE_MITER,
    NONE = MSFLineJoinType.T_LINE_JOIN_TYPE_NONE,
    ROUND = MSFLineJoinType.T_LINE_JOIN_TYPE_ROUND
}

export enum LineEndType {
    ROUND = MSFLineEndType.T_LINE_END_TYPE_ROUND,
    SQUARE = MSFLineEndType.T_LINE_END_TYPE_SQUARE,
    NONE = MSFLineEndType.T_LINE_END_TYPE_NONE
}

export class LineStyleBuilder extends BaseVectorElementStyleBuilder<MSFLineStyleBuilder, LineStyleBuilderOptions> {
    createNative(options: LineStyleBuilderOptions) {
        return MSFLineStyleBuilder.alloc().init();
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

    mBuildStyle: MSFLineStyle;
    buildStyle() {
        if (!this.mBuildStyle) {
            this.mBuildStyle = this.getNative().buildStyle();
        }
        return this.mBuildStyle;
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
        }
    });
}

export class Line extends BaseLineVectorElement<MSFLine, LineOptions> {
    @styleBuilderProperty color: Color | string;
    @styleBuilderProperty width: number;
    @styleBuilderProperty joinType: LineJointType;
    @styleBuilderProperty endType: LineEndType;
    @styleBuilderProperty clickWidth: number;
    @styleBuilderProperty stretchFactor: number;

    constructor(public options: LineOptions = {} as any, native?: MSFLine) {
        super(options, native);
        if (native && !options.styleBuilder) {
            const nStyle = native.getStyle();
            const nStyleBuilder = MSFLineStyleBuilder.alloc().init();
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
        if (options.positions) {
            return MSFLine.alloc().initWithPosesStyle(mapPosVectorFromArgs(options.positions, options.ignoreAltitude), style);
        } else if (options.geometry) {
            return MSFLine.alloc().initWithGeometryStyle(geometryFromArgs(options.geometry), style);
        }
        return null;
    }
    buildStyle() {
        let style: MSFLineStyle;
        const styleBuilder = this.options.styleBuilder;
        if (styleBuilder instanceof MSFLineStyle) {
            style = styleBuilder;
        } else if (styleBuilder instanceof LineStyleBuilder) {
            style = (styleBuilder as LineStyleBuilder).buildStyle();
        } else if (styleBuilder.hasOwnProperty) {
            style = new LineStyleBuilder(styleBuilder).buildStyle();
        }
        return style;
    }
    get styleBuilder() {
        return this.native ? this.native.getStyle() : this.options.styleBuilder;
    }
    set styleBuilder(value: LineStyleBuilder | MSFLineStyle | LineStyleBuilderOptions) {
        if (this.native && !this.duringInit) {
            this.options.styleBuilder = value as any;
            this.native.setStyle(this.buildStyle());
        }
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
    get geometry(): MSFLineGeometry {
        return this.getGeometry();
    }
    set geometry(geometry: LineGeometry) {
        if (this.native) {
            this.native.setGeometry(geometryFromArgs(geometry));
        }
    }
    getGeometry() {
        return this.getNative().getGeometry();
    }
    getBounds() {
        return fromNativeMapBounds(this.getNative().getBounds());
    }
}
