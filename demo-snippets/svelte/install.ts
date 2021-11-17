import { CartoMap } from '@nativescript-community/ui-carto/ui';
import { registerNativeViewElement } from 'svelte-native/dom';

import BasicRaster from './BasicRaster.svelte';

export function installPlugin() {
    registerNativeViewElement('cartomap', () => CartoMap);
}

export const demos = [{ name: 'Basic Raster', path: 'raster', component: BasicRaster }];
