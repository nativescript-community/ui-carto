<script lang="ts">
    /**
     * HillshadeRasterTileLayer, including the contour lines it draws itself.
     *
     * This is the class that was migrated by hand: our native additions subclass only adds
     * two async elevation callbacks, so every property below comes from the SDK bindings.
     * The contour* accessors were not exposed by the plugin before the migration - they
     * came for free with the generated binding.
     */
    import { HillshadeMethod, HillshadeRasterTileLayer } from '@nativescript-community/ui-massifmaps/layers/raster';
    import { MassifMap } from '@nativescript-community/ui-massifmaps/ui';
    import MapShell from './common/MapShell.svelte';
    import type { ShellContext } from './common/MapShell.svelte';
    import SettingSegment from './common/SettingSegment.svelte';
    import SettingSlider from './common/SettingSlider.svelte';
    import SettingSwitch from './common/SettingSwitch.svelte';
    import { createBaseMap } from './common/basemap';
    import { standardLayers } from './common/layers';
    import { SLOPES_RASTER_SHADER } from './common/shaders';
    import { ALPS } from './common/sources';

    let map: MassifMap;
    let shell: ShellContext;
    let status = '';

    let method = HillshadeMethod.COMBINED;
    let contrast = 0.6;
    let heightScale = 1;
    let exaggeration = 1;
    /** degrees; 0 = north. The native demo drives the same value from the panel. */
    let illumination = 315;
    /** the light turns with the map instead of staying north-locked */
    let illuminationFollowsMap = false;
    /** replaces the hillshade lighting with steepness bands */
    let slopeShader = false;
    let contours = true;
    let contourInterval = 100;
    let contourWidth = 1;

    const baseMap = createBaseMap({}, { enabled: false });
    // this demo IS the hillshade, so it is the one layer that starts on
    const layers = [baseMap.spec, ...standardLayers(ALPS, { hillshade: { enabled: true } })];

    function layer(): HillshadeRasterTileLayer {
        return shell?.getLayer('hillshade');
    }

    function apply() {
        const l = layer();
        if (!l) {
            return;
        }
        l.hillshadeMethod = method;
        l.contrast = contrast;
        l.heightScale = heightScale;
        l.exaggeration = exaggeration;
        // the direction is a VECTOR, so an angle has to be turned into one; z is the height
        // of the light above the horizon and stays put
        const radians = (illumination * Math.PI) / 180;
        l.illuminationDirection = [Math.sin(radians), Math.cos(radians), 0.5];
        l.illuminationMapRotationEnabled = illuminationFollowsMap;
        // a custom normal-map lighting shader replaces the hillshading entirely
        l.normalMapLightingShader = slopeShader ? SLOPES_RASTER_SHADER : '';
        // all four are generated accessors on the SDK HillshadeRasterTileLayer
        l.contourEnabled = contours;
        l.contourInterval = contourInterval;
        l.contourWidth = contourWidth;
        l.contourColor = '#80000000';
    }

    function elevationHere() {
        // getElevationAsync goes through getElevationCallback, one of the two methods our
        // native additions subclass adds on top of the SDK class
        layer()?.getElevationAsync(map.getFocusPos(), (error, elevation) => {
            status = error ? `elevation failed: ${error}` : `elevation at focus: ${Math.round(elevation)} m`;
        });
    }

    function setup(m: MassifMap, ctx: ShellContext) {
        map = m;
        shell = ctx;
        apply();
        status = 'hillshade + shader-drawn contours';
    }
</script>

<MapShell {baseMap} focusPos={ALPS} {layers} {setup} {status} tilt={0} title="Hillshade + contours" zoom={13}>
    <stackLayout slot="settings">
        <label class="section-title" text="Hillshade" />
        <SettingSegment
            label="Method"
            onChange={(v) => {
                method = v;
                apply();
                status = `hillshadeMethod = ${v}`;
            }}
            options={[
                { value: HillshadeMethod.BASIC, label: 'basic' },
                { value: HillshadeMethod.COMBINED, label: 'combined' },
                { value: HillshadeMethod.IGOR, label: 'igor' }
            ]}
            value={method} />
        <SettingSlider label="Contrast" max={1} min={0} onChange={(v) => { contrast = v; apply(); }} step={0.05} value={contrast} />
        <SettingSlider label="Height scale" max={4} min={0} onChange={(v) => { heightScale = v; apply(); }} step={0.1} value={heightScale} />
        <SettingSlider label="Exaggeration" max={3} min={0} onChange={(v) => { exaggeration = v; apply(); }} step={0.1} value={exaggeration} />
        <SettingSlider
            format={(v) => `${Math.round(v)} deg`}
            label="Illumination"
            max={360}
            min={0}
            onChange={(v) => {
                illumination = v;
                apply();
            }}
            step={5}
            value={illumination} />
        <SettingSwitch
            checked={illuminationFollowsMap}
            hint="the light turns with the map instead of staying north-locked"
            label="Illumination follows map"
            onChange={(v) => {
                illuminationFollowsMap = v;
                apply();
            }} />
        <SettingSwitch
            checked={slopeShader}
            hint="normalMapLightingShader: steepness bands instead of hillshading"
            label="Slope colouring shader"
            onChange={(v) => {
                slopeShader = v;
                apply();
            }} />

        <label class="section-title" text="Contours (drawn by the hillshade shader)" />
        <SettingSwitch checked={contours} label="Contour lines" onChange={(v) => { contours = v; apply(); }} />
        <SettingSlider
            format={(v) => `${Math.round(v)} m`}
            label="Interval"
            max={500}
            min={10}
            onChange={(v) => {
                contourInterval = v;
                apply();
            }}
            step={10}
            value={contourInterval} />
        <SettingSlider label="Line width" max={4} min={0.5} onChange={(v) => { contourWidth = v; apply(); }} step={0.1} value={contourWidth} />

        <button text="elevation at the focus" on:tap={elevationHere} />
    </stackLayout>
</MapShell>
