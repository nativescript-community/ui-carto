import { CssProperty } from 'tns-core-modules/ui/core/properties';
import { Style } from 'tns-core-modules/ui/styling/style';
import { GenericMapPos } from 'nativescript-carto/core/core.common';
declare module 'tns-core-modules/ui/styling/style' {
    interface Style {
        zoom: number;
        focusPos: GenericMapPos;
        bearing: number;
        minZoom: number;
        maxZoom: number;
        tilt: number;
        restrictedPanning: boolean;
    }
}
export declare const licenseKeyProperty: CssProperty<Style, string>;
export declare const zoomProperty: CssProperty<Style, number>;
export declare const focusPosProperty: CssProperty<Style, GenericMapPos<import("../core/core.common").DefaultLatLonKeys>>;
export declare const bearingProperty: CssProperty<Style, number>;
export declare const minZoomProperty: CssProperty<Style, number>;
export declare const maxZoomProperty: CssProperty<Style, number>;
export declare const tiltProperty: CssProperty<Style, number>;
export declare const restrictedPanningProperty: CssProperty<Style, boolean>;
