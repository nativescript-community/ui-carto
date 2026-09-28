import { Color } from '@nativescript/core';
import { geometryFromArgs, mapPosVectorFromArgs } from '..';
import { MapBounds, MapPos, MapPosVector, fromNativeMapBounds } from '../core';
import { LineGeometry } from '../geometry';
import { BaseVectorElementStyleBuilder } from './index.common';
import { BaseLineVectorElement } from './index.ios';
import { LineOptions, LineStyleBuilderOptions } from './line';
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
export enum LineJointType {
    BEVEL = MSFLineJoinType.F_LINE_JOIN_TYPE_BEVEL,
    MITER = MSFLineJoinType.F_LINE_JOIN_TYPE_MITER,
    NONE = MSFLineJoinType.F_LINE_JOIN_TYPE_NONE,
    ROUND = MSFLineJoinType.F_LINE_JOIN_TYPE_ROUND
}

export enum LineEndType {
    ROUND = MSFLineEndType.F_LINE_END_TYPE_ROUND,
    SQUARE = MSFLineEndType.F_LINE_END_TYPE_SQUARE,
    NONE = MSFLineEndType.F_LINE_END_TYPE_NONE
}

export class LineStyleBuilder extends BaseVectorElementStyleBuilder<MSFLineStyleBuilder, LineStyleBuilderOptions> {
    createNative(options: LineStyleBuilderOptions) {
        return MSFLineStyleBuilder.alloc().init();
    }
    /** the SDK names are `lineJoinType` / `lineEndType`; the plugin keeps the shorter names */
    get joinType(): LineJointType {
        return this.lineJoinType as any;
    }
    set joinType(value: LineJointType) {
        (this as any).lineJoinType = value;
    }
    get endType(): LineEndType {
        return this.lineEndType as any;
    }
    set endType(value: LineEndType) {
        (this as any).lineEndType = value;
    }

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

    constructor(
        public options: LineOptions = {} as any,
        native?: MSFLine
    ) {
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

export interface LineStyleBuilder extends Acc_LineStyleBuilder, Omit<Met_LineStyleBuilder, 'buildStyle'> {}
bindNative(LineStyleBuilder, MET_LineStyleBuilder, ACC_LineStyleBuilder, { selectors: SEL_LineStyleBuilder, converters: { bitmap: massifImageConverter } });

export interface Line extends Omit<Acc_Line, 'geometry'>, Omit<Met_Line, 'getGeometry' | 'getPoses' | 'setPoses'> {}
bindNative(Line, MET_Line, ACC_Line, { selectors: SEL_Line });

export interface LineStyleBuilder extends Acc_StyleBuilder, Met_StyleBuilder {}
bindNative(LineStyleBuilder, MET_StyleBuilder, ACC_StyleBuilder, { selectors: SEL_StyleBuilder, converters: { color: colorConverter } });
