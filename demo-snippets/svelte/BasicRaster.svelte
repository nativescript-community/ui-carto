<script lang="ts">
    import { HTTPTileDataSource } from '@nativescript-community/ui-carto/datasources/http';
    import { LocalVectorDataSource } from '@nativescript-community/ui-carto/datasources/vector';
    import { RasterTileLayer } from '@nativescript-community/ui-carto/layers/raster';
    import { VectorLayer } from '@nativescript-community/ui-carto/layers/vector';
    import { CartoMap } from '@nativescript-community/ui-carto/ui';
    import { setShowDebug, setShowError, setShowInfo, setShowWarn } from '@nativescript-community/ui-carto/utils';
    import { Line, LineEndType, LineJointType, LineStyleBuilder } from '@nativescript-community/ui-carto/vectorelements/line';
    import { Marker, MarkerStyleBuilder } from '@nativescript-community/ui-carto/vectorelements/marker';
    import { Point, PointStyleBuilder } from '@nativescript-community/ui-carto/vectorelements/point';
    import { goBack } from 'svelte-native';

    let cartoMap: CartoMap;
    let rasterLayer: RasterTileLayer;

    function onMainMapReady(e) {
        cartoMap = e.object as CartoMap;
        setShowDebug(true);
        setShowInfo(true);
        setShowWarn(true);
        setShowError(true);
        cartoMap.setFocusPos({ longitude: 6, latitude: 45 }, 0);
        const dataSource = new HTTPTileDataSource({
            minZoom: 0,
            maxZoom: 22,
            subdomains: 'abc',
            url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        });
        rasterLayer = new RasterTileLayer({
            dataSource,
            zoomLevelBias:1
            // opacity: 0.5
        });
        cartoMap.addLayer(rasterLayer);

        const localDataSource = new LocalVectorDataSource({
            projection: cartoMap.projection
        });
        const vectorLayer = new VectorLayer({
            dataSource: localDataSource,
            visibleZoomRange: [0, 24]
        });
        cartoMap.addLayer(vectorLayer);
        const markerStyleBuilder = new MarkerStyleBuilder({
            size: 30,
            color: '#00FF00'
        });
        const marker = new Marker({
            projection: cartoMap.projection,
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
            projection: cartoMap.projection,
            styleBuilder: pointStyleBuilder,
            position: {
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
            projection: cartoMap.projection,
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
    }
</script>

<page>
    <actionBar title="Basic Pager">
        <navigationButton text="Go back" on:tap={() => goBack()} />
    </actionBar>
    <gridLayout class="page">
        <cartomap zoom="10" on:mapReady={onMainMapReady} />
    </gridLayout>
</page>
