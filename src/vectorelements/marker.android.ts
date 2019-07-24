import { Color } from 'tns-core-modules/color/color';
import { nativeAndroidEnumProperty, nativeCartoImageProperty, nativeColorProperty } from '../carto';
import { nativeProperty } from '../carto.common';
import { MarkerOptions, MarkerStyleBuilderOptions } from './marker';
import { BasePointVectorElement, BillboardOrientation, BillboardScaling, BillboardStyleBuilder } from './vectorelements';

export class MarkerStyleBuilder extends BillboardStyleBuilder<com.carto.styles.MarkerStyleBuilder, MarkerStyleBuilderOptions> {
    createNative(options: MarkerStyleBuilderOptions) {
        return new com.carto.styles.MarkerStyleBuilder();
    }
    @nativeProperty width: number;
    @nativeProperty hideIfOverlapped: boolean;
    @nativeProperty scaleWithDPI: boolean;
    @nativeProperty size: number;
    @nativeProperty placementPriority: number;
    @nativeColorProperty color: Color | string;
    @nativeCartoImageProperty bitmap: string;
    @nativeProperty anchorPointX: number;
    @nativeProperty anchorPointY: number;
    @nativeProperty clickSize: number;
    @nativeAndroidEnumProperty(com.carto.styles.BillboardScaling, {}) scalingMode: BillboardScaling;
    @nativeAndroidEnumProperty(com.carto.styles.BillboardOrientation, {}) orientationMode: BillboardOrientation;

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
        const style = this.buildStyle();
        // this.log('creating marker', options.position, options.projection, options.geometry, options.style);
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
    buildStyle() {
        let style: com.carto.styles.MarkerStyle;
        const styleBuilder = this.options.styleBuilder;
        if (styleBuilder instanceof com.carto.styles.MarkerStyle) {
            style = styleBuilder;
        } else if (styleBuilder instanceof MarkerStyleBuilder) {
            style = styleBuilder.buildStyle();
        } else if (styleBuilder.hasOwnProperty) {
            style = new MarkerStyleBuilder(styleBuilder as MarkerStyleBuilderOptions).buildStyle();
        }
        return style;
    }
    get styleBuilder() {
        return this.native ? this.native.getStyle() : this.options.styleBuilder;
    }
    set styleBuilder(value: MarkerStyleBuilder | com.carto.styles.MarkerStyle | MarkerStyleBuilderOptions) {
        this.options.styleBuilder = value as any;
        if (this.native) {
            this.native.setStyle(this.buildStyle());
        }
    }
}
