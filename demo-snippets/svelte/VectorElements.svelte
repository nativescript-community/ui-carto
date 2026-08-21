<script lang="ts">
    /**
     * One of every vector element, so each migrated style builder gets exercised:
     * Marker, Point, Line, Polygon, Text and BalloonPopup.
     *
     * Turn the 3D terrain on in the settings to see the other half of this: a billboard
     * (Marker, Text, BalloonPopup) is anchored to the ground and can be hidden behind a
     * ridge, while a Line or a Polygon is draped onto the surface.
     */
    import { LocalVectorDataSource } from '@nativescript-community/ui-massifmaps/datasources/vector';
    import { VectorLayer } from '@nativescript-community/ui-massifmaps/layers/vector';
    import { MassifMap } from '@nativescript-community/ui-massifmaps/ui';
    import { BalloonPopup, BalloonPopupStyleBuilder } from '@nativescript-community/ui-massifmaps/vectorelements/balloonpopup';
    import { Line, LineEndType, LineJointType, LineStyleBuilder } from '@nativescript-community/ui-massifmaps/vectorelements/line';
    import { Marker, MarkerStyleBuilder } from '@nativescript-community/ui-massifmaps/vectorelements/marker';
    import { Point, PointStyleBuilder } from '@nativescript-community/ui-massifmaps/vectorelements/point';
    import { Polygon, PolygonStyleBuilder } from '@nativescript-community/ui-massifmaps/vectorelements/polygon';
    import { Text, TextStyleBuilder } from '@nativescript-community/ui-massifmaps/vectorelements/text';
    import MapShell from './common/MapShell.svelte';
    import type { ShellContext } from './common/MapShell.svelte';
    import SettingSlider from './common/SettingSlider.svelte';
    import SettingSwitch from './common/SettingSwitch.svelte';
    import { createBaseMap } from './common/basemap';
    import { hillshadeLayer, satelliteLayer } from './common/layers';
    import { GRENOBLE } from './common/sources';

    let source: LocalVectorDataSource;
    let terrain;
    let status = '';

    let occlusion = true;
    let tolerance = 0.02;

    const at = (dLat: number, dLon: number) => ({ latitude: GRENOBLE.latitude + dLat, longitude: GRENOBLE.longitude + dLon });

    const baseMap = createBaseMap();
    const layers = [
        baseMap.spec,
        satelliteLayer(),
        hillshadeLayer(),
        {
            id: 'elements',
            name: 'Vector elements',
            hint: 'one of each, on a LocalVectorDataSource',
            enabled: true,
            create: (map: MassifMap) => {
                const projection = map.projection;
                source = new LocalVectorDataSource({ projection });

                source.add(new Marker({ projection, position: at(0.02, 0), styleBuilder: new MarkerStyleBuilder({ size: 34, color: '#e6194b', clickSize: 44 }) }));
                source.add(new Point({ projection, position: at(0.02, 0.03), styleBuilder: new PointStyleBuilder({ size: 18, color: '#3cb44b' }) }));
                source.add(
                    new Line({
                        projection,
                        positions: [at(-0.02, -0.04), at(0, -0.01), at(0.015, 0.02)],
                        styleBuilder: new LineStyleBuilder({
                            width: 8,
                            color: '#4363d8',
                            // these two keep their hand-written decorator: the native accessors
                            // are getLineJoinType/getLineEndType, not getJoinType/getEndType
                            joinType: LineJointType.ROUND,
                            endType: LineEndType.ROUND
                        })
                    })
                );
                source.add(new Polygon({ projection, positions: [at(-0.04, 0.01), at(-0.04, 0.06), at(-0.01, 0.06), at(-0.01, 0.01)], styleBuilder: new PolygonStyleBuilder({ color: '#80f58231' }) }));
                source.add(
                    new Text({
                        projection,
                        position: at(0.035, -0.02),
                        text: 'TextStyleBuilder',
                        styleBuilder: new TextStyleBuilder({ fontSize: 16, color: '#911eb4', strokeWidth: 2, strokeColor: '#ffffff' })
                    })
                );
                source.add(
                    new BalloonPopup({
                        projection,
                        position: at(-0.005, 0.045),
                        title: 'BalloonPopup',
                        description: 'all style builders are generated bindings now',
                        styleBuilder: new BalloonPopupStyleBuilder({
                            titleFontSize: 14,
                            descriptionFontSize: 11,
                            cornerRadius: 6,
                            color: '#ffffff',
                            strokeColor: '#333333',
                            strokeWidth: 1
                        })
                    })
                );
                return new VectorLayer({ dataSource: source, visibleZoomRange: [0, 24] });
            }
        }
    ];

    function applyOcclusion() {
        terrain.billboardOcclusionEnabled = occlusion;
        terrain.billboardOcclusionTolerance = tolerance;
    }

    function setup(map: MassifMap, shell: ShellContext) {
        terrain = shell.terrain;
        applyOcclusion();
        status = `${source?.getAll().length ?? 0} elements added`;
    }
</script>

<MapShell {baseMap} focusPos={GRENOBLE} {layers} {setup} {status} tilt={45} title="Vector elements" zoom={12}>
    <stackLayout slot="settings">
        <label class="section-title" text="Billboards on terrain" />
        <SettingSwitch checked={occlusion} hint="hide a billboard sitting behind a ridge" label="Occlusion" onChange={(v) => { occlusion = v; applyOcclusion(); }} />
        <SettingSlider
            label="Occlusion tolerance"
            max={0.5}
            min={0}
            onChange={(v) => {
                tolerance = v;
                applyOcclusion();
            }}
            step={0.01}
            value={tolerance} />
    </stackLayout>
</MapShell>
