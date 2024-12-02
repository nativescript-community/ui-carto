<template>
    <Page ref="page">
        <ActionBar :title="title" backgroundColor="#3F51B5">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
        </ActionBar>
        <GridLayout orientation="vertical" rows="*,50">
            <!-- <BottomSheet :steps="[0, 100]"> -->
            <CartoMap ref="mapView" row="0" zoom="15" width="100%" height="100%" @mapReady="onMapReady" focusPos="45.19199, 5.7190" />
            <!-- <GridLayout ref="bottomSheet" :height="100" /> -->
            <!-- </BottomSheet> -->
        </GridLayout>
    </Page>
</template>

<script lang="ts">
import { HTTPTileDataSource } from '@nativescript-community/ui-carto/datasources/http';
import { RasterTileLayer } from '@nativescript-community/ui-carto/layers/raster';
import { CartoMap, MapEventData } from '@nativescript-community/ui-carto/ui';
import Vue from 'nativescript-vue';
import { Component } from 'vue-property-decorator';

@Component({})
export default class BasicRaster extends Vue {
    title: string;

    destroyed() {
        setTimeout(function () {
            __collect();
        }, 2000);
    }
    onMapReady(e: MapEventData) {
        const mapView = e.object as CartoMap;

        mapView.setFocusPos({ longitude: 6, latitude: 45 }, 0);

        const dataSource = new HTTPTileDataSource({
            minZoom: 0,
            maxZoom: 22,
            subdomains: 'abc',
            url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        });
        const rasterLayer = new RasterTileLayer({
            dataSource,
            zoomLevelBias: 1
        });
        mapView.addLayer(rasterLayer);
    }
}
</script>

<style scoped>
ActionBar {
    background-color: #3f51b5;
    color: #ffffff;
}
</style>
