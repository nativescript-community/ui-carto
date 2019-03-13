import { booleanConverter, CssProperty, Style } from 'tns-core-modules/ui/core/view';
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

export const licenseKeyProperty = new CssProperty<Style, string>({
    name: 'licenseKey',
    cssName: 'license-key'
});
licenseKeyProperty.register(Style);

export const zoomProperty = new CssProperty<Style, number>({
    name: 'zoom',
    cssName: 'zoom',
    valueConverter: v => parseFloat(v)
});
zoomProperty.register(Style);

export const focusPosProperty = new CssProperty<Style, MapPos>({
    name: 'focusPos',
    cssName: 'focus-pos',

    valueConverter: v => {
        // only called for string values!!
        if (typeof v === 'string') {
            const MapPoss = v.split(',').map(parseFloat);
            return { latitude: MapPoss[0], longitude: MapPoss[1] };
        }
        return v;
    }
});
focusPosProperty.register(Style);

export const bearingProperty = new CssProperty<Style, number>({ name: 'bearing', cssName: 'bearing', valueConverter: v => parseFloat(v) });
bearingProperty.register(Style);

export const minZoomProperty = new CssProperty<Style, number>({ name: 'minZoom', cssName: 'min-zoom', valueConverter: v => parseFloat(v) });
minZoomProperty.register(Style);

export const maxZoomProperty = new CssProperty<Style, number>({ name: 'maxZoom', cssName: 'max-zoom', valueConverter: v => parseFloat(v) });
maxZoomProperty.register(Style);

export const tiltProperty = new CssProperty<Style, number>({ name: 'tilt', cssName: 'tilt', valueConverter: v => parseFloat(v) });
tiltProperty.register(Style);

export const restrictedPanningProperty = new CssProperty<Style, boolean>({ name: 'restrictedPanning', cssName: 'restricted-panning', valueConverter: booleanConverter });
restrictedPanningProperty.register(Style);
