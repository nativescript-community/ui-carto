import Vue from 'nativescript-vue';
import Pager from '@nativescript-community/ui-carto/vue';
import PersistentBottomSheetPlugin from '@nativescript-community/ui-persistent-bottomsheet/vue';

import BasicRaster from './BasicRaster.vue';
export function installPlugin() {
    Vue.use(Pager);
    Vue.use(PersistentBottomSheetPlugin);
}

export const demos = [{ name: 'Basic Raster', path: 'basicraster', component: BasicRaster }];
