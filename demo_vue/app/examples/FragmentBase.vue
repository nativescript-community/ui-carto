<template>
    <Page>
        <ActionBar :title="title" backgroundColor="#3F51B5">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
        </ActionBar>
        <Frame>
            <Page ref="page">
                <GridLayout orientation="vertical" rows="*,50">
                    <CartoMap ref="mapView" row="0" width="100%" height="100%" @mapReady="onMapReady" />
                </GridLayout>
            </Page>
        </Frame>
    </Page>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import BaseMaps from './BaseMaps';
import { CartoMap, MapEventData } from 'nativescript-carto/ui';
import { action } from '@nativescript/core/ui/dialogs';
import { Component, Prop } from 'vue-property-decorator';
import { Folder, path, knownFolders } from '@nativescript/core/file-system/file-system';
import * as dialogs from '@nativescript/core/ui/dialogs';
import { CartoOnlineRasterTileLayer, RasterTileLayer } from 'nativescript-carto/layers/raster';
import { CartoOnlineVectorTileLayer, VectorTileEventData, VectorTileLayer, VectorLayer } from 'nativescript-carto/layers/vector';
import { CartoMapStyle, MapPos, nativeVectorToArray } from 'nativescript-carto/core';
import { CartoPackageManager, PackageManagerTileDataSource, PackageStatus, PackageInfo, PackageErrorType } from 'nativescript-carto/packagemanager';
import { OrderedTileDataSource, MergedMBVTTileDataSource } from 'nativescript-carto/datasources';
import { PersistentCacheTileDataSource } from 'nativescript-carto/datasources/cache';
import { CartoOnlineTileDataSource } from 'nativescript-carto/datasources/cartoonline';
import { MBVectorTileDecoder } from 'nativescript-carto/vectortiles';
import { HTTPTileDataSource } from 'nativescript-carto/datasources/http';
import { MarkerStyleBuilder, Marker } from 'nativescript-carto/vectorelements/marker';
import { LocalVectorDataSource } from 'nativescript-carto/datasources/vector';
import { Point, PointStyleBuilder } from 'nativescript-carto/vectorelements/point';
import { LineStyleBuilder, Line, LineJointType, LineEndType } from 'nativescript-carto/vectorelements/line';
import { MapClickedEvent, MapStableEvent, MapReadyEvent, MapMovedEvent } from 'nativescript-carto/ui';
import { Projection } from 'nativescript-carto/projections';
import BaseVueComponent from './BaseVueComponent';
import { setShowDebug, setShowError, setShowInfo, setShowWarn } from 'nativescript-carto/utils';

@Component({})
export default class FragmentBase extends BaseVueComponent {
    @Prop() title: string;
    @Prop() description: string;

    constructor() {
        super();
    }

    mounted() {
        super.mounted();
    }

    get mapView() {
        return (this.$refs.mapView as any).nativeView as CartoMap;
    }

    onMapReady(e: MapEventData) {
        const cartoMap = this.mapView;
        setShowDebug(true);
        setShowInfo(true);
        setShowWarn(true);
        setShowError(true);

        const options = cartoMap.getOptions();
        options.setWatermarkScale(0);
        // options.setWatermarkPadding(toNativeScreenPos({ x: 80, y: 0 }));
        options.setRestrictedPanning(true);
        options.setSeamlessPanning(true);
        options.setEnvelopeThreadPoolSize(2);
        options.setTileThreadPoolSize(2);
        options.setZoomGestures(true);
        options.setRotatable(true);

        cartoMap.setFocusPos({ latitude: 45.2002, longitude: 5.7222 }, 0);
        cartoMap.setZoom(15, 0);

        const cacheFolder = Folder.fromPath(path.join(knownFolders.documents().path, 'carto_cache'));
        const dataSource = new PersistentCacheTileDataSource({
            dataSource: new HTTPTileDataSource({
                minZoom: 1,
                subdomains: 'abc',
                maxZoom: 20,
                url: 'http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
            }),
            capacity: 300 * 1024 * 1024,
            databasePath: path.join(cacheFolder.path, 'cache.db')
        });
        const rasterLayer = new RasterTileLayer({
            zoomLevelBias: 1,
            opacity: 1,
            dataSource
        });
        cartoMap.addLayer(rasterLayer);
    }
}
</script>

<style scoped>
ActionBar {
    background-color: #3f51b5;
    color: #ffffff;
}
</style>
