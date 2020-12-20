<template>
    <Page ref="page">
        <ActionBar :title="title" backgroundColor="#3F51B5">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
        </ActionBar>
        <GridLayout orientation="vertical" rows="*,50">
            <CartoMap ref="mapView" row="0" width="100%" height="100%" @mapReady="onMapReady" />
            <StackLayout row="1" orientation="horizontal" horizontalAlignment="center">
                <Button text="Layer" @tap="onSelectLayer"></Button>
                <Button text="Language" @tap="onSelectLanguage"></Button>
            </StackLayout>
        </GridLayout>
    </Page>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import BaseMaps from './BaseMaps';
import { CartoOnlineVectorTileLayer, ClusteredVectorLayer, VectorLayer, VectorTileEventData } from 'nativescript-carto/layers/vector';
import { CartoMapStyle, MapPos } from 'nativescript-carto/core';
import { CartoMap, MapStableEvent } from 'nativescript-carto/ui';
import { CartoOnlineRasterTileLayer } from 'nativescript-carto/layers/raster';
import { action } from '@nativescript/core/ui/dialogs';
import { Folder, knownFolders, path } from '@nativescript/core/file-system';
import { ClusterElementBuilder } from 'nativescript-carto/layers/cluster';
import { GeoJSONGeometryReader } from 'nativescript-carto/geometry/geojsonreader';
import { MarkerStyleBuilder, Marker } from 'nativescript-carto/vectorelements/marker';
import { VectorElementVector } from 'nativescript-carto/vectorelements';
import { LocalVectorDataSource } from 'nativescript-carto/datasources/vector';
import { Projection } from 'nativescript-carto/projections';
import { Component, Prop } from 'vue-property-decorator';

@Component({})
export default class Example extends BaseMaps {
    @Prop() title: string;
    @Prop() description: string;
    currentLayerType = 'voyager';
    layerTypes = ['voyager', 'positron', 'darkmatter', 'here.normal.day', 'here.satellite.day'];
    languages = ['Local', 'en', 'de', 'es', 'it', 'fr', 'ru'];
    elementsStyles = new Map<number, MarkerStyleBuilder>();

    // get mapView() {
    //     return (this.$refs.mapView as any).nativeView as CartoMap;
    // }
    mapView: CartoMap;
    dataSource;
    currentLayer;

    onMapReady(e) {
        // setTimeout(function() {
        const mapView = (this.mapView = e.object as CartoMap);
        mapView.restrictedPanning = true;
        console.log('map ready!');
        const europe = { longitude: 15.2551, latitude: 54.526 };
        mapView.setFocusPos(europe, 0);
        this.setCurrentLayer(this.currentLayerType);

        mapView.once(MapStableEvent, () => {
            setTimeout(() => {
                this.loadCluster();
            }, 500);
        });

        // this.updateLanguage('fr');
    }

