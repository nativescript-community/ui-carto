<script lang="ts">
    /**
     * Celestial layer: sun and moon sprites plus their daily arcs, drawn on the sky dome
     * rather than on the ground - they are placed by DIRECTION, so they stay in the sky
     * while the map pans under them.
     *
     * ANDROID ONLY for now. CelestialLayer / CelestialSprite / CelestialArc are present in
     * the android typings but absent from the iOS metadata we generate from, so the
     * generator classes them as android-only and does not bind them.
     *
     * Switch the view mode to `look` in the settings and drag with one finger: the arc is
     * only visible with the camera pitched above the horizon.
     */
    import { LightOptions, SkyOptions } from '@nativescript-community/ui-massifmaps/components';
    import { MassifMap } from '@nativescript-community/ui-massifmaps/ui';
    import MapShell from './common/MapShell.svelte';
    import type { ShellContext } from './common/MapShell.svelte';
    import SettingSlider from './common/SettingSlider.svelte';
    import SettingSwitch from './common/SettingSwitch.svelte';
    import { createBaseMap } from './common/basemap';
    import { hillshadeLayer, satelliteLayer } from './common/layers';
    import { applyDayCycleHour, today } from './common/sky';
    import { ALPS } from './common/sources';
    import { CelestialArc } from '@nativescript-community/ui-massifmaps/celestial/CelestialArc';
    import { CelestialSprite } from '@nativescript-community/ui-massifmaps/celestial/CelestialSprite';

    let map: MassifMap;
    let sky: SkyOptions;
    let light: LightOptions;
    let sun: any;
    let moon: any;
    let sunArc: any;
    let status = '';

    const date = today();
    let hour = 10;
    let showArc = true;
    let showMoon = true;

    const baseMap = createBaseMap();
    const layers = [
        baseMap.spec,
        satelliteLayer(),
        hillshadeLayer(),
        {
            id: 'celestial',
            name: 'Celestial layer (android)',
            hint: 'sun, moon and the sun arc on the sky dome',
            enabled: true,
            create: () => {
                if (!__ANDROID__) {
                    return null;
                }
                const layer = new com.massifmaps.layers.CelestialLayer();
                layer.setPostProcessed(false);

                sun = new CelestialSprite();
                sun.setAngularSize(4);
                sun.setSoftness(0.35);
                sun.setColor(new com.massifmaps.graphics.Color(255, 244, 214, 255));
                sun.setVisible(true);

                moon = new CelestialSprite();
                moon.setAngularSize(3);
                moon.setSoftness(0.4);
                moon.setColor(new com.massifmaps.graphics.Color(230, 230, 245, 255));
                moon.setVisible(showMoon);

                sunArc = new CelestialArc();
                sunArc.setWidth(2);
                sunArc.setClickRadius(2);
                sunArc.setBelowHorizonVisible(false);
                sunArc.setColor(new com.massifmaps.graphics.Color(255, 216, 120, 160));
                sunArc.setDirections(dailyArc());
                sunArc.setVisible(showArc);

                layer.add(sunArc);
                layer.add(sun);
                layer.add(moon);
                return { getNative: () => layer } as any;
            }
        }
    ].filter((spec) => __ANDROID__ || spec.id !== 'celestial');

    /** unit direction of the sun at an hour, in the renderer's east/north/up frame */
    function sunDirection(hourUtc: number) {
        const probe = new LightOptions();
        probe.setSunPositionFromTime(date.year, date.month, date.day, Math.floor(hourUtc), Math.round((hourUtc % 1) * 60), ALPS.latitude, ALPS.longitude);
        const az = (probe.sunAzimuth * Math.PI) / 180;
        const alt = (probe.sunAltitude * Math.PI) / 180;
        const cosAlt = Math.cos(alt);
        return [cosAlt * Math.sin(az), cosAlt * Math.cos(az), Math.sin(alt)];
    }

    function dailyArc() {
        const dirs = new com.massifmaps.core.DoubleVector();
        for (let h = 0; h <= 24; h += 0.5) {
            const [x, y, z] = sunDirection(h);
            dirs.add(x);
            dirs.add(y);
            dirs.add(z);
        }
        return dirs;
    }

    function setHour(value: number) {
        hour = value;
        applyDayCycleHour(light, sky, hour, ALPS.latitude, ALPS.longitude, date);
        if (sun) {
            const [x, y, z] = sunDirection(hour);
            sun.setDirection(x, y, z);
            const [mx, my, mz] = sunDirection((hour + 12.7) % 24);
            moon.setDirection(mx, my, mz);
        }
        status = `${String(Math.floor(hour)).padStart(2, '0')}:00 UTC - sun altitude ${light.sunAltitude.toFixed(1)}deg`;
    }

    function setup(m: MassifMap, shell: ShellContext) {
        map = m;
        sky = new SkyOptions();
        sky.enabled = true;
        m.setSkyOptions(sky);
        light = new LightOptions();
        light.terrainLightingEnabled = true;
        m.setLightOptions(light);
        setHour(hour);
        if (!__ANDROID__) {
            status = 'android only - CelestialLayer has no iOS binding yet';
        }
    }
</script>

<MapShell {baseMap} exaggeration={1.4} focusPos={ALPS} {layers} lookUpLimit={90} ownsSky={true} {setup} {status} terrain3D={true} tilt={20} title="Celestial (android)" viewMode="look" zoom={11}>
    <stackLayout slot="settings">
        <label class="section-title" text="Sky objects" />
        <SettingSlider format={(v) => `${String(Math.floor(v)).padStart(2, '0')}:00 UTC`} label="Hour" max={24} min={0} onChange={setHour} step={0.5} value={hour} />
        <SettingSwitch
            checked={showArc}
            label="Sun arc"
            onChange={(v) => {
                showArc = v;
                sunArc?.setVisible(v);
            }} />
        <SettingSwitch
            checked={showMoon}
            label="Moon"
            onChange={(v) => {
                showMoon = v;
                moon?.setVisible(v);
            }} />
    </stackLayout>
</MapShell>
