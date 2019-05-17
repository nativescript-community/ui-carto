<template>
    <Page ref="page">
        <ActionBar :title="title" backgroundColor="#3F51B5">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
        </ActionBar>
        <GridLayout orientation="vertical" rows="*,50">
            <CartoMap ref="mapView" row="0" zoom="5" width="100%" height="100%" @mapReady="onMapReady" />
            <StackLayout row="1" orientation="horizontal" horizontalAlignment="center">
                <Button text="Layer" @tap="onSelectLayer"></Button>
                <Button text="Language" @tap="onSelectLanguage"></Button>
            </StackLayout>
        </GridLayout>
    </Page>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import BaseVueComponent from './BaseVueComponent';
import { CartoOnlineVectorTileLayer, VectorTileEventData, VectorLayer } from 'nativescript-carto/layers/vector';
import { CartoMapStyle, MapPos } from 'nativescript-carto/core/core';
import { CartoMap } from 'nativescript-carto/ui/ui';
import { CartoOnlineRasterTileLayer } from 'nativescript-carto/layers/raster';
import { action } from 'ui/dialogs';
import { LocalVectorDataSource } from 'nativescript-carto/datasources/vector';

import * as Overlays from './OverlayUtils';
import { Component, Prop } from 'vue-property-decorator';

@Component({})
export default class OverlaysExample extends BaseVueComponent {
    @Prop() title: string;
    @Prop() description: string;
    currentLayerType = 'voyager';
    layerTypes = ['voyager', 'positron', 'darkmatter', 'here.normal.day', 'here.satellite.day'];
    languages = ['en', 'de', 'es', 'it', 'fr', 'ru'];
    currentLayer;

    get mapView() {
        return (this.$refs.mapView as any).nativeView as CartoMap;
    }
    onMapReady(e) {
        // setTimeout(function() {
        const mapView = e.object as CartoMap;
        console.log('map ready!');
        const europe = { longitude: 24.662893, latitude: 59.419365 };
        mapView.setFocusPos(europe, 0);
        mapView.setZoom(12, 0);
        this.setCurrentLayer(this.currentLayerType);
        const projection = mapView.projection;
        const source = new LocalVectorDataSource({ projection });

        // Initialize a vector layer with the previous data source
        const vectorLayer = new VectorLayer({
            dataSource: source,
            visibleZoomRange: [10, 24]
        });
        vectorLayer.setVectorElementEventListener(this as any, projection);
        // Add the previous vector layer to the map
        mapView.addLayer(vectorLayer);

        // Add a bunch of vector elements
        // As elements can be shared across platforms, they are in a shared project
        Overlays.addPoint1(source, projection);
        Overlays.addPoint2(source, projection);

        Overlays.addOverlyingLines(mapView, source, projection);

        Overlays.add2DPolygon(source, projection);

        Overlays.addText1(source, projection);
        Overlays.addText2(source, projection);
        Overlays.addText3(source, projection);

        Overlays.addBalloonPopup1(source, projection, '~/assets/images/info.png', '~/assets/images/arrow.png');
        Overlays.addBalloonPopup2(source, projection, '~/assets/images/info.png', '~/assets/images/arrow.png', '~/assets/images/marker.png');
        Overlays.addBalloonPopup3(source, projection);

        Overlays.add3DCar(source, projection);
        Overlays.add3DPolygon(source, projection);

        // Animate map to Tallinn where the objects are
        // this.updateLanguage('fr');
    }
    onVectorTileClicked(info: VectorTileEventData) {
        console.log('onVectorTileClicked', info);
        return true;
    }
    onVectorElementClicked(info: VectorTileEventData) {
        console.log('onVectorElementClicked', info);
        return true;
    }
    setCurrentLayer(id: string) {
        const mapView = this.mapView;
        console.log('setCurrentLayer', id, !!this.currentLayer, !!mapView);
        if (this.currentLayer) {
            if (this.currentLayer instanceof CartoOnlineVectorTileLayer) {
                console.log('clearing listener');
                (this.currentLayer as CartoOnlineVectorTileLayer).setVectorTileEventListener(null);
            }
            mapView.removeLayer(this.currentLayer);
            this.currentLayer = null;
        }
        this.currentLayerType = id;
        console.log('setCurrentLayer2', id);
        switch (id) {
            case 'voyager':
                this.currentLayer = new CartoOnlineVectorTileLayer({
                    style: CartoMapStyle.VOYAGER
                });
                break;
            case 'positron':
                this.currentLayer = new CartoOnlineVectorTileLayer({
                    style: CartoMapStyle.POSITRON
                });
                break;
            case 'darkmatter':
                this.currentLayer = new CartoOnlineVectorTileLayer({
                    style: CartoMapStyle.DARKMATTER
                });
                break;
            default: {
                this.currentLayer = new CartoOnlineRasterTileLayer({
                    source: id + '@2x'
                });
            }
        }
        if (this.currentLayer instanceof CartoOnlineVectorTileLayer) {
            (this.currentLayer as CartoOnlineVectorTileLayer).setVectorTileEventListener(this, mapView.projection);
        }

        mapView.addLayer(this.currentLayer, 0);
    }

    updateLanguage(code: string) {
        if (this.currentLayer == null) {
            return;
        }

        const current = this.currentLayer as CartoOnlineVectorTileLayer;
        const decoder = current.getTileDecoder();
        decoder.setStyleParameter('lang', code);
    }

    onSelectLayer() {
        action({
            title: 'Layer',
            message: 'Select Layer',
            actions: this.layerTypes
        }).then(result => {
            result && this.setCurrentLayer(result);
        });
    }
    onSelectLanguage() {
        action({
            title: 'Language',
            message: 'Select Language',
            actions: this.languages
        }).then(result => {
            result && this.updateLanguage(result);
        });
    }
}
</script>

<style scoped>
ActionBar {
    background-color: #3f51b5;
    color: #ffffff;
}
</style>
