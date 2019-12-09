import Vue from 'nativescript-vue';
import BaseVueComponent from './BaseVueComponent';
import { CartoOnlineVectorTileLayer, VectorTileEventData } from 'nativescript-carto/layers/vector';
import { CartoMapStyle, MapPos } from 'nativescript-carto/core';
import { CartoMap } from 'nativescript-carto/ui';
import { CartoOnlineRasterTileLayer } from 'nativescript-carto/layers/raster';
import { action } from '@nativescript/core/ui/dialogs';
import { Component, Prop } from 'vue-property-decorator';

// @Component({})
export default class BaseMaps extends BaseVueComponent {
    // @Prop() title: string;
    // @Prop() description: string;

    currentLayer;
    currentLayerType = 'voyager';
    layerTypes = ['voyager', 'positron', 'darkmatter', 'here.normal.day', 'here.satellite.day'];
    languages = ['Local', 'en', 'de', 'es', 'it', 'fr', 'ru'];

    get mapView() {
        return (this.$refs.mapView as any).nativeView as CartoMap;
    }

    onMapReady(e) {
        // setTimeout(function() {
        const mapView = e.object as CartoMap;
        console.log('map ready!', this.currentLayerType);

        this.setCurrentLayer(this.currentLayerType);
        const options = mapView.getOptions();
        // options.setWatermarkPadding(toNativeScreenPos({ x: 80, y: 0 }));
        options.setRestrictedPanning(true);
        options.setSeamlessPanning(true);
        options.setEnvelopeThreadPoolSize(2);
        options.setTileThreadPoolSize(2);
        options.setZoomGestures(true);
        options.setRotatable(true);
        // mapView.setFocusPos({ longitude: 6, latitude: 45 }, 0);
        // mapView.setZoom(15, 0);
        // this.updateLanguage('fr');
    }
    onVectorTileClicked(info: VectorTileEventData) {
        console.log('onVectorTileClicked', info);
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

        mapView.addLayer(this.currentLayer);
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
