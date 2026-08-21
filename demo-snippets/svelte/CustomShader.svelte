<script lang="ts">
    /**
     * Custom terrain surface shader.
     *
     * `TerrainOptions.setSurfaceShaderSource` replaces the fragment colour of the terrain
     * mesh - it is drawn as an opaque pass UNDER every layer, so a map with no tile layer
     * at all still shows shaded relief. `setSurfaceParameter` / `setSurfaceColorParameter`
     * feed the uniforms it names.
     *
     * Three shaders, all from the native demo: the paper relief of the peak-finder view, a
     * slope ramp, and a hypsometric altitude tint. Turn the base map on in the drawer to
     * see the rule above: the surface disappears wherever a tile layer paints.
     */
    import { TerrainOptions } from '@nativescript-community/ui-massifmaps/components';
    import { MassifMap } from '@nativescript-community/ui-massifmaps/ui';
    import MapShell from './common/MapShell.svelte';
    import type { ShellContext } from './common/MapShell.svelte';
    import SettingSegment from './common/SettingSegment.svelte';
    import SettingSlider from './common/SettingSlider.svelte';
    import { createBaseMap } from './common/basemap';
    import { standardLayers } from './common/layers';
    import { HYPSOMETRIC_SHADER, RELIEF_DEFAULTS, RELIEF_PALETTE, SLOPE_SHADER } from './common/shaders';
    import { RELIEF_SURFACE_SHADER } from './common/shaders';
    import { ALPS } from './common/sources';

    type ShaderName = 'relief' | 'slope' | 'hypsometric';

    let terrain: TerrainOptions;
    let status = '';

    let shader: ShaderName = 'relief';
    let shadeStrength = RELIEF_DEFAULTS.shadeStrength;
    let haze = RELIEF_DEFAULTS.haze;
    let maxSlope = 45;
    let snowLine = 2200;
    let maxElevation = 4000;

    const baseMap = createBaseMap({}, { enabled: false });
    const layers = [baseMap.spec, ...standardLayers(ALPS)];

    function applyShader() {
        if (!terrain) {
            return;
        }
        if (shader === 'relief') {
            terrain.setSurfaceShaderSource(RELIEF_SURFACE_SHADER);
            terrain.setSurfaceColorParameter('uPaperColor', RELIEF_PALETTE.light.paper);
            terrain.setSurfaceColorParameter('uShadeColor', RELIEF_PALETTE.light.shade);
            terrain.setSurfaceParameter('uShadeStrength', shadeStrength);
            terrain.setSurfaceParameter('uAmbient', RELIEF_DEFAULTS.ambient);
            terrain.setSurfaceParameter('uHaze', haze);
            terrain.setSurfaceParameter('uHazeDistance', RELIEF_DEFAULTS.hazeDistance);
            status = 'paper relief - Lambert shading between a paper and a shade colour';
        } else if (shader === 'slope') {
            terrain.setSurfaceShaderSource(SLOPE_SHADER);
            terrain.setSurfaceParameter('uMaxSlope', maxSlope);
            status = `slope ramp - green flat, red at ${Math.round(maxSlope)}deg`;
        } else {
            terrain.setSurfaceShaderSource(HYPSOMETRIC_SHADER);
            terrain.setSurfaceParameter('uMinElevation', 0);
            terrain.setSurfaceParameter('uMaxElevation', maxElevation);
            terrain.setSurfaceParameter('uSnowLine', snowLine);
            terrain.setSurfaceParameter('uShadeStrength', shadeStrength);
            status = `hypsometric tint - snow above ${Math.round(snowLine)} m`;
        }
    }

    function setup(map: MassifMap, shell: ShellContext) {
        terrain = shell.terrain;
        terrain.meshResolution = 96;
        applyShader();
    }
</script>

<MapShell {baseMap} exaggeration={1.6} focusPos={ALPS} {layers} {setup} {status} terrain3D={true} tilt={55} title="Custom terrain shader" zoom={13}>
    <stackLayout slot="settings">
        <label class="section-title" text="Surface shader" />
        <SettingSegment
            onChange={(v) => {
                shader = v;
                applyShader();
            }}
            options={[
                { value: 'relief', label: 'relief' },
                { value: 'slope', label: 'slope' },
                { value: 'hypsometric', label: 'hypso' }
            ]}
            value={shader} />

        {#if shader === 'relief' || shader === 'hypsometric'}
            <SettingSlider
                label="Shade strength"
                max={1}
                min={0}
                onChange={(v) => {
                    shadeStrength = v;
                    applyShader();
                }}
                step={0.05}
                value={shadeStrength} />
        {/if}
        {#if shader === 'relief'}
            <SettingSlider
                label="Distance haze"
                max={1}
                min={0}
                onChange={(v) => {
                    haze = v;
                    applyShader();
                }}
                step={0.05}
                value={haze} />
        {/if}
        {#if shader === 'slope'}
            <SettingSlider
                format={(v) => `${Math.round(v)}deg`}
                label="Red at"
                max={70}
                min={20}
                onChange={(v) => {
                    maxSlope = v;
                    applyShader();
                }}
                step={1}
                value={maxSlope} />
        {/if}
        {#if shader === 'hypsometric'}
            <SettingSlider
                format={(v) => `${Math.round(v)} m`}
                label="Snow line"
                max={4000}
                min={500}
                onChange={(v) => {
                    snowLine = v;
                    applyShader();
                }}
                step={50}
                value={snowLine} />
            <SettingSlider
                format={(v) => `${Math.round(v)} m`}
                label="Ramp top"
                max={5000}
                min={1000}
                onChange={(v) => {
                    maxElevation = v;
                    applyShader();
                }}
                step={100}
                value={maxElevation} />
        {/if}
    </stackLayout>
</MapShell>
