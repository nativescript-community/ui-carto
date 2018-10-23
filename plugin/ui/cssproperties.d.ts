import { CssProperty, Style } from 'tns-core-modules/ui/core/view';
import { MapPos } from '../core/core';
declare module 'tns-core-modules/ui/styling/style' {
    interface Style {
        zoom: number;
        focusPos: MapPos;
        bearing: number;
        minZoom: number;
        maxZoom: number;
        tilt: number;
        restrictedPanning: boolean;
    }
}
export declare const licenseKeyProperty: CssProperty<Style, string>;
export declare const zoomProperty: CssProperty<Style, number>;
export declare const focusPosProperty: CssProperty<Style, MapPos>;
export declare const bearingProperty: CssProperty<Style, number>;
export declare const minZoomProperty: CssProperty<Style, number>;
export declare const maxZoomProperty: CssProperty<Style, number>;
export declare const tiltProperty: CssProperty<Style, number>;
export declare const restrictedPanningProperty: CssProperty<Style, boolean>;
