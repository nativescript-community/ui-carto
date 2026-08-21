<script lang="ts">
    /**
     * Every event the map raises, plus click-type detection and vector element clicks.
     * This is the one to run first when something feels wrong with gestures - and with the
     * view mode in the settings sheet, it is also where the free-roam modes are tried.
     */
    import { LocalVectorDataSource } from '@nativescript-community/ui-massifmaps/datasources/vector';
    import { VectorLayer } from '@nativescript-community/ui-massifmaps/layers/vector';
    import { Marker, MarkerStyleBuilder } from '@nativescript-community/ui-massifmaps/vectorelements/marker';
    import { MassifMap } from '@nativescript-community/ui-massifmaps/ui';
    import MapShell from './common/MapShell.svelte';
    import SettingSwitch from './common/SettingSwitch.svelte';
    import { createBaseMap } from './common/basemap';
    import { satelliteLayer } from './common/layers';
    import { GRENOBLE } from './common/sources';

    let map: MassifMap;
    let log = 'waiting for events';
    let events: string[] = [];
    let logMoves = false;

    const baseMap = createBaseMap();
    const layers = [
        baseMap.spec,
        satelliteLayer(),
        {
            id: 'marker',
            name: 'Marker',
            hint: 'vector element clicks arrive on the LAYER, not on the map',
            enabled: true,
            create: (m: MassifMap) => {
                const source = new LocalVectorDataSource({ projection: m.projection });
                const layer = new VectorLayer({ dataSource: source, visibleZoomRange: [0, 24] });
                layer.setVectorElementEventListener({
                    onVectorElementClicked(info) {
                        push(`element clicked: ${info.clickType} @ ${info.position.latitude.toFixed(4)}`);
                        return true;
                    }
                });
                source.add(new Marker({ projection: m.projection, position: GRENOBLE, styleBuilder: new MarkerStyleBuilder({ size: 34, color: '#e6194b' }) }));
                return layer;
            }
        }
    ];

    function push(line: string) {
        log = line;
        events = [line, ...events].slice(0, 12);
    }

    function setup(m: MassifMap) {
        map = m;
        m.on('mapClicked', (e: any) => push(`clicked (${e.data.clickType}) @ ${e.data.position.latitude.toFixed(4)}, ${e.data.position.longitude.toFixed(4)}`));
        m.on('mapStable', (e: any) => push(`stable (userAction ${e.data.userAction})`));
        m.on('mapIdle', () => push('idle'));
        m.on('mapMoved', (e: any) => logMoves && push(`moved (userAction ${e.data.userAction})`));
        m.on('mapInteraction', (e: any) => {
            if (!logMoves) {
                return;
            }
            const i = e.data.interaction;
            const kinds = [i.isPanAction && 'pan', i.isZoomAction && 'zoom', i.isRotateAction && 'rotate', i.isTiltAction && 'tilt'].filter(Boolean);
            push(`interaction: ${kinds.join('+') || 'none'}`);
        });
    }
</script>

<MapShell {baseMap} focusPos={GRENOBLE} {layers} {setup} status={log} tilt={30} title="Interactions" zoom={12}>
    <stackLayout slot="settings">
        <label class="section-title" text="Event log" />
        <SettingSwitch checked={logMoves} hint="mapMoved and mapInteraction fire on every frame of a gesture" label="Log move events" onChange={(v) => (logMoves = v)} />
        {#each events as event}
            <label class="setting-hint" text={event} textWrap="true" />
        {/each}
    </stackLayout>
</MapShell>
