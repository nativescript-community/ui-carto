import { nativeProperty } from '../carto.common';
import { Color } from 'tns-core-modules/color/color';
import { nativeCartoImageProperty, nativeColorProperty, nativeEnumProperty } from '../carto';
import { MarkerOptions, MarkerStyleBuilderOptions } from './marker';
import { BasePointVectorElement, BillboardOrientation, BillboardScaling } from './vectorelements';
import { BaseVectorElementStyleBuilder } from './vectorelements.common';

export class MarkerStyleBuilder extends BaseVectorElementStyleBuilder<com.carto.styles.MarkerStyleBuilder, MarkerStyleBuilderOptions> {
    createNative(options: MarkerStyleBuilderOptions) {
        return new com.carto.styles.MarkerStyleBuilder();
    }
    @nativeProperty width: number;
    @nativeProperty scaleWithDPI: boolean;
    @nativeProperty size: number;
    @nativeProperty placementPriority: number;
    @nativeColorProperty color: Color | string;
    @nativeCartoImageProperty bitmap: string;
    @nativeProperty anchorPointX: number;
    @nativeProperty anchorPointY: number;
    @nativeProperty clickSize: number;
    @nativeEnumProperty scalingMode: BillboardScaling;
    @nativeEnumProperty orientationMode: BillboardOrientation;

    _buildStyle: com.carto.styles.MarkerStyle;
    buildStyle() {
        if (!this._buildStyle) {
            this._buildStyle = this.getNative().buildStyle();
        }
        return this._buildStyle;
    }
}

export class Marker extends BasePointVectorElement<com.carto.vectorelements.Marker, MarkerOptions> {
    @nativeProperty rotation: number;
    createNative(options: MarkerOptions) {
        const style: com.carto.styles.MarkerStyle = options.style || options.styleBuilder.buildStyle();
        // console.log('creating marker', options.position, options.projection, options.geometry, options.style);
        let result: com.carto.vectorelements.Marker;
        if (options.geometry) {
            result = new com.carto.vectorelements.Marker(options.geometry as com.carto.geometry.Geometry, style);
        } else {
            const nativePos = this.getNativePos(options.position, options.projection);
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
}
