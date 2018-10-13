import { BaseElement, BaseElementStyleBuilder } from './vectorelements.common';
import { LineOptions, LineStyleBuilderOptions } from './line';
import { Color } from 'tns-core-modules/color/color';
import { toNativeMapPos } from '../core/core';

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

export class LineStyleBuilder extends BaseElementStyleBuilder<NTLineStyleBuilder, LineStyleBuilderOptions> {
    createNative(options: LineStyleBuilderOptions) {
        return NTLineStyleBuilder.alloc().init();
    }
    get color() {
        if (this.native) {
            const nativeColor = this.native.getColor();
            this._buildStyle = null;
            return new Color(nativeColor.getARGB()).hex;
        }
        return this.options.color;
    }
    set color(value: string) {
        if (this.native) {
            const theColor = new Color(value);
            this.native.setColor(NTColor.alloc().initWithRGBA(theColor.r, theColor.g, theColor.b, theColor.a));
            this._buildStyle = null;
        }
    }
    get width() {
        if (this.native) {
            return this.native.getWidth();
        }
        return this.options.width;
    }
    set width(value: number) {
        if (this.native) {
            this.native.setWidth(value);
            this._buildStyle = null;
        }
    }

    get joinType() {
        if (this.native) {
            return this.native.getLineJoinType();
        }
        return this.options.joinType;
    }
    set joinType(value: number) {
        console.log('set joinType', value);
        if (this.native) {
            this.native.setLineJoinType(value);
            this._buildStyle = null;
        }
    }
    get endType() {
        if (this.native) {
            return this.native.getLineEndType();
        }
        return this.options.endType;
    }
    set endType(value: number) {
        console.log('set endType', value);
        if (this.native) {
            this.native.setLineEndType(value);
            this._buildStyle = null;
        }
    }

    _buildStyle: NTLineStyle;
    buildStyle() {
        if (!this._buildStyle) {
            this._buildStyle = this.getNative().buildStyle();
        }
        return this._buildStyle;
    }
}

export class Line extends BaseElement<NTLine, LineOptions> {
    createNative(options: LineOptions) {
        const style = options.style instanceof LineStyleBuilder ? options.style.buildStyle() : options.style;
        const poses = options.poses;
        const nativePoses = NTMapPosVector.alloc().init();
        if (options.projection) {
            poses.forEach(p => {
                nativePoses.add(options.projection.getNative().fromWgs84(toNativeMapPos(p)));
            });
        } else {
            poses.forEach(p => {
                nativePoses.add(toNativeMapPos(p));
            });
        }
        const result = NTLine.alloc().initWithPosesStyle(nativePoses, style);
        result['owner'] = new WeakRef(this);
        return result;
    }
    get style() {
        return this.native ? this.native.getStyle() : this.options.style;
    }
    set style(value: LineStyleBuilder | NTLineStyle) {
        if (this.native) {
            if (value instanceof LineStyleBuilder) {
                this.native.setStyle(value.buildStyle());
            } else {
                this.native.setStyle(value);
            }
        }
    }
}
