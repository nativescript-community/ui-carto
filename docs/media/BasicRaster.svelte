<script lang="ts">
    /**
     * The smallest useful map: a raster tile layer, a handful of vector elements, and the
     * Options every app touches on the way in. Everything else in the demo set builds on
     * this one.
     */
    import { LocalVectorDataSource } from '@nativescript-community/ui-massifmaps/datasources/vector';
    import { VectorLayer } from '@nativescript-community/ui-massifmaps/layers/vector';
    import { MassifMap } from '@nativescript-community/ui-massifmaps/ui';
    import { Line, LineEndType, LineJointType, LineStyleBuilder } from '@nativescript-community/ui-massifmaps/vectorelements/line';
    import { Marker, MarkerStyleBuilder } from '@nativescript-community/ui-massifmaps/vectorelements/marker';
    import { Point, PointStyleBuilder } from '@nativescript-community/ui-massifmaps/vectorelements/point';
    import MapShell from './common/MapShell.svelte';
    import SettingSlider from './common/SettingSlider.svelte';
    import SettingSwitch from './common/SettingSwitch.svelte';
    import { createBaseMap } from './common/basemap';
    import { satelliteLayer } from './common/layers';
    import { GRENOBLE } from './common/sources';

    let map: MassifMap;
    let status = '';

    let rotatable = true;
    let zoomGestures = true;
    let restrictedPanning = true;
    let tileDrawSize = 256;

    const baseMap = createBaseMap({ mode: 'plain' }, { enabled: false });
    const layers = [
        // the raster is what this demo is about, so it is the one that starts on
        satelliteLayer({ name: 'OSM raster', enabled: true }),
        baseMap.spec,
        {
            id: 'elements',
            name: 'Marker / point / line',
            enabled: true,
            create: (m: MassifMap) => {
                const projection = m.projection;
                const source = new LocalVectorDataSource({ projection });
                source.add(new Marker({ projection, position: { latitude: 45.1887, longitude: 5.7013 }, styleBuilder: new MarkerStyleBuilder({ size: 30, color: '#3cb44b' }) }));
                source.add(new Point({ projection, position: { latitude: 45.1887, longitude: 5.6813 }, styleBuilder: new PointStyleBuilder({ size: 30, color: '#e6194b' }) }));
                source.add(
                    new Line({
                        projection,
                        positions: [
                            { latitude: 45.1187, longitude: 5.6813 },
                            { latitude: 45.1287, longitude: 5.3813 },
                            { latitude: 45.1887, longitude: 5.6813 }
                        ],
                        styleBuilder: new LineStyleBuilder({ width: 6, color: '#4363d8', endType: LineEndType.SQUARE, joinType: LineJointType.ROUND })
                    })
                );
                return new VectorLayer({ dataSource: source, visibleZoomRange: [0, 24] });
            }
        }
    ];

    function applyOptions() {
        const options = map.getOptions();
        options.rotatable = rotatable;
        options.zoomGestures = zoomGestures;
        options.restrictedPanning = restrictedPanning;
        options.tileDrawSize = tileDrawSize;
    }

    function setup(m: MassifMap) {
        map = m;
        const options = m.getOptions();
        options.doubleClickMaxDuration = 0.3;
        options.longClickDuration = 0.5;
        options.kineticRotation = false;
        applyOptions();
        m.on('mapStable', () => (status = `zoom ${m.getZoom().toFixed(2)} - focus ${m.getFocusPos().latitude.toFixed(4)}, ${m.getFocusPos().longitude.toFixed(4)}`));
        status = 'raster tiles + three vector elements';
    }
</script>

<MapShell {baseMap} focusPos={GRENOBLE} {layers} {setup} {status} title="Basic raster" zoom={10}>
    <stackLayout slot="settings">
        <label class="section-title" text="Gestures" />
        <SettingSwitch
            checked={rotatable}
            label="Rotatable"
            onChange={(v) => {
                rotatable = v;
                applyOptions();
            }} />
        <SettingSwitch
            checked={zoomGestures}
            label="Zoom gestures"
            onChange={(v) => {
                zoomGestures = v;
                applyOptions();
            }} />
        <SettingSwitch
            checked={restrictedPanning}
            hint="keeps the map inside its bounds"
            label="Restricted panning"
            onChange={(v) => {
                restrictedPanning = v;
                applyOptions();
            }} />

        <label class="section-title" text="Tiles" />
        <SettingSlider
            format={(v) => `${Math.round(v)} px`}
            label="Tile draw size"
            max={512}
            min={128}
            onChange={(v) => {
                tileDrawSize = Math.round(v);
                applyOptions();
            }}
            step={64}
            value={tileDrawSize} />
    </stackLayout>
</MapShell>
