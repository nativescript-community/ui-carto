import { Color } from '@nativescript/core';
import { geometryFromArgs, mapPosVectorFromArgs } from '..';
import { MapBounds, MapPos, MapPosVector, fromNativeMapBounds } from '../core';
import { LineGeometry } from '../geometry';
import { BaseLineVectorElement } from './index.android';
import { BaseVectorElementStyleBuilder, styleBuilderProperty } from './index.common';
import { LineEndType as ILineEndType, LineJointType as ILineJointType, LineOptions, LineStyleBuilderOptions } from './line';
import {
    ACCESSORS as ACC_LineStyleBuilder,
    Accessors as Acc_LineStyleBuilder,
    METHODS as MET_LineStyleBuilder,
    Methods as Met_LineStyleBuilder,
    SELECTORS as SEL_LineStyleBuilder
} from '../bindings/styles/LineStyleBuilder';
import { bindNative } from '../nativeclass.common';
import { massifImageConverter } from '..';
import { ACCESSORS as ACC_Line, Accessors as Acc_Line, METHODS as MET_Line, Methods as Met_Line, SELECTORS as SEL_Line } from '../bindings/vectorelements/Line';
import { ACCESSORS as ACC_StyleBuilder, Accessors as Acc_StyleBuilder, METHODS as MET_StyleBuilder, Methods as Met_StyleBuilder, SELECTORS as SEL_StyleBuilder } from '../bindings/styles/StyleBuilder';
import { colorConverter } from '..';
export { MapBounds };

export const LineJointType = {
    get BEVEL() {
        return com.massifmaps.styles.LineJoinType.LINE_JOIN_TYPE_BEVEL;
    },
    get MITER() {
        return com.massifmaps.styles.LineJoinType.LINE_JOIN_TYPE_MITER;
    },
    get NONE() {
        return com.massifmaps.styles.LineJoinType.LINE_JOIN_TYPE_NONE;
    },
    get ROUND() {
        return com.massifmaps.styles.LineJoinType.LINE_JOIN_TYPE_ROUND;
    }
};

export const LineEndType = {
    get ROUND() {
        return com.massifmaps.styles.LineEndType.LINE_END_TYPE_ROUND;
    },
    get SQUARE() {
        return com.massifmaps.styles.LineEndType.LINE_END_TYPE_SQUARE;
    },
    get NONE() {
        return com.massifmaps.styles.LineEndType.LINE_END_TYPE_NONE;
    }
};
export class LineStyleBuilder extends BaseVectorElementStyleBuilder<com.massifmaps.styles.LineStyleBuilder, LineStyleBuilderOptions> {
    createNative(options: LineStyleBuilderOptions) {
        return new com.massifmaps.styles.LineStyleBuilder();
    }

    /** Short aliases for the SDK's `lineJoinType` / `lineEndType`. */
    get joinType(): ILineJointType {
        return this.lineJoinType as any;
    }
    set joinType(value: ILineJointType) {
        (this as any).lineJoinType = value;
    }
    get endType(): ILineEndType {
        return this.lineEndType as any;
    }
    set endType(value: ILineEndType) {
        (this as any).lineEndType = value;
    }

    mBuildStyle: com.massifmaps.styles.LineStyle;
    buildStyle() {
        if (!this.mBuildStyle) {
            this.mBuildStyle = this.getNative().buildStyle();
        }
        return this.mBuildStyle;
    }
}

export class Line extends BaseLineVectorElement<com.massifmaps.vectorelements.Line, LineOptions> {
    @styleBuilderProperty color: Color | string;
    @styleBuilderProperty width: number;
    @styleBuilderProperty joinType: ILineJointType;
    @styleBuilderProperty endType: ILineEndType;
    @styleBuilderProperty clickWidth: number;
    @styleBuilderProperty stretchFactor: number;

    mBuildStyle: com.massifmaps.styles.LineStyle;

    constructor(
        public options: LineOptions = {} as any,
        native?: com.massifmaps.vectorelements.Line
    ) {
        super(options, native);
        if (native && !options.styleBuilder) {
            const nStyle = native.getStyle();
            const nStyleBuilder = new com.massifmaps.styles.LineStyleBuilder();
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
            return new com.massifmaps.vectorelements.Line(mapPosVectorFromArgs(options.positions, options.ignoreAltitude), style);
        } else if (options.geometry) {
            return new com.massifmaps.vectorelements.Line(geometryFromArgs(options.geometry), style);
        }
        return null;
    }
    buildStyle() {
        let style: com.massifmaps.styles.LineStyle;
        const styleBuilder = this.options.styleBuilder;
        if (styleBuilder instanceof com.massifmaps.styles.LineStyle) {
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
    set styleBuilder(value: LineStyleBuilder | com.massifmaps.styles.LineStyle | LineStyleBuilderOptions) {
        if (this.native && !this.duringInit) {
            this.options.styleBuilder = value as any;
            this.rebuildStyle();
        }
    }
    get geometry(): com.massifmaps.geometry.LineGeometry {
        return this.getGeometry() as com.massifmaps.geometry.LineGeometry;
    }
    set geometry(geometry: LineGeometry) {
        if (this.native) {
            this.native.setGeometry(geometryFromArgs(geometry));
        }
    }
    setPoses(positions: MapPosVector | MapPos[]) {
        this.positions = positions;
        if (this.native) {
            this.native.setPoses(mapPosVectorFromArgs(positions, this.options.ignoreAltitude));
        }
    }
    getPoses() {
        return this.positions || this.getNative().getPoses();
    }
    getGeometry() {
        return this.getNative().getGeometry();
    }
    getBounds() {
        return fromNativeMapBounds(this.getNative().getBounds());
    }
}

export interface LineStyleBuilder extends Acc_LineStyleBuilder, Omit<Met_LineStyleBuilder, 'buildStyle'> {}
bindNative(LineStyleBuilder, MET_LineStyleBuilder, ACC_LineStyleBuilder, { selectors: SEL_LineStyleBuilder, converters: { bitmap: massifImageConverter } });

export interface Line extends Omit<Acc_Line, 'geometry'>, Omit<Met_Line, 'getGeometry' | 'getPoses' | 'setPoses'> {}
bindNative(Line, MET_Line, ACC_Line, { selectors: SEL_Line });

export interface LineStyleBuilder extends Acc_StyleBuilder, Met_StyleBuilder {}
bindNative(LineStyleBuilder, MET_StyleBuilder, ACC_StyleBuilder, { selectors: SEL_StyleBuilder, converters: { color: colorConverter } });
