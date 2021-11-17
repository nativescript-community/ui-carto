import Vue from 'nativescript-vue';
import Pager from '@nativescript-community/ui-carto/vue';

import CustomDev from './CustomDev.vue';

export function installPlugin() {
    Vue.use(Pager);
}

export const demos = [{ name: 'Custom Dev', path: 'customdev', component: CustomDev }];
