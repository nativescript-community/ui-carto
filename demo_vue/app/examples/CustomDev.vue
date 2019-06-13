<template>
    <Page ref="page">
        <ActionBar :title="title" backgroundColor="#3F51B5">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
        </ActionBar>
        <GridLayout orientation="vertical" rows="*,50">
            <CartoMap ref="mapView" row="0" zoom="15" width="100%" height="100%" @mapReady="onMapReady" focusPos="45.19199, 5.7190" />
            <StackLayout row="1" orientation="horizontal" horizontalAlignment="center">
                <!-- <Button text="Layer" @tap="onSelectLayer"></Button> -->
                <!-- <Button text="Language" @tap="onSelectLanguage"></Button> -->
                <Button text="Raster" @tap="onRasterClick"></Button>
                <Button text="Package" @tap="onPackageClick"></Button>
                <Button text="Dowload" @tap="onDownloadClick"></Button>
            </StackLayout>
        </GridLayout>
    </Page>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import BaseMaps from './BaseMaps';
import { CartoMap, MapEventData } from 'nativescript-carto/ui/ui';
import { action } from 'ui/dialogs';
import { Component, Prop } from 'vue-property-decorator';
import { Folder, path, knownFolders } from 'tns-core-modules/file-system/file-system';
import * as dialogs from 'tns-core-modules/ui/dialogs';
import { CartoOnlineRasterTileLayer, RasterTileLayer } from 'nativescript-carto/layers/raster';
import { CartoOnlineVectorTileLayer, VectorTileEventData, VectorTileLayer, VectorLayer } from 'nativescript-carto/layers/vector';
import { CartoMapStyle, MapPos, nativeVectorToArray } from 'nativescript-carto/core/core';
import { CartoPackageManager, PackageManagerTileDataSource, PackageStatus, PackageInfo, PackageErrorType } from 'nativescript-carto/packagemanager/packagemanager';
import { OrderedTileDataSource, MergedMBVTTileDataSource } from 'nativescript-carto/datasources/datasource';
import { PersistentCacheTileDataSource } from 'nativescript-carto/datasources/cache';
import { CartoOnlineTileDataSource } from 'nativescript-carto/datasources/cartoonline';
import { MBVectorTileDecoder } from 'nativescript-carto/vectortiles/vectortiles';
import { HTTPTileDataSource } from 'nativescript-carto/datasources/http';
import { MarkerStyleBuilder, Marker } from 'nativescript-carto/vectorelements/marker';
import { LocalVectorDataSource } from 'nativescript-carto/datasources/vector';
import { Point, PointStyleBuilder } from 'nativescript-carto/vectorelements/point';
import { LineStyleBuilder, Line, LineJointType, LineEndType } from 'nativescript-carto/vectorelements/line';
import { MapClickedEvent, MapStableEvent, MapReadyEvent, MapMovedEvent } from 'nativescript-carto/ui/ui';
import { Projection } from 'nativescript-carto/projections/projection';
import BaseVueComponent from './BaseVueComponent';

@Component({})
export default class Example extends BaseMaps {
    @Prop() title: string;
    @Prop() description: string;

    constructor() {
        super();
           console.log('constructor');
 }

    mounted() {
        console.log('mounted');
        super.mounted();
    }
    // currentLayer
    // currentLayerType = 'voyager'
    // layerTypes = ['voyager', 'positron', 'darkmatter', 'here.normal.day', 'here.satellite.day'];
    // languages =['Local', 'en', 'de', 'es', 'it', 'fr', 'ru'];
    // mapView: CartoMap;
    packageManager: CartoPackageManager;
    rasterLayer: RasterTileLayer;
    cartoLayer: VectorTileLayer;

    get mapView() {
        return (this.$refs.mapView as any).nativeView as CartoMap;
    }

