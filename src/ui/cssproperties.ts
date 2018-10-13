import { booleanConverter, CssProperty, Style } from 'tns-core-modules/ui/core/view';

export const licenseKeyProperty = new CssProperty<Style, string>({
    name: 'licenseKey',
    cssName: 'license-key'
});
licenseKeyProperty.register(Style);

// export const infoWindowTemplateProperty = new Property<MapViewBase, string | Template>({ name: "infoWindowTemplate" });
// infoWindowTemplateProperty.register(MapViewBase);

// export const infoWindowTemplatesProperty = new Property<MapViewBase, string | Array<KeyedTemplate>>({ name: "infoWindowTemplates", valueChanged: onInfoWindowTemplatesChanged })
// infoWindowTemplatesProperty.register(MapViewBase);

// function onMapPropertyChanged(mapView: Style, oldValue, newValue) {
//     if (!mapView.processingCameraEvent) mapView.updateCamera();
// }

export const zoomProperty = new CssProperty<Style, number>({ name: 'zoom', cssName: 'zoom', valueConverter: parseFloat });
zoomProperty.register(Style);

export const focusPosProperty = new CssProperty<Style, string>({ name: 'focusPos', cssName: 'focus-pos' });
focusPosProperty.register(Style);

export const bearingProperty = new CssProperty<Style, number>({ name: 'bearing', cssName: 'bearing', valueConverter: parseFloat });
bearingProperty.register(Style);

export const minZoomProperty = new CssProperty<Style, number>({ name: 'minZoom', cssName: 'minZoom', valueConverter: parseFloat });
minZoomProperty.register(Style);

export const maxZoomProperty = new CssProperty<Style, number>({ name: 'maxZoom', cssName: 'maxZoom', valueConverter: parseFloat });
maxZoomProperty.register(Style);

export const tiltProperty = new CssProperty<Style, number>({ name: 'tilt', cssName: 'tilt', valueConverter: parseFloat });
tiltProperty.register(Style);

export const animatedProperty = new CssProperty<Style, boolean>({ name: 'animated', cssName: 'animated', valueConverter: booleanConverter });
animatedProperty.register(Style);
