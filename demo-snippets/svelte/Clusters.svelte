<script lang="ts">
    /**
     * ClusteredVectorLayer + ClusterElementBuilder.
     *
     * ClusterElementBuilder is one of the few classes still using hand-written decorators
     * on purpose: its properties (shape, textSize, bbox, ...) belong to our own native
     * additions subclass, not to the SDK, so the generator does not model it.
     */
    import { LocalVectorDataSource } from '@nativescript-community/ui-massifmaps/datasources/vector';
    import { ClusterElementBuilder } from '@nativescript-community/ui-massifmaps/layers/cluster';
    import { ClusteredVectorLayer } from '@nativescript-community/ui-massifmaps/layers/vector';
    import { MassifMap } from '@nativescript-community/ui-massifmaps/ui';
    import { Marker, MarkerStyleBuilder } from '@nativescript-community/ui-massifmaps/vectorelements/marker';
    import MapShell from './common/MapShell.svelte';
    import type { ShellContext } from './common/MapShell.svelte';
    import SettingSegment from './common/SettingSegment.svelte';
    import SettingSlider from './common/SettingSlider.svelte';
    import SettingSwitch from './common/SettingSwitch.svelte';
    import { createBaseMap } from './common/basemap';
    import { satelliteLayer } from './common/layers';
    import { GRENOBLE } from './common/sources';

    const COUNT = 400;

    let shell: ShellContext;
    let status = '';

    let distance = 100;
    let maximumClusterZoom = 12;
    let animated = true;
    let shape: 'circle' | 'rectangle' = 'circle';

    const baseMap = createBaseMap();
    const layers = [
        baseMap.spec,
        satelliteLayer(),
        {
            id: 'clusters',
            name: 'Clustered markers',
            hint: `${COUNT} markers`,
            enabled: true,
            create: (map: MassifMap) => {
                const source = new LocalVectorDataSource({ projection: map.projection });
                const markerStyle = new MarkerStyleBuilder({ size: 24, color: '#e6194b' });
                for (let i = 0; i < COUNT; i++) {
                    source.add(
                        new Marker({
                            projection: map.projection,
                            position: {
                                latitude: GRENOBLE.latitude + (Math.random() - 0.5) * 0.6,
                                longitude: GRENOBLE.longitude + (Math.random() - 0.5) * 0.9
                            },
                            styleBuilder: markerStyle
                        })
                    );
                }
                return new ClusteredVectorLayer({
                    dataSource: source,
                    visibleZoomRange: [0, 24],
                    builder: new ClusterElementBuilder({ shape, size: 30, color: '#4363d8', textColor: '#ffffff', textSize: 13 }),
                    minimumClusterDistance: distance,
                    maximumClusterZoom,
                    animatedClusters: animated
                });
            }
        }
    ];

    function layer(): ClusteredVectorLayer {
        return shell?.getLayer('clusters');
    }

    function setup(map: MassifMap, ctx: ShellContext) {
        shell = ctx;
        status = `${COUNT} markers clustered`;
    }
</script>

<MapShell {baseMap} focusPos={GRENOBLE} {layers} {setup} {status} title="Clusters" zoom={9}>
    <stackLayout slot="settings">
        <label class="section-title" text="Clustering" />
        <SettingSlider
            format={(v) => `${Math.round(v)} px`}
            label="Minimum cluster distance"
            max={300}
            min={10}
            onChange={(v) => {
                distance = v;
                // migrated accessor: ClusteredVectorLayer.minimumClusterDistance
                layer().minimumClusterDistance = v;
                status = `minimumClusterDistance = ${Math.round(v)}`;
            }}
            step={10}
            value={distance} />
        <SettingSlider
            format={(v) => `z${Math.round(v)}`}
            label="Cluster up to zoom"
            max={20}
            min={4}
            onChange={(v) => {
                maximumClusterZoom = Math.round(v);
                layer().maximumClusterZoom = maximumClusterZoom;
            }}
            step={1}
            value={maximumClusterZoom} />
        <SettingSwitch
            checked={animated}
            label="Animated clusters"
            onChange={(v) => {
                animated = v;
                layer().animatedClusters = v;
            }} />
        <SettingSegment
            label="Cluster shape"
            onChange={(v) => {
                shape = v;
                status = 'shape belongs to the builder - reopen the demo to rebuild it';
            }}
            options={[
                { value: 'circle', label: 'circle' },
                { value: 'rectangle', label: 'rectangle' }
            ]}
            value={shape} />
    </stackLayout>
</MapShell>