    onMapStable = (e: MapEventData) => {
        // console.log(e.eventName);
        // console.log(this.getMapView().getFocusPos());
    };
    onMapIdle = (e: MapEventData) => {
        console.log(e.eventName);
    };
    onMapClicked = (e: MapEventData) => {
        console.log(e.eventName, e.data);
    };
    onMapMoved = (e: MapEventData) => {
        const map = (e.object as CartoMap)
        // console.log('zoom', map.zoom);
        // console.log('bearing', map.bearing);
        // console.log('tilt', map.tilt);
        // console.log('focusPos', map.focusPos);
    };
    onVectorTileClicked = (info: VectorTileEventData) => {
        console.log('on vector click', info.featureId, info.featureLayerName, info.position);
        return true; // event only for first detected  layer
    };
    mapProjection: Projection
    onMapReady(e: MapEventData) {
        console.log('onMapReady');
        const mapView = this.mapView;
        this.mapProjection = mapView.projection;

        mapView.on(MapReadyEvent, this.onMapReady);
        mapView.on(MapStableEvent, this.onMapStable);
        // this.mapView.nativeElement.on(MapIdleEvent, this.onMapIdle);
        mapView.on(MapClickedEvent, this.onMapClicked);
        mapView.on(MapMovedEvent, this.onMapMoved);

        // const dataFolder = Folder.fromPath(path.join(knownFolders.documents().path, 'packaged'));
        // this.packageManager = new CartoPackageManager({
        //     source: 'carto.streets',
        //     dataFolder: dataFolder.path,
        //     listener: this
        // });

        // this.packageManager.start();
        // console.log('packageManager local packages', this.packageManager.getLocalPackages().size());
        // console.log('packageManager server packages', this.packageManager.getServerPackages().map(p => p.getName()));
        // this.packageManager.startPackageListDownload();

        const cacheFolder = Folder.fromPath(path.join(knownFolders.documents().path, 'carto_cache'));
        // const source2 = new OrderedTileDataSource({
        //     dataSources: [
        //         new PackageManagerTileDataSource({ packageManager: this.packageManager }),
        //         new PersistentCacheTileDataSource({
        //             dataSource: new CartoOnlineTileDataSource({ source: 'carto.streets' }),
            // databasePath: path.join(cacheFolder.path, 'source1')
        //         })
        //     ]
        // });
        const source2 = new PersistentCacheTileDataSource({
            dataSource: new MergedMBVTTileDataSource({
                dataSources: [
                    new HTTPTileDataSource({
                        minZoom: 0,
                        maxZoom: 14,
                        httpHeaders: {
                            Referer: 'app://com.akylas.nativescript.cartodemo'
                        },
                        url: `http://tiles.basemaps.cartocdn.com/vectortiles/carto.streets/v1/{z}/{x}/{y}.mvt?appToken=e934fef8-6841-4f53-9999-ac579c41e695`
                    }),
                    new HTTPTileDataSource({
                        minZoom: 0,
                        maxZoom: 14,
                        url: `https://a.tiles.mapbox.com/v4/mapbox.mapbox-terrain-v2/{zoom}/{x}/{y}.vector.pbf?access_token=pk.eyJ1IjoiYWt5bGFzIiwiYSI6IkVJVFl2OXMifQ.TGtrEmByO3-99hA0EI44Ew`
                    })
                ]
            }),
            databasePath: path.join(cacheFolder.path, 'source2')
        }); 

        try {
            this.cartoLayer = new VectorTileLayer({
                dataSource: source2,
                decoder: new MBVectorTileDecoder({
                    zipPath: '~/assets/cartostyles-v1.zip',
                    style: 'voyager',
                    liveReload: true
                }),
                opacity: 1
            });
            this.cartoLayer.setVectorTileEventListener(this, this.mapProjection);
            mapView.addLayer(this.cartoLayer);
        } catch(err) {
            alert(err);
        }
        

        // const dataSource1 = new HTTPTileDataSource({
        //     minZoom: 0,
        //     maxZoom: 22,
        //     autoHD: false,
        //     httpHeaders:{
        //         Referer: 'app://com.akylas.nativescript.cartodemo'
        //     },
        //     url: `http://tiles.basemaps.cartocdn.com/vectortiles/carto.streets/v1/{z}/{x}/{y}.mvt?appToken=e934fef8-6841-4f53-9999-ac579c41e695`
        // });
        // const testLayer = new VectorTileLayer({
        //     dataSource: dataSource1,
        //     decoder: new MBVectorTileDecoder({
        //         dirPath: '~/assets/bright',
        //         style: 'voyager'
        //     }),
        //     opacity: 1
        // });
        // mapView.addLayer(testLayer);

        // const dataSource = new HTTPTileDataSource({
        //     minZoom: 0,
        //     maxZoom: 22,
        //     subdomains: 'abc',
        //     url: `http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`
        // });
        // this.rasterLayer = new RasterTileLayer({
        //     dataSource,
        //     opacity: 0.5
        // });
        // mapView.addLayer(this.rasterLayer);

        const localDataSource = new LocalVectorDataSource({
            projection: mapView.projection
        });
        const vectorLayer = new VectorLayer({
            dataSource: localDataSource,
            visibleZoomRange: [0, 24]
        });
        mapView.addLayer(vectorLayer);
        const markerStyleBuilder = new MarkerStyleBuilder({
            size: 30,
            color: '#00FF00'
        });
        const marker = new Marker({
            projection: mapView.projection,
            styleBuilder: markerStyleBuilder,
            position: {
                latitude: 45.1887104,
                longitude: 5.7013257
            }
        });
        localDataSource.add(marker);

        const pointStyleBuilder = new PointStyleBuilder({
            size: 30,
            color: '#ff0000'
        });
        const point = new Point({
            projection: mapView.projection,
            styleBuilder: pointStyleBuilder,
            position: {
                latitude: 45.1887104,
                longitude: 5.6813257
            }
        });
        localDataSource.add(point);

        const lineStyleBuilder = new LineStyleBuilder({
            width: 6,
            lineEndType: LineEndType.SQUARE,
            lineJoinType: LineJointType.ROUND,
            color: '#0000ff'
        });
        const line = new Line({
            projection: mapView.projection,
            styleBuilder: lineStyleBuilder,
            positions: [
                {
                    latitude: 45.1187104,
                    longitude: 5.6813257
                },
                {
                    latitude: 45.1287104,
                    longitude: 5.3813257
                },
                {
                    latitude: 45.1887104,
                    longitude: 5.6813257
                }
            ]
        });
        localDataSource.add(line);

        // console.log("layer2 opacity", layer2.opacity);
    }
    onPackageListUpdated() {
        console.log('onPackageListUpdated', this.packageManager.getServerPackages().size());
    }
    onPackageStatusChanged(arg1: string, version: number, status: PackageStatus) {
        console.log('onPackageStatusChanged', arg1, version, status);
    }

