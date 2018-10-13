import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HTTPTileDataSource } from '~/nativescript-carto/datasources/http';
import { CartoMap, MapClickedEvent, MapEventData, MapIdleEvent, MapMovedEvent, MapReadyEvent, MapStableEvent, setLicenseKey } from '~/nativescript-carto/ui/ui';
import { File, Folder, knownFolders, path } from 'tns-core-modules/file-system';
import { isAndroid } from 'tns-core-modules/platform';
import { Marker, MarkerStyleBuilder } from '~/nativescript-carto/vectorelements/marker';
import { Line, LineEndType, LineJointType, LineStyleBuilder } from '~/nativescript-carto/vectorelements/line';
import { Point, PointStyleBuilder } from '~/nativescript-carto/vectorelements/point';
import { LocalVectorDataSource } from '~/nativescript-carto/datasources/vector';
import { OrderedTileDataSource } from '~/nativescript-carto/datasources/datasource';
import { PersistentCacheTileDataSource } from '~/nativescript-carto/datasources/cache';
import { CartoOnlineTileDataSource } from '~/nativescript-carto/datasources/cartoonline';
import { VectorLayer, VectorTileEventData, VectorTileEventListener, VectorTileLayer } from '~/nativescript-carto/layers/vector';
import { CartoPackageManager, PackageErrorType, PackageManagerTileDataSource, PackageStatus } from '~/nativescript-carto/packagemanager/packagemanager';
import { RasterTileLayer } from '~/nativescript-carto/layers/raster';
import * as dialogs from 'tns-core-modules/ui/dialogs';
import { MBVectorTileDecoder } from '~/nativescript-carto/vectortiles/vectortiles';


// Nativescript demo app keys
setLicenseKey(
    isAndroid
        ? 'XTUN3Q0ZGSjlTY054SWd2N2NpMTlmdW5LZ3B6OG5NWEhBaFFoSXd5RU9TZnlYd0htWm1SUDF2SjBiR25VUUE9PQoKYXBwVG9rZW49NWI5MTdkMTAtOThhYy00YjU2LTk1NGEtMzYxYWFhNzE4ZjQ3CnBhY2thZ2VOYW1lPWNvbS5ha3lsYXMubmF0aXZlc2NyaXB0LmNhcnRvZGVtbwpvbmxpbmVMaWNlbnNlPTEKcHJvZHVjdHM9c2RrLWFuZHJvaWQtNC4qCndhdGVybWFyaz1jYXJ0b2RiCg=='
        : 'XTUMwQ0ZRQ0lvQ0lPaXVqaWV3cHUrVHpuRnBIbFg0UzJPd0lVUENLckxhYnNIR21OZVQ3T3g2dndEU2Q3UkdnPQoKYXBwVG9rZW49ZTkzNGZlZjgtNjg0MS00ZjUzLTk5OTktYWM1NzljNDFlNjk1CmJ1bmRsZUlkZW50aWZpZXI9Y29tLmFreWxhcy5uYXRpdmVzY3JpcHQuY2FydG9kZW1vCm9ubGluZUxpY2Vuc2U9MQpwcm9kdWN0cz1zZGstaW9zLTQuKgp3YXRlcm1hcms9Y2FydG9kYgo='
);

@Component({
    selector: 'home',
    template: `
    <GridLayout orientation="vertical" rows="50, *">
        <StackLayout row="0" orientation="horizontal" horizontalAlignment="center">
            <Button text="Raster" (tap)="onRasterClick()"></Button>
            <Button text="Package" (tap)="onPackageClick()"></Button>
            <Button text="Dowload" (tap)="onDownloadClick()"></Button>
        </StackLayout>
    <CartoMap #mapView row="1"  zoom="12" width="100%" height="100%"></CartoMap>
        </GridLayout>`
})
export class HomeComponent implements OnInit {
    @ViewChild('mapView')
    mapView: ElementRef<CartoMap>;
    packageManager: CartoPackageManager;
    rasterLayer: RasterTileLayer;
    cartoLayer: VectorTileLayer;
    constructor() {}

