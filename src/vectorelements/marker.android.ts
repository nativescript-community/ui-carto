import { BaseVectorElementStyleBuilder } from './vectorelements.common';
import { BaseVectorElement } from './vectorelements.android';
import { MarkerOptions, MarkerStyleBuilderOptions } from './marker';
import { Color } from 'tns-core-modules/color/color';
import { toNativeMapPos } from '../core/core';
import { nativeCartoImageProperty, nativeColorProperty, nativeProperty } from '../carto.android';

export class MarkerStyleBuilder extends BaseVectorElementStyleBuilder<com.carto.styles.MarkerStyleBuilder, MarkerStyleBuilderOptions> {
    createNative(options: MarkerStyleBuilderOptions) {
        return new com.carto.styles.MarkerStyleBuilder();
    }
    @nativeProperty width: number;
    @nativeProperty size: number;
    @nativeProperty placementPriority: number;
    @nativeColorProperty color: Color | string;
    @nativeCartoImageProperty bitmap: string;

    _buildStyle: com.carto.styles.MarkerStyle;
    buildStyle() {
        if (!this._buildStyle) {
            this._buildStyle = this.getNative().buildStyle();
        }
        return this._buildStyle;
    }
}

export class Marker extends BaseVectorElement<com.carto.vectorelements.Marker, MarkerOptions> {
    createNative(options: MarkerOptions) {
        const style: com.carto.styles.MarkerStyle = options.style || options.styleBuilder.buildStyle();
        // console.log('creating marker', style);
        const pos = options.pos;
        let nativePos;
        let result: com.carto.vectorelements.Marker;
        if (options.geometry) {
            result = new com.carto.vectorelements.Marker(options.geometry as com.carto.geometry.Geometry, style);
        } else {
            if (options.projection) {
                nativePos = (options.projection.getNative() as com.carto.projections.Projection).fromWgs84(toNativeMapPos(pos));
            } else {
                nativePos = toNativeMapPos(pos);
            }
            result = new com.carto.vectorelements.Marker(nativePos, style);
        }
        // result['owner'] = new WeakRef(this);
        return result;
    }
    get style() {
        return this.native ? this.native.getStyle() : this.options.style;
    }
    set style(value: MarkerStyleBuilder | com.carto.styles.MarkerStyle) {
        this.options.style = value;
        if (this.native) {
            if (value instanceof MarkerStyleBuilder) {
                this.native.setStyle(value.buildStyle());
            } else {
                this.native.setStyle(value);
            }
        }
    }
    get rotation() {
        if (this.native) {
            return this.native.getRotation();
        }
        return this.options.rotation;
    }
    set rotation(value: number) {
        this.native && this.native.setRotation(value);
    }
}