    onPackageCancelled(id: string, version: number): void {
        console.log('onPackageCancelled', id, version);
    }

    onPackageFailed(id: string, version: number, errorType: PackageErrorType): void {
        console.log('onPackageFailed', id, version, errorType);
    }

    onPackageListFailed(): void {
        console.log('onPackageListFailed');
    }

    onPackageUpdated(id: string, version: number): void {
        console.log('onPackageUpdated', id, version);
    }

    onDownloadClick() {
        const packages = nativeVectorToArray<PackageInfo>(this.packageManager.getServerPackages());
        const list = packages.map(p => p.getName()).sort();
        dialogs
            .action({
                message: 'Download',
                cancelButtonText: 'Cancel',
                actions: list
            })
            .then(selected => {
                const packageIndex = packages.findIndex(p => p.getName() === selected);
                if (packageIndex !== -1) {
                    const result = this.packageManager.startPackageDownload(packages[packageIndex].getPackageId());
                    console.log('selected', selected, packages[packageIndex].getPackageId(), result);
                }
            });
    }
    onRasterClick() {
        this.rasterLayer.opacity = this.rasterLayer.opacity === 0 ? 0.5 : 0;
    }
    onPackageClick() {
        this.cartoLayer.opacity = this.cartoLayer.opacity === 0 ? 1 : 0;
    }
}
</script>

<style scoped>
ActionBar {
    background-color: #3f51b5;
    color: #ffffff;
}
</style>
