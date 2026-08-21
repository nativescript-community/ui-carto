<script lang="ts">
    /**
     * Daylight: the sun placed from a time of day, cast shadows, and the day-cycle sky.
     *
     * The hour slider is the whole demo: it drives LightOptions.setSunPositionFromTime
     * (one of the methods whose ObjC selector is concatenated, so it only works
     * cross-platform because the generated SELECTORS map rewrites it on iOS), and with the
     * day cycle on it also regenerates the SKY shader - sun disc, moon, stars and clouds -
     * so the sky matches the hour instead of staying blue at midnight. That is
     * DemoSky.applyHour of the native demo, ported in common/sky.ts.
     *
     * Azimuth/altitude and the time are two ways of placing the same sun: moving the
     * azimuth slider takes over from the clock until the hour is moved again.
     */
    import { LightOptions, SkyOptions, TerrainOptions } from '@nativescript-community/ui-massifmaps/components';
    import { MassifMap } from '@nativescript-community/ui-massifmaps/ui';
    import MapShell from './common/MapShell.svelte';
    import type { ShellContext } from './common/MapShell.svelte';
    import SettingSlider from './common/SettingSlider.svelte';
    import SettingSwitch from './common/SettingSwitch.svelte';
    import { createBaseMap } from './common/basemap';
    import { standardLayers } from './common/layers';
    import { applyDayCycleHour, clearSkyShader, today } from './common/sky';
    import { ALPS } from './common/sources';

    let map: MassifMap;
    let light: LightOptions;
    let sky: SkyOptions;
    let terrain: TerrainOptions;
    let status = '';

    const date = today();

    let hour = 9;
    let dayCycle = true;
    let shadows = true;
    /** set from the clock, or taken over by the two sliders below */
    let azimuth = 150;
    let altitude = 35;
    let sunIntensity = 1;
    let ambientIntensity = 0.35;
    let shadowStrength = 0.75;
    let shadowSoftness = 1;
    let shadowDistance = 20000;
    let shadowCascades = 3;
    let shadowBias = 1;

    const baseMap = createBaseMap();
    const layers = [baseMap.spec, ...standardLayers(ALPS)];

    function formatHour(h: number) {
        const hh = Math.floor(h);
        const mm = Math.round((h - hh) * 60);
        return `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')} UTC`;
    }

    function applyShadows() {
        if (!light) {
            return;
        }
        light.shadowStrength = shadows ? shadowStrength : 0;
        light.shadowSoftness = shadowSoftness;
        light.shadowDistance = shadowDistance;
        light.shadowCascades = shadowCascades;
        light.shadowBias = shadowBias;
        light.shadowMapSize = 2048;
        light.shadowCasterMargin = 3;
    }

    /** the hour is the master: it places the sun AND, with the day cycle on, the sky */
    function setHour(value: number) {
        hour = value;
        const centre = map ? map.getFocusPos() : ALPS;
        if (dayCycle) {
            applyDayCycleHour(light, sky, hour, centre.latitude, centre.longitude, date);
            // the cycle owns intensity and shadow strength; read them back for the sliders
            sunIntensity = light.sunIntensity;
            ambientIntensity = light.ambientIntensity;
            shadowStrength = light.shadowStrength;
        } else {
            light.setSunPositionFromTime(date.year, date.month, date.day, Math.floor(hour), Math.round((hour % 1) * 60), centre.latitude, centre.longitude);
        }
        if (!shadows) {
            light.shadowStrength = 0;
        }
        azimuth = light.sunAzimuth;
        altitude = light.sunAltitude;
        status = `${formatHour(hour)} - altitude ${altitude.toFixed(1)}deg, azimuth ${azimuth.toFixed(0)}deg`;
    }

    /** azimuth/altitude placed by hand; the sky keeps whatever the last hour gave it */
    function applySunAngles() {
        light.sunAzimuth = azimuth;
        light.sunAltitude = altitude;
        status = `manual sun - altitude ${altitude.toFixed(1)}deg, azimuth ${azimuth.toFixed(0)}deg`;
    }

    function setDayCycle(on: boolean) {
        dayCycle = on;
        if (!on) {
            clearSkyShader(sky);
            status = 'plain sky - the generated day-cycle shader is off';
            return;
        }
        setHour(hour);
    }

    function setup(m: MassifMap, shell: ShellContext) {
        map = m;
        terrain = shell.terrain;
        // the haze, and how far up into the sky it keeps going - one object since SDK 6
        const fog = shell.fog;
        if (fog) {
            fog.enabled = true;
            fog.color = '#b8c6d8';
            fog.rangeStart = 1500;
            fog.rangeEnd = 60000;
            fog.horizonBlend = 12;
            fog.horizonAngle = -1;
        }

        sky = new SkyOptions();
        sky.enabled = true;
        sky.sunDiscEnabled = true;
        m.setSkyOptions(sky);

        light = new LightOptions();
        light.terrainLightingEnabled = true;
        light.sunColor = '#fff6e0';
        m.setLightOptions(light);

        applyShadows();
        setHour(hour);
    }
