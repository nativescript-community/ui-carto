<script lang="ts">
    /**
     * 3D terrain and fog.
     *
     * Every knob this demo is about now lives in the shell's shared TERRAIN and VIEW
     * DISTANCE AND FOG sections, because in the native demo they are global too - the mesh,
     * the drape passes and the view distance apply to whatever layers happen to be on. What
     * is left here is the demonstration itself: the terrain coming in as an ANIMATION
     * rather than a pop, which is a thing the app does, not the SDK.
     */
    import { TerrainOptions } from '@nativescript-community/ui-massifmaps/components';
    import { MassifMap } from '@nativescript-community/ui-massifmaps/ui';
    import MapShell from './common/MapShell.svelte';
    import type { ShellContext } from './common/MapShell.svelte';
    import SettingSlider from './common/SettingSlider.svelte';
    import { createBaseMap } from './common/basemap';
    import { standardLayers } from './common/layers';
    import { ALPS } from './common/sources';

    let terrain: TerrainOptions;
    let status = '';
    let animationMs = 700;
    let target = 1.5;

    const baseMap = createBaseMap();
    const layers = [baseMap.spec, ...standardLayers(ALPS)];

    /**
     * Terrain on/off as an EXPAND animation instead of a pop. Enabling flips the flag first
     * and ramps the exaggeration 0 -> target; disabling ramps to 0 and only then flips the
     * flag, so the tile re-decode a flag change forces happens while the map is already
     * flat and is not seen. Only the exaggeration moves per frame, and that no longer
     * invalidates the tile cache.
     */
    function animateTerrain(enabled: boolean) {
        const from = enabled ? 0 : terrain.exaggeration;
        const to = enabled ? target : 0;
        const start = Date.now();
        if (enabled) {
            terrain.exaggeration = 0;
            terrain.enabled = true;
        }
        const step = () => {
            const t = Math.min(1, (Date.now() - start) / animationMs);
            // decelerate, like the native demo's DecelerateInterpolator
            terrain.exaggeration = from + (to - from) * (1 - (1 - t) * (1 - t));
            if (t < 1) {
                setTimeout(step, 16);
            } else if (!enabled) {
                terrain.enabled = false;
                terrain.exaggeration = target;
            }
        };
        step();
        status = `terrain ${enabled ? 'in' : 'out'} over ${animationMs} ms`;
    }

    function setup(map: MassifMap, shell: ShellContext) {
        terrain = shell.terrain;
        status = 'terrain on - tilt the map to see it';
    }
</script>

<MapShell exaggeration={target} focusPos={ALPS} {baseMap} {layers} {setup} {status} terrain3D={true} tilt={55} title="Terrain + fog" zoom={12}>
    <stackLayout slot="settings">
        <label class="section-title" text="Terrain animation" />
        <SettingSlider format={(v) => `${Math.round(v)} ms`} label="Duration" max={2000} min={0} onChange={(v) => (animationMs = v)} step={100} value={animationMs} />
        <SettingSlider label="Target exaggeration" max={3} min={0.5} onChange={(v) => (target = v)} step={0.1} value={target} />
        <gridLayout columns="*, *" rows="auto">
            <button col="0" text="expand in" on:tap={() => animateTerrain(true)} />
            <button col="1" text="collapse out" on:tap={() => animateTerrain(false)} />
        </gridLayout>
    </stackLayout>
</MapShell>
