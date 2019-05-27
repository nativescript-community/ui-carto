import { BaseVectorElementStyleBuilder } from './vectorelements.common';
import { Color } from 'tns-core-modules/color/color';
import { nativeCartoImageProperty, nativeColorProperty } from '../carto';
import { MarkerOptions, MarkerStyleBuilderOptions } from './marker';
import { BasePointVectorElement, BillboardOrientation, BillboardScaling, BillboardStyleBuilder } from './vectorelements';
import { nativeProperty } from '../carto.common';

export class MarkerStyleBuilder extends BillboardStyleBuilder<NTMarkerStyleBuilder, MarkerStyleBuilderOptions> {
    createNative(options: MarkerStyleBuilderOptions) {
        return NTMarkerStyleBuilder.alloc().init();
    }
    @nativeProperty width: number;
    @nativeProperty size: number;
    @nativeColorProperty color: Color | string;
    @nativeCartoImageProperty bitmap: string;
    @nativeProperty clickSize: number;
    @nativeProperty scalingMode: BillboardScaling;
    @nativeProperty orientationMode: BillboardOrientation;

    _buildStyle: NTMarkerStyle;
    buildStyle() {
        if (!this._buildStyle) {
            this._buildStyle = this.getNative().buildStyle();
        }
        return this._buildStyle;
    }
}

export class Marker extends BasePointVectorElement<NTMarker, MarkerOptions> {
    @nativeProperty rotation: number;
    createNative(options: MarkerOptions) {
        const style: NTMarkerStyle = options.style || options.styleBuilder.buildStyle();
        let result: NTMarker;
        if (options.geometry) {
            result = NTMarker.alloc().initWithGeometryStyle(options.geometry as NTGeometry, style);
        } else {
            const nativePos = this.getNativePos(options.position, options.projection);
            result = NTMarker.alloc().initWithPosStyle(nativePos, style);
        }
        // result['owner'] = new WeakRef(this);
        return result;
    }
    get style() {
        return this.native ? this.native.getStyle() : this.options.style;
    }
    set style(value: MarkerStyleBuilder | NTMarkerStyle) {
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
