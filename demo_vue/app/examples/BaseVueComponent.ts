import Vue from 'nativescript-vue';
import { Page } from '@nativescript/core/ui/page';
import { CartoMap } from 'nativescript-carto/ui';

export default class BaseVueComponent extends Vue {
    get page() {
        return (this.$refs.page as any).nativeView as Page;
    }
    get mapView() {
        return (this.$refs.mapView as any).nativeView as CartoMap;
    }
    mounted() {
    }
}
