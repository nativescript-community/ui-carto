import Vue from 'nativescript-vue';
import Pager from '@nativescript-community/ui-massifmaps/vue';

import BasicRaster from './BasicRaster.vue';
export function installPlugin() {
    Vue.use(Pager);
}

export const demos = [{ name: 'Basic Raster', path: 'basicraster', component: BasicRaster }];
