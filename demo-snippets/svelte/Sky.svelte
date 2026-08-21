<script lang="ts">
    /**
     * Sky dome: colours, horizon blend and the sun disc, plus the fog that blends up into
     * it. Since SDK 6 that blend is FogOptions.horizonBlend/horizonAngle, not SkyOptions.
     * Only visible with terrain on and the camera tilted towards the horizon, so the demo
     * opens tilted; the `look` view mode in the settings lets you pitch above it.
     */
    import { FogOptions, SkyOptions } from '@nativescript-community/ui-massifmaps/components';
    import { MassifMap } from '@nativescript-community/ui-massifmaps/ui';
    import MapShell from './common/MapShell.svelte';
    import type { ShellContext } from './common/MapShell.svelte';
    import SettingSegment from './common/SettingSegment.svelte';
    import SettingSlider from './common/SettingSlider.svelte';
    import SettingSwitch from './common/SettingSwitch.svelte';
    import { createBaseMap } from './common/basemap';
    import { standardLayers } from './common/layers';
    import { ALPS } from './common/sources';

    let sky: SkyOptions;
    let fog: FogOptions;
    let status = '';

    const PRESETS = {
        day: { sky: '#4a90d9', horizon: '#bcd9f2', ground: '#6b705c', blend: 0.35 },
        dusk: { sky: '#1b2a4a', horizon: '#e8825a', ground: '#2a2a24', blend: 0.6 },
        night: { sky: '#070a12', horizon: '#131a2c', ground: '#0d0f12', blend: 0.15 }
    };

    let preset: keyof typeof PRESETS = 'day';
    let enabled = true;
    let sunDisc = true;
    let horizonBlend = 0.4;
    let fogBlend = 0.35;
    /** the elevation angle the sky haze is still full at: -1 = from the terrain skyline */
    let fogHorizon = 0.8;

    const baseMap = createBaseMap();
    const layers = [baseMap.spec, ...standardLayers(ALPS)];

    function apply() {
        const p = PRESETS[preset];
        // SkyOptions colour accessors are generated with colorConverter, so a CSS string works
        sky.skyColor = p.sky;
        sky.horizonColor = p.horizon;
        sky.groundColor = p.ground;
        sky.horizonBlend = horizonBlend;
        sky.enabled = enabled;
        // how far the fog keeps going UP into that sky - the map's own FogOptions, not the dome
        if (fog) {
            fog.horizonBlend = fogBlend;
            fog.horizonAngle = fogHorizon;
        }
        sky.sunDiscEnabled = sunDisc;
        status = `${preset} - skyColor ${p.sky}`;
    }

    function setup(map: MassifMap, shell: ShellContext) {
        fog = shell.fog;
        if (fog) {
            fog.enabled = true;
            fog.color = '#b8c6d8';
            fog.rangeStart = 4000;
            fog.rangeEnd = 60000;
        }
        // the map owns one already (map.getSkyOptions()); this replaces it wholesale
        sky = new SkyOptions();
        map.setSkyOptions(sky);
        fogBlend = PRESETS[preset].blend;
        apply();
    }
</script>

<MapShell exaggeration={1.6} focusPos={ALPS} {baseMap} {layers} ownsSky={true} lookUpLimit={60} {setup} {status} terrain3D={true} tilt={40} title="Sky" zoom={11}>
    <stackLayout slot="settings">
        <label class="section-title" text="Sky" />
        <SettingSegment
            label="Preset"
            onChange={(v) => {
                preset = v;
                fogBlend = PRESETS[v].blend;
                apply();
            }}
            options={[
                { value: 'day', label: 'day' },
                { value: 'dusk', label: 'dusk' },
                { value: 'night', label: 'night' }
            ]}
            value={preset} />
        <SettingSwitch checked={enabled} label="Sky dome" onChange={(v) => { enabled = v; apply(); }} />
        <SettingSwitch checked={sunDisc} label="Sun disc" onChange={(v) => { sunDisc = v; apply(); }} />
        <SettingSlider
            label="Horizon blend"
            max={1}
            min={0}
            onChange={(v) => {
                horizonBlend = v;
                apply();
            }}
            step={0.05}
            value={horizonBlend} />
        <SettingSlider
            label="Fog blend"
            max={1}
            min={0}
            onChange={(v) => {
                fogBlend = v;
                apply();
            }}
            step={0.05}
            value={fogBlend} />
        <SettingSlider
            label="Fog horizon"
            max={2}
            min={-1}
            onChange={(v) => {
                fogHorizon = v;
                apply();
            }}
            step={0.1}
            value={fogHorizon} />
    </stackLayout>
</MapShell>