</script>

<MapShell
    {baseMap}
    exaggeration={1.5}
    focusPos={ALPS}
    {layers}
    ownsSky={true}
    {setup}
    {status}
    terrain3D={true}
    tilt={55}
    title="Daylight + shadows"
    zoom={13}>
    <stackLayout slot="settings">
        <label class="section-title" text="Time of day (today, UTC)" />
        <SettingSlider format={formatHour} label="Hour" max={24} min={0} onChange={setHour} step={0.25} value={hour} />
        <SettingSwitch checked={dayCycle} hint="regenerates the sky shader for the hour: sun, moon, stars, clouds" label="Day cycle sky" onChange={setDayCycle} />

        <label class="section-title" text="Sun" />
        <SettingSlider
            format={(v) => `${Math.round(v)}deg`}
            label="Azimuth"
            max={360}
            min={0}
            onChange={(v) => {
                azimuth = v;
                applySunAngles();
            }}
            step={1}
            value={azimuth} />
        <SettingSlider
            format={(v) => `${Math.round(v)}deg`}
            label="Altitude"
            max={90}
            min={-20}
            onChange={(v) => {
                altitude = v;
                applySunAngles();
            }}
            step={1}
            value={altitude} />
        <SettingSlider
            label="Sun intensity"
            max={2}
            min={0}
            onChange={(v) => {
                sunIntensity = v;
                light.sunIntensity = v;
            }}
            step={0.05}
            value={sunIntensity} />
        <SettingSlider
            label="Ambient intensity"
            max={1}
            min={0}
            onChange={(v) => {
                ambientIntensity = v;
                light.ambientIntensity = v;
            }}
            step={0.05}
            value={ambientIntensity} />

        <label class="section-title" text="Shadows" />
        <SettingSwitch checked={shadows} hint="LightOptions.shadowStrength, 0 = no shadows" label="Cast shadows" onChange={(v) => { shadows = v; applyShadows(); }} />
        <SettingSlider
            label="Strength"
            max={1}
            min={0}
            onChange={(v) => {
                shadowStrength = v;
                applyShadows();
            }}
            step={0.05}
            value={shadowStrength} />
        <SettingSlider
            label="Softness"
            max={4}
            min={0}
            onChange={(v) => {
                shadowSoftness = v;
                applyShadows();
            }}
            step={0.1}
            value={shadowSoftness} />
        <SettingSlider
            format={(v) => `${Math.round(v / 1000)} km`}
            label="Distance"
            max={60000}
            min={0}
            onChange={(v) => {
                shadowDistance = v;
                applyShadows();
            }}
            step={1000}
            value={shadowDistance} />
        <SettingSlider
            format={(v) => String(Math.round(v))}
            label="Cascades"
            max={4}
            min={1}
            onChange={(v) => {
                shadowCascades = Math.round(v);
                applyShadows();
            }}
            step={1}
            value={shadowCascades} />
        <SettingSlider
            label="Bias"
            max={4}
            min={0}
            onChange={(v) => {
                shadowBias = v;
                applyShadows();
            }}
            step={0.1}
            value={shadowBias} />
    </stackLayout>
</MapShell>
