import { MassifMap } from '@nativescript-community/ui-massifmaps/ui';
import { registerNativeViewElement } from '@nativescript-community/svelte-native/dom';

import BasicRaster from './BasicRaster.svelte';

export function installPlugin() {
    registerNativeViewElement('massifmap', () => MassifMap);
}

export const demos = [{ name: 'Basic Raster', path: 'raster', component: BasicRaster }];