    getMapView() {
        return this.mapView.nativeElement;
    }
    ngOnInit() {
        this.mapView.nativeElement.on(MapReadyEvent, this.onMapReady);
        this.mapView.nativeElement.on(MapStableEvent, this.onMapStable);
        // this.mapView.nativeElement.on(MapIdleEvent, this.onMapIdle);
        this.mapView.nativeElement.on(MapClickedEvent, this.onMapClicked);
        this.mapView.nativeElement.on(MapMovedEvent, this.onMapMoved);
    }
    onMapStable = (e: MapEventData) => {
        console.log(e.eventName);
        // console.log(this.getMapView().getFocusPos());
    }
    onMapIdle = (e: MapEventData) => {
        console.log(e.eventName);
    }
    onMapClicked = (e: MapEventData) => {
        console.log(e.eventName, e.data);
    }
    onMapMoved = (e: MapEventData) => {
        // console.log('getZoom', (e.object as CartoMap).getZoom());
        // console.log('getBearing', (e.object as CartoMap).getBearing());
        // console.log('getTilt', (e.object as CartoMap).getTilt());
        // console.log('getMetersPerPixel', (e.object as CartoMap).getMetersPerPixel());
        // console.log(e.eventName);
    }
    onVectorTileClicked = (info: VectorTileEventData) => {
        console.log('on vector click', info.featureId, info.featureLayerName, info.pos, info.type, info.featureData);
        return true; // event only for first detected  layer
    }
    onMapReady = (e: MapEventData) => {
        // console.log('onMapReady', e);
        const mapView = this.getMapView();

        const dataFolder = Folder.fromPath(path.join(knownFolders.documents().path, 'packaged'));
        this.packageManager = new CartoPackageManager({
            source: 'carto.streets',
            dataFolder: dataFolder.path,
            listener: this
        });

        this.packageManager.start();
        console.log('packageManager local packages', this.packageManager.getLocalPackages().map(p => p.getName()));
        // console.log('packageManager server packages', this.packageManager.getServerPackages().map(p => p.getName()));
        this.packageManager.startPackageListDownload();

        const cacheFolder = Folder.fromPath(path.join(knownFolders.documents().path, 'carto_cache'));
        const source2 = new OrderedTileDataSource({
            dataSources: [
                new PackageManagerTileDataSource({ packageManager: this.packageManager }),
                new PersistentCacheTileDataSource({
                    dataSource: new CartoOnlineTileDataSource({ source: 'carto.streets' }),
                    databasePath: cacheFolder.path
                })
            ]
        });

        this.cartoLayer = new VectorTileLayer({
            dataSource: source2,
            decoder: new MBVectorTileDecoder({
                zipPath: 'app/carto.zip',
                style: 'voyager'
            }),
            opacity: 0.5
        });
        this.cartoLayer.setVectorTileEventListener(this);
        mapView.addLayer(this.cartoLayer);

        const dataSource = new HTTPTileDataSource({
            minZoom: 0,
            maxZoom: 22,
            autoHD: true,
            url: `http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`
        });
        this.rasterLayer = new RasterTileLayer({
            dataSource,
            opacity: 0.5
        });
        mapView.addLayer(this.rasterLayer);

        // const source = new OrderedDataSource(
        //     new PackageManagerTileDataSource(getOfflineManager()),
        //     new PersistentCacheTileDataSource(
        //             new CartoOnlineTileDataSource("carto.streets"),
        //             AkylasCartoModule.getMapCacheFolder()
        //                     + "/carto.db"));

        // mapView.addLayer(
        //     new CartoOnlineVectorTileLayer({
        //         style: CartoMapStyle.POSITRON,
        //         opacity: 1
        //     })
        // );
        // const layer2 = new VectorTileLayer({
        //     dataSource: new CartoOnlineTileDataSource({
        //         source: "carto.streets"
        //     }),
        //     decoder: new MBVectorTileDecoder({
        //         zipPath: "app/carto.zip",
        //         style: "voyager"
        //     }),
        //     opacity: 0.5
        // });
        // mapView.addLayer(layer2);

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
            style: markerStyleBuilder,
            pos: {
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
            style: pointStyleBuilder,
            pos: {
                latitude: 45.1887104,
                longitude: 5.6813257
            }
        });
        localDataSource.add(point);

        const lineStyleBuilder = new LineStyleBuilder({
            width: 6,
            endType: LineEndType.SQUARE,
            joinType: LineJointType.ROUND,
            color: '#0000ff'
        });
        const line = new Line({
            projection: mapView.projection,
            style: lineStyleBuilder,
            poses: [
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
    onPackageListUpdated = () => {
        console.log('onPackageListUpdated', this.packageManager.getServerPackages().map(p => p.getName()));
    }
    onPackageStatusChanged = (arg1: string, version: number, status: PackageStatus) => {
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
        const packages = this.packageManager.getServerPackages();
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
        this.rasterLayer.opacity = this.rasterLayer.opacity === 0 ? 1 : 0;
    }
    onPackageClick() {
        this.cartoLayer.opacity = this.cartoLayer.opacity === 0 ? 1 : 0;
    }
}