    loadCluster() {
        this.loadGeoJSON().then((json: string) => {
            console.log('read geojson');
            const styleBuilder = new MarkerStyleBuilder({
                size: 14,
                bitmap: '~/assets/images/marker_black.png',
            });
            // mBuilder.bitmap = BitmapUtils.createBitmapFromAndroidBitmap(cBuilder.image)
            // mBuilder.size = 30.0;

            // const style = mBuilder.buildStyle();

            // Read GeoJSON, parse it using SDK GeoJSON parser
            // console.log('test projection', this.mapView.projection, (this.mapView.projection as Projection).getNative())
            const reader = new GeoJSONGeometryReader({
                targetProjection: this.mapView.projection,
            });
            console.log('reader created');
            // reader.targetProjection = contentView?.projection

            // alert("Parsing .geojson to feature collection")
            const features = reader.readFeatureCollection(json);

            const elements = new VectorElementVector();
            const total = Math.min(features.featureCount, 100000);
            console.log('features', total);

            for (let i = 0; i < total; i++) {
                // console.log('feature', i);
                // This data set features point geometry, however, it can also be LineGeometry or PolygonGeometry
                const geometry = features.getGeometry(i);
                // console.log('feature geometry', geometry.getCenterPos().getX());
                elements.add(new Marker({ geometry, styleBuilder, metaData: { index: i + '' } }));
            }
            console.log('elements', elements.size());
            this.initializeClusterLayer();
            (this.dataSource as LocalVectorDataSource).addAll(elements);
            // runOnUiThread {
            //     contentView?.addClusters(elements)
            // }
        });
    }
    findByKey(count) {
        if ((this.elementsStyles as Map<number, any>).has(count)) {
            return this.elementsStyles.get(count)!!;
        }

        return null;
    }
    initializeClusterLayer() {
        const builder = new ClusterElementBuilder({
            buildClusterElement: (position: MapPos, elements: VectorElementVector) => {
                const count = elements ? elements.size() : 0;
                let styleBuilder = this.findByKey(count);

                if (count <= 1.0) {
                    styleBuilder = (elements.getElement(0) as Marker).styleBuilder as any;
                }

                if (styleBuilder == null) {
                    styleBuilder = new MarkerStyleBuilder({
                        size: 30,
                        placementPriority: -count,
                        bitmap: '~/assets/images/marker_black.png',
                    });
                    // builder.bitmap = BitmapUtils.createBitmapFromAndroidBitmap(canvasBitmap)

                    this.elementsStyles.set(count, styleBuilder);
                }
                // console.log('buildClusterElement', pos, count, !!styleBuilder);
                return new Marker({ position, styleBuilder });
            },
            bitmap: '~/assets/images/marker_black.png',
        });
        const dataSource = (this.dataSource = new LocalVectorDataSource({ projection: this.mapView.projection }));
        const layer = new ClusteredVectorLayer({ dataSource, builder, minimumClusterDistance: 50 });
        this.mapView.addLayer(layer);
        // layer.setVectorElementEventListener(this);
    }
    setCurrentLayer(id: string) {
        console.log('setCurrentLayer', id);
        const mapView = this.mapView;
        if (this.currentLayer) {
            mapView.removeLayer(this.currentLayer);
            this.currentLayer = null;
        }
        this.currentLayerType = id;
        switch (id) {
            case 'voyager':
                this.currentLayer = new CartoOnlineVectorTileLayer({
                    style: CartoMapStyle.VOYAGER,
                });
                break;
            case 'positron':
                this.currentLayer = new CartoOnlineVectorTileLayer({
                    style: CartoMapStyle.POSITRON,
                });
                break;
            case 'darkmatter':
                this.currentLayer = new CartoOnlineVectorTileLayer({
                    style: CartoMapStyle.DARKMATTER,
                });
                break;
            default: {
                this.currentLayer = new CartoOnlineRasterTileLayer({
                    source: id + '@2x',
                });
            }
        }
        if (this.currentLayer instanceof CartoOnlineVectorTileLayer) {
            (this.currentLayer as CartoOnlineVectorTileLayer).setVectorTileEventListener(this, mapView.projection);
        }
        mapView.addLayer(this.currentLayer, 0);
    }
    onVectorTileClicked(info: VectorTileEventData) {
        console.log('onVectorTileClicked', info);
        return true;
    }
    onVectorElementClicked(info: VectorTileEventData) {
        console.log('onVectorElementClicked', info);
        return true;
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
            actions: this.layerTypes,
        }).then((result) => {
            result && this.setCurrentLayer(result);
        });
    }
    onSelectLanguage() {
        action({
            title: 'Language',
            message: 'Select Language',
            actions: this.languages,
        }).then((result) => {
            result && this.updateLanguage(result);
        });
    }

    loadGeoJSON() {
        let cfgFile = Folder.fromPath(path.join(knownFolders.currentApp().path, 'assets')).getFile('cities15000.geojson');
        return cfgFile.readText();
    }
}
</script>

<style scoped>
ActionBar {
    background-color: #3f51b5;
    color: #ffffff;
}
</style>
