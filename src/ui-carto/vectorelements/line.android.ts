import { Color } from '@nativescript/core';
import { geometryFromArgs, mapPosVectorFromArgs, nativeAndroidEnumProperty, nativeColorProperty, nativeProperty } from '..';
import { MapBounds, MapPos, MapPosVector, fromNativeMapBounds } from '../core';
import { LineGeometry } from '../geometry';
import { BaseLineVectorElement } from './index.android';
import { BaseVectorElementStyleBuilder, styleBuilderProperty } from './index.common';
import { LineEndType as ILineEndType, LineJointType as ILineJointType, LineOptions, LineStyleBuilderOptions } from './line';
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

    mBuildStyle: com.carto.styles.LineStyle;
    buildStyle() {
        if (!this.mBuildStyle) {
            this.mBuildStyle = this.getNative().buildStyle();
        }
        return this.mBuildStyle;
    }
}

export class Line extends BaseLineVectorElement<com.carto.vectorelements.Line, LineOptions> {
    @styleBuilderProperty color: Color | string;
    @styleBuilderProperty width: number;
    @styleBuilderProperty joinType: ILineJointType;
    @styleBuilderProperty endType: ILineEndType;
    @styleBuilderProperty clickWidth: number;
    @styleBuilderProperty stretchFactor: number;

    mBuildStyle: com.carto.styles.LineStyle;

    constructor(public options: LineOptions = {} as any, native?: com.carto.vectorelements.Line) {
        super(options, native);
        if (native && !options.styleBuilder) {
            const nStyle = native.getStyle();
            const nStyleBuilder = new com.carto.styles.LineStyleBuilder();
            nStyleBuilder.setBitmap(nStyle.getBitmap());
            nStyleBuilder.setColor(nStyle.getColor());
            nStyleBuilder.setWidth(nStyle.getWidth());
            nStyleBuilder.setClickWidth(nStyle.getClickWidth());
            nStyleBuilder.setLineEndType(nStyle.getLineEndType());
            nStyleBuilder.setLineJoinType(nStyle.getLineJoinType());
            options.styleBuilder = new LineStyleBuilder(undefined, nStyleBuilder);
            options.positions = new MapPosVector(native.getPoses());
        }
    }
    createNative(options: LineOptions) {
        const style = this.buildStyle();
        if (options.positions) {
            return new com.carto.vectorelements.Line(mapPosVectorFromArgs(options.positions, options.ignoreAltitude), style);
        } else if (options.geometry) {
            return new com.carto.vectorelements.Line(geometryFromArgs(options.geometry), style);
        }
        return null;
    }
    buildStyle() {
        let style: com.carto.styles.LineStyle;
        const styleBuilder = this.options.styleBuilder;
        if (styleBuilder instanceof com.carto.styles.LineStyle) {
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
    set styleBuilder(value: LineStyleBuilder | com.carto.styles.LineStyle | LineStyleBuilderOptions) {
        if (this.native && !this.duringInit) {
            this.options.styleBuilder = value as any;
            this.rebuildStyle();
        }
    }

    setPoses(positions: MapPosVector | MapPos[]) {
        this.positions = positions;
        if (this.native) {
            this.native.setPoses(mapPosVectorFromArgs(positions, this.options.ignoreAltitude));
        }
    }
    set geometry(geometry: LineGeometry) {
        if (this.native) {
            this.native.setGeometry(geometryFromArgs(geometry));
        }
    }
    getPoses() {
        return this.positions || this.getNative().getPoses();
    }
    getGeometry() {
        return this.getNative().getGeometry();
    }
    getBounds() {
        const nBounds = this.getNative().getBounds();
        // const nProjection = this.projection.getNative();
        return fromNativeMapBounds(nBounds);
    }
}
