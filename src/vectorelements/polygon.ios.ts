import { BaseElement, BaseElementStyleBuilder } from './vectorelements.common';
import { PolygonOptions, PolygonStyleBuilderOptions } from './polygon';
import { Color } from 'tns-core-modules/color/color';
import { toNativeMapPos } from '../core/core';

export class PolygonStyleBuilder extends BaseElementStyleBuilder<NTPolygonStyleBuilder, PolygonStyleBuilderOptions> {
    createNative(options: PolygonStyleBuilderOptions) {
        return NTPolygonStyleBuilder.alloc().init();
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

    _buildStyle: NTPolygonStyle;
    buildStyle() {
        if (!this._buildStyle) {
            this._buildStyle = this.getNative().buildStyle();
        }
        return this._buildStyle;
    }
}

export class Polygon extends BaseElement<NTPolygon, PolygonOptions> {
    createNative(options: PolygonOptions) {
        const style = options.style instanceof PolygonStyleBuilder ? options.style.buildStyle() : options.style;
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
        const result = NTPolygon.alloc().initWithPosesStyle(nativePoses, style);
        result['owner'] = new WeakRef(this);
        return result;
    }
    get style() {
        return this.native ? this.native.getStyle() : this.options.style;
    }
    set style(value: PolygonStyleBuilder | NTPolygonStyle) {
        if (this.native) {
            if (value instanceof PolygonStyleBuilder) {
                this.native.setStyle(value.buildStyle());
            } else {
                this.native.setStyle(value);
            }
        }
    }
}
