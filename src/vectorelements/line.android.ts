import { BaseElement, BaseElementStyleBuilder } from './vectorelements.common';
import { LineOptions, LineStyleBuilderOptions } from './line';
import { Color } from 'tns-core-modules/color/color';
import { toNativeMapPos } from '../core/core';

export enum LineJointType {
    BEVEL = com.carto.styles.LineJoinType.LINE_JOIN_TYPE_BEVEL.ordinal(),
    MITER = com.carto.styles.LineJoinType.LINE_JOIN_TYPE_MITER.ordinal(),
    NONE = com.carto.styles.LineJoinType.LINE_JOIN_TYPE_NONE.ordinal(),
    ROUND = com.carto.styles.LineJoinType.LINE_JOIN_TYPE_ROUND.ordinal()
}

export enum LineEndType {
    ROUND = com.carto.styles.LineEndType.LINE_END_TYPE_ROUND.ordinal(),
    SQUARE = com.carto.styles.LineEndType.LINE_END_TYPE_SQUARE.ordinal(),
    NONE = com.carto.styles.LineEndType.LINE_END_TYPE_NONE.ordinal()
}
export class LineStyleBuilder extends BaseElementStyleBuilder<com.carto.styles.LineStyleBuilder, LineStyleBuilderOptions> {
    createNative(options: LineStyleBuilderOptions) {
        return new com.carto.styles.LineStyleBuilder();
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
            this.native.setColor(new com.carto.graphics.Color(theColor.r, theColor.g, theColor.b, theColor.a));
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
            return this.native.getLineJoinType().ordinal();
        }
        return this.options.joinType;
    }
    set joinType(value: number) {
        if (this.native) {
            this.native.setLineJoinType(com.carto.styles.LineJoinType.values()[value]);
            this._buildStyle = null;
        }
    }
    get endType() {
        if (this.native) {
            return this.native.getLineEndType().ordinal();
        }
        return this.options.endType;
    }
    set endType(value: number) {
        console.log('set endType', value);
        if (this.native) {
            this.native.setLineEndType(com.carto.styles.LineEndType.values()[value]);
            this._buildStyle = null;
        }
    }

    _buildStyle: com.carto.styles.LineStyle;
    buildStyle() {
        if (!this._buildStyle) {
            this._buildStyle = this.getNative().buildStyle();
        }
        return this._buildStyle;
    }
}

export class Line extends BaseElement<com.carto.vectorelements.Line, LineOptions> {
    createNative(options: LineOptions) {
        const style = options.style instanceof LineStyleBuilder ? options.style.buildStyle() : options.style;
        const poses = options.poses;
        const nativePoses = new com.carto.core.MapPosVector();
        if (options.projection) {
            poses.forEach(p => {
                nativePoses.add(options.projection.getNative().fromWgs84(toNativeMapPos(p)));
            });
        } else {
            poses.forEach(p => {
                nativePoses.add(toNativeMapPos(p));
            });
        }
        console.log('creating line', poses, options.projection, nativePoses);
        const result = new com.carto.vectorelements.Line(nativePoses, style);
        result['owner'] = new WeakRef(this);
        return result;
    }
    get style() {
        return this.native ? this.native.getStyle() : this.options.style;
    }
    set style(value: LineStyleBuilder | com.carto.styles.LineStyle) {
        if (this.native) {
            if (value instanceof LineStyleBuilder) {
                this.native.setStyle(value.buildStyle());
            } else {
                this.native.setStyle(value);
            }
        }
    }
}
